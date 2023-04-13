// import { set } from "mongoose";
import React, { useState } from "react";
import { useNavigation } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_PROJECT } from "../utils/mutations";
import spaceBackground from "../images/space.jpg";

function CreateProject(props) {
  const [formState, setFormState] = useState({
    title: "",
    notes: "",
  });
  const [addProject] = useMutation(ADD_PROJECT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProject({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="relative">
        <form
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-3xl bg-purple-300/50  border-solid border-2 border-purple-300 rounded-lg"
          onSubmit={handleFormSubmit}
        >
          {/* <label>
          First Name
          <input type="text" name="First Name" />
        </label>
        <label>
          Last Name
          <input type="text" name="Last Name" />
        </label> */}
          <label>
            Project Title
            <input
              className="text-black"
              type="projectTitle"
              name="title"
              onChange={handleInputChange}
              // value={formState.username}
              placeholder="Project Title"
            />
          </label>
          <label>
            Email
            <input
              className="text-black"
              type="notes"
              name="notes"
              onChange={handleInputChange}
              // value={formState.email}
              placeholder="Notes"
            />
          </label>
          {/* <label>
          Confirm Password
          <input type="text" name="Confirm Password" />
        </label> */}
          <input
            type="submit"
            value="Login/Create Account"
            // onClick={() => {
            //   handleFormSubmit();
            // }}
          />
        </form>
        <img src={spaceBackground} alt="background" />
      </div>
    </div>
  );
}

export default CreateProject;