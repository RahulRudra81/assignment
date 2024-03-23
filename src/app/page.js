"use client"
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import { MdOutlineShare } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { BiSolidMessageDetail } from "react-icons/bi";
import { TbCoinFilled } from "react-icons/tb";
import { useEffect, useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(true)
  return (
    <div>
      
      <div className="flex   gap-16 ">
        {/* SIDEBAR */}
        <div className="lg:flex">
          {/* content of sidebar */}
          {open &&
            <div className="bg-[#0B1539]  text-white w-72 flex flex-col">
              {/* greeting */}
              <div className="p-6 w-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <FaUser className="text-3xl " />
                    <span className="text-lg font-semibold"> Hello, User</span>
                  </div>
                  <span>
                    <IoMdNotifications className="text-4xl" />
                  </span>
                </div>
              </div>

              {/* horizon */}
              <div className="w-full ">
                <hr className="w-full h-1 bg-gray-500 border-0" />
              </div>

              {/* options */}
              <div className="flex flex-col text-lg  p-4 gap-3">
                <div className="flex items-center gap-2">
                  <span><BiSolidMessageDetail className="text-xl" /></span>
                  <span>Discussion Forum</span>
                </div>
                <div className="flex items-center gap-2">
                  <span ><TbCoinFilled className="text-xl" /></span>
                  <span>Marketing Stories</span>
                </div>
                <div className="pl-7"><span>Sentiment</span></div>
                <div className="pl-7"><span>Market</span></div>
                <div className="pl-7"><span>Sector</span></div>
                <div className="pl-7"><span>Watchlist</span></div>
              </div>
            </div>
          }
          {/* arrow component */}
          {!open &&
            <div className="h-screen items-center flex ">
              <button onClick={() => setOpen(!open)}>
                <div className="flex items-center h-32 bg-[#0B1539] text-white">
                  <IoMdArrowDropright className="text-3xl" />
                </div>
              </button>
            </div>
          }
          {open &&
            <div className="h-screen items-center flex ">
              <button onClick={() => setOpen(!open)}>
                <div className="flex items-center h-32 bg-[#0B1539] text-white">
                  <IoMdArrowDropleft className="text-3xl" />
                </div>
              </button>
            </div>
          }

        </div>

        {/* LEFT PART OF THE SCREEN */}
        <div className="flex flex-col p-12 gap-10 grow">
          <h1 className="text-5xl bg-gray-100 w-fit p-3 font-semibold text-red-500">Discussion Forum</h1>

          {/* CARD FOR USER DATA */}
          <div className="bg-white shadow-2xl px-10 py-2 w-full flex gap-6 h-56 rounded-xl">

            <div ><img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710892800&semt=ais" className=" lg:max-h-36  rounded-full mt-2" /></div>
            <div className="flex flex-col py-4 gap-4">
              {/* CARD TITLE */}
              <div className="flex justify-between">
                <div className="flex gap-5">
                  <span className="text-xl font-semibold">Lorem Ipsum</span>
                  <span className="rounded-full px-5 flex items-center text-white bg-blue-800">Sector 2</span>
                </div>
                <div><span className="text-blue-500 font-bold">2 min ago</span></div>
              </div>
              {/* CARD TITLE END */}
              {/* CARD DISCRIPTION */}
              <div className="overflow-hidden">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
              </div>
              {/* CARD DISCRIPTION ENDS */}


              {/* CARD LAST ROW */}
              <div className="flex w-full font-semibold justify-between my-auto">
                <span className="flex gap-1 items-center h-4"><FaRegHeart className="text-xl" /> 2k</span>
                <span className="flex gap-1 items-center h-4"><MdOutlineRemoveRedEye className="text-xl" /> 2k</span>
                <span className="flex gap-1 items-center h-4"><FaRegCommentAlt className="text-xl" /> 2k comments</span>
                <span className="flex gap-1 items-center h-4"><MdOutlineShare className="text-xl" /> Share</span>

              </div>
              {/* CARD LAST ROW ENDS */}
            </div>
          </div>
          {/* CARD FOR USER DATA ENDS */}
          {/* CARD FOR USER DATA */}
          <div className="bg-white shadow-2xl px-10 py-2 w-full flex gap-6 h-56 rounded-xl">

            <div ><img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710892800&semt=ais" className=" lg:max-h-36  rounded-full mt-2" /></div>
            <div className="flex flex-col py-4 gap-4">
              {/* CARD TITLE */}
              <div className="flex justify-between">
                <div className="flex gap-5">
                  <span className="text-xl font-semibold">Lorem Ipsum</span>
                  <span className="rounded-full px-5 flex items-center text-white bg-blue-800">Sector 2</span>
                </div>
                <div><span className="text-blue-500 font-bold">2 min ago</span></div>
              </div>
              {/* CARD TITLE END */}
              {/* CARD DISCRIPTION */}
              <div className="overflow-hidden">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
              </div>
              {/* CARD DISCRIPTION ENDS */}


              {/* CARD LAST ROW */}
              <div className="flex w-full font-semibold justify-between my-auto">
                <span className="flex gap-1 items-center h-4"><FaRegHeart className="text-xl" /> 2k</span>
                <span className="flex gap-1 items-center h-4"><MdOutlineRemoveRedEye className="text-xl" /> 2k</span>
                <span className="flex gap-1 items-center h-4"><FaRegCommentAlt className="text-xl" /> 2k comments</span>
                <span className="flex gap-1 items-center h-4"><MdOutlineShare className="text-xl" /> Share</span>

              </div>
              {/* CARD LAST ROW ENDS */}
            </div>
          </div>
          {/* CARD FOR USER DATA ENDS */}
          {/* CARD FOR USER DATA */}
          <div className="bg-white shadow-2xl px-10 py-2 w-full flex gap-6 h-56 rounded-xl">

            <div ><img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710892800&semt=ais" className=" lg:max-h-36  rounded-full mt-2" /></div>
            <div className="flex flex-col py-4 gap-4">
              {/* CARD TITLE */}
              <div className="flex justify-between">
                <div className="flex gap-5">
                  <span className="text-xl font-semibold">Lorem Ipsum</span>
                  <span className="rounded-full px-5 flex items-center text-white bg-blue-800">Sector 2</span>
                </div>
                <div><span className="text-blue-500 font-bold">2 min ago</span></div>
              </div>
              {/* CARD TITLE END */}
              {/* CARD DISCRIPTION */}
              <div className="overflow-hidden">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
              </div>
              {/* CARD DISCRIPTION ENDS */}


              {/* CARD LAST ROW */}
              <div className="flex w-full font-semibold justify-between my-auto">
                <span className="flex gap-1 items-center h-4"><FaRegHeart className="text-xl" /> 2k</span>
                <span className="flex gap-1 items-center h-4"><MdOutlineRemoveRedEye className="text-xl" /> 2k</span>
                <span className="flex gap-1 items-center h-4"><FaRegCommentAlt className="text-xl" /> 2k comments</span>
                <span className="flex gap-1 items-center h-4"><MdOutlineShare className="text-xl" /> Share</span>

              </div>
              {/* CARD LAST ROW ENDS */}
            </div>
          </div>
          {/* CARD FOR USER DATA ENDS */}
          {/* CARD FOR USER DATA */}
          <div className="bg-white shadow-2xl px-10 py-2 w-full flex gap-6 h-56 rounded-xl">

            <div ><img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710892800&semt=ais" className=" lg:max-h-36  rounded-full mt-2" /></div>
            <div className="flex flex-col py-4 gap-4">
              {/* CARD TITLE */}
              <div className="flex justify-between">
                <div className="flex gap-5">
                  <span className="text-xl font-semibold">Lorem Ipsum</span>
                  <span className="rounded-full px-5 flex items-center text-white bg-blue-800">Sector 2</span>
                </div>
                <div><span className="text-blue-500 font-bold">2 min ago</span></div>
              </div>
              {/* CARD TITLE END */}
              {/* CARD DISCRIPTION */}
              <div className="overflow-hidden">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
              </div>
              {/* CARD DISCRIPTION ENDS */}


              {/* CARD LAST ROW */}
              <div className="flex w-full font-semibold justify-between my-auto">
                <span className="flex gap-1 items-center h-4"><FaRegHeart className="text-xl" /> 2k</span>
                <span className="flex gap-1 items-center h-4"><MdOutlineRemoveRedEye className="text-xl" /> 2k</span>
                <span className="flex gap-1 items-center h-4"><FaRegCommentAlt className="text-xl" /> 2k comments</span>
                <span className="flex gap-1 items-center h-4"><MdOutlineShare className="text-xl" /> Share</span>

              </div>
              {/* CARD LAST ROW ENDS */}
            </div>
          </div>
          {/* CARD FOR USER DATA ENDS */}
          {/* CARD FOR USER DATA */}
          <div className="bg-white shadow-2xl px-10 py-2 w-full flex gap-6 h-56 rounded-xl">

            <div ><img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710892800&semt=ais" className=" lg:max-h-36  rounded-full mt-2" /></div>
            <div className="flex flex-col py-4 gap-4">
              {/* CARD TITLE */}
              <div className="flex justify-between">
                <div className="flex gap-5">
                  <span className="text-xl font-semibold">Lorem Ipsum</span>
                  <span className="rounded-full px-5 flex items-center text-white bg-blue-800">Sector 2</span>
                </div>
                <div><span className="text-blue-500 font-bold">2 min ago</span></div>
              </div>
              {/* CARD TITLE END */}
              {/* CARD DISCRIPTION */}
              <div className="overflow-hidden">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
              </div>
              {/* CARD DISCRIPTION ENDS */}


              {/* CARD LAST ROW */}
              <div className="flex w-full font-semibold justify-between my-auto">
                <span className="flex gap-1 items-center h-4"><FaRegHeart className="text-xl" /> 2k</span>
                <span className="flex gap-1 items-center h-4"><MdOutlineRemoveRedEye className="text-xl" /> 2k</span>
                <span className="flex gap-1 items-center h-4"><FaRegCommentAlt className="text-xl" /> 2k comments</span>
                <span className="flex gap-1 items-center h-4"><MdOutlineShare className="text-xl" /> Share</span>

              </div>
              {/* CARD LAST ROW ENDS */}
            </div>
          </div>
          {/* CARD FOR USER DATA ENDS */}

        </div>

        {/* RIGHT PART OF THE SCREEN */}
        <div className="lg:flex p-12 w-4/12 gap-10 flex-col items-center">
          <h1 className="text-5xl bg-gray-100 w-fit p-3 font-semibold text-red-500">Market Stories</h1>
          {/* CARD */}
          <div className="flex p-2 text-black ">
            <div className="w-96 p-4 bg-white shadow-2xl">
              <div><img src="https://images.unsplash.com/photo-1551533896-be6ee1ab6fd3?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-96" /></div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold ">The Coldest Sunset</h3>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occae
                </p>
              </div>
            </div>
          </div>
          {/* CARD ENDS */}
          {/* CARD */}
          <div className="flex p-2 text-black ">
            <div className="w-96 p-4 bg-white shadow-2xl">
              <div><img src="https://images.unsplash.com/photo-1551533896-be6ee1ab6fd3?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-96" /></div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold ">The Coldest Sunset</h3>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occae
                </p>
              </div>
            </div>
          </div>
          {/* CARD ENDS */}
          {/* CARD */}
          <div className="flex p-2 text-black ">
            <div className="w-96 p-4 bg-white shadow-2xl">
              <div><img src="https://images.unsplash.com/photo-1551533896-be6ee1ab6fd3?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-96" /></div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold ">The Coldest Sunset</h3>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occae
                </p>
              </div>
            </div>
          </div>
          {/* CARD ENDS */}


        </div>

      </div>

      
    </div>
  );
}
