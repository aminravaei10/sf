import { ForbiddenException, Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
    throw new ForbiddenException();
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
