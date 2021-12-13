import { createContext, useState } from "react";

const Context = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteConference) => {},
  deleteFavorite: (conferenceId) => {},
  itemIsFavorite: (conferenceId) => {},
});

export const FavoritesContextStore = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteConference) => {
    setUserFavorites((state) => {
      // return state.concat(favoriteConference)
      return [...state, favoriteConference];
    });
  };

  const removeFavoriteHandler = (conferenceId) => {
    setUserFavorites((state) => {
      return state.filter((conference) => conference.id !== conferenceId);
    });
  };

  const itemIsFavoriteHandler = (conferenceId) => {
    return userFavorites.some((conference) => conference.id === conferenceId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    deleteFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default Context;
