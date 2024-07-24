import networkList from './list';
import { MobileNetworks, NetworkProvider } from './types';

class PhMobileNetworks implements MobileNetworks {
  private readonly networkList: NetworkProvider[] = networkList;

  public getNetwork = (prefix: string) => {
    const network = this.networkList.find((list) => list.prefix === prefix);
    if (!network) {
      throw new Error(`Network not found for prefix ${prefix}`);
    }
    return network;
  };
}

export default PhMobileNetworks;
export * from './types';
