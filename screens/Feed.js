import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native-gesture-handler';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import PostCard from './PostCard';

let posts = require('./temp_post.json');

let customFonts = {
  Billabong: require('../assets/fonts/Billabong.ttf'),
};

export default class Feed extends Component {
  constructor() {
    super();
    this.state = () => {
      fontLoaded: false;
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  renderItem = ({ item: post }) => {
    return <PostCard post={post} />;
  };

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    } else {
      return (
     
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />

          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                style={styles.iconImage}
                source={require('../assets/logo.png')}></Image>
            </View>

            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTextContainer}>Spectagram</Text>
            </View>
          </View>

          <View style={styles.cardContainer}>
          <ScrollView  showsHorizontalScrollIndicator={false} >
            <FlatList
              keyExtractor={this.keyExtractor}
              data={posts}
              renderItem={this.renderItem}
            />
            </ScrollView>
          </View>
        </View>
        
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
  },
  textStyle: {
    color: '#dadae6',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'Row',
    justifyContent: 'center',
    marginBottom:10,
  },
  appTextContainer: {
    color: 'white',
    fontSize: RFValue(40),
    fontFamily: 'Billabong',
  },
  appTitleTextContainer: {
    flex: 0.6,
    justifyContent: 'center',
  },
  appIcon: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
    cardContainer: {
    flex: 0.93,
    marginLeft:2
  }
});
