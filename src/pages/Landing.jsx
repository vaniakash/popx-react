import { useNavigate } from 'react-router-dom'
import './Landing.css'

const bubbles = [
  { id: 1, top: '18%', left: '52%', size: 46 },
  { id: 2, top: '22%', left: '38%', size: 46 },
  { id: 3, top: '28%', left: '30%', size: 46 },
  { id: 4, top: '24%', left: '46%', size: 46 },
  { id: 5, top: '32%', left: '44%', size: 46 },
  { id: 6, top: '37%', left: '52%', size: 46 },
  { id: 7, top: '42%', left: '58%', size: 46 },
  { id: 8, top: '47%', left: '64%', size: 46 },
  { id: 9, top: '12%', left: '40%', size: 46 },
  { id: 10, top: '8%',  left: '30%', size: 46 },
  { id: 11, top: '14%', left: '22%', size: 46 },
  { id: 12, top: '52%', left: '30%', size: 46 },
  { id: 13, top: '58%', left: '60%', size: 46 },
]

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="landing">
      <div className="bubbles-area">
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="bubble"
            style={{ top: b.top, left: b.left, width: b.size, height: b.size }}
          >
            {b.id}
          </div>
        ))}
      </div>

      <div className="landing-content">
        <h1 className="landing-title">Welcome to PopX</h1>
        <p className="landing-sub">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.
        </p>
        <button className="btn-primary" onClick={() => navigate('/signup')}>
          Create Account
        </button>
        <button className="btn-secondary" onClick={() => navigate('/login')}>
          Already Registered? Login
        </button>
      </div>
    </div>
  )
}
