import {BoxForSpinner, Spinner} from "./styled";
import {SearchResults} from "@/common/SearchResults/page";
import {Container} from "@/common/Container/page";

export const Loading = ({searchQuery}: { searchQuery?: string }) => {
        return (
            <>
                {!!searchQuery && (
                    <Container>
                        <SearchResults
                            searchQuery={searchQuery}
                        />
                    </Container>
                )}
                <BoxForSpinner>
                    <Spinner/>
                </BoxForSpinner>
            </>
        )
    }
;
