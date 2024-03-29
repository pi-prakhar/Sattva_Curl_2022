/*eslint-disable*/
import React, { useEffect, useState } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';
// import ImageListItemBar from '@mui/material/ImageListItemBar';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// import Card from "components/Card/CardTwitterImages";

// import Button from "components/CustomButtons/Button.js"
import Heading from "components/Heading/Heading.js";

import Card from "components/Card/CardTwitterImages";

import PopupModal from "./PopupModalReject";

import "./TwitterImages.css";

import Image1 from "assets/sattvaimg/1.png";
import Image2 from "assets/sattvaimg/2.png";

import styles from "assets/jss/material-dashboard-pro-react/views/chartsStyle.js";
// import Image from "@material-ui/icons/Image";
// import { isTemplateExpression } from "typescript";
import { ImageListItemBar } from "@mui/material";

const useStyles = makeStyles(styles);

export default function AICaptured() {
  const classes = useStyles();
  const [tweetData, setTweetData] = useState([])
  const [open, setOpen] = useState(false);
  const [imageUrl,setImageUrl] = useState()
  const [tweetId,setTweetId] = useState()
  const [userName,setUserName] = useState()
  const [createdAt,setCreatedAt] = useState()

  return (
    <div>
      <Heading
         textAlign="center"
                 title="AI Camera Captured"
                 category={
                   <span>
                     Displays all the images captured by the camera installed in the park.<br /> 
                   </span>
                 }
      />
      {/* <div className="cardImage">
        {tweetData.map((item) => (
          <Card 
            className="cardContent"
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>  
              <img src={item.media_url} alt="..." />
              {ishover && (
                <Button 
                  onClick={() => setOpen(true)}
                  color="primary"
                >
                  View
                </Button>
              )}  
            <PopupModal open={open} setOpen={setOpen} image={item.media_url}/>
          </Card>
          
          ))}</div> */}
      {/* <div className="cardImage"> */}
        <ImageList cols={4} rowHeight={200}>
            <ImageListItem className="cardContent">
              <img
                width = "250px"
                height = "200px"
                src="https://res.cloudinary.com/pawasthi961/image/upload/v1643907421/content_6_gh9hit.jpg"
                // src = {`${item.media_url}?w=248&fit=crop&auto=format`}
                // srcSet={`${item.media_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                
                loading="lazy"
                maxHeight= '200px'
              


              />
              
            </ImageListItem>
            <ImageListItem  className="cardContent">
              <img
                width = "250px"
                height = "200px"
                src="https://res.cloudinary.com/pawasthi961/image/upload/v1643907491/content_7_b5uqnj.jpg"
                // src = {`${item.media_url}?w=248&fit=crop&auto=format`}
                // srcSet={`${item.media_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                
                loading="lazy"
                maxHeight= '200px'
              


              />
              
            </ImageListItem>
         
        </ImageList>
      {/* </div> */}
    </div>
  );
}
// /*eslint-disable*/
// import React from "react";
// import { useState } from "react";

// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";

// // core components
// import Heading from "components/Heading/Heading.js";
// import Button from "components/CustomButtons/Button.js";

// import Card from "components/Card/CardTwitterImages";

// import "./TwitterImages.css";
// import PopupModal from "./PopupModalReject";

// import Image1 from "assets/sattvaimg/1.png";
// import Image2 from "assets/sattvaimg/2.png";
// import Image3 from "assets/img/ex2.jpg";
// import Image4 from "assets/img/ex1.jpg";
// import Image5 from "assets/img/exwidth.jpg";
// import Image6 from "assets/img/sidebar-1.jpg";

// export default function RejectedImages() {
//   const [ishover, setIsHover] = useState(false); 
//   const [open, setOpen] = useState(false);

