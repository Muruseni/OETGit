import { useState } from "react";
import Modal from "./components/Modal";

export default function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [showOther, setShowOther] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center gap-4">
      <button
        className="px-8 py-4 text-lg bg-blue-600 text-white rounded"
        onClick={() => setShowInfo(true)}
      >
        Show Details
      </button>

      <button
        className="px-8 py-4 text-lg bg-green-600 text-white rounded"
        onClick={() => setShowOther(true)}
      >
        Show Other Info
      </button>

      <Modal isOpen={showInfo} onClose={() => setShowInfo(false)}>
        <p>This is content injected inside the modal!</p>
      </Modal>

      <Modal isOpen={showOther} onClose={() => setShowOther(false)}>
        <p>This is some other info inside the modal.</p>
      </Modal>
    </div>
  );
}