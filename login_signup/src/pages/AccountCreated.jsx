export default function Account() {
    return (
      <div className="min-h-screen bg-gray-100">
        <h1 className="text-2xl  bg-white w-full h-16 flex items-center p-4">Account Settings</h1>
        <div className=" p-6 rounded flex  text-center space-x-4 ">
          <img  src="./user.png" alt="Profile" className="w-20 bg-gray-800 h-20 rounded-full " />
         <div >
         <h2 className="text-xl font-semibold leading-tight">Marry Doe</h2>
         <p className=" text-gray-500 ">Marry@gmail.com</p>
         </div>
        
        </div>
        <p className="p-4">Lorem ipsum, dolor sit amet consectetur adipis icing elit. Consectetur inventore quae dol orem repellendus voluptatum quaerat adipisci similiq ue cumque, ut veritatis.</p>
      </div>
    );
  }
  