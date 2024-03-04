const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white fond-bold traking-tight">
          Eats.com
        </span>
        <span className="text-white fond-bold tracking-tight flex gap-4">
          <span>priacy policy</span>
          <span>Terms of service</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
