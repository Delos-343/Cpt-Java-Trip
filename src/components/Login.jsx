import React from 'react'
import captainWhiteLogo from '../assets/logo/Logo-White-Rectangular.png'

async function loginUser(credentials) {
  return fetch('http://localhost:5173', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

const Login = ({ setToken }) => {

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      
    });
    setToken(token);
  }

  return (
    <section className="bg-stone-800 text-gray-100">
      <div className="w-full h-screen z-0">
        <video autoPlay muted loop className=" object-cover w-full h-full opacity-20">
          <source src="/images/bannervideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 mx-auto max-w-screen-xl px-4 py-24 lg:flex h-screen lg:items-center z-10">
          <div className="mx-auto max-w-6xl text-center align-middle justify-center pt-36">
            {/* <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-700 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              CAPTAIN JAVA TRIP
            </h1> */}

            <img src={captainWhiteLogo} alt="Captain Java Trip Logo" className="w-fit m-auto" />

            <p className="mx-auto mt-4 max-w-full sm:text-xl sm:leading-relaxed">
              Stand to quarters and clear for action, we shall be staying put for the evening.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a className="block w-full text-xl bg-yellow-600 px-32 py-3 font-normal text-gray-100 hover:bg-transparent hover:text-white hover:border-2 hover:border-gray-100 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/home">
                LOGIN
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login