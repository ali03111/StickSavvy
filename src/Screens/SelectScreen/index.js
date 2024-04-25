import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import { MainLogo } from '../../Assets';
import { TextComponent } from '../../Components/TextComponent';
import ThemeButton from '../../Components/ThemeButton';
import { Colors } from '../../Theme/Variables';

export default function SelectScreen() {
  return (
    <>
      <View style={styles.bannerImg}>
        <View style={styles.centerMainView}>
          <Image source={MainLogo} resizeMode="contain" style={styles.splashImg} />
          <TextComponent text={'Select Below'} styles={styles.hdStyle} />
          <TextComponent
            text={`Your platform for rating phlebotomists and improving healthcare experiences.`}
            styles={styles.descStyle}
          />
          <ThemeButton title={'User'} onPress={() => {}} style={styles.userBtn} textStyle={styles.userBtnText}/>
          <ThemeButton title={'Phlebotomist'} onPress={() => {}} />
        </View>
      </View>
    </>
  );
}
