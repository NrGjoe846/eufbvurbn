import React, { useState } from 'react';
import { Calendar, Plus, LogOut, User, Image as ImageIcon, Upload, Search, Filter } from 'lucide-react';
import { User as UserType } from '../App';
import { Event } from '../types';
import { EventModal } from './EventModal';
import { RegistrationForm, RegistrationData } from './RegistrationForm';

interface DashboardProps {
  user: UserType;
  onLogout: () => void;
}

const SAMPLE_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Global Tech Summit 2024',
    date: '2024-06-15',
    time: '09:00 AM - 06:00 PM',
    location: 'Silicon Valley Convention Center, CA',
    description: 'Join the world\'s leading tech innovators for a day of groundbreaking announcements, workshops, and networking opportunities.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2400&q=80',
    capacity: 5000,
    highlights: [
      'Keynote speeches from industry leaders',
      'Interactive tech demos',
      'Networking sessions',
      'Innovation awards ceremony'
    ],
    category: 'Technology',
    price: 999,
    organizer: 'Tech Innovations Inc.',
    featured: true
  },
  {
    id: '2',
    title: 'Paris Fashion Week',
    date: '2024-09-23',
    time: '10:00 AM - 09:00 PM',
    location: 'Grand Palais, Paris',
    description: 'Experience the epitome of haute couture at the world\'s most prestigious fashion event.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=2400&q=80',
    capacity: 3000,
    highlights: [
      'Designer showcases',
      'Celebrity appearances',
      'Fashion industry networking',
      'After-party events'
    ],
    category: 'Fashion',
    price: 1500,
    organizer: 'Fédération de la Haute Couture'
  }, {
    id: '1',
    title: 'Global Tech Summit 2024',
    date: '2024-06-15',
    time: '09:00 AM - 06:00 PM',
    location: 'Silicon Valley Convention Center, CA',
    description: 'Join the world\'s leading tech innovators for a day of groundbreaking announcements, workshops, and networking opportunities.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2400&q=80',
    capacity: 5000,
    highlights: [
      'Keynote speeches from industry leaders',
      'Interactive tech demos',
      'Networking sessions',
      'Innovation awards ceremony'
    ],
    category: 'Technology',
    price: 999,
    organizer: 'Tech Innovations Inc.',
    featured: true
  },
  {
    id: '2',
    title: 'Paris Fashion Week',
    date: '2024-09-23',
    time: '10:00 AM - 09:00 PM',
    location: 'Grand Palais, Paris',
    description: 'Experience the epitome of haute couture at the world\'s most prestigious fashion event.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=2400&q=80',
    capacity: 3000,
    highlights: [
      'Designer showcases',
      'Celebrity appearances',
      'Fashion industry networking',
      'After-party events'
    ],
    category: 'Fashion',
    price: 1500,
    organizer: 'Fédération de la Haute Couture'
  }, {
    id: '1',
    title: 'Global Tech Summit 2024',
    date: '2024-06-15',
    time: '09:00 AM - 06:00 PM',
    location: 'Silicon Valley Convention Center, CA',
    description: 'Join the world\'s leading tech innovators for a day of groundbreaking announcements, workshops, and networking opportunities.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2400&q=80',
    capacity: 5000,
    highlights: [
      'Keynote speeches from industry leaders',
      'Interactive tech demos',
      'Networking sessions',
      'Innovation awards ceremony'
    ],
    category: 'Technology',
    price: 999,
    organizer: 'Tech Innovations Inc.',
    featured: true
  },
  {
    id: '2',
    title: 'Paris Fashion Week',
    date: '2024-09-23',
    time: '10:00 AM - 09:00 PM',
    location: 'Grand Palais, Paris',
    description: 'Experience the epitome of haute couture at the world\'s most prestigious fashion event.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=2400&q=80',
    capacity: 3000,
    highlights: [
      'Designer showcases',
      'Celebrity appearances',
      'Fashion industry networking',
      'After-party events'
    ],
    category: 'Fashion',
    price: 1500,
    organizer: 'Fédération de la Haute Couture'
  }, {
    id: '1',
    title: 'Global Tech Summit 2024',
    date: '2024-06-15',
    time: '09:00 AM - 06:00 PM',
    location: 'Silicon Valley Convention Center, CA',
    description: 'Join the world\'s leading tech innovators for a day of groundbreaking announcements, workshops, and networking opportunities.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2400&q=80',
    capacity: 5000,
    highlights: [
      'Keynote speeches from industry leaders',
      'Interactive tech demos',
      'Networking sessions',
      'Innovation awards ceremony'
    ],
    category: 'Technology',
    price: 999,
    organizer: 'Tech Innovations Inc.',
    featured: true
  },
  {
    id: '2',
    title: 'Paris Fashion Week',
    date: '2024-09-23',
    time: '10:00 AM - 09:00 PM',
    location: 'Grand Palais, Paris',
    description: 'Experience the epitome of haute couture at the world\'s most prestigious fashion event.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=2400&q=80',
    capacity: 3000,
    highlights: [
      'Designer showcases',
      'Celebrity appearances',
      'Fashion industry networking',
      'After-party events'
    ],
    category: 'Fashion',
    price: 1500,
    organizer: 'Fédération de la Haute Couture'
  }, {
    id: '1',
    title: 'Global Tech Summit 2024',
    date: '2024-06-15',
    time: '09:00 AM - 06:00 PM',
    location: 'Silicon Valley Convention Center, CA',
    description: 'Join the world\'s leading tech innovators for a day of groundbreaking announcements, workshops, and networking opportunities.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2400&q=80',
    capacity: 5000,
    highlights: [
      'Keynote speeches from industry leaders',
      'Interactive tech demos',
      'Networking sessions',
      'Innovation awards ceremony'
    ],
    category: 'Technology',
    price: 999,
    organizer: 'Tech Innovations Inc.',
    featured: true
  },
  {
    id: '2',
    title: 'Paris Fashion Week',
    date: '2024-09-23',
    time: '10:00 AM - 09:00 PM',
    location: 'Grand Palais, Paris',
    description: 'Experience the epitome of haute couture at the world\'s most prestigious fashion event.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=2400&q=80',
    capacity: 3000,
    highlights: [
      'Designer showcases',
      'Celebrity appearances',
      'Fashion industry networking',
      'After-party events'
    ],
    category: 'Fashion',
    price: 1500,
    organizer: 'Fédération de la Haute Couture'
  }, {
    id: '1',
    title: 'Global Tech Summit 2024',
    date: '2024-06-15',
    time: '09:00 AM - 06:00 PM',
    location: 'Silicon Valley Convention Center, CA',
    description: 'Join the world\'s leading tech innovators for a day of groundbreaking announcements, workshops, and networking opportunities.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2400&q=80',
    capacity: 5000,
    highlights: [
      'Keynote speeches from industry leaders',
      'Interactive tech demos',
      'Networking sessions',
      'Innovation awards ceremony'
    ],
    category: 'Technology',
    price: 999,
    organizer: 'Tech Innovations Inc.',
    featured: true
  },
  {
    id: '2',
    title: 'Paris Fashion Week',
    date: '2024-09-23',
    time: '10:00 AM - 09:00 PM',
    location: 'Grand Palais, Paris',
    description: 'Experience the epitome of haute couture at the world\'s most prestigious fashion event.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=2400&q=80',
    capacity: 3000,
    highlights: [
      'Designer showcases',
      'Celebrity appearances',
      'Fashion industry networking',
      'After-party events'
    ],
    category: 'Fashion',
    price: 1500,
    organizer: 'Fédération de la Haute Couture'
  }, {
    id: '1',
    title: 'Global Tech Summit 2024',
    date: '2024-06-15',
    time: '09:00 AM - 06:00 PM',
    location: 'Silicon Valley Convention Center, CA',
    description: 'Join the world\'s leading tech innovators for a day of groundbreaking announcements, workshops, and networking opportunities.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2400&q=80',
    capacity: 5000,
    highlights: [
      'Keynote speeches from industry leaders',
      'Interactive tech demos',
      'Networking sessions',
      'Innovation awards ceremony'
    ],
    category: 'Technology',
    price: 999,
    organizer: 'Tech Innovations Inc.',
    featured: true
  },
  {
    id: '2',
    title: 'Paris Fashion Week',
    date: '2024-09-23',
    time: '10:00 AM - 09:00 PM',
    location: 'Grand Palais, Paris',
    description: 'Experience the epitome of haute couture at the world\'s most prestigious fashion event.',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=2400&q=80',
    capacity: 3000,
    highlights: [
      'Designer showcases',
      'Celebrity appearances',
      'Fashion industry networking',
      'After-party events'
    ],
    category: 'Fashion',
    price: 1500,
    organizer: 'Fédération de la Haute Couture'
  },
  // ... Add 18 more events with similar detailed structure
];

