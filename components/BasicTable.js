"use client";
import React, { useState } from "react";
import { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import {DateTime} from "luxon"
import dynamic from "next/dynamic";

const BasicTable = ({ value }) => {
  const data = useMemo(() => value, []);
  const columns = [
    // {
    //   header: "First Name",
    //   accessorKey: "fullname",
    //   footer: "First Name",
    // },
    {header: "Name", accessorFn: row=> `${row.fullname} ${row.middleName} ${row.lastname}`},
    {
      header: "Title",
      accessorKey: "title",
      footer: "Title",
    },
    {
      header: "Contact Number",
      accessorKey: "contactNumber",
      footer: "Contact Number",
    },
    {
      header: "Email",
      accessorKey: "email",
      footer: "Email",
    },
    {
      header: "Date",
      accessorKey: "date",
      footer: "Date",
      cell: (props) => {
        const date = new Date(props.getValue());
        return `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()} ${date.getFullYear()}`;
      },
      // cell: (props) => new Date(props.getValue()).toDateString(),
      // cell: (props) => DateTime.fromISO(props.getValue()).toLocaleString({ month: 'short', day: 'numeric', year: 'numeric' }),
      // cell: info => dynamic(() => import(DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED)),
      // { ssr: false }),
    },
  ];
  const [sorting, setSorting] = useState([])
  const [filtering, setFiltering] = useState('')

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });
  console.log(table.getHeaderGroups())


  const handleDelete = (_id) => {
    // Perform the deletion logic here
    console.log(`Deleting record with _id: ${_id}`);
  
    // You can update your state or make an API call to delete the record from the database
    // For example, you can use the following code to update the state
    // table.setData((oldData) => oldData.filter((record) => record._id !== _id));
    // Update the state or call a function to update the state
    // setYourDataState(updatedData);
  };






  return (
    <>
    <input type="text" value={filtering} onChange={e => setFiltering(e.target.value)}/>
      <table>
        <thead>
        {table.getHeaderGroups().map((headergGroup) => (
          <tr key={headergGroup.id}>
            {headergGroup.headers.map((header) => (
              <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                {/* agar hum is placeholder nahi kartay toh agar hum name ka subgroup middle and last name kartay toh sab feilds main un k group print ho jatay beshak hum ny na print karnay hotay */}
                {header.isPlaceholder ? null: flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}

                {
                  {asc: <span>⏫</span>, desc: <span>⏬</span>} [header.column.getIsSorted() ?? null]
                }
              </th>
            ))}
          </tr>
        ))}

        </thead>
        
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
                
              ))}
              {/* Add the "Hello" column here */}
              <td>
                <button onClick={() => handleDelete(row.original._id)}>Hello</button>
              </td>
            </tr>
          ))}

        </tbody>
        <tfoot>

        </tfoot>
      </table>
      <button onClick={() => table.setPageIndex(0)}>First Page</button>
<button disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>Previous Page</button>
<button disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>Next Page</button>
<button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>Last Page</button>

    </>
  );
};

export default BasicTable;