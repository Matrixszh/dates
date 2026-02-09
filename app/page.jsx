'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, MapPin, Star, Menu, X, ChevronRight, Leaf, Award, Truck, Heart, Sparkles, Crown } from 'lucide-react'

const LOGO_URL = "https://customer-assets.emergentagent.com/job_dates-marketplace/artifacts/azo7yrsn_Screenshot_2026-02-09_204329-removebg-preview.png"

const dateVarieties = [
  {
    name: 'Ajwa',
    description: 'Known as the "King of Dates", prized for its soft texture and rich flavor. A sacred variety from Madinah.',
    origin: 'Saudi Arabia',
    color: 'Dark Brown/Black',
    image: 'https://images.unsplash.com/photo-1769255484408-3ffada29d567?crop=entropy&cs=srgb&fm=jpg&q=85&w=400',
    premium: true,
  },
  {
    name: 'Medjoul',
    description: 'Large, succulent dates with caramel-like taste. Often called the "Diamond of Dates".',
    origin: 'Morocco/Jordan',
    color: 'Amber Brown',
    image: 'https://images.unsplash.com/photo-1606650368590-11dcf6c7f877?crop=entropy&cs=srgb&fm=jpg&q=85&w=400',
    premium: true,
  },
  {
    name: 'Amber',
    description: 'Golden-hued dates with a delicate honey-like sweetness. Perfect for desserts.',
    origin: 'Saudi Arabia',
    color: 'Golden Amber',
    image: 'https://images.unsplash.com/photo-1769255484739-3437edbb858e?crop=entropy&cs=srgb&fm=jpg&q=85&w=400',
  },
  {
    name: 'Mabroom',
    description: 'Elongated and chewy with a subtle sweetness. A favorite for Ramadan.',
    origin: 'Saudi Arabia',
    color: 'Dark Brown',
    image: 'https://images.unsplash.com/photo-1659432541693-3514f3f82962?crop=entropy&cs=srgb&fm=jpg&q=85&w=400',
  },
  {
    name: 'Sukkari',
    description: 'Exceptionally sweet with a melt-in-mouth texture. Translates to "Sugar" in Arabic.',
    origin: 'Saudi Arabia',
    color: 'Light Brown',
    image: 'https://images.unsplash.com/photo-1679493419304-05a18073dc6a?crop=entropy&cs=srgb&fm=jpg&q=85&w=400',
    premium: true,
  },
  {
    name: 'Kalmi',
    description: 'Firm yet moist with a rich, earthy flavor profile.',
    origin: 'Saudi Arabia',
    color: 'Dark Brown',
    image: 'https://images.unsplash.com/photo-1686983833435-00ac534f2270?crop=entropy&cs=srgb&fm=jpg&q=85&w=400',
  },
  {
    name: 'Safawi',
    description: 'Semi-dry dates with a perfect balance of sweetness. Great for everyday snacking.',
    origin: 'Saudi Arabia',
    color: 'Black',
    image: 'https://images.unsplash.com/photo-1769255484408-3ffada29d567?crop=entropy&cs=srgb&fm=jpg&q=85&w=400',
  },
  {
    name: 'Mashrook',
    description: 'Unique texture with hints of caramel and honey. A connoisseur\'s choice.',
    origin: 'Saudi Arabia',
    color: 'Medium Brown',
    image: 'https://images.unsplash.com/photo-1606650368590-11dcf6c7f877?crop=entropy&cs=srgb&fm=jpg&q=85&w=400',
  },
  {
    name: 'Mazafati',
    description: 'Soft and fleshy with intense sweetness. Known as "Kimia" in some regions.',
    origin: 'Iran',
    color: 'Dark Brown/Black',
    image: 'https://images.unsplash.com/photo-1659432541693-3514f3f82962?crop=entropy&cs=srgb&fm=jpg&q=85&w=400',
  },
  {
    name: 'Sugai',
    description: 'Light and delicate with a refreshing taste. Perfect for tea time.',
    origin: 'Saudi Arabia',
    color: 'Golden Brown',
    image: 'https://images.unsplash.com/photo-1679493419304-05a18073dc6a?crop=entropy&cs=srgb&fm=jpg&q=85&w=400',
  },
]

