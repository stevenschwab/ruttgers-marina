import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { NewBoatInput } from "./dto/new-boat.input";
import { Boat } from "./entities/boat";

@Injectable()
export class BoatsService {

    constructor(@InjectRepository(Boat) private boatRepository: Repository<Boat>) {

    }

    public async getAllBoats(): Promise<Boat[]> {
        return await this.boatRepository.find({}).catch((err) => {
            throw new InternalServerErrorException();
        });
    }

    public async addBoat(newBoatData: NewBoatInput): Promise<Boat> {
        const newBoat = this.boatRepository.create(newBoatData);
        await this.boatRepository.save(newBoat).catch((err) => {
            new InternalServerErrorException();
        });

        return newBoat;
    }
}