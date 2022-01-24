import React from "react";
import { HomeDoughnutChart } from "../../components/homeDoughnutChart";
import HomeLineChart from "../../components/homeLineChart";
// import styles from "./home.module.css";

const Home = () => {
  return (
    <div className="page-container">
      <h1 className="page-title">Thống kê</h1>
      <HomeLineChart />
      <HomeDoughnutChart />
    </div>
  );
};

export default Home;
