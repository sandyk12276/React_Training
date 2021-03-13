import Button from 'react-bootstrap/Button';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Row,Card,Col} from 'react-bootstrap';
import CardDeck from 'react-bootstrap/CardDeck';
import {ListofCourseCards} from './listofcoursecards';


export default function CoursesUnderService(props){
    console.log("hiiiiiiiiiiiii")
    console.log(props.location.list)
    const styles = {
        cardImage: {
          objectFit: 'cover'
        //   borderRadius: 55
        }}

    const [courseList,setCourseList]=useState([]);
    
    const serviceId=props.location.list;

    useEffect(()=>{
        axios.get('http://localhost:8080/courses/'+serviceId).then(res=>{
            console.log(res.data);
            setCourseList(res.data);
            
        })
        .catch(err=>{
            console.log(err)
        })
    },[])



    return(
        <div>
            <h2  className=" m-3">Available courses under the service </h2>
        <ListofCourseCards courseList={courseList}/>
        </div>
    );
}