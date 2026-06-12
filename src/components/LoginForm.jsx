function LoginForm({ form, message, onChange, onSubmit, onSwitch }) {
  return (
    <form onSubmit={onSubmit} className="auth-form">
      <h2>Login</h2>
      <p className="form-intro">Sign in to manage your restaurant donations or NGO pickup requests quickly.</p>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="you@example.com"
        />
      </label>

      <label>
        Password
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder="Password"
        />
      </label>

      {message && <p className="message">{message}</p>}

      <button type="submit" className="primary">
        Sign in
      </button>

      <div className="toggle-text">
        <span>Don't have an account?</span>
        <button type="button" className="link-button" onClick={onSwitch}>
          Register now
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
