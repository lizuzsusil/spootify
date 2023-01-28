import React from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphonesAlt,
  faHeart,
  faPlayCircle,
  faSearch,
  faStream,
} from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Avatar } from "../assets/images/avatar.svg";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const renderSideBarOption = (
  link: string,
  icon: IconProp,
  text: string,
  { selected }: { selected?: boolean } = {}
) => {
  return (
    <div
      className={cx("sidebar__option", {
        "sidebar__option--selected": selected,
      })}
    >
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </div>
  );
};

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__profile">
        <Avatar />
        <p>Bob Smith</p>
      </div>
      <div className="sidebar__options">
        {renderSideBarOption("/", faHeadphonesAlt, "Discover", {
          selected: true,
        })}
        {renderSideBarOption("/search", faSearch, "Search")}
        {renderSideBarOption("/favourites", faHeart, "Favourites")}
        {renderSideBarOption("/playlists", faPlayCircle, "Playlists")}
        {renderSideBarOption("/charts", faStream, "Charts")}
      </div>
    </div>
  );
}
