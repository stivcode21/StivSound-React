import PlayerContent from "../playerContent/PlayerContent";
import PlayList from "../playList/PlayList";
import TopBar from "../topBar/TopBar";
import styles from "./MusicPlayer.module.css";

const MusicPlayer = () => {
  return (
    <div className={styles.player}>
      <TopBar name="StivSound" />
      <PlayerContent />
      <TopBar name="PlayList" />
      <PlayList />
    </div>
  );
};

export default MusicPlayer;
