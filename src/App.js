import "./App.css";
// import BasicTable from "./components/BasicTable";
// import SortingTable from "./components/SortingTable";
import FilteringTable from "./components/FilteringTable";

function App() {
  return (
    <div className='App'>
      <h1>Daftar User</h1>
      <FilteringTable />
    </div>
  );
}

export default App;
