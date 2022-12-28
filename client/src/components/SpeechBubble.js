import React, { useState } from 'react';

import { ReactComponent as Bubble1 } from "../images/bubble/bubble1.svg";
import { ReactComponent as Bubble2 } from "../images/bubble/bubble2.svg";
import { ReactComponent as Bubble3 } from "../images/bubble/bubble3.svg";
import { ReactComponent as Bubble4 } from "../images/bubble/bubble4.svg";
import { ReactComponent as Bubble5 } from "../images/bubble/bubble5.svg";
import { ReactComponent as Bubble6 } from "../images/bubble/bubble6.svg";
import { ReactComponent as Bubble7 } from "../images/bubble/bubble7.svg";
import { ReactComponent as Bubble8 } from "../images/bubble/bubble8.svg";

import "../styles/css/speechBubble.css";


function SpeechBubble({getBubbleNum}) {

  const [bubbleNum, setBubbleNum] = useState(false);

  const img = new Image();
  img.src = "bubble/bubble1-squ.png";
  
    return (
      <>
          <div className="bubbleBox">
            <div className='bubble-content-container' onClick={() => {setBubbleNum(true); getBubbleNum(true);}}>
              <Bubble1 className="bubble"/>
            </div>
            <div className='bubble-content-container' onClick={() => {setBubbleNum(1); getBubbleNum(1);}}>
              <Bubble2 className="bubble"/>
            </div>
            <div className='bubble-content-container' onClick={() => {setBubbleNum(2); getBubbleNum(2);}}>
              <Bubble3 className="bubble"/>
            </div>
            <div className='bubble-content-container' onClick={() => {setBubbleNum(3); getBubbleNum(3);}}>
              <Bubble4 className="bubble"/>
            </div>
            <div className='bubble-content-container' onClick={() => {setBubbleNum(4); getBubbleNum(4);}}>
              <Bubble5 className="bubble"/>
            </div>
            <div className='bubble-content-container' onClick={() => {setBubbleNum(5); getBubbleNum(5);}}>
              <Bubble6 className="bubble"/>
            </div>
            <div className='bubble-content-container' onClick={() => {setBubbleNum(6); getBubbleNum(6);}}>
              <Bubble7 className="bubble"/>
            </div>
            <div className='bubble-content-container' onClick={() => {setBubbleNum(7); getBubbleNum(7);}}>
              <Bubble8 className="bubble"/>
            </div>

          </div>


      </>
    );
  }


  
  export default SpeechBubble;
  
  