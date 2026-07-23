import { motion } from 'motion/react';
import Logo from './Logo';

interface MenuItem {
  title: string;
  image: string;
}

const MENU_DATA: MenuItem[] = [
  { title: 'Moong Keema Dosa', image: '/menu/moong-keema-dosa.jpg' },
  { title: 'Tikka Sandwich', image: '/menu/tikka-sandwich.jpg' },
  { title: 'Protein Cheela', image: '/menu/protein-cheela.jpg' },
  { title: 'Choco Crunch Oats', image: '/menu/choco-crunch-oats.jpg' },
  { title: 'Mexican Rice Bowl', image: '/menu/mexican-rice-bowl.jpg' },
  { title: 'Spinach Rice', image: '/menu/spinach-rice.jpg' },
  { title: 'Loaded Veggie Rice', image: '/menu/loaded-veggie-rice.jpg' },
  { title: 'Loaded Veggie Crepe', image: '/menu/loaded-veggie-crepe.jpg' },
  { title: 'Broccoli Pasta', image: '/menu/broccoli-pasta.jpg' },
  { title: 'Peri Peri Wrap', image: '/menu/peri-peri-wrap.jpg' },
  { title: 'Ranch Salad', image: '/menu/ranch-salad.jpg' },
  { title: 'Tacos', image: '/menu/tacos.jpg' },
];

interface MenuScreenProps {
  onBack: () => void;
  onSelectPlan: () => void;
}

export default function MenuScreen({ onBack, onSelectPlan }: MenuScreenProps) {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen">
      <nav className="fixed top-0 w-full z-50 glass-header border-b border-outline-variant/10">
        <div className="flex justify-between items-center px-6 md:px-10 py-6 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              aria-label="Go back"
              className="w-10 h-10 rounded-full hover:bg-surface-container flex items-center justify-center transition-colors shrink-0"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button onClick={onBack} aria-label="Fitopus — go to homepage" className="shrink-0 hover:opacity-70 transition-opacity">
              <Logo className="h-8 md:h-9 w-auto text-on-surface" />
            </button>
          </div>
          <button
            onClick={onSelectPlan}
            className="bg-primary-container text-on-primary-container px-6 md:px-8 py-2 md:py-3 rounded-full font-headline font-bold shadow-sm text-sm md:text-base hover:scale-105 active:scale-95 transition-all"
          >
            Start Subscription
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <header className="mb-12 text-center md:text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="font-label uppercase tracking-[0.2em] text-secondary font-bold text-sm">Chef's Selection</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter font-headline mt-2 mb-4">
              Flavor without <span className="text-primary italic">Friction.</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-2xl">
              Every dish on the rotating menu — chef-crafted, nutritionally balanced, and delivered fresh.
            </p>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_DATA.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: (idx % 3) * 0.08 }}
              className="group relative bg-surface-container rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative bg-surface-container-high">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-black font-headline leading-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-secondary font-label font-bold text-xs uppercase tracking-widest mt-3">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  Nutritionally Optimized
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="mt-28 p-12 bg-[#0f172a] rounded-[3rem] text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[30rem] absolute -top-40 -left-20">restaurant</span>
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-headline font-black mb-6">Can't decide?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium">
              Our nutritionists can help pick the perfect plan based on your metabolism and activity level.
            </p>
            <button
              onClick={onSelectPlan}
              className="bg-primary-container text-on-primary-container font-headline font-black py-6 px-12 rounded-full text-xl hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20"
            >
              Schedule Free Consultation
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-surface-container-low pt-20 pb-10 px-8 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <button onClick={onBack} aria-label="Fitopus — go to homepage" className="hover:opacity-70 transition-opacity">
            <Logo className="h-9 w-auto text-on-surface" />
          </button>
          <div className="flex gap-8">
            {['Instagram', 'Twitter', 'Manifesto'].map(social => (
              <a key={social} href="#" className="font-label uppercase tracking-widest text-xs font-bold opacity-60 hover:opacity-100 transition-opacity">{social}</a>
            ))}
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">© 2026 Fitopus</p>
        </div>
      </footer>
    </div>
  );
}
