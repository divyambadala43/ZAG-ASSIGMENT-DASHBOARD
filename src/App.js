import AllCustomers from "./components/AllCustomers";
import Header from "./components/Header";
import PaginatedTable from "./components/PaginatedTable";
import Sidebar from "./components/Sidebar";
import StatsOverview from "./components/StatsOverview";
import styles from "./styles/App.module.css";
import data from "./data.json"

function App() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.rightContainer}>
        <Header />
        <div className={styles.chartContainer}>
          <AllCustomers />
          <StatsOverview />
        </div>
        <PaginatedTable data={data} />
      </div>
    </div>
  );
}

export default App;