const features = [
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'Handpicked premium dates with no artificial additives or preservatives.',
    arabic: 'طبيعي',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Sourced from the finest date farms across the Middle East.',
    arabic: 'جودة عالية',
  },
  {
    icon: Truck,
    title: 'Pan-India Delivery',
    description: 'Fresh dates delivered to your doorstep across India.',
    arabic: 'توصيل',
  },
  {
    icon: Heart,
    title: 'Customer Love',
    description: 'Thousands of satisfied customers trust our quality.',
    arabic: 'محبة',
  },
]

// Custom hook for scroll animations
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return [ref, isVisible]
}

// Animated Counter Component
function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [ref, isVisible] = useScrollAnimation()

  useEffect(() => {
    if (!isVisible) return
    
    let startTime = null
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

// Ornate Divider Component
function OrnateDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold-300 to-transparent" />
      <div className="text-gold-400 text-2xl">✦</div>
      <div className="w-3 h-3 rotate-45 border-2 border-gold-400" />
      <div className="text-gold-400 text-2xl">✦</div>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-gold-300 to-transparent" />
    </div>
  )
}

// Arabic Pattern Component
function ArabicPattern({ className = '' }) {
  return (
    <div className={`absolute inset-0 opacity-5 pointer-events-none ${className}`}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="arabicPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
            <circle cx="50" cy="50" r="20" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
            <circle cx="50" cy="50" r="10" fill="none" stroke="#D4AF37" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#arabicPattern)"/>
      </svg>
    </div>
  )
}

