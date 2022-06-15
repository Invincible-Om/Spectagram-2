import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import  DrawerNavigator from './Navigation/DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  return (
    
    <NavigationContainer>


      <DrawerNavigator
      
      />


    </NavigationContainer>   

  );
}


const styles = StyleSheet.create({
 
});
