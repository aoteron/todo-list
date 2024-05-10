export const Task = taskPropsObj => {
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
					taskPropsObj.handleClickComplete(taskPropsObj.singleTask.id)
				}
			>
				Complete
			</button>

			<button>Delete</button>
		</li>
	);
};

const a = 5 ;
