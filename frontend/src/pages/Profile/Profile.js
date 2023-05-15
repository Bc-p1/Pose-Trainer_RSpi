import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Profile.css'
const Profile = ({ user, workoutData }) => {
  // Prepare workoutData for the chart
  const chartData = workoutData.map((workout) => ({
    name: workout.name,
    progress: workout.progress,
  }));

  return (
    <div className='profile-container'>
      <h1>{user.name}'s Profile</h1>
      <p>Email: {user.email}</p>
      <BarChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="progress" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Profile;