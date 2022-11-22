import React from 'react'

const Login = () => {
  return (
<section className="bg-gray-900 text-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
        CAPTAIN JAVA TRIP
      </h1>

      <p className="mx-auto mt-4 max-w-full sm:text-xl sm:leading-relaxed">
        Stand to quarters and clear for action, we shall be staying put for the evening.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a className="block w-full text-xl bg-blue-600 px-32 py-3 font-normal text-gray-100 hover:bg-transparent hover:text-white hover:border hover:border-gray-100 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
           href="/home">
          LOGIN
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default Login