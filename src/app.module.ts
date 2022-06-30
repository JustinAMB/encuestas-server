import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsController } from './persons/persons.controller';
import { PersonService } from './services/person/person.service';

@Module({
  imports: [],
  controllers: [AppController, PersonsController],
  providers: [AppService, PersonService],
})
export class AppModule {}
