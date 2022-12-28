import React, { useState } from 'react';

import "../styles/css/picture.css";

const Picture = ({getIsPicture, getImgSrc}) => {

    //파일 미리볼 url을 저장해줄 state
    const [fileImage, setFileImage] = useState('');
    const [enters, setEnters] = useState([]);

    

    // 파일 저장
    const saveFileImage = e => {
      setEnters(enters => [...enters, URL.createObjectURL(e.target.files[0])]);
      setFileImage(URL.createObjectURL(e.target.files[0]));
    };
  
    // 파일 삭제
    // const deleteFileImage = () => {
    //   URL.revokeObjectURL(fileImage);
    //   setFileImage("");
    // };

    


    // const createPicture = (index) => {

    //   // ctx.clearRect(locationSet, locationSet, bubbleWidth[0], bubbleWidth[0]);
    //   ctxValue.drawImage(img, (locationSet-(bubbleWidth[0]/2)), (locationSet-(bubbleHeight[0]/2)), bubbleWidth[0], bubbleHeight[0]);
  
    //   bubble1X = locationSet
    //   bubble1Y = locationSet
    //   buubleTrue[0] = true;
  
    //   // ctx.beginPath();
    //   // ctx.arc(x, y, 10, 0, 10*Math.PI);
    //   // ctx.stroke();
    
    // }

    const [isPicture, setIsPicture] = useState(false);


    return (
      <>
        <div className="imgFile-container">
          <input name="imgUpload" type="file" accept="image/*"
            onChange={saveFileImage}
          />
                {/* 
                <button
                  style={{
                    backgroundColor: "gray",
                    color: "white",
                    width: "55px",
                    height: "40px",
                    cursor: "pointer",
                  }}
                  onClick={() => deleteFileImage()}
                >
                  삭제
                </button> */}

            <div className="imgFile-content-container">
                {fileImage && (
                  enters.map((ent,index) => (
                    <div id='imgFile' className='imgFile-box' onClick={() => {setIsPicture(true); {getIsPicture(true); getImgSrc(enters[index])}}}>
                      <img src={ent} alt="imgFile" className="imgFile-content"/>
                    </div>))
                )}
                {/* {fileImage && (
                <img
                  alt="img"
                  src={fileImage}
                  style={{height:"50px"}}
                />
              )} */}
            </div>
        </div>
      </>
    );
}

export default Picture;