import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserModule } from '../../user/user.module'

import { CaptchaLogEntity } from './entities/captcha-log.entity'
import { LoginLogEntity } from './entities/login-log.entity'
import { LogController } from './log.controller'
import { CaptchaLogService } from './services/captcha-log.service'
import { LoginLogService } from './services/login-log.service'

const providers = [LoginLogService, CaptchaLogService]

@Module({
  imports: [
    TypeOrmModule.forFeature([LoginLogEntity, CaptchaLogEntity]),
    UserModule,
  ],
  controllers: [LogController],
  providers: [...providers],
  exports: [TypeOrmModule, ...providers],
})
export class LogModule {}
