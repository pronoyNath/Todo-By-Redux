import TodoContainer from "../components/todo/TodoContainer";
import Container from "../components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h3 className="text-3xl font-semibold text-center mb-3 mt-10">Todo Lists</h3>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
