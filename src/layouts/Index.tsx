import { PropsWithChildren } from "react";
import Header from "./Header";
import Player from "./Player";
import SideBar from "./Sidebar";

function CoreLayout({ children }: PropsWithChildren) {
  return (
    <div className="main">
      <SideBar />
      <div className="main__content">
        <Header />
        <div className="main__content__child">{children}</div>
      </div>
      <Player />
    </div>
  );
}

export default CoreLayout;
