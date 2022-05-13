import React, { Component } from 'react';
import axios from 'axios'
import { getCookie } from './Cookie';

function postLoginData() {
  const name = getCookie('username')
  if (name) {
    console.log(name);
  }
  else{
    console.log("없음");
  }
}

class Testing extends Component {
    render( ){
      return(
        <div class="main_page">
        
          
         <button class="login-page-button" type='button' name="login" onClick={postLoginData}>Button</button>
            
         
        </div>
        );
      }
    }
  
    export default Testing;