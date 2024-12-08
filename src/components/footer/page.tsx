// components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">

    <div className="bg-white bg-opacity-5 text-white py-10 mb-10 text-center">
    <h2 className="text-4xl font-bold mb-6">Today's Top Offer</h2>
  <p className="text-lg mb-8">Don't miss out on our exclusive deals and special offers!</p>
  <button className="bg-white text-black px-6 py-3 font-bold uppercase hover:bg-gray-300 transition duration-300">
    Shop Now
  </button>
    </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="font-bold uppercase mb-4">Contact</h3>
            <p>A: Seestrasse 21, Zurich, CH</p>
            <p>T: +417 17 4178 88</p>
            <p>Email: <a href="mailto:askka@qodeinteractive.com" className="hover:underline">askka@qodeinteractive.com</a></p>
            <p>IG: <span className="hover:underline">_askkacandleshop</span></p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-bold uppercase mb-4">Services</h3>
            <ul>
              <li><a href="#" className="hover:underline">Exclusive offers</a></li>
              <li><a href="#" className="hover:underline">Gifts</a></li>
              <li><a href="#" className="hover:underline">Store location</a></li>
              <li><a href="#" className="hover:underline">Corporate sales</a></li>
            </ul>
          </div>

          {/* Orders Section */}
          <div>
            <h3 className="font-bold uppercase mb-4">Orders</h3>
            <ul>
              <li><a href="#" className="hover:underline">My account</a></li>
              <li><a href="#" className="hover:underline">Delivery information</a></li>
              <li><a href="#" className="hover:underline">Track my order</a></li>
              <li><a href="#" className="hover:underline">Help</a></li>
            </ul>
          </div>

          {/* Most Popular Section */}
          <div>
            <h3 className="font-bold uppercase mb-4">Most Popular</h3>
            <ul>
              <li><a href="#" className="hover:underline">Bergamot Collection</a></li>
              <li><a href="#" className="hover:underline">Huile divine</a></li>
              <li><a href="#" className="hover:underline">La note de Paris</a></li>
              <li><a href="#" className="hover:underline">Pachouli Home</a></li>
            </ul>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="flex justify-center space-x-6 mt-6">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">YouTube</a>
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
