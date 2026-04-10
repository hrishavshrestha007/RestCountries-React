import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div className="home">
      <h1>Welcome to Rest Countries</h1>
      <p>Explore countries from around the world.</p>
      <Link to="/countries">View All Countries</Link>
    </div>
  )
}

export default HomePage