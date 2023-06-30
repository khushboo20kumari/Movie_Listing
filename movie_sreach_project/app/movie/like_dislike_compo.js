import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
function LikeDislikeButton({ initialLikes = 0 }) {
  const [likes, setLikes] = useState(initialLikes);
  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    if (likes > 0) {
      setLikes(likes - 1);
    }
  };

  return (
    <div>
      <FontAwesomeIcon icon={faThumbsUp} className="icon" onClick={handleLike} />
      <span>{likes}</span>
      <FontAwesomeIcon icon={faThumbsDown} onClick={handleDislike} className="icon"/>

    </div>
  );
}

export default LikeDislikeButton;

