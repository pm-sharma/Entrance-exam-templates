import '../../node_modules/antd/dist/antd.css';
import React, { Component } from 'react';
import { Row, Col, Icon, Radio, Input } from 'antd';
// const userIcon = require('../../public/logo192.png');

import "../scss/iijeetempl.scss";
export default class Iitjeetempl extends Component {
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
                        <div style={{ padding: "10px", width: "100%" }} className="inlineBlock">
                            <div className="inlineBlock">
                                <h2 style={{ color: "white" }}>CLIENT LOGO</h2>
                            </div>
                            <div className="inlineBlock" style={{ marginRight: "auto", float: "right" }}>
                                <h2 style={{ color: "white" }}>CLIENT LOGO</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ padding: "10px" }}>
                    <Row>
                        <Col className="tempBor" lg={18} md={18} sm={24}>
                            <div style={{ padding: "10px", width: "100%" }} className="inlineBlock">
                                <div className="inlineBlock">
                                    <h2>EASY: THINK EXAM3</h2>
                                </div>
                                <div className="inlineBlock" style={{ marginRight: "auto", float: "right", height: "30px" }}>
                                    <div className="marks" style={{ height: "25px" }}>
                                        <div className="inlineBlock">
                                            <p><b>Maximum Mark: </b><b style={{ color: "green" }}>1</b></p>
                                        </div>
                                        <div style={{ marginLeft: "14px" }} className="inlineBlock">
                                            <p><b>Negative Mark: </b><b style={{ color: "red" }}>0</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ paddingLeft: "10px", paddingRight: "10px", width: "100%" }} className="inlineBlock tabButtons">
                                <div className="inlineBlock">
                                    <div style={{ width: "40px", textAlign: "center", height: "50px", backgroundColor: "#0d0d0d" }} className="inlineBlock">
                                        <p style={{ lineHeight: "50px", color: "white" }}>
                                            Q.1
                                        </p>
                                    </div>
                                    <div className="subjectButton activeButtonColor inlineBlockSub">
                                        <p style={{ lineHeight: "50px" }}>
                                            Physics
                                        </p>
                                    </div>
                                    <div className="subjectButton inactiveColor inlineBlockSub">
                                        <p style={{ lineHeight: "50px" }}>
                                            Chemistry
                                        </p>
                                    </div>
                                    <div className="subjectButton inactiveColor inlineBlockSub">
                                        <p style={{ lineHeight: "50px" }}>
                                            Mathematics
                                        </p>
                                    </div>
                                    <div className="subjectButton inactiveColor inlineBlockSub">
                                        <p style={{ lineHeight: "50px" }}>
                                            Biology
                                        </p>
                                    </div>
                                </div>
                                <div className="inlineBlock" style={{ marginRight: "auto", right: "0",position: "absolute", height: "30px", padding: "10px" }}>
                                    <div className="" style={{ height: "30px" }}>
                                        <div className="inlineBlock fullScreen fsi">
                                            <p style={{ lineHeight: "30px" }}><b>View Full Screen</b></p>
                                        </div>
                                        <div style={{ marginLeft: "14px" }} className="inlineBlock">
                                            <p>Calculater</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ padding: "10px", width: "100%" }} className="inlineBlock">
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
                            </div>

                            <div className="topBar">
                                <div className="clientLogo">
                                    <div style={{ padding: "10px", width: "100%" }} className="inlineBlock">
                                        <div className="inlineBlock fullScreen fsi" style={{ marginRight: "10px" }}>
                                            <p style={{ lineHeight: "30px" }}><b>Marked For Review</b></p>
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

                        <Col style={{ padding: "10px" }} className="tempBor" lg={6} md={18} sm={24}>
                            <div>
                                <div className="inlineBlock">
                                    <Icon style={{ fontSize: "60px" }} type="user" />
                                </div>
                                <div className="inlineBlock" style={{ marginLeft: "20px" }}>
                                    <p style={{ lineHeight: "60px", fontSize: "16px" }}>Time Left: 02:01:20</p>
                                </div>
                            </div>
                            <div className="listDiv">
                                <p style={{textAlign: "center"}}><b>Question Plate</b></p>
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
                                    <li className="inlineBlock listButton">
                                        15
                                    </li>
                                    <li className="inlineBlock listButton">
                                        16
                                    </li>
                                    <li className="inlineBlock listButton">
                                        17
                                    </li>
                                    <li className="inlineBlock listButton">
                                        18
                                    </li>
                                    <li className="inlineBlock listButton">
                                        19
                                    </li>
                                    <li className="inlineBlock listButton">
                                        20
                                    </li>
                                    <li className="inlineBlock listButton">
                                        21
                                    </li>
                                    <li className="inlineBlock listButton">
                                        22
                                    </li>
                                    <li className="inlineBlock listButton">
                                        23
                                    </li>
                                    <li className="inlineBlock listButton">
                                        24
                                    </li>
                                    <li className="inlineBlock listButton">
                                        25
                                    </li>
                                    <li className="inlineBlock listButton">
                                        26
                                    </li>
                                    <li className="inlineBlock listButton">
                                        27
                                    </li>
                                    <li className="inlineBlock listButton">
                                        28
                                    </li>
                                    <li className="inlineBlock listButton">
                                        29
                                    </li>
                                    <li className="inlineBlock listButton">
                                        30
                                    </li>
                                    <li className="inlineBlock listButton">
                                        31
                                    </li>
                                </ul>
                                <p><b>Legend:</b></p>
                                
                                <div>
                                    <div className="inlineBlock">
                                        <p>Answered</p>
                                    </div>
                                    <div className="inlineBlock">

                                    </div>
                                </div>

                                
                                <div>
                                    <div className="actions">
                                        <p>View Qp</p>
                                    </div>
                                    <div className="actions">
                                        <p>Instructions</p>
                                    </div>
                                </div>
                                <div className="submitDiv">
                                    <p style={{color: "white"}}><b>Submit</b></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
