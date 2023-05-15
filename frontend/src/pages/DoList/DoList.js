import React from 'react';
import './DoList.css';

const yogaPoses = [
  { name: 'Downward Dog', image: 'frontend/src/utils/temp/dog.png' },
  { name: 'Warrior I', image: 'frontend/src/utils/temp/warrior.png' },
  { name: 'Cobra', image: 'frontend/src/utils/temp/cobra.png' },
  { name: 'Triangle', image: "frontend/src/utils/temp/triangle.png" },
  { name: 'Tree', image: 'frontend/src/utils/temp/tree.png' },
  { name: 'Bridge', image: 'path/to/image6' },
  { name: 'Child\'s Pose', image: 'path/to/image7' },
  { name: 'Shoulder Stand', image: 'path/to/image8' },
];

const dailyWorkoutSchedule = [
  { date: '2023-05-10', completed: true },
  { date: '2023-05-11', completed: false },
  { date: '2023-05-12', completed: true },
];

const DoList = () => {
  return (
    <div className="do-list">
      <h2>Yoga Poses</h2>
      <ul className="yoga-poses">
        {yogaPoses.map((pose, index) => (
          <li key={index}>
            <img src={pose.image} alt={pose.name} />
            <p>{pose.name}</p>
          </li>
        ))}
      </ul>

      <h2>Daily Workout Schedule</h2>
      <ul className="workout-schedule">
        {dailyWorkoutSchedule.map((workout, index) => (
          <li key={index} className={workout.completed ? 'completed' : ''}>
            {workout.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoList;