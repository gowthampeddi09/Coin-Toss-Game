// Write your code here

import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    head: 0,
    tail: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  tossACoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (tossResult === 0) {
      this.setState(prevState => ({
        head: prevState.head + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tail: prevState.tail + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {head, tail, imageUrl} = this.state
    const total = head + tail
    return (
      <div className="coin-toss-game-container">
        <div className="coin-toss-game-card">
          <h1 className="card-heading">Coin Toss Game</h1>
          <p className="head-or-tail-text">Heads (or) Tails</p>
          <img src={imageUrl} className="coin" alt="toss result" />
          <button
            className="toss-coin-btn"
            type="button"
            onClick={this.tossACoin}
          >
            Toss Coin
          </button>
          <div className="toss-information-card">
            <p className="toss-information">Total:{total} </p>
            <p className="toss-information">Heads: {head}</p>
            <p className="toss-information">Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
