import Image from 'next/image'
import BlackHole from '@/components/icons/blackhole'
import kaejText from '/src/components/kaej.png'
import pixelblackhole from '/src/components/pixelblackhole.png'



export default function Home() {
  return (
    <div className="flex-column justify-center">
      <div className='flex justify-center py-5'>
        <Image src={kaejText} width={250} height={500} alt='"kaej" written in block letters.'></Image>
      </div>
      <div className='flex-row'>
        <div className='flex justify-center align-center py-5'>
          <Image src={pixelblackhole} width={300} height={200} alt='a black hole logo in a pixelated style'></Image>
        </div>
        
      </div>
      {/* <BlackHole fill='white' width={500} height={500} ></BlackHole> */}
    </div>
  )
}
