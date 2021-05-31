import React from "react";
import { useEffect } from "react";
function Logout() {
  useEffect(() => {
    window.localStorage.removeItem("userDetails");
    window.location.reload();
  }, []);
  return <div>null</div>;
}
export default Logout;
