import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { AuthorizationGuard } from 'src/http/auth/authorization.guard';
import { PrismaService } from 'src/prisma/prisma.service';

@Resolver()
export class TestResolver {
  constructor(private prisma: PrismaService) {}

  @UseGuards(AuthorizationGuard)
  @Query(() => String)
  hello() {
    return 'hello';
  }
}
