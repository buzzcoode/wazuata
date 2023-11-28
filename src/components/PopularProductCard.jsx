const PopularProductCard = ({ imgURL, name }) => {
  return <>
    <div className="flex justify-center items-center flex-1 flex-col w-full max-sm:w-full">
      <div className=" bg-gradient-to-l from-teal-100 to-slate-300 rounded">
        <img src={imgURL} alt={name} className='w-[46rem] h-[32rem] object-contain' />
      </div>
      <div className="mt-4 flex flex-col justify-start gap-2.5">
        <h3 className="mt-1 text-2xl text-left leading-normal font-semibold font-palanquin">{name}</h3>
      </div>
    </div>
  </>
}

export default PopularProductCard