import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {marker, star, userImage} from '../Assets';
import {TextComponent} from './TextComponent';
import {Colors} from '../Theme/Variables';
import {hp, wp} from '../Config/responsive';
import {useNavigation} from '@react-navigation/native';
import {Touchable} from './Touchable';

export default function PhlebotomistsCard({
  image,
  name,
  ratings,
  location,
  cardStyle,
  profileId,
  isRight,
}) {
  const navigation = useNavigation(); // use navigation hook

  const handlePress = () => {
    console.log('Navigating to profile with ID:', profileId);
    if (profileId) {
      navigation.navigate('PhlebotomistProfile', {profileId});
    } else {
      console.error('Profile ID is missing');
    }
  };
  return (
    <View
      style={[
        styles.cardMain,
        isRight ? {marginRight: wp('2')} : {marginBottom: wp('2')},
      ]}>
      <Image source={{uri: image}} resizeMode="cover" style={styles.userImg} />
      <View style={{width: wp('70')}}>
        <Touchable onPress={handlePress}>
          <View style={styles.flexBetween}>
            <TextComponent text={name} styles={styles.heading} />
            <View style={styles.flexDirection}>
              <Image source={star} resizeMode="contain" style={styles.star} />
              <TextComponent text={ratings} styles={styles.text} />
            </View>
          </View>
          <View style={styles.flexDirection}>
            <Image source={marker} resizeMode="contain" style={styles.star} />
            <TextComponent text={location} styles={styles.text} />
          </View>
        </Touchable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardMain: {
    backgroundColor: Colors.bgLBlue,
    width: wp('90'),
    // marginRight: wp('2'),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('3'),
    paddingVertical: hp('1.5'),
    // flexWrap: 'wrap'
  },
  userImg: {
    width: wp('12'),
    height: hp('6'),
    borderRadius: 12,
    marginRight: wp('2'),
    // backgroundColor: 'red'
  },
  flexStart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  flexBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
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
});
