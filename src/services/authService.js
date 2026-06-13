import request from './api';

export const loginUser = (payload) => request('/login', {
  method: 'POST',
  body: JSON.stringify(payload),
});

export const registerUser = (payload) => request('/register', {
  method: 'POST',
  body: JSON.stringify(payload),
});
