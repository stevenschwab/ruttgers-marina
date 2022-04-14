import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BookCard } from "../../components/bookCard";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { AboutUs } from "./aboutUs";
import { BookingSteps } from "./bookingSteps";
import { TopBoats } from "./topBoats";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

export function HomePage() {
    return (
        <PageContainer>
            <Navbar />
            <TopSection />
            <Marginer direction="vertical" margin="0em" />
            <BookCard />
            <Marginer direction="vertical" margin="5em" />
            <BookingSteps />
            <Marginer direction="vertical" margin="8em" />
            <AboutUs />
            <Marginer direction="vertical" margin="8em" />
            <TopBoats />
            <Footer />
        </PageContainer>
    );
}