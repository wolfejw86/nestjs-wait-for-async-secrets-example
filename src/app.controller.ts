import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from './config.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {
    // will log right at boot up - is it there?
    console.log(
      'should be there - logging it out right at constructor time proves that nest waits for it before injecting as a dependency',
    );
    console.log(configService.myAwaitedSecrets);
  }

  @Get()
  getHello() {
    return {
      message: this.appService.getHello(),
      config: this.configService.myAwaitedSecrets, // will always be there
    };
  }
}
