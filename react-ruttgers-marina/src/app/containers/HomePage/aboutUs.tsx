import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

import BoatsImg from "../../../assets/images/Boats-Boats-Boats.jpeg";

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
  `};
`;

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;
  img {
    width: auto;
    height: 100%;
  }
  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `};
`;

const Title = styled.h1`
    ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
  `};
`;

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `};
`;

export function AboutUs() {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={BoatsImg} />
      </CarContainer>
      <InfoContainer>
        <Title>Enhance Your Stay With Our Boat Rental Deals</Title>
        <InfoText>
        Ruttger’s boat rental fleet is one of the largest in the Bemidji, Minnesota area. 
        The rental fleet includes several rental pontoon boats, two family run-about ski boats, 
        which are perfect for water-skiing, two wave runners, a fishing boat, canoes, kayaks, and 
        paddleboards. Our resort marina has something for everyone.
        <br/>
        <br/>
        Whether you enjoy peacefully strolling our half mile of beautiful sandy beach, 
        or basking in the sun around the lake, our waterfront is at your disposal. 
        Our marina staff will be happy to see you off on a quiet sunset paddle across 
        our golden lake or help the kids get started on frolicking adventures in a kayak or canoe.
        <br/>
        <br/>
        The marina also has mountain bikes and children’s bikes for use on the resort grounds 
        or the many trails in the Bemidji area. The resort is located an easy one mile bike 
        ride from the Lake Bemidji State Park with it’s miles of trails. The Paul Bunyan Trail 
        goes right through the park, follows the east shore of Lake Bemidji south to Bemidji, 
        then south to the Walker, Minnesota area.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}