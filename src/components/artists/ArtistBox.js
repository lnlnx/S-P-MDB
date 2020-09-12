import React from "react";
import styles from "./ArtistListPage.module.css";
import ArtistCover from "../../assets/img/artist_cover.jpg";

const ArtistBox = ({ name }) => {
  return (
    <div className={styles.ArtistBox}>
      <img alt="artist" src={ArtistCover} className={styles.ArtistCoverImage} />
      <div>{name}</div>
    </div>
  );
};

export default ArtistBox;
