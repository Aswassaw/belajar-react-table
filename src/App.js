import "./App.css";
// import BasicTable from "./components/table/basic/BasicTable";
// import SortingTable from "./components/table/sorting/SortingTable";
// import FilteringTable from "./components/table/filter/FilteringTable";
// import PaginationTable from "./components/table/pagination/PaginationTable";
import SelectingRows from "./components/table/selection/SelectingRows";

function App() {
  return (
    <div className='App'>
      <h1>Daftar User</h1>
      <SelectingRows />
    </div>
  );
}

export default App;
