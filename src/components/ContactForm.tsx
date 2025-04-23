import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Replace this URL with your actual make.com webhook URL
      const webhookUrl = 'https://hook.eu2.make.com/h0br5uocr5cgww2c71mpwd5ozbzi2mwg';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message sent successfully!');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Error sending message. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div id="contact" className="py-20 bg-gray-900">
      <ScrollReveal effect="fade-up">
        <div className="bg-gray-800/90 p-8 rounded-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Request a Call Back</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Julia"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Johnson"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input
                type="email"
                required
                placeholder="e.g., example@mail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone *</label>
              <input
                type="tel"
                required
                placeholder="e.g., 555-555-555"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded font-semibold hover:bg-primary-dark transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </ScrollReveal>
    </div>
  );
}
