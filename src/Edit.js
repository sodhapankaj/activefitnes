import React, { Component } from 'react';
import './App.css';
import Header from './Header' ;
import './bootstrap.css'
import './css/font-awesome.min.css';
import Cedit from './Cedit.js';
import Cupdate from './Cupdate.js'


class Edit extends Component{


    constructor(){
        super();

        this.state={
            edit:true
        }
    }

    onedit=()=>{
    
           let edit = this.state.edit
            edit=!edit
        this.setState({
            edit
        })
    }
    render(){
        return(

            <div>
                <Header/>


                 {

            
                      this.state.edit ? 
            
                      <Cedit onedit={this.onedit}/>

                     :     
                      <Cupdate onedit={this.onedit}/>
                 }


                 
                </div>
        )
    }
}



export default Edit;