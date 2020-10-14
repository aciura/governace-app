import axios from 'axios'

export const graphUrl =
  'https://api.thegraph.com/subgraphs/name/powerpool-finance/powerpool-governance'

export const goveranceQuery = `{
  governances {
    id
    proposals
    proposalsQueued
    currentTokenHolders
    totalTokenHolders
    currentDelegates
    totalDelegates
    delegatedVotes
  }
}`

const tokenHoldersQuery = `{
  tokenHolders(where: { tokenBalance_gt: 1}) {
    tokenBalance
    delegate {
      delegatedVotes
    }
  }
}`

const proposalsQuery = `{
  proposals {
    id
    status
    description
    votes(
      where: {votes_gt: 1}
    ) {
      id
      support
      votes
    }
  }
}`

const getGovernanceData = async () => {
  try {
    const result = await axios.post(graphUrl, { query: goveranceQuery })
    console.log('getGovernanceData', result)
    return result.data.data.governances[0]
  } catch (error) {
    console.error(error)
    return {}
  }
}

const getTokenHolders = async () => {
  try {
    const result = await axios.post(graphUrl, { query: tokenHoldersQuery })
    console.log('tokenHoldersQuery', result)
    return result.data.data
  } catch (error) {
    console.error(error)
    return {}
  }
}

const getProposals = async () => {
  try {
    const result = await axios.post(graphUrl, { query: proposalsQuery })
    console.log('getProposals', result)
    return result.data.data.proposals
  } catch (error) {
    console.error(error)
    return {}
  }
}

export default {
  getGovernanceData,
  getTokenHolders,
  getProposals,
}
