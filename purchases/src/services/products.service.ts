import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import slugify from 'slugify';

type CreateProductParams = {
  title: string;
};

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  listAllProducts() {
    return this.prisma.product.findMany();
  }

  getProductById(id: string) {
    return this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  async createProduct({ title }: CreateProductParams) {
    const slug = slugify(title, {
      lower: true,
    });

    const producsWithSameSlug = await this.prisma.product.findUnique({
      where: {
        slug,
      },
    });

    if (producsWithSameSlug) {
      throw new Error('Another product with same slug already exists.');
    }

    return this.prisma.product.create({
      data: {
        title,
        slug,
      },
    });
  }
}
