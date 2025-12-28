import React, { useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import { X } from "../icons";

const Modal: React.FC<{ children: React.ReactNode; onClose: () => void }> = ({
  children,
  onClose,
}) => {
  const el = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    const modalRoot = document.getElementById("root");
    modalRoot?.appendChild(el);
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      modalRoot?.removeChild(el);
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [el, onClose]);

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl mx-4 bg-gray-800 rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>,
    el
  );
};

const ModalHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div className={`p-6 border-b border-gray-700 ${className}`}>{children}</div>
);

const ModalBody: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const ModalFooter: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div
    className={`flex items-center justify-end p-6 border-t border-gray-700 space-x-2 ${className}`}
  >
    {children}
  </div>
);

export { Modal, ModalHeader, ModalBody, ModalFooter };
