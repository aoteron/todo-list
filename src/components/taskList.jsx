import { Task } from './task';
import { useTasks } from '../context/TaskContext';

export const TaskList = () => {
	const { tasks } = useTasks();
		return (
		<ul>
			{tasks.map((singleTask) => (
				<Task
					key={singleTask.id}
					singleTask={singleTask}
				/>
			))}
		</ul>
	);
};
