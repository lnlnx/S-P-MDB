import React, { Fragment, useEffect, useState } from "react";
import ArtistBox from "./ArtistBox";
import ArtistPage from "./ArtistPage";
import axios from "axios";
import styles from "./ArtistListPage.module.css";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";

const RootUrl = "http://localhost:3001/artists";

const ArtistListPage = () => {
  const [artists, setArtists] = useState([]);
  let { path, url } = useRouteMatch();

  useEffect(() => {
    axios
      .get(RootUrl)
      .then(function (response) {
        setArtists(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  let artistList = (
    <Fragment>
      <h2 className={styles.ListTitle}>
        <a>Artists List</a>
      </h2>
      <div className={styles.ArtistListContainer}>
        {artists.map(({ name, id }) => (
          <Link to={`${url}/${id}`} key={id}>
            <ArtistBox name={name} />
          </Link>
        ))}
      </div>
    </Fragment>
  );

  return (
    <div>
      <Switch>
        <Route path={`${path}/:artistId`}>
          <ArtistPage />
        </Route>
        <Route path={path}>{artistList}</Route>
      </Switch>
    </div>
  );
};

export default ArtistListPage;
