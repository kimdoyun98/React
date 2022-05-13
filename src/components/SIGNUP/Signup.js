import React, { Component } from 'react';
import axios from 'axios'
import "./Signup.css"

function postSignupData() {
  const userId = document.querySelector('.signup-edittext-id').value;
  const password = document.querySelector('.signup-edittext-pw').value;
  const loginData = {
    loginType: 'custom',
    user_id: userId,
    user_pw: password,
  };
  const url = 'http://localhost:8000/signup/'

  return (
    axios
      .post(url, loginData)
      
      .then((response) => {
        if (response.status >= 200 && response.status <= 204) {

          alert("등록 완료")
        }
      })
      /*.then(() => {
        alert("항상실행");
      })*/
      .catch(() => {
        alert('등록 실패');
      })
  );
}


class Signuppage extends Component {
  render( ){
    return(
      <div class="main_page">
        <div class="signup-page-title">
          <h1>Gate Signup</h1>
        </div>
        <form class="signup_form">
          <p>
            <input class="signup-edittext-id" type="text" name="user_id" placeholder='이름'></input>
          </p>
          <p>
            <input class="signup-edittext-pw" type="password" name="user_pw" placeholder='비밀번호'></input>
          </p>
          <button class="signup-page-button" type='button' name="signup" onClick={postSignupData}>등록</button>
          
        </form> 
      </div>
      );
    }
  }

  export default Signuppage;