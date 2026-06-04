import React from 'react';

const reviews = [
  { stars: 5, text: 'The interior was marvelous! They managed to bring a real cave-like vibe through the decor. The atmosphere is nice and the service is not bad at all.', author: 'Aysa A.', date: 'September 2024 · Google' },
  { stars: 5, text: 'The food was good and their service was pretty amazing. A truly unique dining experience you won\'t find anywhere else in Dhaka.', author: 'Ahmmed Fahim', date: 'August 2023 · Reserveit' },
  { stars: 5, text: 'Though it\'s on the 9th floor, it feels like entering underground — a real cave experience. Very popular in Dhanmondi. Staff behavior is very satisfactory.', author: 'Verified Diner', date: '2024 · Google Maps' },
  { stars: 4, text: 'A cave themed restaurant with interesting interiors. Variety of tasty dishes, desserts and drinks. They also offer free Wi-Fi. Highly recommend.', author: 'Regular Guest', date: '2024 · Top-Rated.Online' },
  { stars: 5, text: 'This place is quite different and out of the box as a restaurant. It has a very different ambience. The panoramic views of Dhaka from up here are breathtaking.', author: 'Shoyeb Mohammad K.', date: '2024 · Google' },
  { stars: 5, text: 'Very good! The food, the service, and above all the ambiance — everything comes together beautifully. Make sure to reserve in advance on weekends.', author: 'Soad Noor', date: 'December 2023 · Reserveit' },
];

function Stars({ count }) {
  return (
    <div className="review-stars mb-2">
      {'★'.repeat(count)}{'☆'.repeat(5 - count)}
    </div>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="cave-section">
      <div className="container">
        <span className="section-label">Guest Voices</span>
        <h2 className="section-title">What People Say</h2>
        <div className="gold-line"></div>
        <div className="row g-4 mt-2">
          {reviews.map((r, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="review-card h-100 p-4">
                <Stars count={r.stars} />
                <p className="review-text">"{r.text}"</p>
                <p className="review-author mt-auto mb-0">{r.author}</p>
                <p className="review-date">{r.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
