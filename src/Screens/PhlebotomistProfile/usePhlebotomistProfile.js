import API from '../../Utils/helperFunc';
import {addReview} from '../../Utils/Urls';

export default function usePhlebotomistProfile() {
  // Function to handle POST request to add review
  const addUserReview = async ({userID, rating, comment}) => {
    
    const response = await API.post(`${addReview}${userID}`, {
      rating,
      comment,
    });
    

    if (!response.ok) {
      throw new Error('Failed to add review');
    }

    return response.data; // Return the response data as needed
  };
  return {
    addUserReview,
  };
}
