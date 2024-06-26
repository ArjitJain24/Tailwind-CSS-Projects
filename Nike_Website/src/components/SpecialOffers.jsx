import {offer} from '../assets/images'
import Button from './Button'
import { arrowRight } from '../assets/icons'

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
      
      <div className="flex-1">
        <img src={offer} alt="special offer"
        width={773}
        height={687} />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className='text-4xl font-palanquin font-bold capitalize lg:max-w-lg'><span className='text-coral-red'>Special</span> Offer</h2>

        <p className='lg:max-w-lg mt-4 info-text'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className='lg:max-w-lg mt-6 info-text'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className='mt-11 flex flex-wrap gap-4'>
        <Button 
        label="Shop Now"
        iconURL= {arrowRight} 
        />
        <Button 
        label="Learn More"
        backgroundColor= "bg-white"
        textColor="text-slate-gray"
        borderColor="border-slate-gray" />

        </div>
      </div>
    </section>
  )
}

export default SpecialOffers
