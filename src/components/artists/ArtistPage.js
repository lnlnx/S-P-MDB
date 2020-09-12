import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import AlbumBox from "../albums/AlbumBox";
import Spinner from "../UI/Spinner";
import styles from "./ArtistPage.module.css";
import axios from "axios";
import ArtistCover from "../../assets/img/artist_cover.jpg";

const ArtistPage = () => {
  let { artistId } = useParams();
  let [artistInfo, setArtistInfo] = useState(undefined);
  const artistUrl = `http://localhost:3001/albums?artistId=${artistId}`;

  useEffect(() => {
    axios
      .get(artistUrl)
      .then(function (response) {
        if (response.data.length >= 1) {
          setArtistInfo(response.data[0]);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const albumListComponent = artistInfo ? (
    <Fragment>
      <div className={styles.ArtistInfoContainer}>
        <img
          alt="artist"
          src={ArtistCover}
          className={styles.ArtistCoverImage}
        />
        <h1 className={styles.ArtistName}>{artistInfo.name}</h1>
      </div>

      <div className={styles.AlbumListContainer}>
        {artistInfo.albums.map((album) => {
          return (
            <AlbumBox
              songNames={album.songs}
              key={album.id}
              albumTitle={album.albumTitle}
            ></AlbumBox>
          );
        })}
      </div>
    </Fragment>
  ) : (
    <Spinner />
  );

  return <div>{albumListComponent}</div>;
};

export default ArtistPage;
