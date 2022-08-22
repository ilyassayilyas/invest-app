export interface coinInterface {
  "24hVolume": string;
  btcPrice: string;
  change: string;
  coinrankingUrl: string;
  color: string;
  iconUrl: string;
  listedAt: number;
  lowVolume: false;
  marketCap: number;
  name: string;
  price: number;
  rank: number;
  sparkline: object;
  symbol: string;
  tier: number;
  uuid: string;
}

export interface coinHistoryInterface {
  status: string;
  data: {
    change: number;
    history: Array<history>;
  };
}

export type history = {
  price: number;
  timestamp: number;
};
