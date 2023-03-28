import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [
    {
      provide: ConfigService,
      useFactory: async () => {
        // this can be any awaited thing you want - db string from secrets manager, etc.
        const mySecretsFromWherever = await new Promise((resolve) =>
          setTimeout(() => {
            resolve({
              key: 'value',
              some: 'awaited thing',
            });
          }, 1000),
        );

        return new ConfigService(mySecretsFromWherever);
      },
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}
