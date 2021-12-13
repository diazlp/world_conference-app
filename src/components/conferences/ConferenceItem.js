import React, { useContext } from "react";
import FavoritesContext from "../../context/FavoritesContext";
import Card from "../ui/Card";
import classes from "./ConferenceItem.module.css";

const ConferenceItem = (props) => {
  const { image, address, description, title, id } = props;
  const favoriteContext = useContext(FavoritesContext);

  const itemIsFavorite = favoriteContext.itemIsFavorite(id);

  const toggleFavoriteHandler = () => {
    if (itemIsFavorite) {
      favoriteContext.deleteFavorite(id);
    } else {
      favoriteContext.addFavorite({
        image,
        address,
        description,
        title,
        id,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteHandler}>
            {itemIsFavorite
              ? "Remove Marked Conference"
              : "Mark The Conference"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ConferenceItem;
