import { Module } from '@nestjs/common'
import { ProductRepositoryService } from './service'
import { DatabaseDefaultModule } from '@infrastructure/database/postgres/database-default'
import { UserRepositoryServiceAdapter } from '@infrastructure/database/postgres/database-default/service-adapter'

@Module({
  imports: [DatabaseDefaultModule],
  providers: [{ provide: ProductRepositoryService, useExisting: UserRepositoryServiceAdapter }],
  exports: [ProductRepositoryService],
})
export class ProductModule {}
