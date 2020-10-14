import React from 'react'
import { Vote } from './Vote'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

import styles from './Proposal.module.css'

export const Proposal = ({ id, status, votes, description }) => {
  const numberOfApprovedVotes = votes
    .filter((vote) => vote.support)
    .reduce((votesCount, vote) => votesCount + Number(vote.votes), 0)

  const numberOfAgainstVotes = votes
    .filter((vote) => !vote.support)
    .reduce((count, vote) => count + Number(vote.votes), 0)

  const chartData = [
    { votes: numberOfApprovedVotes, name: 'Supported' },
    { votes: numberOfAgainstVotes, name: 'Against' },
  ]
  const COLORS = { Supported: 'green', Against: 'red' }

  const createVotesPieChartData = (votes) => {
    const data = votes.map((vote) => ({
      name: vote.support ? 'Supported' : 'Against',
      votes: +vote.votes,
    }))
    console.log(data)
    return data
  }
  const votesChartData = createVotesPieChartData(votes)

  return (
    <div className={styles.proposal}>
      <h3>
        Proposal <span>ID:{id}</span>
      </h3>
      <h4>Status: {status}</h4>
      <pre>{description}</pre>

      <div className={styles.pieChart}>
        <PieChart width={300} height={300}>
          <Pie
            dataKey="votes"
            data={chartData}
            isAnimationActive={false}
            cx={100}
            cy={100}
            innerRadius={20}
            outerRadius={100}
            fill="grey"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </div>

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
        <div></div>
        <div></div>

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
        {votes && votes.map((vote) => <Vote {...vote} />)}
      </div>
    </div>
  )
}
