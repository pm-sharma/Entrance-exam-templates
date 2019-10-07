import '../../node_modules/antd/dist/antd.css';
import React, { Component } from 'react';
import { Row, Col, Icon, Radio, Input } from 'antd';
// const userIcon = require('../../public/logo192.png');

import "../scss/cattempl.scss";
export default class Cattempl extends Component {
    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return (
            <div className="mainDiv">

                <div className="topBar">
                    <div className="clientLogo">
                        <div className="testName" style={{ width: "100%", textAlign: "center", fontSize: "20px", color: "white" }}>
                            TEST NAME
                                {/* <p style={{ color: "white",fontSize: "20px" }}>TEST NAME</p> */}
                        </div>
                    </div>
                </div>
                <div style={{ padding: "2px", width: "100%", backgroundColor: "black" }} className="inlineBlock">
                    <div className="inlineBlock">
                    </div>
                    <div className="inlineBlock" style={{ marginRight: "auto", float: "right", height: "30px" }}>
                        <div className="marks" style={{ height: "25px" }}>
                            <div className="inlineBlock">
                                <p style={{ color: "white" }}><b>Question Paper </b>
                                    <img style={{ height: "15px", maxWidth: "15px" }} src={require('../assests/edit.png')} />
                                </p>
                            </div>
                            <div style={{ marginLeft: "14px" }} className="inlineBlock">
                                <p style={{ color: "white" }}><b>Instructions </b>
                                    <img style={{ height: "15px", maxWidth: "15px" }} src={require('../assests/instructions.png')} />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div style={{ padding: "10px" }}>
                    <Row>
                        <Col className="tempBor" lg={19} md={18} sm={24}>
                            <div style={{ padding: "10px", width: "100%" }} className="inlineBlock">
                                <div className="inlineBlock" style={{ backgroundColor: "green", padding: "5px", color: "white", marginLeft: "20px" }}>
                                    Verbal Ability
                                </div>
                                <div className="inlineBlock" style={{ marginRight: "auto", float: "right", height: "30px" }}>
                                    <div className="marks" style={{ height: "25px" }}>
                                        <div className="inlineBlock">
                                            <p><b>Calculator</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="labelDiv">
                                <div className="labeldivInside">
                                    Section
                                </div>
                                <div style={{marginTop: "30px"}}>
                                    <div style={{ padding: "10px", width: "100%", backgroundColor: "rgb(147, 182, 235)" }} className="inlineBlock marksTab">
                                        <div className="inlineBlock">
                                            <h3>Question Type : Multiple Choice Question</h3>
                                        </div>
                                        <div className="inlineBlock" style={{ marginRight: "auto", float: "right", height: "30px" }}>
                                            <div className="marks" style={{ height: "25px" }}>
                                                <div className="inlineBlock">
                                                    <p><b>Marks For Correct Answer: </b><b style={{ color: "green" }}>1</b></p>
                                                </div>
                                                <div style={{ marginLeft: "14px" }} className="inlineBlock">
                                                    <p><b>Negative Mark: </b><b style={{ color: "red" }}>0</b></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Row>
                                        <Col className="directions" lg={14} md={14} sm={24}>
                                            <p className="ptagdir">
                                                <b>Directions for questions 1 to 4:</b>  Read the following passage carefully and answer the questions given below the passage.
                                    </p>
                                            <p className="ptagdir">
                                                Restaurants are not like retailers. The price should not start high when it hits the shelf and bottom out on the clearance rack. Many restaurant owners think it works as simply as that. They are convinced that restaurant pricing is simple supply and demand; when price is lowered or a deal is offered, traffic increases.
                                    </p>
                                            <p className="ptagdir">
                                                In actuality, restaurant owners have to be very careful to distinguish between effective discounting and brand-damaging devaluing. Thousands of restaurant owners believe that their promotions are providing a discount that will be helpful to their business while they are actually devaluing the food and/or dining experience.
                                    </p>
                                            <p className="ptagdir">
                                                Customers smell blood when a restaurant drops its prices, if they notice at all. Customers decide if the discount is reasonable or desperate (devaluing). If it is seen as desperate, the customer will never be convinced that the pre-discounted or “normal” price is not a rip-off or they will assume the business is in trouble. The discounted price often becomes the new “normal” price. It is because the psychology of your customer frequently does not reflect simple supply and demand. Customers assume price stability at restaurants and find price changes, whether radical deals, price hikes or discounts as suspicious. No restaurant owner will ever argue that we are rational about food.
                                    </p>
                                        </Col>
                                        <Col className="questions" lg={10} md={10} sm={24}>
                                            <div className="questionNo">
                                                Question No. 1
                                    </div>
                                            <div style={{ padding: "10px", width: "100%" }} className="inlineBlock">
                                                <div className="inlineBlock">
                                                    <p style={{ fontSize: "16px" }}> Did you enjoy this experience? Yes Not Sure The time allotted for the test was Sufficient Not Sufficie Not Sure The time allotted for the test was Sufficient Not Sufficie</p>
                                                </div>
                                                {/* <div className="inlineBlock">
                                            <div>
                                                <img style={{ height: "200px", maxWidth: "320px" }} src={require('../assests/qp.jpg')} />
                                            </div>
                                        </div> */}
                                            </div>

                                            <div style={{ padding: "10px", width: "100%", marginBottom: "30px" }} className="inlineBlock">
                                                <div>
                                                    <p style={{ fontSize: "16px" }}> <b>{" "}Options</b></p>
                                                </div>
                                                <div>
                                                    <div>
                                                        <Radio.Group>
                                                            <Radio style={radioStyle} value={1}>
                                                                5%
                                        </Radio>
                                                            <Radio style={radioStyle} value={2}>
                                                                10%
                                        </Radio>
                                                            <Radio style={radioStyle} value={3}>
                                                                15%
                                        </Radio>
                                                            <Radio style={radioStyle} value={4}>
                                                                20%
                                        </Radio>
                                                        </Radio.Group>
                                                    </div>
                                                </div>
                                            </div>

                                        </Col>
                                    </Row>
                                </div>
                            </div>

                            {/* <div style={{ padding: "10px", width: "100%" }} className="inlineBlock">
                                <div className="inlineBlock">
                                    <p style={{ fontSize: "16px" }}> 1. Did you enjoy this experience? Yes Not Sure The time allotted for the test was Sufficient Not Sufficie Not Sure The time allotted for the test was Sufficient Not Sufficie</p>
                                </div>
                                <div className="inlineBlock">
                                    <div>
                                        <img style={{ height: "200px", maxWidth: "320px" }} src={require('../assests/qp.jpg')} />
                                    </div>
                                </div>
                            </div>

                            <div style={{ padding: "10px", width: "100%", marginBottom: "30px" }} className="inlineBlock">
                                <div>
                                    <p style={{ fontSize: "16px" }}> <b>{" "}Options</b></p>
                                </div>
                                <div>
                                    <div>
                                        <Radio.Group>
                                            <Radio style={radioStyle} value={1}>
                                                5%
                                        </Radio>
                                            <Radio style={radioStyle} value={2}>
                                                10%
                                        </Radio>
                                            <Radio style={radioStyle} value={3}>
                                                15%
                                        </Radio>
                                            <Radio style={radioStyle} value={4}>
                                                20%
                                        </Radio>
                                        </Radio.Group>
                                    </div>
                                </div>
                            </div> */}

                            <div style={{ marginTop: "40px" }} className="topBar">
                                <div>
                                    <div style={{ padding: "10px", width: "100%" }} className="inlineBlock">
                                        <div className="inlineBlock fullScreen fsi" style={{ marginRight: "10px" }}>
                                            <p style={{ lineHeight: "30px" }}><b>Marked For Review & Next</b></p>
                                        </div>
                                        <div className="inlineBlock fullScreen fsi">
                                            <p style={{ lineHeight: "30px", }}><b>Clear Response</b></p>
                                        </div>
                                        <div className="inlineBlock fullScreen fsi" style={{ marginRight: "auto", float: "right" }}>
                                            <p style={{ lineHeight: "30px" }}><b>Save & Next</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Col>

                        <Col style={{ padding: "0px 5px 5px 5px" }} className="tempBor" lg={5} md={18} sm={24}>
                            <div>
                                <div className="inlineBlock">
                                    <Icon style={{ fontSize: "38px" }} type="user" />
                                </div>
                                <div className="inlineBlock" style={{ marginLeft: "20px" }}>
                                    <p style={{ lineHeight: "38px", fontSize: "14px" }}><b>Time Left:</b><b style={{ color: "green" }}> 02:01:20</b></p>
                                </div>
                            </div>
                            <div style={{ width: "100%", backgroundColor: "green" }}>
                                <p style={{ textAlign: "center" }}><b>All Areas</b></p>
                            </div>
                            <div className="listDiv">
                                <ul style={{ padding: "5px" }}>
                                    <li className="inlineBlock listButton">
                                        1
                                    </li>
                                    <li className="inlineBlock listButton">
                                        2
                                    </li>
                                    <li className="inlineBlock listButton answered">
                                        3
                                    </li>
                                    <li className="inlineBlock listButton notAns">
                                        4
                                    </li>
                                    <li className="inlineBlock listButton">
                                        5
                                    </li>
                                    <li className="inlineBlock listButton marked">
                                        6
                                    </li>
                                    <li className="inlineBlock listButton visited">
                                        7
                                    </li>
                                    <li className="inlineBlock listButton notVisited">
                                        8
                                    </li>
                                    <li className="inlineBlock listButton">
                                        9
                                    </li>
                                    <li className="inlineBlock listButton markReviewed">
                                        10
                                    </li>
                                    <li className="inlineBlock listButton">
                                        11
                                    </li>
                                    <li className="inlineBlock listButton">
                                        12
                                    </li>
                                    <li className="inlineBlock listButton">
                                        13
                                    </li>
                                    <li className="inlineBlock listButton">
                                        14
                                    </li>

                                </ul>

                                <div style={{ marginTop: "30px" }}>

                                    <p><b>Legend:</b></p>

                                    <div>
                                        <div className="inlineBlock">
                                            <p><img style={{ height: "100px", width: "auto", maxWidth: "235px" }} src={require('../assests/ss.png')} />
                                            </p>
                                        </div>
                                        <div className="inlineBlock">

                                        </div>
                                    </div>

                                </div>

                                <div>
                                    <div className="actions">
                                        <p className="ptagans">View Qp</p>
                                    </div>
                                    <div className="actions">
                                        <p className="ptagans">Instructions</p>
                                    </div>
                                </div>
                                <div className="submitDiv">
                                    <p className="ptagans" style={{ color: "white" }}><b>Submit</b></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
