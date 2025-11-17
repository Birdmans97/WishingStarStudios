import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            WishingStarRich
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 md:mb-8 text-slate-300">
            Richard Hernandez - Artist & Craftsman
          </p>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 text-slate-400 px-2">
            Specializing in modeling, painting, restorations, and custom creations
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors text-center min-h-[44px] flex items-center justify-center"
            >
              Request a Quote
            </Link>
            <a 
              href="https://www.instagram.com/wishingstar_rich/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-slate-700 hover:bg-slate-600 active:bg-slate-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 min-h-[44px]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              View on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-slate-900">My Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {/* Modeling */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🎨</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900">Modeling</h3>
              <p className="text-sm sm:text-base text-slate-700">
                Custom model creation and design work. From concept to completion, I bring your ideas to life.
              </p>
            </div>

            {/* Painting */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🖌️</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900">Painting</h3>
              <p className="text-sm sm:text-base text-slate-700">
                Professional painting services for various mediums. Custom artwork and commissioned pieces available.
              </p>
            </div>

            {/* Restorations */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🔧</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900">Restorations</h3>
              <p className="text-sm sm:text-base text-slate-700">
                Expert restoration services to bring new life to your treasured items. Careful attention to detail and authenticity.
              </p>
            </div>

            {/* Bags & Custom Work */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">👜</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900">Bags & Custom</h3>
              <p className="text-sm sm:text-base text-slate-700">
                Handcrafted bags and custom creations tailored to your specifications. Unique designs for unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-slate-900">Featured Work</h2>
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-base sm:text-lg text-slate-700 mb-4 sm:mb-6 px-2">
              Explore my portfolio and latest creations on Instagram
            </p>
            <a 
              href="https://www.instagram.com/wishingstar_rich/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 active:from-purple-800 active:to-pink-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95 min-h-[44px] w-full sm:w-auto max-w-xs sm:max-w-none"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Visit Instagram Gallery
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Start Your Project?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-primary-100 px-2">
            Get in touch to discuss your modeling, painting, restoration, or custom bag needs
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-primary-600 hover:bg-primary-50 active:bg-primary-100 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors inline-block min-h-[44px] flex items-center justify-center w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
          >
            Contact Me Today
          </Link>
        </div>
      </section>
    </div>
  )
}

