import React, { useState } from "react";

const Questions = [
  {
    "How far is the church from Akute?":
      "The venue is 101km away from the Oando filling station at the heart of akute",
  },
  {
    "Can i stream all service online?":
      "Absolutly yes, you can stream on all social media platform",
  },
  {
    "Is the program only for male?":
      "We are happy to inform you that the programm is for all demography",
  },
];

const Faq: React.FC = () => {
  const [selected, setSelected] = useState(null);
  const [showQModal, setShowQModal] = useState(false as boolean);
  const [question, setQuestion] = useState("" as string);

  const sendQuestion = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(question);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleShowAnswers = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <>
      {showQModal && (
        <section className="eQForm  flex justify-center items-center absolute top-0 bottom-0 right-0 left-0 z-50 ">
          <div
            className="overlay bg-black/60 top-0 bottom-0 right-0 left-0 absolute"
            onClick={() => {
              setShowQModal(!showQModal);
            }}
          ></div>

          <div className="mth_wrap relative rounded-lg w-[80%] md:w-fit">
            <div
              className="h-[20px] w-[20px] bg-white rounded-full absolute 
            -top-3 -right-5 flex items-center justify-center cursor-pointer hover:scale-105 transition-all delay-75 duration-100"
              onClick={() => {
                setShowQModal(!showQModal);
              }}
            >
              <span className="block text-xs font-bold text-green-700">X</span>
            </div>
            <div className="wrap relative overflow-hidden rounded-lg ">
              <div className="modal relative p-4">
                <h1 className="text-xl  font-bold mb-10 text-gray-600">ASK</h1>

                <form onSubmit={sendQuestion}>
                  <div className="flex flex-col space-y-9">
                    <textarea
                      rows={6}
                      cols={40}
                      name="question"
                      value={question}
                      id="question"
                      onChange={(e) => {
                        setQuestion(e.target.value);
                      }}
                      className="py-2 px-3 border-gray-300 border rounded-md outline-green-700"
                      placeholder="ASK A QUESTION !!"
                    />
                    <button
                      className="bg-green-700 px-2 text-md text-white rounded-md py-2
                   border-0 hover:bg-green-800 transition-all delay-75 duration-100 shadow-xl font-bold"
                      type="submit"
                    >
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
      <section className=" md:w-[50%] mx-auto  bg-white py-10 md:py-20 px-5">
        {/* Faq */}

        <div className="tp flex  items-center justify-between">
          <h1 className=" text-2xl md:text-4xl font-bold text-green-700">
            FAQ's
          </h1>

          <div
            className="div px-4 bg-green-700 rounded-full flex  justify-center items-center 
          hover:bg-green-800 hover:shadow-xl cursor-pointer transition-all delay-100 duration-100 hover:scale-105 group"
            onClick={() => setShowQModal(true)}
          >
            <span className="text-xl text-white font-bold group-hover:scale-105">
              Enquire
            </span>
          </div>
        </div>

        <div className="questions mt-20 w-[80%] mx-auto">
          {Questions.map((q, i) => (
            <div key={i} className="border-b last:border-0 mb-4">
              {Object.entries(q).map(([key, value]) => (
                <div
                  key={i}
                  className="mb-2"
                  onClick={() => handleShowAnswers(i)}
                >
                  <div className="keys mb-10 flex space-x-2 items-center cursor-pointer">
                    <span className="font-bold text-green-700 bold text-lg">
                      {selected !== i ? "+" : "-"}
                    </span>
                    <h1 className="text-xl font-bold">{key}</h1>
                  </div>

                  {/* values */}
                  {selected === i ? (
                    <div className="wrapperVAlues px-5 pb-2">
                      <div className="value border-l-2 border-green-700 pl-4">
                        <h1 className="text-md text-gray-500 font-light w-full">
                          {value}
                        </h1>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
