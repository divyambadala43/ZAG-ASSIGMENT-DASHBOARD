import AllCustomers from "./components/AllCustomers";
import Sidebar from "./components/Sidebar";
import StatsOverview from "./components/StatsOverview";
import Table from "./components/Table";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.rightContainer}>
        <div className={styles.chartContainer}>
          <AllCustomers />
          <StatsOverview />
        </div>
        <Table />
      </div>
    </div>
  );
}

export default App;
