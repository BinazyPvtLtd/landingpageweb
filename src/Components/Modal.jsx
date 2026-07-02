import React from "react";
import { X } from "lucide-react";
import LeadForm from "./LeadForm";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 backdrop-blur-sm sm:p-4">
      <div className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-lg bg-gray-100 p-2 text-gray-600 transition hover:bg-gray-200 sm:right-6 sm:top-6"
          aria-label="Close modal">
          <X className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Modal Content */}
        <div className="p-2 sm:p-8 lg:p-10">
          <LeadForm onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
