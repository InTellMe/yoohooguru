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
        title="Trail Gone Cold - YooHoo.Guru"
        description="Even our legendary tracking skills couldn't find this page. Let's head back to familiar territory."
        url="https://www.yoohoo.guru/404"
        image={notFoundOgImage}
      />

      <ClientNavigation />

      <main className="min-h-screen flex items-center justify-center">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            {/* Sasquatch 404 Illustration */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-40 h-40 rounded-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <span className="text-5xl block mb-1">🏔️</span>
                  <span className="text-4xl font-display font-bold gradient-text-emerald-blue">404</span>
                </div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Trail Gone Cold
            </h1>

            {/* Sasquatch-themed Description */}
            <p className="text-xl text-white-80 mb-4 leading-relaxed">
              Well, this is a pickle. Even with our legendary tracking skills, we couldn&apos;t 
              find what you&apos;re looking for.
            </p>
            <p className="text-lg text-white-60 mb-8 italic">
              &quot;Sometimes the best path forward is back to familiar territory.&quot; — Yoohoo McWhistle
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-glow-emerald transition-all duration-300 hover:-translate-y-0.5"
              >
                Head Back Home
              </Link>
              <Link
                href="/help"
                className="px-8 py-3 glass-button text-white font-semibold rounded-xl hover:glass-effect-strong transition-all duration-300"
              >
                Ask the Family
              </Link>
            </div>

            {/* Family Guide Section */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm text-white-60 mb-6">Let the family point you in the right direction:</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <Link href="/about" className="glass-card p-4 rounded-xl hover-lift transition-all group">
                  <span className="text-2xl block mb-2">🏔️</span>
                  <span className="text-sm text-white-80 group-hover:text-emerald-400 transition-colors">Meet the Family</span>
                </Link>
                <Link href="https://angel.yoohoo.guru" className="glass-card p-4 rounded-xl hover-lift transition-all group">
                  <span className="text-2xl block mb-2">👼</span>
                  <span className="text-sm text-white-80 group-hover:text-amber-400 transition-colors">Angel&apos;s List</span>
                </Link>
                <Link href="https://coach.yoohoo.guru" className="glass-card p-4 rounded-xl hover-lift transition-all group">
                  <span className="text-2xl block mb-2">🏋️</span>
                  <span className="text-sm text-white-80 group-hover:text-emerald-400 transition-colors">SkillShare</span>
                </Link>
                <Link href="https://heroes.yoohoo.guru" className="glass-card p-4 rounded-xl hover-lift transition-all group">
                  <span className="text-2xl block mb-2">🦸</span>
                  <span className="text-sm text-white-80 group-hover:text-red-400 transition-colors">Hero Gurus</span>
                </Link>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
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

            {/* Fun Sasquatch Footer */}
            <div className="mt-8 text-center">
              <p className="text-xs text-white-40">
                🐾 No Sasquatches were harmed in the losing of this page
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
