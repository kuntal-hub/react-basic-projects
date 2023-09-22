import React,{memo} from 'react'

export default memo(function Example(props) {
    console.log("renderd")
  return (
    <>
    <div>{props.text}</div>
    <button onClick={props.update}>press me {props.up}</button>
    </>
  )
})
