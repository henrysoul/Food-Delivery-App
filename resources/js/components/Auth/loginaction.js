import React from 'react';
import axios from 'axios';
import * as actionTypes from '../../store/actions';
import jwt from 'jsonwebtoken';

export const userLoginFetch  = user => {
    return dispatch => {
      return axios.post('/login',user)
      .then(response => {
          const token = response.data.response;
          localStorage.setItem('jwtToken',token);
          dispatch(loginUser(token));

      })
      .catch(error=>{
        const message = error.response.data.message;
        dispatch(alert(message))
      })
    }
  }
  
  export const loginUser = userObj => ({
      type: actionTypes.LOGIN_USER,
      userObj  
  })

  export const alert = (message) =>({
    type: actionTypes.ERROR_ALERT,
    message 
  })