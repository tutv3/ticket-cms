import React from "react";
import { HomeDoughnutChart } from "../../components/homeDoughnutChart";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Thống kê</h1>
      <HomeDoughnutChart />
    </div>
  );
};

export default Home;
