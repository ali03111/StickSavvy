import {useState} from 'react';
import useReduxStore from '../../Hooks/UseReduxStore';
import {logOutUser} from '../../Redux/Action/AuthAction';
import {logoutService} from '../../Services/AuthServices';
import {Linking, Platform} from 'react-native';
import { androidCameraPermission } from '../../Utils/permissions';
import ImageCropPicker from 'react-native-image-crop-picker';

/**
 * The function `useSettingScreen` handles navigation and logout functionality in a setting screen
 * component.
 * @returns The `useSettingScreen` function is returning an object with the following properties and
 * methods:
 */
const useProfileScreen = ({navigate, goBack}) => {
  const [alert, setAlert] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [profileData, setProfileData] = useState(null);

  const {dispatch} = useReduxStore();

  const onConfirm = () => {
    setAlert(false);
    setTimeout(async () => {
      await logoutService();
      dispatch(logOutUser());
    }, 900);
  };
  const onCancel = () => {
    setAlert(!alert);
  };
  const callLogOut = () => {
    onCancel();
  }
  const tabScreen = item => {
    // console.log('fir', item);
    if (item?.screenUrl) {
      navigate(item?.screenUrl);
      // console.log('asdaa', item?.screenUrl);
    } else if (item?.pageUrl) {
      Linking.openURL(item?.pageUrl);
      // console.log('tes', item?.pageUrl);
    } else {
      onCancel();
      // console.log('asd asd');
    }
  };
  const onSelectImage = async () => {
    const permissionStatus = await androidCameraPermission();
    if (permissionStatus || Platform.OS === 'android') {
      Alert.alert('Upload Picture', 'Choose Option', [
        {text: 'Gallery', onPress: onGallery},
        {text: 'Cancel', onPress: () => {}},
      ]);
    }
  };

  // Function to opening the gallery of android
  const onGallery = () => {
    ImageCropPicker.openPicker({
      cropping: true,
      width: 300,
      height: 400,
    }).then(images => {
      console.log(images, 'aklsdjflkajsdf');
      setProfileData(images);
    });
  };

  const onDeleteConfirm = () => {
    setDeleteAlert(false);
    setTimeout(async () => {
      await logoutService();
      dispatch(logOutUser());
    }, 900);
  };
  const onDeleteCancel = () => {
    setDeleteAlert(!deleteAlert);
  };
  const callDelete = () => {
    onDeleteCancel();
  }

  return {callDelete, onDeleteCancel, onDeleteConfirm, onCancel, onConfirm, tabScreen, alert, callLogOut, onSelectImage, profileData, deleteAlert};
};

export default useProfileScreen;
