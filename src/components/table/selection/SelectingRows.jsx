import "../../table.css";
import React, { Fragment, useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  useRowSelect,
} from "react-table";
import MOCK_DATA from "../../MOCK_DATA.json";
import { COLUMNS } from "../../columns";
import { GlobalFilter } from "./GlobalFilter";
import { ColumnFilter } from "./ColumnFilter";
import { Checkbox } from "./Checkbox";

const SelectingRows = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const defaultColumn = useMemo(
    () => ({
      Filter: ColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    setGlobalFilter,
    prepareRow,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ];
      });
    }
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <div>
        {/* Table */}
        <table {...getTableProps()}>
          {/* Thead */}
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <Fragment key={headerGroup.headers[index].Header}>
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      key={column.id}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <>
                              {" "}
                              <i className='fas fa-long-arrow-alt-down'></i>
                            </>
                          ) : (
                            <>
                              {" "}
                              <i className='fas fa-long-arrow-alt-up'></i>
                            </>
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
                <tr>
                  {headerGroup.headers.map((column) => (
                    <th key={column.id}>
                      {column.canFilter && column.render("Filter")}
                    </th>
                  ))}
                </tr>
              </Fragment>
            ))}
          </thead>
          {/* Tbody */}
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);

              return (
                <tr {...row.getRowProps()}>
                  {/* Table Data */}
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div style={{ marginTop: "5px" }}>
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
          <span>
            {" "}
            | Go to page:{" "}
            <input
              style={{ width: "50px" }}
              type='number'
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
            />
          </span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        <br />
        <div>
          <button
            className={`button ${!canPreviousPage ? "disabled" : ""}`}
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            First
          </button>
          <button
            className={`button ${!canPreviousPage ? "disabled" : ""}`}
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </button>
          <button
            className={`button ${!canNextPage ? "disabled" : ""}`}
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>
          <button
            className={`button ${!canNextPage ? "disabled" : ""}`}
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            Last
          </button>
        </div>

        <br />
        <pre>
          <code>
            {JSON.stringify(
              {
                countSelected: selectedFlatRows.length,
                selectedFlatRows: selectedFlatRows.map((row) => row.original.id),
              },
              null,
              2
            )}
          </code>
        </pre>
      </div>
    </>
  );
};

export default SelectingRows;
