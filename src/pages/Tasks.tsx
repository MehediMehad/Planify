import { selectFilter, selectTasks } from "@/redux/features/Tasks/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);
  console.log(tasks);
  console.log(filter);

  return (
    <div>
      <h1>This is tasks component </h1>
    </div>
  );
};

export default Tasks;
