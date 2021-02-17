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
                      type="text"
                      placeholder="username"
                      value={this.state.username}
                      onChange={this.handleUsernameChange}
                    />
                  </div>
                  <div className="form-group">
                    <label for="InputEmail">Password</label>
                    <input
                      type="password"
                      placeholder="password"
                      value={this.state.password}
                      onChange={this.handlePasswordChange}
                    />
                  </div>
                  <button
                    onClick={this.handleSubmit}
                    type="submit"
                    className="btn btn-info col-sm-4"
                  >
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
