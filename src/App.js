import { useState } from "react";
import CreateTaskComponent from "./components/CreateTaskComponent";
import TodoList from "./components/TodoList";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {isModalOpen && <CreateTaskComponent setIsModalOpen={setIsModalOpen} />}
      <div className="bg-gray-100 h-48 flex justify-center items-center">
        <div>
          <h1 className="text-3xl"> Todo List App</h1>
          <button
            className="px-3 py-1 mt-2 bg-blue-600 text-gray-50 ml-10"
            onClick={() => {
              setIsModalOpen(!isModalOpen);
            }}
          >
            Create Task
          </button>
        </div>
      </div>

      <TodoList />
    </>
  );
}

export default App;
