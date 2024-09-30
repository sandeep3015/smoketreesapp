import React from 'react';
import { Link } from 'react-router-dom';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

import './SuccessPage.css'

const SuccessPage = () => {
    return (
        <div className='registered-container'>
            <TaskAltIcon className='success-icon'/>
            <h2 className='register-text'>Registered Successfully</h2>
            <Link to="/" >
                <button className='back-button'>Back</button>
            </Link>
        </div>
    )
}

export default SuccessPage