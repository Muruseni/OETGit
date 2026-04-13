type LoginRequest = {
  username: string;
  password: string;
};

type LoginResponse = {
  accessToken: string;
};

type FeedbackRequest = {
  title: string;
  body: string;
  userId: number;
};

type FeedbackResponse = {
  id: number;
};

export const loginUser = async ({ username, password }: LoginRequest): Promise<LoginResponse> => {
  const response = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  if (!response.ok) {
    throw new Error('Wrong credentials!');
  }

  return response.json();
};

export const sendFeedback = async ({ title, body, userId }: FeedbackRequest): Promise<FeedbackResponse> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, body, userId })
  });

  if (!response.ok) {
    throw new Error('Failed to submit feedback.');
  }

  return response.json();
};
