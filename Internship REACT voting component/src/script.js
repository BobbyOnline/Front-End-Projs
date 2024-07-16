/** 
  Task 1: In the Vote box, add a downvote button to the right of Upvote.
  Task 2: The number in the red box indicates the number of total votes received. It should be incremented by 1 when Upvote is pressed and decremented by 1 when downvote is pressed.
  Task 3: Each button will remain in the pressed position after it is clicked. If it is clicked again, the vote will be canceled. For instance, if Upvote is clicked, then the total vote is 1, but if Upvote is clicked again, total vote becomes 0. Only one button can remain in the pressed position. For instance, if Upvote is pressed down and the vote is 1, when Downvote is clicked, Upvote will automatically bounce and Downvote will be pressed down. Total vote changes from 1 to -1. This guarantees that the vote can only have 3 possible values: -1, 0, and 1 
**/

function Vote({ onVote, voteState }) {
  return (
    <div className="vote-container">
      <div className="vote-label">Cast Your Vote</div>
      <div className="vote-buttons">
        <button 
          className={`vote-button upvote ${voteState === 'up' ? 'active' : ''}`}
          onClick={() => onVote('up')}
        >
          <i className="fas fa-arrow-up"></i>
          <span>Upvote</span>
        </button>
        <button 
          className={`vote-button downvote ${voteState === 'down' ? 'active' : ''}`}
          onClick={() => onVote('down')}
        >
          <i className="fas fa-arrow-down"></i>
          <span>Downvote</span>
        </button>
      </div>
    </div>
  );
}

function Credit() {
  const [value, setValue] = React.useState(0);
  const [voteState, setVoteState] = React.useState(null);

  const handleVote = (type) => {
    if (type === voteState) {
      setValue(0);
      setVoteState(null);
    } else {
      setValue(type === 'up' ? 1 : -1);
      setVoteState(type);
    }
  };

  return (
    <div className="credit-container">
      <h1 className="component-title">Eden AI Internship Voting Component</h1>
      <p className="component-description">
        This component demonstrates a dynamic voting system. Click Upvote or Downvote buttons below to cast your vote!
      </p>
      <div className="vote-summary">
        <div className="vote-label">Current Vote Count:</div>
        <div className={`vote-count ${value > 0 ? 'positive' : value < 0 ? 'negative' : ''}`}>
          {value}
        </div>
      </div>
      <Vote onVote={handleVote} voteState={voteState} />
      <div className="vote-instructions">
        <p>Click once to vote. Click again to cancel your vote.</p>
        <p>Only one vote type (up or down) can be active at a time.</p>
      </div>
      <footer className="component-footer">
        <p>Created by Roberto (Bobby) Nieves | 6/25/2024 </p>
      </footer>
    </div>
  );
}

ReactDOM.render(<Credit />, document.getElementById("root"));