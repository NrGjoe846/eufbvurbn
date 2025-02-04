import React from 'react';
import { X, MapPin, Calendar, Users, Clock, Share2 } from 'lucide-react';
import { Event } from '../types';

interface EventModalProps {
  event: Event;
  onClose: () => void;
  onRegister: (eventId: string) => void;
}

export function EventModal({ event, onClose, onRegister }: EventModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-gradient-to-br from-blue-900/95 to-blue-800/95 backdrop-blur-xl rounded-xl w-full max-w-3xl overflow-hidden">
        <div className="relative h-64 md:h-96">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent" />
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{event.title}</h2>
            <div className="flex flex-wrap gap-4 text-blue-100">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{event.capacity} attendees</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{event.time}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">About the Event</h3>
            <p className="text-blue-100 leading-relaxed">{event.description}</p>
            
            <div className="space-y-2">
              <h4 className="font-medium text-white">Event Highlights:</h4>
              <ul className="list-disc list-inside text-blue-100 space-y-1">
                {event.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onRegister(event.id)}
              className="flex-1 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition"
            >
              Register Now
            </button>
            <button
              className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white rounded-lg transition"
            >
              <Share2 className="w-4 h-4" />
              Share Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}