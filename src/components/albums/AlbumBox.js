import React from "react";
import styles from "./AlbumBox.module.css";
import AlbumCover from "../../assets/img/album_cover.jpeg";

const AlbumBox = ({ songNames, albumTitle }) => {
  return (
    <div className={styles.AlbumBox}>
      <div className={styles.CoverContainer}>
        <img className={styles.AlbumCover} src={AlbumCover} alt={"cover"} />
        <p>{albumTitle}</p>
      </div>
      <ul className={styles.SongList}>
        {songNames.map((songName) => (
          <li className={styles.SongName}>{songName}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumBox;
