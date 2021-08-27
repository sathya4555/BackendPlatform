import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import AppService from "../../AppService/AppServiceBase";
import { Repository } from "typeorm";
import { App } from "src/entity/app.entity";
import { appDTO } from "src/Dtos/appDTO";
let dto = require('../../mappers/app.mapper')

@Injectable()
export default class App_MessagesAppService extends AppService<App,appDTO>{
    constructor(@InjectRepository(App) private readonly app_messagesRepository: Repository<App>,public http:HttpService) {
        super(http,app_messagesRepository,App,App,appDTO,dto.appentityJson, dto.appdtoJson,dto.appentityToDtoJson, dto.appdtoToEntityJson);
             
    }

} 