import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

import { Network, NetworkProvider } from './types';

const networkList = fs.readFileSync(
  path.join(__dirname, '../network-list.json')
) as Buffer;

class PhMobileNetworks {
  public static NetworkLists: Network[] = JSON.parse(
    networkList.toString('utf-8')
  );

  public static FindByNetworkName = (
    networkName: NetworkProvider
  ): Network[] => {
    return PhMobileNetworks.NetworkLists.filter(
      (list) => list.network === networkName
    );
  };

  public static FindByPrefix = (prefix: string) =>
    PhMobileNetworks.NetworkLists.find((list) => list.prefix === prefix);
}

export default PhMobileNetworks;
export { Network, NetworkProvider };
