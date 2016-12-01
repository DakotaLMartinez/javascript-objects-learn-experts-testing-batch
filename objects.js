const playlist = {
  'Four Tops': "Reach Out, I'll Be There",
  'Four Tops': "I Can't Help Myself",
  'Bill Withers': "Ain't No Sunshine",
  'Marvin Gaye': "What's Goin' On"
};

const updatePlaylist = (playlist, artistName, songTitle) => {
  playlist[artistName] = songTitle;
  return playlist;
};
const removeFromPlaylist = (playlist, artistName) => {
  delete playlist[artistName];
  return playlist;
};
