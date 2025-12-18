import React from 'react'
import classes from './Results.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'


function Results() {
  const { categoryName } = useParams();
  return (
    <LayOut>
      <div>
        Results
      </div>
    </LayOut>
  )
}

export default Results
