import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './style';
import {catData, settingData} from '../../Utils/localDB';
import {
  arrRight,
  arrowrightsmall,
  cameraIcon,
  downloadIcon,
  galleryAdd,
  login,
  logout,
  profile,
  trash,
} from '../../Assets';
import {hp, wp} from '../../Config/responsive';
import {HeaderComponent} from '../../Components/HeaderComponent';
import {Touchable} from '../../Components/Touchable';
import Icon from 'react-native-vector-icons/Feather';
import {AlertDesign} from '../../Components/AlertDesign';
import BackHeader from '../../Components/BackHeader';
import ThemeButtonWithIcon from '../../Components/ThemeButtonWithIcon';
import BlurImage from '../../Components/BlurImage';
import useProfileScreen from './useProfileScreen';

const ProfileScreen = ({navigation}) => {
  const {
    onCancel,
    onConfirm,
    tabScreen,
    alert,
    callLogOut,
    onSelectImage,
    profileData,
    callDelete,
    deleteAlert,
    onDeleteCancel,
    onDeleteConfirm,
  } = useProfileScreen(navigation);

  return (
    <>
      {/* <HeaderComponent title={'Settings'} goBack={() => navigation.goBack()}  /> */}

      <ScrollView style={styles.container}>
        <BackHeader
          goBack={() => navigation.goBack()}
          isBack={true}
          headerTitle={'Profile'}
          saveResetText={'Cancel'}
        />
        <View style={styles.catMain}>
          <View style={styles.userProfileImg}>
            <View style={styles.profileImageContainer}>
              <BlurImage
                blurhash={'LKK1wP_3yYIU4.jsWrt7_NRjMdt7'}
                radius={20}
                styles={styles.ProfileImage}
                uri={
                  // isIOS
                  //   ? profileData?.path || imageUrl(profile_picture) :
                  profileData?.path
                }
              />
            </View>
            <Touchable
              onPress={onSelectImage}
              // onPress={uploadFromGalary}
              style={{
                position: 'absolute',
                left: wp('55'),
                bottom: hp('1'),
                borderRadius: 10,
                backgroundColor: '#ffffff',
                paddingHorizontal: hp('1'),
                paddingVertical: wp('1'),
              }}
              Opacity={0.8}>
              <Image
                source={galleryAdd || null}
                style={styles.addImageIcon}
                resizeMode="contain"
              />
            </Touchable>
          </View>

          <TextComponent
            text={'John Doe'}
            numberOfLines={1}
            styles={styles.userTitle}
          />
          <TextComponent
            text={'dinojames@StickSavvy.com'}
            styles={styles.userAboutText}
          />
          <View style={{marginTop: hp('3'), marginBottom: hp('5')}}>
            <Touchable style={styles.cardBtn} onPress={() => {}}>
              <Image source={profile} style={styles.iconStyle} />
              <TextComponent text={'My Profile'} styles={styles.titleStyle} />
              <TextComponent text={'Change'} styles={styles.changeStyle} />
              {/* <Image
              source={arrRight}
              resizeMode="contain"
              style={styles.chevronStyle}
            /> */}
            </Touchable>
            <Touchable style={styles.cardBtn} onPress={() => {}}>
              <Image source={profile} style={styles.iconStyle} />
              <TextComponent
                text={'dinojames@StickSavvy.com'}
                styles={styles.titleStyle}
              />
              <Icon
                name=""
                size={25}
                color={'black'}
                style={styles.arrowRight}
              />
            </Touchable>
            <Touchable style={styles.cardBtn} onPress={() => {}}>
              <Image source={profile} style={styles.iconStyle} />
              <TextComponent
                text={'Change Password'}
                styles={styles.titleStyle}
              />
              <TextComponent text={'Change'} styles={styles.changeStyle} />
            </Touchable>
          </View>

          <Touchable style={styles.cardBtn} onPress={callLogOut}>
            <Image source={login} style={styles.iconStyle} />
            <TextComponent text={'Logout'} styles={styles.titleStyle} />
            <Icon size={25} color={'black'} style={styles.arrowRight} />
          </Touchable>
          <AlertDesign
            isVisible={alert}
            onConfirm={onConfirm}
            onCancel={onCancel}
            title={'Log Out?'}
            message={'Are you sure, you want to log out?'}
            confirmText={'Yes, Sure'}
          />
          <AlertDesign
            isVisible={deleteAlert}
            cancelText={'Cancel'}
            onConfirm={onDeleteConfirm}
            onCancel={onDeleteCancel}
            title={'Deactivate Account ?'}
            message={
              'Deactivating your account will remove all of your information. This can’t be undone.'
            }
            confirmText={'Deactivate'}
          />

          <ThemeButtonWithIcon
            title={'Delete Account'}
            image={trash}
            style={{justifyContent: 'flex-start', paddingHorizontal: wp('2.5')}}
            onPress={callDelete}
          />
        </View>
      </ScrollView>
    </>
  );
};
export default memo(ProfileScreen);
