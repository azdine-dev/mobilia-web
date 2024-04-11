import { User } from './user';

export interface Agency {
  id?: number;
  name?: string;
  profilePicture?: string;
  location?: string;
  user?: User;

  // Add other agency properties as needed
}
