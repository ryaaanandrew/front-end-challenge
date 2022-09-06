import React from "react";
import styles from "./sideBar.module.scss";

const fakeChannels = [
  { name: "Channel 1" },
  { name: "Channel 2" },
  { name: "Channel 3" },
  { name: "Channel 4" },
  { name: "Channel 5" },
];

const fakeUsers = [
  { name: "User 1" },
  { name: "User 2" },
  { name: "User 3" },
  { name: "User 4" },
  { name: "User 5" },
];

const SideBar = () => {
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
        {fakeChannels?.map((channel) => {
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
        {fakeUsers?.map((user) => {
          return (
            <h3 onClick={() => handleUserClick(user.name)}>{user.name}</h3>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
