import React from 'react'
import hero from "../assets/maskot.png"

export default function Sproduk() {
    return (
        <div className='px-24 pt-28 font-poppins'>
            <div className='container'>
                <div className='flex'>
                    <div className='w-full items-center bg-gray-300 mx-auto lg:w-1/2 rounded-2xl shadow-lg'>
                        <div className='relative mt-10  flex items-center justify-center  '>
                            <img src={hero} className='absolute  left-[-50px]   h-72 object-cover' />
                        </div>
                        <div class="flex flex-col items-center mb-10">
                            <h5 class="mt-5 text-xl font-semibold text-gray-900 md:text-2xl mb-2">
                                Menu Produk
                            </h5>
                            <ul class="my-4 space-y-3">

                                <li>
                                    <a href="/chat" class="flex items-center p-3 text-base  text-gray-900 rounded-lg  hover:bg-blue-600 group hover:shadow bg-[#00479c] dark:text-white">
                                        <img className='w-16 rounded-full' src='https://img.freepik.com/free-psd/3d-icon-with-aquatic-animal_23-2150049539.jpg?w=740&t=st=1695266000~exp=1695266600~hmac=83e3b7f217430113c4f6c5c525518daf61b0cb6e2fe971080b24a725491221da' />
                                        <span class="flex-1 ml-3 whitespace-nowrap">Produk Budi Daya Ikan</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/form" class="flex items-center p-3 text-base  text-gray-900 rounded-lg  hover:bg-blue-600 group hover:shadow bg-[#00479c] dark:text-white">
                                        <img className='w-16 rounded-full' src='https://img.freepik.com/free-psd/3d-icon-with-aquatic-animal_23-2150049543.jpg?w=740&t=st=1695266038~exp=1695266638~hmac=eabdaeb6adb86b2d75c38853d877cc4707a85e659466b5a566b1e510937ebcc1' />
                                        <span class="flex-1 ml-3 whitespace-nowrap">Kegiatan Praktek</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/chat" class="flex items-center p-3 text-base  text-gray-900 rounded-lg  hover:bg-blue-600 group hover:shadow bg-[#00479c] dark:text-white">
                                        <img className='w-16 rounded-full' src='https://img.freepik.com/free-psd/3d-icon-with-aquatic-animal_23-2150049541.jpg?t=st=1695266038~exp=1695266638~hmac=5cb945342896a1e81dd7c366902947f5fff021e48708fdcadbe28289e9708104' />
                                        <span class="flex-1 ml-3 whitespace-nowrap">Pelatihan Budi Daya</span>
                                    </a>
                                </li>

                            </ul>

                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}
