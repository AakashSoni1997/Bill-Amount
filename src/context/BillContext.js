import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BillContext = createContext();

export const BillProvider = ({ children }) => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBills();
  }, []);

  const fetchBills = async () => {
    try {
      const response = await axios.get(
        "https://666feaf80900b5f87248a96d.mockapi.io/billManage/getbill"
      );
      setBills(response.data);
      console.log("response.data", response.data);
    } catch (err) {
      console.log(err, "error");
      setLoading(false);
    }
  };

  const addBill = async (bill) => {
    try {
      axios.post(
        "https://666feaf80900b5f87248a96d.mockapi.io/billManage/getbill",
        bill
      );
      fetchBills();
      alert("bill added successfully");
    } catch (err) {
      console.log(err, "error in bills");
      alert("failed to add bills ");
    }
    console.log("bill dikha ", bill);
  };

  return (
    <BillContext.Provider value={{ bills, loading, addBill }}>
      {children}
    </BillContext.Provider>
  );
};
