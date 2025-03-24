export default function Login() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold">Sign in to your PopX account</h1>
        <form className="bg-white p-6 rounded shadow-md w-80">
          {["Email Address", "Password"].map((label, index) => (
            <div key={index} className="relative mb-4">
              <input
                type={label === "Password" ? "password" : "email"}
                id={label}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-green-600 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor={label}
                className="absolute text-sm text-green-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
              >
                {label}
              </label>
            </div>
          ))}
          <button type="submit" className="bg-gray-400 text-white px-4 py-2 rounded w-full">
            Login
          </button>
        </form>
      </div>
    );
  }
  