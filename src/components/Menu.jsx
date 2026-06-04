import React, { useState } from 'react';

const menuItems = [
  { name: 'French Fries', desc: '', price: '৳225', category: 'appetizer' },
  { name: 'Spicy Drumsticks', desc: 'Imported', price: '৳299', category: 'appetizer' },
  { name: 'Cheese Fried Deep', desc: '3 pcs', price: '৳320', category: 'appetizer' },
  { name: 'Chicken Lollipop', desc: '4 pcs', price: '৳355', category: 'appetizer' },
  { name: 'Club Sandwich', desc: '6 pcs', price: '৳390', category: 'appetizer' },
  { name: 'Fish & Chips', desc: '', price: '৳395', category: 'appetizer' },
  { name: 'Cashewnut Salad', desc: '', price: '৳425', category: 'salad' },
  { name: 'Honeynut Salad', desc: '', price: '৳465', category: 'salad' },
  { name: 'Parmesan Carbonara', desc: '', price: '৳499', category: 'pasta' },
  { name: "Pasta D'al Fredo", desc: 'Creamy pan pasta', price: '৳370', category: 'pasta' },
  { name: 'Italiano Baked Pasta', desc: 'Naga / Regular', price: '৳380', category: 'pasta' },
  { name: 'Al Fredo Pizza', desc: '9" or 12"', price: '৳499', category: 'pizza' },
  { name: 'Orange BBQ Pizza', desc: '9" or 12"', price: '৳575', category: 'pizza' },
  { name: 'Cave Special Pizza', desc: '9" or 12"', price: '৳599', category: 'pizza' },
  { name: 'Cheese Blast Pizza', desc: '9" or 12"', price: '৳600', category: 'pizza' },
  { name: 'French Fries', desc: '', price: '৳225', category: 'bitelite' },
  { name: 'Spicy Drumsticks', desc: 'Imported', price: '৳299', category: 'bitelite' },
  { name: 'Cheese Fried Deep', desc: '3 pcs', price: '৳320', category: 'bitelite' },
  { name: 'Chicken Lollipop', desc: '4 pcs', price: '৳355', category: 'bitelite' },
  { name: 'Club Sandwich', desc: '6 pcs', price: '৳390', category: 'bitelite' },
  { name: 'Fish & Chips', desc: '', price: '৳395', category: 'bitelite' },
  { name: 'Cheesy Chicken Cutlet', desc: '', price: '৳395', category: 'mains' },
  { name: 'Chicken A La Crème', desc: 'Choose any 2 sides: spanish rice, sautéed vegetables, fries/mashed potato & corn', price: '৳399', category: 'mains' },
  { name: 'BBQ Chicken', desc: 'Choose any 2 sides: spanish rice, sautéed vegetables, fries/mashed potato & corn', price: '৳425', category: 'mains' },
  { name: 'Peri Peri Chicken', desc: 'Choose any 2 sides: spanish rice, sautéed vegetables, fries/mashed potato & corn', price: '৳445', category: 'mains' },
  { name: 'Drumstick Combo', desc: 'Choose any 2 sides: spanish rice, sautéed vegetables, fries/mashed potato & corn', price: '৳449', category: 'mains' },
  { name: 'Chicken Brochette', desc: 'Choose any 2 sides: spanish rice, sautéed vegetables, fries/mashed potato & corn', price: '৳450', category: 'mains' },
  { name: 'Chicken Cordon Bleu', desc: 'Choose any 2 sides: spanish rice, sautéed vegetables, fries/mashed potato & corn', price: '৳499', category: 'mains' },
  { name: 'Signature Grilled Fish', desc: '', price: '৳440', category: 'beef' },
  { name: 'Lebanese Chicken Grill', desc: '', price: '৳499', category: 'beef' },
  { name: 'Shish Tawook', desc: '', price: '৳599', category: 'beef' },
  { name: 'Beef Steak', desc: '', price: '৳799', category: 'beef' },
  { name: 'Steak Platter', desc: '', price: '৳1,111', category: 'beef' },
  { name: 'Water', desc: 'MRP', price: '৳49', category: 'mocktails' },
  { name: 'Lemonade', desc: '', price: '৳165', category: 'mocktails' },
  { name: 'Seasonal Fresh Juice', desc: '', price: '৳265', category: 'mocktails' },
  { name: 'Virgin Mojito', desc: '', price: '৳290', category: 'mocktails' },
  { name: 'Vanilla Ice-Cream', desc: '', price: '৳220', category: 'desserts' },
  { name: 'Lava Cake With Ice-Cream', desc: '', price: '৳225', category: 'desserts' },
  { name: 'Chocolate Ice-Cream', desc: '', price: '৳235', category: 'desserts' },
  { name: 'Strawberry Ice-Cream', desc: '', price: '৳245', category: 'desserts' },
  { name: 'Red Velvet Cheesecake', desc: '', price: '৳255', category: 'desserts' },
  { name: 'Mango Sticky Rice', desc: '', price: '৳325', category: 'desserts' },
  { name: 'Strawberry Shake', desc: '', price: '৳245', category: 'shakes' },
  { name: 'Dark Chocolate Shake', desc: '', price: '৳275', category: 'shakes' },
  { name: 'Black Coffee', desc: '', price: '৳125', category: 'coffee' },
  { name: 'Hot Coffee', desc: '', price: '৳155', category: 'coffee' },
  { name: 'Iced Coffee', desc: '', price: '৳195', category: 'coffee' },
  { name: 'Stuffed Chicken', desc: 'Special menu item', price: 'Ask staff', category: 'special' },
  { name: 'Chicken Brochette', desc: 'Special menu item', price: 'Ask staff', category: 'special' },
  { name: 'Teriyaki Chicken', desc: 'Special menu item', price: 'Ask staff', category: 'special' },
  { name: 'Grilled Pomfret', desc: 'Special menu item', price: 'Ask staff', category: 'special' },
  { name: 'Mix Chowmein', desc: '', price: 'Ask staff', category: 'special' },
  { name: 'Spicy Fried Chicken', desc: '4 pcs', price: 'Ask staff', category: 'special' },
  { name: 'Thai Soup', desc: '', price: 'Ask staff', category: 'special' },
  { name: 'Cream Of Mushroom', desc: '', price: 'Ask staff', category: 'special' },
];

