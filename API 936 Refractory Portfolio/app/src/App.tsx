import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ArrowRight, 
  Briefcase, 
  CheckCircle,
  Linkedin,
  FileText,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const consultantRef = useRef<HTMLDivElement>(null);
  const globalRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      const heroTl = gsap.timeline({ delay: 0.3 });
      heroTl
        .fromTo('.hero-bg', { opacity: 0 }, { opacity: 1, duration: 0.8 })
        .fromTo('.hero-plate', { x: '-60vw', opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .fromTo('.hero-name span', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.04, ease: 'power3.out' }, '-=0.4')
        .fromTo('.hero-rule', { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.2')
        .fromTo('.hero-subtitle', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
        .fromTo('.hero-body', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
        .fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
        .fromTo('.hero-vertical', { x: '12vw', opacity: 0 }, { x: 0, opacity: 1, duration: 0.6 }, '-=0.5');

      // Hero scroll exit animation
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress > 0.7) {
            const exitProgress = (progress - 0.7) / 0.3;
            gsap.set('.hero-plate', { x: -55 * exitProgress + 'vw', opacity: 1 - exitProgress * 0.75 });
            gsap.set('.hero-vertical', { x: 10 * exitProgress + 'vw', opacity: 1 - exitProgress * 0.8 });
            gsap.set('.hero-bg', { y: -6 * exitProgress + 'vh', scale: 1 + 0.04 * exitProgress });
          }
        },
        onLeaveBack: () => {
          gsap.set('.hero-plate', { x: 0, opacity: 1 });
          gsap.set('.hero-vertical', { x: 0, opacity: 1 });
          gsap.set('.hero-bg', { y: 0, scale: 1 });
        }
      });

      // Consultant Section
      ScrollTrigger.create({
        trigger: consultantRef.current,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress <= 0.3) {
            const enterProgress = progress / 0.3;
            gsap.set('.consultant-plate', { x: -70 * (1 - enterProgress) + 'vw', opacity: enterProgress });
            gsap.set('.consultant-headline', { y: 12 * (1 - enterProgress) + 'vh', opacity: enterProgress });
            gsap.set('.consultant-rule', { scaleX: enterProgress });
            gsap.set('.consultant-vertical', { x: 12 * (1 - enterProgress) + 'vw', opacity: enterProgress });
          } else if (progress > 0.7) {
            const exitProgress = (progress - 0.7) / 0.3;
            gsap.set('.consultant-plate', { x: -40 * exitProgress + 'vw', opacity: 1 - exitProgress * 0.75 });
            gsap.set('.consultant-vertical', { x: 10 * exitProgress + 'vw', opacity: 1 - exitProgress * 0.8 });
          }
        }
      });

      // Global Section
      ScrollTrigger.create({
        trigger: globalRef.current,
        start: 'top top',
        end: '+=140%',
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress <= 0.3) {
            const enterProgress = progress / 0.3;
            gsap.set('.global-plate', { x: -70 * (1 - enterProgress) + 'vw', opacity: enterProgress });
            gsap.set('.global-map', { opacity: enterProgress, scale: 0.95 + 0.05 * enterProgress });
            gsap.set('.global-vertical', { x: 12 * (1 - enterProgress) + 'vw', opacity: enterProgress });
          } else if (progress > 0.7) {
            const exitProgress = (progress - 0.7) / 0.3;
            gsap.set('.global-plate', { x: -40 * exitProgress + 'vw', opacity: 1 - exitProgress * 0.75 });
            gsap.set('.global-map', { scale: 1 - 0.04 * exitProgress, opacity: 1 - exitProgress * 0.65 });
          }
        }
      });

      // Services Section
      ScrollTrigger.create({
        trigger: servicesRef.current,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress <= 0.3) {
            const enterProgress = progress / 0.3;
            gsap.set('.services-plate', { x: -70 * (1 - enterProgress) + 'vw', opacity: enterProgress });
            gsap.set('.service-block', { x: -10 * (1 - enterProgress) + 'vw', opacity: enterProgress });
            gsap.set('.service-line', { scaleX: enterProgress });
            gsap.set('.services-vertical', { x: 12 * (1 - enterProgress) + 'vw', opacity: enterProgress });
          } else if (progress > 0.7) {
            const exitProgress = (progress - 0.7) / 0.3;
            gsap.set('.services-plate', { x: -40 * exitProgress + 'vw', opacity: 1 - exitProgress * 0.75 });
            gsap.set('.service-block', { y: -6 * exitProgress + 'vh', opacity: 1 - exitProgress * 0.7 });
          }
        }
      });

      // Industries Section
      ScrollTrigger.create({
        trigger: industriesRef.current,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress <= 0.3) {
            const enterProgress = progress / 0.3;
            gsap.set('.industries-plate', { x: -70 * (1 - enterProgress) + 'vw', opacity: enterProgress });
            gsap.set('.industry-item', { x: -12 * (1 - enterProgress) + 'vw', opacity: enterProgress });
            gsap.set('.industry-line', { scaleX: enterProgress });
            gsap.set('.industries-vertical', { x: 12 * (1 - enterProgress) + 'vw', opacity: enterProgress });
          } else if (progress > 0.7) {
            const exitProgress = (progress - 0.7) / 0.3;
            gsap.set('.industries-plate', { x: -40 * exitProgress + 'vw', opacity: 1 - exitProgress * 0.75 });
            gsap.set('.industry-item', { y: -4 * exitProgress + 'vh', opacity: 1 - exitProgress * 0.7 });
          }
        }
      });

      // Experience Section
      ScrollTrigger.create({
        trigger: experienceRef.current,
        start: 'top top',
        end: '+=140%',
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress <= 0.3) {
            const enterProgress = progress / 0.3;
            gsap.set('.experience-plate', { x: -70 * (1 - enterProgress) + 'vw', opacity: enterProgress });
            gsap.set('.experience-stat', { scale: 0.85 + 0.15 * enterProgress, opacity: enterProgress });
            gsap.set('.experience-tag', { x: -10 * (1 - enterProgress) + 'vw', opacity: enterProgress });
            gsap.set('.experience-vertical', { x: 12 * (1 - enterProgress) + 'vw', opacity: enterProgress });
          } else if (progress > 0.7) {
            const exitProgress = (progress - 0.7) / 0.3;
            gsap.set('.experience-plate', { x: -40 * exitProgress + 'vw', opacity: 1 - exitProgress * 0.75 });
            gsap.set('.experience-stat', { y: -6 * exitProgress + 'vh', opacity: 1 - exitProgress * 0.7 });
          }
        }
      });

      // Projects Section - Flowing
      gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
        gsap.fromTo(card, 
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Timeline Section - Flowing
      gsap.fromTo('.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: true
          }
        }
      );

      gsap.utils.toArray<HTMLElement>('.timeline-entry').forEach((entry) => {
        gsap.fromTo(entry,
          { y: 40, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: entry,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Contact Section - Flowing
      gsap.fromTo('.contact-content',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const countries = [
    'UK', 'JAPAN', 'SAUDI ARABIA', 'RUSSIA', 'TURKEY', 
    'BANGLADESH', 'MALAYSIA', 'UAE', 'TRINIDAD & TOBAGO', 'CHINA', 'INDIA'
  ];

  const services = [
    {
      title: 'API 936 REFRACTORY INSPECTION',
      description: 'Lining condition assessment, repair scope definition, and compliance verification.'
    },
    {
      title: 'SHUTDOWN & TURNAROUND SUPERVISION',
      description: 'Time-critical oversight for reformers, FCCU, and high-temperature units.'
    },
    {
      title: 'STEEL FABRICATION & QA/QC',
      description: 'Workshop inspections, dimensional control, and documentation review.'
    }
  ];

  const industries = [
    'OIL & GAS',
    'PETROCHEMICALS',
    'FERTILIZERS & AMMONIA',
    'HYDROGEN',
    'POWER GENERATION',
    'REFINING'
  ];

  const projects = [
    {
      client: 'Mitsubishi Heavy Industries',
      location: 'United Kingdom',
      title: 'Ammonia Reformer Shutdown 2025',
      description: 'Refractory inspections in primary reformer. Replacing castable to fibrous modules in bullnose area.',
      image: '/images/project_mhi_uk.jpg',
      duration: 'Feb 2025 – Present'
    },
    {
      client: 'Petro Rabigh',
      location: 'Saudi Arabia',
      title: 'FCCU Unit Outage 2024',
      description: 'Refractory inspection in reactor, regenerator, riser, spent catalyst pipe and other ducts.',
      image: '/images/project_petro_rabigh.jpg',
      duration: 'Jan – April 2024'
    },
    {
      client: 'PhosAgro Ammonia Plant',
      location: 'Russia',
      title: 'Primary Reformer Turnaround',
      description: 'Refractory supervision and inspection services for IFB & CFB rebuild to radiant walls & arch.',
      image: '/images/project_phosagro.jpg',
      duration: 'Jun – Sep 2021'
    },
    {
      client: 'Petronas SAMUR',
      location: 'Malaysia',
      title: 'Turnaround 2019',
      description: 'Refractory inspection and supervision for primary reformer, WHB, and transition.',
      image: '/images/project_petronas.jpg',
      duration: 'March – April 2019'
    },
    {
      client: 'Ruwais Refinery Expansion',
      location: 'UAE',
      title: 'Package-2 Expansion Project',
      description: 'Refractory inspection of entire lining (gunning) in CO boiler and ducts.',
      image: '/images/project_ruwais.jpg',
      duration: 'Jan – Nov 2012'
    }
  ];

  const timeline = [
    { year: '2025', title: 'MHI UK', description: 'Ammonia Reformer Shutdown – Refractory Inspections', current: true },
    { year: '2024', title: 'Petro Rabigh, Saudi Arabia', description: 'FCCU Unit Outage – Refractory Inspection' },
    { year: '2023', title: 'Tufanbeyli Power Plant, Turkey', description: 'Unit 3 Shutdown – Refractory Inspection' },
    { year: '2021-2023', title: 'MHI Bangladesh', description: 'GPUFP Fertilizers – Project Work & Applicator Pre-Qualification' },
    { year: '2021', title: 'PhosAgro Russia', description: 'Primary Reformer Shutdown – IFB/CFB Rebuild' },
    { year: '2019-2020', title: 'MHI Trinidad & Tobago', description: 'TMD Project – Reformer Tunnel Brick Installation' },
    { year: '2019', title: 'Petronas SAMUR, Malaysia', description: 'Turnaround 2019 – Primary Reformer & WHB' },
    { year: '2017-2018', title: 'MHI Russia', description: 'Thermography Monitoring & Turnaround' },
    { year: '2013-2015', title: 'Petronas SAMUR, Malaysia', description: 'Project Supervision – Reformer Installation' },
    { year: '2012', title: 'Ruwais Refinery, UAE', description: 'Expansion Package-2 – CO Boiler Inspection' },
    { year: '2006-2013', title: 'CIRIA India', description: 'Multiple Turnarounds – IOCL, RCF, Reliance, IFFCO, NFL' },
    { year: '1998-1999', title: 'Kaefer Engineering', description: 'Refractory Supervisor – MFL Manali' }
  ];

  return (
    <div className="relative">
      {/* Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Persistent Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-[4vw] py-4 flex justify-between items-center mix-blend-difference">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange flex items-center justify-center font-display font-bold text-white text-lg">
            PST
          </div>
          <span className="font-display font-semibold text-white text-sm tracking-wide hidden sm:block">
            Pawan Singh Thakur
          </span>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={() => scrollToSection(servicesRef)} className="text-white text-sm font-medium hover:text-orange transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection(projectsRef)} className="text-white text-sm font-medium hover:text-orange transition-colors">
            Projects
          </button>
          <button onClick={() => scrollToSection(contactRef)} className="text-white text-sm font-medium hover:text-orange transition-colors">
            Contact
          </button>
        </div>
      </nav>

      {/* Section 1: Hero */}
      <section ref={heroRef} className="relative w-full h-screen overflow-hidden z-10">
        <div className="hero-bg absolute inset-0">
          <img 
            src="/images/hero_refinery.jpg" 
            alt="Industrial Refinery" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/40" />
        </div>
        
        <div className="hero-plate absolute left-[6vw] top-[18vh] w-[88vw] md:w-[46vw] min-h-[56vh] bg-white-industrial p-6 md:p-10 flex flex-col justify-between">
          <div>
            <h1 className="hero-name font-display font-bold text-navy uppercase tracking-tight-custom leading-tight-custom text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {'PAWAN SINGH THAKUR'.split(' ').map((word, i) => (
                <span key={i} className="inline-block mr-3">{word}</span>
              ))}
            </h1>
            <div className="hero-rule h-0.5 bg-orange w-3/4 mt-4 origin-left" />
            <p className="hero-subtitle font-mono text-orange text-xs md:text-sm tracking-widest mt-4">
              API 936 CERTIFIED REFRACTORY CONSULTANT
            </p>
            <p className="hero-body text-graphite text-sm md:text-base mt-6 max-w-lg leading-relaxed">
              Delivering independent inspection, turnaround supervision, and technical advisory 
              for primary/secondary reformers, FCCU units, and high-temperature vessels across 
              global energy and chemical facilities.
            </p>
          </div>
          
          <div className="hero-cta flex flex-wrap gap-3 mt-8">
            <Button 
              onClick={() => scrollToSection(contactRef)}
              className="bg-orange hover:bg-orange/90 text-white font-medium px-6 py-3 rounded-sm"
            >
              Request a Proposal
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              variant="outline"
              className="border-navy text-navy hover:bg-navy hover:text-white font-medium px-6 py-3 rounded-sm"
            >
              <Download className="mr-2 w-4 h-4" />
              Download Credentials
            </Button>
          </div>
        </div>
        
        <div className="hero-vertical hidden md:block absolute right-[4vw] top-1/2 -translate-y-1/2 origin-right rotate-90">
          <span className="font-mono text-white text-xs tracking-widest">
            INDEPENDENT CONSULTANT
          </span>
        </div>
      </section>

      {/* Section 2: Independent Consultant */}
      <section ref={consultantRef} className="relative w-full h-screen overflow-hidden z-20">
        <div className="absolute inset-0">
          <img 
            src="/images/reformer_closeup_01.jpg" 
            alt="Reformer Closeup" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/40" />
        </div>
        
        <div className="consultant-plate absolute left-[6vw] top-[16vh] w-[88vw] md:w-[46vw] min-h-[64vh] bg-white-industrial p-6 md:p-10">
          <h2 className="consultant-headline font-display font-bold text-navy uppercase tracking-tight-custom leading-tight-custom text-4xl md:text-5xl lg:text-6xl">
            INDEPENDENT
          </h2>
          <p className="font-mono text-orange text-xs md:text-sm tracking-widest mt-2">
            CONSULTANT
          </p>
          <div className="consultant-rule h-0.5 bg-orange w-1/2 mt-6 origin-left" />
          <p className="text-graphite text-sm md:text-base mt-6 leading-relaxed max-w-md">
            No vendor ties. No contractor conflicts. Only objective, specification-driven 
            oversight—built on 25+ years of field execution across reformers, FCCU reactors, 
            and high-temperature vessels.
          </p>
          <button 
            onClick={() => scrollToSection(servicesRef)}
            className="inline-flex items-center gap-2 text-orange font-medium mt-6 hover:gap-3 transition-all"
          >
            Explore services <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="consultant-vertical hidden md:block absolute right-[4vw] top-1/2 -translate-y-1/2 origin-right rotate-90">
          <span className="font-mono text-white text-xs tracking-widest">
            INTERNATIONAL
          </span>
        </div>
      </section>

      {/* Section 3: Global Footprint */}
      <section ref={globalRef} className="relative w-full h-screen overflow-hidden z-30">
        <div className="absolute inset-0">
          <img 
            src="/images/reformer_closeup_02.jpg" 
            alt="Reformer Internals" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/40" />
        </div>
        
        <div className="global-plate absolute left-[6vw] top-[14vh] w-[88vw] md:w-[44vw] min-h-[68vh] bg-white-industrial p-6 md:p-8">
          <h2 className="font-display font-bold text-navy uppercase tracking-tight-custom leading-tight-custom text-4xl md:text-5xl">
            GLOBAL PROJECT
          </h2>
          <p className="font-mono text-orange text-xs md:text-sm tracking-widest mt-2">
            FOOTPRINT
          </p>
          
          {/* World Map SVG */}
          <div className="global-map mt-6 w-full">
            <svg viewBox="0 0 800 400" className="w-full h-auto">
              <defs>
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0B1C2F" />
                  <stop offset="100%" stopColor="#3F464D" />
                </linearGradient>
              </defs>
              {/* Simplified world map paths */}
              <path 
                d="M50,100 Q100,80 150,100 T250,120 T350,100 T450,90 T550,110 T650,100 T750,120" 
                fill="none" 
                stroke="url(#mapGradient)" 
                strokeWidth="1"
                opacity="0.3"
              />
              {/* Country dots */}
              {[
                { cx: 120, cy: 80, label: 'UK' },
                { cx: 680, cy: 100, label: 'JP' },
                { cx: 420, cy: 150, label: 'SA' },
                { cx: 520, cy: 70, label: 'RU' },
                { cx: 460, cy: 120, label: 'TR' },
                { cx: 600, cy: 160, label: 'BD' },
                { cx: 640, cy: 200, label: 'MY' },
                { cx: 480, cy: 160, label: 'AE' },
                { cx: 220, cy: 180, label: 'TT' },
                { cx: 660, cy: 120, label: 'CN' },
                { cx: 580, cy: 140, label: 'IN' },
              ].map((point, i) => (
                <g key={i}>
                  <circle cx={point.cx} cy={point.cy} r="4" fill="#D35400" />
                  <circle cx={point.cx} cy={point.cy} r="8" fill="#D35400" opacity="0.3">
                    <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                  </circle>
                </g>
              ))}
            </svg>
          </div>
          
          <div className="mt-4">
            <p className="font-mono text-navy text-xs tracking-wide">
              {countries.join(' • ')}
            </p>
          </div>
          
          <p className="text-gray text-xs mt-4">
            Field deployments aligned to client schedules and turnaround windows.
          </p>
        </div>
        
        <div className="global-vertical hidden md:block absolute right-[4vw] top-1/2 -translate-y-1/2 origin-right rotate-90">
          <span className="font-mono text-white text-xs tracking-widest">
            MULTI-COUNTRY
          </span>
        </div>
      </section>

      {/* Section 4: Services */}
      <section ref={servicesRef} className="relative w-full h-screen overflow-hidden z-40">
        <div className="absolute inset-0">
          <img 
            src="/images/fccu_reactor.jpg" 
            alt="FCCU Reactor" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/40" />
        </div>
        
        <div className="services-plate absolute left-[6vw] top-[14vh] w-[88vw] md:w-[46vw] min-h-[68vh] bg-white-industrial p-6 md:p-8">
          <h2 className="font-display font-bold text-navy uppercase tracking-tight-custom leading-tight-custom text-4xl md:text-5xl">
            COMPREHENSIVE
          </h2>
          <p className="font-mono text-orange text-xs md:text-sm tracking-widest mt-2">
            SERVICES
          </p>
          
          <div className="mt-8 space-y-6">
            {services.map((service, i) => (
              <div key={i} className="service-block">
                <div className="service-line h-px bg-navy/20 w-full origin-left" />
                <h3 className="font-display font-semibold text-navy text-lg mt-3">
                  {service.title}
                </h3>
                <p className="text-graphite text-sm mt-1">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="services-vertical hidden md:block absolute right-[4vw] top-1/2 -translate-y-1/2 origin-right rotate-90">
          <span className="font-mono text-white text-xs tracking-widest">
            TECHNICAL
          </span>
        </div>
      </section>

      {/* Section 5: Industries */}
      <section ref={industriesRef} className="relative w-full h-screen overflow-hidden z-50">
        <div className="absolute inset-0">
          <img 
            src="/images/reformer_train.jpg" 
            alt="Reformer Train" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/40" />
        </div>
        
        <div className="industries-plate absolute left-[6vw] top-[12vh] w-[88vw] md:w-[46vw] min-h-[72vh] bg-white-industrial p-6 md:p-8">
          <h2 className="font-display font-bold text-navy uppercase tracking-tight-custom leading-tight-custom text-4xl md:text-5xl">
            INDUSTRIES
          </h2>
          <p className="font-mono text-orange text-xs md:text-sm tracking-widest mt-2">
            SERVED
          </p>
          
          <div className="mt-8 space-y-3">
            {industries.map((industry, i) => (
              <div key={i} className="industry-item">
                <div className="industry-line h-px bg-navy/20 w-full origin-left" />
                <p className="font-display font-semibold text-navy text-xl md:text-2xl mt-2 tracking-tight">
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="industries-vertical hidden md:block absolute right-[4vw] top-1/2 -translate-y-1/2 origin-right rotate-90">
          <span className="font-mono text-white text-xs tracking-widest">
            SECTORS
          </span>
        </div>
      </section>

      {/* Section 6: Experience */}
      <section ref={experienceRef} className="relative w-full h-screen overflow-hidden z-[60]">
        <div className="absolute inset-0">
          <img 
            src="/images/reformer_header.jpg" 
            alt="Reformer Header" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/40" />
        </div>
        
        <div className="experience-plate absolute left-[6vw] top-[14vh] w-[88vw] md:w-[46vw] min-h-[68vh] bg-white-industrial p-6 md:p-8">
          <h2 className="font-display font-bold text-navy uppercase tracking-tight-custom leading-tight-custom text-4xl md:text-5xl">
            EXPERIENCE
          </h2>
          <p className="font-mono text-orange text-xs md:text-sm tracking-widest mt-2">
            YOU CAN TRUST
          </p>
          
          <div className="experience-stat mt-8">
            <span className="font-display font-bold text-navy text-7xl md:text-8xl">25+</span>
            <p className="font-mono text-graphite text-sm tracking-widest mt-2">
              YEARS OF GLOBAL FIELD EXPERIENCE
            </p>
          </div>
          
          <div className="mt-8 space-y-3">
            {[
              'REFORMER SHUTDOWN SPECIALIST',
              'FCCU REFRACTORY INSPECTION',
              'TURNAROUND QUALITY SUPERVISION'
            ].map((tag, i) => (
              <div key={i} className="experience-tag flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-orange" />
                <span className="font-mono text-navy text-xs tracking-wide">{tag}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="experience-vertical hidden md:block absolute right-[4vw] top-1/2 -translate-y-1/2 origin-right rotate-90">
          <span className="font-mono text-white text-xs tracking-widest">
            PROVEN
          </span>
        </div>
      </section>

      {/* Section 7: Selected Projects */}
      <section ref={projectsRef} className="relative bg-white-industrial py-20 z-[70]">
        <div className="px-[7vw]">
          <div className="mb-12">
            <h2 className="font-display font-bold text-navy uppercase tracking-tight-custom text-4xl md:text-5xl">
              SELECTED PROJECTS
            </h2>
            <p className="font-mono text-orange text-sm tracking-widest mt-2">
              TURNAROUNDS • EXPANSIONS • FIELD DEPLOYMENTS
            </p>
          </div>
          
          <div className="space-y-8">
            {projects.map((project, i) => (
              <div 
                key={i} 
                className="project-card bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 h-48 md:h-auto">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-3/5 p-6 md:p-8">
                    <div className="flex items-center gap-2 text-orange text-xs font-mono mb-2">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </div>
                    <p className="text-gray text-xs font-mono mb-1">{project.client}</p>
                    <h3 className="font-display font-semibold text-navy text-xl md:text-2xl mb-3">
                      {project.title}
                    </h3>
                    <p className="text-graphite text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-gray text-xs">
                      <Briefcase className="w-3 h-3" />
                      {project.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Career Timeline */}
      <section ref={timelineRef} className="relative bg-white-industrial py-20 z-[80]">
        <div className="px-[7vw]">
          <div className="mb-12">
            <h2 className="font-display font-bold text-navy uppercase tracking-tight-custom text-4xl md:text-5xl">
              CAREER TIMELINE
            </h2>
            <p className="font-mono text-orange text-sm tracking-widest mt-2">
              1998 — PRESENT
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[10vw] md:left-1/2 top-0 bottom-0 w-0.5 bg-navy/20 -translate-x-1/2">
              <div className="timeline-line absolute top-0 left-0 w-full bg-orange origin-top" />
            </div>
            
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div 
                  key={i} 
                  className={`timeline-entry relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`} />
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[10vw] md:left-1/2 -translate-x-1/2 w-4 h-4 bg-orange rounded-full border-4 border-white-industrial z-10" />
                  
                  <div className={`ml-[16vw] md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                    <div className={`bg-white rounded-xl p-5 shadow-card border-t-2 ${item.current ? 'border-orange' : 'border-transparent'}`}>
                      <span className="font-mono text-orange text-xs tracking-widest">{item.year}</span>
                      <h3 className="font-display font-semibold text-navy text-lg mt-1">{item.title}</h3>
                      <p className="text-graphite text-sm mt-2">{item.description}</p>
                      {item.current && (
                        <span className="inline-flex items-center gap-1 text-orange text-xs font-mono mt-3">
                          <span className="w-2 h-2 bg-orange rounded-full animate-pulse" />
                          CURRENT
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Contact */}
      <section ref={contactRef} className="relative bg-navy py-20 z-[90]">
        <div className="contact-content px-[7vw]">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="h-0.5 bg-orange w-24 mb-6" />
              <h2 className="font-display font-bold text-white uppercase tracking-tight-custom text-4xl md:text-5xl">
                Let's plan your next turnaround.
              </h2>
              <p className="text-silver text-base mt-6 leading-relaxed max-w-md">
                Independent oversight reduces risk, protects schedules, and keeps 
                high-temperature systems compliant. Tell me what you're planning—
                I'll respond within one business day.
              </p>
              
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3 text-silver">
                  <Mail className="w-5 h-5 text-orange" />
                  <span>pawan_ciria@yahoo.co.in</span>
                </div>
                <div className="flex items-center gap-3 text-silver">
                  <Phone className="w-5 h-5 text-orange" />
                  <span>+91-88942 71897 (India)</span>
                </div>
                <div className="flex items-center gap-3 text-silver">
                  <Phone className="w-5 h-5 text-orange" />
                  <span>+44 7981 190610 (UK)</span>
                </div>
                <div className="flex items-center gap-3 text-silver">
                  <Linkedin className="w-5 h-5 text-orange" />
                  <span>LinkedIn Profile</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Button 
                  variant="outline"
                  className="border-silver text-silver hover:bg-silver hover:text-navy font-medium px-6 py-3 rounded-sm"
                >
                  <FileText className="mr-2 w-4 h-4" />
                  Download CV
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 md:p-8">
              <h3 className="font-display font-semibold text-navy text-xl mb-6">
                Send an Inquiry
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-graphite text-sm mb-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-silver rounded-sm text-navy focus:outline-none focus:border-orange"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-graphite text-sm mb-1">Organization</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-silver rounded-sm text-navy focus:outline-none focus:border-orange"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="block text-graphite text-sm mb-1">Project Location</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-silver rounded-sm text-navy focus:outline-none focus:border-orange"
                    placeholder="Country/Region"
                  />
                </div>
                <div>
                  <label className="block text-graphite text-sm mb-1">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-silver rounded-sm text-navy focus:outline-none focus:border-orange resize-none"
                    placeholder="Describe your project requirements..."
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-orange hover:bg-orange/90 text-white font-medium py-3 rounded-sm"
                >
                  Send Inquiry
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-silver/60 text-sm">
              © 2026 Pawan Singh Thakur | Independent API 936 Refractory Consultant
            </p>
            <p className="text-silver/60 text-sm flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Based in India • Available for international deployment
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
