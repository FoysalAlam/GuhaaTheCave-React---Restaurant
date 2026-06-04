import React from 'react';

const groups = [
  { title: 'Accessibility', items: ['Wheelchair-accessible car park', 'Wheelchair-accessible entrance', 'Wheelchair-accessible seating', 'Braille menu available'] },
  { title: 'Atmosphere', items: ['Casual & cosy', 'Romantic setting', 'Trendy & upmarket', 'Cave-themed interiors'] },
  { title: 'Amenities', items: ['Free Wi-Fi', 'Gender-neutral toilets', 'Air conditioning', 'Smoking zone'] },
  { title: 'Great For', items: ['Families with kids', 'Groups & gatherings', 'Solo dining', 'University students', 'Romantic dinners'] },
  { title: 'Offerings', items: ['Vegetarian options', 'Organic dishes', 'Kids menu', 'Small plates', 'Happy-hour food'] },
  { title: 'Dining Options', items: ['Brunch', 'Lunch', 'Dinner', 'Dessert', 'Quick bite', 'Catering'] },
  { title: 'Payments', items: ['Credit cards', 'Debit cards', 'NFC mobile payments'] },
  { title: 'Parking', items: ['Free multi-storey car park', 'Paid multi-storey car park', 'Paid parking lot'] },
];

function Amenities() {
  return (
    <section id="amenities" className="cave-section cave-section-dark">
      <div className="container">
        <span className="section-label">Facilities</span>
        <h2 className="section-title">Amenities &amp; Access</h2>
        <div className="gold-line"></div>
        <div className="row g-4 mt-2">
          {groups.map((g, i) => (
            <div className="col-sm-6 col-lg-3" key={i}>
              <div className="amenity-group h-100 p-3">
                <h4 className="amenity-title">{g.title}</h4>
                <ul className="amenity-list list-unstyled mb-0">
                  {g.items.map((item, j) => (
                    <li key={j} className="amenity-item">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Amenities;
