import test1 from "../assets/test1.jpg";

const Hero = () => {
  return (
    <div>
      <img src={test1} className="w-full max-h-[600px] object-cover" />
    </div>
  );
};

export default Hero;
