import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import useSettingScreen from './useSettingScreen';
import {catData, settingData} from '../../Utils/localDB';
import {
  arrRight,
  arrowrightsmall,
  downloadIcon,
  login,
  logout,
  trash,
} from '../../Assets';
import {hp, wp} from '../../Config/responsive';
import {HeaderComponent} from '../../Components/HeaderComponent';
import {Touchable} from '../../Components/Touchable';
import Icon from 'react-native-vector-icons/Feather';
import {AlertDesign} from '../../Components/AlertDesign';
import BackHeader from '../../Components/BackHeader';
import ThemeButtonWithIcon from '../../Components/ThemeButtonWithIcon';

const SettingScreen = ({navigation}) => {
  const {
    onCancel,
    onConfirm,
    tabScreen,
    alert,
    callLogOut,
    deleteAlert,
    setDeleteAlert,
    onDeleteConfirm,
    callDelete,
    onDeleteCancel,
  } = useSettingScreen(navigation);
  const renderItem = useCallback(({item, index}) => {
    return (
      <Touchable style={styles.cardBtn} onPress={() => tabScreen(item)}>
        <Image source={item?.image} style={styles.iconStyle} />
        <TextComponent text={item?.title} styles={styles.titleStyle} />
        <Image
          source={arrRight}
          resizeMode="contain"
          style={styles.chevronStyle}
        />
      </Touchable>
    );
  });
  return (
    <>
      {/* <HeaderComponent title={'Settings'} goBack={() => navigation.goBack()}  /> */}
      <ScrollView bounces={false} style={styles.container}>
        <BackHeader
          goBack={() => navigation.goBack()}
          isBack={true}
          headerTitle={'Setting'}
          saveResetText={'Cancel'}
        />
        <View style={styles.catMain}>
          <TextComponent text={'General'} styles={styles.headingStyle} />

          <FlatList
            scrollEnabled={false}
            refreshing={false}
            data={settingData}
            renderItem={renderItem}
            contentContainerStyle={{
              // alignItems: 'center',
              marginTop: hp('0'),
            }}
          />
          <View>
            <TextComponent text={'Personal'} styles={styles.headingStyle} />

            <Touchable style={styles.cardBtn} onPress={callLogOut}>
              <Image source={login} style={styles.iconStyle} />
              <TextComponent text={'Logout'} styles={styles.titleStyle} />
              <Icon
                name=""
                size={25}
                color={'black'}
                style={styles.arrowRight}
              />
            </Touchable>
          </View>
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
            onPress={callDelete}
            title={'Delete Account'}
            image={trash}
            style={{justifyContent: 'flex-start', paddingHorizontal: wp('2.5')}}
          />
        </View>
      </ScrollView>
    </>
  );
};
export default memo(SettingScreen);
