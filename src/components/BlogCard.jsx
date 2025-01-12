import React from 'react'
import { NavLink } from 'react-router-dom'


export function BlogCard({post}) {
  return (
    <>
    <NavLink to = {`/newsportal/${post.id}`}>

    <div className="flex gap-[16px] w-full h-[194px] p-[16px] shadow-md rounded-[6px] items-center hover:shadow-xl">
        
        <div className= "w-[288px] h-[162px] flex-shrink-0">
          <img src= {post.image} alt= {post.title} className='w-full h-full object-cover rounded-[6px]'/>
        </div>

        <div className='flex flex-col gap-[16px]'>

          <div className='flex flex-col gap-[8px]'>

            <p className=' text-[20px] font-[700] leading-[120%] text-[#262626]'>{post.title}</p>
            <p className='text-[#696969] text-[12px] '>{new Date(post.date).toLocaleDateString('en-US', {dateStyle: 'long'})}</p>     
            <p className='text-[#5D5D5D] text-[14px] w-full overflow-hidden text-ellipsis line-clamp-2'>{post.description}</p>
            
            
          </div>

          <div className='flex gap-[8px] items-center'>

            <div>

              <img src= {post.authorimage} alt= {post.authorname} className='w-[32px] h-[32px] rounded-[360px]'/>

            </div>

            <div className='flex flex-col'>
              <p className='text-[#262626] text-[12px]'>{post.authorname}</p>
              <p className='text-[#5D5D5D] text-[12px]'>{post.authorrole}</p>
            </div>

          </div>

        </div>

      </div>

    </NavLink>
      
    </>
  )
}