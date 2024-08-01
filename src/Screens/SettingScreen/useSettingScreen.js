import {useState} from 'react';
import useReduxStore from '../../Hooks/UseReduxStore';
import {logOutUser} from '../../Redux/Action/AuthAction';
import {logoutService} from '../../Services/AuthServices';
import {Linking} from 'react-native';

/**
 * The function `useSettingScreen` handles navigation and logout functionality in a setting screen
 * component.
 * @returns The `useSettingScreen` function is returning an object with the following properties and
 * methods:
 */
const useSettingScreen = ({navigate, goBack}) => {
  const [alert, setAlert] = useState(false);
  const [deleteAlert, setDeleteAlert] = useState(false);

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
  };
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
  };
  return {
    onCancel,
    onConfirm,
    tabScreen,
    alert,
    callLogOut,
    deleteAlert,
    setDeleteAlert,
    onDeleteCancel,
    callDelete,
  };
};

export default useSettingScreen;
