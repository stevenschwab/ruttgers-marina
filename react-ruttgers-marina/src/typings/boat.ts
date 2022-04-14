export interface IBoat {
    thumbnailSrc: string;
    name: string;
    boatType: string;
    horsePower: string;
    trollingMotor: boolean;
    depthFinder: boolean;
    liveWell: boolean;
    gps: boolean;
    capacity: number;
    canopy: boolean;
    fishingAllowed: boolean;
    additionalAuthRequired: boolean;
    dailyPriceMF: number;
    dailyPriceSSU: number;
    hourlyPriceMF: number;
    hourlyPriceSSu: number;
    amPriceMF: number;
    amPriceSSu: number;
    pmPriceMF: number;
    pmPriceSSu: number;
}