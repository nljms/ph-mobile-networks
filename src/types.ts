export enum Provider {
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
  displayName: string;
  providers: Provider[];
}

export interface NetworkProvider<T = Network> {
  prefix: string;
  network: T;
}

export interface MobileNetworks {
  getNetwork: (prefix: string) => NetworkProvider;
}
