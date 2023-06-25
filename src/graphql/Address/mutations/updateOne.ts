import { mutationField, nonNull } from 'nexus'

export const AddressUpdateOneMutation = mutationField('updateOneAddress', {
  type: nonNull('Address'),
  args: {
    data: nonNull('AddressUpdateInput'),
    where: nonNull('AddressWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.address.update({
      where,
      data,
      ...select,
    })
  },
})
