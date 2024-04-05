import { Agency } from './agency';

export interface Bus {
  id: number;
  busNumber?: string;
  model?: string;
  latitude?: number;
  longitude?: number;
  amenities?: string[];
  images?: BusImage[];
  capacity?: number;
  description?: string;
  agency?: Agency;
}

export interface BusImage {
  id: number;
  imageUrl?: string;
}
