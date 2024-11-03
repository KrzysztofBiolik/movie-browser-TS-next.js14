import { SectionTitle} from "../Section/SectionTitle/page";
import {StyledIcon} from "./styled";
import {Container} from "@/common/Container/page";

export const NoResults = () => {
    return (
        <Container>
            <section>
                <SectionTitle>Sorry, there are no results for </SectionTitle>
                <StyledIcon/>
            </section>
        </Container>

    )
};
