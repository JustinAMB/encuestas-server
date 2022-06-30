import { Module } from '@nestjs/common';
import { MysqlModule } from 'nest-mysql2';

@Module({
    imports: [
        MysqlModule.forRoot({
            
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME,
                port: Number(process.env.DB_PORT),
            
        }),
    ],
})
export class DatabaseModule {

}
