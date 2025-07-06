import React from 'react'

const App = () => {
  return (
    <div>
      <div className="flex">
  <section className="flex flex-col justify-center px-8 py-16 max-w-2xl ">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
        Управление запасами <br />
        розничного магазина
      </h1>
      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
        Использование сервиса <span className="font-medium">1С-Товары</span> позволяет значительно
        упростить работу по формированию заявок поставщику.
      </p>
      <button className="bg-green-500 text-white  hover:bg-green-600  rounded-[1000px] w-[349px] h-[52px]">
        Заказать демонстрацию
      </button>
      
    
    </section> 
    <div className="">
        <img className='w-[508px] h-[451px] mt-[50px]' src="store.png" alt="" />
    </div>
   </div>
    </div>
  )
}

export default App
