import React, { Fragment, useState } from 'react'
import hero from "../assets/kkp.png"
import Modal from './Modal';


export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <div className='px-24 pt-28'>
        <div className='container'>
          <div className='flex flex-wrap'>
            <div className='w-full self-center px-4 lg:w-1/2'>
              <div className='pl-6'>
                <h1 className='font-bold text-3xl  md:text-4xl '>Kementrian Kelautan dan Perikanan</h1>
                <p className='text-lg lg:text-xl leading-relaxed'>Kementrian Kelautan dan Perikanan hadir untuk masyarakat</p>
              </div>
              <div className='flex'>
                <div className='flex flex-col items-center border-2 border-blue-400 hover:border-blue-600 hover:shadow-xl bg-white rounded-lg shadow-md  m-6 overflow-hidden sm:w-48  w-full xs:w-20 '>
                  <a href='/Produk' title='https://img.freepik.com/free-vector/hand-drawn-swordfish-cartoon-illustration_52683-129577.jpg?w=740&t=st=1693973135~exp=1693973735~hmac=4615500401a5114b94ece573fd7bfca1ed46159dd42cc41148896ca511f8f583'
                    onClick={() => setShowModal(true)}>
                    <img src='https://img.freepik.com/free-vector/hand-drawn-swordfish-cartoon-illustration_52683-129577.jpg?w=740&t=st=1693973135~exp=1693973735~hmac=4615500401a5114b94ece573fd7bfca1ed46159dd42cc41148896ca511f8f583'
                      className='h-28 m-6 ' />
                    <h2 className=' text-center px-2 pb-4'>Produk</h2>
                  </a>
                </div>
                <div className='flex flex-col items-center border-2 border-blue-400 hover:border-blue-600 hover:shadow-xl bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-48'>
                  <a href='/Jasa' title='https://img.freepik.com/free-vector/hand-drawn-tuna-cartoon-illustration_52683-129574.jpg?w=740&t=st=1693973261~exp=1693973861~hmac=53bf0c4ea86b322ec0684130e81e96ea61ad60a0ca0a375f5c78683ab41364fc'
                                      onClick={() => setShowModal(true)}>

                    <img src='https://img.freepik.com/free-vector/hand-drawn-tuna-cartoon-illustration_52683-129574.jpg?w=740&t=st=1693973261~exp=1693973861~hmac=53bf0c4ea86b322ec0684130e81e96ea61ad60a0ca0a375f5c78683ab41364fc'
                      className='h-28 m-6 ' />
                    <h2 className='text-center px-2 pb-4'>Jasa</h2>
                  </a>
                </div>
                <div className='flex flex-col items-center border-2 border-blue-400 hover:border-blue-600 hover:shadow-xl bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-48'>
                  <a href='/Layanan' title='https://img.freepik.com/free-vector/hand-drawn-crawfish-cartoon-illustration_52683-129571.jpg?w=740&t=st=1693973311~exp=1693973911~hmac=06708902aff3f97156ef9537a178ec3742f308fd8951bbd65dbdcfd98faf370c'
                                      onClick={() => setShowModal(true)}>

                    <img src='https://img.freepik.com/free-vector/hand-drawn-crawfish-cartoon-illustration_52683-129571.jpg?w=740&t=st=1693973311~exp=1693973911~hmac=06708902aff3f97156ef9537a178ec3742f308fd8951bbd65dbdcfd98faf370c'
                      className='h-28 m-6 ' />
                    <h2 className='text-center px-2 pb-4'>Layanan</h2>
                  </a>
                </div>
              </div>
            </div>
            <div className='w-full self-end px-4 pl-20 lg:w-1/2'>
              <div className='relative mt-10 lg:mt-9 lg:right-0'>
                <img src={hero} className='max-w-full mx-auto' />
                <span className='absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125'>
                  <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#00479c" d="M33.8,-50.5C39.4,-35.7,36.3,-20.8,33.3,-10C30.3,0.8,27.3,7.4,24.6,16C21.8,24.7,19.2,35.2,12.8,39.3C6.4,43.4,-3.8,41.1,
                  -20.2,41.3C-36.5,41.5,-58.9,44.2,-67.7,35.8C-76.4,27.4,-71.5,7.8,-66.8,-10.6C-62.1,-29,-57.7,-46.2,-46.6,-60C-35.5,-73.9,-17.8,-84.3,-1.8,-82
                  .1C14.1,-80,28.3,-65.3,33.8,-50.5Z" transform="translate(100 100) scale(1.2)" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className='py-6 px-6 lg:px-8 text-left'>
          <h3 className='text-xl font-poppins text-gray-900 mb-5'>Buku Tamu</h3>
          <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-6 lg:px-8">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                <form class="space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                            </div>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div> 
        </div>
      </Modal>
    </Fragment>
  )
}
