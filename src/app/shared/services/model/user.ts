export interface User {
  id?: number;
  firstname?: string;
  lastname?: string;
  profilePicture?: string;
  email?: string;
  locked?: boolean;
  enabled?: boolean;
  roles?: UserRole[];
  username?: string;
  authorities?: UserAuthority[];
  accountNonExpired?: boolean;
  credentialsNonExpired?: boolean;
  accountNonLocked?: boolean;
}

export interface UserRole {
  id?: number;
  roleName?: string;
}

export interface UserAuthority {
  authority?: string;
}
