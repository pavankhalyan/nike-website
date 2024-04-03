import Button from "../components/Button";
import { arrowRight } from "../nike_landing_assets/assets/icons";
import { shoe8 } from "../nike_landing_assets/assets/images";


const SuperQuality = () => {
  return (
    <section id = "about-us"
    className="flex justify-center items-center max-lg:flex-col gap-10 w-full max-container">
    <div className="flex flex-1 flex-col">
      <h2> 

    <h2 className=' font-palanquin text-4xl  capitalize  font-bold lg:max-w-lg'>
     We provide you
    <span className='text-coral-red'>super</span>
    <span className='text-coral-red'>Quality</span>
    </h2>
    <p className='mt-4 lg:max-w-lg info-text'>ensuring premium comfort and style, our meticulosly crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
    <p className="mt-6 lg:max-w-lg info-text"> our dedication to detail and excellence ensures your satisfaction </p>
    </h2>
    <div className=" mt-11 flex flex-wrap gap-4">
    <Button label = "shop now"
    iconURL={arrowRight}/> 
     </div>
    </div>

    <div className=" flex flex-1 justify-center items-center">
      <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
    </div>
    </section>
  )
}

export default SuperQuality