import { HttpModule, HttpService, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/entity/admin.entity';
import { App } from 'src/entity/app.entity';
import { AppRoles } from 'src/entity/app_roles.entity';
import { Client } from 'src/entity/client.entity';
import { Crud } from 'src/entity/crud.entity';
import { Feature } from 'src/entity/features.entity';
import { Role } from 'src/entity/role.entity';
import * as ormconfig from '.././ormconfig'
import AppRoleAppService from './appservices/approle.appservice';
import App_MessagesAppService from './appservices/app_messages.appservice';
import ClientAppService from './appservices/client.appservice';
import FeatureAppService from './appservices/featureservies';
import RoleAppService from './appservices/roleappservice';
import { AppRoleFacade } from './facade/approle.facade';
import { App_MessagesFacade } from './facade/app_messages.facade';
import { ClientFacade } from './facade/client.facade';
import { FeatureFacade } from './facade/feature.facade';
import { RoleFacade } from './facade/role.facade';
import { ApproleRoutes } from './routes/approle.routes';
import { App_MessagesRoutes } from './routes/app_messages.route';
import { ClientRoutes } from './routes/client.routes';
import { FeatureRoutes } from './routes/feature.routes';
import { RoleRoutes } from './routes/role.route';
// import { FeatureRoutes } from './routes/feature.routes';

@Module({
  imports: [HttpModule,
    TypeOrmModule.forRoot(       {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'platform2',
      entities: [Admin,Role,Client,Crud,App,Feature,AppRoles],
      synchronize: true,
  }),
    TypeOrmModule.forFeature([ Admin,Role,Client,Crud,App,Feature,AppRoles ]),
  ],
  providers: [
              App_MessagesFacade,
              App_MessagesAppService,
              FeatureFacade,
              FeatureAppService,
              RoleAppService,
              RoleFacade,
              AppRoleFacade,
              AppRoleAppService,
              ClientFacade,
              ClientAppService
            ],
  controllers: [
                App_MessagesRoutes,
                FeatureRoutes,
                RoleRoutes,
                ApproleRoutes,
                ClientRoutes
              ]
})

export class EntityModule implements NestModule {
  constructor() {
    console.log("Inside Entity Module....");
  }

  configure(consumer: MiddlewareConsumer) {
    console.log("Inside Consumer body......");
  }
}