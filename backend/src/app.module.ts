import { Module } from '@nestjs/common';
import { ShoesController } from './app.controller';


@Module({
  imports: [],
  controllers: [ShoesController],
  providers: [],
})
export class AppModule {}
