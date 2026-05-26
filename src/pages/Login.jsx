import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleLogin = () => {
    navigate('/profile')
  }

  return (
    <div className="login">
      <div className="login-content">
        <h1 className="login-title">Signin to your<br />PopX account</h1>
        <p className="login-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input
            id="login-email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter email address"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            id="login-password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <button id="login-btn" className="btn-login" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  )
}
