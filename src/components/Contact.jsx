import React from 'react'

const Contact = () => {
  return (
    <section name='contact' className='w-full  bg-gradient-to-b from-zinc-800 bg-gray-900 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-gray-200'>Contact</p>
          <p className='py-6 text-xl font-bold text-gray-200'>Submit the form below to get in touch 📧</p>
        </div>
        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/4e7c1d6d-2380-449b-b0a5-18a9ef4de54c" method="POST" className='flex flex-col w-full md:w-1/2'>
            <input  type="text" name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none bg-gray-500'/>
            <input  type="text" name="email" placeholder='Enter your email' className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
            <textarea name="message" placeholder='Enter your message' rows="10" className='p-2   rounded-md text-white focus:outline-none resize-none w-full bg-transparent border'></textarea>
            <button className='group text-white w-fit px-6 py-3 my-8 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-110 duration-300 mx-auto'>Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact