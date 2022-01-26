import { useState } from "react";

export const useCustomToggle = (active = false) => {
  const [isActive, setIsActive] = useState(active);
  console.log({ active });
  return { isActive, setIsActive };
};
