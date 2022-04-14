export enum NetworkProvider {
  DITO = 'Dito',
  GLOBE = 'Globe',
  GLOBE_POSTPAID = 'Globe Postpaid',
  GLOBE_TM = 'Globe/TM',
  GLOBE_GOMO = 'Globe/GOMO',
  SMART = 'Smart',
  SUN = 'Sun',
  TNT = 'TNT',
}

export interface Network {
  prefix: string;
  network: NetworkProvider;
}
