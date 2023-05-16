import React from 'react';
import './DoList.css';
import dog from '../../utils/temp/dog.png';
import warrior from '../../utils/temp/warrior.png';
import cobra from '../../utils/temp/cobra.png';
import triangle from '../../utils/temp/triangle.png';
import tree from '../../utils/temp/tree.png';
import chair from '../../utils/temp/chair.png';
import shoulderStand from '../../utils/temp/sholderstand.png';

const poseImage = document.getElementById("pose-image");
const poseButtonName = document.getElementById("pose-button-name");

const imageName = poseImage.src.split("/").pop().split(".")[0];
poseButtonName.textContent = imageName;
const yogaPoses = [
  { name: 'Dog', image: dog },
  { name: 'Warrior I', image: warrior },
  { name: 'Cobra', image: cobra },
  { name: 'Triangle', image: triangle },
  { name: 'Tree', image: tree },
  { name: 'Chair', image: chair },
  { name: 'Shoulder Stand', image: shoulderStand },
];

const dailyWorkoutSchedule = [
  { date: '2023-05-10', completed: true },
  { date: '2023-05-11', completed: false },
  { date: '2023-05-12', completed: true },
];

const DoList = () => {
  return (
    <div className="do-list">
    <div className="columns">
        <div className="left-column">
          <h2 className='center'>Try now</h2>
          <ul className="yoga-poses">
            {yogaPoses.map((pose, index) => (
              <li key={index} className="pose-button">
                <img  id="pose-image" src={pose.image} alt={pose.name} />
                <span id="pose-button-name" class="pose-button-name"></span>
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
    </div>
    </div>
    </div>
  );
};

export default DoList;