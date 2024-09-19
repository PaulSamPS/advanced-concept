import { Module } from '@nestjs/common';
import { OrmAlarmPersistenceModule } from './persostence/orm/orm-persistence.module';
import { InMemoryPersistenceModule } from './persostence/in-memory/in-memory-persistence.module';

@Module({})
export class AlarmsInfrastructureModule {
  static use(driver: 'orm' | 'in-memory') {
    const persistenceModule =
      driver === 'orm' ? OrmAlarmPersistenceModule : InMemoryPersistenceModule;

    return {
      module: AlarmsInfrastructureModule,
      imports: [persistenceModule],
      exports: [persistenceModule],
    };
  }
}
