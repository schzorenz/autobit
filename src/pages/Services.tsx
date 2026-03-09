import { useState, useCallback, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  { id: "automation", eyebrow: "Workflow Automation", heading: "Eliminate manual work.", desc: "Zapier, Make, n8n pipelines designed and deployed to remove repetitive tasks from your operation.", price: "From $800", timeline: "2–5 days", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=85", accent: "#2997ff" },
  { id: "ai-agents", eyebrow: "AI Agents", heading: "Custom AI that works 24/7.", desc: "Purpose-built AI agents for customer support, lead qualification, data processing, and internal operations.", price: "From $1,200", timeline: "5–10 days", image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=85", accent: "#30d158" },
  { id: "web-apps", eyebrow: "Web Applications", heading: "Dashboards, CRMs, and SaaS tools.", desc: "React, Firebase, Vercel. Full-stack web applications built for speed, scale, and clean UX.", price: "From $1,500", timeline: "7–14 days", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=85", accent: "#bf5af2" },
  { id: "systems", eyebrow: "Business Systems", heading: "One system. Your entire operation.", desc: "End-to-end operational software — inventory, HR, finance, scheduling — unified in one platform.", price: "From $3,000", timeline: "14–30 days", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85", accent: "#ff9f0a" },
  { id: "robotics", eyebrow: "Robotics & Physical AI", heading: "Edge AI. Industrial-grade.", desc: "PLC integration, sensor fusion, computer vision, and embedded AI for physical systems and industrial environments.", price: "From $3,000", timeline: "14–30 days", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=85", accent: "#ff375f" },
  { id: "mobile", eyebrow: "Mobile Applications", heading: "iOS + Android. Shipped fast.", desc: "React Native mobile apps — cross-platform, performant, and production-ready.", price: "From $2,000", timeline: "10–21 days", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=85", accent: "#64d2ff" },
];

const ServiceCard = ({ s }: { s: typeof services[0] }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      id={s.id}
      href="mailto:autobitofficial.ph@gmail.com"
      style={{
        display: 'flex', flexDirection: 'column', background: '#1c1c1e',
        borderRadius: '18px', overflow: 'hidden', cursor: 'pointer',
        textDecoration: 'none', flexShrink: 0, width: '300px',
        transition: 'transform 0.4s cubic-bezier(0.23,1,0.32,1)',
        transform: hovered ? 'scale(1.025)' : 'scale(1)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ padding: '24px 24px 20px' }}>
        <span style={{ display: 'block', fontSize: '11px', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' as const, color: s.accent, marginBottom: '10px' }}>{s.eyebrow}</span>
        <h3 style={{ fontSize: '19px', fontWeight: 700, letterSpacing: '-0.4px', lineHeight: 1.2, color: '#f5f5f7', margin: 0 }}>{s.heading}</h3>
        <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,255,255,0.45)', margin: '8px 0 0' }}>{s.desc}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#f5f5f7' }}>{s.price}</span>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>· {s.timeline}</span>
        </div>
        <div style={{ marginTop: '14px', fontSize: '13px', fontWeight: 500, color: s.accent, display: 'flex', alignItems: 'center', gap: '3px' }}>
          Get a quote
          <span style={{ display: 'inline-block', transition: 'transform 0.25s ease', transform: hovered ? 'translateX(3px)' : 'translateX(0)' }}>→</span>
        </div>
      </div>
      <div style={{ flex: 1, minHeight: '180px', overflow: 'hidden', position: 'relative' }}>
        <img src={s.image} alt={s.eyebrow} style={{ width: '100%', height: '100%', objectFit: 'cover' as const, display: 'block', filter: 'brightness(0.65) saturate(0.75)', transition: 'transform 0.55s cubic-bezier(0.23,1,0.32,1)', transform: hovered ? 'scale(1.07)' : 'scale(1)', minHeight: '180px' }} loading="lazy" />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${s.accent}18 0%, transparent 60%)`, pointerEvents: 'none' }} />
      </div>
    </a>
  );
};

const ScrollRow = ({ items }: { items: typeof services }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = () => {
    const el = rowRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  const scroll = (dir: 'left' | 'right') => {
    rowRef.current?.scrollBy({ left: dir === 'right' ? 340 : -340, behavior: 'smooth' });
  };

  const arrowBtn = (dir: 'left' | 'right', visible: boolean) => (
    <button onClick={() => scroll(dir)} aria-label={`Scroll ${dir}`} style={{
      position: 'absolute', top: '50%', transform: 'translateY(-50%)',
      [dir === 'left' ? 'left' : 'right']: '-18px',
      width: '36px', height: '36px', borderRadius: '50%',
      background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.12)', color: '#fff',
      fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer', opacity: visible ? 1 : 0,
      pointerEvents: visible ? 'auto' : 'none' as const,
      transition: 'opacity 0.2s', zIndex: 10,
      lineHeight: 1, padding: 0,
    }}>
      {dir === 'left' ? '‹' : '›'}
    </button>
  );

  return (
    <div style={{ position: 'relative' }}>
      {arrowBtn('left', canScrollLeft)}
      <div ref={rowRef} onScroll={updateArrows} style={{ display: 'flex', gap: '12px', overflowX: 'auto', overflowY: 'visible', paddingBottom: '8px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {items.map(s => <ServiceCard key={s.id} s={s} />)}
      </div>
      {arrowBtn('right', canScrollRight)}
    </div>
  );
};

const Services = () => {
  const [navDropdownActive, setNavDropdownActive] = useState(false);
  const handleDropdownChange = useCallback((active: boolean) => setNavDropdownActive(active), []);

  return (
    <>
      <Navbar onDropdownChange={handleDropdownChange} />
      <main style={{ filter: navDropdownActive ? 'blur(8px)' : 'none', opacity: navDropdownActive ? 0.45 : 1, transition: 'filter 0.28s cubic-bezier(0.4,0,0.2,1), opacity 0.28s cubic-bezier(0.4,0,0.2,1)' }}>
        <section style={{ background: '#000', paddingTop: '112px', paddingBottom: '96px' }}>
          <div className="section-container">

            {/* Section header — Apple style bold + muted subtitle */}
            <ScrollReveal>
              <div style={{ marginBottom: '40px' }}>
                <p style={{ fontSize: 'clamp(26px,3.5vw,34px)', fontWeight: 700, letterSpacing: '-0.6px', lineHeight: 1.25, color: '#f5f5f7', margin: 0 }}>
                  What we build.{' '}
                  <span style={{ color: 'rgba(255,255,255,0.32)', fontWeight: 500 }}>
                    Engineering services from automation to full-stack systems.
                  </span>
                </p>
              </div>
            </ScrollReveal>

            {/* Scroll row */}
            <ScrollReveal delay={0.08}>
              <ScrollRow items={services} />
            </ScrollReveal>

            {/* The Autobit difference — Apple "store difference" style */}
            <ScrollReveal delay={0.14}>
              <div style={{ marginTop: '80px' }}>
                <p style={{ fontSize: 'clamp(22px,2.8vw,28px)', fontWeight: 700, letterSpacing: '-0.4px', color: '#f5f5f7', margin: '0 0 28px' }}>
                  The Autobit difference.{' '}
                  <span style={{ color: 'rgba(255,255,255,0.32)', fontWeight: 500 }}>More reasons to work with us.</span>
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                  {[
                    { icon: '⚡', title: 'Fixed pricing.', sub: "No surprises. You know exactly what you pay before we start." },
                    { icon: '🚀', title: 'Fast delivery.', sub: "From 2 days. Most agencies take weeks. We ship in days." },
                    { icon: '🔧', title: '50% to start.', sub: "Pay half upfront. The rest only when it's done and you're happy." },
                    { icon: '🤝', title: 'Direct access.', sub: "You talk to the builder. No account managers. No middlemen." },
                  ].map((item, i) => (
                    <div key={i} style={{ background: '#1c1c1e', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.07)' }}>
                      <div style={{ fontSize: '22px', marginBottom: '12px' }}>{item.icon}</div>
                      <p style={{ fontSize: '15px', fontWeight: 600, color: '#f5f5f7', margin: '0 0 4px', letterSpacing: '-0.2px' }}>
                        {item.title}{' '}
                        <span style={{ fontWeight: 400, color: 'rgba(255,255,255,0.42)' }}>{item.sub}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={0.2}>
              <div style={{ marginTop: '56px', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                <a href="mailto:autobitofficial.ph@gmail.com" style={{ background: '#2997ff', color: '#fff', padding: '14px 32px', borderRadius: '980px', fontSize: '15px', fontWeight: 600, textDecoration: 'none', transition: 'all 0.25s ease', boxShadow: '0 0 28px rgba(41,151,255,0.22)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 48px rgba(41,151,255,0.45)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.025)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 28px rgba(41,151,255,0.22)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'; }}>
                  Start a project
                </a>
                <a href="/pricing" style={{ color: '#2997ff', fontSize: '15px', fontWeight: 500, textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '0.7'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.opacity = '1'}>
                  See pricing →
                </a>
              </div>
            </ScrollReveal>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