// Floating Lantern Component
function FloatingLantern({ className = '', delay = 0 }) {
  return (
    <div 
      className={`absolute pointer-events-none ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <svg className="w-16 h-24 float-animation lantern-glow" viewBox="0 0 64 96" fill="none">
        <path d="M32 0 L36 8 L28 8 Z" fill="#D4AF37"/>
        <rect x="20" y="8" width="24" height="8" rx="2" fill="#D4AF37"/>
        <path d="M16 16 L48 16 L44 80 L20 80 Z" fill="url(#lanternGradient)" stroke="#D4AF37" strokeWidth="2"/>
        <path d="M24 80 L40 80 L38 88 L26 88 Z" fill="#D4AF37"/>
        <defs>
          <linearGradient id="lanternGradient" x1="32" y1="16" x2="32" y2="80">
            <stop offset="0%" stopColor="#FFF8DC" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#FFD700" stopOpacity="0.6"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  
  // Refs for scroll animations
  const [heroRef, heroVisible] = useScrollAnimation()
  const [productsRef, productsVisible] = useScrollAnimation()
  const [aboutRef, aboutVisible] = useScrollAnimation()
  const [contactRef, contactVisible] = useScrollAnimation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100 overflow-x-hidden">
      {/* Floating Decorative Elements */}
      <FloatingLantern className="top-32 left-8 hidden lg:block" delay={0} />
      <FloatingLantern className="top-64 right-12 hidden lg:block" delay={1.5} />
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-cream-100/98 backdrop-blur-lg shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="relative">
                <img 
                  src={LOGO_URL}
                  alt="TAMR Premium Dates"
                  className="h-14 md:h-16 w-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gold-300/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'Our Dates', 'About', 'Contact'].map((item, index) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item === 'Our Dates' ? 'products' : item.toLowerCase())}
                  className="relative text-brown-600 hover:text-gold-500 transition-colors font-medium group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-premium text-white font-semibold px-8 py-5 rounded-full relative overflow-hidden"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Order Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-brown-600 hover:text-gold-500 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-cream-50/98 backdrop-blur-lg border-t border-gold-200 py-6">
            <div className="container mx-auto px-4 flex flex-col gap-4">
              {['Home', 'Our Dates', 'About', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item === 'Our Dates' ? 'products' : item.toLowerCase())}
                  className="text-brown-600 hover:text-gold-500 transition-colors font-medium text-left py-3 border-b border-gold-100"
                >
                  {item}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-premium text-white font-semibold w-full py-6 rounded-full mt-2"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <ArabicPattern />
        
        {/* Animated Background Shapes */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-br from-gold-300/30 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-tl from-gold-300/30 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-200/20 to-transparent rounded-full blur-3xl float-animation" />
        
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div ref={heroRef} className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <div className={`text-center lg:text-left order-2 lg:order-1 ${heroVisible ? '' : 'opacity-0'}`}>
              <div className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gold-100 to-gold-50 rounded-full mb-8 shadow-lg ${heroVisible ? 'fade-in-up' : ''}`}>
                <Crown className="w-4 h-4 text-gold-600" />
                <span className="text-gold-700 text-sm font-semibold tracking-wide">Established 2025</span>
                <Crown className="w-4 h-4 text-gold-600" />
              </div>
              
              <h1 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-6 ${heroVisible ? 'fade-in-up stagger-1' : ''}`}>
                <span className="shimmer-text block" style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}>TAMR</span>
                <span className="text-brown-700 block" style={{ fontFamily: "'Cinzel', serif", fontWeight: 600, letterSpacing: '0.1em' }}>Premium Dates</span>
              </h1>
              
              <div className={`flex items-center justify-center lg:justify-start gap-4 mb-6 ${heroVisible ? 'fade-in-up stagger-2' : ''}`}>
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400" />
                <p className="text-xl md:text-2xl text-gold-600 font-serif italic">
                  The Best Quality From The Best Source
                </p>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-400" />
              </div>
              
              <p className={`text-brown-500 mb-10 max-w-lg mx-auto lg:mx-0 text-lg leading-relaxed ${heroVisible ? 'fade-in-up stagger-3' : ''}`}>
                Discover our exquisite collection of premium dates, carefully sourced from the finest farms across the Middle East. Experience nature&apos;s sweetest treasure.
              </p>
              
              <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ${heroVisible ? 'fade-in-up stagger-4' : ''}`}>
                <Button 
                  onClick={() => scrollToSection('products')}
                  className="btn-premium text-white font-semibold px-10 py-7 text-lg rounded-full shadow-xl"
                >
                  Explore Collection
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-gold-400 text-gold-600 hover:bg-gold-50 font-semibold px-10 py-7 text-lg rounded-full group"
                >
                  <Phone className="mr-2 group-hover:rotate-12 transition-transform" size={22} />
                  Contact Us
                </Button>
              </div>
              
              {/* Stats */}
              <div className={`grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-gold-200 ${heroVisible ? 'fade-in-up stagger-5' : ''}`}>
                {[
                  { value: 10, suffix: '+', label: 'Varieties' },
                  { value: 100, suffix: '%', label: 'Natural' },
                  { value: 1000, suffix: '+', label: 'Happy Customers' },
                ].map((stat, index) => (
                  <div key={index} className="text-center group cursor-default">
                    <div className="text-3xl md:text-4xl font-serif font-bold text-gold-500 group-hover:scale-110 transition-transform">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-brown-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Image */}
            <div className={`order-1 lg:order-2 relative ${heroVisible ? 'fade-in-right stagger-2' : 'opacity-0'}`}>
              <div className="relative w-full max-w-xl mx-auto">
                {/* Decorative Rings */}
                <div className="absolute inset-0 rounded-full border-4 border-gold-300/30 animate-pulse scale-105" />
                <div className="absolute inset-4 rounded-full border-2 border-gold-200/40 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute inset-8 rounded-full border border-gold-100/50 animate-pulse" style={{ animationDelay: '1s' }} />
                
                {/* Main Logo */}
                <div className="relative p-12">
                  <div className="relative gold-glow rounded-full p-4 bg-gradient-to-br from-cream-50 to-cream-100">
                    <img 
                      src={LOGO_URL}
                      alt="TAMR Premium Dates"
                      className="w-full h-auto float-animation"
                    />
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 md:bottom-8 md:right-0 bg-white rounded-2xl shadow-2xl p-5 gold-shadow scale-in">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center pulse-gold">
                      <Star className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-brown-700">Premium Quality</div>
                      <div className="text-xs text-gold-500 font-medium">Certified Fresh</div>
                    </div>
                  </div>
                </div>
                
                {/* Top Badge */}
                <div className="absolute -top-4 -left-4 md:top-8 md:left-0 bg-gradient-to-r from-gold-400 to-gold-500 rounded-2xl shadow-xl p-4 rotate-in">
                  <div className="text-white text-center">
                    <div className="text-xs font-medium opacity-90">Since</div>
                    <div className="text-lg font-bold">2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gold-500 text-sm font-medium">Scroll</span>
          <div className="w-6 h-10 border-2 border-gold-400 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gold-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-brown-700 via-brown-600 to-brown-700 relative overflow-hidden">
        <ArabicPattern className="opacity-10" />
        
        {/* Decorative Top Border */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`text-center p-8 group cursor-default transition-all duration-500 hover:-translate-y-2`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gold-400/10 rounded-2xl flex items-center justify-center border border-gold-400/30 group-hover:bg-gold-400/20 group-hover:scale-110 transition-all duration-500 group-hover:rotate-6">
                  <feature.icon className="text-gold-300 group-hover:text-gold-200 transition-colors" size={36} />
                </div>
                <div className="text-gold-400/60 text-sm font-medium mb-2" style={{ fontFamily: 'Amiri, serif' }}>
                  {feature.arabic}
                </div>
                <h3 className="text-xl font-semibold text-gold-300 mb-3 group-hover:text-gold-200 transition-colors" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  {feature.title}
                </h3>
                <p className="text-cream-200/70 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 md:py-28 relative">
        <ArabicPattern />
        
        <div className="container mx-auto px-4" ref={productsRef}>
          <div className={`text-center mb-16 ${productsVisible ? 'fade-in-up' : 'opacity-0'}`}>
            <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-[0.3em] mb-4">Our Collection</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-brown-700 mb-6" style={{ fontFamily: "'Cinzel', serif", fontWeight: 600 }}>
              Varieties of <span className="shimmer-text" style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}>Premium Dates</span>
            </h2>
            <OrnateDivider className="max-w-md mx-auto mb-6" />
            <p className="text-brown-500 max-w-2xl mx-auto text-lg">
              Discover our handpicked selection of the finest dates from around the Middle East. Each variety offers a unique taste experience.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {dateVarieties.map((date, index) => (
              <Card 
                key={index}
                className={`group bg-white/90 backdrop-blur border-2 border-gold-100 hover:border-gold-300 transition-all duration-500 cursor-pointer overflow-hidden card-lift ${
                  productsVisible ? `scale-in stagger-${Math.min(index + 1, 10)}` : 'opacity-0'
                }`}
                onClick={() => setSelectedDate(date)}
              >
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={date.image}
                    alt={date.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900/70 via-brown-900/20 to-transparent" />
                  
                  {/* Premium Badge */}
                  {date.premium && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-gold-400 to-gold-500 px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                      <Crown className="w-3 h-3 text-white" />
                      <span className="text-white text-xs font-semibold">Premium</span>
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="px-4 py-1.5 bg-gold-400/95 text-white text-xs font-semibold rounded-full shadow-lg">
                      {date.origin}
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-brown-700 group-hover:text-gold-600 transition-colors" style={{ fontFamily: "'Cinzel', serif", fontWeight: 600 }}>
                    {date.name}
                  </CardTitle>
                  <CardDescription className="text-gold-600 text-sm font-medium">
                    {date.color}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-brown-500 text-sm line-clamp-2 mb-4">{date.description}</p>
                  <Button 
                    variant="ghost" 
                    className="w-full text-gold-600 hover:text-gold-700 hover:bg-gold-50 font-semibold group/btn border border-gold-200 hover:border-gold-300"
                  >
                    View Details
                    <ChevronRight size={18} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedDate && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedDate(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl scale-in gold-shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72">
              <img 
                src={selectedDate.image}
                alt={selectedDate.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-brown-900/30 to-transparent" />
              <button 
                onClick={() => setSelectedDate(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/95 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg hover:scale-110"
              >
                <X size={20} className="text-brown-600" />
              </button>
              
              {selectedDate.premium && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-gold-400 to-gold-500 px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Crown className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-semibold">Premium Selection</span>
                </div>
              )}
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-4 py-1.5 bg-gold-400 text-white text-sm font-semibold rounded-full shadow-lg">
                  {selectedDate.origin}
                </span>
                <h3 className="text-4xl text-white mt-3" style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}>{selectedDate.name}</h3>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1.5 bg-gold-100 text-gold-700 text-sm font-semibold rounded-full">
                  {selectedDate.color}
                </span>
                <span className="px-4 py-1.5 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                  100% Natural
                </span>
              </div>
              <p className="text-brown-600 leading-relaxed mb-8 text-lg">{selectedDate.description}</p>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full btn-premium text-white font-semibold py-7 rounded-full text-lg"
              >
                <Phone size={20} className="mr-2" />
                Order {selectedDate.name} Now
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-cream-100 via-gold-50/30 to-cream-100 relative">
        <ArabicPattern />
        
        <div className="container mx-auto px-4" ref={aboutRef}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`relative ${aboutVisible ? 'fade-in-left' : 'opacity-0'}`}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl gold-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1686983833435-00ac534f2270?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Premium Dates Display"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/40 to-transparent" />
              </div>
              
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border-2 border-gold-300/50 rounded-3xl -z-10" />
              <div className="absolute -inset-8 border border-gold-200/30 rounded-3xl -z-10" />
              
              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 md:bottom-12 md:right-12 bg-white rounded-2xl shadow-2xl p-6 max-w-xs gold-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="text-white" size={28} />
                  </div>
                  <div>
                    <div className="font-semibold text-brown-700 text-lg">Quality Assured</div>
                    <div className="text-sm text-gold-500 font-medium">Premium Selection</div>
                  </div>
                </div>
                <p className="text-sm text-brown-500">Every date is handpicked and quality-checked before packaging.</p>
              </div>
            </div>
            
            <div className={`${aboutVisible ? 'fade-in-right stagger-2' : 'opacity-0'}`}>
              <span className="text-gold-500 font-semibold text-sm uppercase tracking-[0.3em]">About TAMR</span>
              <h2 className="text-4xl md:text-5xl text-brown-700 mt-4 mb-8" style={{ fontFamily: "'Cinzel', serif", fontWeight: 600 }}>
                A Legacy of <span className="shimmer-text" style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}>Premium Quality</span>
              </h2>
              <OrnateDivider className="max-w-xs mb-8" />
              
              <p className="text-brown-500 mb-6 leading-relaxed text-lg">
                At TAMR, we are dedicated to bringing you the finest dates from the heart of the Middle East. Our journey began with a simple mission: to share the authentic taste of premium dates with connoisseurs around the world.
              </p>
              <p className="text-brown-500 mb-10 leading-relaxed text-lg">
                Each variety in our collection is carefully sourced from trusted farms, ensuring that only the best quality dates reach your table. Whether you&apos;re looking for the sacred Ajwa or the luxurious Medjoul, we have the perfect date for every occasion.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                {[
                  { icon: Leaf, title: '100% Natural', desc: 'No preservatives added' },
                  { icon: Truck, title: 'Fast Delivery', desc: 'Pan-India shipping' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-gold-100 to-gold-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg border border-gold-200">
                      <item.icon className="text-gold-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brown-700 text-lg">{item.title}</h4>
                      <p className="text-sm text-brown-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                className="btn-premium text-white font-semibold px-10 py-7 rounded-full shadow-xl text-lg"
              >
                Get In Touch
                <ChevronRight className="ml-2" size={22} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 relative">
        <ArabicPattern />
        
        <div className="container mx-auto px-4" ref={contactRef}>
          <div className={`text-center mb-16 ${contactVisible ? 'fade-in-up' : 'opacity-0'}`}>
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-[0.3em] mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-brown-700 mb-6" style={{ fontFamily: "'Cinzel', serif", fontWeight: 600 }}>
              Ready to <span className="shimmer-text" style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}>Order?</span>
            </h2>
            <OrnateDivider className="max-w-md mx-auto mb-6" />
            <p className="text-brown-500 max-w-2xl mx-auto text-lg">
              Contact us today to place your order or inquire about our premium date varieties. We&apos;re here to help!
            </p>
          </div>
          
          <div className={`grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto ${contactVisible ? '' : 'opacity-0'}`}>
            {/* Phone Card */}
            <Card className={`bg-white/90 backdrop-blur border-2 border-gold-200 hover:border-gold-300 transition-all duration-500 text-center p-8 card-lift ${contactVisible ? 'scale-in stagger-1' : ''}`}>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center shadow-xl pulse-gold">
                <Phone className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-brown-700 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Call Us</h3>
              <p className="text-brown-400 mb-6">Available 9 AM - 9 PM</p>
              <a 
                href="tel:+917989075490"
                className="block text-xl font-bold text-gold-600 hover:text-gold-700 transition-colors mb-3 hover:scale-105 transform"
              >
                +91 7989075490
              </a>
              <a 
                href="tel:+917893760032"
                className="block text-xl font-bold text-gold-600 hover:text-gold-700 transition-colors hover:scale-105 transform"
              >
                +91 7893760032
              </a>
            </Card>
            
            {/* WhatsApp Card */}
            <Card className={`bg-gradient-to-br from-green-500 to-green-600 border-0 text-center p-8 text-white shadow-xl card-lift ${contactVisible ? 'scale-in stagger-2' : ''}`}>
              <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>WhatsApp</h3>
              <p className="text-white/80 mb-6">Quick Response Guaranteed</p>
              <a 
                href="https://wa.me/917989075490?text=Hi%20TAMR!%20I%27m%20interested%20in%20ordering%20premium%20dates."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-600 font-bold px-8 py-4 rounded-full hover:bg-green-50 transition-all hover:scale-105 shadow-lg"
              >
                Chat on WhatsApp
              </a>
            </Card>
            
            {/* Delivery Card */}
            <Card className={`bg-white/90 backdrop-blur border-2 border-gold-200 hover:border-gold-300 transition-all duration-500 text-center p-8 card-lift ${contactVisible ? 'scale-in stagger-3' : ''}`}>
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center shadow-xl">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-brown-700 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Delivery</h3>
              <p className="text-brown-400 mb-6">Pan-India Delivery Available</p>
              <p className="text-gold-600 font-bold text-lg">Fast & Secure Shipping</p>
              <p className="text-brown-500 text-sm mt-3">Fresh dates delivered to your doorstep</p>
            </Card>
          </div>
          
          {/* CTA Banner */}
          <div className={`mt-20 bg-gradient-to-r from-brown-700 via-brown-600 to-brown-700 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl ${contactVisible ? 'fade-in-up stagger-4' : 'opacity-0'}`}>
            <ArabicPattern className="opacity-10" />
            
            {/* Decorative borders */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl mb-6" style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}>
                <span className="shimmer-text">Order Your Premium Dates Today!</span>
              </h3>
              <p className="text-cream-200/80 max-w-2xl mx-auto mb-10 text-lg">
                Experience the finest quality dates from TAMR. Contact us now to place your order and enjoy nature&apos;s sweetest gift.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="tel:+917989075490"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-white font-bold px-10 py-5 rounded-full shadow-xl transition-all hover:scale-105"
                >
                  <Phone size={22} className="mr-2" />
                  Call Now
                </a>
                <a 
                  href="https://wa.me/917989075490?text=Hi%20TAMR!%20I%27m%20interested%20in%20ordering%20premium%20dates."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-5 rounded-full shadow-xl transition-all hover:scale-105"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white mr-2">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-brown-800 to-brown-900 text-cream-200 py-16 relative">
        <ArabicPattern className="opacity-5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={LOGO_URL}
                  alt="TAMR Premium Dates"
                  className="h-20 w-auto"
                />
              </div>
              <p className="text-cream-300/70 leading-relaxed">
                The Best Quality From The Best Source. Delivering premium dates across India since 2025.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold text-gold-400 mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Quick Links</h4>
              <div className="flex flex-col gap-3">
                {['Home', 'Our Dates', 'About Us', 'Contact'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item === 'Our Dates' ? 'products' : item === 'About Us' ? 'about' : item.toLowerCase())}
                    className="text-cream-300/70 hover:text-gold-400 transition-colors text-left flex items-center gap-2 group"
                  >
                    <ChevronRight size={16} className="text-gold-500 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="text-xl font-semibold text-gold-400 mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Contact Us</h4>
              <div className="flex flex-col gap-4">
                <a href="tel:+917989075490" className="flex items-center gap-3 text-cream-300/70 hover:text-gold-400 transition-colors group">
                  <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center group-hover:bg-gold-500/30 transition-colors">
                    <Phone size={18} className="text-gold-400" />
                  </div>
                  +91 7989075490
                </a>
                <a href="tel:+917893760032" className="flex items-center gap-3 text-cream-300/70 hover:text-gold-400 transition-colors group">
                  <div className="w-10 h-10 bg-gold-500/20 rounded-lg flex items-center justify-center group-hover:bg-gold-500/30 transition-colors">
                    <Phone size={18} className="text-gold-400" />
                  </div>
                  +91 7893760032
                </a>
              </div>
            </div>
          </div>
          
          <OrnateDivider className="mb-8" />
          
          <div className="text-center">
            <p className="text-cream-400/60 text-sm">
              © 2025 TAMR Premium Dates. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
