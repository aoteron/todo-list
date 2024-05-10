import { Task } from './task';

export const TaskList = taskListPropsObj => {
	console.log('taskListPropsObj', taskListPropsObj);
	return (
		<ul>
			{taskListPropsObj.myCustomTasks.map(singleTask => (
				<Task
					key={singleTask.id}
					singleTask={singleTask}
					handleClickComplete={taskListPropsObj.handleComplete}
				/>
			))}
		</ul>
	);
};
