import {hp, wp} from '../../Config/responsive';
const {StyleSheet, Platform} = require('react-native');
const {Colors, Family} = require('../../Theme/Variables');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  innerWrapper: {
    paddingHorizontal: wp('4'),
    marginTop: hp('4'),
    alignItems: 'center',
  },
  userProfileImg: {
    width: wp('24'),
    height: hp('12'),
    borderRadius: 10,
  },
  userTitle: {
    fontSize: hp('2.8'),
    color: Colors.secondary,
    fontWeight: '700',
    marginVertical: hp('2'),
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
  userDepartment: {
    color: Colors.textColor,
    fontSize: hp('1.5'),
    fontWeight: '500',
    fontFamily: Family.fontMedium,
  },
  blueBGHeading: {
    fontSize: hp('2.8'),
    color: Colors.secondary,
    fontWeight: '500',
  },
  blueBGText: {
    color: Colors.textColor,
    fontSize: hp('1.5'),
    marginBottom: hp('1'),

    // lineHeight: hp('2'),
  },
  blueBG: {
    borderRadius: 10,
    backgroundColor: Colors.bgLBlue,
    width: wp('26'),
    textAlign: 'center',
    alignItems: 'center',
    paddingVertical: hp('1.5'),
  },
  expWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('92'),
    marginVertical: hp('4'),
  },
  headingStyle: {
    color: Colors.textColor,
    fontSize: hp('1.8'),
    fontWeight: '700',
    width: '100%',
    textAlign: 'left',
    marginBottom: hp('2'),
  },
  biographyText: {
    color: Colors.textColor,
    fontSize: hp('1.5'),
    lineHeight: hp('2'),
    textAlign: 'left',
  },
  patientReviewMain: {
    marginTop: hp('4'),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: wp('92'),
    marginBottom: hp('2'),
  },
  starsStyle: {
    width: wp('26'),
    marginRight: wp('1.5'),
  },
});
