'use client'
import './api_data.css';
import Api_data_display from './api_data_display'
import './header.css'
import './like_dislike.css';
import LikeDislikeButton from './like_dislike_compo';
import MyComponent from './api_data';
import Header from './header.js';
function Page(){
     return(
     <>
       <LikeDislikeButton/>
       <Header/>
       <MyComponent/>
     </>
   )
}
export default Page;
