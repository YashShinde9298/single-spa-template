import './style.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';

export default function Root(props) {
  return (<>
    <Router>
      <nav>
        {/* <a href="/">Home</a>
      <a href="/blogs">Blog</a> */}
        <Link to='/'>Home</Link>
        <Link to='/blogs'>Blog</Link>
      </nav>
    </Router>
  </>)
}
