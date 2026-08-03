export const componentTemplate = (name: string) => `
import React from "react";

export const ${name} = () => {
  return <div>${name} component</div>;
};
`;
