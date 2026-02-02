import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/ui/Navigation';
import { HUBS, getHubUrl } from '@/config/hubs';

export default function Hubs() {
  return (
    <>
      <Head>
        <title>Content Hubs - YooHoo.Guru</title>
        <meta
          name="description"
          content={`Explore ${HUBS.length} specialized content hubs covering art, business, technology, wellness, and more.`}
        />
      </Head>

      <Navigation />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-custom text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              Explore Our <span className="gradient-text-emerald-blue">Content Hubs</span>
            </h1>
            <p className="text-xl text-white-80 max-w-3xl mx-auto">
              Discover expert-curated content across {HUBS.length} specialized topics. Each hub features AI-curated news, in-depth articles, and community insights.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="pb-20">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text-emerald mb-2">{HUBS.length}</div>
                <div className="text-white-60">Content Hubs</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text-blue mb-2">4,000+</div>
                <div className="text-white-60">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text-purple mb-2">Daily</div>
                <div className="text-white-60">Updates</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text-gold mb-2">AI</div>
                <div className="text-white-60">Curated</div>
              </div>
            </div>
          </div>
        </section>

        {/* All Hubs Grid */}
        <section className="section-padding bg-gradient-to-b from-transparent to-primarydark/50">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {HUBS.map((hub) => (
                <a
                  key={hub.id}
                  href={getHubUrl(hub.subdomain)}
                  className="glass-card p-6 rounded-2xl hover-lift group"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {hub.emoji}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:gradient-text-emerald-blue transition-all duration-300">
                    {hub.label}
                  </h3>
                  <p className="text-sm text-white-60 mb-3 line-clamp-2">
                    Explore {hub.label} experts, guides, and community insights.
                  </p>
                  <div className="text-xs text-emerald-400 font-semibold">
                    Go to {hub.subdomain}.yoohoo.guru →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-4xl font-display font-bold text-white text-center mb-12">
              What You&apos;ll Find in Each Hub
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="glass-card p-8 rounded-2xl text-center">
                <div className="text-5xl mb-4">📰</div>
                <h3 className="text-xl font-bold text-white mb-3">Daily News</h3>
                <p className="text-white-80">
                  AI-curated news articles updated twice daily with the latest developments in each field
                </p>
              </div>
              <div className="glass-card p-8 rounded-2xl text-center">
                <div className="text-5xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-white mb-3">Weekly Blog Posts</h3>
                <p className="text-white-80">
                  In-depth articles and guides written by AI and reviewed by experts in the field
                </p>
              </div>
              <div className="glass-card p-8 rounded-2xl text-center">
                <div className="text-5xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Community</h3>
                <p className="text-white-80">
                  Connect with Gurus and learners who share your interests and passion
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-b from-transparent to-primarydark/50">
          <div className="container-custom text-center">
            <div className="glass-card p-12 rounded-3xl max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                Ready to Dive In?
              </h2>
              <p className="text-white-80 mb-8">
                Choose a hub that interests you and start exploring expert content today
              </p>
              <Link
                href="/"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-blue-600 transition-all duration-300"
              >
                <span>Back to Home</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
// Make this page server-side rendered to avoid SSG issues with Navigation component using useRouter
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
