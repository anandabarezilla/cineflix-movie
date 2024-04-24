const Input = ({ onChange, value }) => {
  return (
    <input
      type="text"
      className="bg-[#2E1D20] focus:outline-none lg:py-2 w-full"
      placeholder="Cari film.."
      onChange={onChange}
      value={value}
      id="movie"
    />
  );
};

export default Input;
