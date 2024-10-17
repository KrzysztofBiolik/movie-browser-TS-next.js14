"use client"

import { Navigation } from "./Navigation/page";
import { Background, Wrapper } from "./styled";

export function Header() {
    return (
        <Background>
            <Wrapper>
                <Navigation />
            </Wrapper>
        </Background>
    )
}