import React from 'react'
import {View , Text, StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

function MusicPlayer() {
  return (
    <View style ={style.container}>
        <Ionicons name='heart-outline' size={30}/>
    <Text>MusicPlayer</Text>
    </View>
  ) 
}

export default MusicPlayer

const style = StyleSheet.create({
    container : {
        backgroundColor:'#555',
        alignItems: 'center',
        justifyContent: 'center',
    }
});