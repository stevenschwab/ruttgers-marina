import gql from "graphql-tag";

export const GET_ALL_BOATS = gql`
    query GetBoats {
        boats {
        id
        name
        boatType
        horsePower
        trollingMotor
        depthFinder
        liveWell
        gps
        capacity
        canopy
        fishingAllowed
        additionalAuthRequired
        dailyPriceMF
        dailyPriceSSU
        hourlyPriceMF
        hourlyPriceSSu
        amPriceMF
        amPriceSSu
        pmPriceMF
        pmPriceSSu
        thumbnailUrl
        }
    }
`