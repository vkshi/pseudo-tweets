import React, { FC } from 'react';
import  styled, { css } from 'styled-components'

export interface TweetProps {
    avatarURL: string;
    name: string;
    comment: string;
    verified: boolean
}

const StyledTweet = styled.div`
  width: 500px;
  height: 200px;
  display: flex;
  flex-direction: column;
`
const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledIcon = styled.img`
  width: 80px;
  height: 80px;
  margin: 10px;
  border-radius: 100%;
`

const StyledVerified = styled.span`
  
  ${(props: { verified: boolean }) => props.verified && css`
    color: rgb(0, 255, 0);

    &::after {
    content: '✓';
    }
    `}
`

const StyledComment = styled.p`
  text-align: left;
  color: grey;
  padding: 2px 8px;
`


const Tweet: FC<TweetProps> = ({avatarURL, name, comment, verified}) => {
    return (
        <StyledTweet>
            <StyledHeader>
                <StyledIcon src={avatarURL} /><h1>{name} <StyledVerified verified={verified}> </StyledVerified></h1>
            </StyledHeader>
            <StyledComment>{comment}</StyledComment>
        </StyledTweet>
    )
}

export default Tweet;