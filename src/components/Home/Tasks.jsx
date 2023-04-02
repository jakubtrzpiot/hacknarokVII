import {ScrollView} from 'react-native';
import TaskTile from './TaskTile';

const tasks = [
  {
    taskName: 'Set clear goals',
    description:
      'Set achievable goals for the day or week, and break them down into smaller tasks if needed.',
    dueDate: '2023-04-05',
  },
  {
    taskName: 'Prioritize tasks',
    description: 'Prioritize tasks based on their importance and urgency.',
    dueDate: '2023-04-02',
  },
  {
    taskName: 'Create a schedule',
    description: 'Create a daily or weekly schedule to help you stay on track.',
    dueDate: '2023-04-03',
  },
  {
    taskName: 'Break tasks into smaller chunks',
    description:
      'Break down larger tasks into smaller, more manageable chunks.',
    dueDate: '2023-04-04',
  },
  {
    taskName: 'Use a timer',
    description:
      'Use a timer to work on tasks for a set amount of time and take breaks in between.',
    dueDate: '2023-04-06',
  },
  {
    taskName: 'Eliminate distractions',
    description:
      'Eliminate distractions such as social media or email notifications while working.',
    dueDate: '2023-04-07',
  },
  {
    taskName: 'Reward yourself',
    description:
      'Reward yourself after completing a task or reaching a milestone.',
    dueDate: '2023-04-08',
  },
  {
    taskName: 'Set deadlines',
    description:
      'Set realistic deadlines for each task to keep yourself accountable.',
    dueDate: '2023-04-09',
  },
  {
    taskName: 'Start with the hardest task',
    description:
      'Tackle the hardest task first to avoid procrastinating on it.',
    dueDate: '2023-04-10',
  },
  {
    taskName: 'Stay organized',
    description:
      'Keep your workspace organized and clutter-free to avoid distractions.',
    dueDate: '2023-04-11',
  },
  {
    taskName: 'Take breaks',
    description: 'Take regular breaks to prevent burnout and stay refreshed.',
    dueDate: '2023-04-12',
  },
  {
    taskName: 'Get enough sleep',
    description:
      'Get enough sleep to ensure that you have the energy to tackle your tasks.',
    dueDate: '2023-04-13',
  },
  {
    taskName: 'Use positive self-talk',
    description:
      'Use positive self-talk to motivate yourself and stay focused.',
    dueDate: '2023-04-14',
  },
  {
    taskName: 'Avoid multitasking',
    description:
      'Avoid multitasking and focus on one task at a time to stay productive.',
    dueDate: '2023-04-15',
  },
  {
    taskName: 'Set specific time for checking emails',
    description:
      'Set a specific time to check and respond to emails rather than constantly checking them throughout the day.',
    dueDate: '2023-04-04',
  },
  {
    taskName: 'Use a task management tool',
    description:
      'Use a task management tool to keep track of your tasks and stay organized.',
    dueDate: '2023-04-05',
  },
  {
    taskName: 'Breaks for exercise',
    description:
      'Take breaks to exercise or stretch to stay energized and focused.',
    dueDate: '2023-04-06',
  },
  {
    taskName: 'Ask for help',
    description:
      'Ask for help or guidance from coworkers or mentors when needed.',
    dueDate: '2023-04-07',
  },
  {
    taskName: 'Take regular breaks',
    description:
      'Take regular breaks throughout the day to prevent burnout and stay productive.',
    dueDate: '2023-04-08',
  },
  {
    taskName: 'Keep a clean workspace',
    description:
      'Keep your workspace clean and organized to reduce distractions and increase focus.',
    dueDate: '2023-04-11',
  },
  {
    taskName: 'Delegate tasks',
    description:
      'Delegate tasks to others if possible to lighten your workload.',
    dueDate: '2023-04-12',
  },
  {
    taskName: 'Use the Pomodoro technique',
    description:
      'Use the Pomodoro technique to work in focused intervals and take breaks in between.',
    dueDate: '2023-04-13',
  },
  {
    taskName: 'Meditate',
    description:
      'Take a few minutes to meditate or practice mindfulness to clear your mind and reduce stress.',
    dueDate: '2023-04-14',
  },
  {
    taskName: 'Create a to-do list',
    description:
      'Create a to-do list for the day to help you stay organized and on track.',
    dueDate: '2023-04-02',
  },
  {
    taskName: 'Identify your most important task',
    description:
      'Identify the most important task for the day and focus on completing it first.',
    dueDate: '2023-04-02',
  },
  {
    taskName: 'Take a short walk',
    description: 'Take a short walk to get some fresh air and clear your mind.',
    dueDate: '2023-04-02',
  },
];

//make starred array
//make completed array

const Tasks = ({date}) => {
  return (
    <ScrollView className="mx-6">
      {tasks.map((task, i) =>
        date == task.dueDate ? <TaskTile {...task} key={i} /> : null,
      )}
    </ScrollView>
  );
};

export default Tasks;
