

// const API_BASE_URL = 'https://api.genius.com';
// const ACCESS_TOKEN = 'Zo1sBJUzDb1mtVAJlnhCwOH_9aumcgaNG3KAZskLc7zZndZkvL6w6XaGCSMg_jvc';

// export async function Settings(titleP, artist) {
//   console.log(titleP);
//   const title = titleP.split('(')[0]
//   console.log(title);
//   console.log(artist);

//   const response = await fetch(`${API_BASE_URL}/search?q=${encodeURIComponent(title)}%20${encodeURIComponent(artist)}`, {
//     headers: {
//       'Authorization': `Bearer ${ACCESS_TOKEN}`,
//     },
//   });
//   const json = await response.json();
//   const songPath = json.response.hits[0]?.result?.api_path;
//   console.log(json);
//   if (!songPath) {
//     throw new Error(`No song found for title: ${title} and artist: ${artist}`);
//   }

//   const songResponse = await fetch(`${API_BASE_URL}${songPath}`, {
//     headers: {
//       'Authorization': `Bearer ${ACCESS_TOKEN}`,
//     },
//   });
//   const songJson = await songResponse.json();
  
//   const lyricsPath = songJson.response.song.url;
//   if (!lyricsPath) {
//     throw new Error(`No lyrics found for title: ${title} and artist: ${artist}`);
//   }

//   const lyricsResponse = await fetch(`${lyricsPath}`);

//   const lyricsHtml = await lyricsResponse.text();

//   const lyricsDiv =  lyricsHtml.match(/<div data-lyrics-container="true" class="Lyrics__Container-sc-1ynbvzw-6 YYrds">(.*)<\/div>/s,)[1];

 
//     // remove all the html tags
//     const lyricsText = lyricsDiv.replace(/(<([^>]+)>)/gi, '');

//     // remove all the special characters
//     const lyricsTextSpecialCharsRemoved = lyricsText.replace(/[^\w\s]/gi, '');

//     // also remove chars that starts with a number
//     const lyricsTextSpecialCharsRemoved2 = lyricsTextSpecialCharsRemoved.replace(/\d+/g, '');

//     // remove all the extra spaces
//     const lyricsTextTrimmed = lyricsTextSpecialCharsRemoved2.replace(
//       /\s+/g,
//       ' ',
//     );

//     // the lyrics stops when it finds the following text 'How to Format Lyrics'
//     const lyricsTextFormatted = lyricsTextTrimmed.split('How to Format Lyrics',)[0];

//     return lyricsTextFormatted;

// }


import {Text,StyleSheet, View} from 'react-native';
// import styles from '../styles/appContainer';

function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
    </View>
  );
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#343a40',
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#fff',
  },
});
