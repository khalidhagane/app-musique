// import React from "react";
// import { NativeBaseProvider, Box } from "native-base";


// export default function App() {
//   return (
//     <NativeBaseProvider>
//       <Box>Hello world</Box>
//     </NativeBaseProvider>
//   );
// }
import React from 'react'
import {View , Text, StyleSheet } from 'react-native'
import MusicPlayer from './screen/MusicPlayer'

function App() {
  return (
    <View style = {style.container}>
    <MusicPlayer/>
    </View>
  )
}

export default App

const style = StyleSheet.create({
  container:{
    Flex : 1
  }
});