import AllCustomers from "./components/AllCustomers";
import StatsOverview from "./components/StatsOverview";
import Table from "./components/Table";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div>
      <div className={styles.chartContainer}>
        <AllCustomers />
        <StatsOverview />
      </div>
      <Table />
    </div>
  );
}

export default App;
