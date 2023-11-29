import Button from '../sections/Button'

export const WailtList = () => {
  const servicesItems = ["Mulher", "Homem"]
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center items-center min-h-screen gap-10 max-container md:pt-44 pb-8">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-lg mx-auto space-y-3 sm:text-center">
            <h2 className='uppercase font-bold text-black text-xl'>
                Junte-se a Família Wa&apos;zuata
            </h2>
        </div>
        <div className="mt-12 max-w-xl mx-auto">
            <form
                className="space-y-5"
            >
                <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                    <div>
                        <label className="font-medium">
                            Nome
                        </label>
                        <input
                            type="text"
                            placeholder="Nome"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Apelido
                        </label>
                        <input
                            type="text"
                            placeholder="Apelido"
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                </div>
                <div>
                <label className="font-medium">
                  Email
                </label>
                  <div className='relative mt-2'>
                  <svg className="w-6 h-6 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <input
                      type="email"
                      placeholder="Seu email"
                      className="w-full pl-12 pr-3 py-2 text-gray-800 bg-transparent outline-none border focus:border-coral-blue shadow-sm rounded-lg"
                  />
                  </div>
                </div>
                <div className="relative">
            <label htmlFor="username" className="font-medium">
                Instagram
            </label>
            <div className="flex items-center border rounded-md mt-2">
                <div className="px-3 py-2.5 rounded-l-md border-r">
                    @
                </div>
                <input 
                    type="text"
                    placeholder="wazuata"
                    id="username"
                    className="w-full p-2.5 ml-2 bg-transparent outline-none focus:border-coral-blue"
                />
            </div>
        </div>
                <div>
                    <label className="font-medium">
                        Telefone
                    </label>
                    <div className="relative mt-2">
                        <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                            <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                                <option>+244</option>
                            </select>
                        </div>
                        <input
                            type="number"
                            placeholder="923 xxx xxx"
                            required
                            className="w-full pl-[5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-coral-blue shadow-sm rounded-lg"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                    <div>
                        <label className="font-medium">
                            Cor preferida
                        </label>
                        <input
                            type="text"
                            placeholder="Cor preferida"
                            required
                            className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-coral-blue shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Marca preferida
                        </label>
                        <input
                            type="text"
                            placeholder="Marca preferida"
                            required
                            className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-coral-blue shadow-sm rounded-lg"
                        />
                    </div>
                </div>

                <div>
                            <label className="font-medium">
                                Qual o seu gênero?
                            </label>
                            <ul className="grid gap-y-2 gap-x-6 flex-wrap grid-cols-2 mt-2">
                              {
                                servicesItems.map((item, idx) => (
                                  <li key={idx} className="flex gap-x-3 text-sm">
                                    <input id={`service-${idx}`} type="radio" className="form-radio border-gray-900 text-black focus:ring-coral-blue duration-150" />
                                    <label htmlFor={`service-${idx}`} className="cursor-pointer">{item}</label>
                                  </li>
                                ))
                              }
                            </ul>
                        </div>

                <Button label="Enviar" fullWidth />
            </form>
        </div>
    </div>
</section>
  )
}