import React, { Component } from 'react';
import './App.css';
import Header from './Header.js' ;
import './bootstrap.css'
import './css/font-awesome.min.css';
import ReactTable from "react-table";
import "react-table/react-table.css";

class  Client extends Component {


    constructor(){
      super();
      

    this.state={

              clients:[],

            client:[

              {
                 name:'pankaj',
                 dob:'25/june/1996',
                 age:23   
              },
              {
                name:'vaibhavi',
                dob:'25/june/1996',
                age:23   
             },
             {
                name:'hjgg',
                dob:'25/june/1996',
                age:23   
             },
             {
                name:'jain',
                dob:'25/june/1996',
                age:23   
             },
             {
                name:'ajay',
                dob:'25/june/1996',
                age:23   
             },
             {
                name:'vipul',
                dob:'25/june/1996',
                age:23   
             },
 
             {
                name:'lol',
                dob:'25/june/1996',
                age:23   
             },
 
             {
                name:'mcq',
                dob:'25/june/1996',
                age:23   
             },
 
             {
                name:'janak',
                dob:'25/june/1996',
                age:23   
             },
 
             {
                name:'puri',
                dob:'25/june/1996',
                age:23   
             },
 
             {
                name:'lothal',
                dob:'25/june/1996',
                age:23   
             },
 
             {
                name:'virani',
                dob:'25/june/1996',
                age:23   
             },
 
             {
                name:'dholavira',
                dob:'25/june/1996',
                age:23   
             },
 
             {
                name:'pooja',
                dob:'25/june/1996',
                age:23   
             },
 
             {
                name:'krishna',
                dob:'25/june/1996',
                age:23   
             },
 
             {
                name:'malti',
                dob:'25/june/1996',
                age:23   
             },
 
             {
                name:'john',
                dob:'25/june/1996',
                age:23   
             },
 
             {
                name:'salman',
                dob:'25/june/1996',
                age:23   
             },
            

 
            ],
            start:0,
            end:5,
        

    }

    this.sorting();
    this.next();
     
    }


    sorting=()=>{

      let client = this.state.client

        function compare(a,b){
          if(a.name < b.name){
            return -1
          }
          if(a.name > b.name){
            return 1;
          }
          return 0;
        }

        client.sort(compare);
        this.setState({
          client
        })

    }


    previos=()=>{
      let start = this.state.start
      let end = this.state.end
      if(0<start)
      {
        start=start-5;
        end=end-5;
      
      }
      else{
      }

      this.setState({
        start,end
      })
      this.record();
    }

    next=()=>{
      let start = this.state.start
      let end = this.state.end
      let  client = this.state.client
      let length = client.length;
    
      if(length>end)
      {
       start=end;
       end=end+5;
      }
      else{
        end=length;
      }

      this.setState({
        start,end
      })
      this.record();
    }

    record=()=>{

      let clients = this.state.clients
      let client=this.state.client
      let start = this.state.start
      let end = this.state.end
      let count;
      clients.splice(0,5);
        for(count=start;count<end;count++)
        {
          clients.push(client[count])
        }
       this.setState({
         clients
       })
         
    }

  render() {


    const { client } = this.state;
    return (
      <div>  
      <Header/>


 
        <div className="search">
         <center>
         <form>
            <button>Search</button><input type="text" placeholder="Search Name" /><span className="fa fa-search"> </span>
         </form>
        </center>
        </div>


            

            <div className="container table1">
             <ReactTable
          data={client}
          columns={[
                {
                  Header: "Name",
                  accessor:"name" 
                },
                {
                  Header: "Dob",
                  accessor: "dob"
                },
                {
                  Header: "Age",
                  accessor: "age"
                },
                {
                  Header: "View",
                  id:"view",
                  Cell: row=>(<i className="fa fa-eye"></i>)

                },
                {
                  Header: "Edit",
                  Cell: row=>(<i class="fa fa-edit"></i>)
                }
  
              
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
          minRows={5}
        />

        </div>


      </div>
    );
  }
}

export default Client;
