/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopLevelCategory, TopPageModel } from './top-page.model';

@Controller('top-page')
export class TopPageController {
//   constructor(private readonly configService: ConfigService){
    
//   }

  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) {
    // this.configService.get('TEST');
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    
  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: TopLevelCategory) {

  }

  @HttpCode(200)
  @Post()
  async find(@Body() dto: FindTopPageDto) {

  }
}
