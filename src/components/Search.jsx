import React, { useState } from 'react'

export function Search({searchPost, setSearchPost}) {

   
  return (
    <>
    <input 
    className='px-[16px] py-[12px] text-text-tertiary text-[16px] leading-[100%] border border-border-primary rounded-[8px] w-[400px] focus:outline-none focus:border-[#262626]' 
    type="text" 
    placeholder='Search posts'
    value={searchPost}
    onChange={(e)=> setSearchPost(e.target.value)}
     />
    </>
  )
}