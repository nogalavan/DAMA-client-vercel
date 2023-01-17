import { NumericLiteral } from "typescript";

export interface StockItem {
  _id: string;
  myId: string;
  name: string;
  description: string;
  demandRateForYear: number;
  orderCost: number;
  unitPrice: number;
  annualInterestPerItem: number;
  unitHoldingCost: number;
  deliveryTime: number;
  amount: number;
}