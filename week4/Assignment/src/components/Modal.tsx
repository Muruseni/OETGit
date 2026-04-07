import type { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-2xl shadow-xl w-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div>{children}</div>
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-black text-white rounded">
          Close
        </button>
      </div>
    </div>
  );
}
