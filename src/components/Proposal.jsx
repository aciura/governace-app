import React from 'react'
import Votes from './Votes'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import { Link } from 'react-router-dom'
import { FaCaretSquareLeft } from 'react-icons/fa'

import styles from './Proposal.module.css'

export const Proposal = ({ id, status, votes, description }) => {
  // const chartData = [
  //   { votes: numberOfApprovedVotes, name: 'Supported' },
  //   { votes: numberOfAgainstVotes, name: 'Against' },
  // ]
  console.log('Proposal', { id, status, votes, description })

  return (
    <div className={styles.proposal}>
      <Link to="/">
        <FaCaretSquareLeft style={{ fontSize: '32px' }} />
      </Link>
      <h3>
        Proposal <span>ID:{id}</span>
        &nbsp; Status:&nbsp;{status}
      </h3>

      <div className={styles.main}>
        <pre className="wrapword">{description}</pre>

        <Votes votes={votes} />
      </div>
    </div>
  )
}
