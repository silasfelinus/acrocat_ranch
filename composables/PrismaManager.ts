// prismaManager.ts
const prisma = new PrismaClient()
export class PrismaCrudService {
  constructor(private model) {}

  async create(data: object) {
    return prisma[this.model].create({ data })
  }

  async read(id: number) {
    return prisma[this.model].findUnique({ where: { id } })
  }

  async update(id: number, data: object) {
    return prisma[this.model].update({ where: { id }, data })
  }

  async delete(id: number) {
    return prisma[this.model].delete({ where: { id } })
  }
}
