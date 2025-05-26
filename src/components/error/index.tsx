import { type FC } from "react";
interface Props {
  message: string;
}
const Error: FC<Props> = ({ message }) => {
  return (
    <div className="grid place-items-center">
      <div className=" bg-red-200 w-lg rounded p-6 flex flex-col gap-5 mt-44 text-center text-black">
        <span>
          {" "}
          <strong>Error: </strong>
          {message}
        </span>
      </div>
    </div>
  );
};

export default Error;
