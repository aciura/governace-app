import React from 'react'
import { Vote } from './Vote'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

import styles from './Votes.module.css'

const COLORS = { Supported: 'green', Against: 'red' }

const Votes = ({ votes }) => {
  const [showVotes, setShowVotes] = React.useState(false)

  const numberOfApprovedVotes = votes
    .filter((vote) => vote.support)
    .reduce((votesCount, vote) => votesCount + Number(vote.votes), 0)

  const numberOfAgainstVotes = votes
    .filter((vote) => !vote.support)
    .reduce((count, vote) => count + Number(vote.votes), 0)

  const createVotesPieChartData = (votes) => {
    const data = votes.map((vote) => ({
      name: vote.support ? 'Supported' : 'Against',
      votes: +vote.votes,
    }))
    return data
  }
  const votesChartData = createVotesPieChartData(votes)

  return (
    <div className={styles.votes}>
      <table>
        <tr>
          <td>Supported:</td>
          <td>
            <span>{numberOfApprovedVotes}</span>
          </td>
        </tr>
        <tr>
          <td> Against: </td>
          <td>
            <span>{numberOfAgainstVotes}</span>
          </td>
        </tr>
        <tr>
          <td>All votes: </td>
          <td>
            {votes.reduce((count, vote) => count + Number(vote.votes), 0)}
          </td>
        </tr>
      </table>

      <div className={styles.pieChart}>
        {votes && (
          <PieChart width={300} height={300}>
            <Pie
              dataKey="votes"
              data={votesChartData}
              cx={100}
              cy={100}
              innerRadius={10}
              outerRadius={100}
              fill="grey"
            >
              {votesChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        )}
      </div>

      <button onClick={() => setShowVotes((prev) => !prev)}>Show voters</button>
      {showVotes && (
        <div>
          {votes && votes.map((vote) => <Vote key={vote.id} {...vote} />)}
        </div>
      )}
    </div>
  )
}

export default Votes
