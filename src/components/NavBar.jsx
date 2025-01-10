import { Component } from "react"
import 'bootstrap-icons/font/bootstrap-icons.css'

class NavBar extends Component {
    render() {
    return (
        <nav
        className="navbar navbar-expand-lg"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#"
            ><img src="src/assets/logo.png" style={{width: "100px", height: "55px"}}
          /></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fw-bold" href="#" onClick={() => this.props.changePage(1)}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">TV Shows</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">Movies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#" onClick={() => this.props.changePage(2)}>Settings</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#" onClick={() => this.props.changePage(3)}>Profile</a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <i className="bi bi-search icons text-white"></i>
              <div id="kids" className="fw-bold text-white">KIDS</div>
              <i className="bi bi-bell icons text-white"></i>
              <i className="bi bi-person-circle icons text-white"></i>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar