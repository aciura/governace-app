import React from 'react'
import governanceService from '../services/governanceService'
import { Proposal } from './Proposal'
import { Switch, Route, useParams, Link } from 'react-router-dom'

import styles from './Governance.module.css'
import Proposals from './Proposals'

const Governance = () => {
  const [governance, setGovernance] = React.useState(null)
  const [proposals, setProposals] = React.useState(null)
  // const [tokenHolders, setTokenHolders] = React.useState(null)

  const getData = async () => {
    const governance = await governanceService.getGovernanceData()
    setGovernance(governance)
    const proposals = await governanceService.getProposals()
    setProposals(proposals)
    // const holders = await governanceService.getTokenHolders()
    // setTokenHolders(holders)
  }

  React.useEffect(() => {
    getData()
  }, [])

  const ProposalRoute = () => {
    const { id } = useParams()
    if (!proposals) return null

    const proposal = proposals.filter((prop) => prop.id === id)
    if (!proposal || proposal.length === 0) {
      return <div>Proposal with #{id} not found</div>
    }
    return <Proposal {...proposal[0]} />
  }

  return (
    <div className={styles.governance}>
      <header className={styles.header}>
        <h1>
          <Link to={'/'}>Governance</Link>
        </h1>
      </header>
      <div className={styles.main}>
        {governance && (
          <div className={styles.goverananceTable}>
            <table>
              <tbody>
                <tr>
                  <td>Token Holders:</td>
                  <td>{governance.currentTokenHolders}</td>
                </tr>
                <tr>
                  <td>Delegates:</td>
                  <td>{governance.currentDelegates}</td>
                </tr>
                <tr>
                  <td>Proposals:</td>
                  <td>{governance.proposals}</td>
                </tr>
                <tr>
                  <td>Proposal Queued:</td>
                  <td>{governance.proposalsQueued}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <Switch>
          <Route path="/proposal/:id">
            <ProposalRoute />
          </Route>
          <Route path="/">
            <Proposals proposals={proposals} />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default Governance
