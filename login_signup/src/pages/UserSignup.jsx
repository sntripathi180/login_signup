import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [isAgency, setIsAgency] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let validationErrors = {};

    formData.forEach((value, key) => {
      if (!value.trim()) {
        validationErrors[key] = `${key.replace("_", " ")} is required`;
      } else {
        if (key === "phone_number" && !/^\d+$/.test(value)) {
          validationErrors[key] = "Phone number must contain only numbers";
        }
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted", Object.fromEntries(formData));
      navigate("/account");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 px-4 pt-8">
      <h1 className="text-2xl font-bold mb-4 w-50 pl-2 ">Create your PopX account</h1>

      <form className="bg-gray-100 rounded w-full max-w-md flex flex-col mx-auto p-4" onSubmit={handleSubmit}>
        {["Full Name", "Phone number", "Email address", "Password", "Company name"].map((label, index) => {
          const key = label.toLowerCase().replace(" ", "_");
          return (
            <div key={index} className="relative mb-4">
              <label htmlFor={key} className="absolute text-sm left-4 px-2 bg-gray-100 text-purple-800 font-noto">
                {label}<span className="text-red-500">*</span>
              </label>
              <input
                type={label === "Password" ? "password" : "text"}
                name={key}
                className="w-full border rounded-md px-3 py-2 mt-2 border-gray-400 text-gray-900 focus:ring-1 focus:outline-none"
                placeholder={`Enter ${label.toLowerCase()}`}
              />
              {errors[key] && <p className="text-red-500 text-xs mt-1">{errors[key]}</p>}
            </div>
          );
        })}

        <div className="mb-4">
          <p className="text-sm text-black font-noto">Are you an agency?<span className="text-red-500">*</span></p>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="agency" 
                value="yes" 
                className="mr-2 accent-purple-600"
                checked={isAgency === "yes"}
                onChange={() => setIsAgency("yes")}
              />
              Yes
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="agency" 
                value="no" 
                className="mr-2 accent-purple-600"
                checked={isAgency === "no"}
                onChange={() => setIsAgency("no")}
              />
              No
            </label>
          </div>
          {errors.agency && <p className="text-red-500 text-xs mt-1">{errors.agency}</p>}
        </div>

        <button type="submit" className="bg-purple-800 text-white px-4 py-2 rounded w-78 font-bold text-center mt-4 absolute bottom-4 font-noto">
          Create Account
        </button>
      </form>
    </div>
  );
}
