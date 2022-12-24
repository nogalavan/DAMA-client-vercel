export interface StockItem {
  name: string;
  description: string;
  demandRateForYear: number;
  orderCost: number;
  unitPrice: number;
  annualInterestPerItem: number;
  unitHoldingCost: number;
  deliveryTime: number;
}