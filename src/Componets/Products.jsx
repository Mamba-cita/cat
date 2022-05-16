import React from "react";
import Objectives from "./Objectives";
import "./styles.scss";


export default function Products() {
  return (
    <>
      <div className="container">
        <h1>SUSTAINABLE SACCO DEVELOPMENT</h1>
     
        <p>
          There are tons of ways to save beyond searching for coupons or using
          your bank’s limited mobile app. Offering everything from hands-off
          investing and insta-personalized budgets to custom savings goals and
          sophisticated ways to track your daily expenses, these apps up your
          savings game without taking more of your precious time. Read on to
          find the right one for you.
        </p>
    

        <img src="./images/hands.jpg" alt="pexels" />
      
      </div>
      <Objectives/>
    </>
  );
}
