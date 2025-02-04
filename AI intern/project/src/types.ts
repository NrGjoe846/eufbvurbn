export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  capacity: number;
  highlights: string[];
  category: string;
  price: number;
  organizer: string;
  featured?: boolean;
}