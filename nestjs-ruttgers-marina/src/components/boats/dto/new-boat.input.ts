import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class NewBoatInput {

    @Field()
    name: string;

    @Field()
    boatType: string;
    
    @Field()
    horsePower: string;
    
    @Field()
    trollingMotor: boolean;
    
    @Field()
    depthFinder: boolean;
    
    @Field()
    liveWell: boolean;
    
    @Field()
    gps: boolean;
    
    @Field((type) => Int)
    capacity: number;
    
    @Field()
    canopy: boolean;
    
    @Field()
    fishingAllowed: boolean;
    
    @Field()
    additionalAuthRequired: boolean;
    
    @Field((type) => Int)
    dailyPriceMF: number | null;
    
    @Field((type) => Int)
    dailyPriceSSU: number | null;
    
    @Field((type) => Int)
    hourlyPriceMF: number | null;
    
    @Field((type) => Int)
    hourlyPriceSSu: number | null;
    
    @Field((type) => Int)
    amPriceMF: number | null;
    
    @Field((type) => Int)
    amPriceSSu: number | null;
    
    @Field((type) => Int)
    pmPriceMF: number | null;
    
    @Field((type) => Int)
    pmPriceSSu: number | null;
    
    @Field()
    thumbnailUrl: string;
}