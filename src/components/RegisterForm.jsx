function RegisterForm({ form, message, onChange, onSubmit, onSwitch }) {
  return (
    <form onSubmit={onSubmit} className="auth-form">
      <h2>Register</h2>
      <p className="form-intro">Create an account for your restaurant or NGO to start sharing and receiving food donations.</p>

      <label>
        Organization name
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Enter your restaurant or NGO name"
        />
      </label>

      <label>
        Role
        <select name="role" value={form.role} onChange={onChange}>
          <option value="Ngo">NGO</option>
          <option value="Restaurant">Restaurant</option>
        </select>
      </label>

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
        Create account
      </button>

      <div className="toggle-text">
        <span>Already have an account?</span>
        <button type="button" className="link-button" onClick={onSwitch}>
          Sign in
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
