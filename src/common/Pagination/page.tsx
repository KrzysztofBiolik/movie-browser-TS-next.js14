/* eslint-disable no-unused-expressions */
"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Wrapper, StyledButton, StyledArrow, TextContainer, Text, Strong, ButtonText } from "./styled";
import qs from "qs";


export const Pagination = ({ totalPages }: { totalPages: number | undefined }) => {

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const pageParam = Number(searchParams.get("page")) || 1;
    const query = searchParams.get("query");
    const maxPages = query ? totalPages : 500;

    const onToFirstPage = () => {
        if (query) {
            router.replace(
                `${pathname}?` +
                qs.stringify(
                    { page: 1, query: query },
                )
            )
        } else {
            router.replace(
                `${pathname}?` +
                qs.stringify(
                    { page: 1 }
                )
            )
        }
    };

    const onDecrement = () => {
        if (query) {
            router.replace(
                `${pathname}?` +
                qs.stringify(
                    { page: pageParam - 1, query: query },
                )
            )
        }
        else {
            router.replace(
                `${pathname}?` +
                qs.stringify(
                    { page: pageParam - 1 }
                )
            )
        }
    };

    const onIncrement = () => {
        if (query) {
            router.replace(
                `${pathname}?` +
                qs.stringify(
                    { page: pageParam + 1, query: query },
                )
            )
        } else {
            router.replace(
                `${pathname}?` +
                qs.stringify(
                    { page: pageParam + 1 }
                )
            )
        }
    };

    const onToLastPage = () => {
        if (query) {
            router.replace(
                `${pathname}?` +
                qs.stringify(
                    { page: maxPages, query: query },
                )
            )
        } else {
            router.replace(
                `${pathname}?` +
                qs.stringify(
                    { page: maxPages }
                )
            )
        }
    };


    return (
        <Wrapper>
            <StyledButton
                onClick={onToFirstPage}
                disabled={pageParam < 2}
            >
                <StyledArrow left />
                <StyledArrow left mobile />
                <ButtonText>
                    First
                </ButtonText>
            </StyledButton>
            <StyledButton
                onClick={onDecrement}
                disabled={pageParam < 2}
            >
                <StyledArrow left />
                <ButtonText>
                    Previous
                </ButtonText>
            </StyledButton>
            <TextContainer>
                <Text>Page</Text>
                <Strong>{pageParam}</Strong>
                <Text>of</Text>
                <Strong>{maxPages}</Strong>
            </TextContainer>

            <StyledButton
                onClick={onIncrement}
                disabled={pageParam === maxPages}
            >
                <ButtonText>
                    Next
                </ButtonText>
                <StyledArrow />
            </StyledButton>
            <StyledButton
                onClick={onToLastPage}
                disabled={pageParam === maxPages}
            >
                <ButtonText>
                    Last
                </ButtonText>
                <StyledArrow />
                <StyledArrow mobile />
            </StyledButton>
        </Wrapper>

    )

}