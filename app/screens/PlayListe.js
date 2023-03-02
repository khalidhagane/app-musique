import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import RNFS from 'react-native-fs';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';

const PlayListe = ({navigation}) => {
  const [tracks, setTracks] = useState([]);
  const playbackState = usePlaybackState();
  // console.log('tracksssssssss',tracks);

  if (!global.isInitialized) {
    TrackPlayer.setupPlayer()
    .then(() => {
      global.isInitialized = true;
    });
  }

  // useEffect(() => {
  //   TrackPlayer.setupPlayer()
  //     .then(() => {
  //       console.log('Player ready');
  //     })
  //     .catch(error => {
  //       console.error('Error while setting up player:', error);
  //     });
  // }, []);

  useEffect(() => {
    loadTracks();
  }, []);

  const loadTracks = async () => {
    const path = `${RNFS.ExternalStorageDirectoryPath}/AMusic`;
    console.log('pathhhhhhhhh',path);
    const files = await RNFS.readDir(path);
    console.log('files',files);

    const track = files.map((file, index) => ({
      id: index,
      title: file.name.split('-')[1] || file.name.split('.')[0],
      url: file.path,
      artist: file.name.split('-')[0] || file.name.split('.')[0],
      artwork: 'https://picsum.photos/300',
    }));
    console.log('tracttttttttttttk',track);


    TrackPlayer.add(track)  // add c'est une array kaina f trackplayer
      .then(() => {
        console.log('Track added');
      })
      .catch(error => {
        console.error('Error while adding track:', error);
      });
    setTracks(track);
  };

  const renderItem = ({item}) => {
    return (
      
      <View style={{paddingHorizontal: 5, backgroundColor: '#343a40'}}>
        <View style={styles.line}></View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Music', {item, tracks})}>
            <View style={styles.cardContainer}>
              <Image
                source={require('../assets/imgs/playlist.jpeg')}
                style={styles.cardImage}
              />

              <View style={styles.cardTextArtist}>
                <Text style={{fontWeight: 'bold', color: '#fff'}}>
                  {item.title}
                  {/* {console.log('item.title',item.title)} */}
                  
                </Text>
                <Text style={{marginLeft: 8, color: '#fff'}}>
                  {item.artist}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={tracks}
        renderItem={renderItem}
        keyExtractor={item => item.url}
      />
    </View>
  );
};

export default PlayListe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardTextArtist: {
    justifyContent: 'center',
    marginStart: 10,
  },
  cardContainer: {
    flexDirection: 'row',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  line: {
    height: 4,
    width: '100%',
    fontWeight: 'bold',
    backgroundColor: '#674188',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
    // marginBottom:4,
  },

  cardImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    flexDirection: 'column',
    marginVertical: 5,
  },
});
