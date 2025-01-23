import React from 'react';

interface PollOptionProps {
  option: { id: number, text: string, votes: number };
  onVote: (id: number) => void;
}

const PollOption: React.FC<PollOptionProps> = ({ option, onVote }) => {
  return (
    <div>
      <button onClick={() => onVote(option.id)}>{option.text}</button>
    </div>
  );
};

export default PollOption;