/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewModel } from './review.model';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) { }

  @Post('create')
  async create(@Body() dto: CreateReviewDto) {
    return this.reviewService.create(dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedDoc = await this.reviewService.delete(id);
    if (!deletedDoc) {
      throw new HttpException('Otziv c takim id nenaiden', HttpStatus.NOT_FOUND);
    }
  }

  @Get('byProduct/:productId')
  async get(@Param('productId') productId: string) {
    return this.reviewService.findByProductId(productId);
  }
}
