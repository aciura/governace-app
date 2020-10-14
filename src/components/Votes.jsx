import React from 'react'
import { Vote } from './Vote'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  // Legend,
  ResponsiveContainer,
} from 'recharts'
import Modal from 'react-modal'
import { FaBackspace } from 'react-icons/fa'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'
import COLORS from './Colors'

import styles from './Votes.module.css'

Modal.setAppElement('#root')

const Votes = ({ votes }) => {
  const [showVotes, setShowVotes] = React.useState(false)

  const numberOfApprovedVotes = Math.round(
    votes
      .filter((vote) => vote.support)
      .reduce((votesCount, vote) => votesCount + Number(vote.votes), 0),
  )

  const numberOfAgainstVotes = Math.round(
    votes
      .filter((vote) => !vote.support)
      .reduce((count, vote) => count + Number(vote.votes), 0),
  )

  const numberOfAllVotes = Math.round(
    votes.reduce((count, vote) => count + Number(vote.votes), 0),
  )

  const createVotesPieChartData = (votes) => {
    const data = votes.map((vote) => ({
      name: vote.support ? 'Supported' : 'Against',
      votes: Math.round(Number(vote.votes)),
    }))
    return data
  }
  const votesChartData = createVotesPieChartData(votes)

  return (
    <div className={styles.votes}>
      <table>
        <tbody>
          <tr>
            <td>Supported:</td>
            <td>
              <span>{numberOfApprovedVotes}</span>{' '}
              <FaThumbsUp style={{ color: COLORS.Supported }} />
            </td>
          </tr>
          <tr>
            <td>Against: </td>
            <td>
              <span>{numberOfAgainstVotes}</span>{' '}
              <FaThumbsDown style={{ color: COLORS.Against }} />
            </td>
          </tr>
          <tr>
            <td>All votes: </td>
            <td>{numberOfAllVotes}</td>
          </tr>
        </tbody>
      </table>

      <div className={styles.pieChart}>
        {votes && (
          <ResponsiveContainer>
            <PieChart>
              <Pie
                dataKey="votes"
                data={votesChartData}
                innerRadius={20}
                outerRadius={120}
                fill="grey"
              >
                {votesChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>

      <button onClick={() => setShowVotes((prev) => !prev)}>Show voters</button>

      <Modal
        isOpen={showVotes}
        onRequestClose={() => setShowVotes((prev) => !prev)}
        className={styles.modal}
        overlayClassName={styles.overlay}
        contentLabel="Votes"
      >
        <div>
          <div onClick={() => setShowVotes((prev) => !prev)}>
            <FaBackspace style={{ fontSize: '32px' }} />
          </div>
          {votes && votes.map((vote) => <Vote key={vote.id} {...vote} />)}
        </div>
      </Modal>
    </div>
  )
}

export default Votes
