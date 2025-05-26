import type { FC } from "react";

const Loader: FC = () => {
  return (
    <div className="grid place-items-center mt-40">
      <div className="spinner">
        <div className="spinner1"></div>
      </div>
    </div>
  );
};

export default Loader;
