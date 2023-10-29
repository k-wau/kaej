import Image from 'next/image'

import kaejText from '/src/components/kaej.png'
import pixelblackhole from '/src/components/pixelblackhole.png'
import rightarrow from '/src/components/rightarrow.png'
import leftarrow from '/src/components/leftarrow.png'



export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className='flex justify-center py-5'>
        <Image src={kaejText} 
          fill={true}
          alt='"kaej" written in block letters.'>
        </Image>
      </div>
      <div className='flex-grow flex justify-center items-center'>
        <div className='flex items-center justify-between w-full'>
          <div className='enlargify-left px-10'>
            <Image src={leftarrow}
              fill={true}
              alt='a left pointing arrow'>
            </Image>
          </div>
          <div className='enlargify-center px-10'>
            <Image src={pixelblackhole}
              fill={true}
              alt='a black hole logo in a pixelated style'>
            </Image>
          </div>
          <div className='enlargify-right px-10'>
            <Image src={rightarrow}
              width={200} 
              height={200}
              alt='a right pointing arrow'>
            </Image>
          </div>
          
        </div>
      </div>
      <div className='flex justify-center py-5 text-lg'>
        ... / - / .-. / . / .- / -- / -.- / .-- / .- / ..-
      </div>
    </div>
  )
}
