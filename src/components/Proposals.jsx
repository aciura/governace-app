import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Proposals.module.css'

const Proposals = ({ proposals }) => {
  return (
    <div className={styles.proposals}>
      <ul>
        {proposals &&
          proposals.map((proposal) => (
            <li key={proposal.id} className={styles[proposal.status]}>
              <Link to={`/proposal/${proposal.id}`}>
                Proposal #{proposal.id} status: {proposal.status}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Proposals
