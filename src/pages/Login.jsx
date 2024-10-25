
export const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <form className="w-1/3 flex flex-col items-center">
        <div className="mb-5 w-full">
          <label className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-5 w-full">
          <label className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div className="flex items-start mb-5 w-full">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
          </div>
          <label className="ms-2 text-sm font-medium text-gray-900 ">Remember me</label>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
      </form>
    </div>
  )
}
