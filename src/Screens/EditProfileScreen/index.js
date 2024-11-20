import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import useEditProfile from './useEditProfile';

import {HeaderComponentProfile} from '../../Components/HeaderComponentProfile';
import {
  company,
  edit2,
  editPro,
  emailIcon,
  galleryAdd,
  logout,
  passDots,
  passIcon,
  passwordIcon,
  profileCompany,
  profileEmail,
  ProfileImage,
  username,
} from '../../Assets';
import BlurImage from '../../Components/BlurImage';
import {imageUrl} from '../../Utils/Urls';
import ThemeButtonWithIcon from '../../Components/ThemeButtonWithIcon';
import {Touchable} from '../../Components/Touchable';
import {InputComponent} from '../../Components/InputComponent';
import ThemeButton from '../../Components/ThemeButton';
import KeyBoardWrapper from '../../Components/KeyBoardWrapper';
import BackHeader from '../../Components/BackHeader';

const EditProfileScreen = ({navigation}) => {
  const {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    userData,
    updateProfileFunction,
    uploadFromGalary,
    profileData,
  } = useEditProfile(navigation);

  return (
    <KeyBoardWrapper>
      {/* <HeaderComponentProfile
        title={'Edit Profile'}
        goBack={() => navigation.goBack()}
      /> */}
       <BackHeader
          isBack={true}
          headerTitle={'Edit Profile'}
          style={styles.headerStyle}
        //   saveResetText={'Cancel'}
        />
     
      <View style={styles.catMain}>
        <View>
          <BlurImage
            blurhash={'LKK1wP_3yYIU4.jsWrt7_NRjMdt7'}
            radius={75}
            isURI={true}
            styles={styles.ProfileImage}
            blurStyle={styles.blurMain}
            uri={profileData?.uri ?? imageUrl(userData?.profile_image)}
          />
          <Touchable
            onPress={uploadFromGalary}
            style={styles.profileIcon}
            Opacity={0.8}>
            <Image  source={galleryAdd} style={styles.addImageIcon} />
          </Touchable>
        </View>
        <View style={styles.names}>
          <TextComponent text={userData?.first_name + ' '} styles={styles.name} />
          <TextComponent text={userData?.last_name} styles={styles.name} />
        </View>
        <TextComponent text={userData?.email} styles={styles.email} />
        <ScrollView styles={{flex: 1}}>
          {/* <TextComponent text={'First Name'} styles={styles.subHd} /> */}
          <InputComponent
            {...{
              name: 'first_name',
              handleSubmit,
              errors,
              reset,
              control,
              getValues,
              isImage: username,
              placeholder: 'First Name',
              defaultValue: userData?.first_name,
              viewStyle: {...styles.nameSt},
            }}
          />
          {/* <TextComponent text={'Last Name'} styles={styles.subHd} /> */}
          <InputComponent
            {...{
              name: 'last_name',
              handleSubmit,
              errors,
              reset,
              control,
              getValues,
              isImage: username,
              placeholder: 'last Name',
              defaultValue: userData?.last_name,
              viewStyle: {...styles.nameSt},
            }}
          />
          {/* <TextComponent text={'Company'} styles={styles.subHd} /> */}
          {/* <InputComponent
            {...{
              name: 'company_name',
              handleSubmit,
              errors,
              reset,
              control,
              isImage: company,
              getValues,
              placeholder: 'Green Boom Corp',
              defaultValue: userData?.company_name,
              viewStyle: {...styles.inputStyle},
            }}
          /> */}
          {/* <TextComponent text={'Email Address'} styles={styles.subHd} /> */}
          {/* <InputComponent
            {...{
              name: 'email',
              handleSubmit,
              errors,
              reset,
              control,
              isImage: emailIcon,
              getValues,
              placeholder: 'doe@mail.com',
              defaultValue: userData?.email,
              viewStyle: {...styles.inputStyle},
              editable: false,
            }}
          /> */}
          {/* <TextComponent text={'Password'} styles={styles.subHd} /> */}
          <Touchable
            Opacity={1}
            onPress={() => navigation.navigate('ChangePasswordScreen')}
            style={styles.forgetText}>
            <TextComponent text={'Change Password'} styles={styles.passTextStyle} />
          </Touchable>
        </ScrollView>
        {/* <View style={styles.logoutBtn}>
          <ThemeButtonWithIcon
            textStyle={styles.btnText}
            title={'Log out'}
            image={logout}
            style={styles.btn}
            imageStyle={styles.imgStyle}
          />
        </View> */}
        <ThemeButton
          onPress={handleSubmit(updateProfileFunction)}
          title={'Save'}
          style={styles.buttonStyle}
        />
      </View>
    </KeyBoardWrapper>
  );
};
export default memo(EditProfileScreen);