const tabs = [
  { key: 'all', label: 'All' },
  { key: 'appetizer', label: 'Appetizer' },
  { key: 'salad', label: 'Salad' },
  { key: 'pasta', label: 'Pasta' },
  { key: 'pizza', label: 'Pizza' },
  { key: 'bitelite', label: 'Bite Lite' },
  { key: 'mains', label: 'Mains' },
  { key: 'beef', label: 'Beef & Seafood' },
  { key: 'mocktails', label: 'Mocktails' },
  { key: 'desserts', label: 'Desserts' },
  { key: 'shakes', label: 'Shakes' },
  { key: 'coffee', label: 'Coffee' },
  { key: 'special', label: 'Special Menu' },
];

function Menu() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? menuItems : menuItems.filter(i => i.category === active);

  return (
    <section id="menu" className="cave-section cave-section-dark">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-label">What We Serve</span>
          <h2 className="section-title">The Menu</h2>
          <div className="gold-line mx-auto"></div>
        </div>

        {/* Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`menu-tab ${active === tab.key ? 'active' : ''}`}
              onClick={() => setActive(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="row g-3">
          {filtered.map((item, idx) => (
            <div className="col-sm-6 col-lg-4" key={idx}>
              <div className="menu-card h-100">
                <div className="d-flex justify-content-between align-items-start gap-2">
                  <span className="menu-item-name">{item.name}</span>
                  <span className="menu-item-price">{item.price}</span>
                </div>
                {item.desc && <p className="menu-item-desc mt-1">{item.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
