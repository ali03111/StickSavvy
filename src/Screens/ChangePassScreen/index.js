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
  lock,
} from '../../Assets';
import {hp, wp} from '../../Config/responsive';
import {Touchable} from '../../Components/Touchable';
import Icon from 'react-native-vector-icons/Feather';
import {AlertDesign} from '../../Components/AlertDesign';
import BackHeader from '../../Components/BackHeader';
import ThemeButton from '../../Components/ThemeButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {InputComponent} from '../../Components/InputComponent';
import useChangePasswordScreen from './useChangePasswordScreen';

const ChangePassword = ({navigation}) => {
  const {handleSubmit, errors, reset, control, getValues, changePassword} =
    useChangePasswordScreen(navigation);
  const [currentPass, setCurrentPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [reTypeNewPass, setReTypeNewPass] = useState('');
  return (
    <>
      {/* <HeaderComponent title={'Settings'} goBack={() => navigation.goBack()}  /> */}

      <ScrollView style={styles.container}>
        <BackHeader
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
              text={'New Password'}
              styles={styles.userPassStyleLabel}
            />
            <InputComponent
              {...{
                name: 'password',
                handleSubmit,
                errors,
                reset,
                control,
                getValues,
                placeholder: 'Old Password',
                isImage: lock,
                defaultValue: '',
                isSecure: true,
                isImage: locksetting,
                inputIconStyle: styles.lockstyle,
              }}
            />
            <TextComponent
              text={'Re-type New Password'}
              styles={styles.userPassStyleLabel}
            />
            <InputComponent
              {...{
                name: 'new_password',
                handleSubmit,
                errors,
                reset,
                control,
                getValues,
                placeholder: 'New Password',
                isImage: lock,
                defaultValue: '',
                isSecure: true,
                isImage: locksetting,
                inputIconStyle: styles.lockstyle,
              }}
            />
          </View>

          <ThemeButton
            onPress={handleSubmit(changePassword)}
            title={'Change Password'}
          />
        </View>
      </ScrollView>
    </>
  );
};
export default memo(ChangePassword);
