import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function RootLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Checking if user logged in");
  }, [navigate]);

  return (
    <>
      <Outlet />
    </>
  );
}
