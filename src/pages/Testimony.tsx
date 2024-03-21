import Header from "../components/Misc/Header";

const Testimony: React.FC = () => {
  return (
    <>
      <Header ShowHeader={true} />

      <section
        className="mt-20 flex justify-center items-center h-[100vh]"
        id="testimonials"
      >
        <h1 className="font-bold"> Testimony can come in here !!!!</h1>
      </section>
    </>
  );
};

export default Testimony;
