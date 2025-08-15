import { supabase } from './supabase'
import { WaitlistEntry, WaitlistFormData } from './types'
import { emailService } from './email'

export const waitlistService = {
  // Add a new waitlist entry
  async addEntry(data: WaitlistFormData): Promise<{ success: boolean; error?: string; isExisting?: boolean }> {
    try {
      // Check if email already exists
      const { data: existingEntry, error: checkError } = await supabase
        .from('waitlist')
        .select('*')
        .eq('email', data.email)
        .single()

      if (checkError && checkError.code !== 'PGRST116') {
        console.error('Error checking existing email:', checkError)
        return { success: false, error: checkError.message }
      }

      // If email already exists, return success without sending email
      if (existingEntry) {
        return { success: true, isExisting: true }
      }

      // Add new entry
      const { data: entry, error } = await supabase
        .from('waitlist')
        .insert([
          {
            full_name: data.fullName,
            email: data.email,
            marketplace: data.marketplace,
            status: 'pending'
          }
        ])
        .select()
        .single()

      if (error) {
        console.error('Error adding waitlist entry:', error)
        return { success: false, error: error.message }
      }

      // Send welcome email only for new users
      try {
        await emailService.sendWelcomeEmail(data.email, data.fullName, data.marketplace)
      } catch (emailError) {
        console.error('Error sending welcome email:', emailError)
        // Don't fail the entire operation if email fails
      }

      return { success: true, isExisting: false }
    } catch (error) {
      console.error('Unexpected error:', error)
      return { success: false, error: 'An unexpected error occurred' }
    }
  },

  // Check if email exists
  async checkEmailExists(email: string): Promise<{ exists: boolean; error?: string }> {
    try {
      const { data, error } = await supabase
        .from('waitlist')
        .select('email')
        .eq('email', email)
        .single()

      if (error && error.code !== 'PGRST116') {
        console.error('Error checking email:', error)
        return { exists: false, error: error.message }
      }

      return { exists: !!data }
    } catch (error) {
      console.error('Unexpected error checking email:', error)
      return { exists: false, error: 'An unexpected error occurred' }
    }
  },

  // Get waitlist count
  async getCount(): Promise<{ count: number; error?: string }> {
    try {
      const { count, error } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true })

      if (error) {
        console.error('Error getting waitlist count:', error)
        return { count: 0, error: error.message }
      }

      return { count: count || 0 }
    } catch (error) {
      console.error('Unexpected error getting count:', error)
      return { count: 0, error: 'An unexpected error occurred' }
    }
  },

  // Update waitlist entry status (for admin use)
  async updateStatus(email: string, status: 'pending' | 'approved' | 'rejected'): Promise<{ success: boolean; error?: string }> {
    try {
      // Get the entry details first
      const { data: entry, error: fetchError } = await supabase
        .from('waitlist')
        .select('*')
        .eq('email', email)
        .single()

      if (fetchError) {
        console.error('Error fetching waitlist entry:', fetchError)
        return { success: false, error: fetchError.message }
      }

      if (!entry) {
        return { success: false, error: 'Entry not found' }
      }

      // Update the status
      const { error: updateError } = await supabase
        .from('waitlist')
        .update({ status })
        .eq('email', email)

      if (updateError) {
        console.error('Error updating waitlist status:', updateError)
        return { success: false, error: updateError.message }
      }

      // Send status update email
      try {
        if (status === 'approved') {
          await emailService.sendApprovalEmail(email, entry.full_name)
        } else if (status === 'rejected') {
          await emailService.sendRejectionEmail(email, entry.full_name)
        }
      } catch (emailError) {
        console.error('Error sending status update email:', emailError)
        // Don't fail the entire operation if email fails
      }

      return { success: true }
    } catch (error) {
      console.error('Unexpected error updating status:', error)
      return { success: false, error: 'An unexpected error occurred' }
    }
  },

  // Get all waitlist entries (for admin use)
  async getAllEntries(): Promise<{ data: WaitlistEntry[] | null; error?: string }> {
    try {
      const { data, error } = await supabase
        .from('waitlist')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching waitlist entries:', error)
        return { data: null, error: error.message }
      }

      return { data }
    } catch (error) {
      console.error('Unexpected error fetching entries:', error)
      return { data: null, error: 'An unexpected error occurred' }
    }
  }
} 