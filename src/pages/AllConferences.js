import React, { useState, useEffect } from "react";
import ConferenceList from "../components/conferences/ConferenceList";

const AllConferences = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedConferences, setLoadedConferences] = useState([]);

  useEffect(() => {
    fetch(
      "https://conference-call-d55b8-default-rtdb.asia-southeast1.firebasedatabase.app/conferences.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const conferences = [];

        for (const key in data) {
          const conference = {
            id: key,
            ...data[key],
          };
          conferences.push(conference);
        }

        setLoadedConferences(conferences);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <h1>All Conferences</h1>
      <ConferenceList conferences={loadedConferences} />
    </section>
  );
};

export default AllConferences;
