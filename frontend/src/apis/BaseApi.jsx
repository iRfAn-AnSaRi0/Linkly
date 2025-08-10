import React from 'react'
import axios from 'axios'

const API = axios.create({
  baseURL: 'https://linkly-a83f.onrender.com',
//   withCredentials: true,  
});

export default API