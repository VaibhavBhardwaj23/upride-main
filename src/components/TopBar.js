import Image from "next/image";
import Add from "../assets/add.png";
import Search from "../assets/search.png";
import Profile from "../assets/profile.png"
const TopBar = () => {
  return (
    <div className=" topBar shadow-md p-5  flex items-center justify-between ">
     {/* Search Box */}
     <div className=" box1 flex w-3/5">
        <div className="search bg-white rounded-3xl px-5 flex items-center justify-between flex-1 mx-2  shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
          <input placeholder="Search bookings" className=" text-lg focus:outline-none"/>
          <Image className="cursor-pointer icon1" src={Search} alt="search" />
        </div>
        <div className="newBooking  flex items-center justify-between rounded-3xl p-2 text-white shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
          <Image className="mx-1 icon2" src={Add} alt="add" />
          <h1 className=" text-lg"> New Booking</h1>
        </div>
      </div>
      {/* Profile */}
      <div className=" box2 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl p-1 flex items-center">
        <Image className="pfp cursor-pointer icon3" src={Profile} alt="profile"/>
        <h1 className="cursor-pointer">Hello Lokesh! 👋</h1>
      </div>
    </div>
  );
};

export default TopBar;
