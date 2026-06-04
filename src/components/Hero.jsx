import React, { useEffect } from 'react';

function Hero() {
  useEffect(() => {
    const container = document.getElementById('embers');
    if (!container) return;
    for (let i = 0; i < 25; i++) {
      const e = document.createElement('div');
      e.className = 'ember';
      const size = Math.random() * 3 + 1;
      e.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;animation-duration:${Math.random()*8+6}s;animation-delay:${Math.random()*8}s;`;
      container.appendChild(e);
    }
  }, []);

  return (
    <section id="hero" className="hero-section d-flex align-items-center justify-content-center text-center">
      {/* Stalactites */}
      <svg className="stalactites" viewBox="0 0 1440 220" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 L0,60 C30,60 30,140 50,140 C70,140 70,80 90,80 C110,80 110,160 130,160 C150,160 150,90 170,90 C190,90 190,170 210,170 C230,170 230,100 250,100 C270,100 270,180 290,180 C310,180 310,70 330,70 C350,70 350,150 370,150 C390,150 390,95 410,95 C430,95 430,175 450,175 C470,175 470,110 490,110 C510,110 510,60 530,60 C550,60 550,145 570,145 C590,145 590,85 610,85 C630,85 630,165 650,165 C670,165 670,100 690,100 C710,100 710,180 730,180 C750,180 750,70 770,70 C790,70 790,155 810,155 C830,155 830,90 850,90 C870,90 870,170 890,170 C910,170 910,105 930,105 C950,105 950,55 970,55 C990,55 990,140 1010,140 C1030,140 1030,80 1050,80 C1070,80 1070,160 1090,160 C1110,160 1110,95 1130,95 C1150,95 1150,175 1170,175 C1190,175 1190,110 1210,110 C1230,110 1230,65 1250,65 C1270,65 1270,150 1290,150 C1310,150 1310,85 1330,85 C1350,85 1350,170 1370,170 C1390,170 1390,100 1410,100 L1440,100 L1440,0 Z" fill="#1a1410" opacity=".9"/>
        <path d="M0,0 L0,40 C20,40 20,110 40,110 C60,110 60,55 80,55 C100,55 100,130 120,130 C140,130 140,75 160,75 C180,75 180,125 200,125 C220,125 220,60 240,60 C260,60 260,135 280,135 C300,135 300,50 320,50 C340,50 340,120 360,120 C380,120 380,80 400,80 C420,80 420,150 440,150 C460,150 460,90 480,90 C500,90 500,40 520,40 C540,40 540,115 560,115 C580,115 580,70 600,70 C620,70 620,145 640,145 C660,145 660,85 680,85 C700,85 700,160 720,160 C740,160 740,50 760,50 C780,50 780,130 800,130 C820,130 820,75 840,75 C860,75 860,150 880,150 C900,150 900,90 920,90 C940,90 940,45 960,45 C980,45 980,120 1000,120 C1020,120 1020,65 1040,65 C1060,65 1060,140 1080,140 C1100,140 1100,80 1120,80 C1140,80 1140,155 1160,155 C1180,155 1180,95 1200,95 C1220,95 1220,50 1240,50 C1260,50 1260,125 1280,125 C1300,125 1300,70 1320,70 C1340,70 1340,145 1360,145 C1380,145 1380,85 1400,85 L1440,85 L1440,0 Z" fill="#0d0b08" opacity=".95"/>
      </svg>

      <div id="embers" className="embers"></div>

      <div className="hero-content position-relative">
        <p className="hero-eyebrow">Dhanmondi, Dhaka · Est. 2015</p>
        <h1 className="hero-title">Guhaa<br /><span className="text-gold">The Cave Kitchen</span></h1>
        <p className="hero-subtitle">Continental Dining · 9th Floor, Rangs KB Square</p>
        <div className="hero-divider mx-auto"></div>
        <p className="hero-tagline">Where culinary artistry meets the depths of the earth</p>
        <div className="d-flex gap-3 justify-content-center mt-4">
          <a href="#reserve" className="btn btn-cave-primary">Reserve a Table</a>
          <a href="#menu" className="btn btn-cave-outline">Explore Menu</a>
        </div>
      </div>

      <div className="scroll-hint">
        <span>Descend</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
