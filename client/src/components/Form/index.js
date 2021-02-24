import React, { useState } from "react";
//import ImageUploader from "../ImageUploader/index";
import API from "../../utils/API";
import { Redirect } from "react-router-dom";

function Form() {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [phoneNumber, setphoneNumber] = useState();
  const [familyDescription, setfamilyDescription] = useState();
  const [email, setEmail] = useState();
  const [lovePets, setlovePets] = useState();
  const [errMsg, seterrMsg] = useState();
  const [redirect, setRedirect] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();


    const { files } = document.querySelector('input[type="file"]')
    const formData = new FormData();
    formData.append('file', files[0]);
    // replace this with your upload preset name
    formData.append('upload_preset', 'pgbhha9v');
    const options = {
      method: 'POST',
      body: formData,
    };

    return fetch('https://api.Cloudinary.com/v1_1/deavhcfeh/image/upload', options)
      .then(res => res.json())
      .then(res => {
        console.log(res);

        const userID = sessionStorage.getItem("sessionID");

        const userData = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
          familyDescription: familyDescription,
          lovePets: lovePets,
          imageURL: res.secure_url
        };

        API.updateProfile(userData, userID).then(
          (res) => {
            seterrMsg("");
            console.log("res is ", res);
            sessionStorage.removeItem("newuser");
            setRedirect("/findfamilies");
          },
          (err) => {
            console.log("oops!");
            console.log(err);
            seterrMsg("Update Profile Failed :(. Please try again.");
          }
        );
      })
      .catch(err => {
        seterrMsg("Image Upload Failed :(. Please try again.");
        console.log(err)
      });

  }


  if (!redirect) {
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
                    {/*<ImageUploader imageUpdate={setimageUpdate} />*/}
                    <div className="form-group">
                      <label for="firstName">Choose Profile Picture</label>
                      <input type="file" id="profilePic" />
                      {/* <button type="button" className="btn" onClick={handleImageUpload}>Upload</button> */}
                    </div>

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
                      />
                    Yes
                    <input
                        type="radio"
                        value="false"
                        name="lovepets"
                        onChange={(e) => setlovePets(e.target.value)}
                      />
                    No
                  </div>

                    <button
                      type="submit"
                      className="btn btn-info col-sm-4"
                      onClick={handleSubmit}
                    >
                      Submit
                  </button>
                    <p className="errmsg">{errMsg}</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    );
  } else {
    return <Redirect to={redirect} />
  }
}

export default Form;
