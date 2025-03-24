import { IoCamera } from "react-icons/io5";
export default function Account() {
    return (
      <div className="min-h-screen bg-gray-100">
        <h1 className="text-2xl  bg-white w-full h-16 flex items-center p-4">Account Settings</h1>
        <div className="p-6 rounded flex text-center space-x-4 relative">
        
        <div className="relative w-20 h-20">
          <img src="./user.png" alt="Profile" className="w-20 h-20 rounded-full bg-gray-800" />
          
          
          <div className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full border border-gray-300">
            <IoCamera className="w-5 h-5 text-white bg-purple-600" />
          </div>
        </div>

        <div>
         <h2 className="text-xl font-semibold leading-tight">Marry Doe</h2>
         <p className=" text-gray-500 ">Marry@gmail.com</p>
         </div>
        
        </div>
        <p className="p-4">Lorem ipsum, dolor sit amet consectetur adipis icing elit. Consectetur inventore quae dol orem repellendus voluptatum quaerat adipisci similiq ue cumque, ut veritatis.</p>
        
        <hr className="border-t-2 border-gray-400 border-dashed mx-4" />

      </div>
    );
  }
  