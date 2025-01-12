import React, { useState } from 'react'
import nopostfound from "/images/nopostfound.jpg"
import { BlogCard, FeaturedBlogCard, Search, SearchByDate } from '../components'
import { newsPosts } from '../data'

export function NewBlog() {
  const [searchPost, setSearchPost] = useState("")
  const [sortDate, setSortDate] = useState("descending")

  const filteredPosts= newsPosts
  .filter((post)=> post.title.toLowerCase().includes(searchPost.toLowerCase()))

  .sort((a,b)=>{
    if(sortDate === "ascending"){
      return new Date(a.date) - new Date(b.date)
    } else{
      return new Date(b.date) - new Date(a.date)
    }
  })

  return (
    <>

      <div className='flex flex-col p-[16px] gap-[16px]'>

        <p className='text-[32px] font-bold text-[#262626] text-center'>Blog</p>

        <div className='flex justify-between px-[88px]'>

          <Search searchPost={searchPost} setSearchPost={setSearchPost}/>
          <SearchByDate sortDate={sortDate} setSortDate={setSortDate}/>

        </div>
        

        <div className='grid grid-cols-1 gap-[48px] px-[88px]'>

          {filteredPosts.length>0?(
            <>
                <FeaturedBlogCard
                key={filteredPosts[0].id} 
                post={filteredPosts[0]}
                className= "col-span-2"
               
                />

                {filteredPosts.slice(1).map((post)=>
                (
                  <BlogCard 
                  key={post.id} 
                  post= {post}
                  />
                )
              
            )}

                
            </>
          ): (
            <>
              <div className='flex flex-col gap-[16px] '>
                <p className='text-[#262626] text-[24px]'>No posts found</p>
                <img src= {nopostfound} className='w-[440px]' />
              </div>
              
            </>
            
          )}
            

          
        </div>





      </div>

    

   
    </>
  )
}
