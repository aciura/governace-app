import React from 'react'
import governanceService from '../services/governanceService'
import { Proposal } from './Proposal'
import styles from './Governance.module.css'

const Governance = () => {
  const [governance, setGovernance] = React.useState(null)
  const [proposals, setProposals] = React.useState(null)
  const [tokenHolders, setTokenHolders] = React.useState(null)

  const getData = async () => {
    const governance = await governanceService.getGovernanceData()
    setGovernance(governance)
    const proposals = await governanceService.getProposals()
    setProposals(proposals)
    const holders = await governanceService.getTokenHolders()
    setTokenHolders(holders)
  }

  React.useEffect(() => {
    getData()
  }, [])

  return (
    <div className={styles.governance}>
      <h2>Governance</h2>
      {JSON.stringify(governance)}
      {proposals && proposals.map((proposal) => <Proposal {...proposal} />)}
      <span></span>
    </div>
  )
}

export default Governance
