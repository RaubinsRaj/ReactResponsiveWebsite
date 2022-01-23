import React from "react";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const Common= (props)=> {
  return (
    <div>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1>
                 {props.name} <strong className="brand-name">Raubins Raj</strong>
                </h1>
                <h6 className="my-3"> We are team of talented developers</h6>
                <div className="mt-3">
                    <Link to={props.visit} className="btn btn-info" role="button">{props.btname}</Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Common;