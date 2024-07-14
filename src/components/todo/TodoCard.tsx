import { Button } from "../ui/button";

const TodoCard = () => {
  return (
    <div className=" border rounded-xl flex justify-between items-center p-3">
      <input type="checkbox" className="form-checkbox h-6 w-6 !text-green-600 rounded-full" name="" id="" />
      <p className="font-semibold">Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="space-x-4">
        <Button>Del</Button>
        <Button>Edit</Button>
      </div>
    </div>
  );
};

export default TodoCard;
