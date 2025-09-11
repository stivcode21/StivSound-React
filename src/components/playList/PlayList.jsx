import { EllipsisVertical } from "lucide-react";
import styles from "./PlayList.module.css";
import { useUserDataStore } from "@/store/userDataStore";
import { useEffect, useState } from "react";
import { audio } from "@/utils/audio";

const PlayList = () => {
  const { currentSong, setCurrentSong, allSongs, setAllSongs } =
    useUserDataStore();
  const [songSelected, setSongSelected] = useState(null);

  useEffect(() => {
    if (currentSong) {
      setSongSelected(currentSong.id);
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

  //ordenar en orden alfabetico
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
    <section className={styles.playList}>
      <ul className={styles.playListSongs}>
        {allSongs.map((song) => (
          <li
            className={`${styles.playListSong} ${
              songSelected === song.id ? styles.songSelected : ""
            }`}
            onClick={() => PlaySound(song)}
            key={song.id}
          >
            <p className={styles.songTitle}>
              {song.title}
              <span className={styles.spinner}>
                {songSelected === song.id ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="2.8"
                      height="12"
                      x="1"
                      y="6"
                      fill="currentColor"
                    >
                      <animate
                        attributeName="y"
                        begin="SVGKWB9Ob0W.begin+0.4s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                        values="6;1;6"
                      />
                      <animate
                        attributeName="height"
                        begin="SVGKWB9Ob0W.begin+0.4s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                        values="12;22;12"
                      />
                    </rect>
                    <rect
                      width="2.8"
                      height="12"
                      x="5.8"
                      y="6"
                      fill="currentColor"
                    >
                      <animate
                        attributeName="y"
                        begin="SVGKWB9Ob0W.begin+0.2s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                        values="6;1;6"
                      />
                      <animate
                        attributeName="height"
                        begin="SVGKWB9Ob0W.begin+0.2s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                        values="12;22;12"
                      />
                    </rect>
                    <rect
                      width="2.8"
                      height="12"
                      x="10.6"
                      y="6"
                      fill="currentColor"
                    >
                      <animate
                        id="SVGKWB9Ob0W"
                        attributeName="y"
                        begin="0;SVGCkSt6baQ.end-0.1s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                        values="6;1;6"
                      />
                      <animate
                        attributeName="height"
                        begin="0;SVGCkSt6baQ.end-0.1s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                        values="12;22;12"
                      />
                    </rect>
                    <rect
                      width="2.8"
                      height="12"
                      x="15.4"
                      y="6"
                      fill="currentColor"
                    >
                      <animate
                        attributeName="y"
                        begin="SVGKWB9Ob0W.begin+0.2s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                        values="6;1;6"
                      />
                      <animate
                        attributeName="height"
                        begin="SVGKWB9Ob0W.begin+0.2s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                        values="12;22;12"
                      />
                    </rect>
                    <rect
                      width="2.8"
                      height="12"
                      x="20.2"
                      y="6"
                      fill="currentColor"
                    >
                      <animate
                        id="SVGCkSt6baQ"
                        attributeName="y"
                        begin="SVGKWB9Ob0W.begin+0.4s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                        values="6;1;6"
                      />
                      <animate
                        attributeName="height"
                        begin="SVGKWB9Ob0W.begin+0.4s"
                        calcMode="spline"
                        dur="0.6s"
                        keySplines=".14,.73,.34,1;.65,.26,.82,.45"
                        values="12;22;12"
                      />
                    </rect>
                  </svg>
                ) : (
                  ""
                )}
              </span>
            </p>
            <p className={styles.songArtist}>{song.artist}</p>
            <button className={styles.iconList}>
              <EllipsisVertical />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PlayList;
