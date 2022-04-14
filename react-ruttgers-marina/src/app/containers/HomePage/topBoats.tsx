import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { IBoat } from "../../../typings/boat";
import { Boat } from "../../components/boat";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { SCREENS } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";
import boatService from "../../services/boatService";
import { Dispatch } from "@reduxjs/toolkit";
import { GetBoats_boats } from "../../services/boatService/__generated__/GetBoats";
import { setTopBoats } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectTopBoats } from "./selectors";
import { createSelector } from 'reselect';
import MoonLoader from 'react-spinners/MoonLoader';

const TopBoatsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const BoatsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

const EmptyBoats = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `};
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `};
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setTopBoats: (boats: GetBoats_boats[]) => dispatch(setTopBoats(boats)),
});

const stateSelector = createSelector(makeSelectTopBoats, (topBoats) => ({
  topBoats
}));

export function TopBoats() {
    const [current, setCurrent] = useState(0);
    const [isLoading, setLoading] = useState(false);

    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

    const { topBoats } = useSelector(stateSelector);
    const { setTopBoats } = actionDispatch(useDispatch());

    const fetchTopBoats = async () => {
      setLoading(true);
      const boats = await boatService.getBoats().catch((err) => {
        console.log("Error: ", err);
      });

      console.log("Boats: ", boats);
      if(boats) setTopBoats(boats);
      setLoading(false);
    }

    useEffect(() => {
      fetchTopBoats();
    }, []);

    const isEmptyTopBoats = !topBoats || topBoats.length === 0;
    const boats = 
      (!isEmptyTopBoats && 
        topBoats.map((boat) => <Boat {...boat} thumbnailSrc={boat.thumbnailUrl} />)) || 
        [];

    const numberOfDots = isMobile 
    ? boats.length 
    : Math.ceil(boats.length / 3);

    return (
        <TopBoatsContainer>
            <Title>Explore Our Boats</Title>
            {isLoading && (
              <LoadingContainer>
                <MoonLoader loading size={20}/>
              </LoadingContainer>
            )}
            {isEmptyTopBoats && !isLoading && <EmptyBoats>No Boats</EmptyBoats>}
            {!isEmptyTopBoats && !isLoading && (
              <BoatsContainer>
                  <Carousel 
                  value={current} 
                  onChange={setCurrent} 
                  slides={boats}
                  plugins={[
                      "clickToChange",
                      {
                          resolve: slidesToShowPlugin,
                          options: {
                              numberOfSlides: 3
                          }
                      }
                  ]}
                  breakpoints={{
                      640: {
                          plugins: [
                              {
                                  resolve: slidesToShowPlugin,
                                  options: {
                                      numberOfSlides: 1,
                                  }
                              }
                          ]
                      },
                      900: {
                          plugins: [
                              {
                                  resolve: slidesToShowPlugin,
                                  options: {
                                      numberOfSlides: 2,
                                  }
                              }
                          ]
                      }
                  }}
                  />
                  <Dots 
                  value={current} 
                  onChange={setCurrent} 
                  number={numberOfDots} />
              </BoatsContainer>)}
        </TopBoatsContainer>
    );
}