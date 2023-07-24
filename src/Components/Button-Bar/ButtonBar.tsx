import React, { MouseEventHandler } from 'react'

interface customButtonProps{
    handleClickAccept?: MouseEventHandler<HTMLButtonElement>
    handleClickReject?: MouseEventHandler<HTMLButtonElement>
}

const ButtonBar = ({handleClickAccept,handleClickReject}: customButtonProps) => {
  return (
    <div className='flex gap-3 justify-center items-center bg-white w-full py-4'>
      <button className= "border-2 border-gray-100 rounded text-gray-800 h-14" disabled = {false} onClick={handleClickReject}><span className='text-gray-100 p-7 text-center'>No Thanks</span></button>
      <button className="border-2 border-gray-100 rounded bg-black h-14 text-white" disabled = {false} onClick={handleClickAccept} ><span className='text-gray-100 p-7 text-center'>I'll Take it</span></button>
    </div>
  )
}

export default ButtonBar
