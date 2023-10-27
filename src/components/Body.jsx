import { Col, Container, Row, Form } from 'react-bootstrap';
import { Component } from 'react'
import { render } from '@testing-library/react';

class Body extends Component {
    state = ""

    render() {
        return (
            <div className="container-fluid px-4">
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <h2 className="mb-4">TV Shows</h2>
                <div className="btn-group" role="group">
                  <div className="dropdown ms-4 mt-1">
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ backgroundColor: '#221f1f' }}
                    >
                      Genres
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Comedy</a></li>
                      <li><a className="dropdown-item" href="#">Drama</a></li>
                      <li><a className="dropdown-item" href="#">Thriller</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
              <i className="bi-alarm" style={{ fontSize: "2rem",  color: "cornflowerblue"}}></i>
                <i className="bi bi-grid-3x3 icons"></i>
              </div>
            </div>
            
            
          </div>
        )
    }

}
export default Body