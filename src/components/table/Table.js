import React from "react";
import { useNavigate } from "react-router-dom";
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
// import { toast } from "react-toastify";

function Table(props) {
  const navigate = useNavigate();
  const Dynamic = {
    companyName: "company Name",
    name: "Name",
    emailId: "email Id",
    id: "ID",
    bgcStatus: "bgc Status",
  };
  const [filterOptions] = useState({ type: "Menu" });

  const [pageOptions] = useState({
    pageSize: 5,
    pageSizes: true,
  });

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

  const candidateNameData = key => {
    console.log(key);
    let nameOfCandidate = key.target.text;
    console.log(nameOfCandidate);
    navigate("reqDetailComp", { state: { id: 1, name: "arun" } });
    alert(nameOfCandidate);
  };
  const test = key => {
    console.log(key);
    // navigate("/reqDetailComp", { params: { post: "postText" } });
    navigate("reqDetailComp", {
      user: {
        id: "jane",
        firstName: "Jane",
        lastName: "Done",
        age: 25,
      },
    });
  };
  const addBGCComponent = namesof => {
    return (
      <Link
        onClick={candidateNameData}
        to={{
          pathname: "reqDetailComp",
        }}
      >
        {namesof.name}
      </Link>
    );
  };

  return (
    <>
      <ExportExcel excelData={data} fileName={"ExcelExport"} />

      <GridComponent
        rowSelected={test}
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
            headerText={Dynamic.name}
            template={data => addBGCComponent(data)}
            field="name"
            width="100"
            textAlign="Right"
          />
          <ColumnDirective
            headerText={Dynamic.emailId}
            field="emailId"
            width="100"
            textAlign="Right"
          />
          <ColumnDirective
            headerText={Dynamic.phone}
            field="phone"
            width="100"
            textAlign="Right"
          />
          <ColumnDirective
            headerText={Dynamic.companyName}
            field="companyName"
            width="100"
            textAlign="Right"
          />
          <ColumnDirective
            headerText={Dynamic.id}
            field="id"
            width="100"
            textAlign="Right"
          />

          <ColumnDirective
            headerText={Dynamic.bgcStatus}
            field="bgcStatus"
            width="100"
          />
        </ColumnsDirective>

        <Inject services={[Filter, Page, Sort]} />
      </GridComponent>
    </>
  );
}

export default Table;
