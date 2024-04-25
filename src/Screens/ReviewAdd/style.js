import { StyleSheet } from "react-native";
import { Colors, Family } from "../../Theme/Variables";
import { wp,hp } from "../../Config/responsive";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingBottom: hp('2')
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
      innerWrapper: {
        paddingHorizontal: wp('4'),
        marginTop: hp('4'),
        alignItems: 'center',
      },
      headingStyle: {
        color: Colors.textColor,
        fontSize: hp('1.8'),
        fontWeight: '700',
        width: '100%',
        textAlign: 'left',
        marginBottom: hp('2'),
        marginTop: hp('4')
      },
      addReviewStyleContainer:{
        width: wp('92'),
        alignItems: 'flex-start',
        marginHorizontal: wp('4'),
      },
      imgStyle:{
            width: wp('50')
      },
      addReviewContainer:{
        borderRadius: 10,
        borderColor: Colors.grayBorder,
        borderWidth:1,
        width: wp('92'),
        paddingHorizontal: wp('2'),
        paddingVertical: hp('2'),
        marginTop: hp('4'),
        minHeight: hp('25'),
        marginBottom: hp('2')
      },
      reviewTextStyle:{
        color: Colors.textColor,
        fontSize: hp(1.5),
        lineHeight: hp('2'),
      }
})