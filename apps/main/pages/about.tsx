export const dynamic = "force-dynamic";
import { GetServerSideProps } from 'next';
import React from 'react';
import Seo from '../components/Seo';
import Link from 'next/link';
import Navigation from '../components/ui/Navigation';

// Sasquatch Family Character Data
const sasquatchFamily = [
  {
    name: 'Yoohoo',
    role: 'The Founder & Visionary',
    emoji: '🏔️',
    description: 'The wise patriarch who dreamed up the platform after centuries of watching Appalachian communities help each other. With spectacles perched on his nose and warmth in his heart, Yoohoo believes the internet is just the world\'s biggest front porch.',
    quote: '"Every skill shared is a seed planted."',
    color: 'from-gray-500/20 to-gray-600/20',
    textColor: 'text-gray-300',
    subdomain: 'Main Platform',
  },
  {
    name: 'Angel',
    role: 'The Community Guardian',
    emoji: '👼',
    description: 'Yoohoo\'s nurturing daughter who runs Angel\'s List. She has an uncanny ability to know exactly who needs help and who can provide it. Her kind hazel eyes can spot dishonesty from a mile away.',
    quote: '"Your neighbor\'s success is your success."',
    color: 'from-amber-500/20 to-yellow-500/20',
    textColor: 'text-amber-400',
    subdomain: 'angel.yoohoo.guru',
  },
  {
    name: 'Coach',
    role: 'The Skill Master',
    emoji: '🏋️',
    description: 'The enthusiastic son who heads SkillShare. After traveling the world collecting 347 certifications, Coach returned home with a mission: help everyone discover their teaching potential.',
    quote: '"You\'ve got more to teach than you know."',
    color: 'from-emerald-500/20 to-green-500/20',
    textColor: 'text-emerald-400',
    subdomain: 'coach.yoohoo.guru',
  },
  {
    name: 'Hero',
    role: 'The Accessibility Champion',
    emoji: '🦸',
    description: 'The youngest and most idealistic family member. Hero runs the Hero Gurus program, ensuring people with disabilities have access to volunteer tutors and inclusive learning opportunities.',
    quote: '"Every person deserves a chance to shine."',
    color: 'from-red-500/20 to-orange-500/20',
    textColor: 'text-red-400',
    subdomain: 'heroes.yoohoo.guru',
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="Meet the Family - YooHoo.Guru"
        description="Meet the Sasquatch family of Silicon Holler, Tennessee - the gentle giants behind YooHoo.Guru who believe in building community through skill sharing."
        url="https://www.yoohoo.guru/about"
        image="https://www.yoohoo.guru/assets/og-about.jpg"
      />

      <Navigation />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl mb-6">🏔️</div>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                Meet the Family Behind
                <span className="block gradient-text-emerald-blue mt-2">YooHoo.Guru</span>
              </h1>
              <p className="text-xl text-white-80 leading-relaxed">
                Deep in the misty hollows of East Tennessee, where the Smoky Mountains touch the clouds, 
                lives a family of gentle giants who discovered their greatest gift wasn&apos;t their legendary 
                elusiveness—it was their ability to connect people and share knowledge.
              </p>
            </div>
          </div>
        </section>

        {/* Origin Story Section */}
        <section className="section-padding bg-gradient-to-b from-transparent to-primarydark/50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-display font-bold text-white mb-6">The Legend of Silicon Holler</h2>
                <p className="text-lg text-white-80 leading-relaxed mb-6">
                  For generations, the Sasquatch family watched humans struggle to learn new skills, 
                  find trusted help, and build communities. They observed barn raisings, quilting bees, 
                  and neighbors teaching neighbors throughout Appalachia.
                </p>
                <p className="text-lg text-white-80 leading-relaxed mb-6">
                  One day, the eldest of the clan—Yoohoo McWhistle—said, <em>&quot;We&apos;ve spent centuries hiding. 
                  Maybe it&apos;s time we started helping.&quot;</em>
                </p>
                <p className="text-lg text-white-80 leading-relaxed">
                  And so, from their hidden compound between Clingmans Dome and Mount Le Conte, 
                  <strong className="text-emerald-400"> YooHoo.Guru</strong> was born—a platform built with 
                  big hearts and even bigger dreams.
                </p>
              </div>
              <div className="glass-card p-8 rounded-2xl">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Neighborliness</h3>
                      <p className="text-white-80">Rooted in Appalachian values of helping your neighbor without expecting anything in return.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Trust & Hospitality</h3>
                      <p className="text-white-80">Every visitor gets sweet tea, a warm welcome, and honest dealings.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💪</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Hard Work & Humility</h3>
                      <p className="text-white-80">Big results don&apos;t need big words. We let our community&apos;s success speak for itself.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Family Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-display font-bold text-white mb-4">The Sasquatch Family</h2>
              <p className="text-xl text-white-80 max-w-2xl mx-auto">
                Four extraordinary creatures, each bringing their unique gifts to help you learn, grow, and connect.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {sasquatchFamily.map((member, index) => (
                <div 
                  key={index}
                  className="glass-card p-8 rounded-2xl hover-lift transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-4xl">{member.emoji}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                        <span className={`text-sm font-medium ${member.textColor}`}>{member.role}</span>
                      </div>
                      <p className="text-white-80 mb-4">{member.description}</p>
                      <blockquote className={`italic ${member.textColor} border-l-2 border-current pl-4`}>
                        {member.quote}
                      </blockquote>
                      <div className="mt-4 text-sm text-white-60">
                        Oversees: <span className="text-emerald-400">{member.subdomain}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Family Philosophy Section */}
        <section className="section-padding bg-gradient-to-b from-transparent to-primarydark/50">
          <div className="container-custom">
            <div className="glass-card p-12 rounded-3xl text-center max-w-4xl mx-auto">
              <div className="text-5xl mb-6">✨</div>
              <h2 className="text-3xl font-display font-bold text-white mb-6">The Family Secret</h2>
              <p className="text-xl text-white-80 leading-relaxed mb-6">
                The Sasquatch family has kept one secret from the world: they&apos;re not actually hiding anymore. 
                They&apos;ve simply discovered that the best way to help humans is to let them think they&apos;re 
                helping themselves.
              </p>
              <p className="text-lg text-white-60 italic">
                As Yoohoo likes to say: &quot;The best kind of magic is the kind folks don&apos;t notice. 
                They just feel lucky.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="glass-card p-12 rounded-3xl">
              <h2 className="text-3xl font-display font-bold text-white text-center mb-4">Our Impact</h2>
              <p className="text-center text-white-60 mb-12">What the family has helped build together</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text-emerald mb-2">10,000+</div>
                  <div className="text-white-60">Community Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text-blue mb-2">500+</div>
                  <div className="text-white-60">Expert Gurus</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text-purple mb-2">25,000+</div>
                  <div className="text-white-60">Connections Made</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text-gold mb-2">98%</div>
                  <div className="text-white-60">Happy Neighbors</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-b from-transparent to-primarydark/50">
          <div className="container-custom text-center">
            <div className="text-5xl mb-6">🏔️</div>
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Ready to Join the Family?
            </h2>
            <p className="text-xl text-white-80 max-w-2xl mx-auto mb-8">
              Pull up a chair on the front porch. The sweet tea&apos;s ready, and there&apos;s always 
              room for one more in Silicon Holler.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-lg font-semibold rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-glow-emerald-lg hover:-translate-y-1"
            >
              <span>Join YooHoo.Guru</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <p className="mt-6 text-sm text-white-60">
              &quot;YooHoo!&quot; isn&apos;t just a greeting—it&apos;s how the family calls to each other across the mountains.
            </p>
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
