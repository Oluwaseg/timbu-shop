import { useEffect } from "react";
import { MdClose } from "react-icons/md";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id === "modal-overlay") {
        onClose();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-[#FEFAFB] p-8 relative w-full sm:w-90 max-w-3xl min-h-screen overflow-y-auto sm:rounded-lg">
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={onClose}
        >
          <MdClose size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
