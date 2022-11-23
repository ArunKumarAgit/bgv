import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-react-grids";
import {
  Filter,
  GridComponent,
  Inject,
  Page,
  Sort,
} from "@syncfusion/ej2-react-grids";
import ExportExcel from "../exportData/ExportExcel";

function Table(props) {
  const [filterOptions] = useState({ type: "Menu" });

  const [pageOptions] = useState({
    pageSize: 5,
    pageSizes: true,
  });
  console.log(props);

  let linkData = useRef();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3004/candidateData/")
      .then(res => res.json())
      .then(data => setUserData(data));
  }, []);
  let data = userData.filter(obj => {
    let filteredData =
      (obj.name ? obj.name.trim().toLowerCase() : "") +
      "\0" +
      (obj.emailId ? obj.emailId.trim().toLowerCase() : "") +
      "\0" +
      (obj.phone ? obj.phone : "") +
      "\0" +
      (obj.companyName ? obj.companyName.trim().toLowerCase() : "") +
      (obj.bgcStatus ? obj.bgcStatus.trim().toLowerCase() : "");

    return (
      filteredData.indexOf(props.parent.searchValue.trim().toLowerCase()) !== -1
    );
  });

  const addBGCComponent = namesof => {
    console.log(namesof);
    return (
      <div>
        <Link to="/reqDetailComp">{namesof.name}</Link>
      </div>
    );
  };
  console.log(linkData);
  console.log(data);
  return (
    <>
      <ExportExcel excelData={data} fileName={"ExcelExport"} />
      <GridComponent
        dataSource={data}
        filterSettings={filterOptions}
        allowFiltering={true}
        height={273}
        allowPaging={true}
        pageSettings={pageOptions}
        allowSorting={true}
      >
        {/* {datas} */}
        <ColumnsDirective>
          <ColumnDirective
            template={data => addBGCComponent(data)}
            field="name"
            width="100"
            textAlign="Right"
          />
          <ColumnDirective field="emailId" width="100" textAlign="Right" />
          <ColumnDirective field="phone" width="100" textAlign="Right" />
          <ColumnDirective field="companyName" width="100" textAlign="Right" />
          <ColumnDirective field="id" width="100" textAlign="Right" />

          <ColumnDirective field="bgcStatus" width="100" />
        </ColumnsDirective>

        <Inject services={[Filter, Page, Sort]} />
      </GridComponent>
    </>
  );
}

export default Table;
