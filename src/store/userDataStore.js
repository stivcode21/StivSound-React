import { create } from "zustand";
import { allSongs } from "../data/data";

export const useUserDataStore = create((set) => ({
  currentSong: null,
  allSongs: allSongs,
  setCurrentSong: (song) => set({ currentSong: song }),
  setAllSongs: (songs) => set({ allSongs: songs }),
}));
