import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Priority } from "@/contants/priorityOptions";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features/Tasks/taskSlice";
import { useAppDispatch } from "@/redux/hook";
import { ITask } from "@/types";
import { Trash2 } from "lucide-react";
interface TProps {
  task: ITask;
}

const TaskCard = ({ task }: TProps) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="border px-5 py-3 rounded-md">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div
              title={cn("priority", task.priority)}
              className={cn("size-3 rounded-full", {
                "bg-red-500": task.priority === Priority.High,
                "bg-yellow-500": task.priority === Priority.Medium,
                "bg-green-500": task.priority === Priority.Low,
              })}
            ></div>
            <div
              className={cn(
                "font-semibold",
                {
                  "text-red-500": task.priority === Priority.High,
                  "text-yellow-500": task.priority === Priority.Medium,
                  "text-green-500": task.priority === Priority.Low,
                },
                {
                  "line-through font-semibold": task.isCompleted,
                }
              )}
            >
              {task.title}
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Button
              onClick={() => dispatch(deleteTask(task.id))}
              variant="link"
              className="p-0 text-red-500"
            >
              <Trash2 />
            </Button>
            <Checkbox onClick={() => dispatch(toggleCompleteState(task.id))} />
          </div>
        </div>
        <p className="mt-5">{task.description}</p>
      </div>
    </div>
  );
};

export default TaskCard;
