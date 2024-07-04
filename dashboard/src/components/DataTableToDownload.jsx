/* eslint-disable react/prop-types */
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx'; // Import all members from xlsx
// import { TableToExcel } from 'html-to-xlsx';
// import { TableToCsv } from 'html-to-csv';

function DataTableToDownload({ data }) {
  const columns = [
    { title: 'ID', field: 'id' },
    { title: 'Name', field: 'name' },
    { title: 'Age', field: 'age' },
  ];

  const exportToPdf = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: '#dataTable' });
    doc.save('datatable.pdf');
  };

  const exportToCsv = () => {
    const csvData = data.map((row) => {
      return columns.map((column) => row[column.field]).join(',');
    });

    console.log(csvData);
    // Add a header row
    csvData.unshift(columns.map((column) => column.title).join(','));

    // Convert data to a Blob object
    const blob = new Blob([csvData.join('\n')], {
      type: 'text/csv;charset=utf-8',
    });

    // Trigger download using FileSaver.js
    saveAs(blob, 'my-data.csv');
  };

  const exportToJson = () => {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    saveAs(blob, 'data.json');
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'My Data'); // Customize sheet name

    const filename = 'my-data.xlsx'; // Customize the filename as needed

    XLSX.writeFile(workbook, filename, { bookType: 'xlsx', type: 'binary' });
    console.log('XLSX data downloaded successfully!');
  };

  // const printTable = () => {
  //   window.print();
  // };

  // const sendEmail = () => {
  //   // Implement email functionality here, e.g., using emailjs or sending an API request
  //   alert('Email functionality not implemented in demo.');
  // };

  return (
    <div>
      <button onClick={exportToPdf}>Export to PDF</button>
      <button onClick={exportToCsv}>Export to CSV</button>
      <button onClick={exportToJson}>Export to JSON</button>
      <button onClick={exportToExcel}>Export to XLSX</button>
      {/* <button onClick={printTable}>Print</button> */}
      {/* <button onClick={sendEmail}>Email</button> */}

      <div>
        <table id="dataTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTableToDownload;
