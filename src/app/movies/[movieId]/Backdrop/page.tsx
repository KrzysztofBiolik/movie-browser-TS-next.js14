import { MovieDetailsResponse } from "@/common/types"
import { Image, Title, Vignette, Wrapper } from "./styled"
import { getImageUrl } from "@/api/getImageURL"
import { Container } from "@/common/Container/page"
import { Vote } from "@/common/Vote/page"

export const Backdrop = ({ backdrop }: { backdrop?: MovieDetailsResponse }) => {
    return (
        <Wrapper>
            <Container>
                <Image url={getImageUrl({
                    path: backdrop?.backdrop_path,
                    size: "big",
                })}>
                    <Vignette>
                        <Title>{backdrop?.title}</Title>
                        <Vote
                            vote={{
                                average: backdrop?.vote_average,
                                count: backdrop?.vote_count,
                            }}
                            backdrop
                        />
                    </Vignette>
                </Image>
            </Container>
        </Wrapper>
    )
}