import React from 'react'

const Hero = () => {
  return (
    <section class="bg-gray-900 text-white">
        <div
            class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
        >
            <div class="mx-auto max-w-3xl text-center">
                <h1
                    class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-9xl font-extrabold text-transparent sm:text-5xl"
                >
                    CAPTAIN JAVA TRIP
                </h1>

                <p class="mx-auto mt-4 w-xl sm:text-xl sm:leading-relaxed">
                    Stand to quarters and clear for action, we shall be staying put for the evening, men!
                </p>

                <div class="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                    class="block w-full text-xl bg-blue-600 px-32 py-3 font-normal text-gray-100 hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                    href="/get-started"
                    >
                        LOGIN ⪢
                    </a>
                </div>
                <p class="mx-auto mt-24 w-xl sm:text-xl sm:leading-relaxed">
                    TEAM MALINDO | 2022
                </p>
            </div>
        </div>
    </section>
  )
}

export default Hero