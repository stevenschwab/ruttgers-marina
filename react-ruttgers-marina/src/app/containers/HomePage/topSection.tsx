import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import boatImage from "../../../assets/images/21-foot-glastron-gts205.jpeg";
import { Button } from "../../components/button";
import { SCREENS } from "../../components/responsive";

const TopSectionContainer = styled.div`
    min-height: 400px;
    margin-top: 6em;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        pl-3
        pr-3
        lg:pl-12
        lg:pr-12
    `};
`;

const LeftContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
    `};
`;

const RightContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `};
`;

const Slogan = styled.h1`
    ${tw`
        font-bold
        text-2xl
        xl:text-6xl
        sm:text-3xl
        md:text-5xl
        lg:font-black
        md:font-extrabold
        text-black
        mb-4
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
    `};
`;

const Description = styled.p`
    ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-gray-800
    `};
`;

const StandaloneBoat = styled.div`
    width: auto;
    height: 10em;
    right: -6em;
    top: -5em;
    position: absolute;
    

    img {
        width: auto;
        height: 100%;
        max-width: fit-content;
        border-radius: 30px;
    }

    @media (min-width: ${SCREENS.sm}) {
        height: 16em;
        right: -6em;
        top: -6em;
      }
      @media (min-width: ${SCREENS.lg}) {
        height: 16em;
        right: -6em;
        top: -6em;
      }
      @media (min-width: ${SCREENS.xl}) {
        height: 16em;
        right: 10%;
        top: -6em;
      }
`;

const ButtonsContainer = styled.div`
    ${tw`
        flex
        flex-wrap
        mt-4
    `};
`;

export function TopSection() {
    return (
        <TopSectionContainer>
            <LeftContainer>
                <Slogan>Rent boats and waverunners with us</Slogan>
                <Description>
                    2022 Boathouse &amp; Marina Rental Prices
                </Description>
                <ButtonsContainer>
                    <Button text="Book a boat" />
                </ButtonsContainer>
            </LeftContainer>
            <RightContainer>
                <StandaloneBoat>
                    <img src={boatImage} />
                </StandaloneBoat>
            </RightContainer>
        </TopSectionContainer>
    )
}