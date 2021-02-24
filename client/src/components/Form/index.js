import React, { useState } from "react";
import "../../index.css";
import ImageUploader from "../ImageUploader/index";
import API from "../../utils/API";

function Form() {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [phoneNumber, setphoneNumber] = useState();
  const [familyDescription, setfamilyDescription] = useState();
  const [email, setEmail] = useState();
  const [lovePets, setlovePets] = useState();
  const [imageUpdate, setimageUpdate] = useState();

  // this will prevent default
  const handleSubmit = (e) => {
    e.preventDefault();
    const userID = sessionStorage.getItem("sessionID");
    // console.log(`name: ${name} email: ${email} message: ${message}`);
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      familyDescription: familyDescription,
      lovePets: lovePets,
      imageUpdate: imageUpdate,
    };

    API.updateProfile(userData, userID).then(
      (res) => {
        console.log("res is ", res);
      },
      (err) => {
        console.log("oops!");
        console.log(err);
      }
    );
  };
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
                  <h2 className="title">UpdateProfile</h2>
                  <hr />
                  <ImageUploader imageUpdate={setimageUpdate} />
                  <div className="form-group">
                    <label for="firstName">First Name</label>
                    <input
                      type="name"
                      className="form-control"
                      id="firstName"
                      placeholder="Enter First Name"
                      onChange={(e) => setfirstName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="lastName">Last Name</label>
                    <input
                      type="name"
                      className="form-control"
                      id="lastName"
                      placeholder="Enter Last Name"
                      onChange={(e) => setlastName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="InputEmail">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="InputEmail"
                      placeholder="Enter Your Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="InputPhone">Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="InputPhone"
                      placeholder="Enter Your Phone"
                      onChange={(e) => setphoneNumber(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="description">Family Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="familyDescription"
                      placeholder="I like to read, I like to code"
                      rows="5"
                      onChange={(e) => setfamilyDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label for="lovePets">Love Pets?</label>
                    <input
                      type="radio"
                      value="true"
                      name="lovepets"
                      onChange={(e) => setlovePets(e.target.value)}
                    />{" "}
                    Yes
                    <input
                      type="radio"
                      value="false"
                      name="lovepets"
                      onChange={(e) => setlovePets(e.target.value)}
                    />{" "}
                    No
                  </div>

                  <button
                    // onClick={this.handleSubmit}
                    type="submit"
                    className="btn btn-info col-sm-4"
                    onClick={handleSubmit}
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
