import React from 'react';
import axios from 'axios';
import * as actionTypes from '../../store/actions';
import jwt from 'jsonwebtoken';

export const userLoginFetch  = user => {
    return dispatch => {
      return axios.post('/login',user)
      .then(response => {
          const token = response.data.response;
          localStorage.setItem('token',token);
          localStorage.setItem('name',token.name);
          localStorage.setItem('email',token.email);
          localStorage.setItem('phone',token.phone);
          localStorage.setItem('group_id',token.group_id);
          localStorage.setItem('bearer',token.token);
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