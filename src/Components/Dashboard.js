import React, {useState} from 'react';
import app from "../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
      return (
        <h1>List of Guests Here</h1>
      );
};

export default Dashboard;
