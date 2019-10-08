import '../../node_modules/antd/dist/antd.css';
import React, { Component } from 'react';
import { Row, Col, Icon, Radio, Input } from 'antd';
// const userIcon = require('../../public/logo192.png');

import "../scss/jeemaintempl.scss";
export default class Jeemaintempl extends Component {
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
                        <div style={{ padding: "2vh 0px 1.8vh 16vw", width: "100%" }} className="inlineBlock">
                            <div className="inlineBlock">
                                <h1 style={{ color: "red" }}>CLIENT LOGO</h1>
                            </div>
                            <div className="inlineBlock" style={{ marginRight: "auto", float: "right" }}>
                                <div style={{ marginTop: "5px" }} className="inlineBlock profileImg">
                                    <Icon style={{ fontSize: "76px" }} type="user" />
                                </div>
                                <div className="inlineBlock">
                                    {/* <h2 style={{ color: "white",lineHeight: "60px" }}>CLIENT LOGO</h2> */}
                                    <div className="profiledetail">
                                        <div className="name_sctn">
                                            <span className="txt_namehdng">Candidate Name</span>
                                            <span className="name_txt">: [Your Name]</span>
                                        </div>
                                        <div className="name_sctn">
                                            <span className="txt_namehdng">Subject Name</span>
                                            <span className="name_txt">: [Test Practice]</span>
                                        </div>
                                        <div className="name_sctn">
                                            <span className="txt_namehdng">Candidate Name</span>
                                            <span className="name_txt">: <span className="timer-title time-started">01:54:05</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="topBar2">
                    <div className="clientLogo">
                        <div style={{ padding: "12px 280px 8px 170px", width: "100%" }} className="inlineBlock">
                            <div className="inlineBlock">
                                {/* <h1 style={{ color: "red" }}>CLIENT LOGO</h1> */}

                                <div className="subtabs">
                                    <div className="subname">
                                        <h2>JEE MAIN</h2>
                                    </div>
                                    <div className="subname" style={{ backgroundColor: "#0098DA" }}>
                                        <h2>PHTSICS</h2>
                                    </div>
                                    <div className="subname" style={{ backgroundColor: "#0098DA" }}>
                                        <h2>CHEMISTRY</h2>
                                    </div>
                                    <div className="subname" style={{ backgroundColor: "#0098DA" }}>
                                        <h2>MATHEMATICS</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="inlineBlock" style={{ marginRight: "auto", float: "right" }}>
                                <div style={{ marginTop: "5px" }} className="inlineBlock profileImg">
                                    <p style={{ color: "white" }}>
                                        Paper Language:
                                    </p>
                                    <select style={{ marginTop: "-20px" }}>
                                        <option value="en">English</option>
                                        <option value="in">Hindi</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ padding: "10px" }}>
                    <Row>
                        <Col style={{ padding: "14px 80px 10px 170px", width: "70%" }} className="tempBor" lg={10} md={10} sm={22}>
                            <div style={{border : "1px solid #f0f0f0",padding : "5px",height: "400px",overflow: "scroll"}}>
                            <br></br>
                            <h3>Question 1:</h3>
                            <hr></hr>
                            <div style={{ padding: "10px", width: "80%" }} className="inlineBlock">
                                <div className="inlineBlock">
                                    <p style={{ fontSize: "16px",textAlign: "left" }}> 1. Did you enjoy this experience? Yes Not Sure The time allotted for the test was Sufficient Not Sufficie Not Sure The time allotted for the test was Sufficient Not Sufficie</p>
                                </div>
                                <div className="inlineBlock">
                                    <div>
                                        <img style={{ height: "200px", maxWidth: "320px" }} src={require('../assests/qp.jpg')} />
                                    </div>
                                </div>
                            </div>

                            <div style={{ padding: "10px", width: "100%", marginBottom: "30px" }} className="inlineBlock">
                                <div>
                                    <p style={{ fontSize: "16px",textAlign: "justify"  }}> <b>{" "}Options</b></p>
                                </div>
                                <div>
                                    <div>
                                        <Radio.Group style={{padding : "20px"}} name="radiogroup" defaultValue={1}>
                                            <Radio style={{padding : "auto 20px auto auto"}} value={1}>1) hello world</Radio>
                                            <Radio style={{padding : "auto 20px auto auto"}} value={2}>2) B hello world</Radio>
                                            <Radio style={{padding : "auto 20px auto auto"}} value={3}>3) C hello world</Radio>
                                            <Radio style={{padding : "auto 20px auto auto"}} value={4}>4) D hello world</Radio>
                                        </Radio.Group>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="subtabs">
                                    <div className="subname" style={{backgroundColor: "#5CB85C" }}>
                                        <h4>SAVE & NEXT</h4>
                                    </div>
                                    <div className="subname" style={{ backgroundColor: "#F0AD4E"  }}>
                                        <h4>SAVE & MARK FOR REVIEW</h4>
                                    </div>
                                    <div className="subname" style={{ backgroundColor: "#FFFFFF",border : "1px solid #f0f0f0", }}>
                                        <h4 style={{color: "black"}}>CLEAR RESPONSE</h4>
                                    </div>
                                    <div className="subname" style={{ backgroundColor: "#0098DA"  }}>
                                        <h4>MARK FOR REVIEW & NEXT</h4>
                                    </div>
                                </div>
                            <div className="bottomBar">
                                <div className="clientLogo">
                                    <div style={{ padding: "10px", width: "100%" }} className="inlineBlock">
                                        <div className="inlineBlock fullScreen fsi" style={{ marginRight: "10px",backgroundColor: "#FFFFFF" }}>
                                            <p style={{ lineHeight: "30px" }}><b> {"<<"} Back </b></p>
                                        </div>
                                        <div style={{backgroundColor: "#FFFFFF"}} className="inlineBlock fullScreen fsi">
                                            <p style={{ lineHeight: "30px", }}><b> Next {">>"} </b></p>
                                        </div>
                                        <div className="inlineBlock fullScreen fsi" style={{ marginRight: "auto", float: "right", backgroundColor: "#F0AD4E"  }}>
                                            <p style={{ lineHeight: "30px",color: "white" }}><b>SUBMIT</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Col>

                        <Col style={{ padding: "10px" }} className="tempBor" lg={6} md={6} sm={22}>
                            <div>
                                {/* <div className="inlineBlock">
                                    <Icon style={{ fontSize: "60px" }} type="user" />
                                </div>
                                <div className="inlineBlock" style={{ marginLeft: "20px" }}>
                                    <p style={{ lineHeight: "60px", fontSize: "16px" }}>Time Left: 02:01:20</p>
                                </div> */}
                                <div>
                                        <div className="inlineBlock">
                                            <p><img style={{ height: "120px", width: "auto", maxWidth: "295px" }} src={require('../assests/ss2.png')} />
                                            </p>
                                        </div>
                                        <div className="inlineBlock">
                                        </div>
                                    </div>
                            </div>
                            <div className="listDiv">
                                {/* <p style={{ textAlign: "center" }}><b>Question Plate</b></p> */}
                                <ul style={{ padding: "5px",height: "300px",overflow: "scroll" }}>
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
                                    </li><li className="inlineBlock listButton">
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
                                </ul>
                                
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
