import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WhichListModule } from './which-list/which-list.module';
import { JustForYouModule } from './just-for-you/just-for-you.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JustForYou } from './just-for-you/just-for-you.entity'

const cookieSession = require('cookie-session')
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    // envFilePath: `.env.${process.env.NODE_ENV}`
  }),
  // TypeOrmModule.forRoot(),
  // TypeOrmModule.forRootAsync({
  //   inject: [ConfigService],
  //   useFactory: (config: ConfigService) => {
  //     return {
  //       // type: 'sqlite',
  //       // database: config.get<string>('DB_NAME'),
  //       // synchronize: true,
  //       // // !!!! mean typeorm ดูที่ entity ว่าตัว database จะ field อะไรบ้างจาก entity และจะลบหรือเพิ่ม field ที่มีหรือยังไม่มีใน database
  //       // // เมื่ออยู่ใน dev mode สามารถเปิดเป็น true ได้และเมื่อเป็น production ควรปิด false และไม่ใช้งานอีกต่อไป
  //       // entities: [JustForYou]
  //       // // typeorm new type,database,entities to connect to db
  //       type: 'postgres',
  //       url: process.env.DATABASE_URL,
  //       migrationsRun: true,
  //       entities: ['**/*.entity.js'],
  //       ssl: {
  //         rejectUnauthorized: false,
  //       }
  //     }
  //   }
  // }),

  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    entities: [JustForYou],
    synchronize: true,
    autoLoadEntities: true,
  }),
    WhichListModule,
    JustForYouModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor(private configService: ConfigService) { }
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(
      cookieSession({
        keys: [this.configService.get('COOKIE_KEY')],
      })
    )
      .forRoutes('*')
  }
}


// Migration is when you want to update field of database up and down
// up() mean update structure of db
// down() mean undo step up()
// how to migration => 
// 1) stop dev server
// 2) use typeorm cli to generate empty migration file
// 3) add some code to change db at migration file
// 4) use typeorm cli to apply the migration => execute only entity + migration file 
// 5) db update and restart dev server