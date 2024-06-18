const Button = ({label, iconURL}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full border-coral-red text-white">
        {label}

        <img 
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounder-full w-5 h-5"/>
    </button>
  )
}

export default Button