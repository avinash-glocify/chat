import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://gis.co/api/auth/',
  // timeout: 1000,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('_token')}`,
  }
});

const  accessToken  =  localStorage.getItem('_token')

if (accessToken) {
    instance.defaults.headers.common['Authorization'] =  accessToken
}

instance.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

instance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if(error.response.status === 401) {
      localStorage.removeItem('_token');
    }
    return Promise.reject(error);
  });

export default  instance;
