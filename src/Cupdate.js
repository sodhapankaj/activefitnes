import React, { Component } from 'react';
import './App.css';
import './bootstrap.css'
import './css/font-awesome.min.css';


const Cupdate=(props)=>{


    return(

        <div>

 <div className="viewtable">
                       
                       <div className="row">
                         <div  className="col-md-2"></div>
                         <div  className="col-md-8">
  
  
                         <div className="row bord int1">
                              <div className="col-md-12">
                                   <lable>Name</lable>
                                   <input type="text"/>
                                  </div>
                             </div>
  
  
                             <div className="row bord tbnone ">
                              <div className="col-md-12">
                                   <lable>Date Of Birth</lable>
                                   <input className="int2" type="text"/>
                                   <lable className="">Age Today</lable>
                                   <input className="int3" type="text"/>
                                   <lable className="">Age Signed Up</lable>
                                   <input className="int4" type="text"/>
                                  </div>
                             </div>
  
                             <div className="row bord tbnone">
                              <div className="col-md-12">
                                   <lable >Gender</lable>
                                   <input className="int5" type="text"/>
                                   <lable className="">Postcode</lable>
                                   <input className="int6" type="text"/>
                                  </div>
                             </div>
  
                             <div className="row bord int1 tbnone">
                              <div className="col-md-12">
                                   <lable >Ethnic</lable>
                                   <input  type="text"/>
                                  </div>
                             </div>
                         
                             <div className="row bord tbnone">
                              <div className="col-md-12">
                              <lable >Contact Number </lable>
                              <input className="int7" type="text"/>
                                   <lable className="">Registered Date</lable>
                                   <input className="int8" type="text"/>
                                  </div>
                             </div>
  
                             <div className="row bord  int1 tbnone">
                              <div className="col-md-12">
                                   <lable >Email</lable>
                                   <input  type="text"/>
                                  </div>
                             </div>
  
  
                              <div className="row bord set6">
                              <div className="col-md-12">
                              <lable >Emergancy Name
                              </lable>
                              <input className="int9" type="text"/>
                                   <lable className="">Emergancy Contact</lable>
                                   <input className="int10" type="text"/>
                                  </div>
                             </div>
                         
  
                                                

                             <div className="row bord set6">
                              <div className="col-md-12">
                                   <button className="btn1" onClick={props.onedit}>Save   </button>
                            
                                  </div>
                             </div>
                         
                         
                         
                         </div>
                         <div  className="col-md-2"></div>
                           </div>
  
                    
                  </div>
                 
 
 


            </div>

                
    )
}


export default Cupdate;