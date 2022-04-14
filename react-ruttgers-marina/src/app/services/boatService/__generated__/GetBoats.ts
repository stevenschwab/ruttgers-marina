/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBoats
// ====================================================

export interface GetBoats_boats {
  __typename: "Boat";
  id: string;
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
  thumbnailUrl: string;
}

export interface GetBoats {
  boats: GetBoats_boats[];
}
