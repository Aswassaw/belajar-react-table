import "../../table.css";
import React, { Fragment, useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters } from "react-table";
import MOCK_DATA from "../../MOCK_DATA.json";
import { COLUMNS } from "../../columns";
import { GlobalFilter } from "./GlobalFilter";
import { ColumnFilter } from "./ColumnFilter";

const FilteringTable = () => {
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
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  const { globalFilter } = state;

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
            {rows.map((row) => {
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
          {/* Tfoot */}
          <tfoot>
            {footerGroups.map((footerGroup) => (
              <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map((column) => (
                  <td {...column.getFooterProps()}>
                    {column.render("Footer")}
                  </td>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default FilteringTable;
