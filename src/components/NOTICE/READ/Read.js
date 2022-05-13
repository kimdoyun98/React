import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import axios from 'axios'; 
import styled from 'styled-components';

class Read extends Component { 
    state = { id: '', board: [], };


    //로딩 데이터 
    loadingData = async () => { 
        //test JSON: 이 주소로 넣으면 오류 없음 
        //https://jsonplaceholder.typicode.com/todos/1 
        try { 
            // const id = 0; //test id 
            const { id } = this.props.match.params; 
            console.log(id); 
            const response = await axios.get(`http://localhost:4000/board/${id}`); 
            this.setState({ 
                // boards: 'test' 
                board: response.data, 
            }); 
            console.log(response.data); 
        } catch (e) { console.log(e); } 
    }; 
        
    componentDidMount() { 
        const { loadingData } = this; 
        loadingData(); 
    }
    
    render(){
        const {board}=this.state;
        return(
            <h2>{board.title}</h2> 
        );
    }
    

}