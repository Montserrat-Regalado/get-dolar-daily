import { Injectable, Logger } from '@nestjs/common';
import * as venom from 'venom-bot';

@Injectable()
export class VenomService {
  private readonly logger = new Logger(VenomService.name);

  CreateSession() {
    venom
      .create({
        session: 'session-name', //name of session
        multidevice: false, // for version not multidevice use false.(default: true)
      })
      .then((client) => this.start(client))
      .catch((erro) => {
        console.log(erro);
      });
  }

  start(client) {
    client.onMessage((message) => {
      if (message.body === 'Hola' && message.isGroupMsg === false) {
        client
          .sendText(message.from, 'Welcome Venom 🕷')
          .then((result) => {
            console.log('Result: ', result); //return object success
          })
          .catch((erro) => {
            console.error('Error when sending: ', erro); //return object error
          });
      }
    });
  }
}
