export interface CpItem {
  id: number;
  name: string;
  routerLink: string;
  security: Privileges;
}
export interface Privileges {
  visibility: Spectro;
  read: Spectro;
  write: Spectro;
  modify: Spectro;
}
export interface Spectro {
  groups: string[];
  users: string[];
}
