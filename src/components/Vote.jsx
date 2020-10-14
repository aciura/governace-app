import React from 'react'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'
import COLORS from './Colors'

export const Vote = ({ id, support, votes, voter }) => (
  <li style={{ listStyle: 'none', marginBottom: '0.25rem' }}>
    {support ? (
      <FaThumbsUp style={{ color: COLORS.Supported }} />
    ) : (
      <FaThumbsDown style={{ color: COLORS.Against }} />
    )}
    &nbsp;
    <a href={`https://etherscan.io/address/${voter.id}`}>{voter.id}</a>
    &nbsp;
    {support ? 'supported' : 'against'} with {Math.round(votes)}
  </li>
)
