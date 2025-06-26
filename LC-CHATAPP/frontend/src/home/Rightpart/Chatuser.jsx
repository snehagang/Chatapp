// import React from 'react'
// import nobita_ki_gf from './assets/nobita_ki_gf.jpg'
// import useConversation from "../../zustand/useConversation.js";
// import { useSocketContext } from "../../context/SocketContext.jsx";
// import { CiMenuFries } from "react-icons/ci";
// export default function Chatuser() {
//   const{selectedConversation}= useConversation();
//   console.log(selectedConversation)
//   return (
//     <div className="flex space-x-3 items-center justify-center h-[8vh] bg-gray-800 hover:bg-gray-700 duration-300">
//        <div className="avatar online">
//           <div className="w-12 rounded-full">
//             <img src={nobita_ki_gf} />
//           </div>
//         </div>
//         <div>
//         <h1 className="text-xl">sujata</h1>
//           <span className="text-sm">
//             offline
//           </span>
//         </div>
//     </div>
//   )
// }

import React from "react";
import nobita_ki_gf from './assets/nobita_ki_gf.jpg'
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";

function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

  // console.log(selectedConversation.fullname);
  return (
    <div className="relative flex items-center h-[8%] justify-center gap-4 bg-slate-800 hover:bg-slate-700 duration-300 rounded-md">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>
      <div className="flex space-x-3 items-center justify-center h-[8vh] bg-gray-800 hover:bg-gray-700 duration-300">
        <div className="avatar online">
          <div className="w-16 rounded-full">
          <img src={nobita_ki_gf} />
          </div>
        </div>
        <div>
          <h1 className="text-xl">{selectedConversation.fullname}</h1>
          <span className="text-sm">
            {getOnlineUsersStatus(selectedConversation._id)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Chatuser;
