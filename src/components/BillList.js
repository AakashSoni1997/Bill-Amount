import React, { useContext, useState } from "react";
import { BillContext } from "../context/BillContext";
import "./BillList.css";

const getBackgroundColor = (tipPercentage) => {
  switch (tipPercentage) {
    case 20:
      return "#8ef6e4";
    case 10:
      return "#9896f1";
    case 5:
      return "#d59bf6";
    case 0:
      return "#ff7e67";
    default:
      return "white";
  }
};

const BillList = () => {
  const { bills } = useContext(BillContext);
  const [search, setSearch] = useState("");

  const filteredBills = bills.filter((bill) =>
    bill.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bill-list-container">
      <input
        type="text"
        placeholder="Search by Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="bill-list">
        {filteredBills?.map((bill) => (
          <li
            key={bill.id}
            style={{ backgroundColor: getBackgroundColor(bill.tipPercentage) }}
          >
            <span>
              Name: {bill.name}, Total: ${bill.totalAmount}
            </span>
            <br />
            <span>
              Bill Amount: ${bill.billAmount}, Tip: {bill.tipPercentage}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BillList;
