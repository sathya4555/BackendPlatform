import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import AppService from "../../AppService/AppServiceBase";
import { Repository } from "typeorm";
import { App } from "src/entity/app.entity";
import { appDTO } from "src/Dtos/appDTO";
import { Feature } from "src/entity/features.entity";
import { featureDTO } from "src/Dtos/featureDTO";
let dto = require('../../mappers/feature.mapper')

@Injectable()
export default class FeatureAppService extends AppService<Feature,featureDTO>{
    constructor(@InjectRepository(Feature) private readonly app_messagesRepository: Repository<Feature>,public http:HttpService) {
        super(http,app_messagesRepository,Feature,Feature,featureDTO,dto.feature_entityJson, dto.feature_dtoJson,dto.feature_entityToDtoJson, dto.feature_dtoToEntityJson);
             
    }

} 