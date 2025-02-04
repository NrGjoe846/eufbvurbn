import React, { useState } from 'react';
import { X, User, Mail, Phone, Building } from 'lucide-react';
import { Event } from '../types';

interface RegistrationFormProps {
  event: Event;
  onClose: () => void;
  onSubmit: (formData: RegistrationData) => void;
}

export interface RegistrationData {
  eventId: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  dietaryRequirements: string;
  specialRequests: string;
}

export function RegistrationForm({ event, onClose, onSubmit }: RegistrationFormProps) {
  const [formData, setFormData] = useState<Omit<RegistrationData, 'eventId'>>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    dietaryRequirements: '',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      eventId: event.id,
      ...formData
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-blue-900/95 to-blue-800/95 backdrop-blur-xl rounded-xl w-full max-w-lg">
        <div className="flex items-center justify-between p-6 border-b border-blue-700">
          <h2 className="text-xl font-semibold text-white">Register for {event.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-blue-800 rounded-full text-blue-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-blue-100 mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300" />
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 bg-blue-800/50 border border-blue-700 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-100 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 bg-blue-800/50 border border-blue-700 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-100 mb-1">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300" />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 bg-blue-800/50 border border-blue-700 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-100 mb-1">
                Company/Organization
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300" />
                <input
                  type="text"
                  value={formData.company}
                  onChange={e => setFormData({ ...formData, company: e.target.value })}
                  className="w-full pl-10 pr-4 py-2 bg-blue-800/50 border border-blue-700 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your company name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-100 mb-1">
                Dietary Requirements
              </label>
              <textarea
                value={formData.dietaryRequirements}
                onChange={e => setFormData({ ...formData, dietaryRequirements: e.target.value })}
                className="w-full px-4 py-2 bg-blue-800/50 border border-blue-700 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Any dietary requirements?"
                rows={2}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-100 mb-1">
                Special Requests
              </label>
              <textarea
                value={formData.specialRequests}
                onChange={e => setFormData({ ...formData, specialRequests: e.target.value })}
                className="w-full px-4 py-2 bg-blue-800/50 border border-blue-700 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Any special requests or accommodations?"
                rows={2}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 py-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition"
            >
              Complete Registration
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 bg-blue-800/50 hover:bg-blue-800 text-white rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}