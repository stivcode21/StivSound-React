import MusicPlayer from "../musicPlayer/MusicPlayer";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div styles={styles.container}>
      <MusicPlayer />
    </div>
  );
};

export default Home;
