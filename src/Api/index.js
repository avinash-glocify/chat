import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://gis.co/api/auth/',
  // timeout: 1000,
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('_token')}`,
  }
});

const  accessToken  =  localStorage.getItem('bearer')

if (accessToken) {
    instance.defaults.headers.common['Authorization'] =  accessToken
}

export default  instance;
