"use client"

import { SearchBar } from "../Search/page";
import { Navigation } from "./Navigation/page";
import { Background, Wrapper } from "./styled";

export function Header() {
    return (
        <Background>
            <Wrapper>
                <Navigation />
                <SearchBar />
            </Wrapper>
        </Background>
    )
}