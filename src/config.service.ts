import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  constructor(public myAwaitedSecrets: any) {}
}
