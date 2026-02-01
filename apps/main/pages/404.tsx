import React from 'react';
import Link from 'next/link';
import ClientNavigation from '../components/ui/ClientNavigation';
import Seo from '../components/Seo';
import { buildCloudinaryImageUrl } from '../lib/cloudinary';

export default function Custom404() {
  const notFoundOgImage =
    buildCloudinaryImageUrl('sasquatch-family/404-trail', 'f_auto,q_auto,w_1200,h_630,c_fill,g_auto') ||
    'https://www.yoohoo.guru/assets/og-default.jpg';

  return (
    <>
      <Seo
        title="Trail Not Found - YooHoo.Guru"
        description="Looks like this path wandered off into the Tennessee pines. Let the Sasquatch family guide you back home."
        url="https://www.yoohoo.guru/404"
        image={notFoundOgImage}
      />

      <ClientNavigation />

      <main className="min-h-screen flex items-center justify-center">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Illustration */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10">
                <span className="text-6xl font-display font-bold gradient-text-emerald-blue">404</span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Trail Not Found
            </h1>

            {/* Description */}
            <p className="text-xl text-white-80 mb-8 leading-relaxed">
              Looks like this path wandered off into the Tennessee pines. Let the family guide you back to the lodge.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-glow-emerald transition-all duration-300 hover:-translate-y-0.5"
              >
                Return to the Lodge
              </Link>
              <Link
                href="/help"
                className="px-8 py-3 glass-button text-white font-semibold rounded-xl hover:glass-effect-strong transition-all duration-300"
              >
                Ask for Directions
              </Link>
            </div>

            {/* Helpful Links */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-white-60 mb-4">Try one of these well-worn trails:</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/about" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                  About Us
                </Link>
                <Link href="/how-it-works" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                  How It Works
                </Link>
                <Link href="/pricing" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                  Pricing
                </Link>
                <Link href="/blog" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                  Blog
                </Link>
                <Link href="/help" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                  Help Center
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
