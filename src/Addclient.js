import React, { Component } from 'react';
import './App.css';
import Header from './Header' ;
import './bootstrap.css'
import './css/font-awesome.min.css';
import $ from 'jquery'
import 'jquery-ui'
import dateDropper from 'datedropper'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment'



class Addclient  extends Component{


    constructor(props){
        super(props);

        this.state={
            edit:true,
            date:moment(),
            name:'',
            age:0,
            Gender:'',
            Postcode:0,
            ethnic:'',
            cn:0,
            rgd:new Date().toLocaleString(),
            Email:'',
            ename:'',
            ecn:0

        }
        
    }




    submit =(e)=>{

        e.preventDefault()
       fetch('http://localhost:3002', {
  
          method:'POST',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
          },
          body:JSON.stringify({
             
                name:this.state.name,
                dob:this.state.date,
                age:this.state.age,
                gender:this.state.Gender,
                postcode:this.state.Postcode,
                ethnic:this.state.ethnic,
                cn:this.state.cn,
                rgd:this.state.rgd,
                email:this.state.Email,
                ename:this.state.ename,
                ecn:this.state.ecn
          })
  
       })
          .then(res=>res.json()).then(data=>{  
                   
                     console.log(data)
                                                       
                      	 
       }).catch((error)=>{
           
       });
  
       
          this.setState({
            name:'',
            age:0,
            Gender:'',
            Postcode:0,
            ethnic:'',
            cn:0,
            rgd:new Date().toLocaleString(),
            Email:'',
            ename:'',
            ecn:0
          })
  
    }
  



    render(){

       

        return(

            <div>
                <Header/>

       

            
            
 <div className="viewtable text-success">

      <center> <h2 className="text-success" >Add client</h2></center>
                       
                       <div className="row">
                         <div  className="col-md-2"></div>
                         <div  className="col-md-8">
  
  
                         <div className="row bord int1">
                              <div className="col-md-12">
                                   <lable>Name</lable>
                                   <input type="text" value={this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}}/>
                                  </div>
                             </div>
  
  
                             <div className="row bord tbnone ">
                              <div className="col-md-12">
                                   <lable>Date Of Birth</lable>
                                      
                                      <div className="int78">
                                   <DatePicker   
                                            selected={this.state.date}
                                             onChange={(date)=>{this.setState({date})}}
                                              /></div>
                                      <span></span>
                                          
                                       
                                   <div className="int66">
                                   <lable className="">Age Signed Up</lable>
                                   <input className="int4" type="text" value={this.state.age} onChange={(e)=>{this.setState({age:e.target.value})}}/>
                                   </div>
                                  </div>
                             </div>
  
                             <div className="row bord tbnone">
                              <div className="col-md-12">
                                   <lable >Gender</lable>
                                   
                                   <select className="int11" value={this.state.Gender} onChange={(e)=>{this.setState({Gender:e.target.value})}}>

                                        <option>Not Filled</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                       </select>


                                   <lable className="">Postcode</lable>
                                   <input className="int6" type="text" value={this.state.Postcode} onChange={(e)=>{this.setState({Postcode:e.target.value})}} />
                                  </div>
                             </div>
  
                             <div className="row bord int1 tbnone">
                              <div className="col-md-12">
                                   <lable >Ethnic</lable>
                                   <select className="int12"  value={this.state.ethnic} onChange={(e)=>{this.setState({ethnic:e.target.value})}} >

                                           <option>Not Filled</option>
                                           <option>white-english/scottist/welsh/irish/uk</option>
                                           <option>white-irish</option>
                                           <option>white-gypsy or irish traveller</option>
                                           <option>white-any other white background</option>
                                           <option>mixed/multiple-mixed ethnic background</option>
                                           <option>asian-indian</option>
                                           <option>asian-pakistani</option>
                                           <option>asian-bangladeshi</option>
                                           <option>asian-pakistani</option>
                                           <option>asian-chinese</option>
                                           
                                           
                                    </select>
                                  </div>
                             </div>
                         
                             <div className="row bord tbnone">
                              <div className="col-md-12">
                              <lable >Contact Number </lable>
                              <input className="int7" type="text" value={this.state.cn} onChange={(e)=>{this.setState({cn:e.target.value})}} />
                                   <lable className="">Registered Date</lable>
                                   <input className="int8" type="text" value={this.state.rgd}/>
                                  </div>
                             </div>
  
                             <div className="row bord  int1 tbnone">
                              <div className="col-md-12">
                                   <lable >Email</lable>
                                   <input  type="text"   value={this.state.Email} onChange={(e)=>{this.setState({Email:e.target.value})}}/>
                                  </div>
                             </div>
  
  
                              <div className="row bord set6">
                              <div className="col-md-12">
                              <lable >Emergancy Name
                              </lable>
                              <input className="int9" type="text" value={this.state.ename} onChange={(e)=>{this.setState({ename:e.target.value})}}/>
                                   <lable className="">Emergancy Contact</lable>
                                   <input className="int10" type="text" value={this.state.ecn} onChange={(e)=>{this.setState({ecn:e.target.value})}}/>
                                  </div>
                             </div>
                         
  
                                                

                             <div className="row  set6">
                              <div className="col-md-12">
                                   <button className="btn2 btn btn-success btn-sm" onClick={this.submit} > Add </button>
                            
                                  </div>
                             </div>
                         
                         
                         
                         </div>
                         <div  className="col-md-2"></div>
                         
                         </div>
  
                    
                  </div>




        </div>
        )
    }
}



export default Addclient;