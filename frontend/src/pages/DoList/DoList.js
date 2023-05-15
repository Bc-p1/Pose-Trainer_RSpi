import React from 'react';
import './DoList.css';

const yogaPoses = [
  { name: 'Downward Dog', image: 'path/to/image1' },
  { name: 'Warrior I', image: 'path/to/image2' },
  { name: 'Warrior II', image: 'path/to/image3' },
  { name: 'Triangle', image: 'path/to/image4' },
  { name: 'Tree', image: 'path/to/image5' },
  { name: 'Bridge', image: 'path/to/image6' },
  { name: 'Child\'s Pose', image: 'path/to/image7' },
  { name: 'Corpse Pose', image: 'path/to/image8' },
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