import Sound from 'react-sound';
import music from '../ring.mp3';

const PlaySound = (
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) => {
  return(
    <Sound
        url={ music }
        playStatus={ Sound.status.PLAYING }
        playFromPosition={ 300 }
        onLoading={ handleSongLoading }
        onPlaying={ handleSongPlaying }
        onFinishedPlaying={ handleSongFinishedPlaying }
    />
  );
}

export default PlaySound;