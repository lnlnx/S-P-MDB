import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AlbumBox from "../albums/AlbumBox";
import Spinner from "../UI/Spinner";
import axios from "axios";

const ArtistPage = (props) => {
  let { artistId } = useParams();
  let [albumList, setAlbumList] = useState(undefined);
  const artistUrl = `http://localhost:3001/albums?artistId=${artistId}`;

  useEffect(() => {
    axios
      .get(artistUrl)
      .then(function (response) {
        setAlbumList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const albumListComponent = albumList ? (
    albumList.map((album) => {
      return <AlbumBox songNames={album.songNames} key={album.id}></AlbumBox>;
    })
  ) : (
    <Spinner />
  );

  return (
    <div>
      <h1>Artist Name</h1>
      {albumListComponent}
    </div>
  );
};

export default ArtistPage;
