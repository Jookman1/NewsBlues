import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <ScrollReveal effect="fade-up">
      <div className="bg-gray-800/90 p-8 rounded-lg max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Request a Call Back</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input
                type="text"
                placeholder="e.g., Julia"
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                placeholder="e.g., Johnson"
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="e.g., example@mail.com"
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              placeholder="e.g., 555-555-555"
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded font-semibold hover:bg-primary-dark transition-colors"
          >
            Register Now
          </button>
        </form>
      </div>
    </ScrollReveal>
  );
}