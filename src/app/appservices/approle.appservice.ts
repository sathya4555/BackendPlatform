import { HttpService, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import AppService from "../../AppService/AppServiceBase";
import { Repository } from "typeorm";
import { App } from "src/entity/app.entity";
import { appDTO } from "src/Dtos/appDTO";
import { Feature } from "src/entity/features.entity";
import { featureDTO } from "src/Dtos/featureDTO";
import { Role } from "src/entity/role.entity";
import { roleDTO } from "src/Dtos/roleTable.dto";
import { AppRoles } from "src/entity/app_roles.entity";
import { approleDTO } from "src/Dtos/appRoleDTO";
let dto = require('../../mappers/feature.mapper')

@Injectable()
export default class AppRoleAppService extends AppService<AppRoles,approleDTO>{
    constructor(@InjectRepository(AppRoles) private readonly app_messagesRepository: Repository<AppRoles>,public http:HttpService) {
        super(http,app_messagesRepository,AppRoles,AppRoles,approleDTO,dto.approle_entityJson, dto.approle_dtoJson,dto.approle_entityToDtoJson, dto.approle_dtoToEntityJson);
             
    }

} 