import React from 'react'

const RouteHero = () => {
  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
      <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>
      <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div class="max-w-xl text-center sm:text-left">
          <h1 class="text-4xl font-extrabold sm:text-5xl">
            Our
            <strong class="block font-extrabold text-yellow-700">
              Routes
            </strong>
          </h1>
          <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Explore the various routes we have curated you can pick for your trip!
          </p>
          <div class="mt-8 flex flex-wrap gap-4 text-center">
            <a href="#" class="block w-full rounded bg-yellow-700 px-12 py-3 text-sm font-medium text-stone-100 shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
              SEE NOW
            </a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default RouteHero