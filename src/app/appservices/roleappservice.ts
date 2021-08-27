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
let dto = require('../../mappers/role.mappers')

@Injectable()
export default class RoleAppService extends AppService<Role,roleDTO>{
    constructor(@InjectRepository(Role) private readonly app_messagesRepository: Repository<Role>,public http:HttpService) {
        super(http,app_messagesRepository,Role,Role,roleDTO,dto.role_entityJson, dto.role_dtoJson,dto.role_entityToDtoJson, dto.role_dtoToEntityJson);
             
    }

} 