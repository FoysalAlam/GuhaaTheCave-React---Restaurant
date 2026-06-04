import React from 'react';

function About() {
  const stats = [
    { number: '2015', label: 'Established' },
    { number: '9th', label: 'Floor, KB Square' },
    { number: '88K+', label: 'Facebook Followers' },
    { number: '27K+', label: 'Guests Visited' },
  ];

  return (
    <section id="about" className="cave-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Text */}
          <div className="col-lg-6">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">A World Beneath<br />the City</h2>
            <div className="gold-line"></div>
            <p className="cave-text">Nestled on the 9th floor of Rangs KB Square, Guhaa — The Cave Kitchen is not merely a restaurant. It is a journey into another world, where the roar of Dhaka fades and the warmth of a hidden cave embraces you.</p>
            <p className="cave-text">Since 2015, we have been crafting exceptional continental cuisine amid cave-like interiors of warm lighting, rustic stone walls, and panoramic views of Dhaka's skyline.</p>
            <p className="cave-text">Every dish is made with care, every guest treated as a treasured visitor to our underground sanctuary.</p>
            <div className="row g-3 mt-2">
              {stats.map(s => (
                <div className="col-6" key={s.label}>
                  <div className="cave-stat">
                    <div className="stat-number">{s.number}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Visual */}
          <div className="col-lg-6 d-none d-lg-block">
            <div className="cave-frame text-center p-5">
              <img src="logo.png" alt="Guhaa Logo" className="cave-logo-img mb-4" />
              <p className="cave-quote">"Our first priority is guest satisfaction &amp; quality food service with a very different ambiance"</p>
              <p className="estd mt-3">— Guhaa, Est. 2015</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
