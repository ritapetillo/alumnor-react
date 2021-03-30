import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Loader from "react-spinners/BarLoader";
import { getCurrentUserAction } from "../../actions/authActions";
import { linkUserToZoom } from "../../api/userApi";

const Zoommw = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    connectToZoom();
  }, []);

  const connectToZoom = async () => {
    const link = await linkUserToZoom();
  };
  return (
    <div>
      <Loader />
    </div>
  );
};

export default Zoommw;
