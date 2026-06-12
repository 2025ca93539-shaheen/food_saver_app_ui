import { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const initialForm = { email: '', password: '', name: '', role: 'Ngo' };

function App() {
  const [view, setView] = useState('login');
  const [form, setForm] = useState(initialForm);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (view === 'login') {
      if (!form.email || !form.password) {
        setMessage('Please enter both email and password.');
        return;
      }
      setUser({ email: form.email, name: 'Food Saver Partner', role: form.role || 'Partner' });
      setMessage('');
    } else {
      if (!form.name || !form.email || !form.password || !form.role) {
        setMessage('Please complete all registration fields, including your role.');
        return;
      }
      setUser({ email: form.email, name: form.name, role: form.role });
      setMessage('');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setForm(initialForm);
    setView('login');
    setMessage('You have been logged out.');
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
          <article>
            <h2>Saved Meals</h2>
            <p>Plan meals from leftover ingredients and save money daily.</p>
          </article>
          <article>
            <h2>Food Goals</h2>
            <p>Set targets for how much food you want to save each week.</p>
          </article>
        </section>

        <section className="stats-panel">
          <div>
            <h3>Weekly summary</h3>
            <p>Meals saved: 12</p>
            <p>Waste reduced: 4.5 kg</p>
          </div>
          <div>
            <h3>Next action</h3>
            <p>Check your fridge for tomatoes and greens.</p>
          </div>
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
            onSwitch={() => { setView('register'); setMessage(''); }}
          />
        ) : (
          <RegisterForm
            form={form}
            message={message}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onSwitch={() => { setView('login'); setMessage(''); }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
