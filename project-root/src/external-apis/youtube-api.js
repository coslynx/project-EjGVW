const axios = require('axios');

const fetchYouTubeVideo = async (videoId) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=YOUR_API_KEY&part=snippet,contentDetails`);
    return response.data.items[0];
  } catch (error) {
    console.error('Error fetching YouTube video:', error);
    return null;
  }
};

module.exports = {
  fetchYouTubeVideo,
};