import React from 'react'
import './loader.css'
const LoadingScreen = () => {
  return (
    <div class='loading'>
        <div class='logo'></div>
        <div class='dots animate'>
            <div class='dot'></div>
            <div class='dot'></div>
            <div class='dot'></div>
            <div class='dot'></div>
            <div class='dot'></div>
        </div>
    </div>
  )
}



export default LoadingScreen
