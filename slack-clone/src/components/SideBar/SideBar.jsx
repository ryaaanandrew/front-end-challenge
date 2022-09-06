import React from "react";
import { useSelector } from "react-redux";
import styles from "./sideBar.module.scss";

const SideBar = () => {
  const [channels, users] = useSelector(({ chat }) => {
    return [chat.channels, chat.users];
  });
  const handleChannelClick = (channelName) => {
    console.log("##### Channel: ", channelName);
  };

  const handleUserClick = (username) => {
    console.log("##### Username: ", username);
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1>Channels</h1>
        {channels?.map((channel) => {
          return (
            <h3 onClick={() => handleChannelClick(channel.name)}>
              {channel.name}
            </h3>
          );
        })}
        <button>Create Channel</button>
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
