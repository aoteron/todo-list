import { TaskList } from './components/taskList';
import { useState } from 'react';

function App() {
	const initialTasks = [
		{ id: 1, title: 'Task 1', isFinished: false },
		{ id: 2, title: 'Task 2', isFinished: false },
		{ id: 3, title: 'Task 3', isFinished: false },
		{ id: 4, title: 'Task 4', isFinished: false },
		{ id: 5, title: 'Task 5', isFinished: false },
	];

	console.log(initialTasks);

	const [tasks, setTasks] = useState(initialTasks);

	const handleComplete = selectedTaskId => {
		const newState = [];
		tasks.forEach(task => {
			if (task.id === selectedTaskId) {
				task.isFinished = !task.isFinished;
			}
			newState.push(task);
		});
		setTasks(newState);
	};

	return (
		<>
			<h1>TODO LIST</h1>
			<TaskList myCustomTasks={tasks} handleComplete={handleComplete} />
		</>
	);
}

export default App;