//   return (
//     <div>
//       <Heading
//         textAlign="center"
//         title="Rejected Images"
//         category={
//           <span>
//             Displays all the rejected images.<br />
//           </span>
//         }
//       />
//           <div className="cardImage">
//             <Card 
//               className="cardContent"
//               onMouseOver={() => setIsHover(true)}
//               onMouseLeave={() => setIsHover(false)}>  
//               <img src={Image1} alt="..." />
//               {ishover && (
//                 <Button 
//                   onClick={() => setOpen(true)}
//                   color="primary"
//                 >
//                   View
//                 </Button>
//               )}  
//               <PopupModal open={open} setOpen={setOpen} image={Image3}/>
//             </Card>
//             <Card 
//               className="cardContent"
//               onMouseOver={() => setIsHover(true)}
//               onMouseLeave={() => setIsHover(false)}>  
//               <img src={Image4} alt="..." />
//               {ishover && (
//                 <Button 
//                   onClick={() => setOpen(true)}
//                   color="primary"
//                 >
//                   View
//                 </Button>
//               )}  
//               <PopupModal open={open} setOpen={setOpen} image={Image3}/>
//             </Card>
//             <Card>
//               <img src={Image2} alt="..." />
//             </Card>
//             <Card>
//               <img src={Image3} alt="..." />
//             </Card>
//             <Card>
//               <img src={Image4} alt="..." />
//             </Card>
//             <Card>  
//             <img src={Image5} alt="..."/>
//             </Card>
//             <Card>
//               <img src={Image6} alt="..." />
//             </Card>
//           </div>
//     </div>
//   );
// }

// /*eslint-disable*/
// import React from "react";
// import { useState } from "react";

// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";

// // core components
// import Heading from "components/Heading/Heading.js";
// import Button from "components/CustomButtons/Button.js";

// import Card from "components/Card/CardTwitterImages";

// import "./TwitterImages.css";
// import PopupModal from "./PopupModal";

// import Image1 from "assets/sattvaimg/1.png";
// import Image2 from "assets/sattvaimg/2.png";
// import Image3 from "assets/img/ex2.jpg";
// import Image4 from "assets/img/ex1.jpg";
// import Image5 from "assets/img/exwidth.jpg";
// import Image6 from "assets/img/sidebar-1.jpg";

// export default function AICaptured() {
//   const [ishover, setIsHover] = useState(false); 
//   const [open, setOpen] = useState(false);

//   return (
//     <div>
//       <Heading
//         textAlign="center"
//         title="AI Camera Captured"
//         category={
//           <span>
//             Displays all the images captured by the camera installed in the park.<br /> 
//           </span>
//         }
//       />
//           <div className="cardImage">
//             <Card 
//               className="cardContent"
//               >  
//               <img src="https://res.cloudinary.com/pawasthi961/image/upload/v1643907421/content_6_gh9hit.jpg" alt="..." />
//               {ishover && (
//                 <Button 
//                   onClick={() => setOpen(true)}
//                   color="primary"
//                 >
//                   View
//                 </Button>
//               )}  
              
//             </Card>
//             <ImageList cols={4} rowHeight={200}>
//           {tweetData.map((item) => (
//             <ImageListItem key={item._id["$oid"]} className="cardContent">
//               <img
//                 width = "250px"
//                 height = "200px"
//                 src={item.media_url}
//                 // src = {`${item.media_url}?w=248&fit=crop&auto=format`}
//                 // srcSet={`${item.media_url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
//                 alt={item.title}
//                 loading="lazy"
//                 maxHeight= '200px'
              


//               />
//               <ImageListItemBar
                
//                 subtitle={<span>by: {item.user_handle}</span>}
//                 actionIcon={
//                   <Tooltip title="info" placement="top-start">
//                     <IconButton
//                       onClick = {()=>{
                  
//                         setOpen(true),
//                         setImageUrl(item.media_url),
//                         setCreatedAt(item.created_at),
//                         setTweetId(item.source),
//                         setUserName(item.user_handle)
//                       }}

//                       sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//                       aria-label={`info about ${item.user_handle}`}
//                     >
//                       <InfoIcon />
//                     </IconButton>
//                   </Tooltip>
//               }
//               />
//             </ImageListItem>
//             {/* <Card 
//               className="cardContent"
//               >  
//               <img src="https://res.cloudinary.com/pawasthi961/image/upload/v1643907491/content_7_b5uqnj.jpg" alt="..." />
//               {ishover && (
//                 <Button 
//                   onClick={() => setOpen(true)}
//                   color="primary"
//                 >
//                   View
//                 </Button>
//               )}  
              
//             </Card> */}
            
//           </div>
//     </div>
//   );
// }
