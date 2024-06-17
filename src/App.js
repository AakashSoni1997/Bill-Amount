import React from "react";
import { BillProvider } from "./context/BillContext";
import BillForm from "./components/BillForm";
import BillList from "./components/BillList";
import "./App.css";

const App = () => {
  return (
    <BillProvider>
      <div className="container">
        <h1>Bill Calculator</h1>
        <BillForm />
        <BillList />
      </div>
    </BillProvider>
  );
};

export default App;
