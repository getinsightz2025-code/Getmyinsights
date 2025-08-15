import { supabase } from './supabase'
import { ContactSupportEntry, ContactSupportFormData } from './types'

export const contactSupportService = {
  // Add a new contact support entry
  async addEntry(data: ContactSupportFormData): Promise<{ success: boolean; error?: string; ticketId?: string }> {
    try {
      const { data: entry, error } = await supabase
        .from('contact_support')
        .insert([
          {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
            category: data.category,
            priority: data.priority,
            status: 'open'
          }
        ])
        .select()
        .single()

      if (error) {
        console.error('Error adding contact support entry:', error)
        return { success: false, error: error.message }
      }

      return { success: true, ticketId: entry.id }
    } catch (error) {
      console.error('Unexpected error:', error)
      return { success: false, error: 'An unexpected error occurred' }
    }
  },

  // Get all contact support entries (for admin use)
  async getAllEntries(): Promise<{ data: ContactSupportEntry[] | null; error?: string }> {
    try {
      const { data, error } = await supabase
        .from('contact_support')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching contact support entries:', error)
        return { data: null, error: error.message }
      }

      return { data }
    } catch (error) {
      console.error('Unexpected error fetching entries:', error)
      return { data: null, error: 'An unexpected error occurred' }
    }
  },

  // Update contact support entry status
  async updateStatus(entryId: string, status: 'open' | 'in_progress' | 'resolved' | 'closed'): Promise<{ success: boolean; error?: string }> {
    try {
      // Get the entry details first
      const { data: entry, error: fetchError } = await supabase
        .from('contact_support')
        .select('*')
        .eq('id', entryId)
        .single()

      if (fetchError) {
        console.error('Error fetching contact support entry:', fetchError)
        return { success: false, error: fetchError.message }
      }

      if (!entry) {
        return { success: false, error: 'Entry not found' }
      }

      // Update the status
      const { error: updateError } = await supabase
        .from('contact_support')
        .update({ status })
        .eq('id', entryId)

      if (updateError) {
        console.error('Error updating contact support status:', updateError)
        return { success: false, error: updateError.message }
      }

      return { success: true }
    } catch (error) {
      console.error('Unexpected error updating status:', error)
      return { success: false, error: 'An unexpected error occurred' }
    }
  },

  // Get contact support statistics
  async getStats(): Promise<{ total: number; open: number; inProgress: number; resolved: number; closed: number }> {
    try {
      const { data, error } = await supabase
        .from('contact_support')
        .select('status')

      if (error) {
        console.error('Error fetching contact support stats:', error)
        return { total: 0, open: 0, inProgress: 0, resolved: 0, closed: 0 }
      }

      const stats = {
        total: data.length,
        open: data.filter(entry => entry.status === 'open').length,
        inProgress: data.filter(entry => entry.status === 'in_progress').length,
        resolved: data.filter(entry => entry.status === 'resolved').length,
        closed: data.filter(entry => entry.status === 'closed').length
      }

      return stats
    } catch (error) {
      console.error('Unexpected error fetching stats:', error)
      return { total: 0, open: 0, inProgress: 0, resolved: 0, closed: 0 }
    }
  }
} 