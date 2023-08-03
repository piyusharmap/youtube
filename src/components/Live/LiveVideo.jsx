import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function LiveVideo() {
  useEffect(() => {
    const timeout1 = setTimeout(() => {
      const dot1 = document.getElementById("dot1");
      dot1.classList.add("animate-bounce");
    }, 100);
    const timeout2 = setTimeout(() => {
      const dot2 = document.getElementById("dot2");
      dot2.classList.add("animate-bounce");
    }, 150);
    const timeout3 = setTimeout(() => {
      const dot3 = document.getElementById("dot3");
      dot3.classList.add("animate-bounce");
    }, 200);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  return (
    <div className="h-screen w-[65%] p-2 flex flex-col items-center gap-2">
      <div className="h-4/5 w-full flex justify-center items-center gap-4 border-[1px] border-blackSecondary rounded-xl relative overflow-hidden">
        <div id="dot1" className="h-8 w-8 bg-redMain rounded-full"></div>
        <div id="dot2" className="h-8 w-8 bg-redMain rounded-full"></div>
        <div id="dot3" className="h-8 w-8 bg-redMain rounded-full"></div>

        {/* <div className="h-full w-full backdrop-blur-lg absolute"></div> */}
      </div>

      <div className="w-full">
        <div className="p-2 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-12 w-12 flex justify-center items-center border-2 border-blue-600 rounded-full">
              <FontAwesomeIcon className="text-xl" icon={faUser} />
            </div>

            <div className="flex flex-col">
              <p>Piyush Sharma</p>
              <p className="text-sm opacity-80">4.8M subscribers</p>
            </div>
          </div>

          <div className="w-fit py-2 px-4 flex items-center border-[1px] border-redMain rounded-full">
            <p>44k watching</p>
          </div>

          <button className="h-fit py-2 px-4 text-base bg-blackSecondary hover:bg-redMain rounded-full">
            Subscribe
          </button>

          <button className="h-fit py-2 px-4 text-base bg-blackSecondary hover:bg-blackSecondary/80 rounded-full">
            <FontAwesomeIcon className="mr-2 text-sm" icon={faShare} />
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
