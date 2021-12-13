import React, { useContext } from "react";
import ConferenceList from "../components/conferences/ConferenceList";
import FavoriteContext from "../context/FavoritesContext";

const Favorites = () => {
  const favoriteContext = useContext(FavoriteContext);

  let content;

  if (favoriteContext.totalFavorites === 0) {
    content = (
      <p>You have no marked conference. Mark them out to give support!</p>
    );
  } else {
    content = <ConferenceList conferences={favoriteContext.favorites} />;
  }

  return (
    <section>
      <h1>Marked Conferences</h1>
      {content}
    </section>
  );
};

export default Favorites;
