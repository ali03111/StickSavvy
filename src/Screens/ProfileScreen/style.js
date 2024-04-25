import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors, Family} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  cardBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    // flexWrap: 'wrap',
    // marginHorizontal: wp('4'),
    marginBottom: hp('2'),
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: wp('2.5'),
    paddingVertical: wp('2.5'),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.grayBorder
  },
  changeStyle:{
    fontSize: hp('1.2'),
    color: Colors.textColor
  },
  container:{
    flex: 1,
    backgroundColor: Colors.white,
    // paddingBottom: hp('2'),    
  },
  iconStyle: {
    width: wp('6'),
    height: hp('4'),
    // marginBottom: hp('2'),
    resizeMode: 'contain',
  },
  chevronStyle:{
    width: wp('4'),
    height: hp('2'),
    // marginBottom: hp('2'),
    resizeMode: 'contain',
  },
  catMain: {
    marginTop: hp('1'),
    marginHorizontal: wp('4'),
  },
  titleStyle: {
    width: wp('69'),
    paddingHorizontal: wp('1'),
    fontSize: hp('2'),
    fontWeight: '500',
    color: Colors.black,
  },
  descStyle: {
    fontSize: hp('1.7'),
    fontWeight: '300',
    color: Colors.textGray,
  },
  arrowRight: {
    width: wp('6'),
    height: hp('3'),
    // backgroundColor: 'red',
  },
  proMain: {
    marginTop: hp('5'),
  },
  headingStyle: {
    color: Colors.textColor,
    fontSize: hp('1.8'),
    fontWeight: '700',
    // width: '100%',
    textAlign: 'left',
    marginBottom: hp('2'),
    marginTop: hp('4'),
  },
  profileImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('3'),
    marginBottom: hp('2')
  },
  ProfileImage: {
    // width: wp('20'),
    height: hp('15'),
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  addImageIcon:{
    width: wp('6'),
    height: hp('4')
  },
  userTitle: {
    fontSize: hp('2.8'),
    width: '100%',
    textAlign: 'center',
    color: Colors.secondary,
    fontWeight: '700',
    marginVertical: hp('1'),
    fontFamily: Family.fontBold,

  },
  userAboutText: {
    color: Colors.textColor,
    fontFamily: Family.fontMedium,
    fontWeight:'400',
    fontSize: hp('1.5'),
    lineHeight: hp('2'),
    textAlign: 'center',
    marginBottom: hp('2'),
  },
});
