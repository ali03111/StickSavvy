import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {marker, star, userImage} from '../Assets';
import {TextComponent} from './TextComponent';
import {Colors} from '../Theme/Variables';
import {hp, wp} from '../Config/responsive';
import {Touchable} from './Touchable';

export default function PhlebotomistsWithCta({
  image,
  name,
  ratings,
  cta,
  cardStyle,
  onPress,
}) {
  return (
    <>
      <View style={{...styles.cardMain, ...cardStyle}}>
        <Image source={image} resizeMode="cover" style={styles.userImg} />
        <TextComponent text={name} styles={styles.heading} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: hp('0.5'),
          }}>
          <Image source={star} resizeMode="contain" style={styles.star} />
          <TextComponent text={ratings} styles={styles.text} />
        </View>
        <Touchable onPress={onPress}>
          <TextComponent text={cta} styles={styles.ctaStyle} />
        </Touchable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cardMain: {
    backgroundColor: Colors.bgLBlue,
    width: wp('33'),
    marginRight: wp('4'),
    borderRadius: 10,
    paddingHorizontal: wp('3'),
    paddingVertical: hp('1.5'),
    textAlign: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    // flexWrap: 'wrap'
  },
  userImg: {
    width: wp('18'),
    height: hp('9'),
    borderRadius: 50,
    marginBottom: hp('2'),
    // backgroundColor: 'red'
  },

  star: {
    width: wp('4'),
    marginRight: wp('1'),
  },
  text: {
    color: Colors.textColor,
    fontSize: hp('1.5'),
  },
  heading: {
    color: Colors.heading,
    fontSize: hp('1.8'),
    fontWeight: '500',
  },
  ctaStyle: {
    color: Colors.white,
    fontSize: hp('1.8'),
    fontWeight: '400',
    backgroundColor: Colors.themeDark,
    borderRadius: 10,
    padding: 10,
    marginTop: hp('1'),
    overflow: 'hidden',
  },
});
