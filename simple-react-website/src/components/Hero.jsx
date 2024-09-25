import img from '../assets/images/banner.jpg'
import SubscribeButton from './SubscribeButton';

const Hero = () => {
  return (
    <div className=' my-3 md:my-10 relative'>
      <img src={img} alt="Banner Image" className='h-[500px] w-full rounded-md object-cover'/>
      <div className='absolute top-0 left-0 w-full h-full bg-[#00000027]'></div>
      <div className='w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center gap-5'>
      <h1 className='text-[#5ee6c4] text-4xl font-bold text-center'>Make Your Life Easier With Our Mind-blowing <span className='text-white'>Gadgets....</span></h1>
      <p className='my-4 text-center text-white md:w-3/4 text-xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nesciunt necessitatibus deleniti minus exercitationem. Mollitia, obcaecati ut ullam ducimus accusamus aliquam illo iste voluptas atque et doloremque quasi laborum similique repellendus placeat. Sapiente natus, perferendis minus sint placeat odio quae!
      </p>
      <SubscribeButton />
      </div>
    </div>
  );
};

export default Hero;