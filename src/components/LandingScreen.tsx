import { motion } from 'motion/react';

interface LandingScreenProps {
  onGetStarted: (goalId?: string) => void;
  onViewMenu: () => void;
}

export default function LandingScreen({ onGetStarted, onViewMenu }: LandingScreenProps) {
  return (
    <div className="bg-surface text-on-surface font-body overflow-x-hidden">
      {/* TopNavBar */}
      <nav className="w-full top-0 sticky z-50 glass-header border-b border-outline-variant/10">
        <div className="flex justify-between items-center px-8 py-6 max-w-[1440px] mx-auto">
          <div className="text-3xl font-black text-on-surface italic font-headline tracking-tight">
            Fitopus
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a className="text-primary border-b-4 border-primary-container pb-1 font-headline font-bold tracking-tight hover:scale-105 transition-transform duration-200" href="#">Home</a>
            <button 
              onClick={onViewMenu}
              className="text-on-surface opacity-80 font-headline font-bold tracking-tight hover:scale-105 hover:text-secondary transition-transform duration-200"
            >
              Menu
            </button>
            <a className="text-on-surface opacity-80 font-headline font-bold tracking-tight hover:scale-105 hover:text-secondary transition-transform duration-200" href="#">Community</a>
            <a className="text-on-surface opacity-80 font-headline font-bold tracking-tight hover:scale-105 hover:text-secondary transition-transform duration-200" href="#">About</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={onGetStarted}
              className="bg-primary-container text-on-primary-container font-headline font-bold px-8 py-3 rounded-full hover:scale-105 active:scale-95 transition-all shadow-sm"
            >
              Get started
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary-container pt-16 pb-12 md:pb-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 mb-6 rounded-full bg-tertiary-container text-on-tertiary-container font-label text-xs tracking-widest uppercase font-bold -rotate-2">
                The Future of Fitness
              </span>
              <h1 className="text-5xl md:text-8xl font-display font-extrabold text-on-surface leading-[0.9] tracking-tighter mb-8">
                Healthy Meals, <br/> 
                <span className="text-secondary italic">Delivered Daily</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-lg mb-10 font-medium leading-relaxed">
                Ditch the prep, keep the vibe. Chef-crafted nutrition tailored to your goals, delivered right to your doorstep.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onGetStarted()}
                  className="bg-on-surface text-surface py-5 px-10 rounded-full font-headline font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl"
                >
                  Get Started
                </button>
                <button
                  onClick={onViewMenu}
                  className="text-on-surface font-headline font-bold text-lg underline underline-offset-4 opacity-70 hover:opacity-100 transition-opacity"
                >
                  View Menu
                </button>
              </div>
              <p className="mt-4 text-sm text-on-surface-variant/80 font-medium">Starting from <span className="font-black text-on-surface">₹250/meal</span> · No lock-in</p>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-tertiary rounded-full opacity-30 blur-2xl"></div>
              <div className="relative bg-surface rounded-xl p-4 shadow-2xl rotate-3 transform-gpu">
                <img
                  alt="Healthy Bowl"
                  className="rounded-lg w-full h-[280px] md:h-[500px] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxEm-y1dx74wN66Um8aVLNfNNrcuJ-iqRcfqazo8b_sgNHcKI3rZjnJY7TD8pOooWEahlUBvNrz-cXW0Od3X-TXDRfzTAQ7Hi28AxUQD1U-vljPOW95P1h3IFGzqLTebo9uU73zIDnN8r4eu8hR8Ak-Q1KLOPdFQhJiogXBCcNpRl-nvkWqkqEsSuaMItnfghJKSaxDMj-SOud96rJSWaoT6kTzNSCgzgf_9pLWkD-F5DmKyf0ZAE6IJe0X_-A9L9f_fVWt9IXxZYZ"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 px-6 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-6xl font-headline font-black mb-4">Simple as Pie.</h2>
              <p className="text-on-surface-variant text-lg">But, you know, healthy pie.</p>
            </div>
            <div className="relative grid md:grid-cols-3 gap-6">
              {/* connecting line on desktop */}
              <div className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-0.5 bg-outline-variant/40 z-0" />
              {[
                { icon: 'restaurant', title: 'Pick Your Plan', desc: 'Choose from Weight Loss, Muscle Gain, or Balanced vibes. Whatever fuels your fire.', cardBg: 'bg-secondary-container', iconColor: 'text-secondary' },
                { icon: 'timer', title: 'We Cook & Pack', desc: 'Our chefs whip up fresh, locally sourced ingredients daily. No preservatives, just joy.', cardBg: 'bg-primary-container', iconColor: 'text-primary' },
                { icon: 'local_shipping', title: 'Daily Delivery', desc: 'Fresh meals arrive at your door every morning. Ready to eat when you are.', cardBg: 'bg-tertiary-container', iconColor: 'text-tertiary' }
              ].map((step, i) => (
                <motion.button
                  key={i}
                  type="button"
                  onClick={() => onGetStarted()}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className={`relative z-10 w-full p-8 rounded-2xl ${step.cardBg} flex flex-col items-center text-center cursor-pointer hover:translate-y-[-6px] active:scale-[0.98] transition-transform shadow-lg ring-1 ring-on-surface/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-on-surface/40`}
                >
                  <span className="text-xs font-headline font-black tracking-widest text-on-surface/40 mb-3">0{i + 1}</span>
                  <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <span className={`material-symbols-outlined ${step.iconColor} text-3xl`}>{step.icon}</span>
                  </div>
                  <h3 className="text-xl font-headline font-bold mb-3 text-on-surface">{step.title}</h3>
                  <p className="text-on-surface/70 leading-relaxed text-sm">{step.desc}</p>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 px-6 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <span className="font-label uppercase tracking-widest text-secondary font-bold">Categories</span>
              <h2 className="text-4xl md:text-6xl font-headline font-black mt-2">Pick your <span className="text-primary italic">plan.</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { id: 'loss', title: 'Weight Loss', desc: 'Calorie-conscious, nutrient-dense meals.', img: '/weight-loss.jpg', badge: 'NEW' },
                { id: 'gain', title: 'Muscle Gain', desc: 'Protein-heavy fuel for the grinders.', img: '/muscle-gain.jpg' },
                { id: 'balanced', title: 'Balanced Diet', desc: 'Sustainable eating for everyday life.', img: 'https://plus.unsplash.com/premium_photo-1701113208728-51959e2d8834?w=800&h=500&fit=crop&q=80' }
              ].map((cat, i) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => onGetStarted(cat.id)}
                  className="group relative overflow-hidden rounded-xl bg-surface-container-highest h-[500px] shadow-lg cursor-pointer"
                >
                  <img src={cat.img} alt={cat.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-10 flex flex-col items-center text-center px-10 text-white">
                    <h3 className="text-4xl font-headline font-semibold mb-2">{cat.title}</h3>
                    <p className="text-lg opacity-90">{cat.desc}</p>
                  </div>
                  {cat.badge && (
                    <div className="absolute top-8 right-8 rotate-12">
                      <span className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-headline font-bold shadow-lg">{cat.badge}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-14 px-6 bg-surface overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-4xl md:text-7xl font-headline font-black tracking-tighter uppercase italic drop-shadow-sm">Real Talk.</h2>
              <p className="text-xl text-on-surface-variant">Hear it from the community.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
              {[
                { 
                  bg: 'bg-primary-container', 
                  text: 'on-surface', 
                  quote: '"Finally, a meal service that doesn\'t taste like cardboard. The flavors are actually insane."', 
                  author: 'Jordan L.', 
                  role: 'Graphic Designer', 
                  rotate: '-rotate-2',
                  img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop'
                },
                { 
                  bg: 'bg-secondary-container', 
                  text: 'on-secondary-container', 
                  quote: '"Muscle gain without the chicken-and-rice burnout. Fitopus is literally a cheat code."', 
                  author: 'Marcus T.', 
                  role: 'Personal Trainer', 
                  rotate: 'rotate-1',
                  img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop'
                },
                { 
                  bg: 'bg-surface-variant', 
                  text: 'on-tertiary-container', 
                  quote: '"The convenience is life-changing, but the taste is what keeps me here. Every meal feels like a treat."', 
                  author: 'Sarah K.', 
                  role: 'Yoga Instructor', 
                  rotate: '-rotate-1',
                  img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop'
                }
              ].map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className={`w-full p-10 ${t.bg} rounded-xl ${t.rotate} shadow-lg flex flex-col h-full`}
                >
                  <div className="flex gap-0.5 mb-6">
                    {[1,2,3,4,5].map(s => (
                      <span key={s} className={`text-xl text-${t.text}`}>★</span>
                    ))}
                  </div>
                  <p className={`text-2xl font-headline font-bold text-${t.text} mb-8 italic flex-grow leading-tight`}>{t.quote}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-surface flex-shrink-0 border-2 border-white/20">
                      <img src={t.img} alt={t.author} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className={`font-bold text-${t.text}`}>{t.author}</p>
                      <p className={`text-sm opacity-70 text-${t.text}`}>{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-5xl mx-auto bg-tertiary text-surface rounded-xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none select-none">
              <div className="absolute top-6 left-6 text-[8rem] font-black rotate-[-12deg] font-headline leading-none">YUM</div>
              <div className="absolute bottom-6 right-6 text-[8rem] font-black rotate-[12deg] font-headline leading-none">FRESH</div>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-headline font-black mb-8 leading-tight">Ready to fuel <br/> your vibe?</h2>
              <p className="text-xl mb-12 opacity-90 max-w-lg mx-auto font-medium">Join 10k+ people eating better every single day. First week is 20% off.</p>
              <button 
                onClick={onGetStarted}
                className="bg-primary-container text-on-primary-container text-xl font-headline font-black py-6 px-16 rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_15px_30px_rgba(254,231,5,0.3)]"
              >
                START YOUR SUBSCRIPTION
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="w-full rounded-t-[3rem] mt-8 bg-primary-container text-on-surface">
        <div className="flex flex-col items-center justify-center p-10 w-full text-center">
          <div className="text-4xl font-black mb-4 font-headline italic tracking-tighter">Fitopus</div>
          <div className="flex flex-wrap justify-center gap-8 mb-6">
            {['Manifesto', 'Privacy Policy', 'Terms of Vibes', 'Contact Us'].map(l => (
              <a key={l} className="font-label uppercase tracking-widest text-xs font-bold hover:tracking-[0.15em] transition-all opacity-70 hover:opacity-100" href="#">{l}</a>
            ))}
          </div>
          <p className="font-label uppercase tracking-widest text-[10px] opacity-60">
            © 2026 Fitopus. Stay Kinetic. Stay Joyful.
          </p>
        </div>
      </footer>
    </div>
  );
}
