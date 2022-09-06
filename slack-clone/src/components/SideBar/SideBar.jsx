import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createChannel,
  removeChannel,
} from "../../pages/chat/chat-redux-slice";
import styles from "./sideBar.module.scss";

const SideBar = () => {
  const [newChannelName, setNewChannelName] = useState("");
  const [channels, users] = useSelector(({ chat }) => {
    return [chat.channels, chat.users];
  });

  const dispatch = useDispatch();

  const handleCreateChannel = (channelName) => {
    dispatch(createChannel(channelName));
    setNewChannelName("");
  };

  const handleRemoveChannel = (index) => {
    dispatch(removeChannel(index));
  };

  const handleUserClick = (username) => {
    console.log("##### Username: ", username);
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1>Channels</h1>
        {channels?.map((channel, index) => {
          return (
            <div className={styles.channel__item}>
              <h3 onClick={() => handleCreateChannel(channel.name)}>
                {channel.name}
              </h3>
              <button onClick={() => handleRemoveChannel(index)}>x</button>
            </div>
          );
        })}
        <input
          placeholder={"New channel name"}
          onChange={(e) => setNewChannelName(e.target.value)}
          value={newChannelName}
        />
        <button
          onClick={() => handleCreateChannel(newChannelName)}
          disabled={newChannelName.length === 0}
        >
          Create Channel
        </button>
      </div>
      <div className={styles.subContainer}>
        <h1>Users</h1>
        {users?.map((user) => {
          return (
            <h3 onClick={() => handleUserClick(user.name)}>{user.name}</h3>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
