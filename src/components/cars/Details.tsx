import React, { useState, useEffect, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Details = () => {
  const [rowData, setRowData] = useState([]);
  const selectedRows: any = useRef(null);

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  const cols = [
    { field: "make", sortable: true, filter: true, checkboxSelection: true },
    { field: "model", sortable: true, filter: true },
    { field: "price", sortable: true, filter: true },
  ];

  const getSelectedRows = (e: any) => {
    const selectedNodes: any = selectedRows.current.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node: any) => node.data);
    const selectedDataStringPresentation = selectedData
      .map((node: any) => `${node.make} ${node.model}`)
      .join(", ");
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        rowData={rowData}
        ref={selectedRows}
        columnDefs={cols}
        rowSelection="multiple"
      ></AgGridReact>
      <button onClick={getSelectedRows}>Get Selected Rows</button>
    </div>
  );
};

export default Details;
