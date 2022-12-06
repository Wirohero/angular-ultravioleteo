import { CpItem } from './cp-item';

export const CPITEMES: CpItem[] = [
  {
    id: 1,
    name: 'catalogues',
    routerLink: 'catalogues',
    security: {
      visibility: {
        groups: [],
        users: []
      },
      read: {
        groups: [],
        users: ['ea', 'oa']
      },
      write: {
        groups: [],
        users: []
      },
      modify: {
        groups: [],
        users: []
      },
    },
  },
];
