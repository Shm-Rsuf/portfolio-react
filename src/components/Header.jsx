import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header container">
      <div className="row">
        <h2>
          S<span>h</span>m
        </h2>
        <h2>
          U<span>su</span>f
        </h2>
      </div>

      <hr />

      <div className="row">
        <span>Front-End Developer</span>
        <a href="http://google.com" target="_blank" rel="noopener noreferrer">
          View Resume
        </a>
        <a
          href="mailto:shmusuf@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Send Email
        </a>
        <Link to="/contact">Contact Me</Link>
      </div>

      <hr />

      <div className="row">
        <Link tp="/about" className="box about">
          <span>About</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
        <h2>Aspieing</h2>

        <Link tp="/projects" className="box projects">
          <span>Projects</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
      </div>

      <hr />

      <div className="row">
        <h2>
          Front-E<span>n</span>d Dev<span>el</span>oper
        </h2>
      </div>

      <hr />

      <div className="row">
        <h2>Based</h2>
        <Link tp="/skills" className="box skills">
          <span>Skills</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
        <h2>in Bangladesh</h2>
      </div>

      <hr />
    </div>
  );
};

export default Header;
