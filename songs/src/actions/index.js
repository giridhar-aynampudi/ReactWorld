//action creator
export const selectSong = (song) => {
  //return an action which is object
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
