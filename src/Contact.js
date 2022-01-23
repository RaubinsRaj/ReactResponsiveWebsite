import React, { useState } from "react";

const Contact = () => {
    const [data,setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        message:""
    });

    const InputEvent = (event) => {
        const {name, value} = event.target;
        setData((preval) => {
            return {
                ...preval,
                [name]:value,
            };
        });

    };

    const formSubmit = () => {};


  return (
    <div>
      <div className="my-5">
        <h4 className="text-center">Contact page</h4>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  fullName
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                Name="fullname"
                value={data.fullname}
                onChange={InputEvent}
                  placeholder="Enter Your Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  Name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Mobile Number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  Name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  Name="message"
                  value={data.message}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div class="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
