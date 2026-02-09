import { NextResponse } from 'next/server'
import { v4 as uuidv4 } from 'uuid'
import clientPromise from '@/lib/mongodb'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

async function getDb() {
  const client = await clientPromise
  return client.db(process.env.MONGODB_DB || 'tamr_dates')
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders })
}

export async function GET(request, { params }) {
  try {
    const { path } = await params
    const pathStr = path?.join('/') || ''

    // Health check
    if (pathStr === 'health') {
      return NextResponse.json({ status: 'ok', message: 'TAMR Premium Dates API is running' }, { headers: corsHeaders })
    }

    // Get all date varieties
    if (pathStr === 'dates') {
      const db = await getDb()
      const dates = await db.collection('dates').find({}).toArray()
      return NextResponse.json({ success: true, data: dates }, { headers: corsHeaders })
    }

    // Get all inquiries (admin)
    if (pathStr === 'inquiries') {
      const db = await getDb()
      const inquiries = await db.collection('inquiries').find({}).sort({ createdAt: -1 }).toArray()
      return NextResponse.json({ success: true, data: inquiries }, { headers: corsHeaders })
    }

    return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders })
  } catch (error) {
    console.error('GET error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500, headers: corsHeaders })
  }
}

export async function POST(request, { params }) {
  try {
    const { path } = await params
    const pathStr = path?.join('/') || ''
    const body = await request.json()

    // Create inquiry
    if (pathStr === 'inquiries') {
      const db = await getDb()
      const inquiry = {
        id: uuidv4(),
        name: body.name,
        phone: body.phone,
        email: body.email || '',
        message: body.message,
        dateVariety: body.dateVariety || 'General',
        createdAt: new Date(),
        status: 'pending'
      }
      
      await db.collection('inquiries').insertOne(inquiry)
      return NextResponse.json({ success: true, data: inquiry }, { status: 201, headers: corsHeaders })
    }

    // Seed dates (for initial setup)
    if (pathStr === 'dates/seed') {
      const db = await getDb()
      const defaultDates = [
        { id: uuidv4(), name: 'Ajwa', origin: 'Saudi Arabia', color: 'Dark Brown/Black', description: 'Known as the "King of Dates", prized for its soft texture and rich flavor.' },
        { id: uuidv4(), name: 'Medjoul', origin: 'Morocco/Jordan', color: 'Amber Brown', description: 'Large, succulent dates with caramel-like taste.' },
        { id: uuidv4(), name: 'Amber', origin: 'Saudi Arabia', color: 'Golden Amber', description: 'Golden-hued dates with a delicate honey-like sweetness.' },
        { id: uuidv4(), name: 'Mabroom', origin: 'Saudi Arabia', color: 'Dark Brown', description: 'Elongated and chewy with a subtle sweetness.' },
        { id: uuidv4(), name: 'Sukkari', origin: 'Saudi Arabia', color: 'Light Brown', description: 'Exceptionally sweet with a melt-in-mouth texture.' },
        { id: uuidv4(), name: 'Kalmi', origin: 'Saudi Arabia', color: 'Dark Brown', description: 'Firm yet moist with a rich, earthy flavor profile.' },
        { id: uuidv4(), name: 'Safawi', origin: 'Saudi Arabia', color: 'Black', description: 'Semi-dry dates with a perfect balance of sweetness.' },
        { id: uuidv4(), name: 'Mashrook', origin: 'Saudi Arabia', color: 'Medium Brown', description: 'Unique texture with hints of caramel and honey.' },
        { id: uuidv4(), name: 'Mazafati', origin: 'Iran', color: 'Dark Brown/Black', description: 'Soft and fleshy with intense sweetness.' },
        { id: uuidv4(), name: 'Sugai', origin: 'Saudi Arabia', color: 'Golden Brown', description: 'Light and delicate with a refreshing taste.' }
      ]
      
      await db.collection('dates').deleteMany({})
      await db.collection('dates').insertMany(defaultDates)
      return NextResponse.json({ success: true, message: 'Dates seeded successfully', data: defaultDates }, { headers: corsHeaders })
    }

    return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders })
  } catch (error) {
    console.error('POST error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500, headers: corsHeaders })
  }
}

export async function PUT(request, { params }) {
  try {
    const { path } = await params
    const pathStr = path?.join('/') || ''
    const body = await request.json()

    // Update inquiry status
    if (pathStr.startsWith('inquiries/') && pathStr.split('/').length === 2) {
      const inquiryId = pathStr.split('/')[1]
      const db = await getDb()
      
      const result = await db.collection('inquiries').findOneAndUpdate(
        { id: inquiryId },
        { $set: { status: body.status, updatedAt: new Date() } },
        { returnDocument: 'after' }
      )
      
      if (!result) {
        return NextResponse.json({ error: 'Inquiry not found' }, { status: 404, headers: corsHeaders })
      }
      
      return NextResponse.json({ success: true, data: result }, { headers: corsHeaders })
    }

    return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders })
  } catch (error) {
    console.error('PUT error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500, headers: corsHeaders })
  }
}

export async function DELETE(request, { params }) {
  try {
    const { path } = await params
    const pathStr = path?.join('/') || ''

    // Delete inquiry
    if (pathStr.startsWith('inquiries/') && pathStr.split('/').length === 2) {
      const inquiryId = pathStr.split('/')[1]
      const db = await getDb()
      
      const result = await db.collection('inquiries').deleteOne({ id: inquiryId })
      
      if (result.deletedCount === 0) {
        return NextResponse.json({ error: 'Inquiry not found' }, { status: 404, headers: corsHeaders })
      }
      
      return NextResponse.json({ success: true, message: 'Inquiry deleted' }, { headers: corsHeaders })
    }

    return NextResponse.json({ error: 'Not found' }, { status: 404, headers: corsHeaders })
  } catch (error) {
    console.error('DELETE error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500, headers: corsHeaders })
  }
}
