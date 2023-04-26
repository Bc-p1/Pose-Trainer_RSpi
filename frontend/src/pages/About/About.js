import React from 'react'

import './About.css'

export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading">About</h1>
            <div className="about-main">
                <p className="about-content">
                    This is an realtime AI based Yoga Trainer which detects your pose how well you are doing.
                    I created this as a personal project, and I have also deployed this project
                    so people can use it and mainly the developers can who are learning AI can learn 
                    from this project and make their own AI or they can also improve in this project.
                    This is an open source project, The code is available on the GitHub - <a> href="https://github.com/Bc-p1/Pose_Trainer.git"</a>
                    
                    This AI first predicts keypoints or coordinates of different parts of the body(basically where
                    they are present in an image) and then it use another classification model to classify the poses if 
                    someone is doing a pose and if AI detects that pose more than 95% probability and then it will notify you are 
                    doing correctly(by making virtual skeleton green). I have used Tensorflow pretrained Movenet Model To Predict the 
                    Keypoints and building a neural network top of that which uses these coordinates and classify a yoga pose.

                    I have trained the model in python because of tensorflowJS we can leverage the support of browser so I converted 
                    the keras/tensorflow model to tensorflowJS.
                </p>
                <div className="developer-info">
                    <h4>Developed by</h4>
                    <p className="about-content">

                        
                    </p>
                    <h4>Reference</h4>
                    <a href="https://arxiv.org/abs/2006.11718"><p className="about-content">[1] Steven Chen ,Richard R. Yang,”Pose Trainer: Correcting Exercise Posture using Pose Estimation”,arXiv:2006.11718v1 [cs.CV] 21 Jun 2020</p></a>
                    <a href="https://www.itm-conferences.org/articles/itmconf/pdf/2021/05/itmconf_icacc2021_03031.pdf"><p  className="about-content">[2] Rahul Ravikant Kanase ,Akash Narayan Kumavat ,Rohit Datta Sinalkar ,Sakshi Somani ,”Pose Estimation and Correcting Exercise Posture” ,ITM Web of Conferences 40, 03031 (2021)</p></a>
                    <h4>Contact</h4>
                    <a href="https://github.com/Bbncp"><p  className="about-content">GitHub</p></a>
                </div>
            </div>
        </div>
    )
}
