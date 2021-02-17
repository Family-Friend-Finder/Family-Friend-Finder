import React from "react";
import "../../index.css";
import ImageUploader from "../ImageUploader/index";

function Form() {
  return (
    <center>
      <div>
        <div className="container">
          <div className="row" />
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <div className="card">
              <div className="card-body">
                <form>
                  <h2 className="title">Update Profile</h2>
                  <hr />
                  <ImageUploader />
                  <div className="form-group">
                    <label for="InputName">Name</label>
                    <input
                      type="name"
                      className="form-control"
                      id="InputName"
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="form-group">
                    <label for="InputEmail">Contact</label>
                    <input
                      type="email"
                      className="form-control"
                      id="InputEmail"
                      placeholder="425-856-6587"
                    />
                  </div>
                  <div className="form-group">
                    <label for="InputMessage">About Me</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="I like to read, I like to code"
                      rows="5"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-info col-sm-4">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}

export default Form;
