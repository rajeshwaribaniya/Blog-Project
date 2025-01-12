import React from 'react'

export function SearchByDate({sortDate, setSortDate}) {
  return (
    <>
     <div className='flex items-center gap-[8px]'>
        <label className='text-[#5D5D5D]'>Sort by Published Date:</label>
        <select
        value={sortDate}
        onChange={(e)=> setSortDate(e.target.value)}
        className='px-[12px] py-[8px] text-[#262626] border border-border-primary rounded-[8px] focus:outline-none '
        >
            <option value="descending">Newest to Oldest</option>
            <option value="ascending">Oldest to Newest</option>
        </select>
     </div>
    </>
  )
}