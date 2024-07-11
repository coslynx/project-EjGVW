const axios = require('axios');

const SoundCloudAPI = {
  searchTracks: async (query) => {
    try {
      const response = await axios.get(`https://api.soundcloud.com/tracks?q=${query}&client_id=YOUR_CLIENT_ID`);
      return response.data;
    } catch (error) {
      console.error('Error searching tracks on SoundCloud:', error);
      return [];
    }
  },
  getTrackInfo: async (trackId) => {
    try {
      const response = await axios.get(`https://api.soundcloud.com/tracks/${trackId}?client_id=YOUR_CLIENT_ID`);
      return response.data;
    } catch (error) {
      console.error('Error getting track info from SoundCloud:', error);
      return {};
    }
  },
  getTrackStream: async (trackId) => {
    try {
      const response = await axios.get(`https://api.soundcloud.com/tracks/${trackId}/stream?client_id=YOUR_CLIENT_ID`);
      return response.data.stream_url;
    } catch (error) {
      console.error('Error getting track stream from SoundCloud:', error);
      return '';
    }
  },
};

module.exports = SoundCloudAPI;