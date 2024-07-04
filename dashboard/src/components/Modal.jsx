/* eslint-disable react/prop-types */
const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleModalClick = (e) => {
    // Prevent closing the modal when EmailDialogBox is clicked
    if (e.target.classList.contains('modal-overlay')) {
      onClose(); // Close the modal
    }
  };
  return (
    <div className="" onClick={handleModalClick}>
      <div
        onClick={handleModalClick}
        className="modal-overlay flex justify-center items-center absolute left-0 top-0 w-full h-full bg-gray-900 z-50 bg-opacity-50"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
