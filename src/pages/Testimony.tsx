import TestimonyCarousel from "../components/Testimony/TestimonyCarousel";
import TestimonyForm from "../components/Testimony/TestimonyForm";

const Testimony = () => {
  return (
    <div className="form md:w-[80%] mx-auto py-10">
      {/* carousel */}
      <TestimonyCarousel />

      {/* form */}
      <TestimonyForm />
    </div>
  );
};

export default Testimony;
