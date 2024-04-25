import {Dimensions, StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
    


  // ----
  dotList: {
    flexDirection: 'row',
    width: wp('25'),
    // height: hp('15'),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'flex-start',
    // marginTop: hp('0'),
  },
  userBtn:{
    marginVertical: hp('3'),
    backgroundColor: 'transparent',
    borderColor: Colors.themeRed,
    borderWidth: 1
  },
  userBtnText:{
    color: Colors.themeRed,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingRight: wp('3'),
    marginHorizontal: wp('4'),
    position: 'absolute',
    bottom: hp('3'),
    zIndex: 2,
  },
  centerMainView: {
    width: wp('100'),
    alignItems: 'center',
    paddingHorizontal: wp('4'),
    marginTop: hp('0'),
    position: 'absolute',
    top: hp('8'),
    // backgroundColor: 'red'
  },
  centerHeading: {
    fontSize: hp('4.4'),
    paddingHorizontal: wp('4'),
    width: wp('100'),
    textAlign: 'center',
    color: Colors.white,
    fontWeight: '700',
  },
  centerText: {
    fontSize: hp('2.2'),
    // fontFamily: fontFamily.regular,
    paddingHorizontal: wp('5'),
    width: wp('100'),
    textAlign: 'center',
    color: Colors.white,
    lineHeight: hp('4'),
  },
  dot: (currentIndex, index) => ({
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    height: Dimensions.get('window').width * 0.016,
    width:
      currentIndex == index
        ? Dimensions.get('window').width * 0.09
        : Dimensions.get('window').width * 0.04,
    backgroundColor: currentIndex == index ? Colors.themeRed : 'transparent',
    borderWidth: currentIndex == index ? 1 : 1,
    borderColor: currentIndex == index ? Colors.themeRed : Colors.secondary,
  }),
  bannerImg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    // height: hp('95'),
    width: wp('100'),
    // aspectRatio: 1,
    paddingBottom: hp('30'),
    backgroundColor: Colors.white,
  },
  btnArrow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 'auto',
  },
  arrowText: {
    // fontFamily: fontFamily.medium,
    fontSize: hp('1.8'),
    paddingRight: wp('1'),
    color: Colors.secondary,
    lineHeight: 16,
    marginRight: wp('2')
  },
  arrowStyle:{    
    backgroundColor: Colors.themeRed,
    borderRadius: 25,
    paddingHorizontal: wp('1'),
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('10'),
   
  },
  hdStyle: {
    fontSize: hp('3.5'),
    fontWeight: '700',
    marginVertical: hp('2'),
    color: Colors.primaryColor,
    textAlign: 'center'
  },
  descStyle: {
    textAlign: 'center',
    fontSize: hp('1.8'),
    lineHeight: 20,
    paddingHorizontal: wp('4'),
    color: Colors.gray,
    marginBottom: hp('6')
  },
  splashImg: {
    width: wp('60'),
    height: hp('30'),
    marginBottom: hp('10'),
  },
});
