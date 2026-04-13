import React, { useState } from 'react';
import { sendFeedback } from '../services/api';

export default function FeedbackForm() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseId, setResponseId] = useState<number | null>(null);
  const [error, setError] = useState('');

  const submitFeedback = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError('');

    try {
      const data = await sendFeedback({ title, body: message, userId: 1 });
      setResponseId(data.id);
      setIsSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Unexpected error occurred.');
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg border text-center">
        <h2 className="text-xl font-bold mb-2">Thank you for your feedback!</h2>
        <p className="text-gray-600">Your message was saved with ID: {responseId}</p>
      </div>
    );
  }

  return (
    <form onSubmit={submitFeedback} className="flex flex-col gap-4 bg-white p-8 rounded-xl shadow-lg border">
      <h2 className="text-xl font-bold mb-2 text-center">Give Feedback</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <textarea
        placeholder="Write your feedback message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 rounded min-h-28"
        required
      />
      {error && <p className="text-red-500 text-sm font-bold">{error}</p>}
      <button type="submit" className="bg-blue-600 text-white p-2 rounded font-bold hover:bg-blue-700">
        Submit Feedback
      </button>
    </form>
  );
}
