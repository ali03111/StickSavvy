import React, {memo} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import ThemeButton from '../../Components/ThemeButton';
import {
  email,
  lock,
  userIcon,
  phone,
  logo,
  rememberImg,
  rememberEmpty,
  username,
  emailIcon,
  passwordIcon,
  company,
  google,
  facebook,
  apple,
  locksetting,
  sms,
  user,
  vector,
  cameraIcon,
  profile,
} from '../../Assets';
import {InputComponent} from '../../Components/InputComponent';
import {Controller} from 'react-hook-form';
import {Touchable} from '../../Components/Touchable';
import useRegister from './useRegisterScreen';
import KeyBoardWrapper from '../../Components/KeyBoardWrapper';
import {LoginBg} from '../../Assets';
import {hp, wp} from '../../Config/responsive';
import LinearGradient from 'react-native-linear-gradient';
import BlurImage from '../../Components/BlurImage';
import {imageUrl} from '../../Utils/Urls';

const RegisterScreen = ({navigation, route}) => {
  const {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    goBack,
    loginNav,
    signUpButton,
    registerWithEmail,
    socialLoginFun,
    profileData,
    onSelectImage,
  } = useRegister(navigation);

  return (
    <>
      <ScrollView style={styles.ImgBg}>
        <LinearGradient
          start={{x: 0.0, y: 0.5}}
          end={{x: 1, y: 1.0}}
          locations={[0.4, 0.8]}
          colors={['#195073', '#266C99']}
          style={styles.linearGradient}></LinearGradient>

        <View style={styles.userProfileImg}>
          <View style={styles.profileImageContainer}>
            <BlurImage
              blurhash={'LKK1wP_3yYIU4.jsWrt7_NRjMdt7'}
              radius={100}
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
              bottom: hp('0'),
              borderRadius: 100,
              backgroundColor: '#ffffff',
              padding: 5,
            }}
            Opacity={0.8}>
            <Image
              source={cameraIcon || null}
              style={styles.addImageIcon}
              resizeMode="contain"
            />
          </Touchable>
        </View>

        <KeyBoardWrapper
          styles={styles.logInMain}
          showsVerticalScrollIndicator={false}>
          <View style={styles.loginBottom}>
            <View style={styles.loginTop}>
              <TextComponent text={'Sign Up'} styles={styles.signInText} />
            </View>
            <View style={styles.innerWrapper}>
              <InputComponent
                {...{
                  name: 'first_name',
                  handleSubmit,
                  errors,
                  reset,
                  control,
                  getValues,
                  placeholder: 'First Name',
                  isImage: profile,
                  defaultValue: '',
                  handleSubmit,
                  errors,
                  reset,
                  control,
                  getValues,
                }}
              />
              <InputComponent
                {...{
                  name: 'last_name',
                  handleSubmit,
                  errors,
                  reset,
                  control,
                  getValues,
                  placeholder: 'Last Name',
                  defaultValue: '',
                  isImage: profile,
                }}
              />

              <InputComponent
                {...{
                  name: 'email',
                  handleSubmit,
                  errors,
                  reset,
                  control,
                  getValues,
                  placeholder: 'Email Address',
                  isImage: sms,
                  defaultValue: '',
                }}
              />
              <InputComponent
                {...{
                  name: 'password',
                  handleSubmit,
                  errors,
                  reset,
                  control,
                  getValues,
                  placeholder: 'Password',
                  isImage: locksetting,
                  defaultValue: '',
                  isSecure: true,
                  inputIconStyle: styles.lockstyle,
                }}
              />
              <InputComponent
                {...{
                  name: 'confirm_password',
                  handleSubmit,
                  errors,
                  reset,
                  control,
                  getValues,
                  placeholder: 'Confirm Password',
                  isImage: locksetting,
                  defaultValue: '',
                  isSecure: true,
                  inputIconStyle: styles.lockstyle,
                }}
              />

              <View style={{paddingTop: hp('3')}}>
                <ThemeButton
                  onPress={handleSubmit(signUpButton)}
                  title={'Sign Up'}
                />
                {/* <ThemeButton
                  onPress={() => navigation.navigate('HomeScreen')}
                  title={'Register'}
                  // onPress={handleSubmit(registerWithEmail)}
                /> */}
              </View>
            </View>

            <View style={styles.barMain}>
              <View style={styles.barLine}></View>
              <TextComponent text={'Or Sign Up with'} styles={styles.barText} />
              <View style={styles.barLine}></View>
            </View>
            <View style={styles.social}>
              <Touchable
                style={styles.socialIcons}
                onPress={() => socialLoginFun('Google')}>
                <Image
                  source={google}
                  style={styles.socialImage}
                  resizeMode="contain"
                />
              </Touchable>
              <Touchable style={styles.socialIcons}>
                <Image
                  source={apple}
                  style={styles.socialImage}
                  resizeMode="contain"
                />
              </Touchable>
              <Touchable style={styles.socialIcons}>
                <Image
                  source={facebook}
                  style={styles.socialImage}
                  resizeMode="contain"
                />
              </Touchable>
            </View>

            <View style={styles.dontHave}>
              <TextComponent
                text={'Already have an account? '}
                styles={styles.dontHaveText}
              />
              <Touchable onPress={loginNav}>
                <Text style={styles.signUpText}>Log In</Text>
              </Touchable>
            </View>
          </View>
        </KeyBoardWrapper>
      </ScrollView>
    </>
  );
};
export default memo(RegisterScreen);
