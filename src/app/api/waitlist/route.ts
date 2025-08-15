import { NextRequest, NextResponse } from 'next/server';
import { waitlistService } from '@/lib/waitlist';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, data } = body;

    switch (action) {
      case 'addEntry':
        const result = await waitlistService.addEntry(data);
        return NextResponse.json(result);

      case 'updateStatus':
        const { email, status } = data;
        const statusResult = await waitlistService.updateStatus(email, status);
        return NextResponse.json(statusResult);

      case 'getAllEntries':
        const entriesResult = await waitlistService.getAllEntries();
        return NextResponse.json(entriesResult);

      default:
        return NextResponse.json(
          { success: false, error: 'Invalid action' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');

    switch (action) {
      case 'count':
        const countResult = await waitlistService.getCount();
        return NextResponse.json(countResult);

      case 'checkEmail':
        const email = searchParams.get('email');
        if (!email) {
          return NextResponse.json(
            { success: false, error: 'Email parameter is required' },
            { status: 400 }
          );
        }
        const checkResult = await waitlistService.checkEmailExists(email);
        return NextResponse.json(checkResult);

      default:
        return NextResponse.json(
          { success: false, error: 'Invalid action' },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
} 