import { memo } from "react"
import React from 'react'

export default memo(function New({color="red"}) {
    console.log("first")
  return (
    <h1>hello {color}</h1>
  )
})
