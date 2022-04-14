import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faFish, faHorse, faLocationArrow, faPeopleRoof, faPerson, faRuler, faShip, faPencil, faFishFins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { IBoat } from "../../../typings/boat";
import { Button } from "../button";
import ReactTooltip from 'react-tooltip';

interface IBoatProps extends IBoat {}

const BoatContainer = styled.div`
  width: 16.5em;
  min-height: 23em;
  max-height: 25em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-1
    sm:m-3
    md:m-6
  `};
`;

const BoatThumbnail = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;

const BoatName = styled.h3`
  ${tw`
    text-base
    font-bold
    text-black
    mt-1
    mb-1
  `};
`;

const PricesContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-start
    mt-3
  `};
`;

const SmallText = styled.p`
  color: inherit;
  ${tw`
    inline-flex
    text-xs
    font-thin
  `};
`;

const DailyPrice = styled.h5`
  ${tw`
    text-red-500
    font-bold
    text-sm
    mr-3
  `};
`;

const HourlyPrice = styled.h5`
  ${tw`
    text-gray-500
    font-bold
    text-sm
  `};
`;

const AMPrice = styled.h5`
  ${tw`
    text-gray-500
    font-bold
    text-sm
  `};
`;

const PMPrice = styled.h5`
  ${tw`
    text-gray-500
    font-bold
    text-sm
  `};
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-400
    text-sm
    mr-1
  `};
`;

const BoatDetailsContainer = styled.div`
  ${tw`
    flex
    w-full
    justify-between
  `};
`;

const BoatDetail = styled.span`
  ${tw`
    flex
    items-center
  `};
`;

const BoatInfo = styled.h6`
  ${tw`
    text-gray-400
    text-xs
  `};
`;

const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
    flex
    bg-gray-300
    mt-2
    mb-2
  `};
`;

const RentButton = styled(Button)`
  ${tw`
    min-w-full
    mt-5
  `};
`;

export function Boat(props: IBoatProps) {
    const {
        thumbnailSrc,
        name,
        boatType,
        horsePower,
        trollingMotor,
        depthFinder,
        liveWell,
        gps,
        capacity,
        canopy,
        fishingAllowed,
        additionalAuthRequired,
        dailyPriceMF,
        dailyPriceSSU,
        hourlyPriceMF,
        hourlyPriceSSu,
        amPriceMF,
        amPriceSSu,
        pmPriceMF,
        pmPriceSSu,
    } = props;

    return (
        <BoatContainer>
            <BoatThumbnail>
                <img src={thumbnailSrc} />
            </BoatThumbnail>
            <BoatName>{name}</BoatName>
            <PricesContainer>
                { dailyPriceMF ? 
                    <DailyPrice>
                    ${dailyPriceMF}
                    <SmallText>/Day M-F</SmallText>
                    </DailyPrice>
                : null
                }
                { dailyPriceSSU ? 
                    <DailyPrice>
                    ${dailyPriceSSU}
                    <SmallText>/Day S-Su</SmallText>
                    </DailyPrice>
                : null
                }
                { hourlyPriceMF ? 
                    <HourlyPrice>
                    ${hourlyPriceMF}
                    <SmallText>/Hour M-F</SmallText>
                    </HourlyPrice>
                : null
                }
                { hourlyPriceSSu ? 
                    <HourlyPrice>
                    ${hourlyPriceSSu}
                    <SmallText>/Hour S-Su</SmallText>
                    </HourlyPrice>
                : null
                }
                { amPriceMF ? 
                    <AMPrice>
                    ${amPriceMF}
                    <SmallText>/AM M-F</SmallText>
                    </AMPrice>
                : null
                }
                { amPriceSSu ? 
                    <AMPrice>
                    ${amPriceSSu}
                    <SmallText>/AM S-Su</SmallText>
                    </AMPrice>
                : null
                }
                { pmPriceMF ? 
                    <PMPrice>
                    ${pmPriceMF}
                    <SmallText>/PM M-F</SmallText>
                    </PMPrice>
                : null
                }
                { pmPriceSSu ? 
                    <PMPrice>
                    ${pmPriceSSu}
                    <SmallText>/PM S-Su</SmallText>
                    </PMPrice>
                : null
                }
            </PricesContainer>
            <Seperator />
            <BoatDetailsContainer>
                <BoatDetail>
                <SmallIcon>
                    <FontAwesomeIcon icon={faShip} />
                </SmallIcon>
                <BoatInfo>{boatType}</BoatInfo>
                </BoatDetail>
                { horsePower ?
                    <BoatDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faHorse} />
                    </SmallIcon>
                    <BoatInfo>{horsePower}</BoatInfo>
                    </BoatDetail>
                : null
                }
                { trollingMotor ?
                    <BoatDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faSearchengin} />
                    </SmallIcon>
                    <BoatInfo></BoatInfo>
                    </BoatDetail>
                : null
                }
                { depthFinder ?
                    <BoatDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faRuler} />
                    </SmallIcon>
                    </BoatDetail>
                : null
                }
                { liveWell ?
                    <BoatDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faFish} />
                    </SmallIcon>
                    </BoatDetail>
                : null
                }
                { gps ?
                    <BoatDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faLocationArrow} />
                    </SmallIcon>
                    </BoatDetail>
                : null
                }
                {capacity ?
                    <BoatDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faPerson} />
                    </SmallIcon>
                    <BoatInfo>{capacity}</BoatInfo>
                    </BoatDetail>
                : null
                }
                { canopy ?
                    <BoatDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faPeopleRoof} />
                    </SmallIcon>
                    </BoatDetail>
                : null
                }
                { fishingAllowed ?
                    <BoatDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faFishFins} />
                    </SmallIcon>
                    <BoatInfo></BoatInfo>
                    </BoatDetail>
                : null
                }
                { additionalAuthRequired ?
                    <BoatDetail>
                    <SmallIcon>
                        <FontAwesomeIcon icon={faPencil} />
                    </SmallIcon>
                    </BoatDetail>
                : null
                }
            </BoatDetailsContainer>
            <RentButton text="Rent Now" />
        </BoatContainer>
    );
}