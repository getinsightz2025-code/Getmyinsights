import { NextRequest, NextResponse } from 'next/server';
import { contactSupportService } from '@/lib/contactSupport';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, data } = body;

    switch (action) {
      case 'addEntry':
        const result = await contactSupportService.addEntry(data);
        return NextResponse.json(result);

      case 'updateStatus':
        const { entryId, status } = data;
        const statusResult = await contactSupportService.updateStatus(entryId, status);
        return NextResponse.json(statusResult);

      case 'getAllEntries':
        const entriesResult = await contactSupportService.getAllEntries();
        return NextResponse.json(entriesResult);

      case 'getStats':
        const statsResult = await contactSupportService.getStats();
        return NextResponse.json({ success: true, stats: statsResult });

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