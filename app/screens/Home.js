import {
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  
} from 'react-native';
import {useState, useEffect} from 'react';
import styles from '../styles/appContainer';
import homeStyling from '../styles/homeStyling';
import Ionicons from 'react-native-vector-icons/Ionicons';

import RNFS from 'react-native-fs'
import TrackPlayer, { State } from 'react-native-track-player';
// import useStoragePermission from '../src/hocks/Permission';

function Home() {
  const [tracks, setTracks] = useState([]);

  if (!global.isInitialized) {
    TrackPlayer.setupPlayer()
    .then(() => {
      global.isInitialized = true;
    });
  }

  useEffect(() => {
    loadTracks();
  }, []);

  const loadTracks = async () => {
    const path = `${RNFS.ExternalStorageDirectoryPath}/AMusic`;
    console.log(path);
    const files = await RNFS.readDir(path);
    console.log('file aprés path ', files);

    const track = files.map(file => ({
      id: file.name,
      url: `file:/${file.path}`,
      title: file.name,
      artist: 'Unknown Artist',
      artwork: 'https://picsum.photos/300',
    }));

    TrackPlayer.add(track)
      .then(() => {
        console.log('Track added');
      })
      .catch(error => {
        console.error('Error while adding track:', error);
      });
    setTracks(track);
  };
  
  const [modalVisible, setModalVisible] = useState(false);

  const getplay = (id) => {
    console.log('id',id)

  }

  return (
    <View style={styles.container}>
     
      <View style={{padding: 10}}>
        <View style={homeStyling.line}></View>
        <Text style={homeStyling.sectionTitle}>PlayLists</Text>
        <View>
          <FlatList
            data={tracks}
            renderItem={({item}) => (
              <View style={homeStyling.cardContainer}>
                <Image
                  source={require('../assets/imgs/playlist.jpeg')}
                  style={homeStyling.cardImage}
                />
                <View  style={homeStyling.cardTextArtist}>
                  <Text style={homeStyling.cardText}>{item.title}</Text>
                  <Text style={homeStyling.cardText}>{item.artist}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    

      <View style={homeStyling.playingBar}>
        <View style={homeStyling.songInfo}>
          <Image
            source={require('../assets/imgs/playlist.jpeg')}
            style={homeStyling.songImage}
          />
          <TouchableOpacity
            style={homeStyling.songDetails}
            onPress={() => {
              setModalVisible(true);
            }}>
            <Text style={homeStyling.songTitle}>Song Title</Text>
            <Text style={homeStyling.songArtist}>Artist Name</Text>
          </TouchableOpacity>
        </View>
        <View style={homeStyling.playbackControls}>
          <TouchableOpacity>
            <Ionicons name="play-skip-back-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={homeStyling.playButton}>
            <Ionicons name="play-outline" size={40} color="#674188" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="play-skip-forward-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <Modal animationType={'slide'} transparent={false} visible={modalVisible}>
        <View style={homeStyling.modalContainer}>
          <View style={homeStyling.modalHeader}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}>
              <Ionicons name="close-outline" size={24} color="#fff" />
            </TouchableOpacity>
            <Text style={homeStyling.modalTitle}>Now Playing</Text>
            <TouchableOpacity>
              <Ionicons
                name="ellipsis-vertical-outline"
                size={24}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
          <View style={homeStyling.modalBody}>
            <Image
              source={require('../assets/imgs/playlist.jpeg')}
              style={homeStyling.modalImage}
            />
            <Text style={homeStyling.modalSongTitle}>Song Title</Text>
            <Text style={homeStyling.modalSongArtist}>Artist Name</Text>
            <View style={homeStyling.modalSongProgress}>
              <View style={homeStyling.modalSongProgressBar}>
                <View style={homeStyling.modalSongProgressBarPlayed}></View>
              </View>
            </View>

            <Text style={homeStyling.modalSongDuration}>0:00</Text>

            <View style={homeStyling.modalControls}>
              <TouchableOpacity>
                <Ionicons name="heart-outline" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="play-skip-back-outline"
                  size={24}
                  color="#fff"
                />
              </TouchableOpacity>
              <TouchableOpacity style={homeStyling.modalPlayButton}>
                <Ionicons name="play-outline" size={40} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="play-skip-forward-outline"
                  size={24}
                  color="#fff"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="repeat-outline" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Home;
