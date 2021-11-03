import "./App.css";
// import BasicTable from "./components/table/basic/BasicTable";
// import SortingTable from "./components/table/sorting/SortingTable";
import FilteringTable from "./components/table/filter/FilteringTable";

function App() {
  return (
    <div className='App'>
      <h1>Daftar User</h1>
      <FilteringTable />
    </div>
  );
}

export default App;
