import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  logInMain: {
    paddingTop: hp('6')
  },
  vectorImg:{
    position: 'absolute',
    bottom: 10,
    // left: 0,
    right:0,
    width: wp('60')
  
  },
  // imgCurve: {
  //   height: hp('50'),
  //   width: wp('100'),
  //   marginTop: hp('-10'),
  //   marginBottom: hp('-50'),
  // },
  ImgBg: {
    flex: 1,
    position: 'relative',
  },
  loginTop: {
    alignItems: 'flex-start',
    marginTop: hp('1'),
    marginBottom: hp('2'),
    paddingHorizontal: wp('1.5'),
  },
  linearGradient:{
    height: hp('30'),
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,   
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  remStyle: {
    color: Colors.white,
    fontSize: hp('1.8'),
    paddingLeft: wp('1'),
  },
  checkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  barMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('4'),
    marginTop: hp('3'),
  },
  barLine: {
    width: wp('28'),
    borderBottomWidth: 1,
    height: hp('.2'),
    backgroundColor: Colors.white,
  },
  barText: {
    paddingHorizontal: wp('4'),
    color: Colors.gray,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('75'),
    alignSelf: 'center',
    paddingBottom: hp('2'),
  },
  socialIcons: {
    width: wp('15'),
    height: hp('8.5'),
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  socialImage: {
    width: wp('7'),
    height: hp('3.5'),
  },
  mainImage: {
    width: wp('100'),
    height: hp('40'),
  },
  logo: {
    width: wp('60'),
    height: hp('9'),
  },
  signInText: {
    textAlign: 'left',
    marginTop: hp('-1.5'),
    fontSize: hp('3'),
    fontWeight: '600',
    color: Colors.white,
  },
  loginBottom: {
    flex: 1,
    paddingHorizontal: wp('3.5'),
    justifyContent: 'flex-start',
  },
  innerWrapper: {
    backgroundColor: Colors.white,
    paddingVertical: hp('2.5'),
    paddingHorizontal: wp('3'),
    borderRadius: 20,
  },
  rememberSec: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('0.5'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rememberInner: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  tickIcon: {
    marginRight: wp('2'),
    resizeMode: 'contain',
    height: hp('3'),
    width: wp('6'),
  },
  tickText: {
    color: Colors.gray,
    fontSize: hp('1.8'),
    fontWeight: '400',
  },
  forgetText: {
    flex: 1,
    textAlign: 'right',
    fontSize: hp('1.8'),
    color: Colors.themeRed,
    fontWeight: '600'
  },
  lockstyle: {
    flex: 0.5,
  },
  dontHave: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('4'),
    alignItems: 'center',
    paddingBottom: hp('2'),
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // bottom: hp('2')
  },
  dontHaveText: {
    fontSize: hp('2'),
    fontWeight: '400',
    color: Colors.gray,
    marginRight: wp('4'),
  },
  signUpText: {
    color: Colors.themeRed,
    fontSize: hp('2'),
    fontWeight: '600',
  },
});
