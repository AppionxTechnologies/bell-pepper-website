// // Install axios if you haven't already: npm install axios
// import axios from 'axios';

// const instance = axios.create({
//   baseURL: '/api', // Specify the proxy endpoint
//   headers: {
//     'Authorization': 'Bearer YOUR_TOKEN_HERE',
//   },
// });

// instance.get('/data')
//   .then(response => {
//     // Handle the API response data here
//   })
//   .catch(error => {
//     // Handle any errors
//   });


// // Pseudo code for token refresh logic
// const refreshToken = async () => {
//   try {
//     // Send a request to refresh the token
//     const response = await axios.post('/api/oauth2/token');
//     const newToken = response.data.access_token;
// console.log("hiiiii",response);
//     // Store the new token and retry the failed request
//     instance.defaults.headers['Authorization'] = `Bearer ${newToken}`;
//     return instance.request(error.config);
//   } catch (refreshError) {
//     // Handle token refresh failure
//     throw refreshError;
//   }
// };

// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response.status === 401) {
//       try {
//         return await refreshToken();
//       } catch (refreshError) {
//         // Handle token refresh failure
//         throw refreshError;
//       }
//     }
//     throw error;
//   }
// );
