import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "boats" })
@ObjectType()
export class Boat {

    @PrimaryGeneratedColumn("uuid")
    @Field()
    id: string;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    boatType: string;

    @Column()
    @Field()
    horsePower: string;

    @Column()
    @Field()
    trollingMotor: boolean;

    @Column()
    @Field()
    depthFinder: boolean;

    @Column()
    @Field()
    liveWell: boolean;

    @Column()
    @Field()
    gps: boolean;

    @Column()
    @Field()
    capacity: number;

    @Column()
    @Field()
    canopy: boolean;

    @Column()
    @Field()
    fishingAllowed: boolean;

    @Column()
    @Field()
    additionalAuthRequired: boolean;

    @Column()
    @Field()
    dailyPriceMF: number;

    @Column()
    @Field()
    dailyPriceSSU: number;

    @Column()
    @Field()
    hourlyPriceMF: number;

    @Column()
    @Field()
    hourlyPriceSSu: number;

    @Column()
    @Field()
    amPriceMF: number;

    @Column()
    @Field()
    amPriceSSu: number;

    @Column()
    @Field()
    pmPriceMF: number;

    @Column()
    @Field()
    pmPriceSSu: number;

    @Column()
    @Field()
    thumbnailUrl: string;
}