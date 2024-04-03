import { offer } from "../nike_landing_assets/assets/images"

import Button from "../components/Button"
import { arrowRight } from "../nike_landing_assets/assets/icons"

const SpecialOffer = () => {
  return (
    <section className=" flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
      <h2> 

    <h2 className=' font-palanquin text-4xl  capitalize  font-bold lg:max-w-lg'>
    <span className='text-coral-red'>special</span>
    offer 
    </h2>
    <p className='mt-4 lg:max-w-lg info-text'>Embark on a shopping journey that redifines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets apart.</p>
    <p className="mt-6 lg:max-w-lg info-text">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expection, Your journey with us is nothing short of expectional. </p>
    </h2>
    <div className=" mt-11 flex flex-wrap gap-4">
    <Button label = "view details" />
    <Button 
    label ="learn more"
    backgroundcolor="bg-white"
    bordercolor="border-slate-gray"
    
    />  
     </div>
    </div>
    </section>
  )
}

export default SpecialOffer