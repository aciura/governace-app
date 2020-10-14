import React from 'react'

export const Vote = ({ id, support, votes }) => (
  <div>
    {support ? 'SUPPORTED' : 'AGAINST'} {votes}
  </div>
)
