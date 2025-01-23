import React, { useState } from 'react';
import PollOption from './PollOption';
import PollResults from './PollResults';

const Poll: React.FC = () => {
  const [options, setOptions] = useState([
    { id: 1, text: 'Option 1', votes: 0 },
    { id: 2, text: 'Option 2', votes: 0 },
    { id: 3, text: 'Option 3', votes: 0 },
  ]);
  const [voted, setVoted] = useState(false);

  const handleVote = (id: number) => {
    setOptions(options.map(option => 
      option.id === id ? { ...option, votes: option.votes + 1 } : option
    ));
    setVoted(true);
  };

  return (
    <div>
      <h1>Interactive Poll</h1>
      {!voted ? (
        options.map(option => (
          <PollOption key={option.id} option={option} onVote={handleVote} />
        ))
      ) : (
        <PollResults options={options} />
      )}
    </div>
  );
};

export default Poll;