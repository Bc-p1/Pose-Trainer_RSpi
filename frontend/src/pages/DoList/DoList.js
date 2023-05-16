import React, { useEffect, useState } from 'react';
import './DoList.css';
import dog from '../../utils/temp/dog.png';
import warrior from '../../utils/temp/warrior.png';
import cobra from '../../utils/temp/cobra.png';
import triangle from '../../utils/temp/triangle.png';
import tree from '../../utils/temp/tree.png';
import chair from '../../utils/temp/chair.png';
import shoulderstand from '../../utils/temp/shoulderstand.png';

const yogaPoses = [
  { name: 'Dog', image: dog },
  { name: 'Warrior I', image: warrior },
  { name: 'Cobra', image: cobra },
  { name: 'Triangle', image: triangle },
  { name: 'Tree', image: tree },
  { name: 'Chair', image: chair },
  { name: 'Shoulder Stand', image: shoulderstand },
];

const dailyWorkoutSchedule = [
  { date: '2023-05-10', completed: true },
  { date: '2023-05-11', completed: false },
  { date: '2023-05-12', completed: true },
  { date: '2023-05-13', completed: false },
  { date: '2023-05-14', completed: true },
  { date: '2023-05-15', completed: false },
  { date: '2023-05-16', completed: true },
];

const holdingTime = (poseIndex, date) => {
  const startDate = new Date('2023-05-01');
  const currentDate = new Date(date);
  const daysDifference = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
  return 10 + poseIndex * 10 + daysDifference * 10;
};

export default function DoList() {
  const [imageName, setImageName] = useState('');

  useEffect(() => {
    const poseImage = document.getElementById("pose-image");
    const imageName = poseImage.src.split("/").pop().split(".")[0];
    setImageName(imageName);
  }, []);

  return (
    <div className="do-list">
      <div className="columns">
        <div className="left-column">
          <h2 className='center'>Try now</h2>
          <ul className="yoga-poses">
            {yogaPoses.map((pose, index) => (
              <li key={index} id="pose-container" className="pose-button">
                <img id="pose-image" src={pose.image} alt={pose.name} />
                <span id="pose-button-name" className="pose-button-name">{imageName}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="right-column">
          <h2>Progress</h2>
          <ul className="workout-schedule">
            {dailyWorkoutSchedule.map((workout, index) => (
              <li key={index} className={workout.completed ? 'completed' : ''}>
                {workout.date}
              </li>
            ))}
          </ul>
          <h2>Poses vs. Holding Time</h2>
          <div className="bar-chart">
            {yogaPoses.map((pose, index) => (
              <div key={index} className="bar" style={{ height: holdingTime(index, '2023-05-14') + 'px' }}>
                <span className="bar-label">{pose.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>)};