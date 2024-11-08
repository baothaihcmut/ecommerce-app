import { HandleFunction } from '../interface/event-type.interface';
import { KafkaMessage } from '../interface/message.interface';

export class AppRouter {
    mapHandler: Record<string,HandleFunction> = {}

    registerHandler(k:string,v:HandleFunction){
        this.mapHandler[k]=v;
    }
    constructor(){}

    handleMessage(topic:string,message: KafkaMessage<any>){
        this.mapHandler[topic](message);
    }
}