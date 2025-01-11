import React, { useState } from 'react';
import { Mail, Phone, MapPin, BriefcaseIcon } from 'lucide-react';

export default function Join() {
  const [selectedPosition, setSelectedPosition] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    hasSIA: false,
    siaNumber: '',
    availability: '',
    cvFile: null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Replace this URL with your actual make.com webhook URL
      const webhookUrl = 'YOUR_MAKE_WEBHOOK_URL';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Application submitted successfully!');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          message: '',
          hasSIA: false,
          siaNumber: '',
          availability: '',
          cvFile: null
        });
        setSelectedPosition('');
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      alert('Error submitting application. Please try again.');
      console.error('Error:', error);
    }
  };

  const handlePositionSelect = (title: string) => {
    setSelectedPosition(title);
    setFormData(prev => ({ ...prev, position: title }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Join Our Team</h1>
        
        <div className="max-w-4xl mx-auto">
          {!selectedPosition ? (
            <div className="bg-gray-800 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-4">Career Opportunities</h2>
              <p className="text-gray-300 mb-6">
                Join one of the UK's most professional and respected security companies. We're always looking 
                for talented individuals who share our commitment to excellence and professionalism.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {positions.map((position, index) => (
                  <div key={index} className="border border-gray-700 p-6 rounded-lg">
                    <BriefcaseIcon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                    <p className="text-gray-300 mb-4">{position.description}</p>
                    <ul className="space-y-2 mb-6">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={() => handlePositionSelect(position.title)}
                      className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors"
                    >
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-gray-800 p-8 rounded-lg mb-12">
              <button 
                onClick={() => setSelectedPosition('')}
                className="text-primary mb-6 hover:underline flex items-center"
              >
                ← Back to positions
              </button>
              
              <h2 className="text-2xl font-bold mb-6">Apply for {selectedPosition}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Years of Experience *</label>
                  <select
                    required
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Availability *</label>
                  <select
                    required
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select availability</option>
                    <option value="full-time">Full Time</option>
                    <option value="part-time">Part Time</option>
                    <option value="weekends">Weekends Only</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={formData.hasSIA}
                      onChange={(e) => setFormData({ ...formData, hasSIA: e.target.checked })}
                      className="rounded bg-gray-700 border-gray-600 text-primary focus:ring-primary"
                    />
                    <span className="text-sm font-medium">I have an SIA License</span>
                  </label>
                </div>

                {formData.hasSIA && (
                  <div>
                    <label className="block text-sm font-medium mb-2">SIA License Number *</label>
                    <input
                      type="text"
                      required
                      value={formData.siaNumber}
                      onChange={(e) => setFormData({ ...formData, siaNumber: e.target.value })}
                      className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Information</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Tell us why you'd be a great fit for this position..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded font-semibold hover:bg-primary-dark transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>
          )}

          <div className="bg-gray-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-primary mr-3" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-300">07939119680</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-primary mr-3" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-300">careers@kairosecurity.co.uk</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-primary mr-3" />
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-gray-300">United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const positions = [
  {
    title: "Door Supervisor",
    description: "Join our team of professional door supervisors at various venues across the UK.",
    requirements: [
      "Valid SIA Door Supervisor License",
      "Excellent communication skills",
      "Professional appearance",
      "Flexible availability",
      "Customer service oriented"
    ]
  },
  {
    title: "Event Security Officer",
    description: "Work at exciting events and festivals providing essential security services.",
    requirements: [
      "SIA License required",
      "Experience in event security preferred",
      "Strong team player",
      "Ability to work varying schedules",
      "Physical fitness required"
    ]
  }
];