import React, {memo, useState} from 'react';
import {View, Text, Image, ScrollView, ImageBackground} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import ThemeButton from '../../Components/ThemeButton';
import {
  apple,
  bgCurve,
  facebook,
  google,
  lock,
  locksetting,
  sms,
  tickemp,
  tickfill,
  vector,
} from '../../Assets';
import {InputComponent} from '../../Components/InputComponent';
import {Controller} from 'react-hook-form';
import useLogin from './useLoginScreen';
import {Touchable} from '../../Components/Touchable';
import KeyBoardWrapper from '../../Components/KeyBoardWrapper';
import {LoginBg} from '../../Assets';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = ({navigation}) => {
  // const [check, setCheck] = useState(!isCheck);
  const [check, setCheck] = useState();
  const handleClick = () => setCheck(!check);

  const {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    onPress,
    loginUser,
    appleIdlogin,
    googleLoginFunc,
    facebookLoginFunc,
    rememberValue,
    remember,
  } = useLogin(navigation);
  return (
    <View style={styles.ImgBg}>
     
      <LinearGradient
        start={{x: 0.0, y: 0.5}}
        end={{x: 1, y: 1.0}}
        locations={[0.4, 0.8]}
        colors={['#195073', '#266C99']}
        style={styles.linearGradient}></LinearGradient>
        
      <KeyBoardWrapper
        styles={styles.logInMain}
        showsVerticalScrollIndicator={false}>
        <View style={styles.loginBottom}>
          <View style={styles.loginTop}>
            <TextComponent text={'Log In'} styles={styles.signInText} />
          </View>
          <View style={styles.innerWrapper}>
            <InputComponent
              {...{
                name: 'email',
                handleSubmit,
                errors,
                reset,
                control,
                getValues,
                placeholder: 'Email',
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
                isImage: lock,
                defaultValue: '',
                isSecure: true,
                isImage: locksetting,
                inputIconStyle: styles.lockstyle,
              }}
            />
            <View style={styles.rememberSec}>
             
              <TextComponent
                text={'Forgot Password?'}
                styles={styles.forgetText}
                onPress={() => navigation.navigate('ForgetPasswordScreen')}
              />
            </View>
            <View style={{paddingTop: hp('3')}}>
              {/* <ThemeButton onPress={handleSubmit(loginUser)} title={'Log In'} /> */}
              <ThemeButton
                onPress={() => navigation.navigate('HomeScreen')}
                title={'Log In'}
              />
            </View>
          </View>

          <View style={styles.barMain}>
            <View style={styles.barLine}></View>
            <TextComponent text={'Or Sign Up with'} styles={styles.barText} />
            <View style={styles.barLine}></View>
          </View>
          <View style={styles.social}>
            <Touchable style={styles.socialIcons}>
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
              text={'Don’t have an account?'}
              styles={styles.dontHaveText}
            />
            <Touchable onPress={onPress}>
              <Text style={styles.signUpText}>Sign Up</Text>
            </Touchable>
          </View>
          <Image resizeMode='contain' source={vector} style={styles.vectorImg}/>
        </View>
      </KeyBoardWrapper>
    </View>
  );
};
export default memo(LoginScreen);
