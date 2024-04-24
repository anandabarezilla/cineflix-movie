import { FiSearch } from "react-icons/fi";

import Input from "./Input";
import Label from "./Label";

const InputForm = ({ display = "block", onSubmit, onChange, value }) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`${display} items-center gap-2`}
    >
      <Label icon={<FiSearch size={25} />} />
      <Input
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default InputForm;
