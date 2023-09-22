import React from 'react'

export default function Button({color,chengeColor}) {
  return (
    <>
    <button className="p-3 rounded" style={{backgroundColor:color}} onClick={()=>{chengeColor(color)}}>{color}</button>
    </>
  )
}
