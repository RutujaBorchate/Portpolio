import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Configure the runtime for Vercel
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Save to database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        data: contact 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving contact:', error);
    
    // Return more detailed error for debugging
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Detailed error:', errorMessage);
    
    return NextResponse.json(
      { 
        error: 'Failed to submit contact form',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  } finally {
    // Disconnect Prisma in serverless environment
    await prisma.$disconnect();
  }
}
