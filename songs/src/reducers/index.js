import { combineReducers } from "redux";

export const songsReducer = () => {
  return [
    { title: "Rock", duration: "4:11" },
    { title: "Paper", duration: "4:21" },
    { title: "Scissors", duration: "2:11" },
    { title: "Spock", duration: "4:41" },
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type == "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
