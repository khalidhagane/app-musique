import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import PlayListe from './screens/PlayListe';
import Favorite from './screens/Favorite';
import Settings from './screens/Settings';
import Music from './screens/Music';


const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'PlayListe') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Favorite') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }else if (route.name === 'Music') {
              iconName = focused ? 'musical-notes' : 'musical-notes-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#674188',
          tabBarInactiveTintColor: '#b3b3b3',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#000',
            borderTopWidth: 0,
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 4,
            fontWeight: 'bold',
          },
        })}>
        <Tab.Screen name="PlayListe" component={PlayListe} />
        <Tab.Screen name="Favorite" component={Favorite} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Music" component={Music} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
