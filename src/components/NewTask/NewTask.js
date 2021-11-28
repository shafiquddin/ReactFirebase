import Section from "../UI/Section";
import TaskForm from "../NewTask/TaskForm";
import useHttp from "../../hooks/use-https";

const NewTask = (props) => {
  const { error, isLoading, sendRequest: creatTask } = useHttp();
  const transData = (data, taskText) => {
    const generatedId = data.name;
    const generatedtask = { id: generatedId, text: taskText };
    props.onAddTask(generatedtask);
  };
  const addtaskHandler = async (taskText) => {
    creatTask(
      {
        url: "https://react-c0255-default-rtdb.firebaseio.com//tasks.json",
        method: "POST",
        body: JSON.stringify({ text: taskText }),
        headers: {
          "Content-Type": "Application.json",
        },
      },
      transData.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={addtaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};
export default NewTask;
