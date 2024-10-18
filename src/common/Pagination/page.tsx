"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Wrapper, StyledButton } from "./styled";
import qs from "qs";

interface PaginationProps {
    total_pages: number | undefined;
}

export const Pagination = ({ totalPages }: { totalPages: number | undefined }) => {

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const pageParam = Number(searchParams.get("page")) || 1;
    const query = searchParams.get("query");
    const maxPages = query ? totalPages : 500;

    const onToFirstPage = () => {
        query ?
            router.replace(
                `${pathname}?` +
                qs.stringify(
                    { page: 1, query: query },
                )
            )
            :
            router.replace(
                `${pathname}?` +
                qs.stringify(
                    { page: 1 }
                )
            )
    };

    const onDecrement = () => {
        query ?
            router.replace(
                `${pathname}?` +
                qs.stringify(
                    { page: pageParam - 1, query: query },
                )
            )
            :
            router.replace(
                `${pathname}?` +
                qs.stringify(
                    { page: pageParam - 1 }
                )
            )
    };

    const onIncrement = () => {
        query ?
            router.replace(
                `${pathname}?` +
                qs.stringify(
                    { page: pageParam + 1, query: query },
                )
            )
            :
            router.replace(
                `${pathname}?` +
                qs.stringify(
                    { page: pageParam + 1 }
                )
            )
    };

    const onToLastPage = () => {
        query ?
            router.replace(
                `${pathname}?` +
                qs.stringify(
                    { page: maxPages, query: query },
                )
            )
            :
            router.replace(
                `${pathname}?` +
                qs.stringify(
                    { page: maxPages }
                )
            )
    };


    return (
        <Wrapper>
            <StyledButton
                onClick={onToFirstPage}
            >
                First
            </StyledButton>
            <StyledButton
                onClick={onDecrement}
            >
                Previous
            </StyledButton>
            {maxPages}
            <StyledButton
                onClick={onIncrement}
            >
                Next
            </StyledButton>
            <StyledButton
                onClick={onToLastPage}
            >
                Last
            </StyledButton>
        </Wrapper>

    )

}