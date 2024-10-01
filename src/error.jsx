const ErrorPage = () =>{
    return(
        <div className="grid h-screen place-content-center bg-nuetral-800 px-4">
  <div className="text-center">
    <h1 className="text-9xl font-black text-neutral-600">404</h1>

    <p className="text-2xl font-bold tracking-tight text-neutral-400 sm:text-4xl">Uh-oh!</p>

    <p className="mt-4 text-gray-500">We can't find that page.</p>

    <a
      href="/"
      className="mt-6 inline-block rounded border border-yellow-600 px-5 py-3 text-sm font-medium text-yellow-600 hover:bg-yellow-600 hover:text-white focus:outline-none focus:ring"
    >
      Go Back Home
    </a>
  </div>
</div>
    )
}

export default ErrorPage