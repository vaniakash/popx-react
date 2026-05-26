import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Signup.css'

export default function Signup() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = () => {
    navigate('/profile', { state: { name: form.fullName, email: form.email } })
  }

  return (
    <div className="signup">
      <div className="signup-content">
        <h1 className="signup-title">Create your<br />PopX account</h1>

        <div className="form-group">
          <label className="form-label">Full Name*</label>
          <input
            id="signup-name"
            type="text"
            name="fullName"
            className="form-input"
            placeholder="Marry Doe"
            value={form.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Phone number*</label>
          <input
            id="signup-phone"
            type="tel"
            name="phone"
            className="form-input"
            placeholder="Marry Doe"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email address*</label>
          <input
            id="signup-email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Marry Doe"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Password*</label>
          <input
            id="signup-password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Marry Doe"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Company name</label>
          <input
            id="signup-company"
            type="text"
            name="company"
            className="form-input"
            placeholder="Marry Doe"
            value={form.company}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label agency-label">Are you an Agency?*</label>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={form.isAgency === 'yes'}
                onChange={handleChange}
              />
              <span className="radio-custom"></span>
              Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={form.isAgency === 'no'}
                onChange={handleChange}
              />
              <span className="radio-custom"></span>
              No
            </label>
          </div>
        </div>

        <button id="create-account-btn" className="btn-create" onClick={handleSubmit}>
          Create Account
        </button>
      </div>
    </div>
  )
}
