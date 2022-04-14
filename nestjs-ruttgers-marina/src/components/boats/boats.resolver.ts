import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { BoatsService } from "./boats.service";
import { NewBoatInput } from "./dto/new-boat.input";
import { Boat } from "./entities/boat";

@Resolver()
export class BoatsResolver {
    constructor(private boatsService: BoatsService) {

    }

    @Query((returns) => [Boat])
    public async boats(): Promise<Boat[]> {
        return await this.boatsService.getAllBoats().catch((err) => {
            throw err;
        });
    }

    @Mutation(returns => Boat)
    public async addNewBoat(
        @Args("newBoatData") newBoatData: NewBoatInput,
    ): Promise<Boat> {
        return await this.boatsService.addBoat(newBoatData).catch((err) => {
            throw err;
        });
    }
}