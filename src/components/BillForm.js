import React, { useState, useContext } from "react";
import { BillContext } from "../context/BillContext";
import "./BillForm.css";

const BillForm = () => {
  const { addBill } = useContext(BillContext);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);

  const calculateTotal = () =>
    (
      parseFloat(billAmount) -
      (parseFloat(billAmount) * tipPercentage) / 100
    ).toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalAmount = calculateTotal();
    const bill = { name, mobile, billAmount, tipPercentage, totalAmount };
    addBill(bill);
    setName("");
    setMobile("");
    setBillAmount("");
    setTipPercentage(0);
  };

  return (
    <form className="bill-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Mobile</label>
        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Bill Amount</label>
        <input
          type="number"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Tip Percentage</label>
        <select
          value={tipPercentage}
          onChange={(e) => setTipPercentage(e.target.value)}
          required
        >
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={20}>Absolutely amazing! (20%)</option>
        </select>
      </div>
      <div className="form-group">
        <label>Total Amount</label>
        <input type="text" value={calculateTotal()} readOnly />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BillForm;
