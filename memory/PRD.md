# TAMR Premium Dates - Product Requirements Document

## Overview
A responsive website for TAMR Premium Dates, a business selling multiple types of premium dates sourced from the Middle East.

## Brand Identity
- **Brand Name:** TAMR Premium Dates
- **Tagline:** "The Best Quality From The Best Source"
- **Established:** 2025
- **Contact Numbers:**
  - +91 7989075490
  - +91 7893760032

## Color Scheme (from pamphlet)
- **Primary Gold:** #D4AF37
- **Cream/Beige:** #F5F5DC, #FFF8DC
- **Brown:** #6B4226, #5C3D0E
- **Accent Green:** For WhatsApp integration

## Date Varieties (10 types)
1. Ajwa (Saudi Arabia) - "King of Dates"
2. Medjoul (Morocco/Jordan) - "Diamond of Dates"
3. Amber (Saudi Arabia) - Golden honey-like sweetness
4. Mabroom (Saudi Arabia) - Elongated and chewy
5. Sukkari (Saudi Arabia) - Exceptionally sweet
6. Kalmi (Saudi Arabia) - Firm yet moist
7. Safawi (Saudi Arabia) - Semi-dry balanced sweetness
8. Mashrook (Saudi Arabia) - Caramel and honey notes
9. Mazafati (Iran) - Soft and fleshy
10. Sugai (Saudi Arabia) - Light and delicate

## Website Features
1. **Navigation** - Fixed header with responsive mobile menu
2. **Hero Section** - Brand showcase with CTAs
3. **Features Section** - Quality, Natural, Delivery, Customer Love
4. **Products Section** - Grid display of all date varieties
5. **Product Modal** - Detailed view with order button
6. **About Section** - Brand story and values
7. **Contact Section** - Phone, WhatsApp, Delivery info
8. **Footer** - Quick links and contact info

## Technical Stack
- **Frontend:** Next.js 14 with React
- **Styling:** Tailwind CSS + shadcn/ui components
- **Backend:** Next.js API Routes
- **Database:** MongoDB (for inquiries)
- **Fonts:** Playfair Display (headings), Poppins (body)

## API Endpoints
- `GET /api/health` - Health check
- `GET /api/dates` - Get all date varieties
- `POST /api/inquiries` - Create customer inquiry
- `GET /api/inquiries` - Get all inquiries (admin)

## Responsive Design
- Desktop: Full layout with side-by-side sections
- Tablet: Adjusted grid layouts
- Mobile: Stacked layout with hamburger menu
