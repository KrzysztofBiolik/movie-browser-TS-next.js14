import { ReactNode } from "react";
import { Average, Count, OutOf, Wrapper } from "./styled";

interface VoteProps {
    vote?: {
        average?: number,
        count?: number,
    },
    small?: boolean,
    backdrop?: boolean,
}

export const Vote = ({ vote, small, backdrop }: VoteProps) => {
    return (
        !!vote && (
            <Wrapper
                small={small}
                backdrop={backdrop}>
                {!!vote?.average && (
                    <>
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
            </Wrapper>
        )
    )
};