import React from "react";
import notification from "../../Assets/notification.png.png";

const Notification = () => {
  return (
    <div className="items-center my-1 mr-[1.6rem]">
      <img src={notification} alt="Notification" className="h-5 w-5" />
    </div>
  );
};

export default Notification;
