import { audio } from "./audio";

export const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export const updateTime = (setTime) => {
  const handler = () => {
    if (!isNaN(audio.duration)) {
      const currentTime = formatTime(audio.currentTime);
      const totalTime = formatTime(audio.duration);
      setTime(`${currentTime} / ${totalTime}`);
    }
  };

  // escuchar el evento
  audio.addEventListener("timeupdate", handler);

  // devolver cleanup para poder quitarlo
  return () => {
    audio.removeEventListener("timeupdate", handler);
  };
};
