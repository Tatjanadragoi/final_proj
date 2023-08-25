import React from "react";
import { Wrapper, Text, TextWrapper } from "./index.style";
import { StyledLink } from "./index.style";



export const NotFoundPage = () => {
    return (
        <Wrapper>
            <TextWrapper>
                <Text>
                    Page not found!
                </Text>
                <StyledLink to='/'>
                    Go to main
                </StyledLink>
            </TextWrapper>
        </Wrapper>

    )


}