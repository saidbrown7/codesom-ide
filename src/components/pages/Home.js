import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Toaster, toast } from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

export const Home = () => {

    const [roomId, setRoomId] = useState("");
    const [username, setUsername] = useState("")
    const navigate = useNavigate();

    const newRoom = (e) => {
        e.preventDefault();
        const Id = uuid();

        setRoomId(Id);

        toast.success('Created new Session')
    }

    const creatingNewRoom = ()=>{
        if (!roomId || !username) {
            toast.error('Fill The inputs');
            return; 
        }

        navigate(`/editor/${roomId}`,{
            state:{
                username,
            }
        })
    }

    const handlerEnter=(e)=>{
        if (e.code === 'Enter') {
            creatingNewRoom();
        }
    }

    return (

        <div className="homePageWrapper">
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <div className="formWrapper">
                <img
                    className="homePageLogo"
                    src="./images/hil.png"
                    alt="code-sync-logo"
                />
                <h4 className="mainLabel">Paste invitation ROOM ID</h4>
                <div className="inputGroup">
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="ROOM ID"
                        onChange={(e) => { setRoomId(e.target.value) }}
                        value={roomId}
                    />
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="USERNAME"
                        onChange={(e) => { setUsername(e.target.value) }}
                        onKeyUp={handlerEnter}
                    />
                    <button className="btn joinBtn" onClick={creatingNewRoom}>
                        Join
                    </button>
                    <span className="createInfo">
                        If you don't have an invite then create &nbsp;
                        <a
                            onClick={newRoom}
                            href=""
                            className="createNewBtn"
                        >
                            new room
                        </a>
                    </span>
                </div>
            </div>
            <footer>
                <h4>
                    Developed With 💚 &nbsp; by &nbsp;
                    <a href="https://github.com/saidbrown7">Saacid</a>
                </h4>
            </footer>
        </div>
    )
}
