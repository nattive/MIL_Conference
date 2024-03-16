import { FC, useContext } from "react";
import { BsArrowRight } from "react-icons/bs";
import MinistersModal from "./MinistersModal";
import { useMinisterCtx } from "../context/MinistersContext";

const Ministers = [
  {
    image:
      "https://wafbec.org/sites/2024/wp-content/uploads/brizy/imgs/dr-andy-osakwe-2-e1702890756893-249x249x12x0x224x249x1702890756.png",
    name: "Pst. Daniel O .Sam",
    title: "Senior Pst",
    church: "WWW",
  },
  {
    image:
      "https://wafbec.org/sites/2024/wp-content/uploads/brizy/imgs/jerry-eze-322x249x49x0x224x249x1701355625.png",
    name: "Pst. Sam Daniel O .",
    title: "Senior Adviser",
    church: "MMM",
  },
  {
    image:
      "https://wafbec.org/sites/2024/wp-content/uploads/brizy/imgs/kyula-253x249x14x0x224x249x1701253556.png",
    name: "Admin. Daniel O .Sam",
    title: "Senior Admin",
    church: "DDD",
  },
  {
    image:
      "https://wafbec.org/sites/2024/wp-content/uploads/brizy/imgs/prophet-gideon-e1701355683981-294x249x35x0x224x249x1701355685.png",
    name: "Pst. Mike O ",
    title: "Senior Pst",
    church: "RRR",
  },
];

const MinistersList: FC = () => {
  const { OpenMinisterModal, setOpenMinistersModal } =
    useContext(useMinisterCtx);
  //   const [selectedMinister] = useState(
  //     {} as { name: string; title: string; church: string; image: string }
  //   );

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSelected = () => {
    if (setOpenMinistersModal) {
      setOpenMinistersModal(!OpenMinisterModal);
    }
  };
  return (
    <>
      {/* Minister Modal */}
      {!OpenMinisterModal && <MinistersModal />}

      {/* Ministers List  */}

      <section className="mx-auto py-20 px-4 relative">
        <div className="wrap grid grid-cols-2 gap-4 md:grid-cols-4">
          {Ministers.map((minister, i) => (
            <>
              <div key={i} className="relative">
                <div className="details_wrapper flex flex-col justify-center items-center ">
                  <div className="h-40 w-40 cursor-pointer relative ">
                    <span
                      className=" absolute bottom-2 right-2 z-20  rounded-full bg-green-700  
                    shadow-lg flex  h-10  w-10 justify-center items-center group cursor-pointer"
                      onClick={handleSelected}
                    >
                      <BsArrowRight className="transition-all duration-150 group-hover:translate-x-1 text-white text-xl" />
                    </span>
                    <div className="ii rounded-full h-full w-full overflow-hidden relative">
                      <img
                        src={minister.image}
                        alt={minister.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="nam mt-4 text-center">
                  <h2 className="font-bold text-sm">{minister.name}</h2>
                  <h2 className="text-xl  ">{minister.church}</h2>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default MinistersList;
