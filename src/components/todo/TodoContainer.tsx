import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between my-5 px-5 ">
        <AddTodoModal/>
        <TodoFilter/>
      </div>
      <div className="bg-primary-gradient space-y-2 w-full h-full rounded-xl p-[7px]">
        {/* <div className="bg-white p-3 flex justify-center items-center rounded-xl h-full w-full">
          <p className="capitalize font-bold text-center rounded-lg text-2xl">
            There is no task pending
          </p>
        </div> */}
        <div className="bg-white rounded-xl space-y-2 border p-[8px]">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
