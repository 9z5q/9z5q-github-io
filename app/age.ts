import { useEffect, useState } from "react";

function useUserAgent() {
  const [isPC, setIsPC] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);
    setIsPC(!isMobileDevice);
  }, []);
  return isPC;
}
export default useUserAgent;