import InputForm from "../Elements/Input";

const SearchInput = ({ onChange, onSubmit }) => {
  return (
    <>
      <div className="border border-secondary rounded-md p-1 bg-[#2E1D20]">
        <InputForm
          display="flex"
          onSubmit={onSubmit}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default SearchInput;
