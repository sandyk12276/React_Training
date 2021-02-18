import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../stylesheets/companydetailscomponent.css'
import axios from 'axios'

// const CompanyDetailsComponent = (props) => {
function CompanyDetailsComponent(props) {
    // return (
    //     <div className='c1 card col-12 col-sm-6 col-lg-3 col-md-6'>
    //         <div className="c3">
    //             <h5> {props.name}</h5>
    //             <p className='compdetpara'>{props.desc}</p>
    //             <h5>Today's price: ${props.price}</h5>
    //         </div>
    //     </div >

    // <div class="col-12 col-sm-6 col-lg-3 col-md-6">
    //     <div class="card">
    //         hi
    //         <p>sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
    //     </div>
    // </div>

    //)

    function addWatchList() {
        const data = {
            userId: props.userid,
            companyId: props.keyid
        }
        if (props.buttonValue === 'Watch') {
            axios.post('http://localhost:8080/watchList', data)
                .then(response => {
                    console.log(response)
                    alert("Successfully added to the WatchList");
                })
                .catch(error => {
                    console.log(error)
                    alert("Error adding to WatchList");
                });
        }
        else {
            alert('Removed from WatchList')
        }
    }

    return (
        <div className='c1 card col-12 col-sm-6 col-lg-3 col-md-6'>
            <div className="c3">
                <h5> {props.name}</h5>
                <p className='compdetpara'>{props.desc}</p>
                <h5>Today's price: ${props.price} <button className={props.button} onClick={addWatchList}> {props.buttonValue}</button></h5>
            </div>
        </div >
        // onClick={addWatchList(props.userid, props.key)}
        // <div class="col-12 col-sm-6 col-lg-3 col-md-6">
        //     <div class="card">
        //         hi
        //         <p>sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p>
        //     </div>
        // </div>

    )


}

export default CompanyDetailsComponent