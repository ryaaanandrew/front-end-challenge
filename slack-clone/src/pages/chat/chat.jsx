import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import styles from "./chat.module.scss";

const Chat = () => {
  return (
    <div className={styles.main}>
      <SideBar />
      <div>right side</div>
    </div>
  );
};

export default Chat;
