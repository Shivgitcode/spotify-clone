import React from "react";
import { library } from "../../assets";
import { GoPlus } from "react-icons/go";

export default function Sidebar() {
  return (
    <div>
      <div>
        <div>
          <div>
            <img src={library} alt="" />
            <span>Library</span>
          </div>
          <div>
            <GoPlus></GoPlus>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p>Create your first Playlist</p>
          <p>It's easy,we'll help you</p>
        </div>
      </div>
    </div>
  );
}
