import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import  FontAwesome  from '@expo/vector-icons/FontAwesome';
import Home from '../../pages/Home';
import SearchScreen from '../../pages/SearchScreen';
import OnBoarding from '../../pages/Onbording';
import Octicons from '@expo/vector-icons/Octicons'
import Story_Circle from '../Story-Circle';
import Stories from '../../Utils/Stories';
const Tab = createBottomTabNavigator();
const MyProfile = Stories[2]
const sizeIcon =25
const HomeTabs = ({route}: any) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        "tabBarActiveTintColor": 'black',
        "tabBarInactiveTintColor": 'black',
        "tabBarShowLabel": false,
        
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ]
      }}
    >
      <Tab.Screen
        name="Home"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color, size }: any) => {
            if (focused){
              return <IonIcon name="home" color={color} size={sizeIcon} />
            }else{
              return <IonIcon name="home-outline" color={color} size={sizeIcon} />
            } 
          
          }
        }}
      />
    <Tab.Screen
            name="Search"
            component={Home}
            options={{
              tabBarIcon: ({ focused, color, size }: any) => {
                if (focused){
                  return <IonIcon name="search" color={color} size={sizeIcon} />
                }else{
                  return <IonIcon name="search-outline" color={color} size={sizeIcon} />
                } 
              }
            }}
          />
      <Tab.Screen
        name="Create"
        component={Home}
        options={{
          tabBarIcon: ({ focused = true, color, size }: any) => {
            return  <FontAwesome name="plus-square-o" size={sizeIcon}></FontAwesome>
        }}}
      />

    <Tab.Screen
        name="Reels"
        component={Home}
        options={{
          tabBarIcon: ({ focused = true, color, size }: any) => {
            if(focused)
              return  <IonIcon name="videocam" size={sizeIcon}></IonIcon>
            else
            return <IonIcon name="videocam-outline" size={sizeIcon}></IonIcon>
          }}}
      />
      
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ focused = true, color, size }: any) => {
            return  <Story_Circle NameOfPerfil={MyProfile.label} ImageOfPerfil={MyProfile.image} Visible={true} sizeBig={false}></Story_Circle>
        }}}
      />  

    </Tab.Navigator>
  )
}

export default HomeTabs
