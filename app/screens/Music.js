import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions, Image,} from 'react-native';
import TrackPlayer, { Event,State, usePlaybackState, useProgress, useTrackPlayerEvents,} from 'react-native-track-player';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import { getLyrics } from './getLyrics';

const {width, height} = Dimensions.get('window');

const togglePlayBack = async (playBackState, setIsPlaying) => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  console.log(currentTrack, playBackState, State.Playing);
  if (currentTrack != null) {
    if (playBackState === State.Paused) {
      await TrackPlayer.play();
      setIsPlaying(true);
    } else if (playBackState === State.Playing) {
      await TrackPlayer.pause();
      setIsPlaying(false);
    } else if (playBackState === State.None) {
      await TrackPlayer.play();
      setIsPlaying(true);
    }
  }
};

const Music = ({route}) => {
  const {item, tracks} = route.params;

  const [isPlaying, setIsPlaying] = useState(false); // add isPlaying state variable
  const playBackState = usePlaybackState();
  const progress = useProgress();
  const [trackTitle, setTrackTitle] = useState();
  const [trackArtist, setTrackArtist] = useState();
  const [sliderValue, setSliderValue] = useState(0);
  const [lyrics,setLyrics] = useState([])


  useEffect(() => {
    setSliderValue(progress.position);
  }, [progress.position]);

  const handleSliderValueChange = value => {
    setSliderValue(value);
    TrackPlayer.seekTo(value);
  };

  

  useEffect(() => {
    const getMusic = async () => {
      tracks.forEach(audio => {
        if (audio.id === item.id) {
          PlayMusic(audio);
          // console.log(audio.title.split('.')[0]);
          // console.log(audio.artist);

          getLyrics(audio.title.split('.')[0], audio.artist)
          .then(lyrics => {
            console.log('lyricsssssssssssssss',lyrics); // logs the lyrics to the console
            setLyrics(lyrics); // updates state with the lyrics
          }).catch(error => {
            console.error(error); // logs any errors to the console
          });
        }
      });
    };

    const PlayMusic = async music => {
      // await TrackPlayer.reset()
      // await TrackPlayer.setupPlayer();  
      await TrackPlayer.add([music, ...tracks]);
      await TrackPlayer.play();
      setIsPlaying(true);
    };
    
    getMusic();
  }, [item.id, tracks]);

  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
    await TrackPlayer.play();
  };

  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
    await TrackPlayer.play();
  };

  useTrackPlayerEvents(
    [Event.PlaybackTrackChanged, Event.PlaybackState],
    async event => {
      if (event.type === Event.PlaybackTrackChanged) {
        const track = await TrackPlayer.getTrack(event.nextTrack);
        setTrackTitle(track.title);
        setTrackArtist(track.artist);
      } else if (event.type === Event.PlaybackState) {
        if (event.state === State.Playing) {
          setIsPlaying(true);
        } else if (
          event.state === State.Paused ||
          event.state === State.Stopped
        ) {
          setIsPlaying(false);
        }
      }
    },
  );

  const formatTime = seconds => {
    const min = Math.floor(seconds / 60);
    const sec = Math.round(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <View
      style={{width: width, height: height, backgroundColor:'#343a40',}}
      blurRadius={5}>
      <SafeAreaView style={{flex: 1}}>
      <View style={styles.line}></View>
        <Image source={require('../assets/imgs/playlist.jpeg')} style={styles.img} />
        <View style={styles.mainContainer}>
          <View>
            <Text style={[styles.songContent, styles.songTitle]}>
              {trackTitle}
              {console.log('trackTitle',trackTitle)}
            </Text>
          </View>
          <View style={styles.progressContainer}>
            <Text style={styles.progressLabelText}>
              {formatTime(progress.position)}
            </Text>
            <Slider
              style={styles.progressBar}
              minimumValue={0}
              maximumValue={progress.duration}
              value={sliderValue}
              onValueChange={handleSliderValueChange}
              minimumTrackTintColor="#674188"
              maximumTrackTintColor="#444"
              thumbTintColor="#674188"
            />

            <Text style={styles.progressLabelText}>
              {formatTime(progress.duration)}
            </Text>
          </View>
          <View style={styles.musicControlsContainer}>
            <TouchableOpacity onPress={skipToPrevious}>
              <Ionicons
                name="play-skip-back-outline"
                size={35}
                color="#674188"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => togglePlayBack(playBackState, setIsPlaying)}>
              <Ionicons
                name={
                  playBackState === 'playing'
                    ? 'pause-circle-outline'
                    : 'play-circle-outline'
                }
                size={70}
                color="#674188"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={skipToNext}>
              <Ionicons
                name="play-skip-forward-outline"
                size={35}
                color="#674188"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.line}></View>
        </View>
      </SafeAreaView>
    </View>
    
  );
};
export default Music;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 160,
  },
  songContent: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  songTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  songArtist: {
    fontSize: 16,
    fontWeight: '300',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: 20,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#7f8d90',
  },
  progressLabelText: {
    color: '#fff',
  },
  musicControlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '90%',
    marginTop: 20,
  },
  musicControlButton: {
    marginHorizontal: 20,
  },
  img:{
    width: 250,
    height: 250,
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 2,
    marginTop: 100,
  },
  line: {
    height: 4,
    width: '100%',
    fontWeight: 'bold',
    backgroundColor: '#674188',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
  }
});