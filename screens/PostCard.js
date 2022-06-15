import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

export default class PostCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.authorContainer}>
            <View style={styles.authorProfileImageContainer}>
              <Image
                style={styles.profileImage}
                source={require('../assets/profile_img.png')}
              />
            </View>

            <View style={styles.authorNameContainer}>
              <Text style={styles.authorNameText}>
                {this.props.post.author}
              </Text>
            </View>
          </View>

          <Image
            source={require('../assets/post.jpeg')}
            style={styles.postImage}></Image>

          <View style={styles.captionContainer}>
            <Text style={styles.captionText}>{this.props.post.caption}</Text>
          </View>

          <View style={styles.actionContainer}>
            <View style={styles.likeButton}>
              <Ionicons name={'heart'} size={30} color={'white'} />

              <Text style={styles.likeText}>12K</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: '#2f345d',
    borderRadius: RFValue(20),
  },
  postImage: {
    resizeMode: 'contain',
    width: '95%',
    alignSelf: 'center',
    height: RFValue(250),
  
  },
  authorNameContainer: {
    paddingLeft: RFValue(5),
    justifyContent: 'center',
    
  },

  authorNameText: {
    fontSize: RFValue(18),
    color: 'white',
    fontWeight:"bold"
  },
  descriptionText: {
    
    fontSize: 13,
    color: 'white',
    paddingTop: RFValue(10),
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#eb3948',
    borderRadius: RFValue(30),
  },
  likeText: {
    color: 'white',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
  profileImage: {
    width: RFValue(20),
    height: RFValue(20),
    borderRadius:RFValue(20),
    resizeMode:"contain",
   
  },
  authorProfileImageContainer:{
    paddingLeft: RFValue(20),
    justifyContent: 'center',
  },

  authorContainer:{
    flexDirection:"row",
    padding:RFValue(5)
  },
  captionText:{
    fontSize:RFValue(15),
    color:"white"
  },
  captionContainer:{
    paddingLeft:RFValue(20)
  }

});
