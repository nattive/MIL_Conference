import React, { useContext } from "react";
import { useMinisterCtx } from "../context/MinistersContext";

// interface MinistersModalProps {
//   name: string;
//   title: string;
//   church: string;
//   image: string;
// }
const MinistersModal: React.FC = () => {
  const { OpenMinisterModal, setOpenMinistersModal } =
    useContext(useMinisterCtx);

  console.log();
  const handleChangeModal = () => {
    if (setOpenMinistersModal) {
      setOpenMinistersModal(!OpenMinisterModal);
    }
  };

  //   OpenMinisterModal ? (document.body.style.overflow = "hidden") : "";

  return (
    <>
      <section className="eQForm flex justify-center items-center absolute top-0 bottom-0 right-0 left-0 z-50">
        <div
          className="overlay bg-black/60 top-0 bottom-0 right-0 left-0 absolute"
          onClick={handleChangeModal}
        ></div>

        <div className="modal bg-white relative rounded-lg w-[0%] max-w-[50%]  md:w-fit z-20 h-full overflow-hidden  max-h-[300px] grid grid-cols-1 md:grid-cols-2">
          {/* cancle */}
          <div
            className="h-[40px] w-[40px]  bg-green-700 rounded-full absolute
             -top-3 -right-5 flex items-center justify-center cursor-pointer hover:scale-105 transition-all 
             delay-75 duration-100 z-50"
            onClick={handleChangeModal}
          >
            <span className="block text-md font-bold text-white">X</span>
          </div>

          {/* content */}
          <div className="h-fit">
            <div className="image_wrapper h-full">
              <img
                src="https://wafbec.org/sites/2024/wp-content/uploads/brizy/imgs/dr-andy-osakwe-2-e1702890756893-249x249x12x0x224x249x1702890756.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div
            className="
          px-1"
          >
            <div className=" absolute h-10 top-2 bg-gray-100 w-full px-2 pb-2">
              <h1 className=" font-bold ">NAME</h1>
              <p className="">church</p>
            </div>

            <div className="details mt-16 overflow-y-scroll">
              <div className="wrap px-2">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  est, iste consectetur architecto ea ducimus, reprehenderit
                  molestiae aliquid optio fuga quidem, odio quam dignissimos
                  repellat. Adipisciecusandae libero repellendus hic. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <br />

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  est, iste consectetur architecto ea ducimus, reprehenderit
                  molestiae aliquid optio fuga quidem, odio quam dignissimos
                  repellat. Adipisciecusandae libero repellendus hic. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MinistersModal;
