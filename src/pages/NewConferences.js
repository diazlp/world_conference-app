import React from "react";
import { useNavigate } from "react-router-dom";
import NewConferenceForm from "../components/conferences/NewConferenceForm";

const NewConferences = () => {
  const navigate = useNavigate();

  const addConferenceHandler = (conferenceData) => {
    fetch(
      "https://conference-call-d55b8-default-rtdb.asia-southeast1.firebasedatabase.app/conferences.json",
      {
        method: "POST",
        body: JSON.stringify(conferenceData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  };

  return (
    <section>
      <h1>Create a Conference</h1>
      <NewConferenceForm onAddConference={addConferenceHandler} />
    </section>
  );
};

export default NewConferences;
