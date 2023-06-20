//Others
import about from '../assets/about.png'

export default function About(): JSX.Element {
  return (
    <div className='flex flex-grow bg-[#f5f5f4] items-center'>
      <div className='hidden items-center justify-center p-8 md:w-1/2 md:flex'>
        <img src={about} alt="bowl" className='mb-6'/>
      </div>
      <div className='flex md:w-1/2 flex flex-col md:flex-row'>
        <div className='w-full md:w-1/4 flex items-baseline overflow-hidden justify-center my-4 md:my-0 px-4'>
          <h3 className='bebas text-9xl items-center text-white md:text-[7rem] md:[writing-mode:vertical-rl] md:transform md:-rotate-180 md:py-16 xl:text-[8rem]'>
            ABOUT US
          </h3>
        </div>
        <div className='w-full md:w-3/4 flex justify-center items-center'>
          <div className='md:border-l-2 md:border-gray-500 pl-4 pr-4 md:pr-16'>
            <p className='text-lg mb-8 noto text-center md:text-left'>
              "Quiet from" is our small family art studio, the place where we express all our creativity and love or natural materials.
            </p>
            <p className='text-lg mb-8 noto text-center md:text-left'>
              Based on our deep love for nature we try to find the balance in art and craft, to endow things with alive emotions and simple beauty.
              "Quiet form" is about the sthetic details in your everyday life.
              Apoint to notice that your life is a work of art.
            </p>
            <p className='text-lg mb-8 noto text-center md:text-left'>
              Thank you, friend, for stopped here.
            </p>
            <p className='text-lg mb-8 noto text-center md:text-left'>
              With sincerity and gratitude.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
