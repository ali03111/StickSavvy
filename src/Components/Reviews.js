import {View, Text, Image, StyleSheet} from 'react-native';
import React, { useState } from 'react';
import {hp, wp} from '../Config/responsive';
import {TextComponent} from './TextComponent';
import {Colors} from '../Theme/Variables';
import {imageURL} from '../Utils/Urls';
import {userImage, username} from '../Assets';

export default function Reviews({date, user, reviewText}) {
  const [imageUri, setImageUri] = useState(imageURL + user?.profile_image);

  return (
    <View style={styles.reviewCard}>
      <TextComponent text={date} styles={styles.dateStyle} />
      <View style={styles.userContainer}>
        <Image
          source={imageUri ? { uri: imageUri } : userImage} // Fallback to placeholder
          resizeMode="cover"
          style={styles.imgStyle}
          onError={() => setImageUri(null)} // Handle image load error
        />
        <TextComponent
          text={`${user?.first_name || ''} ${user?.last_name || ''}`} // Handle missing names
          styles={styles.reviewTitle}
        />
      </View>
      <TextComponent text={reviewText} styles={styles.reviewText} />
    </View>
  );
}

const styles = StyleSheet.create({
  imgStyle: {
    width: wp('8'),
    height: hp('5'),
    borderRadius: 10,
  },
  userContainer: {
    flexDirection: 'row', // Align items in a row
    alignItems: 'center',
    marginBottom: hp('1'),
  },
  reviewTitle: {
    color: Colors.secondary,
    fontSize: hp('1.8'),
    fontWeight: '700',
    marginLeft: wp('2'),
  },
  reviewCard: {
    borderWidth: 1,
    borderColor: Colors.grayBorder,
    borderRadius: 25,
    paddingHorizontal: wp('3'),
    paddingVertical: hp('2'),
    flex: 1, // Use flex: 1 instead of width: '100%'
    position: 'relative',
    marginBottom: hp('1'),
  },

  reviewText: {
    color: Colors.textColor,
    fontSize: hp('1.5'),
    lineHeight: hp('2'),
  },
  dateStyle: {
    color: Colors.themeDark,
    fontSize: hp('1.5'),
    lineHeight: hp('2'),
    fontWeight: '500',
    position: 'absolute',
    top: hp('2'),
    right: wp('4'),
  },
});
