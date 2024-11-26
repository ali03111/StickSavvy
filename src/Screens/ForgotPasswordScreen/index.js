import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import useForgetPasswordScreen from './useForgetPasswordScreen';
import {catData, contactData} from '../../Utils/localDB';
import {
  changePasswordIcon,
  contacticon,
  downloadIcon,
  passwordIcon,
  lock,
  emailIcon,
  sms,
} from '../../Assets';
import {hp} from '../../Config/responsive';
import {HeaderComponent} from '../../Components/HeaderComponent';
import {Touchable} from '../../Components/Touchable';
import {InputComponent} from '../../Components/InputComponent';
import ThemeButton from '../../Components/ThemeButton';
import BackHeader from '../../Components/BackHeader';

const ForgetPasswordScreen = ({navigation}) => {
  const {handleSubmit, errors, reset, control, getValues, forgotPassword} =
    useForgetPasswordScreen(navigation);


  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <BackHeader
          isBack={true}
          headerTitle={'Forgot Password'}
          // saveResetText={'Cancel'}
        />
        <View style={styles.passMain}>
          <Image source={changePasswordIcon} style={styles.contactIcon} />
          <TextComponent text={'Forgot Password'} styles={styles.Cpass} />
          <TextComponent text={''} styles={styles.CpassSub} />
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
              viewStyle: styles.inputStyle,
            }}
          />
          <ThemeButton
            onPress={handleSubmit(forgotPassword)}
            title={'Send'}
            btnStyle={styles.buttonStyle}
            style={styles.btnMain}
          />
        </View>
      </ScrollView>
    </>
  );
};
export default memo(ForgetPasswordScreen);
