import React, {memo, useCallback, useState} from 'react';
import {View, Text, Image, ScrollView, FlatList, TextInput} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './style';
import {
  arrRight,
  arrowrightsmall,
  cameraIcon,
  downloadIcon,
  eye,
  galleryAdd,
  locksetting,
  login,
  logout,
  profile,
  trash,
} from '../../Assets';
import {hp, wp} from '../../Config/responsive';
import {Touchable} from '../../Components/Touchable';
import Icon from 'react-native-vector-icons/Feather';
import {AlertDesign} from '../../Components/AlertDesign';
import BackHeader from '../../Components/BackHeader';
import ThemeButton from '../../Components/ThemeButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const ChangePassword = ({navigation}) => {
  const [currentPass, setCurrentPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [reTypeNewPass, setReTypeNewPass] = useState('');
  return (
    <>
      {/* <HeaderComponent title={'Settings'} goBack={() => navigation.goBack()}  /> */}

      <ScrollView style={styles.container}>
        <BackHeader
          goBack={() => navigation.goBack()}
          isBack={true}
          headerTitle={'Change Password'}
          saveResetText={'Cancel'}
        />
        <View style={styles.catMain}>
          <TextComponent
            text={'Create New Password'}
            numberOfLines={1}
            styles={styles.userTitle}
          />
          <TextComponent
            text={
              'Your new password must be different from your previous password.'
            }
            styles={styles.userAboutText}
          />
          <View style={{marginTop: hp('3'), marginBottom: hp('5')}}>
            <TextComponent
              text={'Current Password'}
              styles={styles.userPassStyleLabel}
            />
            <Touchable
              style={{...styles.cardBtn, marginBottom: hp('6')}}
              onPress={() => {}}>
              <Image source={locksetting} style={styles.iconStyle} />
              {/* <TextComponent text={'My Profile'} styles={styles.titleStyle} /> */}
              <TextInput
                style={styles.titleStyle}
                placeholder="********"
                placeholderTextColor={Colors.black}
                value={currentPass}
                onChange={e => {
                  setCurrentPass(e.target.value);
                  // console.log(currentPass);
                }}
              />
              <Image
                source={eye}
                resizeMode="contain"
                style={styles.chevronStyle}
              />
            </Touchable>

            <TextComponent
              text={'New Password'}
              styles={styles.userPassStyleLabel}
            />
            <Touchable style={styles.cardBtn} onPress={() => {}}>
              <Image source={locksetting} style={styles.iconStyle} />
              <TextInput
                style={styles.titleStyle}
                placeholder="********"
                placeholderTextColor={Colors.black}
                value={newPass}
                onChange={e => {
                  setNewPass(e.target.value);
                }}
              />

              <Image
                source={eye}
                resizeMode="contain"
                style={styles.chevronStyle}
              />
            </Touchable>
            <TextComponent
              text={'Re-type New Password'}
              styles={styles.userPassStyleLabel}
            />
            <Touchable style={styles.cardBtn} onPress={() => {}}>
              <Image source={locksetting} style={styles.iconStyle} />
              <TextInput
                style={styles.titleStyle}
                placeholder="********"
                placeholderTextColor={Colors.black}
                value={reTypeNewPass}
                onChange={e => {
                  setReTypeNewPass(e.target.value);
                }}
              />

              <Image
                source={eye}
                resizeMode="contain"
                style={styles.chevronStyle}
              />
            </Touchable>
          </View>

          <ThemeButton title={'Change'} />
        </View>
      </ScrollView>
    </>
  );
};
export default memo(ChangePassword);
