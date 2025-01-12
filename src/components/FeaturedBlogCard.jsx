import React from 'react'
import { NavLink } from 'react-router-dom'



export function FeaturedBlogCard({post, className}) {
  return (
    <>
    <NavLink to = {`/${post.id}`}>

    <div className={`flex gap-[24px] w-full h-[320px] p-[24px] shadow-md rounded-[12px] items-center ${className} hover:shadow-xl`}>
        
        <div className="w-[512px] h-[288px] flex-shrink-0">
          <img src= {post.image} alt= {post.title} className='w-full h-full object-cover rounded-[12px]'/>
        </div>

        <div className='flex flex-col gap-[24px] '>

          <div className='flex flex-col gap-[16px]'>

            <p className=' text-[32px] font-[700] leading-[130%] text-[#262626] '>{post.title}</p>
            <p className='text-[#696969] text-[14px] '>{new Date(post.date).toLocaleDateString('en-US', {dateStyle: 'long'})}</p>
            <p className='text-[#5D5D5D] text-[16px] w-full overflow-hidden text-ellipsis line-clamp-2'>{post.description}</p>
            
            
          </div>

          <div className='flex gap-[12px] items-center'>

            <div>

              <img src= {post.authorimage} alt= {post.authorname} className='w-[40px] h-[40px] rounded-[360px]'/>

            </div>

            <div className='flex flex-col gap-[2px] '>
              <p className='text-[#262626] text-[14px]'>{post.authorname}</p>
              <p className='text-[#5D5D5D] text-[14px]'>{post.authorrole}</p>
            </div>

          </div>

        </div>

      </div>

    </NavLink>
      
      
      
    </>
  )
}