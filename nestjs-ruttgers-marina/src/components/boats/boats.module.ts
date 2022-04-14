import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BoatsResolver } from "./boats.resolver";
import { BoatsService } from "./boats.service";
import { Boat } from "./entities/boat";

@Module({
    imports: [TypeOrmModule.forFeature([Boat])],
    providers: [BoatsService, BoatsResolver],
    exports: [BoatsService],
})
export class BoatsModule {}