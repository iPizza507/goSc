import { useEffect, useState } from "react";

export const useResize = () => {
  const [phoneScreen, setPhoneScreen] = useState(
    window.innerWidth < 900 ? true : false
  );

  const handleResize = () => {
    if (window.innerWidth < 900) setPhoneScreen(true);
    else setPhoneScreen(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return { phoneScreen };
};
