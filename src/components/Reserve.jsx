import React, { useState } from 'react';

function Reserve() {
  const [form, setForm] = useState({
    name: '', phone: '', date: '', time: '11:30 AM',
    guests: '2 Guests', occasion: 'Casual Dining', notes: ''
  });

  const handleChange = e => setForm({ ...form, [e.target.id]: e.target.value });

  const handleWhatsApp = () => {
    const msg = `Hello Guhaa! I'd like to reserve a table 🪨\n\n👤 Name: ${form.name || 'Not provided'}\n📞 Phone: ${form.phone || 'Not provided'}\n📅 Date: ${form.date || 'Not specified'}\n⏰ Time: ${form.time}\n👥 Guests: ${form.guests}\n🎉 Occasion: ${form.occasion}\n📝 Special Requests: ${form.notes || 'None'}\n\nPlease confirm my reservation. Thank you!`;
    window.open(`https://wa.me/8801971144408?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="reserve" className="cave-section cave-section-dark">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <span className="section-label">Book a Table</span>
            <h2 className="section-title">Make a Reservation</h2>
            <div className="gold-line mx-auto"></div>
            <p className="cave-text mb-4">Reserve your spot in the cave. Weekends fill up quickly — book ahead to avoid disappointment.</p>

            <div className="reserve-form text-start">
              <div className="row g-3">
                <div className="col-sm-6">
                  <label className="form-label cave-label">Full Name</label>
                  <input id="name" type="text" className="form-control cave-input" placeholder="Your name" value={form.name} onChange={handleChange} />
                </div>
                <div className="col-sm-6">
                  <label className="form-label cave-label">Phone Number</label>
                  <input id="phone" type="tel" className="form-control cave-input" placeholder="+880 ..." value={form.phone} onChange={handleChange} />
                </div>
                <div className="col-sm-6">
                  <label className="form-label cave-label">Date</label>
                  <input id="date" type="date" className="form-control cave-input" value={form.date} onChange={handleChange} />
                </div>
                <div className="col-sm-6">
                  <label className="form-label cave-label">Time</label>
                  <select id="time" className="form-select cave-input" value={form.time} onChange={handleChange}>
                    {['11:30 AM','12:00 PM','01:00 PM','02:00 PM','03:00 PM','06:00 PM','07:00 PM','08:00 PM','09:00 PM'].map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div className="col-sm-6">
                  <label className="form-label cave-label">Number of Guests</label>
                  <select id="guests" className="form-select cave-input" value={form.guests} onChange={handleChange}>
                    {['2 Guests','3 Guests','4 Guests','5 Guests','6+ Guests','Private Dining (10+)'].map(g => <option key={g}>{g}</option>)}
                  </select>
                </div>
                <div className="col-sm-6">
                  <label className="form-label cave-label">Occasion</label>
                  <select id="occasion" className="form-select cave-input" value={form.occasion} onChange={handleChange}>
                    {['Casual Dining','Birthday','Anniversary','Business Lunch','Date Night','Group Gathering'].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label cave-label">Special Requests</label>
                  <textarea id="notes" className="form-control cave-input" rows="3" placeholder="Dietary requirements, accessibility needs..." value={form.notes} onChange={handleChange}></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-whatsapp w-100 py-3" onClick={handleWhatsApp}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="me-2">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Reserve via WhatsApp
                  </button>
                </div>
              </div>
              <p className="text-center mt-3 reserve-note">Or call us: <a href="tel:+8801971144408" className="gold-link">+880 1971-144408</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reserve;
