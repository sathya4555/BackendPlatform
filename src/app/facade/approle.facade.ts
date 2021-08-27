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
import { AppRoles } from "src/entity/app_roles.entity";
import { approleDTO } from "src/Dtos/appRoleDTO";
import AppRoleAppService from "../appservices/approle.appservice";

@Injectable()
export class AppRoleFacade extends FacadeBase<AppRoles,approleDTO>{
    constructor(private approleAppservice: AppRoleAppService ){
       super(approleAppservice);
    }
}