import React from 'react'
import Votes from './Votes'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import { Link } from 'react-router-dom'
import { FaBackspace } from 'react-icons/fa'

import styles from './Proposal.module.css'

export const Proposal = ({ id, status, votes, description, proposer }) => {
  return (
    <div className={styles.proposal}>
      <Link to="/">
        <FaBackspace style={{ fontSize: '24px', marginBottom: '1rem' }} />
      </Link>
      <h3>
        Proposal <span>ID:{id}</span>
        &nbsp; Status:&nbsp;{status}
      </h3>
      <div>
        Proposer:{' '}
        <a href={`https://etherscan.io/address/${proposer.id}`}>
          {proposer.id}
        </a>
      </div>

      <div className={styles.main}>
        <Votes votes={votes} />
        <pre className="wrapword">{description}</pre>
      </div>
    </div>
  )
}
