import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import AppService from "../../AppService/AppServiceBase";
import { Repository } from "typeorm";
import { App } from "src/entity/app.entity";
import { appDTO } from "src/Dtos/appDTO";
import { Feature } from "src/entity/features.entity";
import { featureDTO } from "src/Dtos/featureDTO";
import { Client } from "src/entity/client.entity";
import { clienDTO } from "src/Dtos/clientDTO";
let dto = require('../../mappers/client.mapper')

@Injectable()
export default class ClientAppService extends AppService<Client,clienDTO>{
    constructor(@InjectRepository(Client) private readonly app_messagesRepository: Repository<Client>,public http:HttpService) {
        super(http,app_messagesRepository,Client,Client,clienDTO,dto.client_entityJson, dto.client_dtoJson,dto.client_entityToDtoJson, dto.client_dtoToEntityJson);
             
    }

} 