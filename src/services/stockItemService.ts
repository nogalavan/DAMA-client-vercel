import axios from "axios";
import { StockItem } from "../types/StockItem";

const API_URL = "https://dama-server-vercel.vercel.app/api/stockItem/";

export const updateStockItem = async (stockItem: StockItem) => {
    const response = await axios.put(API_URL + `update/${stockItem.id}`, { stockItem });
  return response.data;;
  };

export const addStockItem = async (myId: string, name: string, unitPrice: number, description: string, demandRateForYear: number, orderCost: number, deliveryTime: number, annualInterestPerItem: number, unitHoldingCost: number) => {
  const response = await axios.post(API_URL + `post`, { myId, name, unitPrice, description, demandRateForYear, orderCost, deliveryTime, annualInterestPerItem, unitHoldingCost });
  return response.data;;
};

export const getAll = async () => {
  axios.get(API_URL + `getAll`).then((res) => {return res.data}).catch((err) => {
    console.error('Error:', err);
});
};


// export const addTransaction = (amount: Number, date: String, discription: String, catagory: String, type: String, userId: String) => {
//   return axios.put(API_URL + `addTransaction/${userId}`, {amount, date,discription, catagory, type 
//   }).then((response) => {
//     if (response.data.accessToken) {
//       localStorage.setItem("user", JSON.stringify(response.data));
//     }

//     return response.data;
//   });;
// };
