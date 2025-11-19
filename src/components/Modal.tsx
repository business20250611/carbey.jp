import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message,children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
        {title && (
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            {title}
          </h3>
        )}

        <div className="text-center mb-6">
          <p className="text-gray-700 whitespace-pre-line">{message}</p>
        </div>
         <div>
          {children}
        </div>
        
      </div>
    </div>
  );
};

export default Modal;