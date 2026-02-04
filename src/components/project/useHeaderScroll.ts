import { useEffect, useState } from "react";


export function useHeaderScroll() {
 const [isVisible, setIsVisible] = useState(true);
 const [prevScrollPos, setPrevScrollPos] = useState(0);


 useEffect(() => {
  const handleScroll = () => {
   const currentScrollPos = window.pageYOffset;
   const isScrollingUp = prevScrollPos > currentScrollPos;


   setIsVisible(isScrollingUp || currentScrollPos <= 0);
   setPrevScrollPos(currentScrollPos);
  };


  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
 }, [prevScrollPos]);


 return isVisible;
}