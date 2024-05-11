import { useTasks } from "../context/TaskContext";

export const Task = taskPropsObj => {
	const { handleComplete } = useTasks();
	return (
		<li
			key={taskPropsObj.singleTask.id}
			style={{
				textDecoration: taskPropsObj.singleTask.isFinished
					? 'line-through'
					: 'none',
			}}
		>
			{taskPropsObj.singleTask.title}
			<button
				onClick={() =>
					handleComplete(taskPropsObj.singleTask.id)
				}
			>
				Complete
			</button>

			<button>Delete</button>
		</li>
	);
};

const a = 5 ;
