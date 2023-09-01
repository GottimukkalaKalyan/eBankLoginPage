import Navbar from '../header'
import './index.css'

const Home = () => (
  <div className="home-main-container">
    <Navbar />
    <div className="home-content">
      <h1 className="heading">Your Flexibility, Our Excellence</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        alt="digital card"
        className="digital-card"
      />
    </div>
  </div>
)

export default Home
