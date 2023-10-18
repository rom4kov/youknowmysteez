declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.jpg";

declare const process: {
  env: {
    REACT_APP_STRIPE_PUBLISHABLE_KEY: string;
  };
};
