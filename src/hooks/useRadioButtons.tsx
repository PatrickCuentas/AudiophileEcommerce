import { useState } from "react";

export default function useRadioButtons(name: string, defaultValue: string) {
  const [value, setState] = useState<any>(defaultValue);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const inputProps = {
    name,
    type: "radio",
    onChange: handleChange,
  };

  return [value, inputProps];
}
