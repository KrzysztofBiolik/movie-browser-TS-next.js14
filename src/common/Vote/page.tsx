import {Average, Count, OutOf, Star, Wrapper} from "./styled";

interface VoteProps {
    vote?: {
        average?: number,
        count?: number,
    },
    small?: boolean,
    backdrop?: boolean,
}

export const Vote = ({vote, small, backdrop}: VoteProps) => (
    <Wrapper
        small={small}
        backdrop={backdrop}>

        {!!vote?.average && (
            <>
                <Star backdrop={backdrop}/>
                <Average
                    small={small}
                    backdrop={backdrop}
                >
                    {vote.average.toFixed(1)}
                </Average>
                <OutOf
                    backdrop={backdrop}
                >
                    / 10
                </OutOf>
            </>
        )}
        {!!vote && (
            <Count
                small={small}
                backdrop={backdrop}
                noVotes={!vote?.count}
            >
                {vote?.count
                    ? `${vote.count} ${vote.count === 1 ? "vote" : "votes"}`
                    : "no votes yet"
                }
            </Count>
        )}
    </Wrapper>
);