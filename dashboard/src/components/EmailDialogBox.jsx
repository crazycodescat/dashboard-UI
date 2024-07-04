/* eslint-disable react/prop-types */
import { IoIosClose } from 'react-icons/io';
const EmailDialogBox = ({ emailSubmitHandler, emailError }) => {
  return (
    <div className="flex flex-col justify-center h-fit min-w-[300px] bg-white rounded-lg text-black py-6 px-8">
      <div className="flex flex-col gap-6">
        <h1 className="text-lg font-semibold text-center">Email Reports</h1>
        <div>
          <form onSubmit={(e) => emailSubmitHandler(e)}>
            <div className="flex flex-col gap-2 mx-auto">
              <div className=" flex gap-2 items-center border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <div className="grid grid-cols-2">
                  <div className="flex gap-2 border border-gray-200 border-solid p-2 rounded-full">
                    <p className="text-xs text-black">test@test.com</p>
                    <IoIosClose className="bg-gray-500 rounded-full text-white cursor-pointer" />
                  </div>
                  <div className="flex gap-2 border border-gray-200 border-solid p-2 rounded-full">
                    <p className="text-xs text-black">test@test.com</p>
                    <IoIosClose className="bg-gray-500 rounded-full text-white cursor-pointer" />
                  </div>
                  <div className="flex gap-2 border border-gray-200 border-solid p-2 rounded-full">
                    <p className="text-xs text-black">test@test.com</p>
                    <IoIosClose className="bg-gray-500 rounded-full text-white cursor-pointer" />
                  </div>
                  <div className="flex gap-2 border border-gray-200 border-solid p-2 rounded-full">
                    <p className="text-xs text-black">test@test.com</p>
                    <IoIosClose className="bg-gray-500 rounded-full text-white cursor-pointer" />
                  </div>
                  <div className="flex gap-2 border border-gray-200 border-solid p-2 rounded-full">
                    <p className="text-xs text-black">test@test.com</p>
                    <IoIosClose className="bg-gray-500 rounded-full text-white cursor-pointer" />
                  </div>
                </div>
                <input
                  id="mailInput1"
                  name="emailInput"
                  type="email"
                  className="w-full rounded-md focus:outline-none focus:ring-0"
                  placeholder="Enter comma seperated (,) emails"
                />
              </div>
              {emailError && (
                <p className="text-xs text-red-400 mt-3">
                  Please enter email address
                </p>
              )}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailDialogBox;
