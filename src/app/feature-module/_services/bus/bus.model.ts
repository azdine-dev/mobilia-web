import { Agency } from 'src/app/shared/services/model/agency';

export interface Bus {
  isSelected?: boolean;
  id?: number;
  name?: string;
  busNumber?: string;
  model?: string;
  latitude?: number;
  longitude?: number;
  amenities?: string[];
  images?: ImageUrls[];
  capacity?: number;
  description?: string;
  agency?: Agency;
}
export interface BusDto {
  id?: number;
  name?: string;
  busNumber?: string;
  model?: string;
  latitude?: number;
  longitude?: number;
  amenities?: string[];
  imageUrls?: string[];
  capacity?: number;
  description?: string;
  agencyId?: number;
}
interface ImageUrls {
  id?: number;
  imageUrl: string;
}
