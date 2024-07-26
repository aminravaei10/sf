import { CatsService } from './cats.service';
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

@Controller('cats')
// @UseGuards(RolesGuard)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @UseGuards(RolesGuard)
  create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  @Roles(['admin'])
  findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return id;
  }
}
