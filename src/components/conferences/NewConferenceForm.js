import React, { useRef } from "react";
import classes from "./NewConferenceForm.module.css";
import Card from "../ui/Card";

const NewConferenceForm = ({ onAddConference }) => {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredDescription = descriptionRef.current.value;

    const conferenceData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      descriptionRef: enteredDescription,
    };

    onAddConference(conferenceData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required id="image" ref={imageRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add the Conference</button>
        </div>
      </form>
    </Card>
  );
};

export default NewConferenceForm;
