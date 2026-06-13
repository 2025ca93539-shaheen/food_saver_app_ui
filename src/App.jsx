import { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import { loginUser, registerUser } from './services/authService';

const initialForm = { email: '', password: '', name: '', role: 'NGO' };

function App() {
  const [view, setView] = useState('login');
  const [form, setForm] = useState(initialForm);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    console.log(`Updated form field: ${name} = ${value}`);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');

    if (view === 'login') {
      if (!form.email || !form.password) {
        setMessage('Please enter both email and password.');
        return;
      }
    } else if (!form.name || !form.email || !form.password || !form.role) {
      setMessage('Please complete all registration fields, including your role.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = view === 'login'
        ? { email: form.email, password: form.password }
        : { name: form.name, email: form.email, password: form.password, role: form.role };

      const data = view === 'login'
        ? await loginUser(payload)
        : await registerUser(payload);

      if (view === 'login') {
        const authenticatedUser = data?.user || data?.data?.user || {
          name: data?.name || data?.email || form.email,
          email: form.email,
          role: data?.role || 'Partner',
        };

        setUser(authenticatedUser);
        if (data?.token) {
          localStorage.setItem('token', data.token);
        }
      } else {
        setView('login');
        setMessage('Registration successful! Please sign in.');
      }

      setForm(initialForm);
    } catch (error) {
      setUser(null);
      setMessage(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setForm(initialForm);
    setView('login');
    setMessage('You have been logged out.');
    localStorage.removeItem('token');
  };

  if (user) {
    return (
      <div className="app-shell">
        <header className="topbar">
          <div>
            <h1>Food Saver Dashboard</h1>
            <p>Welcome back, {user.name} <span className="user-role">({user.role})</span>.</p>
          </div>
          <button className="ghost" onClick={handleLogout}>
            Logout
          </button>
        </header>

        <section className="dashboard-cards">
          <article>
            <h2>Track Waste</h2>
            <p>Monitor food expiration and reduce waste with smart reminders.</p>
          </article>
        </section>
      </div>
    );
  }

  return (
    <div className="auth-shell">
      <div className="auth-panel">
        <div className="brand">
          <h1>Food Saver</h1>
          <p>Connecting restaurants and NGOs so surplus food reaches people, not landfills.</p>
        </div>

        {view === 'login' ? (
          <LoginForm
            form={form}
            message={message}
            onChange={handleChange}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            onSwitch={() => { setView('register'); setMessage(''); }}
          />
        ) : (
          <RegisterForm
            form={form}
            message={message}
            onChange={handleChange}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            onSwitch={() => { setView('login'); setMessage(''); }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
