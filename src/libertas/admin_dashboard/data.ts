// src/data.ts

export interface Signal {
  id: string;
  type: "BUY" | "SELL";
  asset: string;
  submitted: string;
  status: "Pending" | "Validating" | "Approved" | "Rejected";
  consensusProgress?: number;
  consensusTotal?: number;
  yourVote?: "Approved" | "Rejected";
}

export interface MarketItem {
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export const signalsQueue: Signal[] = [
  {
    id: "4395",
    type: "BUY",
    asset: "BTCUSD",
    submitted: "10:24 AM",
    status: "Pending",
  },
  {
    id: "4398",
    type: "SELL",
    asset: "EURUSD",
    submitted: "10:18 AM",
    status: "Pending",
  },
  {
    id: "4396",
    type: "BUY",
    asset: "AAPL",
    submitted: "09:52 AM",
    status: "Pending",
  },
  {
    id: "4389",
    type: "SELL",
    asset: "TSLA",
    submitted: "09:41 AM",
    status: "Pending",
  },
  {
    id: "4312",
    type: "BUY",
    asset: "BTCUSD",
    submitted: "10:24 AM",
    status: "Pending",
  },
  {
    id: "4901",
    type: "SELL",
    asset: "EURUSD",
    submitted: "10:18 AM",
    status: "Pending",
  },
  {
    id: "4290",
    type: "BUY",
    asset: "AAPL",
    submitted: "09:52 AM",
    status: "Pending",
  },
  {
    id: "4339",
    type: "SELL",
    asset: "TSLA",
    submitted: "09:41 AM",
    status: "Pending",
  },
];

export const activeValidations: Signal[] = [
  {
    id: "4395",
    type: "SELL",
    asset: "NVDA",
    submitted: "09:30 AM",
    status: "Validating",
    consensusProgress: 6,
    consensusTotal: 8,
    yourVote: "Approved",
  },
  {
    id: "4398",
    type: "BUY",
    asset: "AMZN",
    submitted: "09:25 AM",
    status: "Validating",
    consensusProgress: 7,
    consensusTotal: 8,
    yourVote: "Approved",
  },
  {
    id: "4396",
    type: "BUY",
    asset: "GOLD",
    submitted: "09:20 AM",
    status: "Approved",
    consensusProgress: 8,
    consensusTotal: 8,
    yourVote: "Approved",
  },
  {
    id: "4389",
    type: "SELL",
    asset: "MSFT",
    submitted: "09:15 AM",
    status: "Rejected",
    consensusProgress: 4,
    consensusTotal: 8,
    yourVote: "Rejected",
  },
  {
    id: "4312",
    type: "BUY",
    asset: "GOLD",
    submitted: "09:20 AM",
    status: "Approved",
    consensusProgress: 8,
    consensusTotal: 8,
    yourVote: "Approved",
  },
  {
    id: "4901",
    type: "SELL",
    asset: "MSFT",
    submitted: "09:15 AM",
    status: "Rejected",
    consensusProgress: 4,
    consensusTotal: 8,
    yourVote: "Rejected",
  },
];

export const recentResults: Signal[] = [
  {
    id: "4384",
    type: "BUY",
    asset: "AAPL",
    submitted: "09:10 AM",
    status: "Approved",
    consensusProgress: 7,
    consensusTotal: 8,
  },
  {
    id: "4383",
    type: "SELL",
    asset: "EURUSD",
    submitted: "09:05 AM",
    status: "Approved",
    consensusProgress: 8,
    consensusTotal: 8,
  },
  {
    id: "4382",
    type: "BUY",
    asset: "TSLA",
    submitted: "09:00 AM",
    status: "Rejected",
    consensusProgress: 3,
    consensusTotal: 8,
  },
  {
    id: "4381",
    type: "SELL",
    asset: "BTCUSD",
    submitted: "08:55 AM",
    status: "Approved",
    consensusProgress: 6,
    consensusTotal: 8,
  },
];

export const marketOverview: MarketItem[] = [
  {
    name: "S&P 500",
    value: "5,248.50",
    change: "+0.75%",
    isPositive: true,
  },
  {
    name: "NASDAQ",
    value: "16,827.32",
    change: "+1.24%",
    isPositive: true,
  },
  {
    name: "BTC/USD",
    value: "52,485.76",
    change: "-2.18%",
    isPositive: false,
  },
  {
    name: "EUR/USD",
    value: "1.0842",
    change: "+0.32%",
    isPositive: true,
  },
  {
    name: "Gold",
    value: "2,156.30",
    change: "+0.58%",
    isPositive: true,
  },
];