function Dashboard({ user, onLogout }: DashboardProps) {
  const [events, setEvents] = useState<Event[]>(SAMPLE_EVENTS);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showNewEventForm, setShowNewEventForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showImageUpload, setShowImageUpload] = useState(false);

  const categories = ['All', 'Technology', 'Fashion', 'Music', 'Sports', 'Business', 'Art'];

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleRegister = (eventId: string) => {
    setShowRegistrationForm(true);
  };

  const handleRegistrationSubmit = (formData: RegistrationData) => {
    // Handle registration submission
    console.log('Registration submitted:', formData);
    setShowRegistrationForm(false);
    // Show success message
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full max-w-7xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 bg-blue-900/30 p-4 rounded-xl backdrop-blur-xl border border-blue-800/50">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-white font-semibold">{user.name}</h2>
            <p className="text-blue-200 text-sm">{user.email}</p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center gap-2 px-4 py-2 bg-blue-800/50 hover:bg-blue-800 rounded-lg text-white transition"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 flex flex-wrap gap-4">
        <div className="flex-1 min-w-[300px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search events..."
              className="w-full pl-10 pr-4 py-2.5 bg-blue-900/30 border border-blue-800/50 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-blue-900/30 text-blue-200 hover:bg-blue-800/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Event Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map(event => (
          <div
            key={event.id}
            onClick={() => handleEventClick(event)}
            className="group cursor-pointer"
          >
            <div className="bg-blue-900/30 rounded-xl overflow-hidden border border-blue-800/50 transition-transform hover:scale-[1.02]">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {event.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500 text-white text-sm rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-200 text-sm">{event.date}</span>
                  <span className="text-blue-200 text-sm">{event.time}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
                <p className="text-blue-200 text-sm mb-3">{event.location}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-300 text-sm">{event.category}</span>
                  <span className="text-white font-semibold">${event.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onRegister={handleRegister}
        />
      )}

      {/* Registration Form */}
      {showRegistrationForm && selectedEvent && (
        <RegistrationForm
          event={selectedEvent}
          onClose={() => setShowRegistrationForm(false)}
          onSubmit={handleRegistrationSubmit}
        />
      )}
    </div>
  );
}

export default Dashboard;