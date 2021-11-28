import { useRef } from "react";
import classes from "./TaskForm.module.css";
const TaskForm = (props) => {
  const enterValueRef = useRef();
  const SubmitHandler = (event) => {
    event.preventDefault();

    const enteredValue = enterValueRef.current.value;
    if (enteredValue.trim().length > 0) {
      props.onEnterTask(enteredValue);
    }
  };

  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <input type="text" ref={enterValueRef} />
      <button>{props.loading ? "Sending..." : "Add task"}</button>
    </form>
  );
};
export default TaskForm;
