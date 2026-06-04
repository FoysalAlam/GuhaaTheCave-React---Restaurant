import React from 'react';

const highlights = [
  { icon: '🔥', name: 'Fireplace', desc: 'Warm ambiance with a crackling fireplace at the heart of the cave' },
  { icon: '🎵', name: 'Live Music', desc: 'Curated live performances to elevate your dining experience' },
  { icon: '☕', name: 'Great Coffee', desc: 'Expertly brewed coffees including our beloved cappuccino' },
  { icon: '🍮', name: 'Great Dessert', desc: 'Red Velvet, Lava Cake & more — desserts worth the journey' },
  { icon: '📺', name: 'Sports Lounge', desc: 'Catch the game on our screens while you dine' },
  { icon: '🌿', name: 'Organic Dishes', desc: 'Fresh, quality ingredients with organic and vegetarian options' },
  { icon: '🏛️', name: 'Private Dining', desc: 'Exclusive private dining room for special occasions and events' },
  { icon: '♿', name: 'Fully Accessible', desc: 'Wheelchair-accessible entrance, car park, and seating available' },
];

function Highlights() {
  return (
    <section id="highlights" className="cave-section">
      <div className="container">
        <span className="section-label">Experience</span>
        <h2 className="section-title">What Makes Us Special</h2>
        <div className="gold-line"></div>
        <div className="row g-4 mt-2">
          {highlights.map((h, i) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={i}>
              <div className="highlight-card text-center h-100 p-4">
                <div className="highlight-icon mb-3">{h.icon}</div>
                <div className="highlight-name mb-2">{h.name}</div>
                <div className="highlight-desc">{h.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
