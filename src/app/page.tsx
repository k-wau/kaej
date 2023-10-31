'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import kaejText from '/src/components/kaej.png'
import pixelblackhole from '/src/components/pixelblackhole.png'
import rightarrow from '/src/components/pixelGithubLogo.png'
import leftarrow from '/src/components/pixelSpotifyLogo.png'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)
  const [bgMusicPlaying, setBgMusicPlaying] = useState(false)

  useEffect(() => {
    const leftArrowSound = document.getElementById("leftArrowSound") as HTMLAudioElement
    const rightArrowSound = document.getElementById("rightArrowSound") as HTMLAudioElement
    const blackHoleSound = document.getElementById("blackHoleSound") as HTMLAudioElement
    const backgroundMusic = document.getElementById("backgroundMusic") as HTMLAudioElement

    const handleMouseEnterLeftArrow = () => {
      setIsHovered(true)
      leftArrowSound.currentTime = 0
      leftArrowSound.play()
    }
    const handleMouseLeaveLeftArrow = () => {
      setIsHovered(false)
    }
  
    const handleMouseEnterRightArrow = () => {
      setIsHovered(true)
      rightArrowSound.currentTime = 0
      rightArrowSound.play()
    }
    const handleMouseLeaveRightArrow = () => {
      setIsHovered(false)
    }
  
    const handleMouseEnterBlackHole = () => {
      setIsHovered(true)
      blackHoleSound.currentTime = 0
      blackHoleSound.play()
    }
    const handleMouseLeaveBlackHole = () => {
      setIsHovered(false)
      blackHoleSound.pause()
    }

    const toggleMusic = () => {
      if (!bgMusicPlaying) {
        setBgMusicPlaying(true)
        backgroundMusic.play()
      } else {
        setBgMusicPlaying(false)
        backgroundMusic.pause()
        backgroundMusic.currentTime = 0
      }
    }

    const leftArrow = document.getElementById("leftArrow")
    const rightArrow = document.getElementById("rightArrow")
    const blackHole = document.getElementById("blackHole")
    const titleCard = document.getElementById("titleCard")

    leftArrow?.addEventListener("mouseenter", handleMouseEnterLeftArrow)
    leftArrow?.addEventListener("mouseleave", handleMouseLeaveLeftArrow)

    rightArrow?.addEventListener("mouseenter", handleMouseEnterRightArrow)
    rightArrow?.addEventListener("mouseleave", handleMouseLeaveRightArrow)

    blackHole?.addEventListener("mouseenter", handleMouseEnterBlackHole)
    blackHole?.addEventListener("mouseleave", handleMouseLeaveBlackHole)

    titleCard?.addEventListener("click", toggleMusic)
  }, [bgMusicPlaying, setBgMusicPlaying, isHovered, setIsHovered])

  return (
    <div className="flex flex-col h-screen bg-black">
      <div className='flex justify-center py-5'>
        <Image id='titleCard' 
          src={kaejText} 
          width={300} 
          height={500} 
          alt='"kaej" written in block letters.'>
        </Image>
      </div>
      <div className='flex-grow flex justify-center items-center px-10'>
        <div className='flex items-center justify-between w-full'>
          <div id='leftArrow' className='enlargify-left px-10'>
            <a href='https://open.spotify.com/artist/47AOxDNgXOfcPeWEF3k2Kq?si=1k8kEFoWSaC9CGylo62oXQ'>
              <Image src={leftarrow}
                width={200}
                height={200}
                alt='the spotify logo in a pixel style'/>
            </a>
          </div>
          <div id='blackHole' className='enlargify-center px-10'>
            <a>
              <Image src={pixelblackhole}
                width={400}
                height={400}
                alt='a black hole logo in a pixelated style'/>
            </a>
          </div>
          <div id='rightArrow' className='enlargify-right px-10'>
            <a href='https://github.com/k-wau'>
              <Image src={rightarrow}
                width={200} 
                height={200}
                alt='the github logo in a pixel style'/>
            </a>
          </div>
        </div>
      </div>
      <div className='flex justify-center pt-5 text-lg'>
        ... / - / .-. / . / .- / -- / -.- / .-- / .- / ..-
      </div>
      <div className='flex justify-center pb-5 text-lg'>
        sound on :smile: (if sounds arent playing just click anywhere and itll work)
      </div>
    </div>
  )
}