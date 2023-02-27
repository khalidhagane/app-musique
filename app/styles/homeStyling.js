import {StyleSheet, Dimensions} from 'react-native';

const homeStyling = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    marginBottom: 20,
  },
  // searchBar: {
  //   height: 50,
  //   borderRadius: 10,
  //   backgroundColor: '#1F1F1F',
  //   paddingHorizontal: 16,
  //   marginBottom: 24,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   width: Dimensions.get('window').width - 80,
  // },
  // searchInput: {
  //   color: '#fff',
  //   marginLeft: 8,
  // },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardContainer: {
    marginBottom: 16,
    marginRight: 16,
    flexDirection: 'row'
  },
  cardImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    flexDirection: 'column',
    
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardTextArtist:{
    justifyContent: 'center',
    marginStart:10,

  },
  line: {
    height: 4,
    width: '100%',
    fontWeight: 'bold',
    backgroundColor: '#674188',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
  },
  playingBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#222',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderTopColor: '#674188',
    borderTopWidth: 4,
  },
  songInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songImage: {
    width: 45,
    height: 45,
    borderRadius: 5,
    marginRight: 10,
  },
  songDetails: {
    justifyContent: 'center',
  },
  songTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  songArtist: {
    color: '#ccc',
    fontSize: 14,
  },
  playbackControls: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  },
  playButton: {
    marginHorizontal: 20,
  },
  container: {
    padding: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#2AC062',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 25,
  },
  closeButton: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3974',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
  },
  image: {
    marginTop: 150,
    marginBottom: 10,
    width: '100%',
    height: 350,
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
    padding: 40,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    opacity: 0.9,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  modalTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalBody: {
    width: '100%',
    paddingHorizontal: 20,
  },
  modalSongTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalSongArtist: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 20,
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  modalControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalPlayButton: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#674188',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalSongProgress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  modalSongProgressBar: {
    height: 3,
    width: '100%',
    backgroundColor: '#674188',
    borderRadius: 10,
  },
  modalSongDuration: {
    color: '#fff',
    fontSize: 14,
  },
  modalSongProgressBarPlayed: {
    height: 3,
    width: '50%',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

export default homeStyling;