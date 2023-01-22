import React, { useState, useEffect } from 'react';
import getApiData from '../../../api';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';

const Discover = () => {
  const [newReleases, setNewReleases] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const setApiData = async () => {
      setNewReleases(await getApiData('new-releases', 'albums'));
      setPlaylists(await getApiData('featured-playlists', 'playlists'));
      setCategories(await getApiData('categories', 'categories'));
    };
    setApiData();
  }, []);

  return (
    <div className="discover">
      <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
      <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
      <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
    </div>
  );
};

export default Discover;
