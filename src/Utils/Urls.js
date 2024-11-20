const getCredentials = () => {
  if (__DEV__)
    return {
      baseURL: 'https://virtualrealitycreators.com/sticksavvy/api',
      imageURL: 'https://virtualrealitycreators.com/sticksavvy/storage/',
    };
  else {
    console.log = () => {};
    return {
      baseURL: 'https://virtualrealitycreators.com/sticksavvy/api',
      imageURL: 'https://virtualrealitycreators.com/sticksavvy/storage/',
    };
  }
};

export const {baseURL, imageURL} = getCredentials();

export const apendUrl = url => {
  return baseURL + url;
};
export const imageUrl = url => {
  console.log(url, 'sdfksdfl;jlsdkj');
  return url ? imageURL + url : '';
  // : 'https://res.cloudinary.com/dd6tdswt5/image/upload/v1684830799/UserImages/mhysa2zj0sbmvnw69b35.jpg';
};

// user api 
// const UserRole = 'user'
export const registerUrl = `/user/signup`;
export const loginUrl = '/user/login';
export const logoutUrl = '/user/logout';
export const doctorsUrl = '/user/doctors';
export const doctorsById = '/user/get-doctor';
export const updateUser = '/user/update_profile';
export const addReview = '/user/reviews/create/';

/* not using */
export const getAgoraTokenUrl = 'getAccessToken/';
export const sendType = 'customer/send-type';
export const tabButtonType = 'customer/training-media/';
export const msdSheets = 'customer/msdsSheet-list/';
export const catalogBroucher = 'customer/catalogBrouchers-list/';
export const salesPitch = '/customer/all-perfectSale/';
export const productListApi = '/customer/product-list/';
export const singleProduct = '/customer/product-data/';
export const orderKit = '/customer/order-kit-list/';
export const kitForm = '/customer/add-order-kit/';
export const welcomeVideo = '/customer/welcome-video/';
export const faqHtml = '/customer/faqs-list/';
export const firebaseSignup = '/firebase-signup';
