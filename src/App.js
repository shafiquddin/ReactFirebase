import React, { useEffect, useState } from "react";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import useHttp from "./hooks/use-https";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const { error, isLoading, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transData = (data) => {
      const loadedtask = [];
      for (const keytask in data) {
        loadedtask.push({ id: keytask, text: data[keytask].text });
      }
      setTasks(loadedtask);
    };
    fetchTasks(
      { url: "https://react-c0255-default-rtdb.firebaseio.com//tasks.json" },
      transData
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTask) => prevTask.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
};
export default App;
