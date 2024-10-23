"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const agenda_1 = require("../dto/agenda");
const handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const cAgendas = new agenda_1.classAgendas;
    const json = cAgendas.cadAgendas();
    return {
        statusCode: 200,
        body: json
    };
});
exports.handler = handler;
/*
class agenda{

    public async lstAgenda handler: APIGatewayProxyHandler (req: Request, res: Response){


            
        return {
            statusCode: 200,
            body: JSON.stringify({
              message: 'lstAgenda',
            }),
          };
  



        

        interface RequestBody {
            ANOCOMP: number;
            MESCOMP: number;
            NROPERIODO_INI: number;
            NROPERIODO_FIM: number;
            AUTHORIZATION: string
          };
      
          //função validar tipos de campos e objeto body
          function isMyRequestBody(data: any): data is RequestBody {
            return (
              typeof data === 'object' &&
              data !== null &&
              typeof data.ANOCOMP === 'number' &&
              typeof data.MESCOMP === 'number' &&
              typeof data.NROPERIODO_INI === 'number' &&
              typeof data.NROPERIODO_FIM === 'number'
            );
          };
          


    }

}
*/ 
