interface BannerProps {
  content: string;
  scripture: string;
  image: string;
}

const Banner = ({ content, scripture, image }: BannerProps) => {
  return (
    <>
      <div
        className="banner h-[300px] md:h-[350px] w-full relative bg-black"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "soft-light",
          backgroundColor: "gray",
        }}
      >
        <div className="wrapper_content h-full w-full flex justify-center flex-col px-5">
          <h1 className="text-white text-4xl md:w-[70%] lg:w-50 w-full font-bold">
            {content}
          </h1>
          <p className="text-white font-medium">{scripture}</p>
        </div>
      </div>
    </>
  );
};

export default Banner;
