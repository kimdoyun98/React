import React, { Component } from 'react';
import axios from 'axios'
import "./Login.css"
import {setCookie, getCookie} from '../Cookie'


function postLoginData() {
  const userId = document.querySelector('.login-edittext-id').value;
  const password = document.querySelector('.login-edittext-pw').value;
  const loginData = {
    loginType: 'custom',
    user_id: userId,
    user_pw: password,
  };
  const url = 'http://localhost:8000/login/'


  return (
    axios
      .post(url, loginData, {withCredentials: true})
      
      .then((response) => {
        if (response.status >= 200 && response.status <= 204) {
          setCookie('username', userId, {maxAge: 3600})
          window.location.reload();
        }
      })
      /*.then(() => {
        alert("항상실행");
      })*/
      .catch(() => {
        alert('가입하지 않은 아이디이거나, 잘못된 비밀번호입니다.');
      })
  );
}


class Loginpage extends Component {
  render( ){
    return(
      <div class="main_page">
        <div class="login-page-title">
          <h1>Gate Login</h1>
        </div>
        <form class="login_form">
          <p>
            <input class="login-edittext-id" type="text" name="user_id" placeholder='학번'></input>
          </p>
          <p>
            <input class="login-edittext-pw" type="password" name="user_pw" placeholder='비밀번호'></input>
          </p>
          <button class="login-page-button" type='button' name="login" onClick={postLoginData}>로그인</button>
          
        </form> 
      </div>
      );
    }
  }

  export default Loginpage;