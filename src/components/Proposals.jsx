import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Proposals.module.css'

const Proposals = ({ proposals }) => {
  return (
    <div className={styles.proposals}>
      <ul>
        {proposals &&
          proposals.map((proposal) => (
            <Link key={proposal.id} to={`/proposal/${proposal.id}`}>
              <li className={styles[proposal.status]}>
                Proposal #{proposal.id} status: {proposal.status}
              </li>
            </Link>
          ))}
      </ul>
    </div>
  )
}

export default Proposals
