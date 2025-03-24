import {userState, useState} from "react"
export default function Login() {
    

    const handleSubmit = (e) => {
        e.preventDefault();
       
    }
    return (
      <div className="flex flex-col pt-8 pl-4  min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4 flex flex-col w-50">Sign in to your PopX account</h1>
        <p className="text-gray-500 flex flex-col w-80 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form 
        className="bg-gray-100 p-6 rounded  w-80"
        >
          {["Email Address", "Password"].map((label, index) => {
            const key = label.toLowerCase().replace(" ","_");
            return (
                <div key={index} className="relative mb-4 input-wrapper">
                   
            <input
              type={label === "Password" ? "password" : "email"}
              name={key}
              className="w-full border rounded-md px-3 py-2 mt-2 transition-all duration-300 border-gray-400 font-noto text-gray-900  focus:outline-none focus:ring-1 "
              placeholder={`Enter ${label.toLowerCase()}`}
              required
            />


            <label
              htmlFor={label}
              className="absolute font-noto text-sm left-4 px-2 bg-gray-100 transition-all duration-300 text-purple-600 "
            >
              {label}
            </label>

          </div>
        
            )
          })}
          <button type="submit" className="bg-gray-400 text-white px-4 py-2 rounded font-noto  w-full mt-auto ">
            Login
          </button>
        </form>
      </div>
    );
  }
  