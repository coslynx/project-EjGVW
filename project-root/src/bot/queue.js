const queue = {
  songs: [],
  playing: false,
  volume: 50,
  nowPlaying: null,

  play(song) {
    this.songs.push(song);
    if (!this.playing) {
      this.playing = true;
      this.nowPlaying = this.songs.shift();
      // Logic to play the song
    }
  },

  pause() {
    this.playing = false;
    // Logic to pause the current song
  },

  skip() {
    if (this.songs.length > 0) {
      this.nowPlaying = this.songs.shift();
      // Logic to skip to the next song
    } else {
      this.playing = false;
      this.nowPlaying = null;
      // Logic to stop playing when queue is empty
    }
  },

  queueSong(song) {
    this.songs.push(song);
    // Logic to add a song to the queue
  },

  searchSong(query) {
    // Logic to search for a song based on query
    return foundSong;
  }
};

module.exports = queue;