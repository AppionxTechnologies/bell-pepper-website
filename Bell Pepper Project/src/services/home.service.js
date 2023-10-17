import axios from 'axios';
import { config } from '../config/config';

const apiUrl = config.api.url;

const getCategory = async () => {
  // In your React component
// fetch('/api/v1/categories', {
//   headers: {
//     'Authorization': 'Bearer Ca2ppoY9d8b1Qiy625Qi9dmrry636mZe'
//   }
// })
// .then(response => response.json())
// .then(data => {
//   // Handle the API response data herez
// })
// .catch(error => {
//   // Handle any errors
// });
};



export const categoryService = {
    getCategory,
};
