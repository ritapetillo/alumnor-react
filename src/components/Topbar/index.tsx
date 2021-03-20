import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../store";
import { RoundImage } from "../../styles/libs";
import { TopBar } from "./topbar.elements";

const Topbar = () => {
  const auth = useSelector((state: RootStore) => state.auth);
  return (
    <TopBar>
      {auth.isAuth && (
        <RoundImage>
          <img src={auth.user.picture} alt="" />
        </RoundImage>
      )}
    </TopBar>
  );
};

export default Topbar;
