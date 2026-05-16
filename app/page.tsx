import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  CirclePlay,
  GraduationCap,
  Lightbulb,
  MapPin,
  Menu,
  Network,
  Quote,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

const navItems = ["About", "Programs", "Campus", "Stories", "Contact"];

const stats = [
  { value: "1965", label: "education legacy" },
  { value: "17+", label: "colleges managed by ACT" },
  { value: "UGC", label: "approved university" },
  { value: "24/7", label: "learning support mindset" },
];

const programs = [
  {
    eyebrow: "Undergraduate",
    title: "Future-ready bachelor pathways",
    items: ["BBA & B.Com", "BCA, B.Tech & iMSc IT", "Forensics, Law & Design"],
    image: "/images/undergraduate-pathways.svg",
  },
  {
    eyebrow: "Postgraduate",
    title: "Specialized career acceleration",
    items: ["MBA & International Trade", "MCA, MSc IT & Cyber Security", "Clinical Embryology & Law"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
  {
    eyebrow: "Doctoral",
    title: "Research with practical impact",
    items: ["Commerce", "Management", "Computing", "Interdisciplinary"],
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
  },
  {
    eyebrow: "Certificates",
    title: "Emerging technology credentials",
    items: ["AI, ML & Data Science", "Blockchain & Cyber Security", "Full Stack & DevOps"],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
  },
];

const strengths = [
  {
    icon: Network,
    title: "Interdisciplinary Approach",
    text: "Students learn across commerce, computing, management, science, design, and law to solve layered real-world problems.",
  },
  {
    icon: BookOpenCheck,
    title: "Experiential Learning",
    text: "Studio work, live projects, internships, capstones, and industry cases keep learning close to practice.",
  },
  {
    icon: Lightbulb,
    title: "Whole Brain Pedagogy",
    text: "The curriculum blends analytical depth with creativity, communication, ethics, and entrepreneurial thinking.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Industry Faculty",
    text: "Learners are guided by academic mentors and practitioners who understand contemporary workplace expectations.",
  },
];

const campusMoments = [
  {
    title: "Tech-enabled library",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Innovation and incubation",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Hands-on learning labs",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
  },
];

const testimonials = [
  {
    quote:
      "JG gave me the confidence to explore my strengths and turn classroom learning into a career direction.",
    name: "Krishna Soni",
    role: "BBA alumna, banking professional",
  },
  {
    quote:
      "The faculty treated us like future professionals from day one. Practical assignments made the transition to work smoother.",
    name: "Yatendra Sinh Joddha",
    role: "BCA alumnus, technology lead",
  },
  {
    quote:
      "The university helped me build discipline, creative confidence, and the habit of learning beyond the syllabus.",
    name: "Jigardan Gadhvi",
    role: "Alumnus, performing artist",
  },
];

const partners = [
  "IBM",
  "ISRO",
  "SAC",
  "Yudiz",
  "Coding Pro",
  "Aventure",
  "Samy",
  "Virtual Height",
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Strengths />
      <Campus />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="glass-nav mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full px-4 shadow-soft sm:px-6">
        <a href="#" className="flex items-center gap-3" aria-label="JG University home">
          <span className="flex size-10 items-center justify-center rounded-full bg-ink text-sm font-black tracking-tight text-white">
            JG
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black tracking-wide text-ink">JG University</span>
            <span className="hidden text-xs font-medium text-ink/60 sm:block">Ahmedabad</span>
          </span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold text-ink/70 transition hover:text-campus-green"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden h-10 items-center gap-2 rounded-full bg-campus-green px-5 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-ink sm:flex"
          >
            Apply Now <ArrowRight size={16} />
          </a>
          <button
            className="flex size-10 items-center justify-center rounded-full border border-ink/10 text-ink lg:hidden"
            type="button"
            aria-label="Open navigation menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[760px] bg-ink text-white">
      <img
        src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1800&q=85"
        alt="Students walking on a modern university campus"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="hero-mask absolute inset-0" />
      <div className="section-shell relative flex min-h-[760px] items-center pb-20 pt-32">
        <div className="max-w-3xl animate-rise">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
            <Sparkles size={16} />
            New age tech-driven university in Ahmedabad
          </div>
          <h1 className="text-balance text-5xl font-black leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">
            JG University
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
            A redesigned digital front door for a university built around employability,
            experiential learning, emerging technology, and bold student ambition.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#programs"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-saffron px-7 text-base font-black text-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-white"
            >
              Explore Programs <ArrowRight size={19} />
            </a>
            <a
              href="#about"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 text-base font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-ink"
            >
              Watch Vision <CirclePlay size={19} />
            </a>
          </div>
        </div>
      </div>
      <div className="section-shell relative -mt-24 pb-12">
        <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-ink/5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-b border-ink/10 p-6 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0">
              <div className="text-3xl font-black text-campus-green">{stat.value}</div>
              <div className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-ink/52">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-[#fffaf1] py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.26em] text-signal-red">
            Welcome to JG University
          </p>
          <h2 className="text-balance mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">
            Learning beyond books, designed for the next workplace.
          </h2>
          <p className="mt-6 text-lg leading-8 text-ink/70">
            Inspired by JG University&apos;s mission, this concept presents a sharper
            experience for students and parents: clear programme discovery, stronger trust
            signals, and a warmer sense of campus life.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["NEP aligned", "UGC approved", "Industry cases", "Capstone projects"].map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-campus-green/15 bg-white px-4 py-2 text-sm font-bold text-campus-green shadow-sm"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-5 top-10 hidden h-44 w-44 rounded-full bg-saffron/25 blur-3xl sm:block" />
          <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85"
              alt="University building with students outside"
              className="h-[440px] w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 grid gap-3 bg-gradient-to-t from-ink/92 to-transparent p-6 pt-28 text-white sm:grid-cols-3">
              <MiniMetric value="3" label="schools" />
              <MiniMetric value="40+" label="programmes" />
              <MiniMetric value="1000s" label="learners" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniMetric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-black">{value}</div>
      <div className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">{label}</div>
    </div>
  );
}

function Programs() {
  return (
    <section id="programs" className="soft-grid bg-white py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.26em] text-campus-green">
              Programmes
            </p>
            <h2 className="text-balance mt-4 max-w-3xl text-4xl font-black leading-tight text-ink sm:text-5xl">
              Choose a path that can grow with the future.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex h-12 w-fit items-center gap-2 rounded-full bg-ink px-6 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-campus-green"
          >
            Admission Enquiry <ChevronRight size={18} />
          </a>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {programs.map((program) => (
            <article
              key={program.eyebrow}
              className="group overflow-hidden rounded-[1.75rem] bg-[#fffaf1] shadow-soft ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="grid min-h-full sm:grid-cols-[0.9fr_1.1fr]">
                <img
                  src={program.image}
                  alt=""
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-full"
                />
                <div className="p-7">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-signal-red">
                    {program.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-black leading-tight text-ink">
                    {program.title}
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {program.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm font-semibold text-ink/70">
                        <BadgeCheck className="mt-0.5 shrink-0 text-campus-green" size={18} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section className="bg-[#f7efe2] py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-black uppercase tracking-[0.26em] text-signal-red">
              Our Strengths
            </p>
            <h2 className="text-balance mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">
              A learning model with career momentum.
            </h2>
            <p className="mt-6 text-lg leading-8 text-ink/68">
              The original site highlights JG&apos;s interdisciplinary mindset, immersive
              learning, and experienced faculty. This redesign brings those values forward
              as fast-scanning student benefits.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {strengths.map((strength) => {
              const Icon = strength.icon;
              return (
                <article
                  key={strength.title}
                  className="rounded-[1.5rem] bg-white p-7 shadow-soft ring-1 ring-ink/5 transition hover:-translate-y-1"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-campus-green/10 text-campus-green">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 text-xl font-black text-ink">{strength.title}</h3>
                  <p className="mt-3 leading-7 text-ink/66">{strength.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Campus() {
  return (
    <section id="campus" className="bg-ink py-24 text-white">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.26em] text-saffron">
              Campus Experience
            </p>
            <h2 className="text-balance mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Built for collaboration, making, and everyday student life.
            </h2>
          </div>
          <p className="text-lg leading-8 text-white/68">
            Modern academic spaces, digital infrastructure, incubation support, and
            accessible facilities help the campus feel active beyond scheduled classes.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {campusMoments.map((moment, index) => (
            <article
              key={moment.title}
              className={`group relative min-h-[360px] overflow-hidden rounded-[1.75rem] ${
                index === 1 ? "md:translate-y-8" : ""
              }`}
            >
              <img
                src={moment.image}
                alt=""
                className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/22 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-black">{moment.title}</h3>
              </div>
            </article>
          ))}
        </div>
        <div className="partner-track mt-20 overflow-hidden">
          <div className="flex w-max animate-marquee gap-4">
            {[...partners, ...partners].map((partner, index) => (
              <span
                key={`${partner}-${index}`}
                className="rounded-full border border-white/12 bg-white/8 px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-white/76"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="stories" className="bg-white py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.26em] text-campus-green">
            Alumni Stories
          </p>
          <h2 className="text-balance mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">
            Proof that practical learning travels well.
          </h2>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[1.75rem] bg-[#fffaf1] p-7 shadow-soft ring-1 ring-ink/5"
            >
              <Quote className="text-saffron" size={34} />
              <p className="mt-6 text-lg font-semibold leading-8 text-ink/76">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-8 border-t border-ink/10 pt-5">
                <h3 className="font-black text-ink">{testimonial.name}</h3>
                <p className="mt-1 text-sm font-semibold text-ink/56">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="bg-[#fffaf1] py-24">
      <div className="section-shell overflow-hidden rounded-[2rem] bg-campus-green shadow-glow">
        <div className="grid gap-8 p-8 text-white md:grid-cols-[1fr_0.8fr] md:p-12 lg:p-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white/90">
              <ShieldCheck size={17} />
              Admissions open for future-ready learners
            </div>
            <h2 className="text-balance mt-6 text-4xl font-black leading-tight sm:text-5xl">
              Start with curiosity. Graduate with direction.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
              Connect with the admissions team, explore programme options, and discover how
              JG University can help shape your next chapter.
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-white p-6 text-ink shadow-soft">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-saffron/18 text-ink">
                <GraduationCap size={25} />
              </div>
              <div>
                <h3 className="font-black">Quick Enquiry</h3>
                <p className="text-sm font-semibold text-ink/58">Ahmedabad campus</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <a
                href="mailto:connect@jguni.in"
                className="flex items-center justify-between rounded-2xl border border-ink/10 p-4 font-bold transition hover:border-campus-green/30 hover:bg-campus-green/5"
              >
                connect@jguni.in <ArrowRight size={18} />
              </a>
              <a
                href="tel:+917567756759"
                className="flex items-center justify-between rounded-2xl border border-ink/10 p-4 font-bold transition hover:border-campus-green/30 hover:bg-campus-green/5"
              >
                +91 75677 56759 <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink py-12 text-white">
      <div className="section-shell grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-full bg-white text-sm font-black text-ink">
              JG
            </span>
            <div>
              <h2 className="font-black">JG University</h2>
              <p className="text-sm font-semibold text-white/52">Knowledge beyond books</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl leading-7 text-white/62">
            A modern landing page concept inspired by JG University&apos;s public website,
            redesigned for clarity, visual energy, and responsive student discovery.
          </p>
        </div>
        <div className="grid gap-3 text-sm font-semibold text-white/68 sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <MapPin size={17} className="text-saffron" />
            Drive-In Road, Ahmedabad
          </div>
          <div className="flex items-center gap-2">
            <Building2 size={17} className="text-saffron" />
            Sponsored by ASIA Charitable Trust
          </div>
          <div className="flex items-center gap-2">
            <UsersRound size={17} className="text-saffron" />
            Industry-connected learning
          </div>
          <div className="flex items-center gap-2">
            <BadgeCheck size={17} className="text-saffron" />
            UGC approved
          </div>
        </div>
      </div>
    </footer>
  );
}
