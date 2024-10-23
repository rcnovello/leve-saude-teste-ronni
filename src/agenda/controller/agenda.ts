
import { APIGatewayProxyHandler } from 'aws-lambda';
import { classAgendas } from "../dto/agenda";


export const handler: APIGatewayProxyHandler = async (event) => {

    const cAgendas = new classAgendas;    

    const json = cAgendas.listAgendas();

  return {    
    statusCode: 200,
    body: json
  };

};
