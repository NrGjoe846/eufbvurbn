import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { motion } from 'framer-motion';
import { Event } from '../types';

interface CalendarProps {
  events: Event[];
  onEventClick: (eventId: string) => void;
}

function Calendar({ events, onEventClick }: CalendarProps) {
  const calendarEvents = events.map(event => ({
    id: event.id,
    title: event.title,
    start: `${event.date}T${event.time.split(' - ')[0].replace(' ', '')}`,
    end: `${event.date}T${event.time.split(' - ')[1].replace(' ', '')}`,
    extendedProps: { ...event }
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-900/30 p-6 rounded-xl backdrop-blur-xl border border-blue-800/50 shadow-lg"
    >
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        events={calendarEvents}
        eventClick={(info) => onEventClick(info.event.id)}
        height="auto"
        eventClassNames="hover:scale-105 transition-transform cursor-pointer"
        eventBackgroundColor="#3B82F6"
        eventBorderColor="#2563EB"
        eventTextColor="#FFFFFF"
        dayCellClassNames="hover:bg-blue-800/30 transition-colors cursor-pointer"
        nowIndicator={true}
        slotMinTime="06:00:00"
        slotMaxTime="22:00:00"
      />
    </motion.div>
  );
}

export default Calendar;
