import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styles from "./index.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const dataFamilyPackage = {
  datasets: [
    {
      label: "Ticket Usage",
      data: [12256, 8900],
      borderColor: ["rgba(79, 117, 255, 0.2)", "rgba(255, 138, 72, 0.2)"],
      backgroundColor: ["rgba(79, 117, 255, 1)", "rgba(255, 138, 72, 1)"],
      borderWidth: 1,
    },
  ],
};

const dataEventPackage = {
  datasets: [
    {
      label: "Ticket Usage",
      data: [10256, 22109],
      borderColor: ["rgba(79, 117, 255, 0.2)", "rgba(255, 138, 72, 0.2)"],
      backgroundColor: ["rgba(79, 117, 255, 1)", "rgba(255, 138, 72, 1)"],
      borderWidth: 1,
    },
  ],
};

export function HomeDoughnutChart() {
  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <h3 className={styles.colTitle}>Gói gia đình</h3>
        <Doughnut data={dataFamilyPackage} />
      </div>
      <div className={styles.col}>
        <h3 className={styles.colTitle}>Gói sự kiện</h3>
        <Doughnut data={dataEventPackage} />
      </div>
      <div className={styles.col}>
        <h3 className={styles.colTitle}>Gói sự kiện</h3>
        {/* <Doughnut data={dataEventPackage} /> */}
      </div>
    </div>
  );
}
