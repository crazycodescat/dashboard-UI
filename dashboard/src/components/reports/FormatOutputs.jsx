/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState, useRef } from 'react';
import { FaRegFilePdf } from 'react-icons/fa';
import { PiFileCsvDuotone } from 'react-icons/pi';
import { BsFiletypeXlsx } from 'react-icons/bs';
import { VscJson } from 'react-icons/vsc';
import { IoPrintOutline } from 'react-icons/io5';
import { IoMailOutline } from 'react-icons/io5';
import OptionsWrapper from '../reports/OptionsWrapper';
import useFetch from '../../hooks/useFetch';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '../Modal';
import EmailDialogBox from '../EmailDialogBox';

import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx'; // Import all members from xlsx

const data = [
  {
    id: 1,
    name: 'taiyyab',
    age: 22,
  },
  {
    id: 2,
    name: 'taiyyab',
    age: 22,
  },
  {
    id: 3,
    name: 'taiyyab',
    age: 22,
  },
  {
    id: 4,
    name: 'taiyyab',
    age: 22,
  },
];

const FormatOutputs = ({ columns }) => {
  const outputFormats = [
    {
      formatName: 'pdf',
      icon: <FaRegFilePdf className="text-sm" />,
      function: () => exportToPdf(),
    },
    {
      formatName: 'csv',
      icon: <PiFileCsvDuotone className="text-sm" />,
      function: () => exportToCsv(),
    },
    {
      formatName: 'xlsx',
      icon: <BsFiletypeXlsx className="text-sm" />,
      function: () => exportToExcel(),
    },
    {
      formatName: 'json',
      icon: <VscJson className="text-sm" />,
      function: () => exportToJson(),
    },
    {
      formatName: 'print',
      icon: <IoPrintOutline className="text-sm" />,
      function: () => exportToPrint(),
    },
    {
      formatName: 'email',
      icon: <IoMailOutline className="text-sm" />,
      function: () => sendMail(),
    },
  ];
  const [activeButton, setActiveButton] = useState(null);
  const [isMailDialogOpen, setIsMailDialogOpen] = useState(false);
  const [emails, setEmails] = useState();
  const [emailError, setEmailError] = useState(null);

  const { fetch } = useFetch();

  const handleButtonClick = (i) => {
    setActiveButton(i);
  };

  // const columns = [
  //   { title: 'ID', field: 'id' },
  //   { title: 'Name', field: 'name' },
  //   { title: 'Age', field: 'age' },
  // ];
  const mailColumns = [
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
    const jsonData = JSON.stringify(columns, null, 2);
    const blob = new Blob([jsonData], { type: 'application/json' });
    saveAs(blob, 'data.json');
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'My Data'); // Customize sheet name

    const filename = 'my-data.xlsx'; // Customize the filename as needed

    XLSX.writeFile(workbook, filename, { bookType: 'xlsx', type: 'binary' });
  };

  const exportToPrint = () => {
    window.print();
  };

  const sendMail = async () => {
    if (!emails) {
      setEmailError('Please enter emails');
      return;
    }

    const mailData = {
      email: 'myworkmail2223@gmail.com',
      data: mailData,
      emails: emails,
      columns: mailColumns,
    };

    const config = {
      url: 'http://localhost:8080/api/mail/reports',
      method: 'post',
      data: mailData,
    };

    const res = await fetch(config);
    if (res.status === 200) {
      toast.success('Email sent successfully!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
    setIsMailDialogOpen(true);
  };

  const emailDialogHandler = () => {
    setIsMailDialogOpen((prev) => !prev);
  };

  const closeModal = () => {
    setIsMailDialogOpen(false);
  };

  const emailSubmitHandler = (e) => {
    e.preventDefault();
    const emailValue = e.target.elements.emailInput.value;

    const trimmedEmails = emailValue
      .split(',')
      .map((email) => email.trim())
      .filter((email) => email !== '');
    setEmails(trimmedEmails);
  };

  return (
    <>
      <OptionsWrapper wrapperName="format output">
        <div className="flex gap-2">
          {outputFormats.map((format, i) => {
            return (
              <button
                key={i}
                className={`
                  flex gap-1 items-center
                  uppercase
                  rounded-md
                  font-normal
                  text-[10px]
                  p-2
                  bg-filtersHeader
                  ${activeButton === i ? ' text-black bg-white' : ''}
                  w-fit
                `}
                onClick={() => {
                  handleButtonClick(i);
                  format.function();
                  format.formatName === 'email' && emailDialogHandler();
                }}
              >
                <p>{format.formatName}</p>
                {format.icon}
              </button>
            );
          })}
        </div>
      </OptionsWrapper>
      {isMailDialogOpen && (
        <Modal isOpen={isMailDialogOpen} onClose={closeModal}>
          <EmailDialogBox
            columns={columns}
            emailError={emailError}
            setEmailError={setEmailError}
            emailSubmitHandler={emailSubmitHandler}
          />
        </Modal>
      )}
    </>
  );
};
export default FormatOutputs;
