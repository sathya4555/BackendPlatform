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
import { Client } from "src/entity/client.entity";
import { clienDTO } from "src/Dtos/clientDTO";
import ClientAppService from "../appservices/client.appservice";

@Injectable()
export class ClientFacade extends FacadeBase<Client,clienDTO>{
    constructor(private clientAppservice: ClientAppService ){
       super(clientAppservice);
    }
}