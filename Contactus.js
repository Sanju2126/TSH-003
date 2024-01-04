import React from 'react';

import "./App.css";

function Contactus() {
  
  return (
    
    <div className="container">
      <div className="row">
        <div className="col align-self-center">
          <h1 className="text-center">Send us a message</h1>
          
          <form>
            {/* <!-- name --> */}
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="name"
                name="name"
                className="form-control"
                id="name"
                placeholder="enter your name"
              />
            </div>

            {/* <!-- email --> */}
            <div className="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="enter your email"
              />
            </div>

            {/* <!-- subject --> */}
            <div className="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                name="subject"
                className="form-control"
                id="subject"
                placeholder="enter subject"
              />
            </div>

            <div className="form-group">
              <label for="email_body">Message</label>
              <textarea
                className="form-control"
                id="email_body"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
