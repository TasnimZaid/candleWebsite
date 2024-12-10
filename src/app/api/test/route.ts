import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/connection';

// GET function to fetch all users
export async function GET(request: NextRequest) {
  try {
    const product = await db('products').select('*');
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}