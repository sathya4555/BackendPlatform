import { Injectable } from "@nestjs/common";
import App_MessagesAppService from "../appservices/app_messages.appservice";
// import { App_MessagesDto } from "../../Dtos/app_messagesDto";
// import { App_MessagesEntity } from "../../entity/app_messages.entity";
import FacadeBase from "./facadeBase";
import { App } from "src/entity/app.entity";
import { appDTO } from "src/Dtos/appDTO";
import { Feature } from "src/entity/features.entity";
import { featureDTO } from "src/Dtos/featureDTO";
import FeatureService from "../appservices/app_messages.appservice";
import FeatureAppService from "../appservices/featureservies";
import { Role } from "src/entity/role.entity";
import { roleDTO } from "src/Dtos/roleTable.dto";
import RoleAppService from "../appservices/roleappservice";

@Injectable()
export class RoleFacade extends FacadeBase<Role,roleDTO>{
    constructor(private roleAppservice: RoleAppService ){
       super(roleAppservice);
    }
}