import { mutationField, nonNull } from 'nexus'

export const AddressUpsertOneMutation = mutationField('upsertOneAddress', {
  type: nonNull('Address'),
  args: {
    where: nonNull('AddressWhereUniqueInput'),
    create: nonNull('AddressCreateInput'),
    update: nonNull('AddressUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.address.upsert({
      ...args,
      ...select,
    })
  },
})
