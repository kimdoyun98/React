import React, { Component } from 'react';
import './Notice.css'
import axios from 'axios'

class Notice extends Component {
  state = { 
    boards: [], 
  }; 
  
  handleChange = (e) => {
     const { name, value } = e.target;
    this.setState({ [name]: value, }); 
  }; 
  //로딩 데이터 
  loadingData = async () => { 
    try { 
      const response = await axios.get('http://localhost:8000/notice'); 
      this.setState({
        // boards: 'test' 
        boards: response.data, 
      }); 
    } catch (e) { 
      console.log(e); 
    } 
  }; 
  
  componentDidMount() { 
    const { loadingData } = this; 
    loadingData(); 
  }


    render( ){
      return(
        <div class="main_page">
          <div class='Notice_title_space'>
           <header class='header_title'><h1>공지사항</h1></header>
          </div>




          <div class='notice_bottom-space'>
            <div>
              <button class="write_button">작성</button>
              </div>
          </div>   
        </div>
        );
      }
    }
  
    export default Notice;