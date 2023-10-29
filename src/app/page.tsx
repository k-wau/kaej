'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'
import kaejText from '/src/components/kaej.png'
import pixelblackhole from '/src/components/pixelblackhole.png'
import rightarrow from '/src/components/rightarrow.png'
import leftarrow from '/src/components/leftarrow.png'

export default function Home() {

  useEffect(() => {
    const [isHovered, setIsHovered] = useState(false)
    const leftArrowSound = document.getElementById("leftArrowSound") as HTMLAudioElement
    const rightArrowSound = document.getElementById("rightArrowSound") as HTMLAudioElement
    const blackHoleSound = document.getElementById("blackHoleSound") as HTMLAudioElement

    const handleMouseEnterLeftArrow = () => {
      setIsHovered(true);
      leftArrowSound.play();
    }
    const handleMouseLeaveLeftArrow = () => {
      setIsHovered(false);
      leftArrowSound.pause();
      leftArrowSound.currentTime = 0;
    }

    const handleMouseEnterRightArrow = () => {
      setIsHovered(true);
      rightArrowSound.play();
    }
    const handleMouseLeaveRightArrow = () => {
      setIsHovered(false);
      rightArrowSound.pause();
      rightArrowSound.currentTime = 0;
    }

    const handleMouseEnterBlackHole = () => {
      setIsHovered(true);
      blackHoleSound.play();
    }
    const handleMouseLeaveBlackHole = () => {
      setIsHovered(false);
      blackHoleSound.pause();
      blackHoleSound.currentTime = 0;
    }
  }, [])



  
  
  // useEffect(() => {
  //   const backgroundMusic = document.getElementById("backgroundMusic") as HTMLAudioElement
  //   if (backgroundMusic) {
  //     backgroundMusic.play()
  //   }
  // }, [])

  return (
    <div className="flex flex-col h-screen">
      <div className='flex justify-center py-5'>
        <Image src={kaejText} 
          width={300} 
          height={500} 
          alt='"kaej" written in block letters.'>
        </Image>
      </div>
      <div className='flex-grow flex justify-center items-center'>
        <div className='flex items-center justify-between w-full'>
          <div className='enlargify-left px-10' onMouseEnter={handleMouseEnterLeftArrow} onMouseLeave={handleMouseLeaveLeftArrow}>
            <Image src={leftarrow}
              width={200}
              height={200}
              alt='a left pointing arrow'>
            </Image>
          </div>
          <div className='enlargify-center px-10' onMouseEnter={handleMouseEnterBlackHole} onMouseLeave={handleMouseLeaveBlackHole}>
            <Image src={pixelblackhole}
              width={400}
              height={400}
              alt='a black hole logo in a pixelated style'>
            </Image>
          </div>
          <div className='enlargify-right px-10' onMouseEnter={handleMouseEnterRightArrow} onMouseLeave={handleMouseLeaveRightArrow}>
            <Image src={rightarrow}
              width={200} 
              height={200}
              alt='a right pointing arrow'>
            </Image>
          </div>
        </div>
      </div>
      <div className='flex justify-center pt-5 text-lg'>
        ... / - / .-. / . / .- / -- / -.- / .-- / .- / ..-
      </div>
      <div className='flex justify-center pb-5 text-lg'>
        sound on :smile:
      </div>
    </div>
  )
}