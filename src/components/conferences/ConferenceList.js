import React from "react";
import ConferenceItem from "./ConferenceItem";
import classes from "./ConferenceList.module.css";

const ConferenceList = ({ conferences }) => {
  return (
    <ul className={classes.list}>
      {conferences.map((conference) => (
        <ConferenceItem
          key={conference.id}
          id={conference.id}
          image={conference.image}
          title={conference.title}
          address={conference.address}
          description={conference.descriptionRef}
        />
      ))}
    </ul>
  );
};

export default ConferenceList;
