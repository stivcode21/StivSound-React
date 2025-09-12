import { useEffect, useState } from "react";
import styles from "./PlayerContent.module.css";
import imgPreviu from "/logo-stivsound.jpg";
import { Pause, PlayIcon, Shuffle, SkipBack, SkipForward } from "lucide-react";
import { updateTime } from "@/utils/time";
import { useUserDataStore } from "../../store/userDataStore";
import { audio } from "../../utils/audio";

const PlayerContent = () => {
  const [time, setTime] = useState("00:00 / 00:00");
  const { currentSong, setCurrentSong, allSongs, setAllSongs } =
    useUserDataStore();

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const clear = updateTime(setTime);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    // cleanup
    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      clear;
    };
  }, []);

  const nextSong = () => {
    if (!currentSong) {
      setCurrentSong(allSongs[0]);
      return;
    }

    const indexSong = allSongs.findIndex((song) => song.id === currentSong.id);
    const nextIndex =
      indexSong === allSongs.length - 1 ? indexSong : indexSong + 1;

    setCurrentSong(allSongs[nextIndex]);
  };

  const previusSong = () => {
    if (!currentSong) {
      setCurrentSong(allSongs[0]);
      return;
    }

    const indexSong = allSongs.findIndex((song) => song.id === currentSong.id);
    const nextIndex = indexSong <= 0 ? indexSong : indexSong - 1;

    setCurrentSong(allSongs[nextIndex]);
  };

  const shuffle = () => {
    allSongs.sort(() => Math.random() - 0.5);

    setAllSongs(allSongs);
  };

  return (
    <section
      className={styles.playerContent}
      style={{
        backgroundImage: `url(${
          currentSong
            ? currentSong.banner
            : "https://wallpapers.com/images/hd/music-notes-background-094jpwqvx4x923th.jpg"
        })`,
      }}
    >
      <div id="player-album-art" className={styles.playerAlbumArt}>
        <img
          className={styles.imgPreviu}
          src={currentSong ? currentSong.img : imgPreviu}
          alt="song cover art"
        />
        <div className={styles.playerDisplaySongArtist}>
          <p className={styles.title}>{currentSong?.title}</p>
          <p className={styles.artist}>{currentSong?.artist}</p>
        </div>
      </div>

      <div className={styles.playerDisplay}>
        <div className={styles.playerButtons}>
          <button aria-label="Previous" onClick={previusSong}>
            <SkipBack />
          </button>
          {isPlaying ? (
            <button
              aria-label="Pause"
              className={styles.pause}
              onClick={() => {
                audio.pause();
              }}
            >
              <Pause />
            </button>
          ) : (
            <button
              aria-label="Play"
              onClick={() => {
                if (currentSong) {
                  audio.play();
                } else {
                  setCurrentSong(allSongs[0]);
                }
              }}
            >
              <PlayIcon />
            </button>
          )}
          <button aria-label="Next" onClick={nextSong}>
            <SkipForward />
          </button>
          <button
            aria-label="Shuffle"
            className={styles.shuffle}
            onClick={shuffle}
          >
            <Shuffle />
          </button>
          <div id="time-display">{time}</div>
        </div>
      </div>
    </section>
  );
};

export default PlayerContent;
