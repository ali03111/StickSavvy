import {useState} from 'react';
import {loginUser, registerUser} from '../../Redux/Action/AuthAction';
import useReduxStore from '../../Hooks/UseReduxStore';
import {errorMessage} from '../../Config/NotificationMessage';

const {default: useFormHook} = require('../../Hooks/UseFormHooks');
const {default: Schemas} = require('../../Utils/Validation');
import ImagePicker from 'react-native-image-crop-picker';
import {androidCameraPermission} from '../../Utils/permissions';

/**
 * The function `useRegister` handles form submission, user registration, navigation, and policy
 * agreement in a React application.
 * @returns The `useRegister` function is returning an object with the following properties and
 * methods:
 */
const useRegister = ({navigate, goBack}) => {
  const {handleSubmit, errors, reset, control, getValues} = useFormHook(
    Schemas.signUp,
  );
  const {dispatch} = useReduxStore();
  const [remember, setRemember] = useState(false);
  const [profileData, setProfileData] = useState(null);

  const rememberValue = () => {
    setRemember(!remember);
  };

  const socialLoginFun = type => {
    dispatch(loginUser({type, datas: {}}));
  };

  const signUpButton = ({
    first_name,
    last_name,
    email,
    // number,
    password,
    confirm_password,
    // company_name,
  }) => {
    // if (!policy) {

    // } else errorMessage('Please agree terms & conditions.');
    console.log({first_name, email, password, last_name, profileData});
    dispatch(
      loginUser({
        type: 'email',
        datas: {first_name, email, password, last_name, profileData},
      }),
    );
    // navigate('LoginScreen');
  };

  const loginNav = () => {
    navigate('LoginScreen');
    console.log('loginNav Clicked');
  };

  // const [policy, setPolicy] = useState(true);

  // const PolicyValue = () => {
  //   setPolicy(!policy);
  // };
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
    ImagePicker.openPicker({
      cropping: true,
      width: 300,
      height: 400,
    }).then(images => {
      console.log(images, 'aklsdjflkajsdf');
      setProfileData(images);
    });
  };

  const registerWithEmail = ({
    first_name,
    email,
    password,
    last_name,
    phone,
  }) => {
    console.log({first_name, email, password, last_name, phone});

    dispatch(
      registerUser({
        type: 'email',
        datas: {first_name, email, password, last_name, phone},
      }),
    );
  };

  return {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    facebookLoginFunc: () => {},
    googleLoginFunc: () => {},
    PhoneNumberLoginFuc: () => {},
    remember,
    setRemember,
    rememberValue,
    goBack,
    loginNav,
    signUpButton,
    registerWithEmail,
    onSelectImage,
    profileData,
    socialLoginFun,
    // PolicyValue,
    // policy,
  };
};

export default useRegister;
