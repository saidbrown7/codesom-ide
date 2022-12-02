import React, { useState } from "react";
import { Client } from "../Controller/Client";
import { Editor } from "../Controller/Editor";
import { Link, useNavigate,useParams } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

export const EditorPage = () => {
  const navigate = useNavigate();
  const params = useParams()
  const [clients, setClients] = useState([
    { socketId: 1, username: "saacid" },
    { socketId: 2, username: "ikran" },
    { socketId: 3, username: "yuu" },
  ]);

  const leaveRoom = () => {
    toast.error("Leaved the Session");

    navigate(`/`);
  };
  const copyRoomId = () => {
    const {roomId} =params;
    // console.log(roomId);
    alert("Room ID: "+roomId)
    // toast.success();

    // navigate(`/`);
  };
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img className="logoImage" src="/images/hil.png" alt="logo" />
            Codesom IDE
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {clients.map((client) => {
              return (
                <Client key={client.socketId} username={client.username} />
              );
            })}
          </div>
        </div>
        <button className="btn copyBtn" onClick={copyRoomId}>
          Copy ROOM ID
        </button>
        <button className="btn leaveBtn" onClick={leaveRoom}>
          Leave
        </button>
      </div>
      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  );
};
