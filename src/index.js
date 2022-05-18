import React from "react";
import ReactDOM from "react-dom";
import Header from "./Componets/Header";
import App from "./App";
import Contacts from "./Componets/Contacts";
import Footer from "./Componets/Footer";
import Products from "./Componets/Products";
import AddForm from "./Componets/AddForm";




export default function Render() {
  return (
    <>
      <Header />
      <Products />
      
      <Contacts />
      <App />
      <AddForm/> 

      <Footer />
    </>
  );
}

ReactDOM.render(<Render />, document.getElementById("root"));
