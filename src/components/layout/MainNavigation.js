import React, { useContext } from "react";
import FavoritesContext from "../../context/FavoritesContext";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const favoriteContext = useContext(FavoritesContext);

  console.log(favoriteContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>World Conferences</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Conferences</Link>
          </li>
          <li>
            <Link to="/new-conference">Make Conference</Link>
          </li>
          <li>
            <Link to="/favorites">
              Marked Conferences
              <span className={classes.badge}>
                {favoriteContext.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
