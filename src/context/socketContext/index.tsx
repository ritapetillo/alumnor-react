import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import config from "../../config";
import { RootStore } from "../../store";

export const SocketContext = React.createContext({});
const Socket: FC = ({ children }) => {
  // const currentUserId = useSelector((state: RootStore) => state.auth.user._id);
  // //   const [socket] = useSocket(process.env.REACT_APP_SOCKET_URI);
  // const socket = io("http://localhost:3002");
  // const connectToSocket = () => {
  //   socket.auth = { currentUserId: currentUserId };
  //   socket.connect();
  // };

  // useEffect(() => {
  //   //  connectToSocket()
  //   //   socket.on("connection", () => {
  //   //     console.log("connected");
  //   //     socket.emit("setId", { id: currentUserId });
  //   //   });
  //   //   socket.on('users',(users)=>console.log(users))
  //   //   socket.on("connect_error", (err) => {
  //   //     if (err.message === "invalid username") {
  //   //       console.log('invalid username')
  //   //     }
  //   //   });
  //   //   return () => {
  //   //     socket.on("disconnect", () => console.log("disconnected"));
  //   //   };
  // }, [currentUserId]);

  return (
    <SocketContext.Provider value={"try"}>{children}</SocketContext.Provider>
  );
};

export default Socket;
