import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { DtoBase } from "../../DtoBase/dtobase";
import AppService from "../../AppService/AppServiceBase";
import { EntityBase } from "../../EntityBase/entitybase";
import { RequestModel } from "../../common/RequestModel";
import { ResponseModel } from "../../common/ResponseModel";

@Injectable()
export default class FacadeBase<TEntity extends EntityBase, TDto extends DtoBase>{
    private appService: AppService<TEntity,TDto>;
    constructor(private service: AppService<TEntity,TDto>){
        this.appService = service;
        
    }

    async getAll(){
        try {
            console.log("Inside facade");
            return this.appService.getAll();
          } catch (error) {
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
          }
    }

    async readOne(id : number) {
      return await this.appService.getOne(id);
    }

    async create(body: RequestModel<TDto>): Promise<ResponseModel<TDto>> {
        try {
            console.log("Inside CreateProblem of facade....body id" + JSON.stringify(body));
            let result = await this.appService.create(body);
            
            return result;
            
          } catch (error) {
            console.log("Error is....." + error);
            throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
          }
    }

    async update(body: RequestModel<TDto>): Promise<ResponseModel<TDto>> {
      try {
        console.log("Inside Updateproblem of facade....body id" + JSON.stringify(body));
  
        console.log("Executing update query..............")
        return await this.appService.updateEntity(body);
      } catch (error) {
        console.log("Error is....." + error);
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      }
  
    }
  
    async deleteById(body: RequestModel<TDto>): Promise<ResponseModel<TDto>> {
      let delete_ids: Array<number> = [];
      body.DataCollection.forEach((entity: TDto) => {
        delete_ids.push(entity.id);
  
      })
      console.log("Ids are......", delete_ids);
      return this.appService.deleteById(delete_ids);
    }

    async deleteByIds(id: number[]) {
     
      console.log("Ids are......", id);
      return this.appService.deleteByIds(id);
    }

}