import { useLocation } from 'react-router-dom'
import './Profile.css'
import avatar from '../assets/avatar.jpg'

export default function Profile() {
  const location = useLocation()
  const name = location.state?.name || 'Marry Doe'
  const email = location.state?.email || 'Marry@Gmail.Com'

  return (
    <div className="profile">
      <div className="profile-header">
        <h2 className="profile-heading">Account Settings</h2>
      </div>

      <div className="profile-user">
        <div className="avatar-wrapper">
          <img src={avatar} alt="User Avatar" className="avatar-img" />
          <div className="avatar-badge">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
              <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75 1.84-1.83zM3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"/>
            </svg>
          </div>
        </div>
        <div className="user-info">
          <p className="user-name">{name}</p>
          <p className="user-email">{email}</p>
        </div>
      </div>

      <div className="profile-divider" />

      <div className="profile-bio">
        <p>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor
          Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  )
}
