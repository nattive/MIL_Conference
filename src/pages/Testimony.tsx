import Banner from "../components/Misc/Banner";
import Header from "../components/Misc/Header";

const Testimony: React.FC = () => {
  return (
    <>
      <Header ShowHeader={true} />

      <section className="mt-20">
        <div className="top">
          <Banner
            content="And they overcame him by the blood of the Lamb, and by the word of their testimony."
            scripture="Revelation 12:11"
            image="/assets/banner2.jpeg"
          />
        </div>
        <h1 className=""> testimony oo</h1>
      </section>
    </>
  );
};

export default Testimony;
