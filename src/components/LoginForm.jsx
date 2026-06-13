function LoginForm({ form, message, onChange, onSubmit, onSwitch, isSubmitting }) {
  return (
    <form onSubmit={onSubmit} className="auth-form" aria-busy={isSubmitting}>
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
          disabled={isSubmitting}
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
          disabled={isSubmitting}
        />
      </label>

      {message && <p className="message">{message}</p>}

      <button type="submit" className="primary" disabled={isSubmitting}>
        {isSubmitting ? <><span className="spinner" aria-hidden="true"></span>Signing in...</> : 'Sign in'}
      </button>

      <div className="toggle-text">
        <span>Don't have an account?</span>
        <button type="button" className="link-button" onClick={onSwitch} disabled={isSubmitting}>
          Register now
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
