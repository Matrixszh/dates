'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail, MapPin, Star, Menu, X, ChevronRight, Leaf, Award, Truck, Heart } from 'lucide-react'

const dateVarieties = [
  {
    name: 'Ajwa',
    description: 'Known as the "King of Dates", prized for its soft texture and rich flavor. A sacred variety from Madinah.',
    origin: 'Saudi Arabia',
    color: 'Dark Brown/Black',
    image: 'https://images.unsplash.com/photo-1769255484408-3ffada29d567?crop=entropy&cs=srgb&fm=jpg&q=85&w=400',
  },
  {
    name: 'Medjoul',
    description: 'Large, succulent dates with caramel-like taste. Often called the "Diamond of Dates".',
    origin: 'Morocco/Jordan',
    color: 'Amber Brown',
    image: 'https://images.unsplash.com/photo-1606650368590-11dcf6c7f877?crop=entropy&cs=srgb&fm=jpg&q=85&w=400',
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
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Sourced from the finest date farms across the Middle East.',
  },
  {
    icon: Truck,
    title: 'Pan-India Delivery',
    description: 'Fresh dates delivered to your doorstep across India.',
  },
  {
    icon: Heart,
    title: 'Customer Love',
    description: 'Thousands of satisfied customers trust our quality.',
  },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<typeof dateVarieties[0] | null>(null)

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-100/95 backdrop-blur-md border-b border-gold-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-gold-300 to-gold-500 flex items-center justify-center shadow-lg">
                <span className="text-white font-serif font-bold text-lg md:text-xl">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg md:text-xl text-brown-600">TAMR</span>
                <span className="text-[10px] md:text-xs text-gold-500 font-medium -mt-1">Premium Dates</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-brown-600 hover:text-gold-500 transition-colors font-medium">Home</button>
              <button onClick={() => scrollToSection('products')} className="text-brown-600 hover:text-gold-500 transition-colors font-medium">Our Dates</button>
              <button onClick={() => scrollToSection('about')} className="text-brown-600 hover:text-gold-500 transition-colors font-medium">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-brown-600 hover:text-gold-500 transition-colors font-medium">Contact</button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-white font-semibold px-6 shadow-lg"
              >
                Order Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-brown-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-cream-50 border-t border-gold-200 py-4">
            <div className="container mx-auto px-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-brown-600 hover:text-gold-500 transition-colors font-medium text-left py-2">Home</button>
              <button onClick={() => scrollToSection('products')} className="text-brown-600 hover:text-gold-500 transition-colors font-medium text-left py-2">Our Dates</button>
              <button onClick={() => scrollToSection('about')} className="text-brown-600 hover:text-gold-500 transition-colors font-medium text-left py-2">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-brown-600 hover:text-gold-500 transition-colors font-medium text-left py-2">Contact</button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-white font-semibold w-full shadow-lg"
              >
                Order Now
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#D4AF37_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-gradient-to-br from-gold-300/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-tl from-gold-300/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-gold-100 rounded-full mb-6">
                <span className="text-gold-600 text-sm font-semibold">Established 2025</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-brown-700 leading-tight mb-6">
                <span className="bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 bg-clip-text text-transparent">TAMR</span>
                <br />
                <span className="text-brown-600">Premium Dates</span>
              </h1>
              <p className="text-lg md:text-xl text-brown-500 mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
                The Best Quality From The Best Source
              </p>
              <p className="text-brown-400 mb-8 max-w-lg mx-auto lg:mx-0">
                Discover our exquisite collection of premium dates, carefully sourced from the finest farms across the Middle East. Experience nature&apos;s sweetest treasure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection('products')}
                  className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-white font-semibold px-8 py-6 text-lg shadow-lg gold-shadow"
                >
                  Explore Collection
                  <ChevronRight className="ml-2" size={20} />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-gold-400 text-gold-600 hover:bg-gold-50 font-semibold px-8 py-6 text-lg"
                >
                  <Phone className="mr-2" size={20} />
                  Contact Us
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-gold-200">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-serif font-bold text-gold-500">10+</div>
                  <div className="text-sm text-brown-400">Varieties</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-serif font-bold text-gold-500">100%</div>
                  <div className="text-sm text-brown-400">Natural</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-serif font-bold text-gold-500">1000+</div>
                  <div className="text-sm text-brown-400">Happy Customers</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Decorative Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-gold-300/50 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full border-2 border-gold-200/50"></div>
                
                {/* Main Image */}
                <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl gold-shadow">
                  <img 
                    src="https://images.unsplash.com/photo-1679493419304-05a18073dc6a?crop=entropy&cs=srgb&fm=jpg&q=85"
                    alt="Premium Dates"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900/40 to-transparent"></div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 md:bottom-4 md:right-4 bg-white rounded-2xl shadow-xl p-4 gold-shadow">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center">
                      <Star className="text-gold-500" size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-brown-600">Premium Quality</div>
                      <div className="text-xs text-brown-400">Certified Fresh</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brown-600 via-brown-500 to-brown-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#FFF_1px,_transparent_1px)] bg-[length:30px_30px]"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gold-400/20 rounded-2xl flex items-center justify-center">
                  <feature.icon className="text-gold-300" size={32} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-gold-300 mb-2">{feature.title}</h3>
                <p className="text-cream-200/80 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">Our Collection</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brown-700 mt-2 mb-4">
              Varieties of <span className="text-gold-500">Premium Dates</span>
            </h2>
            <p className="text-brown-400 max-w-2xl mx-auto">
              Discover our handpicked selection of the finest dates from around the Middle East. Each variety offers a unique taste experience.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dateVarieties.map((date, index) => (
              <Card 
                key={index}
                className="group bg-white/80 backdrop-blur border-gold-200/50 hover:border-gold-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden"
                onClick={() => setSelectedDate(date)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={date.image}
                    alt={date.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="px-3 py-1 bg-gold-400/90 text-white text-xs font-semibold rounded-full">
                      {date.origin}
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="font-serif text-xl text-brown-700 group-hover:text-gold-500 transition-colors">
                    {date.name}
                  </CardTitle>
                  <CardDescription className="text-gold-600 text-sm font-medium">
                    {date.color}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-brown-400 text-sm line-clamp-2">{date.description}</p>
                  <Button 
                    variant="ghost" 
                    className="mt-4 w-full text-gold-600 hover:text-gold-700 hover:bg-gold-50 font-medium"
                  >
                    Learn More
                    <ChevronRight size={16} className="ml-1" />
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedDate(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img 
                src={selectedDate.image}
                alt={selectedDate.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/70 to-transparent"></div>
              <button 
                onClick={() => setSelectedDate(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <X size={20} className="text-brown-600" />
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-3 py-1 bg-gold-400 text-white text-sm font-semibold rounded-full">
                  {selectedDate.origin}
                </span>
                <h3 className="font-serif text-3xl font-bold text-white mt-2">{selectedDate.name}</h3>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-gold-100 text-gold-600 text-sm font-medium rounded-full">
                  {selectedDate.color}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-600 text-sm font-medium rounded-full">
                  100% Natural
                </span>
              </div>
              <p className="text-brown-500 leading-relaxed mb-6">{selectedDate.description}</p>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-white font-semibold py-6"
              >
                <Phone size={18} className="mr-2" />
                Order {selectedDate.name} Now
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-cream-100 to-gold-50/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl gold-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1686983833435-00ac534f2270?crop=entropy&cs=srgb&fm=jpg&q=85"
                  alt="Premium Dates Display"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/30 to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs gold-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-brown-700">Quality Assured</div>
                    <div className="text-sm text-gold-500">Premium Selection</div>
                  </div>
                </div>
                <p className="text-sm text-brown-400">Every date is handpicked and quality-checked before packaging.</p>
              </div>
            </div>
            
            <div>
              <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">About TAMR</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brown-700 mt-2 mb-6">
                A Legacy of <span className="text-gold-500">Premium Quality</span>
              </h2>
              <p className="text-brown-500 mb-6 leading-relaxed">
                At TAMR, we are dedicated to bringing you the finest dates from the heart of the Middle East. Our journey began with a simple mission: to share the authentic taste of premium dates with connoisseurs around the world.
              </p>
              <p className="text-brown-500 mb-8 leading-relaxed">
                Each variety in our collection is carefully sourced from trusted farms, ensuring that only the best quality dates reach your table. Whether you&apos;re looking for the sacred Ajwa or the luxurious Medjoul, we have the perfect date for every occasion.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="text-gold-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-700">100% Natural</h4>
                    <p className="text-sm text-brown-400">No preservatives added</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Truck className="text-gold-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-700">Fast Delivery</h4>
                    <p className="text-sm text-brown-400">Pan-India shipping</p>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-white font-semibold px-8 py-6 shadow-lg"
              >
                Get In Touch
                <ChevronRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brown-700 mt-2 mb-4">
              Ready to <span className="text-gold-500">Order?</span>
            </h2>
            <p className="text-brown-400 max-w-2xl mx-auto">
              Contact us today to place your order or inquire about our premium date varieties. We&apos;re here to help!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Phone Card 1 */}
            <Card className="bg-white/80 backdrop-blur border-gold-200/50 hover:border-gold-300 transition-all duration-300 hover:shadow-xl text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold-400 to-gold-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-brown-700 mb-2">Call Us</h3>
              <p className="text-brown-400 mb-4">Available 9 AM - 9 PM</p>
              <a 
                href="tel:+917989075490"
                className="text-xl font-semibold text-gold-600 hover:text-gold-700 transition-colors block mb-2"
              >
                +91 7989075490
              </a>
              <a 
                href="tel:+917893760032"
                className="text-xl font-semibold text-gold-600 hover:text-gold-700 transition-colors block"
              >
                +91 7893760032
              </a>
            </Card>
            
            {/* WhatsApp Card */}
            <Card className="bg-gradient-to-br from-green-500 to-green-600 border-0 text-center p-8 text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-white/80 mb-4">Quick Response Guaranteed</p>
              <a 
                href="https://wa.me/917989075490?text=Hi%20TAMR!%20I%27m%20interested%20in%20ordering%20premium%20dates."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-600 font-semibold px-6 py-3 rounded-full hover:bg-green-50 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </Card>
            
            {/* Location Card */}
            <Card className="bg-white/80 backdrop-blur border-gold-200/50 hover:border-gold-300 transition-all duration-300 hover:shadow-xl text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold-400 to-gold-500 rounded-2xl flex items-center justify-center shadow-lg">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-brown-700 mb-2">Delivery</h3>
              <p className="text-brown-400 mb-4">Pan-India Delivery Available</p>
              <p className="text-gold-600 font-medium">Fast & Secure Shipping</p>
              <p className="text-brown-400 text-sm mt-2">Fresh dates delivered to your doorstep</p>
            </Card>
          </div>
          
          {/* CTA Banner */}
          <div className="mt-16 bg-gradient-to-r from-brown-600 via-brown-500 to-brown-600 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#D4AF37_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
            </div>
            <div className="relative">
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-gold-300 mb-4">
                Order Your Premium Dates Today!
              </h3>
              <p className="text-cream-200/80 max-w-2xl mx-auto mb-8">
                Experience the finest quality dates from TAMR. Contact us now to place your order and enjoy nature&apos;s sweetest gift.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+917989075490"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all"
                >
                  <Phone size={20} className="mr-2" />
                  Call Now
                </a>
                <a 
                  href="https://wa.me/917989075490?text=Hi%20TAMR!%20I%27m%20interested%20in%20ordering%20premium%20dates."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all"
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
      <footer className="bg-brown-700 text-cream-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-300 to-gold-500 flex items-center justify-center shadow-lg">
                  <span className="text-white font-serif font-bold text-xl">T</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-xl text-gold-300">TAMR</span>
                  <span className="text-xs text-gold-400/80">Premium Dates</span>
                </div>
              </div>
              <p className="text-cream-300/70 text-sm">
                The Best Quality From The Best Source. Delivering premium dates across India since 2025.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-gold-300 mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <button onClick={() => scrollToSection('home')} className="text-cream-300/70 hover:text-gold-300 transition-colors text-left">Home</button>
                <button onClick={() => scrollToSection('products')} className="text-cream-300/70 hover:text-gold-300 transition-colors text-left">Our Dates</button>
                <button onClick={() => scrollToSection('about')} className="text-cream-300/70 hover:text-gold-300 transition-colors text-left">About Us</button>
                <button onClick={() => scrollToSection('contact')} className="text-cream-300/70 hover:text-gold-300 transition-colors text-left">Contact</button>
              </div>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-gold-300 mb-4">Contact Us</h4>
              <div className="flex flex-col gap-3">
                <a href="tel:+917989075490" className="flex items-center gap-2 text-cream-300/70 hover:text-gold-300 transition-colors">
                  <Phone size={16} />
                  +91 7989075490
                </a>
                <a href="tel:+917893760032" className="flex items-center gap-2 text-cream-300/70 hover:text-gold-300 transition-colors">
                  <Phone size={16} />
                  +91 7893760032
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-brown-600 pt-8 text-center">
            <p className="text-cream-400/60 text-sm">
              © 2025 TAMR Premium Dates. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
