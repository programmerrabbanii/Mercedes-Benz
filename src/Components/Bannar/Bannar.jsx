
const Bannar = () => {
    return (
        <div> 
       <div className="flex flex-col md:flex-row items-center justify-center lg:gap-16 ">

  <div className=" ">
      <h1 className="lg:text-5xl md:text-4xl text-2xl   font-bold text-red-600">Parcel Management <br />
      Software</h1>
      <p className="py-6  text-[12px] md:text-[13px] lg:text-[15px]">Simplify the simplify the parcel management process, log incoming <br /> mail, outgoing parcels and and digitise your parcel management process.</p>
      <input type="text" placeholder="Search..." className="input input-bordered w-full max-w-xs" />
    </div>

    <div className=" w-[250px] mt-10 md:mt-0 md:w-[300px] lg:w-[500px] ">
    <img className="w-full" src="https://i.ibb.co/c33vtTS/618077faf4f581ef0f910fed-Parcel-Management-Software.png" />
    
  </div>
</div>
            
        </div>
    );
};

export default Bannar;