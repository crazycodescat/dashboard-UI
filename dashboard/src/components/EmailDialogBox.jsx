/* eslint-disable react/prop-types */
import DirectReports from './DirectReports';
import ScheduledReports from './ScheduledReports';
import ColumnsSelection from './ColumnsSelection';
import { useState } from 'react';

const EmailDialogBox = ({ columns }) => {
  const [email, setEmail] = useState('');
  const [enteredEmails, setEnteredEmails] = useState([]);
  const [emailError, setEmailError] = useState(null);

  const setEmailHandler = (e) => {
    e.preventDefault();

    if (!email > 0) {
      return;
    }
    if (enteredEmails.includes(email)) {
      setEmailError('Email already added');
      return;
    }
    setEnteredEmails((prevEmails) => [...prevEmails, email]);
    setEmail('');
    setEmailError(null);
  };

  const deleteEmailHandler = (index) => {
    const filteredEmails = enteredEmails.filter((email, idx) => idx !== index);
    setEnteredEmails(filteredEmails);
  };

  return (
    <div className="w-[700px] bg-white text-black px-6 py-10 rounded-xl">
      {/* HEADING */}
      <h1 className="text-2xl font-semibold">EMAIL REPORT</h1>

      {/* DIRECT REPORTS */}
      <DirectReports
        deleteEmailHandler={deleteEmailHandler}
        setEmailHandler={setEmailHandler}
        emailError={emailError}
        enteredEmails={enteredEmails}
        email={email}
        setEmail={setEmail}
      />

      {/* SELECT COLUMNS */}
      <ColumnsSelection columns={columns} />

      {/* SCHEDULED REPORTS */}
      <ScheduledReports />
    </div>
  );
};

export default EmailDialogBox;
