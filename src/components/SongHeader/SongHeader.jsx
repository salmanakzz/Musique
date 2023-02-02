import React from 'react'

export const SongHeader = () => {
  return (
    <div className='flex justify-start gap-[20rem] ml-2 mb-[.4rem]'>
        <h1 className='font-normal'>SONG NAME</h1>
        <div className='flex gap-[11rem]'>
        <h1 className='font-normal'>SOURCE</h1>
        <h1 className='font-normal'>ADDED ON</h1>
        </div>
    </div>
  )
}
