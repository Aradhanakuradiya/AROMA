import React from 'react';

interface PollResultsProps {
  options: { id: number, text: string, votes: number }[];
}

const PollResults: React.FC<PollResultsProps> = ({ options }) => {
  return (
    <div>
      <h2>Results</h2>
      {options.map(option => (
        <div key={option.id}>
          {option.text}: {option.votes} votes
        </div>
      ))}
    </div>
  );
};

export default PollResults;