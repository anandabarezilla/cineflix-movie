const TitlePage = ({ title, subtitle }) => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-3">{title}</h1>
        <span className="text-slate-300 text-sm sm:text-md lg:text-lg italic">{subtitle}</span>
      </div>
      <hr className="border border-secondary w-1/2 lg:w-1/3 mx-auto m-5" />
    </div>
  );
};

export default TitlePage;
