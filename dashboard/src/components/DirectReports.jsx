/* eslint-disable react/prop-types */

// COMPONENTS
import EmailChips from './EmailChips';
import Button from './Button';

const DirectReports = ({
  deleteEmailHandler,
  setEmailHandler,
  emailError,
  enteredEmails,
  email,
  setEmail,
}) => {
  // const [email, setEmail] = useState('');
  // const [enteredEmails, setEnteredEmails] = useState([]);
  // const [emailError, setEmailError] = useState(null);

  // const setEmailHandler = (e) => {
  //   e.preventDefault();

  //   if (!email > 0) {
  //     return;
  //   }
  //   if (enteredEmails.includes(email)) {
  //     setEmailError('Email already added');
  //     return;
  //   }
  //   setEnteredEmails((prevEmails) => [...prevEmails, email]);
  //   setEmail('');
  //   setEmailError(null);
  // };

  // const deleteEmailHandler = (index) => {
  //   const filteredEmails = enteredEmails.filter((email, idx) => idx !== index);
  //   setEnteredEmails(filteredEmails);
  // };

  return (
    <div className="flex flex-col gap-4 mt-8">
      <h2 className="textxl font-semibold">EMAILS</h2>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <form onSubmit={setEmailHandler}>
            <div>
              <div className="flex items-center gap-4">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="border placeholder:text-[10px] text-xs rounded-md border-gray-400 focus:border-[#bbb] focus:border-solid focus:outline-none focus:ring focus:ring-blue-500 px-4 py-2 w-[250px]"
                  name="emailInput"
                  id="emailReport"
                  placeholder="Enter Email"
                  value={email}
                />
                <Button
                  classess="px-4 py-2 bg-button rounded-md text-white text-xs font-medium"
                  text="+ ADD "
                />
              </div>
            </div>
          </form>
          {emailError && (
            <span className="text-xs text-red-600">{emailError}</span>
          )}
          {/* EMAIL LISTS CHIPS */}
          <div className="flex gap-1 flex-wrap">
            {enteredEmails.length > 0 &&
              enteredEmails.map((email, idx) => {
                return (
                  <EmailChips
                    containerClassess="flex gap-3 col-span-2 items-center border-2 border-solid border-button justify-between px-2 py-2 rounded-full"
                    contentClassess="text-[12px]"
                    text={email}
                    closeBtnClassess="text-black bg-button hover:bg-red-600 rounded-full p-1"
                    deleteEmail={deleteEmailHandler}
                    key={idx}
                    index={idx}
                    iconClassess="text-white"
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectReports;
