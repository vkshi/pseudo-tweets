import React from 'react';
import Tweet, { TweetProps } from '../tweet/styledTweet'
import tweetData from '../../data/tweetData.json'
import styled from 'styled-components';

const StyledCard = styled.div`
    border: 1px solid grey;
    border-radius: 10px;
    width: 500px;
    height: 200px;
    margin: 10px;
`

const Card: React.FC = () => {
    return (
        <div> {
        (tweetData as [TweetProps]).map(({avatarURL, name, comment, verified}) => {
            return (
                <StyledCard>
                    <Tweet
                        avatarURL={avatarURL}
                        name={name}
                        comment={comment}
                        verified={verified}
                        />
                </StyledCard>
            )
        })
    }
    </div>
    )
}

export default Card;