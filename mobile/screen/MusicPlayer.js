import React from 'react'
import {
    View ,
     Text,
      StyleSheet ,
       SafeAreaView, 
       TouchableOpacity,
       Dimensions,
       Image,
    } from 'react-native'
    import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons'
const {width,height}= Dimensions.get('window')

function MusicPlayer() {
  return (
    <SafeAreaView style ={style.container}>
    <View style ={style.maincontainer}>
        {/* image */}
        <View style={[style.imageWrapper, style.elevation]}>
            <Image
            source={require('../assets/img/ph.jpg')}
            style={style.musicImage}
            />
        </View>
        <View>
            <Text style={[style.songContent, style.songTitle]}>Some Title</Text>
            <Text style={[style.songContent, style.songArtist]}>Some Artist Name</Text>

        </View>
        {/*  slider */}
        <View>
            <Slider
            style= {style.progressBar}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#FFD369"
            minimumTrackTintColor="#FFD369"
            maximumTrackTintColor="#fff"
            onSlidingComplete={() => {}}
            />
            {/* music progres durations */}
        <View style={style.progressLevelDuration }>
            <Text style={style.progressLabelText}>00:00</Text>
            <Text style={style.progressLabelText}>00:00</Text>

            </View>
        </View>

        {/* music controls */}
        <View style={style.musicControlsContainer}>
        <TouchableOpacity onPress={() => {}}>
                <Ionicons name='play-skip-back-outline' size={35} color="#FFD369"/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
                <Ionicons name='ios-pause-circle' size={75} color="#FFD369"/>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => {}}>
                <Ionicons name='play-skip-forward-outline' size={35} color="#FFD369"/>
            </TouchableOpacity>

        </View>
        </View>

        <View style={style.bottomContainer}>
            <View style={style.bottomIconWrapper}>
            <TouchableOpacity onPress={() => {}}>
                <Ionicons name='heart-outline' size={30} color="#888888"/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
                <Ionicons name='repeat' size={30} color="#888888"/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
                <Ionicons name='share-outline' size={30} color="#888888"/>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => {}}>
                <Ionicons name='ellipsis-horizontal' size={30} color="#888888"/>
            </TouchableOpacity>
            </View>
        

    </View>
    </SafeAreaView>
  ) 
}

export default MusicPlayer

const style = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor:'#222831'
    },
    maincontainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomContainer: {
        width:width,
        alignItems: 'center',
        paddingVertical:15,
        borderTopColor:'#393E46',
        borderWidth:1,
    },
    bottomIconWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:'80%'
    },
    imageWrapper:{
        width:300,
        height:340,
        marginBottom:25,
    },
    musicImage:{
        width:'100%',
        height:'100%',
        borderRadius:15,
    },
    elevation:{
        elevation:5,
        shadowColor:'#ccc',

        shadowOffset:{
            width:5,
            height:5,
        },
        shadowOpacity:0.5,
        shadowRadius:3.84,
    },
    songContent:{
        textAlign:'center',
        color:'#EEEEEE'

    },
    songTitle: {
        fontSize:18,
        fontWeight:'600',
      
    },
    songArtist: {
        fontSize:16,
        fontWeight:'300',
        
    },
    progressBar:{
        width:350,
        height:40,
        marginTop:25,
        flexDirection:'row'
    },
    progressLevelDuration:{
        width:350,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    progressLabelText:{
        color:'#fff',
        fontWeight:'500'
    },
    musicControlsContainer:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:'60%',
        marginTop:15,


    }


});