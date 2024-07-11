const axios = require('axios');

const spotifyApi = {
  getPlaylist: async (playlistId) => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`);
      return response.data;
    } catch (error) {
      console.error('Error getting playlist from Spotify API:', error);
      return null;
    }
  },

  searchTrack: async (query) => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track`);
      return response.data;
    } catch (error) {
      console.error('Error searching track on Spotify API:', error);
      return null;
    }
  },

  getTrackFeatures: async (trackId) => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/audio-features/${trackId}`);
      return response.data;
    } catch (error) {
      console.error('Error getting track features from Spotify API:', error);
      return null;
    }
  },

  getUserProfile: async (userId) => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error getting user profile from Spotify API:', error);
      return null;
    }
  },

  followUser: async (userId) => {
    try {
      const response = await axios.put(`https://api.spotify.com/v1/me/following?type=user&ids=${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error following user on Spotify API:', error);
      return null;
    }
  }
};

module.exports = spotifyApi;