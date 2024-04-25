import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {hp, wp} from '../Config/responsive';
import {userImage} from '../Assets';
import {TextComponent} from './TextComponent';
import {Colors} from '../Theme/Variables';

export default function Reviews({date, userImage, userName, reviewText}) {
  return (
    <>
      <View style={styles.reviewCard}>
        <TextComponent text={date} styles={styles.dateStyle} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: hp('1'),
          }}>
          <Image
            source={userImage}
            resizeMode="contain"
            style={styles.imgStyle}
          />
          <TextComponent text={userName} styles={styles.reviewTitle} />
        </View>
        <TextComponent text={reviewText} styles={styles.reviewText} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imgStyle: {
    width: wp('8'),
    height: hp('5'),
    borderRadius: 10,
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
    width: '100%',
    position: 'relative',
    marginBottom: hp('1')
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
