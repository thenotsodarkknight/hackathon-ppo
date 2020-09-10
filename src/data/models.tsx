import { TooltipPoint } from "@progress/kendo-react-charts";

export interface EnergyInfo {
  quarters: [{
    title: string,
    details: [{
      name: string,
      value: string
    }]
  }]
}

export interface Allocation {
  category: string,
  value: number
}

export interface Position {
  name: string,
  day_change: string,
  change_pct: string,
  market_cap: string,
  volume: string,
}