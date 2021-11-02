import { format } from "date-fns";
import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    Filter: ColumnFilter,
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    Filter: ColumnFilter,
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    Filter: ColumnFilter,
  },
  {
    Header: "Date Of Birth",
    Footer: "Date Of Birth",
    accessor: "date_of_birth",
    // Memformat tanggal menjadi lebih mudah dibaca
    Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
    Filter: ColumnFilter,
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
    Filter: ColumnFilter,
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
    Filter: ColumnFilter,
  },
];

export const GROUP_COLUMS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date Of Birth",
        Footer: "Date Of Birth",
        accessor: "date_of_birth",
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];
