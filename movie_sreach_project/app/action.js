"use client";
import DeleteButton from './delete_button';
import LikeDislike_compo from "./like_dislike_button";
import React, { useState} from 'react';
function Action({item,data,setData}){
  return(
        <>
         <DeleteButton item={item} setData={setData} data={data}/>
         <LikeDislike_compo data={data} setData={setData} item={item}/>    
         </>   
        )
}
export default Action;

