import React, { Component } from 'react';
import './App.css';
import './bootstrap.css'
import './css/font-awesome.min.css';


const Cedit=(props)=>{


    return(

        <div>


               <div className="viewtable">
                       
                       <div className="row">
                         <div  className="col-md-2"></div>
                         <div  className="col-md-8">
 
 
                         <div className="row bord">
                              <div className="col-md-12">
                                   <lable>Name</lable>
                                  </div>
                             </div>
 
 
                             <div className="row bord tbnone">
                              <div className="col-md-12">
                                   <lable>Date Of Birth</lable>
                                   <lable className="set1">Age Today</lable>
                                   <lable className="set2">Age Signed Up</lable>
                                  </div>
                             </div>
 
                             <div className="row bord tbnone">
                              <div className="col-md-12">
                                   <lable >Gender</lable>
                                   <lable className="set3">Postcode</lable>
                                   
                                  </div>
                             </div>
 
                             <div className="row bord tbnone">
                              <div className="col-md-12">
                                   <lable >Ethnic</lable>
                                  </div>
                             </div>
                         
                             <div className="row bord tbnone">
                              <div className="col-md-12">
                              <lable >Contact Number
                              </lable>
                                   <lable className="set4">Registered Date</lable>
                                  </div>
                             </div>
 
                             <div className="row bord tbnone">
                              <div className="col-md-12">
                                   <lable >Email</lable>
                                  </div>
                             </div>
 
 
                              <div className="row bord set6">
                              <div className="col-md-12">
                              <lable >Emergancy Name
                              </lable>
                                   <lable className="set5">Emergancy Contact</lable>
                                  </div>
                             </div>
                         
 
                             <div className="row bord set6">
                              <div className="col-md-12">
                                   <button className="btn1" onClick={props.onedit}>Edit  <span className="fa fa-pencil-square-o"></span> </button>
                            
                                  </div>
                             </div>
                         
                         
                         
                         </div>
                         <div  className="col-md-2"></div>
                           </div>
 
                    
                  </div>
 
 


            </div>

                
    )
}


export default Cedit;