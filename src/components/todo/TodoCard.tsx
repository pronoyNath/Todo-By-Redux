import { FaTrashCan } from "react-icons/fa6";
import { Button } from "../ui/button";
import { MdEditSquare } from "react-icons/md";

const TodoCard = () => {
  return (
    <div className=" border rounded-xl flex justify-between items-center p-3">
      <input
        type="checkbox"
        className="form-checkbox h-6 w-6 !text-green-600 rounded-full"
        name=""
        id=""
      />
      <p className="font-semibold">Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="space-x-4">
        <Button className="bg-red-500  text-xl">
          <FaTrashCan />
        </Button>
        <Button className="bg-[#5C53F3]  text-xl">
          <MdEditSquare />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
