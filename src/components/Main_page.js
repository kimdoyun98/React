import React, { Component } from 'react';
import Gate_Introduction from './INTRO/Introduction';
import Loginpage from './LOGIN/Login';
import Testing from './session_test';
import Signuppage from './SIGNUP/Signup';
import Notice from './NOTICE/LIST/Notice';
import "./Main_page.css"
import axios from 'axios';
import {getCookie, setCookie, removeCookie} from './Cookie'

function postLogout(){
  const url = 'http://localhost:8000/logout/'

  return (
    axios
      .get(url, {withCredentials: true})
      
      .then((response) => {
        if (response.status >= 200 && response.status <= 204) {
          removeCookie('username');
          window.location.reload();
        }
      })
      .catch(() => {
        alert('로그아웃 실패');
      })
  );
}

class Mainpage extends Component {
    constructor(props){
      super(props);
      this.state = {
        mode : "Intro",
      }
    }
    
    render( ){
      return(
        <div>
          <div class="left-space">
            <div class="main-login-button-space">
              {getCookie('username') || <button class="main-login-button" name='login' type='button' 
              onClick={function(e){
                this.setState({mode:"login"});
              }.bind(this)}>로그인</button>}

              {getCookie('username') && <button class="main-login-button" name='logout' type='button' 
              onClick={postLogout}>로그아웃</button>}
            </div>
            
            <div class="category-space">
              <button class="category" name="intro" onClick={function(e){
                this.setState({mode:"Intro"});
              }.bind(this)}>소개</button>

              <button class="category" name="notice" onClick={function(e){
                this.setState({mode:"Notice"});
              }.bind(this)}>공지사항</button>

              <button class="category">갤러리</button>

              <button class="category">Tip</button>

              <button class="category">세미나 자료</button>

              <button class="category">프로젝트</button>
          
              <button class="category" name="Userinfo" onClick={function(e){
                this.setState({mode:"Signup"});
              }.bind(this)}>부원</button>

            </div>
          </div>
          {this.state.mode === "login" && <Loginpage />}
          {this.state.mode === "Intro" && <Gate_Introduction />}
          {this.state.mode === "Notice" && <Notice/>}
          {this.state.mode === "Signup" && <Signuppage />}
          {this.state.mode === "test" && <Testing />}

        </div>
        );
      }
    }
  
    export default Mainpage;


    /*<button class="category" name="test" onClick={function(e){
                this.setState({mode:"test"});
              }.bind(this)}>Test</button>*/