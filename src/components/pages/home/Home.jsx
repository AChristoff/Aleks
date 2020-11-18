import {Link} from "react-router-dom";
import './Home.scss'

function Home() {
  return (
    <section className="jumbotron">
      
      <h6>HELLO, I AM</h6>

      <h1>ALEKSANDAR HRISTOV</h1>

      <p className="stack">Front-end Developer / MERN stack</p>

      <Link to={'/portfolio'} className="home-cover">
        <img src="/assets/img/home-cover.png" alt="home-cover" />
      </Link>

      <h6>
        <span className="more">View more about me</span>
        <Link to={'/about'}>here</Link>
      </h6>

    </section>
  );
}

export default Home;