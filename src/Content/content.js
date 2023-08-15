import React from "react";
import ContentImage from '../images/contentimage.png'
import Logo from '../images/Logo.png';
import Logo2 from '../images/Logo2.png';
import Pic1 from '../images/Mobilelogo.png';
import Pic2 from '../images/Mobilelogo2.png';
import Pic3 from '../images/Mobioelogo3.png';
import Pic4 from '../images/Mobilelogo4.png';
import Pic5 from '../images/Mobielogo5.png';
import Pic6 from '../images/Mobilelogo6.png';

import NoteAltIcon from '@mui/icons-material/NoteAlt';

import '../Content/content.css';
import { Box, Container } from "@mui/material";

const content = () => {
    return (
        <div >
            <div className="head">
                <div>
                    <h1>Your window of <br /> opportunity to grow<br /> digitally!</h1>
                    <button className="btn">Connect Now</button>
                </div>
                <div className="imageContainer">
                    <div className="stickerBackground"></div>
                    <img src={ContentImage} className="sticker"></img>
                </div>

            </div>
            <div className="head">
                <div className="imageContainer">
                    <img className="sticker2" src={Logo2}></img>
                </div>
                <div className="cont1">
                    <h1 className="heading1">#TSWCollective </h1>
                    <h4>The Social Window is a bunch of creative heads who are always <br /> enthusiastic about trends, ideas and creating amazing content.<br /> We strive to deliver our services, customized especially for your brand to  be visible to the world! </h4>
                    <div className="cont2">
                        <h2 className="heading2">Content Creation & Planning </h2>
                        <div className="cont3">
                            <NoteAltIcon className="icon" fontSize='large' />
                            <h4 className="cont5">We make sure the content that we create is <br /> unique and trending in its own way for extensive visibility. </h4>
                        </div>
                    </div>
                    <div className="cont2">
                        <h2 className="heading2">Graphic Designing </h2>
                        <div className="cont3">
                            <NoteAltIcon className="icon" fontSize='large' />
                            <h4 className="cont5">We make sure the content that we create is <br /> unique and trending in its own way for extensive visibility. </h4>
                        </div>
                    </div>
                    <div className="cont2">
                        <h2 className="heading2">Marketing & Optimisation </h2>
                        <div className="cont3">
                            <NoteAltIcon className="icon" fontSize='large' />
                            <h4 className="cont5">We make sure the content that we create is <br /> unique and trending in its own way for extensive visibility. </h4>
                        </div>
                    </div>
                </div>

            </div>
            <div >
                <Container maxWidth="fit-content">
                    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
                        <div className="piccontainer">
                            <p>Our Services</p>
                            <p className="service">Here’s what we offer! </p>
                            <img src={Pic1} className="piccont"></img>
                            <img src={Pic2} className="piccont"></img>
                            <img src={Pic3} className="piccont"></img>
                        </div>
                        <div className="piccontainer">
                            <img src={Pic4} className="piccont"></img>
                            <img src={Pic5} className="piccont"></img>
                            <img src={Pic6} className="piccont"></img>
                        </div>
                    </Box>
                </Container>


            </div>
        </div>
    );
};

export default content;