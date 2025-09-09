import { CircleX } from "lucide-react";
import styles from "./PlayList.module.css";
import { useUserDataStore } from "@/store/userDataStore";
import { useEffect } from "react";
import { audio } from "@/utils/audio";

const PlayList = () => {
  const { currentSong, setCurrentSong, allSongs, setAllSongs } =
    useUserDataStore();

  useEffect(() => {
    if (currentSong) {
      audio.src = currentSong.src;
      audio.title = currentSong.title;
      audio.play();
    }
  }, [currentSong]);

  const PlaySound = (song) => {
    const findSong = allSongs.find((e) => e.id === song.id);
    if (findSong) {
      setCurrentSong(null);
      audio.pause();
      setCurrentSong(findSong);
    }
  };

  const sortSongs = () => {
    allSongs.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }

      if (a.title > b.title) {
        return 1;
      }

      return 0;
    });

    return setAllSongs(allSongs);
  };

  useEffect(() => {
    sortSongs();
  }, []);

  return (
    <div className={styles.playList}>
      <ul className={styles.playListSongs}>
        {allSongs.map((song) => (
          <li
            className={styles.playListSong}
            onClick={() => PlaySound(song)}
            key={song.id}
          >
            <span className={styles.songTitle}>{song.title}</span>
            <span className={styles.songArtist}>{song.artist}</span>
            <button
              onclick="deleteSong({song.id})"
              class="playlist-song-delete"
              aria-label="Delete {song.title}"
            >
              <CircleX />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayList;
