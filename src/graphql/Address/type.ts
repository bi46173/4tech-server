import { objectType } from 'nexus'

export const Address = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Address',
  definition(t) {
    t.int('id')
    t.string('street')
    t.string('city')
    t.string('zipCode')
    t.string('country')
    t.string('phoneNumber')
    t.int('userId')
    t.field('User', {
      type: 'User',
      resolve(root: any) {
        return root.User
      },
    })
  },
})
