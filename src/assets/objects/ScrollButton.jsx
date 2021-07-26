import React, { useEffect, useState } from "react";
import scroll_up from '../img/scroll-up.png'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-btn fixed-bottom">
          {isVisible && (
            <div onClick={scrollToTop}>
              <img src={scroll_up}/>
            </div>
          )}
    </div>
  );
}