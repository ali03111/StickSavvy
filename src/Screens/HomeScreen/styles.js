import {hp, wp} from '../../Config/responsive';

const {StyleSheet, Platform} = require('react-native');
const {Colors} = require('../../Theme/Variables');

export const styles = StyleSheet.create({
  homeMain:{
    backgroundColor: Colors.white
  },
  headerView: {
    backgroundColor: Colors.secondary,
    width: wp('100'),
    paddingTop: hp('0'),
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  subscribeCardMain:  {
    paddingHorizontal: wp('4'),
    marginTop: hp('4'),
    marginBottom: hp('4'),
  },
  searchTextStyle:{
    width: wp('68'),
    color: Colors.black
  },
  subscribeCard:{
    borderRadius: 15,
    backgroundColor: Colors.white,  
    paddingTop: wp('4'),  
    paddingBottom: wp('3'),
    paddingHorizontal: wp('4'),  
    width: wp('92'),    
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subscribeHeading:{
    color: Colors.secondary,
    fontSize: hp('2.2'),
    fontWeight: '700',
    textTransform: 'capitalize',
    marginBottom: hp('1')
  },  
  flatlistStyleOne:{
    marginTop: hp('3'),
    marginLeft: wp('3'),
    paddingEnd: wp('2')
  },
  certifiedTitle:{
    fontSize: hp('2'),
    fontWeight:'600',
    color: Colors.black
  },
  viewAll:{
    color: Colors.gray,
    fontSize: hp('1.5')
  },
  imgStyle:{
    width: wp('8'),
    height: hp('5'),
    marginRight: wp('2')
  },
  searchContainer:{
    paddingHorizontal: wp('4'),
    paddingTop: hp('2'),
    paddingBottom: hp('0.5'),    
    width: wp('100'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  certifiedTopStyle:{
    paddingHorizontal: wp('4'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBar:{
    borderColor: Colors.grayBorder,
    borderWidth: 1,
    borderRadius: 15,
    width: wp('78'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp('2')
  },
  searchIconStyle:{
    width: wp('6'),
    marginRight: wp('2')
  },
  filterIconStyle:{
    width: wp('12'),
    marginLeft: wp('2'),
  },
  searchText:{
    color: Colors.lightGray,
    width: wp('65%'),
    backgroundColor: 'red'
  },
  firstView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.OS == 'ios' ? hp('2') : hp('-2'),
    width: wp('100'),
    alignSelf: 'center',
    paddingBottom: hp('2'),
    justifyContent: 'space-between',
    paddingHorizontal: wp('4'),
  },
  subText:{
    fontSize: hp('1.6'),
    color: Colors.white
  },
  nameText: {
    fontSize: hp('3'),
    fontWeight: 'bold',
    color: Colors.white
    // marginTop: hp('2.5'),
  },
  notiIcon: {width: wp('7')},
  setIcon: {width: wp('7')},
  headingView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('92'),
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: hp('3'),
  },
  comingView: {
    width: wp('90'),
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: Colors.grayFaded,
    // height: hp('10'),
    paddingVertical: hp('2'),
    paddingHorizontal: wp('3'),
    marginLeft: hp('1.5'),
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 5,
    backgroundColor: Colors.themeBlack,
    elevation: 50,
    height: hp('18.5'),
    // backgroundColor: 'white',
  },
  upperView: {flexDirection: 'row', alignItems: 'center'},
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1.5'),
    marginLeft: wp('1.5'),
    justifyContent: 'center',
  },
  locationIcon: {width: wp('75'), fontSize: hp('1.7'), marginLeft: wp('1')},
  divider: {width: wp('70'), marginTop: hp('1'), marginLeft: wp('1')},
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp('2'),
    marginTop: hp('1'),
    width: wp('70'),
  },
  dateText: {
    fontSize: hp('1.8'),
    marginLeft: wp('2'),
    marginRight: wp('10'),
  },
  timeText: {
    fontSize: hp('1.8'),
    marginLeft: wp('2'),
  },
  upComingFlatlistView: {
    height: hp('25'),
    alignItems: 'center',
    paddingRight: wp('4'),
    marginLeft: wp('1'),
  },
  bookBtnView: {
    backgroundColor: 'white',
    width: wp('92'),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  btnImage: {
    tintColor: 'red',
    width: wp('20'),
    height: hp('3'),
    marginRight: wp('-2'),
    transform: [{rotate: '180deg'}],
  },
  btnText: {color: 'black', fontWeight: 'bold', marginLeft: wp('4')},
  topRatedView: {
    paddingRight: wp('3'),
    paddingLeft: wp('3'),
    marginTop: hp('2'),
    marginLeft: wp('1'),
  },
  cardBottom:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',   
  },
  userStyles:{
    width: wp('26')
  },
  btnStyle:{
    width: wp('34')
  }
});