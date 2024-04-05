export interface Bus {
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
