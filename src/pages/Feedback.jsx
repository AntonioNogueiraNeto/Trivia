import React, { Component } from 'react';
import { connect } from 'react-redux';
import { number } from 'prop-types';
import Header from '../components/Header';

class Feedback extends Component {
  state = {
    couldBeBetter: false,
    wellDone: false,
  };

  componentDidMount() {
    this.verifyAssertions();
  }

  verifyAssertions = () => {
    const { assertions } = this.props;

    const three = 3;

    if (assertions < three) {
      this.setState({ couldBeBetter: true });
    } else if (assertions >= three) {
      this.setState({ wellDone: true });
    }
  };

  handlePlayAgain = () => {
    const { history } = this.props;
    history.push('/');
  };

  handleRanking = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  render() {
    const { couldBeBetter, wellDone } = this.state;
    const { assertions, score } = this.props;

    return (
      <>
        <Header />
        <h2 data-testid="feedback-total-question">{assertions}</h2>
        <h2 data-testid="feedback-total-score">{score}</h2>
        {
          couldBeBetter && (
            <h1 data-testid="feedback-text">Could be better...</h1>
          )
        }
        {
          wellDone && (
            <h1 data-testid="feedback-text">Well Done!</h1>
          )
        }
        <div>
          <button
            type="button"
            data-testid="btn-play-again"
            onClick={ this.handlePlayAgain }
          >
            Play Again

          </button>
          <button
            type="button"
            data-testid="btn-ranking"
            onClick={ this.handleRanking }
          >
            Ranking
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

Feedback.propTypes = {
  assertions: number,
}.isRequired;

export default connect(mapStateToProps)(Feedback);
