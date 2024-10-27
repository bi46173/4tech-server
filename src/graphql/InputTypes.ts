import { enumType, inputObjectType, objectType } from 'nexus'

export const AddressScalarFieldEnum = enumType({
  name: 'AddressScalarFieldEnum',
  members: [
    'id',
    'street',
    'city',
    'zipCode',
    'country',
    'phoneNumber',
    'userId',
  ],
})

export const OrderAddressScalarFieldEnum = enumType({
  name: 'OrderAddressScalarFieldEnum',
  members: [
    'id',
    'orderId',
    'fullName',
    'street',
    'city',
    'zipCode',
    'country',
    'phoneNumber',
  ],
})

export const OrderProductScalarFieldEnum = enumType({
  name: 'OrderProductScalarFieldEnum',
  members: ['id', 'orderId', 'name', 'price', 'img', 'discount', 'quantity'],
})

export const OrderScalarFieldEnum = enumType({
  name: 'OrderScalarFieldEnum',
  members: ['id', 'userId', 'OrderStatus', 'date', 'subtotal', 'type'],
})

export const ProductScalarFieldEnum = enumType({
  name: 'ProductScalarFieldEnum',
  members: [
    'id',
    'name',
    'description',
    'price',
    'discount',
    'stock',
    'category',
    'manufacturer',
    'img',
    'likes',
    'memory',
    'storage',
    'processor',
    'gpu',
    'os',
    'screen',
  ],
})

export const QueryMode = enumType({
  name: 'QueryMode',
  members: ['default', 'insensitive'],
})

export const ReviewScalarFieldEnum = enumType({
  name: 'ReviewScalarFieldEnum',
  members: ['id', 'userId', 'productId', 'comment', 'rating', 'date'],
})

export const ShoppingProductScalarFieldEnum = enumType({
  name: 'ShoppingProductScalarFieldEnum',
  members: ['id', 'quantity', 'userId', 'productId'],
})

export const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc'],
})

export const TransactionIsolationLevel = enumType({
  name: 'TransactionIsolationLevel',
  members: [
    'ReadUncommitted',
    'ReadCommitted',
    'RepeatableRead',
    'Serializable',
  ],
})

export const UserScalarFieldEnum = enumType({
  name: 'UserScalarFieldEnum',
  members: [
    'id',
    'email',
    'password',
    'firstName',
    'lastName',
    'gender',
    'birthday',
    'role',
    'createdAt',
  ],
})

export const OrderType = enumType({
  name: 'OrderType',
  members: ['Online', 'Cash'],
})

export const Role = enumType({
  name: 'Role',
  members: ['USER', 'ADMIN'],
})

export const UserWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'UserWhereInput' })
    t.list.field('OR', { type: 'UserWhereInput' })
    t.list.field('NOT', { type: 'UserWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('email', { type: 'StringFilter' })
    t.field('password', { type: 'StringFilter' })
    t.field('firstName', { type: 'StringFilter' })
    t.field('lastName', { type: 'StringFilter' })
    t.field('gender', { type: 'StringNullableFilter' })
    t.field('birthday', { type: 'DateTimeNullableFilter' })
    t.field('role', { type: 'EnumRoleFilter' })
    t.field('createdAt', { type: 'DateTimeFilter' })
    t.field('address', { type: 'AddressRelationFilter' })
    t.field('orders', { type: 'OrderListRelationFilter' })
    t.field('reviews', { type: 'ReviewListRelationFilter' })
    t.field('cart', { type: 'ShoppingProductListRelationFilter' })
  },
})

export const UserOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('firstName', { type: 'SortOrder' })
    t.field('lastName', { type: 'SortOrder' })
    t.field('gender', { type: 'SortOrder' })
    t.field('birthday', { type: 'SortOrder' })
    t.field('role', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('address', { type: 'AddressOrderByWithRelationInput' })
    t.field('orders', { type: 'OrderOrderByRelationAggregateInput' })
    t.field('reviews', { type: 'ReviewOrderByRelationAggregateInput' })
    t.field('cart', { type: 'ShoppingProductOrderByRelationAggregateInput' })
  },
})

export const UserWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('email', { type: 'String' })
  },
})

export const UserOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('firstName', { type: 'SortOrder' })
    t.field('lastName', { type: 'SortOrder' })
    t.field('gender', { type: 'SortOrder' })
    t.field('birthday', { type: 'SortOrder' })
    t.field('role', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
    t.field('_count', { type: 'UserCountOrderByAggregateInput' })
    t.field('_avg', { type: 'UserAvgOrderByAggregateInput' })
    t.field('_max', { type: 'UserMaxOrderByAggregateInput' })
    t.field('_min', { type: 'UserMinOrderByAggregateInput' })
    t.field('_sum', { type: 'UserSumOrderByAggregateInput' })
  },
})

export const UserScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'UserScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'UserScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'UserScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('email', { type: 'StringWithAggregatesFilter' })
    t.field('password', { type: 'StringWithAggregatesFilter' })
    t.field('firstName', { type: 'StringWithAggregatesFilter' })
    t.field('lastName', { type: 'StringWithAggregatesFilter' })
    t.field('gender', { type: 'StringNullableWithAggregatesFilter' })
    t.field('birthday', { type: 'DateTimeNullableWithAggregatesFilter' })
    t.field('role', { type: 'EnumRoleWithAggregatesFilter' })
    t.field('createdAt', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const AddressWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'AddressWhereInput' })
    t.list.field('OR', { type: 'AddressWhereInput' })
    t.list.field('NOT', { type: 'AddressWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('street', { type: 'StringFilter' })
    t.field('city', { type: 'StringFilter' })
    t.field('zipCode', { type: 'StringFilter' })
    t.field('country', { type: 'StringFilter' })
    t.field('phoneNumber', { type: 'StringFilter' })
    t.field('userId', { type: 'IntFilter' })
    t.field('User', { type: 'UserRelationFilter' })
  },
})

export const AddressOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('street', { type: 'SortOrder' })
    t.field('city', { type: 'SortOrder' })
    t.field('zipCode', { type: 'SortOrder' })
    t.field('country', { type: 'SortOrder' })
    t.field('phoneNumber', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('User', { type: 'UserOrderByWithRelationInput' })
  },
})

export const AddressWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('userId', { type: 'Int' })
  },
})

export const AddressOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('street', { type: 'SortOrder' })
    t.field('city', { type: 'SortOrder' })
    t.field('zipCode', { type: 'SortOrder' })
    t.field('country', { type: 'SortOrder' })
    t.field('phoneNumber', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('_count', { type: 'AddressCountOrderByAggregateInput' })
    t.field('_avg', { type: 'AddressAvgOrderByAggregateInput' })
    t.field('_max', { type: 'AddressMaxOrderByAggregateInput' })
    t.field('_min', { type: 'AddressMinOrderByAggregateInput' })
    t.field('_sum', { type: 'AddressSumOrderByAggregateInput' })
  },
})

export const AddressScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'AddressScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'AddressScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'AddressScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('street', { type: 'StringWithAggregatesFilter' })
    t.field('city', { type: 'StringWithAggregatesFilter' })
    t.field('zipCode', { type: 'StringWithAggregatesFilter' })
    t.field('country', { type: 'StringWithAggregatesFilter' })
    t.field('phoneNumber', { type: 'StringWithAggregatesFilter' })
    t.field('userId', { type: 'IntWithAggregatesFilter' })
  },
})

export const ProductWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ProductWhereInput' })
    t.list.field('OR', { type: 'ProductWhereInput' })
    t.list.field('NOT', { type: 'ProductWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('description', { type: 'StringFilter' })
    t.field('price', { type: 'IntFilter' })
    t.field('discount', { type: 'FloatFilter' })
    t.field('stock', { type: 'IntFilter' })
    t.field('category', { type: 'StringFilter' })
    t.field('manufacturer', { type: 'StringFilter' })
    t.field('img', { type: 'StringFilter' })
    t.field('likes', { type: 'IntFilter' })
    t.field('memory', { type: 'StringNullableFilter' })
    t.field('storage', { type: 'StringNullableFilter' })
    t.field('processor', { type: 'StringNullableFilter' })
    t.field('gpu', { type: 'StringNullableFilter' })
    t.field('os', { type: 'StringNullableFilter' })
    t.field('screen', { type: 'StringNullableFilter' })
    t.field('reviews', { type: 'ReviewListRelationFilter' })
    t.field('ShoppingProduct', { type: 'ShoppingProductListRelationFilter' })
  },
})

export const ProductOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('price', { type: 'SortOrder' })
    t.field('discount', { type: 'SortOrder' })
    t.field('stock', { type: 'SortOrder' })
    t.field('category', { type: 'SortOrder' })
    t.field('manufacturer', { type: 'SortOrder' })
    t.field('img', { type: 'SortOrder' })
    t.field('likes', { type: 'SortOrder' })
    t.field('memory', { type: 'SortOrder' })
    t.field('storage', { type: 'SortOrder' })
    t.field('processor', { type: 'SortOrder' })
    t.field('gpu', { type: 'SortOrder' })
    t.field('os', { type: 'SortOrder' })
    t.field('screen', { type: 'SortOrder' })
    t.field('reviews', { type: 'ReviewOrderByRelationAggregateInput' })
    t.field('ShoppingProduct', {
      type: 'ShoppingProductOrderByRelationAggregateInput',
    })
  },
})

export const ProductWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'String' })
  },
})

export const ProductOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('price', { type: 'SortOrder' })
    t.field('discount', { type: 'SortOrder' })
    t.field('stock', { type: 'SortOrder' })
    t.field('category', { type: 'SortOrder' })
    t.field('manufacturer', { type: 'SortOrder' })
    t.field('img', { type: 'SortOrder' })
    t.field('likes', { type: 'SortOrder' })
    t.field('memory', { type: 'SortOrder' })
    t.field('storage', { type: 'SortOrder' })
    t.field('processor', { type: 'SortOrder' })
    t.field('gpu', { type: 'SortOrder' })
    t.field('os', { type: 'SortOrder' })
    t.field('screen', { type: 'SortOrder' })
    t.field('_count', { type: 'ProductCountOrderByAggregateInput' })
    t.field('_avg', { type: 'ProductAvgOrderByAggregateInput' })
    t.field('_max', { type: 'ProductMaxOrderByAggregateInput' })
    t.field('_min', { type: 'ProductMinOrderByAggregateInput' })
    t.field('_sum', { type: 'ProductSumOrderByAggregateInput' })
  },
})

export const ProductScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'ProductScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'ProductScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'ProductScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('name', { type: 'StringWithAggregatesFilter' })
    t.field('description', { type: 'StringWithAggregatesFilter' })
    t.field('price', { type: 'IntWithAggregatesFilter' })
    t.field('discount', { type: 'FloatWithAggregatesFilter' })
    t.field('stock', { type: 'IntWithAggregatesFilter' })
    t.field('category', { type: 'StringWithAggregatesFilter' })
    t.field('manufacturer', { type: 'StringWithAggregatesFilter' })
    t.field('img', { type: 'StringWithAggregatesFilter' })
    t.field('likes', { type: 'IntWithAggregatesFilter' })
    t.field('memory', { type: 'StringNullableWithAggregatesFilter' })
    t.field('storage', { type: 'StringNullableWithAggregatesFilter' })
    t.field('processor', { type: 'StringNullableWithAggregatesFilter' })
    t.field('gpu', { type: 'StringNullableWithAggregatesFilter' })
    t.field('os', { type: 'StringNullableWithAggregatesFilter' })
    t.field('screen', { type: 'StringNullableWithAggregatesFilter' })
  },
})

export const OrderWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'OrderWhereInput' })
    t.list.field('OR', { type: 'OrderWhereInput' })
    t.list.field('NOT', { type: 'OrderWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('userId', { type: 'IntFilter' })
    t.field('OrderStatus', { type: 'StringFilter' })
    t.field('date', { type: 'DateTimeFilter' })
    t.field('subtotal', { type: 'IntFilter' })
    t.field('type', { type: 'EnumOrderTypeFilter' })
    t.field('User', { type: 'UserRelationFilter' })
    t.field('address', { type: 'OrderAddressRelationFilter' })
    t.field('products', { type: 'OrderProductListRelationFilter' })
  },
})

export const OrderOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('OrderStatus', { type: 'SortOrder' })
    t.field('date', { type: 'SortOrder' })
    t.field('subtotal', { type: 'SortOrder' })
    t.field('type', { type: 'SortOrder' })
    t.field('User', { type: 'UserOrderByWithRelationInput' })
    t.field('address', { type: 'OrderAddressOrderByWithRelationInput' })
    t.field('products', { type: 'OrderProductOrderByRelationAggregateInput' })
  },
})

export const OrderWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
  },
})

export const OrderOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('OrderStatus', { type: 'SortOrder' })
    t.field('date', { type: 'SortOrder' })
    t.field('subtotal', { type: 'SortOrder' })
    t.field('type', { type: 'SortOrder' })
    t.field('_count', { type: 'OrderCountOrderByAggregateInput' })
    t.field('_avg', { type: 'OrderAvgOrderByAggregateInput' })
    t.field('_max', { type: 'OrderMaxOrderByAggregateInput' })
    t.field('_min', { type: 'OrderMinOrderByAggregateInput' })
    t.field('_sum', { type: 'OrderSumOrderByAggregateInput' })
  },
})

export const OrderScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'OrderScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'OrderScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'OrderScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('userId', { type: 'IntWithAggregatesFilter' })
    t.field('OrderStatus', { type: 'StringWithAggregatesFilter' })
    t.field('date', { type: 'DateTimeWithAggregatesFilter' })
    t.field('subtotal', { type: 'IntWithAggregatesFilter' })
    t.field('type', { type: 'EnumOrderTypeWithAggregatesFilter' })
  },
})

export const OrderAddressWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'OrderAddressWhereInput' })
    t.list.field('OR', { type: 'OrderAddressWhereInput' })
    t.list.field('NOT', { type: 'OrderAddressWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('orderId', { type: 'IntFilter' })
    t.field('fullName', { type: 'StringFilter' })
    t.field('street', { type: 'StringFilter' })
    t.field('city', { type: 'StringFilter' })
    t.field('zipCode', { type: 'StringFilter' })
    t.field('country', { type: 'StringFilter' })
    t.field('phoneNumber', { type: 'StringFilter' })
    t.field('order', { type: 'OrderRelationFilter' })
  },
})

export const OrderAddressOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('orderId', { type: 'SortOrder' })
    t.field('fullName', { type: 'SortOrder' })
    t.field('street', { type: 'SortOrder' })
    t.field('city', { type: 'SortOrder' })
    t.field('zipCode', { type: 'SortOrder' })
    t.field('country', { type: 'SortOrder' })
    t.field('phoneNumber', { type: 'SortOrder' })
    t.field('order', { type: 'OrderOrderByWithRelationInput' })
  },
})

export const OrderAddressWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('orderId', { type: 'Int' })
  },
})

export const OrderAddressOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('orderId', { type: 'SortOrder' })
    t.field('fullName', { type: 'SortOrder' })
    t.field('street', { type: 'SortOrder' })
    t.field('city', { type: 'SortOrder' })
    t.field('zipCode', { type: 'SortOrder' })
    t.field('country', { type: 'SortOrder' })
    t.field('phoneNumber', { type: 'SortOrder' })
    t.field('_count', { type: 'OrderAddressCountOrderByAggregateInput' })
    t.field('_avg', { type: 'OrderAddressAvgOrderByAggregateInput' })
    t.field('_max', { type: 'OrderAddressMaxOrderByAggregateInput' })
    t.field('_min', { type: 'OrderAddressMinOrderByAggregateInput' })
    t.field('_sum', { type: 'OrderAddressSumOrderByAggregateInput' })
  },
})

export const OrderAddressScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'OrderAddressScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'OrderAddressScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'OrderAddressScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('orderId', { type: 'IntWithAggregatesFilter' })
    t.field('fullName', { type: 'StringWithAggregatesFilter' })
    t.field('street', { type: 'StringWithAggregatesFilter' })
    t.field('city', { type: 'StringWithAggregatesFilter' })
    t.field('zipCode', { type: 'StringWithAggregatesFilter' })
    t.field('country', { type: 'StringWithAggregatesFilter' })
    t.field('phoneNumber', { type: 'StringWithAggregatesFilter' })
  },
})

export const OrderProductWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'OrderProductWhereInput' })
    t.list.field('OR', { type: 'OrderProductWhereInput' })
    t.list.field('NOT', { type: 'OrderProductWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('orderId', { type: 'IntFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('price', { type: 'IntFilter' })
    t.field('img', { type: 'StringFilter' })
    t.field('discount', { type: 'FloatFilter' })
    t.field('quantity', { type: 'IntFilter' })
    t.field('Order', { type: 'OrderRelationFilter' })
  },
})

export const OrderProductOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('orderId', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('price', { type: 'SortOrder' })
    t.field('img', { type: 'SortOrder' })
    t.field('discount', { type: 'SortOrder' })
    t.field('quantity', { type: 'SortOrder' })
    t.field('Order', { type: 'OrderOrderByWithRelationInput' })
  },
})

export const OrderProductWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
  },
})

export const OrderProductOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('orderId', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('price', { type: 'SortOrder' })
    t.field('img', { type: 'SortOrder' })
    t.field('discount', { type: 'SortOrder' })
    t.field('quantity', { type: 'SortOrder' })
    t.field('_count', { type: 'OrderProductCountOrderByAggregateInput' })
    t.field('_avg', { type: 'OrderProductAvgOrderByAggregateInput' })
    t.field('_max', { type: 'OrderProductMaxOrderByAggregateInput' })
    t.field('_min', { type: 'OrderProductMinOrderByAggregateInput' })
    t.field('_sum', { type: 'OrderProductSumOrderByAggregateInput' })
  },
})

export const OrderProductScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'OrderProductScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'OrderProductScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'OrderProductScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('orderId', { type: 'IntWithAggregatesFilter' })
    t.field('name', { type: 'StringWithAggregatesFilter' })
    t.field('price', { type: 'IntWithAggregatesFilter' })
    t.field('img', { type: 'StringWithAggregatesFilter' })
    t.field('discount', { type: 'FloatWithAggregatesFilter' })
    t.field('quantity', { type: 'IntWithAggregatesFilter' })
  },
})

export const ShoppingProductWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ShoppingProductWhereInput' })
    t.list.field('OR', { type: 'ShoppingProductWhereInput' })
    t.list.field('NOT', { type: 'ShoppingProductWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('quantity', { type: 'IntFilter' })
    t.field('userId', { type: 'IntFilter' })
    t.field('productId', { type: 'IntFilter' })
    t.field('Product', { type: 'ProductRelationFilter' })
    t.field('User', { type: 'UserRelationFilter' })
  },
})

export const ShoppingProductOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('quantity', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('productId', { type: 'SortOrder' })
    t.field('Product', { type: 'ProductOrderByWithRelationInput' })
    t.field('User', { type: 'UserOrderByWithRelationInput' })
  },
})

export const ShoppingProductWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('cartProduct', {
      type: 'ShoppingProductCartProductCompoundUniqueInput',
    })
  },
})

export const ShoppingProductOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('quantity', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('productId', { type: 'SortOrder' })
    t.field('_count', { type: 'ShoppingProductCountOrderByAggregateInput' })
    t.field('_avg', { type: 'ShoppingProductAvgOrderByAggregateInput' })
    t.field('_max', { type: 'ShoppingProductMaxOrderByAggregateInput' })
    t.field('_min', { type: 'ShoppingProductMinOrderByAggregateInput' })
    t.field('_sum', { type: 'ShoppingProductSumOrderByAggregateInput' })
  },
})

export const ShoppingProductScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', {
      type: 'ShoppingProductScalarWhereWithAggregatesInput',
    })
    t.list.field('OR', {
      type: 'ShoppingProductScalarWhereWithAggregatesInput',
    })
    t.list.field('NOT', {
      type: 'ShoppingProductScalarWhereWithAggregatesInput',
    })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('quantity', { type: 'IntWithAggregatesFilter' })
    t.field('userId', { type: 'IntWithAggregatesFilter' })
    t.field('productId', { type: 'IntWithAggregatesFilter' })
  },
})

export const ReviewWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ReviewWhereInput' })
    t.list.field('OR', { type: 'ReviewWhereInput' })
    t.list.field('NOT', { type: 'ReviewWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('userId', { type: 'IntFilter' })
    t.field('productId', { type: 'IntFilter' })
    t.field('comment', { type: 'StringFilter' })
    t.field('rating', { type: 'IntFilter' })
    t.field('date', { type: 'DateTimeFilter' })
    t.field('Product', { type: 'ProductRelationFilter' })
    t.field('User', { type: 'UserRelationFilter' })
  },
})

export const ReviewOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('productId', { type: 'SortOrder' })
    t.field('comment', { type: 'SortOrder' })
    t.field('rating', { type: 'SortOrder' })
    t.field('date', { type: 'SortOrder' })
    t.field('Product', { type: 'ProductOrderByWithRelationInput' })
    t.field('User', { type: 'UserOrderByWithRelationInput' })
  },
})

export const ReviewWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
  },
})

export const ReviewOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('productId', { type: 'SortOrder' })
    t.field('comment', { type: 'SortOrder' })
    t.field('rating', { type: 'SortOrder' })
    t.field('date', { type: 'SortOrder' })
    t.field('_count', { type: 'ReviewCountOrderByAggregateInput' })
    t.field('_avg', { type: 'ReviewAvgOrderByAggregateInput' })
    t.field('_max', { type: 'ReviewMaxOrderByAggregateInput' })
    t.field('_min', { type: 'ReviewMinOrderByAggregateInput' })
    t.field('_sum', { type: 'ReviewSumOrderByAggregateInput' })
  },
})

export const ReviewScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'ReviewScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'ReviewScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'ReviewScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('userId', { type: 'IntWithAggregatesFilter' })
    t.field('productId', { type: 'IntWithAggregatesFilter' })
    t.field('comment', { type: 'StringWithAggregatesFilter' })
    t.field('rating', { type: 'IntWithAggregatesFilter' })
    t.field('date', { type: 'DateTimeWithAggregatesFilter' })
  },
})

export const UserCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('firstName', { type: 'String' })
    t.nonNull.field('lastName', { type: 'String' })
    t.field('gender', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('role', { type: 'Role' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressCreateNestedOneWithoutUserInput' })
    t.field('orders', { type: 'OrderCreateNestedManyWithoutUserInput' })
    t.field('reviews', { type: 'ReviewCreateNestedManyWithoutUserInput' })
    t.field('cart', { type: 'ShoppingProductCreateNestedManyWithoutUserInput' })
  },
})

export const UserUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('firstName', { type: 'String' })
    t.nonNull.field('lastName', { type: 'String' })
    t.field('gender', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('role', { type: 'Role' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('address', {
      type: 'AddressUncheckedCreateNestedOneWithoutUserInput',
    })
    t.field('orders', {
      type: 'OrderUncheckedCreateNestedManyWithoutUserInput',
    })
    t.field('reviews', {
      type: 'ReviewUncheckedCreateNestedManyWithoutUserInput',
    })
    t.field('cart', {
      type: 'ShoppingProductUncheckedCreateNestedManyWithoutUserInput',
    })
  },
})

export const UserUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('firstName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('lastName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('gender', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('birthday', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('address', { type: 'AddressUpdateOneWithoutUserNestedInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutUserNestedInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutUserNestedInput' })
    t.field('cart', { type: 'ShoppingProductUpdateManyWithoutUserNestedInput' })
  },
})

export const UserUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('firstName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('lastName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('gender', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('birthday', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('address', {
      type: 'AddressUncheckedUpdateOneWithoutUserNestedInput',
    })
    t.field('orders', {
      type: 'OrderUncheckedUpdateManyWithoutUserNestedInput',
    })
    t.field('reviews', {
      type: 'ReviewUncheckedUpdateManyWithoutUserNestedInput',
    })
    t.field('cart', {
      type: 'ShoppingProductUncheckedUpdateManyWithoutUserNestedInput',
    })
  },
})

export const UserCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('firstName', { type: 'String' })
    t.nonNull.field('lastName', { type: 'String' })
    t.field('gender', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('role', { type: 'Role' })
    t.field('createdAt', { type: 'DateTime' })
  },
})

export const UserUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateManyMutationInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('firstName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('lastName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('gender', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('birthday', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const UserUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('firstName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('lastName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('gender', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('birthday', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const AddressCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressCreateInput',
  definition(t) {
    t.nonNull.field('street', { type: 'String' })
    t.nonNull.field('city', { type: 'String' })
    t.nonNull.field('zipCode', { type: 'String' })
    t.nonNull.field('country', { type: 'String' })
    t.nonNull.field('phoneNumber', { type: 'String' })
    t.nonNull.field('User', { type: 'UserCreateNestedOneWithoutAddressInput' })
  },
})

export const AddressUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('street', { type: 'String' })
    t.nonNull.field('city', { type: 'String' })
    t.nonNull.field('zipCode', { type: 'String' })
    t.nonNull.field('country', { type: 'String' })
    t.nonNull.field('phoneNumber', { type: 'String' })
    t.nonNull.field('userId', { type: 'Int' })
  },
})

export const AddressUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressUpdateInput',
  definition(t) {
    t.field('street', { type: 'StringFieldUpdateOperationsInput' })
    t.field('city', { type: 'StringFieldUpdateOperationsInput' })
    t.field('zipCode', { type: 'StringFieldUpdateOperationsInput' })
    t.field('country', { type: 'StringFieldUpdateOperationsInput' })
    t.field('phoneNumber', { type: 'StringFieldUpdateOperationsInput' })
    t.field('User', { type: 'UserUpdateOneRequiredWithoutAddressNestedInput' })
  },
})

export const AddressUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('street', { type: 'StringFieldUpdateOperationsInput' })
    t.field('city', { type: 'StringFieldUpdateOperationsInput' })
    t.field('zipCode', { type: 'StringFieldUpdateOperationsInput' })
    t.field('country', { type: 'StringFieldUpdateOperationsInput' })
    t.field('phoneNumber', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const AddressCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('street', { type: 'String' })
    t.nonNull.field('city', { type: 'String' })
    t.nonNull.field('zipCode', { type: 'String' })
    t.nonNull.field('country', { type: 'String' })
    t.nonNull.field('phoneNumber', { type: 'String' })
    t.nonNull.field('userId', { type: 'Int' })
  },
})

export const AddressUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressUpdateManyMutationInput',
  definition(t) {
    t.field('street', { type: 'StringFieldUpdateOperationsInput' })
    t.field('city', { type: 'StringFieldUpdateOperationsInput' })
    t.field('zipCode', { type: 'StringFieldUpdateOperationsInput' })
    t.field('country', { type: 'StringFieldUpdateOperationsInput' })
    t.field('phoneNumber', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const AddressUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('street', { type: 'StringFieldUpdateOperationsInput' })
    t.field('city', { type: 'StringFieldUpdateOperationsInput' })
    t.field('zipCode', { type: 'StringFieldUpdateOperationsInput' })
    t.field('country', { type: 'StringFieldUpdateOperationsInput' })
    t.field('phoneNumber', { type: 'StringFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const ProductCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.field('price', { type: 'Int' })
    t.field('discount', { type: 'Float' })
    t.field('stock', { type: 'Int' })
    t.nonNull.field('category', { type: 'String' })
    t.nonNull.field('manufacturer', { type: 'String' })
    t.nonNull.field('img', { type: 'String' })
    t.field('likes', { type: 'Int' })
    t.field('memory', { type: 'String' })
    t.field('storage', { type: 'String' })
    t.field('processor', { type: 'String' })
    t.field('gpu', { type: 'String' })
    t.field('os', { type: 'String' })
    t.field('screen', { type: 'String' })
    t.field('reviews', { type: 'ReviewCreateNestedManyWithoutProductInput' })
    t.field('ShoppingProduct', {
      type: 'ShoppingProductCreateNestedManyWithoutProductInput',
    })
  },
})

export const ProductUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.field('price', { type: 'Int' })
    t.field('discount', { type: 'Float' })
    t.field('stock', { type: 'Int' })
    t.nonNull.field('category', { type: 'String' })
    t.nonNull.field('manufacturer', { type: 'String' })
    t.nonNull.field('img', { type: 'String' })
    t.field('likes', { type: 'Int' })
    t.field('memory', { type: 'String' })
    t.field('storage', { type: 'String' })
    t.field('processor', { type: 'String' })
    t.field('gpu', { type: 'String' })
    t.field('os', { type: 'String' })
    t.field('screen', { type: 'String' })
    t.field('reviews', {
      type: 'ReviewUncheckedCreateNestedManyWithoutProductInput',
    })
    t.field('ShoppingProduct', {
      type: 'ShoppingProductUncheckedCreateNestedManyWithoutProductInput',
    })
  },
})

export const ProductUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'IntFieldUpdateOperationsInput' })
    t.field('discount', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('stock', { type: 'IntFieldUpdateOperationsInput' })
    t.field('category', { type: 'StringFieldUpdateOperationsInput' })
    t.field('manufacturer', { type: 'StringFieldUpdateOperationsInput' })
    t.field('img', { type: 'StringFieldUpdateOperationsInput' })
    t.field('likes', { type: 'IntFieldUpdateOperationsInput' })
    t.field('memory', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('storage', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('processor', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('gpu', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('os', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('screen', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutProductNestedInput' })
    t.field('ShoppingProduct', {
      type: 'ShoppingProductUpdateManyWithoutProductNestedInput',
    })
  },
})

export const ProductUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'IntFieldUpdateOperationsInput' })
    t.field('discount', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('stock', { type: 'IntFieldUpdateOperationsInput' })
    t.field('category', { type: 'StringFieldUpdateOperationsInput' })
    t.field('manufacturer', { type: 'StringFieldUpdateOperationsInput' })
    t.field('img', { type: 'StringFieldUpdateOperationsInput' })
    t.field('likes', { type: 'IntFieldUpdateOperationsInput' })
    t.field('memory', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('storage', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('processor', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('gpu', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('os', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('screen', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('reviews', {
      type: 'ReviewUncheckedUpdateManyWithoutProductNestedInput',
    })
    t.field('ShoppingProduct', {
      type: 'ShoppingProductUncheckedUpdateManyWithoutProductNestedInput',
    })
  },
})

export const ProductCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.field('price', { type: 'Int' })
    t.field('discount', { type: 'Float' })
    t.field('stock', { type: 'Int' })
    t.nonNull.field('category', { type: 'String' })
    t.nonNull.field('manufacturer', { type: 'String' })
    t.nonNull.field('img', { type: 'String' })
    t.field('likes', { type: 'Int' })
    t.field('memory', { type: 'String' })
    t.field('storage', { type: 'String' })
    t.field('processor', { type: 'String' })
    t.field('gpu', { type: 'String' })
    t.field('os', { type: 'String' })
    t.field('screen', { type: 'String' })
  },
})

export const ProductUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateManyMutationInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'IntFieldUpdateOperationsInput' })
    t.field('discount', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('stock', { type: 'IntFieldUpdateOperationsInput' })
    t.field('category', { type: 'StringFieldUpdateOperationsInput' })
    t.field('manufacturer', { type: 'StringFieldUpdateOperationsInput' })
    t.field('img', { type: 'StringFieldUpdateOperationsInput' })
    t.field('likes', { type: 'IntFieldUpdateOperationsInput' })
    t.field('memory', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('storage', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('processor', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('gpu', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('os', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('screen', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const ProductUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'IntFieldUpdateOperationsInput' })
    t.field('discount', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('stock', { type: 'IntFieldUpdateOperationsInput' })
    t.field('category', { type: 'StringFieldUpdateOperationsInput' })
    t.field('manufacturer', { type: 'StringFieldUpdateOperationsInput' })
    t.field('img', { type: 'StringFieldUpdateOperationsInput' })
    t.field('likes', { type: 'IntFieldUpdateOperationsInput' })
    t.field('memory', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('storage', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('processor', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('gpu', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('os', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('screen', { type: 'NullableStringFieldUpdateOperationsInput' })
  },
})

export const OrderCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCreateInput',
  definition(t) {
    t.field('OrderStatus', { type: 'String' })
    t.field('date', { type: 'DateTime' })
    t.field('subtotal', { type: 'Int' })
    t.nonNull.field('type', { type: 'OrderType' })
    t.nonNull.field('User', { type: 'UserCreateNestedOneWithoutOrdersInput' })
    t.field('address', { type: 'OrderAddressCreateNestedOneWithoutOrderInput' })
    t.field('products', {
      type: 'OrderProductCreateNestedManyWithoutOrderInput',
    })
  },
})

export const OrderUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('userId', { type: 'Int' })
    t.field('OrderStatus', { type: 'String' })
    t.field('date', { type: 'DateTime' })
    t.field('subtotal', { type: 'Int' })
    t.nonNull.field('type', { type: 'OrderType' })
    t.field('address', {
      type: 'OrderAddressUncheckedCreateNestedOneWithoutOrderInput',
    })
    t.field('products', {
      type: 'OrderProductUncheckedCreateNestedManyWithoutOrderInput',
    })
  },
})

export const OrderUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUpdateInput',
  definition(t) {
    t.field('OrderStatus', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('subtotal', { type: 'IntFieldUpdateOperationsInput' })
    t.field('type', { type: 'EnumOrderTypeFieldUpdateOperationsInput' })
    t.field('User', { type: 'UserUpdateOneRequiredWithoutOrdersNestedInput' })
    t.field('address', { type: 'OrderAddressUpdateOneWithoutOrderNestedInput' })
    t.field('products', {
      type: 'OrderProductUpdateManyWithoutOrderNestedInput',
    })
  },
})

export const OrderUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('OrderStatus', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('subtotal', { type: 'IntFieldUpdateOperationsInput' })
    t.field('type', { type: 'EnumOrderTypeFieldUpdateOperationsInput' })
    t.field('address', {
      type: 'OrderAddressUncheckedUpdateOneWithoutOrderNestedInput',
    })
    t.field('products', {
      type: 'OrderProductUncheckedUpdateManyWithoutOrderNestedInput',
    })
  },
})

export const OrderCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('userId', { type: 'Int' })
    t.field('OrderStatus', { type: 'String' })
    t.field('date', { type: 'DateTime' })
    t.field('subtotal', { type: 'Int' })
    t.nonNull.field('type', { type: 'OrderType' })
  },
})

export const OrderUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUpdateManyMutationInput',
  definition(t) {
    t.field('OrderStatus', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('subtotal', { type: 'IntFieldUpdateOperationsInput' })
    t.field('type', { type: 'EnumOrderTypeFieldUpdateOperationsInput' })
  },
})

export const OrderUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('OrderStatus', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('subtotal', { type: 'IntFieldUpdateOperationsInput' })
    t.field('type', { type: 'EnumOrderTypeFieldUpdateOperationsInput' })
  },
})

export const OrderAddressCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressCreateInput',
  definition(t) {
    t.nonNull.field('fullName', { type: 'String' })
    t.nonNull.field('street', { type: 'String' })
    t.nonNull.field('city', { type: 'String' })
    t.nonNull.field('zipCode', { type: 'String' })
    t.nonNull.field('country', { type: 'String' })
    t.nonNull.field('phoneNumber', { type: 'String' })
    t.nonNull.field('order', {
      type: 'OrderCreateNestedOneWithoutAddressInput',
    })
  },
})

export const OrderAddressUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('orderId', { type: 'Int' })
    t.nonNull.field('fullName', { type: 'String' })
    t.nonNull.field('street', { type: 'String' })
    t.nonNull.field('city', { type: 'String' })
    t.nonNull.field('zipCode', { type: 'String' })
    t.nonNull.field('country', { type: 'String' })
    t.nonNull.field('phoneNumber', { type: 'String' })
  },
})

export const OrderAddressUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressUpdateInput',
  definition(t) {
    t.field('fullName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('street', { type: 'StringFieldUpdateOperationsInput' })
    t.field('city', { type: 'StringFieldUpdateOperationsInput' })
    t.field('zipCode', { type: 'StringFieldUpdateOperationsInput' })
    t.field('country', { type: 'StringFieldUpdateOperationsInput' })
    t.field('phoneNumber', { type: 'StringFieldUpdateOperationsInput' })
    t.field('order', {
      type: 'OrderUpdateOneRequiredWithoutAddressNestedInput',
    })
  },
})

export const OrderAddressUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('orderId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('fullName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('street', { type: 'StringFieldUpdateOperationsInput' })
    t.field('city', { type: 'StringFieldUpdateOperationsInput' })
    t.field('zipCode', { type: 'StringFieldUpdateOperationsInput' })
    t.field('country', { type: 'StringFieldUpdateOperationsInput' })
    t.field('phoneNumber', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const OrderAddressCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('orderId', { type: 'Int' })
    t.nonNull.field('fullName', { type: 'String' })
    t.nonNull.field('street', { type: 'String' })
    t.nonNull.field('city', { type: 'String' })
    t.nonNull.field('zipCode', { type: 'String' })
    t.nonNull.field('country', { type: 'String' })
    t.nonNull.field('phoneNumber', { type: 'String' })
  },
})

export const OrderAddressUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressUpdateManyMutationInput',
  definition(t) {
    t.field('fullName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('street', { type: 'StringFieldUpdateOperationsInput' })
    t.field('city', { type: 'StringFieldUpdateOperationsInput' })
    t.field('zipCode', { type: 'StringFieldUpdateOperationsInput' })
    t.field('country', { type: 'StringFieldUpdateOperationsInput' })
    t.field('phoneNumber', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const OrderAddressUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('orderId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('fullName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('street', { type: 'StringFieldUpdateOperationsInput' })
    t.field('city', { type: 'StringFieldUpdateOperationsInput' })
    t.field('zipCode', { type: 'StringFieldUpdateOperationsInput' })
    t.field('country', { type: 'StringFieldUpdateOperationsInput' })
    t.field('phoneNumber', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const OrderProductCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductCreateInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('price', { type: 'Int' })
    t.nonNull.field('img', { type: 'String' })
    t.field('discount', { type: 'Float' })
    t.nonNull.field('quantity', { type: 'Int' })
    t.nonNull.field('Order', {
      type: 'OrderCreateNestedOneWithoutProductsInput',
    })
  },
})

export const OrderProductUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('orderId', { type: 'Int' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('price', { type: 'Int' })
    t.nonNull.field('img', { type: 'String' })
    t.field('discount', { type: 'Float' })
    t.nonNull.field('quantity', { type: 'Int' })
  },
})

export const OrderProductUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductUpdateInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'IntFieldUpdateOperationsInput' })
    t.field('img', { type: 'StringFieldUpdateOperationsInput' })
    t.field('discount', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' })
    t.field('Order', {
      type: 'OrderUpdateOneRequiredWithoutProductsNestedInput',
    })
  },
})

export const OrderProductUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('orderId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'IntFieldUpdateOperationsInput' })
    t.field('img', { type: 'StringFieldUpdateOperationsInput' })
    t.field('discount', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const OrderProductCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('orderId', { type: 'Int' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('price', { type: 'Int' })
    t.nonNull.field('img', { type: 'String' })
    t.field('discount', { type: 'Float' })
    t.nonNull.field('quantity', { type: 'Int' })
  },
})

export const OrderProductUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductUpdateManyMutationInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'IntFieldUpdateOperationsInput' })
    t.field('img', { type: 'StringFieldUpdateOperationsInput' })
    t.field('discount', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const OrderProductUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('orderId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'IntFieldUpdateOperationsInput' })
    t.field('img', { type: 'StringFieldUpdateOperationsInput' })
    t.field('discount', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const ShoppingProductCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductCreateInput',
  definition(t) {
    t.nonNull.field('quantity', { type: 'Int' })
    t.nonNull.field('Product', {
      type: 'ProductCreateNestedOneWithoutShoppingProductInput',
    })
    t.nonNull.field('User', { type: 'UserCreateNestedOneWithoutCartInput' })
  },
})

export const ShoppingProductUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('quantity', { type: 'Int' })
    t.nonNull.field('userId', { type: 'Int' })
    t.nonNull.field('productId', { type: 'Int' })
  },
})

export const ShoppingProductUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductUpdateInput',
  definition(t) {
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' })
    t.field('Product', {
      type: 'ProductUpdateOneRequiredWithoutShoppingProductNestedInput',
    })
    t.field('User', { type: 'UserUpdateOneRequiredWithoutCartNestedInput' })
  },
})

export const ShoppingProductUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('productId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const ShoppingProductCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('quantity', { type: 'Int' })
    t.nonNull.field('userId', { type: 'Int' })
    t.nonNull.field('productId', { type: 'Int' })
  },
})

export const ShoppingProductUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductUpdateManyMutationInput',
  definition(t) {
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const ShoppingProductUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('productId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const ReviewCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateInput',
  definition(t) {
    t.field('comment', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.field('date', { type: 'DateTime' })
    t.nonNull.field('Product', {
      type: 'ProductCreateNestedOneWithoutReviewsInput',
    })
    t.nonNull.field('User', { type: 'UserCreateNestedOneWithoutReviewsInput' })
  },
})

export const ReviewUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('userId', { type: 'Int' })
    t.nonNull.field('productId', { type: 'Int' })
    t.field('comment', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.field('date', { type: 'DateTime' })
  },
})

export const ReviewUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpdateInput',
  definition(t) {
    t.field('comment', { type: 'StringFieldUpdateOperationsInput' })
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('Product', {
      type: 'ProductUpdateOneRequiredWithoutReviewsNestedInput',
    })
    t.field('User', { type: 'UserUpdateOneRequiredWithoutReviewsNestedInput' })
  },
})

export const ReviewUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('productId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('comment', { type: 'StringFieldUpdateOperationsInput' })
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const ReviewCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('userId', { type: 'Int' })
    t.nonNull.field('productId', { type: 'Int' })
    t.field('comment', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.field('date', { type: 'DateTime' })
  },
})

export const ReviewUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpdateManyMutationInput',
  definition(t) {
    t.field('comment', { type: 'StringFieldUpdateOperationsInput' })
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const ReviewUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('productId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('comment', { type: 'StringFieldUpdateOperationsInput' })
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const IntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntFilter' })
  },
})

export const StringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringFilter' })
  },
})

export const StringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringNullableFilter' })
  },
})

export const DateTimeNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeNullableFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeNullableFilter' })
  },
})

export const EnumRoleFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumRoleFilter',
  definition(t) {
    t.field('equals', { type: 'Role' })
    t.list.field('in', { type: 'Role' })
    t.list.field('notIn', { type: 'Role' })
    t.field('not', { type: 'NestedEnumRoleFilter' })
  },
})

export const DateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeFilter' })
  },
})

export const AddressRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressRelationFilter',
  definition(t) {
    t.field('is', { type: 'AddressWhereInput' })
    t.field('isNot', { type: 'AddressWhereInput' })
  },
})

export const OrderListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderListRelationFilter',
  definition(t) {
    t.field('every', { type: 'OrderWhereInput' })
    t.field('some', { type: 'OrderWhereInput' })
    t.field('none', { type: 'OrderWhereInput' })
  },
})

export const ReviewListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewListRelationFilter',
  definition(t) {
    t.field('every', { type: 'ReviewWhereInput' })
    t.field('some', { type: 'ReviewWhereInput' })
    t.field('none', { type: 'ReviewWhereInput' })
  },
})

export const ShoppingProductListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductListRelationFilter',
  definition(t) {
    t.field('every', { type: 'ShoppingProductWhereInput' })
    t.field('some', { type: 'ShoppingProductWhereInput' })
    t.field('none', { type: 'ShoppingProductWhereInput' })
  },
})

export const OrderOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const ReviewOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const ShoppingProductOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const UserCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('firstName', { type: 'SortOrder' })
    t.field('lastName', { type: 'SortOrder' })
    t.field('gender', { type: 'SortOrder' })
    t.field('birthday', { type: 'SortOrder' })
    t.field('role', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
  },
})

export const UserAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const UserMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('firstName', { type: 'SortOrder' })
    t.field('lastName', { type: 'SortOrder' })
    t.field('gender', { type: 'SortOrder' })
    t.field('birthday', { type: 'SortOrder' })
    t.field('role', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
  },
})

export const UserMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('password', { type: 'SortOrder' })
    t.field('firstName', { type: 'SortOrder' })
    t.field('lastName', { type: 'SortOrder' })
    t.field('gender', { type: 'SortOrder' })
    t.field('birthday', { type: 'SortOrder' })
    t.field('role', { type: 'SortOrder' })
    t.field('createdAt', { type: 'SortOrder' })
  },
})

export const UserSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const IntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedIntFilter' })
    t.field('_max', { type: 'NestedIntFilter' })
  },
})

export const StringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  },
})

export const StringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  },
})

export const DateTimeNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedDateTimeNullableFilter' })
    t.field('_max', { type: 'NestedDateTimeNullableFilter' })
  },
})

export const EnumRoleWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumRoleWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Role' })
    t.list.field('in', { type: 'Role' })
    t.list.field('notIn', { type: 'Role' })
    t.field('not', { type: 'NestedEnumRoleWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedEnumRoleFilter' })
    t.field('_max', { type: 'NestedEnumRoleFilter' })
  },
})

export const DateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedDateTimeFilter' })
    t.field('_max', { type: 'NestedDateTimeFilter' })
  },
})

export const UserRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserRelationFilter',
  definition(t) {
    t.field('is', { type: 'UserWhereInput' })
    t.field('isNot', { type: 'UserWhereInput' })
  },
})

export const AddressCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('street', { type: 'SortOrder' })
    t.field('city', { type: 'SortOrder' })
    t.field('zipCode', { type: 'SortOrder' })
    t.field('country', { type: 'SortOrder' })
    t.field('phoneNumber', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
  },
})

export const AddressAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
  },
})

export const AddressMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('street', { type: 'SortOrder' })
    t.field('city', { type: 'SortOrder' })
    t.field('zipCode', { type: 'SortOrder' })
    t.field('country', { type: 'SortOrder' })
    t.field('phoneNumber', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
  },
})

export const AddressMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('street', { type: 'SortOrder' })
    t.field('city', { type: 'SortOrder' })
    t.field('zipCode', { type: 'SortOrder' })
    t.field('country', { type: 'SortOrder' })
    t.field('phoneNumber', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
  },
})

export const AddressSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
  },
})

export const FloatFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FloatFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatFilter' })
  },
})

export const ProductCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('price', { type: 'SortOrder' })
    t.field('discount', { type: 'SortOrder' })
    t.field('stock', { type: 'SortOrder' })
    t.field('category', { type: 'SortOrder' })
    t.field('manufacturer', { type: 'SortOrder' })
    t.field('img', { type: 'SortOrder' })
    t.field('likes', { type: 'SortOrder' })
    t.field('memory', { type: 'SortOrder' })
    t.field('storage', { type: 'SortOrder' })
    t.field('processor', { type: 'SortOrder' })
    t.field('gpu', { type: 'SortOrder' })
    t.field('os', { type: 'SortOrder' })
    t.field('screen', { type: 'SortOrder' })
  },
})

export const ProductAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('price', { type: 'SortOrder' })
    t.field('discount', { type: 'SortOrder' })
    t.field('stock', { type: 'SortOrder' })
    t.field('likes', { type: 'SortOrder' })
  },
})

export const ProductMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('price', { type: 'SortOrder' })
    t.field('discount', { type: 'SortOrder' })
    t.field('stock', { type: 'SortOrder' })
    t.field('category', { type: 'SortOrder' })
    t.field('manufacturer', { type: 'SortOrder' })
    t.field('img', { type: 'SortOrder' })
    t.field('likes', { type: 'SortOrder' })
    t.field('memory', { type: 'SortOrder' })
    t.field('storage', { type: 'SortOrder' })
    t.field('processor', { type: 'SortOrder' })
    t.field('gpu', { type: 'SortOrder' })
    t.field('os', { type: 'SortOrder' })
    t.field('screen', { type: 'SortOrder' })
  },
})

export const ProductMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('price', { type: 'SortOrder' })
    t.field('discount', { type: 'SortOrder' })
    t.field('stock', { type: 'SortOrder' })
    t.field('category', { type: 'SortOrder' })
    t.field('manufacturer', { type: 'SortOrder' })
    t.field('img', { type: 'SortOrder' })
    t.field('likes', { type: 'SortOrder' })
    t.field('memory', { type: 'SortOrder' })
    t.field('storage', { type: 'SortOrder' })
    t.field('processor', { type: 'SortOrder' })
    t.field('gpu', { type: 'SortOrder' })
    t.field('os', { type: 'SortOrder' })
    t.field('screen', { type: 'SortOrder' })
  },
})

export const ProductSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('price', { type: 'SortOrder' })
    t.field('discount', { type: 'SortOrder' })
    t.field('stock', { type: 'SortOrder' })
    t.field('likes', { type: 'SortOrder' })
  },
})

export const FloatWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FloatWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedFloatFilter' })
    t.field('_min', { type: 'NestedFloatFilter' })
    t.field('_max', { type: 'NestedFloatFilter' })
  },
})

export const EnumOrderTypeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumOrderTypeFilter',
  definition(t) {
    t.field('equals', { type: 'OrderType' })
    t.list.field('in', { type: 'OrderType' })
    t.list.field('notIn', { type: 'OrderType' })
    t.field('not', { type: 'NestedEnumOrderTypeFilter' })
  },
})

export const OrderAddressRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressRelationFilter',
  definition(t) {
    t.field('is', { type: 'OrderAddressWhereInput' })
    t.field('isNot', { type: 'OrderAddressWhereInput' })
  },
})

export const OrderProductListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductListRelationFilter',
  definition(t) {
    t.field('every', { type: 'OrderProductWhereInput' })
    t.field('some', { type: 'OrderProductWhereInput' })
    t.field('none', { type: 'OrderProductWhereInput' })
  },
})

export const OrderProductOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const OrderCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('OrderStatus', { type: 'SortOrder' })
    t.field('date', { type: 'SortOrder' })
    t.field('subtotal', { type: 'SortOrder' })
    t.field('type', { type: 'SortOrder' })
  },
})

export const OrderAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('subtotal', { type: 'SortOrder' })
  },
})

export const OrderMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('OrderStatus', { type: 'SortOrder' })
    t.field('date', { type: 'SortOrder' })
    t.field('subtotal', { type: 'SortOrder' })
    t.field('type', { type: 'SortOrder' })
  },
})

export const OrderMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('OrderStatus', { type: 'SortOrder' })
    t.field('date', { type: 'SortOrder' })
    t.field('subtotal', { type: 'SortOrder' })
    t.field('type', { type: 'SortOrder' })
  },
})

export const OrderSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('subtotal', { type: 'SortOrder' })
  },
})

export const EnumOrderTypeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumOrderTypeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'OrderType' })
    t.list.field('in', { type: 'OrderType' })
    t.list.field('notIn', { type: 'OrderType' })
    t.field('not', { type: 'NestedEnumOrderTypeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedEnumOrderTypeFilter' })
    t.field('_max', { type: 'NestedEnumOrderTypeFilter' })
  },
})

export const OrderRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderRelationFilter',
  definition(t) {
    t.field('is', { type: 'OrderWhereInput' })
    t.field('isNot', { type: 'OrderWhereInput' })
  },
})

export const OrderAddressCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('orderId', { type: 'SortOrder' })
    t.field('fullName', { type: 'SortOrder' })
    t.field('street', { type: 'SortOrder' })
    t.field('city', { type: 'SortOrder' })
    t.field('zipCode', { type: 'SortOrder' })
    t.field('country', { type: 'SortOrder' })
    t.field('phoneNumber', { type: 'SortOrder' })
  },
})

export const OrderAddressAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('orderId', { type: 'SortOrder' })
  },
})

export const OrderAddressMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('orderId', { type: 'SortOrder' })
    t.field('fullName', { type: 'SortOrder' })
    t.field('street', { type: 'SortOrder' })
    t.field('city', { type: 'SortOrder' })
    t.field('zipCode', { type: 'SortOrder' })
    t.field('country', { type: 'SortOrder' })
    t.field('phoneNumber', { type: 'SortOrder' })
  },
})

export const OrderAddressMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('orderId', { type: 'SortOrder' })
    t.field('fullName', { type: 'SortOrder' })
    t.field('street', { type: 'SortOrder' })
    t.field('city', { type: 'SortOrder' })
    t.field('zipCode', { type: 'SortOrder' })
    t.field('country', { type: 'SortOrder' })
    t.field('phoneNumber', { type: 'SortOrder' })
  },
})

export const OrderAddressSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('orderId', { type: 'SortOrder' })
  },
})

export const OrderProductCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('orderId', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('price', { type: 'SortOrder' })
    t.field('img', { type: 'SortOrder' })
    t.field('discount', { type: 'SortOrder' })
    t.field('quantity', { type: 'SortOrder' })
  },
})

export const OrderProductAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('orderId', { type: 'SortOrder' })
    t.field('price', { type: 'SortOrder' })
    t.field('discount', { type: 'SortOrder' })
    t.field('quantity', { type: 'SortOrder' })
  },
})

export const OrderProductMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('orderId', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('price', { type: 'SortOrder' })
    t.field('img', { type: 'SortOrder' })
    t.field('discount', { type: 'SortOrder' })
    t.field('quantity', { type: 'SortOrder' })
  },
})

export const OrderProductMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('orderId', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('price', { type: 'SortOrder' })
    t.field('img', { type: 'SortOrder' })
    t.field('discount', { type: 'SortOrder' })
    t.field('quantity', { type: 'SortOrder' })
  },
})

export const OrderProductSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('orderId', { type: 'SortOrder' })
    t.field('price', { type: 'SortOrder' })
    t.field('discount', { type: 'SortOrder' })
    t.field('quantity', { type: 'SortOrder' })
  },
})

export const ProductRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductRelationFilter',
  definition(t) {
    t.field('is', { type: 'ProductWhereInput' })
    t.field('isNot', { type: 'ProductWhereInput' })
  },
})

export const ShoppingProductCartProductCompoundUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductCartProductCompoundUniqueInput',
  definition(t) {
    t.nonNull.field('productId', { type: 'Int' })
    t.nonNull.field('userId', { type: 'Int' })
  },
})

export const ShoppingProductCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('quantity', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('productId', { type: 'SortOrder' })
  },
})

export const ShoppingProductAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('quantity', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('productId', { type: 'SortOrder' })
  },
})

export const ShoppingProductMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('quantity', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('productId', { type: 'SortOrder' })
  },
})

export const ShoppingProductMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('quantity', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('productId', { type: 'SortOrder' })
  },
})

export const ShoppingProductSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('quantity', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('productId', { type: 'SortOrder' })
  },
})

export const ReviewCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('productId', { type: 'SortOrder' })
    t.field('comment', { type: 'SortOrder' })
    t.field('rating', { type: 'SortOrder' })
    t.field('date', { type: 'SortOrder' })
  },
})

export const ReviewAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('productId', { type: 'SortOrder' })
    t.field('rating', { type: 'SortOrder' })
  },
})

export const ReviewMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('productId', { type: 'SortOrder' })
    t.field('comment', { type: 'SortOrder' })
    t.field('rating', { type: 'SortOrder' })
    t.field('date', { type: 'SortOrder' })
  },
})

export const ReviewMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('productId', { type: 'SortOrder' })
    t.field('comment', { type: 'SortOrder' })
    t.field('rating', { type: 'SortOrder' })
    t.field('date', { type: 'SortOrder' })
  },
})

export const ReviewSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('userId', { type: 'SortOrder' })
    t.field('productId', { type: 'SortOrder' })
    t.field('rating', { type: 'SortOrder' })
  },
})

export const AddressCreateNestedOneWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressCreateNestedOneWithoutUserInput',
  definition(t) {
    t.field('create', { type: 'AddressCreateWithoutUserInput' })
    t.field('connectOrCreate', {
      type: 'AddressCreateOrConnectWithoutUserInput',
    })
    t.field('connect', { type: 'AddressWhereUniqueInput' })
  },
})

export const OrderCreateNestedManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCreateNestedManyWithoutUserInput',
  definition(t) {
    t.list.field('create', { type: 'OrderCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'OrderCreateOrConnectWithoutUserInput',
    })
    t.field('createMany', { type: 'OrderCreateManyUserInputEnvelope' })
    t.list.field('connect', { type: 'OrderWhereUniqueInput' })
  },
})

export const ReviewCreateNestedManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateNestedManyWithoutUserInput',
  definition(t) {
    t.list.field('create', { type: 'ReviewCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'ReviewCreateOrConnectWithoutUserInput',
    })
    t.field('createMany', { type: 'ReviewCreateManyUserInputEnvelope' })
    t.list.field('connect', { type: 'ReviewWhereUniqueInput' })
  },
})

export const ShoppingProductCreateNestedManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductCreateNestedManyWithoutUserInput',
  definition(t) {
    t.list.field('create', { type: 'ShoppingProductCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'ShoppingProductCreateOrConnectWithoutUserInput',
    })
    t.field('createMany', {
      type: 'ShoppingProductCreateManyUserInputEnvelope',
    })
    t.list.field('connect', { type: 'ShoppingProductWhereUniqueInput' })
  },
})

export const AddressUncheckedCreateNestedOneWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressUncheckedCreateNestedOneWithoutUserInput',
  definition(t) {
    t.field('create', { type: 'AddressCreateWithoutUserInput' })
    t.field('connectOrCreate', {
      type: 'AddressCreateOrConnectWithoutUserInput',
    })
    t.field('connect', { type: 'AddressWhereUniqueInput' })
  },
})

export const OrderUncheckedCreateNestedManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUncheckedCreateNestedManyWithoutUserInput',
  definition(t) {
    t.list.field('create', { type: 'OrderCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'OrderCreateOrConnectWithoutUserInput',
    })
    t.field('createMany', { type: 'OrderCreateManyUserInputEnvelope' })
    t.list.field('connect', { type: 'OrderWhereUniqueInput' })
  },
})

export const ReviewUncheckedCreateNestedManyWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUncheckedCreateNestedManyWithoutUserInput',
  definition(t) {
    t.list.field('create', { type: 'ReviewCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'ReviewCreateOrConnectWithoutUserInput',
    })
    t.field('createMany', { type: 'ReviewCreateManyUserInputEnvelope' })
    t.list.field('connect', { type: 'ReviewWhereUniqueInput' })
  },
})

export const ShoppingProductUncheckedCreateNestedManyWithoutUserInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ShoppingProductUncheckedCreateNestedManyWithoutUserInput',
    definition(t) {
      t.list.field('create', { type: 'ShoppingProductCreateWithoutUserInput' })
      t.list.field('connectOrCreate', {
        type: 'ShoppingProductCreateOrConnectWithoutUserInput',
      })
      t.field('createMany', {
        type: 'ShoppingProductCreateManyUserInputEnvelope',
      })
      t.list.field('connect', { type: 'ShoppingProductWhereUniqueInput' })
    },
  })

export const StringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  },
})

export const NullableStringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableStringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  },
})

export const NullableDateTimeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableDateTimeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'DateTime' })
  },
})

export const EnumRoleFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumRoleFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Role' })
  },
})

export const DateTimeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'DateTime' })
  },
})

export const AddressUpdateOneWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressUpdateOneWithoutUserNestedInput',
  definition(t) {
    t.field('create', { type: 'AddressCreateWithoutUserInput' })
    t.field('connectOrCreate', {
      type: 'AddressCreateOrConnectWithoutUserInput',
    })
    t.field('upsert', { type: 'AddressUpsertWithoutUserInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('connect', { type: 'AddressWhereUniqueInput' })
    t.field('update', { type: 'AddressUpdateWithoutUserInput' })
  },
})

export const OrderUpdateManyWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUpdateManyWithoutUserNestedInput',
  definition(t) {
    t.list.field('create', { type: 'OrderCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'OrderCreateOrConnectWithoutUserInput',
    })
    t.list.field('upsert', {
      type: 'OrderUpsertWithWhereUniqueWithoutUserInput',
    })
    t.field('createMany', { type: 'OrderCreateManyUserInputEnvelope' })
    t.list.field('set', { type: 'OrderWhereUniqueInput' })
    t.list.field('disconnect', { type: 'OrderWhereUniqueInput' })
    t.list.field('delete', { type: 'OrderWhereUniqueInput' })
    t.list.field('connect', { type: 'OrderWhereUniqueInput' })
    t.list.field('update', {
      type: 'OrderUpdateWithWhereUniqueWithoutUserInput',
    })
    t.list.field('updateMany', {
      type: 'OrderUpdateManyWithWhereWithoutUserInput',
    })
    t.list.field('deleteMany', { type: 'OrderScalarWhereInput' })
  },
})

export const ReviewUpdateManyWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpdateManyWithoutUserNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ReviewCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'ReviewCreateOrConnectWithoutUserInput',
    })
    t.list.field('upsert', {
      type: 'ReviewUpsertWithWhereUniqueWithoutUserInput',
    })
    t.field('createMany', { type: 'ReviewCreateManyUserInputEnvelope' })
    t.list.field('set', { type: 'ReviewWhereUniqueInput' })
    t.list.field('disconnect', { type: 'ReviewWhereUniqueInput' })
    t.list.field('delete', { type: 'ReviewWhereUniqueInput' })
    t.list.field('connect', { type: 'ReviewWhereUniqueInput' })
    t.list.field('update', {
      type: 'ReviewUpdateWithWhereUniqueWithoutUserInput',
    })
    t.list.field('updateMany', {
      type: 'ReviewUpdateManyWithWhereWithoutUserInput',
    })
    t.list.field('deleteMany', { type: 'ReviewScalarWhereInput' })
  },
})

export const ShoppingProductUpdateManyWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductUpdateManyWithoutUserNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ShoppingProductCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'ShoppingProductCreateOrConnectWithoutUserInput',
    })
    t.list.field('upsert', {
      type: 'ShoppingProductUpsertWithWhereUniqueWithoutUserInput',
    })
    t.field('createMany', {
      type: 'ShoppingProductCreateManyUserInputEnvelope',
    })
    t.list.field('set', { type: 'ShoppingProductWhereUniqueInput' })
    t.list.field('disconnect', { type: 'ShoppingProductWhereUniqueInput' })
    t.list.field('delete', { type: 'ShoppingProductWhereUniqueInput' })
    t.list.field('connect', { type: 'ShoppingProductWhereUniqueInput' })
    t.list.field('update', {
      type: 'ShoppingProductUpdateWithWhereUniqueWithoutUserInput',
    })
    t.list.field('updateMany', {
      type: 'ShoppingProductUpdateManyWithWhereWithoutUserInput',
    })
    t.list.field('deleteMany', { type: 'ShoppingProductScalarWhereInput' })
  },
})

export const IntFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Int' })
    t.field('increment', { type: 'Int' })
    t.field('decrement', { type: 'Int' })
    t.field('multiply', { type: 'Int' })
    t.field('divide', { type: 'Int' })
  },
})

export const AddressUncheckedUpdateOneWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressUncheckedUpdateOneWithoutUserNestedInput',
  definition(t) {
    t.field('create', { type: 'AddressCreateWithoutUserInput' })
    t.field('connectOrCreate', {
      type: 'AddressCreateOrConnectWithoutUserInput',
    })
    t.field('upsert', { type: 'AddressUpsertWithoutUserInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('connect', { type: 'AddressWhereUniqueInput' })
    t.field('update', { type: 'AddressUpdateWithoutUserInput' })
  },
})

export const OrderUncheckedUpdateManyWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUncheckedUpdateManyWithoutUserNestedInput',
  definition(t) {
    t.list.field('create', { type: 'OrderCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'OrderCreateOrConnectWithoutUserInput',
    })
    t.list.field('upsert', {
      type: 'OrderUpsertWithWhereUniqueWithoutUserInput',
    })
    t.field('createMany', { type: 'OrderCreateManyUserInputEnvelope' })
    t.list.field('set', { type: 'OrderWhereUniqueInput' })
    t.list.field('disconnect', { type: 'OrderWhereUniqueInput' })
    t.list.field('delete', { type: 'OrderWhereUniqueInput' })
    t.list.field('connect', { type: 'OrderWhereUniqueInput' })
    t.list.field('update', {
      type: 'OrderUpdateWithWhereUniqueWithoutUserInput',
    })
    t.list.field('updateMany', {
      type: 'OrderUpdateManyWithWhereWithoutUserInput',
    })
    t.list.field('deleteMany', { type: 'OrderScalarWhereInput' })
  },
})

export const ReviewUncheckedUpdateManyWithoutUserNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUncheckedUpdateManyWithoutUserNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ReviewCreateWithoutUserInput' })
    t.list.field('connectOrCreate', {
      type: 'ReviewCreateOrConnectWithoutUserInput',
    })
    t.list.field('upsert', {
      type: 'ReviewUpsertWithWhereUniqueWithoutUserInput',
    })
    t.field('createMany', { type: 'ReviewCreateManyUserInputEnvelope' })
    t.list.field('set', { type: 'ReviewWhereUniqueInput' })
    t.list.field('disconnect', { type: 'ReviewWhereUniqueInput' })
    t.list.field('delete', { type: 'ReviewWhereUniqueInput' })
    t.list.field('connect', { type: 'ReviewWhereUniqueInput' })
    t.list.field('update', {
      type: 'ReviewUpdateWithWhereUniqueWithoutUserInput',
    })
    t.list.field('updateMany', {
      type: 'ReviewUpdateManyWithWhereWithoutUserInput',
    })
    t.list.field('deleteMany', { type: 'ReviewScalarWhereInput' })
  },
})

export const ShoppingProductUncheckedUpdateManyWithoutUserNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ShoppingProductUncheckedUpdateManyWithoutUserNestedInput',
    definition(t) {
      t.list.field('create', { type: 'ShoppingProductCreateWithoutUserInput' })
      t.list.field('connectOrCreate', {
        type: 'ShoppingProductCreateOrConnectWithoutUserInput',
      })
      t.list.field('upsert', {
        type: 'ShoppingProductUpsertWithWhereUniqueWithoutUserInput',
      })
      t.field('createMany', {
        type: 'ShoppingProductCreateManyUserInputEnvelope',
      })
      t.list.field('set', { type: 'ShoppingProductWhereUniqueInput' })
      t.list.field('disconnect', { type: 'ShoppingProductWhereUniqueInput' })
      t.list.field('delete', { type: 'ShoppingProductWhereUniqueInput' })
      t.list.field('connect', { type: 'ShoppingProductWhereUniqueInput' })
      t.list.field('update', {
        type: 'ShoppingProductUpdateWithWhereUniqueWithoutUserInput',
      })
      t.list.field('updateMany', {
        type: 'ShoppingProductUpdateManyWithWhereWithoutUserInput',
      })
      t.list.field('deleteMany', { type: 'ShoppingProductScalarWhereInput' })
    },
  })

export const UserCreateNestedOneWithoutAddressInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutAddressInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutAddressInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutAddressInput',
    })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const UserUpdateOneRequiredWithoutAddressNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneRequiredWithoutAddressNestedInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutAddressInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutAddressInput',
    })
    t.field('upsert', { type: 'UserUpsertWithoutAddressInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUpdateWithoutAddressInput' })
  },
})

export const ReviewCreateNestedManyWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateNestedManyWithoutProductInput',
  definition(t) {
    t.list.field('create', { type: 'ReviewCreateWithoutProductInput' })
    t.list.field('connectOrCreate', {
      type: 'ReviewCreateOrConnectWithoutProductInput',
    })
    t.field('createMany', { type: 'ReviewCreateManyProductInputEnvelope' })
    t.list.field('connect', { type: 'ReviewWhereUniqueInput' })
  },
})

export const ShoppingProductCreateNestedManyWithoutProductInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ShoppingProductCreateNestedManyWithoutProductInput',
    definition(t) {
      t.list.field('create', {
        type: 'ShoppingProductCreateWithoutProductInput',
      })
      t.list.field('connectOrCreate', {
        type: 'ShoppingProductCreateOrConnectWithoutProductInput',
      })
      t.field('createMany', {
        type: 'ShoppingProductCreateManyProductInputEnvelope',
      })
      t.list.field('connect', { type: 'ShoppingProductWhereUniqueInput' })
    },
  })

export const ReviewUncheckedCreateNestedManyWithoutProductInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ReviewUncheckedCreateNestedManyWithoutProductInput',
    definition(t) {
      t.list.field('create', { type: 'ReviewCreateWithoutProductInput' })
      t.list.field('connectOrCreate', {
        type: 'ReviewCreateOrConnectWithoutProductInput',
      })
      t.field('createMany', { type: 'ReviewCreateManyProductInputEnvelope' })
      t.list.field('connect', { type: 'ReviewWhereUniqueInput' })
    },
  })

export const ShoppingProductUncheckedCreateNestedManyWithoutProductInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ShoppingProductUncheckedCreateNestedManyWithoutProductInput',
    definition(t) {
      t.list.field('create', {
        type: 'ShoppingProductCreateWithoutProductInput',
      })
      t.list.field('connectOrCreate', {
        type: 'ShoppingProductCreateOrConnectWithoutProductInput',
      })
      t.field('createMany', {
        type: 'ShoppingProductCreateManyProductInputEnvelope',
      })
      t.list.field('connect', { type: 'ShoppingProductWhereUniqueInput' })
    },
  })

export const FloatFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FloatFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Float' })
    t.field('increment', { type: 'Float' })
    t.field('decrement', { type: 'Float' })
    t.field('multiply', { type: 'Float' })
    t.field('divide', { type: 'Float' })
  },
})

export const ReviewUpdateManyWithoutProductNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpdateManyWithoutProductNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ReviewCreateWithoutProductInput' })
    t.list.field('connectOrCreate', {
      type: 'ReviewCreateOrConnectWithoutProductInput',
    })
    t.list.field('upsert', {
      type: 'ReviewUpsertWithWhereUniqueWithoutProductInput',
    })
    t.field('createMany', { type: 'ReviewCreateManyProductInputEnvelope' })
    t.list.field('set', { type: 'ReviewWhereUniqueInput' })
    t.list.field('disconnect', { type: 'ReviewWhereUniqueInput' })
    t.list.field('delete', { type: 'ReviewWhereUniqueInput' })
    t.list.field('connect', { type: 'ReviewWhereUniqueInput' })
    t.list.field('update', {
      type: 'ReviewUpdateWithWhereUniqueWithoutProductInput',
    })
    t.list.field('updateMany', {
      type: 'ReviewUpdateManyWithWhereWithoutProductInput',
    })
    t.list.field('deleteMany', { type: 'ReviewScalarWhereInput' })
  },
})

export const ShoppingProductUpdateManyWithoutProductNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ShoppingProductUpdateManyWithoutProductNestedInput',
    definition(t) {
      t.list.field('create', {
        type: 'ShoppingProductCreateWithoutProductInput',
      })
      t.list.field('connectOrCreate', {
        type: 'ShoppingProductCreateOrConnectWithoutProductInput',
      })
      t.list.field('upsert', {
        type: 'ShoppingProductUpsertWithWhereUniqueWithoutProductInput',
      })
      t.field('createMany', {
        type: 'ShoppingProductCreateManyProductInputEnvelope',
      })
      t.list.field('set', { type: 'ShoppingProductWhereUniqueInput' })
      t.list.field('disconnect', { type: 'ShoppingProductWhereUniqueInput' })
      t.list.field('delete', { type: 'ShoppingProductWhereUniqueInput' })
      t.list.field('connect', { type: 'ShoppingProductWhereUniqueInput' })
      t.list.field('update', {
        type: 'ShoppingProductUpdateWithWhereUniqueWithoutProductInput',
      })
      t.list.field('updateMany', {
        type: 'ShoppingProductUpdateManyWithWhereWithoutProductInput',
      })
      t.list.field('deleteMany', { type: 'ShoppingProductScalarWhereInput' })
    },
  })

export const ReviewUncheckedUpdateManyWithoutProductNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ReviewUncheckedUpdateManyWithoutProductNestedInput',
    definition(t) {
      t.list.field('create', { type: 'ReviewCreateWithoutProductInput' })
      t.list.field('connectOrCreate', {
        type: 'ReviewCreateOrConnectWithoutProductInput',
      })
      t.list.field('upsert', {
        type: 'ReviewUpsertWithWhereUniqueWithoutProductInput',
      })
      t.field('createMany', { type: 'ReviewCreateManyProductInputEnvelope' })
      t.list.field('set', { type: 'ReviewWhereUniqueInput' })
      t.list.field('disconnect', { type: 'ReviewWhereUniqueInput' })
      t.list.field('delete', { type: 'ReviewWhereUniqueInput' })
      t.list.field('connect', { type: 'ReviewWhereUniqueInput' })
      t.list.field('update', {
        type: 'ReviewUpdateWithWhereUniqueWithoutProductInput',
      })
      t.list.field('updateMany', {
        type: 'ReviewUpdateManyWithWhereWithoutProductInput',
      })
      t.list.field('deleteMany', { type: 'ReviewScalarWhereInput' })
    },
  })

export const ShoppingProductUncheckedUpdateManyWithoutProductNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ShoppingProductUncheckedUpdateManyWithoutProductNestedInput',
    definition(t) {
      t.list.field('create', {
        type: 'ShoppingProductCreateWithoutProductInput',
      })
      t.list.field('connectOrCreate', {
        type: 'ShoppingProductCreateOrConnectWithoutProductInput',
      })
      t.list.field('upsert', {
        type: 'ShoppingProductUpsertWithWhereUniqueWithoutProductInput',
      })
      t.field('createMany', {
        type: 'ShoppingProductCreateManyProductInputEnvelope',
      })
      t.list.field('set', { type: 'ShoppingProductWhereUniqueInput' })
      t.list.field('disconnect', { type: 'ShoppingProductWhereUniqueInput' })
      t.list.field('delete', { type: 'ShoppingProductWhereUniqueInput' })
      t.list.field('connect', { type: 'ShoppingProductWhereUniqueInput' })
      t.list.field('update', {
        type: 'ShoppingProductUpdateWithWhereUniqueWithoutProductInput',
      })
      t.list.field('updateMany', {
        type: 'ShoppingProductUpdateManyWithWhereWithoutProductInput',
      })
      t.list.field('deleteMany', { type: 'ShoppingProductScalarWhereInput' })
    },
  })

export const UserCreateNestedOneWithoutOrdersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutOrdersInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutOrdersInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutOrdersInput',
    })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const OrderAddressCreateNestedOneWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressCreateNestedOneWithoutOrderInput',
  definition(t) {
    t.field('create', { type: 'OrderAddressCreateWithoutOrderInput' })
    t.field('connectOrCreate', {
      type: 'OrderAddressCreateOrConnectWithoutOrderInput',
    })
    t.field('connect', { type: 'OrderAddressWhereUniqueInput' })
  },
})

export const OrderProductCreateNestedManyWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductCreateNestedManyWithoutOrderInput',
  definition(t) {
    t.list.field('create', { type: 'OrderProductCreateWithoutOrderInput' })
    t.list.field('connectOrCreate', {
      type: 'OrderProductCreateOrConnectWithoutOrderInput',
    })
    t.field('createMany', { type: 'OrderProductCreateManyOrderInputEnvelope' })
    t.list.field('connect', { type: 'OrderProductWhereUniqueInput' })
  },
})

export const OrderAddressUncheckedCreateNestedOneWithoutOrderInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'OrderAddressUncheckedCreateNestedOneWithoutOrderInput',
    definition(t) {
      t.field('create', { type: 'OrderAddressCreateWithoutOrderInput' })
      t.field('connectOrCreate', {
        type: 'OrderAddressCreateOrConnectWithoutOrderInput',
      })
      t.field('connect', { type: 'OrderAddressWhereUniqueInput' })
    },
  })

export const OrderProductUncheckedCreateNestedManyWithoutOrderInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'OrderProductUncheckedCreateNestedManyWithoutOrderInput',
    definition(t) {
      t.list.field('create', { type: 'OrderProductCreateWithoutOrderInput' })
      t.list.field('connectOrCreate', {
        type: 'OrderProductCreateOrConnectWithoutOrderInput',
      })
      t.field('createMany', {
        type: 'OrderProductCreateManyOrderInputEnvelope',
      })
      t.list.field('connect', { type: 'OrderProductWhereUniqueInput' })
    },
  })

export const EnumOrderTypeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumOrderTypeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'OrderType' })
  },
})

export const UserUpdateOneRequiredWithoutOrdersNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneRequiredWithoutOrdersNestedInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutOrdersInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutOrdersInput',
    })
    t.field('upsert', { type: 'UserUpsertWithoutOrdersInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUpdateWithoutOrdersInput' })
  },
})

export const OrderAddressUpdateOneWithoutOrderNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressUpdateOneWithoutOrderNestedInput',
  definition(t) {
    t.field('create', { type: 'OrderAddressCreateWithoutOrderInput' })
    t.field('connectOrCreate', {
      type: 'OrderAddressCreateOrConnectWithoutOrderInput',
    })
    t.field('upsert', { type: 'OrderAddressUpsertWithoutOrderInput' })
    t.field('disconnect', { type: 'Boolean' })
    t.field('delete', { type: 'Boolean' })
    t.field('connect', { type: 'OrderAddressWhereUniqueInput' })
    t.field('update', { type: 'OrderAddressUpdateWithoutOrderInput' })
  },
})

export const OrderProductUpdateManyWithoutOrderNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductUpdateManyWithoutOrderNestedInput',
  definition(t) {
    t.list.field('create', { type: 'OrderProductCreateWithoutOrderInput' })
    t.list.field('connectOrCreate', {
      type: 'OrderProductCreateOrConnectWithoutOrderInput',
    })
    t.list.field('upsert', {
      type: 'OrderProductUpsertWithWhereUniqueWithoutOrderInput',
    })
    t.field('createMany', { type: 'OrderProductCreateManyOrderInputEnvelope' })
    t.list.field('set', { type: 'OrderProductWhereUniqueInput' })
    t.list.field('disconnect', { type: 'OrderProductWhereUniqueInput' })
    t.list.field('delete', { type: 'OrderProductWhereUniqueInput' })
    t.list.field('connect', { type: 'OrderProductWhereUniqueInput' })
    t.list.field('update', {
      type: 'OrderProductUpdateWithWhereUniqueWithoutOrderInput',
    })
    t.list.field('updateMany', {
      type: 'OrderProductUpdateManyWithWhereWithoutOrderInput',
    })
    t.list.field('deleteMany', { type: 'OrderProductScalarWhereInput' })
  },
})

export const OrderAddressUncheckedUpdateOneWithoutOrderNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'OrderAddressUncheckedUpdateOneWithoutOrderNestedInput',
    definition(t) {
      t.field('create', { type: 'OrderAddressCreateWithoutOrderInput' })
      t.field('connectOrCreate', {
        type: 'OrderAddressCreateOrConnectWithoutOrderInput',
      })
      t.field('upsert', { type: 'OrderAddressUpsertWithoutOrderInput' })
      t.field('disconnect', { type: 'Boolean' })
      t.field('delete', { type: 'Boolean' })
      t.field('connect', { type: 'OrderAddressWhereUniqueInput' })
      t.field('update', { type: 'OrderAddressUpdateWithoutOrderInput' })
    },
  })

export const OrderProductUncheckedUpdateManyWithoutOrderNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'OrderProductUncheckedUpdateManyWithoutOrderNestedInput',
    definition(t) {
      t.list.field('create', { type: 'OrderProductCreateWithoutOrderInput' })
      t.list.field('connectOrCreate', {
        type: 'OrderProductCreateOrConnectWithoutOrderInput',
      })
      t.list.field('upsert', {
        type: 'OrderProductUpsertWithWhereUniqueWithoutOrderInput',
      })
      t.field('createMany', {
        type: 'OrderProductCreateManyOrderInputEnvelope',
      })
      t.list.field('set', { type: 'OrderProductWhereUniqueInput' })
      t.list.field('disconnect', { type: 'OrderProductWhereUniqueInput' })
      t.list.field('delete', { type: 'OrderProductWhereUniqueInput' })
      t.list.field('connect', { type: 'OrderProductWhereUniqueInput' })
      t.list.field('update', {
        type: 'OrderProductUpdateWithWhereUniqueWithoutOrderInput',
      })
      t.list.field('updateMany', {
        type: 'OrderProductUpdateManyWithWhereWithoutOrderInput',
      })
      t.list.field('deleteMany', { type: 'OrderProductScalarWhereInput' })
    },
  })

export const OrderCreateNestedOneWithoutAddressInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCreateNestedOneWithoutAddressInput',
  definition(t) {
    t.field('create', { type: 'OrderCreateWithoutAddressInput' })
    t.field('connectOrCreate', {
      type: 'OrderCreateOrConnectWithoutAddressInput',
    })
    t.field('connect', { type: 'OrderWhereUniqueInput' })
  },
})

export const OrderUpdateOneRequiredWithoutAddressNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUpdateOneRequiredWithoutAddressNestedInput',
  definition(t) {
    t.field('create', { type: 'OrderCreateWithoutAddressInput' })
    t.field('connectOrCreate', {
      type: 'OrderCreateOrConnectWithoutAddressInput',
    })
    t.field('upsert', { type: 'OrderUpsertWithoutAddressInput' })
    t.field('connect', { type: 'OrderWhereUniqueInput' })
    t.field('update', { type: 'OrderUpdateWithoutAddressInput' })
  },
})

export const OrderCreateNestedOneWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCreateNestedOneWithoutProductsInput',
  definition(t) {
    t.field('create', { type: 'OrderCreateWithoutProductsInput' })
    t.field('connectOrCreate', {
      type: 'OrderCreateOrConnectWithoutProductsInput',
    })
    t.field('connect', { type: 'OrderWhereUniqueInput' })
  },
})

export const OrderUpdateOneRequiredWithoutProductsNestedInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'OrderUpdateOneRequiredWithoutProductsNestedInput',
    definition(t) {
      t.field('create', { type: 'OrderCreateWithoutProductsInput' })
      t.field('connectOrCreate', {
        type: 'OrderCreateOrConnectWithoutProductsInput',
      })
      t.field('upsert', { type: 'OrderUpsertWithoutProductsInput' })
      t.field('connect', { type: 'OrderWhereUniqueInput' })
      t.field('update', { type: 'OrderUpdateWithoutProductsInput' })
    },
  },
)

export const ProductCreateNestedOneWithoutShoppingProductInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProductCreateNestedOneWithoutShoppingProductInput',
    definition(t) {
      t.field('create', { type: 'ProductCreateWithoutShoppingProductInput' })
      t.field('connectOrCreate', {
        type: 'ProductCreateOrConnectWithoutShoppingProductInput',
      })
      t.field('connect', { type: 'ProductWhereUniqueInput' })
    },
  })

export const UserCreateNestedOneWithoutCartInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutCartInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutCartInput' })
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutCartInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const ProductUpdateOneRequiredWithoutShoppingProductNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProductUpdateOneRequiredWithoutShoppingProductNestedInput',
    definition(t) {
      t.field('create', { type: 'ProductCreateWithoutShoppingProductInput' })
      t.field('connectOrCreate', {
        type: 'ProductCreateOrConnectWithoutShoppingProductInput',
      })
      t.field('upsert', { type: 'ProductUpsertWithoutShoppingProductInput' })
      t.field('connect', { type: 'ProductWhereUniqueInput' })
      t.field('update', { type: 'ProductUpdateWithoutShoppingProductInput' })
    },
  })

export const UserUpdateOneRequiredWithoutCartNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneRequiredWithoutCartNestedInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutCartInput' })
    t.field('connectOrCreate', { type: 'UserCreateOrConnectWithoutCartInput' })
    t.field('upsert', { type: 'UserUpsertWithoutCartInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUpdateWithoutCartInput' })
  },
})

export const ProductCreateNestedOneWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateNestedOneWithoutReviewsInput',
  definition(t) {
    t.field('create', { type: 'ProductCreateWithoutReviewsInput' })
    t.field('connectOrCreate', {
      type: 'ProductCreateOrConnectWithoutReviewsInput',
    })
    t.field('connect', { type: 'ProductWhereUniqueInput' })
  },
})

export const UserCreateNestedOneWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateNestedOneWithoutReviewsInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutReviewsInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutReviewsInput',
    })
    t.field('connect', { type: 'UserWhereUniqueInput' })
  },
})

export const ProductUpdateOneRequiredWithoutReviewsNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProductUpdateOneRequiredWithoutReviewsNestedInput',
    definition(t) {
      t.field('create', { type: 'ProductCreateWithoutReviewsInput' })
      t.field('connectOrCreate', {
        type: 'ProductCreateOrConnectWithoutReviewsInput',
      })
      t.field('upsert', { type: 'ProductUpsertWithoutReviewsInput' })
      t.field('connect', { type: 'ProductWhereUniqueInput' })
      t.field('update', { type: 'ProductUpdateWithoutReviewsInput' })
    },
  })

export const UserUpdateOneRequiredWithoutReviewsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateOneRequiredWithoutReviewsNestedInput',
  definition(t) {
    t.field('create', { type: 'UserCreateWithoutReviewsInput' })
    t.field('connectOrCreate', {
      type: 'UserCreateOrConnectWithoutReviewsInput',
    })
    t.field('upsert', { type: 'UserUpsertWithoutReviewsInput' })
    t.field('connect', { type: 'UserWhereUniqueInput' })
    t.field('update', { type: 'UserUpdateWithoutReviewsInput' })
  },
})

export const NestedIntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntFilter' })
  },
})

export const NestedStringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringFilter' })
  },
})

export const NestedStringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringNullableFilter' })
  },
})

export const NestedDateTimeNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeNullableFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeNullableFilter' })
  },
})

export const NestedEnumRoleFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumRoleFilter',
  definition(t) {
    t.field('equals', { type: 'Role' })
    t.list.field('in', { type: 'Role' })
    t.list.field('notIn', { type: 'Role' })
    t.field('not', { type: 'NestedEnumRoleFilter' })
  },
})

export const NestedDateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeFilter' })
  },
})

export const NestedIntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedIntFilter' })
    t.field('_max', { type: 'NestedIntFilter' })
  },
})

export const NestedFloatFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatFilter' })
  },
})

export const NestedStringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  },
})

export const NestedStringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  },
})

export const NestedIntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableFilter' })
  },
})

export const NestedDateTimeNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedDateTimeNullableFilter' })
    t.field('_max', { type: 'NestedDateTimeNullableFilter' })
  },
})

export const NestedEnumRoleWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumRoleWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Role' })
    t.list.field('in', { type: 'Role' })
    t.list.field('notIn', { type: 'Role' })
    t.field('not', { type: 'NestedEnumRoleWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedEnumRoleFilter' })
    t.field('_max', { type: 'NestedEnumRoleFilter' })
  },
})

export const NestedDateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedDateTimeFilter' })
    t.field('_max', { type: 'NestedDateTimeFilter' })
  },
})

export const NestedFloatWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedFloatFilter' })
    t.field('_min', { type: 'NestedFloatFilter' })
    t.field('_max', { type: 'NestedFloatFilter' })
  },
})

export const NestedEnumOrderTypeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumOrderTypeFilter',
  definition(t) {
    t.field('equals', { type: 'OrderType' })
    t.list.field('in', { type: 'OrderType' })
    t.list.field('notIn', { type: 'OrderType' })
    t.field('not', { type: 'NestedEnumOrderTypeFilter' })
  },
})

export const NestedEnumOrderTypeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumOrderTypeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'OrderType' })
    t.list.field('in', { type: 'OrderType' })
    t.list.field('notIn', { type: 'OrderType' })
    t.field('not', { type: 'NestedEnumOrderTypeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedEnumOrderTypeFilter' })
    t.field('_max', { type: 'NestedEnumOrderTypeFilter' })
  },
})

export const AddressCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressCreateWithoutUserInput',
  definition(t) {
    t.nonNull.field('street', { type: 'String' })
    t.nonNull.field('city', { type: 'String' })
    t.nonNull.field('zipCode', { type: 'String' })
    t.nonNull.field('country', { type: 'String' })
    t.nonNull.field('phoneNumber', { type: 'String' })
  },
})

export const AddressUncheckedCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressUncheckedCreateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('street', { type: 'String' })
    t.nonNull.field('city', { type: 'String' })
    t.nonNull.field('zipCode', { type: 'String' })
    t.nonNull.field('country', { type: 'String' })
    t.nonNull.field('phoneNumber', { type: 'String' })
  },
})

export const AddressCreateOrConnectWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressCreateOrConnectWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'AddressWhereUniqueInput' })
    t.nonNull.field('create', { type: 'AddressCreateWithoutUserInput' })
  },
})

export const OrderCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCreateWithoutUserInput',
  definition(t) {
    t.field('OrderStatus', { type: 'String' })
    t.field('date', { type: 'DateTime' })
    t.field('subtotal', { type: 'Int' })
    t.nonNull.field('type', { type: 'OrderType' })
    t.field('address', { type: 'OrderAddressCreateNestedOneWithoutOrderInput' })
    t.field('products', {
      type: 'OrderProductCreateNestedManyWithoutOrderInput',
    })
  },
})

export const OrderUncheckedCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUncheckedCreateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('OrderStatus', { type: 'String' })
    t.field('date', { type: 'DateTime' })
    t.field('subtotal', { type: 'Int' })
    t.nonNull.field('type', { type: 'OrderType' })
    t.field('address', {
      type: 'OrderAddressUncheckedCreateNestedOneWithoutOrderInput',
    })
    t.field('products', {
      type: 'OrderProductUncheckedCreateNestedManyWithoutOrderInput',
    })
  },
})

export const OrderCreateOrConnectWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCreateOrConnectWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'OrderWhereUniqueInput' })
    t.nonNull.field('create', { type: 'OrderCreateWithoutUserInput' })
  },
})

export const OrderCreateManyUserInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCreateManyUserInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'OrderCreateManyUserInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const ReviewCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateWithoutUserInput',
  definition(t) {
    t.field('comment', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.field('date', { type: 'DateTime' })
    t.nonNull.field('Product', {
      type: 'ProductCreateNestedOneWithoutReviewsInput',
    })
  },
})

export const ReviewUncheckedCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUncheckedCreateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('productId', { type: 'Int' })
    t.field('comment', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.field('date', { type: 'DateTime' })
  },
})

export const ReviewCreateOrConnectWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateOrConnectWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ReviewWhereUniqueInput' })
    t.nonNull.field('create', { type: 'ReviewCreateWithoutUserInput' })
  },
})

export const ReviewCreateManyUserInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateManyUserInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'ReviewCreateManyUserInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const ShoppingProductCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductCreateWithoutUserInput',
  definition(t) {
    t.nonNull.field('quantity', { type: 'Int' })
    t.nonNull.field('Product', {
      type: 'ProductCreateNestedOneWithoutShoppingProductInput',
    })
  },
})

export const ShoppingProductUncheckedCreateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductUncheckedCreateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('quantity', { type: 'Int' })
    t.nonNull.field('productId', { type: 'Int' })
  },
})

export const ShoppingProductCreateOrConnectWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductCreateOrConnectWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ShoppingProductWhereUniqueInput' })
    t.nonNull.field('create', { type: 'ShoppingProductCreateWithoutUserInput' })
  },
})

export const ShoppingProductCreateManyUserInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductCreateManyUserInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'ShoppingProductCreateManyUserInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const AddressUpsertWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressUpsertWithoutUserInput',
  definition(t) {
    t.nonNull.field('update', { type: 'AddressUpdateWithoutUserInput' })
    t.nonNull.field('create', { type: 'AddressCreateWithoutUserInput' })
  },
})

export const AddressUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressUpdateWithoutUserInput',
  definition(t) {
    t.field('street', { type: 'StringFieldUpdateOperationsInput' })
    t.field('city', { type: 'StringFieldUpdateOperationsInput' })
    t.field('zipCode', { type: 'StringFieldUpdateOperationsInput' })
    t.field('country', { type: 'StringFieldUpdateOperationsInput' })
    t.field('phoneNumber', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const AddressUncheckedUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'AddressUncheckedUpdateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('street', { type: 'StringFieldUpdateOperationsInput' })
    t.field('city', { type: 'StringFieldUpdateOperationsInput' })
    t.field('zipCode', { type: 'StringFieldUpdateOperationsInput' })
    t.field('country', { type: 'StringFieldUpdateOperationsInput' })
    t.field('phoneNumber', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const OrderUpsertWithWhereUniqueWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUpsertWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'OrderWhereUniqueInput' })
    t.nonNull.field('update', { type: 'OrderUpdateWithoutUserInput' })
    t.nonNull.field('create', { type: 'OrderCreateWithoutUserInput' })
  },
})

export const OrderUpdateWithWhereUniqueWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUpdateWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'OrderWhereUniqueInput' })
    t.nonNull.field('data', { type: 'OrderUpdateWithoutUserInput' })
  },
})

export const OrderUpdateManyWithWhereWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUpdateManyWithWhereWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'OrderScalarWhereInput' })
    t.nonNull.field('data', { type: 'OrderUpdateManyMutationInput' })
  },
})

export const OrderScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'OrderScalarWhereInput' })
    t.list.field('OR', { type: 'OrderScalarWhereInput' })
    t.list.field('NOT', { type: 'OrderScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('userId', { type: 'IntFilter' })
    t.field('OrderStatus', { type: 'StringFilter' })
    t.field('date', { type: 'DateTimeFilter' })
    t.field('subtotal', { type: 'IntFilter' })
    t.field('type', { type: 'EnumOrderTypeFilter' })
  },
})

export const ReviewUpsertWithWhereUniqueWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpsertWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ReviewWhereUniqueInput' })
    t.nonNull.field('update', { type: 'ReviewUpdateWithoutUserInput' })
    t.nonNull.field('create', { type: 'ReviewCreateWithoutUserInput' })
  },
})

export const ReviewUpdateWithWhereUniqueWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpdateWithWhereUniqueWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ReviewWhereUniqueInput' })
    t.nonNull.field('data', { type: 'ReviewUpdateWithoutUserInput' })
  },
})

export const ReviewUpdateManyWithWhereWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpdateManyWithWhereWithoutUserInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ReviewScalarWhereInput' })
    t.nonNull.field('data', { type: 'ReviewUpdateManyMutationInput' })
  },
})

export const ReviewScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ReviewScalarWhereInput' })
    t.list.field('OR', { type: 'ReviewScalarWhereInput' })
    t.list.field('NOT', { type: 'ReviewScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('userId', { type: 'IntFilter' })
    t.field('productId', { type: 'IntFilter' })
    t.field('comment', { type: 'StringFilter' })
    t.field('rating', { type: 'IntFilter' })
    t.field('date', { type: 'DateTimeFilter' })
  },
})

export const ShoppingProductUpsertWithWhereUniqueWithoutUserInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ShoppingProductUpsertWithWhereUniqueWithoutUserInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ShoppingProductWhereUniqueInput' })
      t.nonNull.field('update', {
        type: 'ShoppingProductUpdateWithoutUserInput',
      })
      t.nonNull.field('create', {
        type: 'ShoppingProductCreateWithoutUserInput',
      })
    },
  })

export const ShoppingProductUpdateWithWhereUniqueWithoutUserInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ShoppingProductUpdateWithWhereUniqueWithoutUserInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ShoppingProductWhereUniqueInput' })
      t.nonNull.field('data', { type: 'ShoppingProductUpdateWithoutUserInput' })
    },
  })

export const ShoppingProductUpdateManyWithWhereWithoutUserInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ShoppingProductUpdateManyWithWhereWithoutUserInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ShoppingProductScalarWhereInput' })
      t.nonNull.field('data', {
        type: 'ShoppingProductUpdateManyMutationInput',
      })
    },
  })

export const ShoppingProductScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ShoppingProductScalarWhereInput' })
    t.list.field('OR', { type: 'ShoppingProductScalarWhereInput' })
    t.list.field('NOT', { type: 'ShoppingProductScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('quantity', { type: 'IntFilter' })
    t.field('userId', { type: 'IntFilter' })
    t.field('productId', { type: 'IntFilter' })
  },
})

export const UserCreateWithoutAddressInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutAddressInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('firstName', { type: 'String' })
    t.nonNull.field('lastName', { type: 'String' })
    t.field('gender', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('role', { type: 'Role' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('orders', { type: 'OrderCreateNestedManyWithoutUserInput' })
    t.field('reviews', { type: 'ReviewCreateNestedManyWithoutUserInput' })
    t.field('cart', { type: 'ShoppingProductCreateNestedManyWithoutUserInput' })
  },
})

export const UserUncheckedCreateWithoutAddressInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutAddressInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('firstName', { type: 'String' })
    t.nonNull.field('lastName', { type: 'String' })
    t.field('gender', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('role', { type: 'Role' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('orders', {
      type: 'OrderUncheckedCreateNestedManyWithoutUserInput',
    })
    t.field('reviews', {
      type: 'ReviewUncheckedCreateNestedManyWithoutUserInput',
    })
    t.field('cart', {
      type: 'ShoppingProductUncheckedCreateNestedManyWithoutUserInput',
    })
  },
})

export const UserCreateOrConnectWithoutAddressInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutAddressInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutAddressInput' })
  },
})

export const UserUpsertWithoutAddressInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutAddressInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUpdateWithoutAddressInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutAddressInput' })
  },
})

export const UserUpdateWithoutAddressInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutAddressInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('firstName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('lastName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('gender', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('birthday', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutUserNestedInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutUserNestedInput' })
    t.field('cart', { type: 'ShoppingProductUpdateManyWithoutUserNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutAddressInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutAddressInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('firstName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('lastName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('gender', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('birthday', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('orders', {
      type: 'OrderUncheckedUpdateManyWithoutUserNestedInput',
    })
    t.field('reviews', {
      type: 'ReviewUncheckedUpdateManyWithoutUserNestedInput',
    })
    t.field('cart', {
      type: 'ShoppingProductUncheckedUpdateManyWithoutUserNestedInput',
    })
  },
})

export const ReviewCreateWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateWithoutProductInput',
  definition(t) {
    t.field('comment', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.field('date', { type: 'DateTime' })
    t.nonNull.field('User', { type: 'UserCreateNestedOneWithoutReviewsInput' })
  },
})

export const ReviewUncheckedCreateWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUncheckedCreateWithoutProductInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('userId', { type: 'Int' })
    t.field('comment', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.field('date', { type: 'DateTime' })
  },
})

export const ReviewCreateOrConnectWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateOrConnectWithoutProductInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ReviewWhereUniqueInput' })
    t.nonNull.field('create', { type: 'ReviewCreateWithoutProductInput' })
  },
})

export const ReviewCreateManyProductInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateManyProductInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'ReviewCreateManyProductInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const ShoppingProductCreateWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductCreateWithoutProductInput',
  definition(t) {
    t.nonNull.field('quantity', { type: 'Int' })
    t.nonNull.field('User', { type: 'UserCreateNestedOneWithoutCartInput' })
  },
})

export const ShoppingProductUncheckedCreateWithoutProductInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ShoppingProductUncheckedCreateWithoutProductInput',
    definition(t) {
      t.field('id', { type: 'Int' })
      t.nonNull.field('quantity', { type: 'Int' })
      t.nonNull.field('userId', { type: 'Int' })
    },
  })

export const ShoppingProductCreateOrConnectWithoutProductInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ShoppingProductCreateOrConnectWithoutProductInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ShoppingProductWhereUniqueInput' })
      t.nonNull.field('create', {
        type: 'ShoppingProductCreateWithoutProductInput',
      })
    },
  })

export const ShoppingProductCreateManyProductInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductCreateManyProductInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'ShoppingProductCreateManyProductInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const ReviewUpsertWithWhereUniqueWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpsertWithWhereUniqueWithoutProductInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ReviewWhereUniqueInput' })
    t.nonNull.field('update', { type: 'ReviewUpdateWithoutProductInput' })
    t.nonNull.field('create', { type: 'ReviewCreateWithoutProductInput' })
  },
})

export const ReviewUpdateWithWhereUniqueWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpdateWithWhereUniqueWithoutProductInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ReviewWhereUniqueInput' })
    t.nonNull.field('data', { type: 'ReviewUpdateWithoutProductInput' })
  },
})

export const ReviewUpdateManyWithWhereWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpdateManyWithWhereWithoutProductInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ReviewScalarWhereInput' })
    t.nonNull.field('data', { type: 'ReviewUpdateManyMutationInput' })
  },
})

export const ShoppingProductUpsertWithWhereUniqueWithoutProductInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ShoppingProductUpsertWithWhereUniqueWithoutProductInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ShoppingProductWhereUniqueInput' })
      t.nonNull.field('update', {
        type: 'ShoppingProductUpdateWithoutProductInput',
      })
      t.nonNull.field('create', {
        type: 'ShoppingProductCreateWithoutProductInput',
      })
    },
  })

export const ShoppingProductUpdateWithWhereUniqueWithoutProductInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ShoppingProductUpdateWithWhereUniqueWithoutProductInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ShoppingProductWhereUniqueInput' })
      t.nonNull.field('data', {
        type: 'ShoppingProductUpdateWithoutProductInput',
      })
    },
  })

export const ShoppingProductUpdateManyWithWhereWithoutProductInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ShoppingProductUpdateManyWithWhereWithoutProductInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ShoppingProductScalarWhereInput' })
      t.nonNull.field('data', {
        type: 'ShoppingProductUpdateManyMutationInput',
      })
    },
  })

export const UserCreateWithoutOrdersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutOrdersInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('firstName', { type: 'String' })
    t.nonNull.field('lastName', { type: 'String' })
    t.field('gender', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('role', { type: 'Role' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressCreateNestedOneWithoutUserInput' })
    t.field('reviews', { type: 'ReviewCreateNestedManyWithoutUserInput' })
    t.field('cart', { type: 'ShoppingProductCreateNestedManyWithoutUserInput' })
  },
})

export const UserUncheckedCreateWithoutOrdersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutOrdersInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('firstName', { type: 'String' })
    t.nonNull.field('lastName', { type: 'String' })
    t.field('gender', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('role', { type: 'Role' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('address', {
      type: 'AddressUncheckedCreateNestedOneWithoutUserInput',
    })
    t.field('reviews', {
      type: 'ReviewUncheckedCreateNestedManyWithoutUserInput',
    })
    t.field('cart', {
      type: 'ShoppingProductUncheckedCreateNestedManyWithoutUserInput',
    })
  },
})

export const UserCreateOrConnectWithoutOrdersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutOrdersInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutOrdersInput' })
  },
})

export const OrderAddressCreateWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressCreateWithoutOrderInput',
  definition(t) {
    t.nonNull.field('fullName', { type: 'String' })
    t.nonNull.field('street', { type: 'String' })
    t.nonNull.field('city', { type: 'String' })
    t.nonNull.field('zipCode', { type: 'String' })
    t.nonNull.field('country', { type: 'String' })
    t.nonNull.field('phoneNumber', { type: 'String' })
  },
})

export const OrderAddressUncheckedCreateWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressUncheckedCreateWithoutOrderInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('fullName', { type: 'String' })
    t.nonNull.field('street', { type: 'String' })
    t.nonNull.field('city', { type: 'String' })
    t.nonNull.field('zipCode', { type: 'String' })
    t.nonNull.field('country', { type: 'String' })
    t.nonNull.field('phoneNumber', { type: 'String' })
  },
})

export const OrderAddressCreateOrConnectWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressCreateOrConnectWithoutOrderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'OrderAddressWhereUniqueInput' })
    t.nonNull.field('create', { type: 'OrderAddressCreateWithoutOrderInput' })
  },
})

export const OrderProductCreateWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductCreateWithoutOrderInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('price', { type: 'Int' })
    t.nonNull.field('img', { type: 'String' })
    t.field('discount', { type: 'Float' })
    t.nonNull.field('quantity', { type: 'Int' })
  },
})

export const OrderProductUncheckedCreateWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductUncheckedCreateWithoutOrderInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('price', { type: 'Int' })
    t.nonNull.field('img', { type: 'String' })
    t.field('discount', { type: 'Float' })
    t.nonNull.field('quantity', { type: 'Int' })
  },
})

export const OrderProductCreateOrConnectWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductCreateOrConnectWithoutOrderInput',
  definition(t) {
    t.nonNull.field('where', { type: 'OrderProductWhereUniqueInput' })
    t.nonNull.field('create', { type: 'OrderProductCreateWithoutOrderInput' })
  },
})

export const OrderProductCreateManyOrderInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductCreateManyOrderInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'OrderProductCreateManyOrderInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const UserUpsertWithoutOrdersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutOrdersInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUpdateWithoutOrdersInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutOrdersInput' })
  },
})

export const UserUpdateWithoutOrdersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutOrdersInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('firstName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('lastName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('gender', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('birthday', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('address', { type: 'AddressUpdateOneWithoutUserNestedInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutUserNestedInput' })
    t.field('cart', { type: 'ShoppingProductUpdateManyWithoutUserNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutOrdersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutOrdersInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('firstName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('lastName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('gender', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('birthday', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('address', {
      type: 'AddressUncheckedUpdateOneWithoutUserNestedInput',
    })
    t.field('reviews', {
      type: 'ReviewUncheckedUpdateManyWithoutUserNestedInput',
    })
    t.field('cart', {
      type: 'ShoppingProductUncheckedUpdateManyWithoutUserNestedInput',
    })
  },
})

export const OrderAddressUpsertWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressUpsertWithoutOrderInput',
  definition(t) {
    t.nonNull.field('update', { type: 'OrderAddressUpdateWithoutOrderInput' })
    t.nonNull.field('create', { type: 'OrderAddressCreateWithoutOrderInput' })
  },
})

export const OrderAddressUpdateWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressUpdateWithoutOrderInput',
  definition(t) {
    t.field('fullName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('street', { type: 'StringFieldUpdateOperationsInput' })
    t.field('city', { type: 'StringFieldUpdateOperationsInput' })
    t.field('zipCode', { type: 'StringFieldUpdateOperationsInput' })
    t.field('country', { type: 'StringFieldUpdateOperationsInput' })
    t.field('phoneNumber', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const OrderAddressUncheckedUpdateWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderAddressUncheckedUpdateWithoutOrderInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('fullName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('street', { type: 'StringFieldUpdateOperationsInput' })
    t.field('city', { type: 'StringFieldUpdateOperationsInput' })
    t.field('zipCode', { type: 'StringFieldUpdateOperationsInput' })
    t.field('country', { type: 'StringFieldUpdateOperationsInput' })
    t.field('phoneNumber', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const OrderProductUpsertWithWhereUniqueWithoutOrderInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'OrderProductUpsertWithWhereUniqueWithoutOrderInput',
    definition(t) {
      t.nonNull.field('where', { type: 'OrderProductWhereUniqueInput' })
      t.nonNull.field('update', { type: 'OrderProductUpdateWithoutOrderInput' })
      t.nonNull.field('create', { type: 'OrderProductCreateWithoutOrderInput' })
    },
  })

export const OrderProductUpdateWithWhereUniqueWithoutOrderInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'OrderProductUpdateWithWhereUniqueWithoutOrderInput',
    definition(t) {
      t.nonNull.field('where', { type: 'OrderProductWhereUniqueInput' })
      t.nonNull.field('data', { type: 'OrderProductUpdateWithoutOrderInput' })
    },
  })

export const OrderProductUpdateManyWithWhereWithoutOrderInput = inputObjectType(
  {
    nonNullDefaults: {
      input: false,
    },
    name: 'OrderProductUpdateManyWithWhereWithoutOrderInput',
    definition(t) {
      t.nonNull.field('where', { type: 'OrderProductScalarWhereInput' })
      t.nonNull.field('data', { type: 'OrderProductUpdateManyMutationInput' })
    },
  },
)

export const OrderProductScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'OrderProductScalarWhereInput' })
    t.list.field('OR', { type: 'OrderProductScalarWhereInput' })
    t.list.field('NOT', { type: 'OrderProductScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('orderId', { type: 'IntFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('price', { type: 'IntFilter' })
    t.field('img', { type: 'StringFilter' })
    t.field('discount', { type: 'FloatFilter' })
    t.field('quantity', { type: 'IntFilter' })
  },
})

export const OrderCreateWithoutAddressInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCreateWithoutAddressInput',
  definition(t) {
    t.field('OrderStatus', { type: 'String' })
    t.field('date', { type: 'DateTime' })
    t.field('subtotal', { type: 'Int' })
    t.nonNull.field('type', { type: 'OrderType' })
    t.nonNull.field('User', { type: 'UserCreateNestedOneWithoutOrdersInput' })
    t.field('products', {
      type: 'OrderProductCreateNestedManyWithoutOrderInput',
    })
  },
})

export const OrderUncheckedCreateWithoutAddressInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUncheckedCreateWithoutAddressInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('userId', { type: 'Int' })
    t.field('OrderStatus', { type: 'String' })
    t.field('date', { type: 'DateTime' })
    t.field('subtotal', { type: 'Int' })
    t.nonNull.field('type', { type: 'OrderType' })
    t.field('products', {
      type: 'OrderProductUncheckedCreateNestedManyWithoutOrderInput',
    })
  },
})

export const OrderCreateOrConnectWithoutAddressInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCreateOrConnectWithoutAddressInput',
  definition(t) {
    t.nonNull.field('where', { type: 'OrderWhereUniqueInput' })
    t.nonNull.field('create', { type: 'OrderCreateWithoutAddressInput' })
  },
})

export const OrderUpsertWithoutAddressInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUpsertWithoutAddressInput',
  definition(t) {
    t.nonNull.field('update', { type: 'OrderUpdateWithoutAddressInput' })
    t.nonNull.field('create', { type: 'OrderCreateWithoutAddressInput' })
  },
})

export const OrderUpdateWithoutAddressInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUpdateWithoutAddressInput',
  definition(t) {
    t.field('OrderStatus', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('subtotal', { type: 'IntFieldUpdateOperationsInput' })
    t.field('type', { type: 'EnumOrderTypeFieldUpdateOperationsInput' })
    t.field('User', { type: 'UserUpdateOneRequiredWithoutOrdersNestedInput' })
    t.field('products', {
      type: 'OrderProductUpdateManyWithoutOrderNestedInput',
    })
  },
})

export const OrderUncheckedUpdateWithoutAddressInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUncheckedUpdateWithoutAddressInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('OrderStatus', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('subtotal', { type: 'IntFieldUpdateOperationsInput' })
    t.field('type', { type: 'EnumOrderTypeFieldUpdateOperationsInput' })
    t.field('products', {
      type: 'OrderProductUncheckedUpdateManyWithoutOrderNestedInput',
    })
  },
})

export const OrderCreateWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCreateWithoutProductsInput',
  definition(t) {
    t.field('OrderStatus', { type: 'String' })
    t.field('date', { type: 'DateTime' })
    t.field('subtotal', { type: 'Int' })
    t.nonNull.field('type', { type: 'OrderType' })
    t.nonNull.field('User', { type: 'UserCreateNestedOneWithoutOrdersInput' })
    t.field('address', { type: 'OrderAddressCreateNestedOneWithoutOrderInput' })
  },
})

export const OrderUncheckedCreateWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUncheckedCreateWithoutProductsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('userId', { type: 'Int' })
    t.field('OrderStatus', { type: 'String' })
    t.field('date', { type: 'DateTime' })
    t.field('subtotal', { type: 'Int' })
    t.nonNull.field('type', { type: 'OrderType' })
    t.field('address', {
      type: 'OrderAddressUncheckedCreateNestedOneWithoutOrderInput',
    })
  },
})

export const OrderCreateOrConnectWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCreateOrConnectWithoutProductsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'OrderWhereUniqueInput' })
    t.nonNull.field('create', { type: 'OrderCreateWithoutProductsInput' })
  },
})

export const OrderUpsertWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUpsertWithoutProductsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'OrderUpdateWithoutProductsInput' })
    t.nonNull.field('create', { type: 'OrderCreateWithoutProductsInput' })
  },
})

export const OrderUpdateWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUpdateWithoutProductsInput',
  definition(t) {
    t.field('OrderStatus', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('subtotal', { type: 'IntFieldUpdateOperationsInput' })
    t.field('type', { type: 'EnumOrderTypeFieldUpdateOperationsInput' })
    t.field('User', { type: 'UserUpdateOneRequiredWithoutOrdersNestedInput' })
    t.field('address', { type: 'OrderAddressUpdateOneWithoutOrderNestedInput' })
  },
})

export const OrderUncheckedUpdateWithoutProductsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUncheckedUpdateWithoutProductsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('OrderStatus', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('subtotal', { type: 'IntFieldUpdateOperationsInput' })
    t.field('type', { type: 'EnumOrderTypeFieldUpdateOperationsInput' })
    t.field('address', {
      type: 'OrderAddressUncheckedUpdateOneWithoutOrderNestedInput',
    })
  },
})

export const ProductCreateWithoutShoppingProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateWithoutShoppingProductInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.field('price', { type: 'Int' })
    t.field('discount', { type: 'Float' })
    t.field('stock', { type: 'Int' })
    t.nonNull.field('category', { type: 'String' })
    t.nonNull.field('manufacturer', { type: 'String' })
    t.nonNull.field('img', { type: 'String' })
    t.field('likes', { type: 'Int' })
    t.field('memory', { type: 'String' })
    t.field('storage', { type: 'String' })
    t.field('processor', { type: 'String' })
    t.field('gpu', { type: 'String' })
    t.field('os', { type: 'String' })
    t.field('screen', { type: 'String' })
    t.field('reviews', { type: 'ReviewCreateNestedManyWithoutProductInput' })
  },
})

export const ProductUncheckedCreateWithoutShoppingProductInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProductUncheckedCreateWithoutShoppingProductInput',
    definition(t) {
      t.field('id', { type: 'Int' })
      t.nonNull.field('name', { type: 'String' })
      t.nonNull.field('description', { type: 'String' })
      t.field('price', { type: 'Int' })
      t.field('discount', { type: 'Float' })
      t.field('stock', { type: 'Int' })
      t.nonNull.field('category', { type: 'String' })
      t.nonNull.field('manufacturer', { type: 'String' })
      t.nonNull.field('img', { type: 'String' })
      t.field('likes', { type: 'Int' })
      t.field('memory', { type: 'String' })
      t.field('storage', { type: 'String' })
      t.field('processor', { type: 'String' })
      t.field('gpu', { type: 'String' })
      t.field('os', { type: 'String' })
      t.field('screen', { type: 'String' })
      t.field('reviews', {
        type: 'ReviewUncheckedCreateNestedManyWithoutProductInput',
      })
    },
  })

export const ProductCreateOrConnectWithoutShoppingProductInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProductCreateOrConnectWithoutShoppingProductInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ProductWhereUniqueInput' })
      t.nonNull.field('create', {
        type: 'ProductCreateWithoutShoppingProductInput',
      })
    },
  })

export const UserCreateWithoutCartInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutCartInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('firstName', { type: 'String' })
    t.nonNull.field('lastName', { type: 'String' })
    t.field('gender', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('role', { type: 'Role' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressCreateNestedOneWithoutUserInput' })
    t.field('orders', { type: 'OrderCreateNestedManyWithoutUserInput' })
    t.field('reviews', { type: 'ReviewCreateNestedManyWithoutUserInput' })
  },
})

export const UserUncheckedCreateWithoutCartInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutCartInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('firstName', { type: 'String' })
    t.nonNull.field('lastName', { type: 'String' })
    t.field('gender', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('role', { type: 'Role' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('address', {
      type: 'AddressUncheckedCreateNestedOneWithoutUserInput',
    })
    t.field('orders', {
      type: 'OrderUncheckedCreateNestedManyWithoutUserInput',
    })
    t.field('reviews', {
      type: 'ReviewUncheckedCreateNestedManyWithoutUserInput',
    })
  },
})

export const UserCreateOrConnectWithoutCartInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutCartInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutCartInput' })
  },
})

export const ProductUpsertWithoutShoppingProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpsertWithoutShoppingProductInput',
  definition(t) {
    t.nonNull.field('update', {
      type: 'ProductUpdateWithoutShoppingProductInput',
    })
    t.nonNull.field('create', {
      type: 'ProductCreateWithoutShoppingProductInput',
    })
  },
})

export const ProductUpdateWithoutShoppingProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateWithoutShoppingProductInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'IntFieldUpdateOperationsInput' })
    t.field('discount', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('stock', { type: 'IntFieldUpdateOperationsInput' })
    t.field('category', { type: 'StringFieldUpdateOperationsInput' })
    t.field('manufacturer', { type: 'StringFieldUpdateOperationsInput' })
    t.field('img', { type: 'StringFieldUpdateOperationsInput' })
    t.field('likes', { type: 'IntFieldUpdateOperationsInput' })
    t.field('memory', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('storage', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('processor', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('gpu', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('os', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('screen', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutProductNestedInput' })
  },
})

export const ProductUncheckedUpdateWithoutShoppingProductInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProductUncheckedUpdateWithoutShoppingProductInput',
    definition(t) {
      t.field('id', { type: 'IntFieldUpdateOperationsInput' })
      t.field('name', { type: 'StringFieldUpdateOperationsInput' })
      t.field('description', { type: 'StringFieldUpdateOperationsInput' })
      t.field('price', { type: 'IntFieldUpdateOperationsInput' })
      t.field('discount', { type: 'FloatFieldUpdateOperationsInput' })
      t.field('stock', { type: 'IntFieldUpdateOperationsInput' })
      t.field('category', { type: 'StringFieldUpdateOperationsInput' })
      t.field('manufacturer', { type: 'StringFieldUpdateOperationsInput' })
      t.field('img', { type: 'StringFieldUpdateOperationsInput' })
      t.field('likes', { type: 'IntFieldUpdateOperationsInput' })
      t.field('memory', { type: 'NullableStringFieldUpdateOperationsInput' })
      t.field('storage', { type: 'NullableStringFieldUpdateOperationsInput' })
      t.field('processor', { type: 'NullableStringFieldUpdateOperationsInput' })
      t.field('gpu', { type: 'NullableStringFieldUpdateOperationsInput' })
      t.field('os', { type: 'NullableStringFieldUpdateOperationsInput' })
      t.field('screen', { type: 'NullableStringFieldUpdateOperationsInput' })
      t.field('reviews', {
        type: 'ReviewUncheckedUpdateManyWithoutProductNestedInput',
      })
    },
  })

export const UserUpsertWithoutCartInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutCartInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUpdateWithoutCartInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutCartInput' })
  },
})

export const UserUpdateWithoutCartInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutCartInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('firstName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('lastName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('gender', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('birthday', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('address', { type: 'AddressUpdateOneWithoutUserNestedInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutUserNestedInput' })
    t.field('reviews', { type: 'ReviewUpdateManyWithoutUserNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutCartInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutCartInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('firstName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('lastName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('gender', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('birthday', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('address', {
      type: 'AddressUncheckedUpdateOneWithoutUserNestedInput',
    })
    t.field('orders', {
      type: 'OrderUncheckedUpdateManyWithoutUserNestedInput',
    })
    t.field('reviews', {
      type: 'ReviewUncheckedUpdateManyWithoutUserNestedInput',
    })
  },
})

export const ProductCreateWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateWithoutReviewsInput',
  definition(t) {
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.field('price', { type: 'Int' })
    t.field('discount', { type: 'Float' })
    t.field('stock', { type: 'Int' })
    t.nonNull.field('category', { type: 'String' })
    t.nonNull.field('manufacturer', { type: 'String' })
    t.nonNull.field('img', { type: 'String' })
    t.field('likes', { type: 'Int' })
    t.field('memory', { type: 'String' })
    t.field('storage', { type: 'String' })
    t.field('processor', { type: 'String' })
    t.field('gpu', { type: 'String' })
    t.field('os', { type: 'String' })
    t.field('screen', { type: 'String' })
    t.field('ShoppingProduct', {
      type: 'ShoppingProductCreateNestedManyWithoutProductInput',
    })
  },
})

export const ProductUncheckedCreateWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedCreateWithoutReviewsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.field('price', { type: 'Int' })
    t.field('discount', { type: 'Float' })
    t.field('stock', { type: 'Int' })
    t.nonNull.field('category', { type: 'String' })
    t.nonNull.field('manufacturer', { type: 'String' })
    t.nonNull.field('img', { type: 'String' })
    t.field('likes', { type: 'Int' })
    t.field('memory', { type: 'String' })
    t.field('storage', { type: 'String' })
    t.field('processor', { type: 'String' })
    t.field('gpu', { type: 'String' })
    t.field('os', { type: 'String' })
    t.field('screen', { type: 'String' })
    t.field('ShoppingProduct', {
      type: 'ShoppingProductUncheckedCreateNestedManyWithoutProductInput',
    })
  },
})

export const ProductCreateOrConnectWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductCreateOrConnectWithoutReviewsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProductWhereUniqueInput' })
    t.nonNull.field('create', { type: 'ProductCreateWithoutReviewsInput' })
  },
})

export const UserCreateWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateWithoutReviewsInput',
  definition(t) {
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('firstName', { type: 'String' })
    t.nonNull.field('lastName', { type: 'String' })
    t.field('gender', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('role', { type: 'Role' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('address', { type: 'AddressCreateNestedOneWithoutUserInput' })
    t.field('orders', { type: 'OrderCreateNestedManyWithoutUserInput' })
    t.field('cart', { type: 'ShoppingProductCreateNestedManyWithoutUserInput' })
  },
})

export const UserUncheckedCreateWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedCreateWithoutReviewsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('email', { type: 'String' })
    t.nonNull.field('password', { type: 'String' })
    t.nonNull.field('firstName', { type: 'String' })
    t.nonNull.field('lastName', { type: 'String' })
    t.field('gender', { type: 'String' })
    t.field('birthday', { type: 'DateTime' })
    t.field('role', { type: 'Role' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('address', {
      type: 'AddressUncheckedCreateNestedOneWithoutUserInput',
    })
    t.field('orders', {
      type: 'OrderUncheckedCreateNestedManyWithoutUserInput',
    })
    t.field('cart', {
      type: 'ShoppingProductUncheckedCreateNestedManyWithoutUserInput',
    })
  },
})

export const UserCreateOrConnectWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserCreateOrConnectWithoutReviewsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'UserWhereUniqueInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutReviewsInput' })
  },
})

export const ProductUpsertWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpsertWithoutReviewsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'ProductUpdateWithoutReviewsInput' })
    t.nonNull.field('create', { type: 'ProductCreateWithoutReviewsInput' })
  },
})

export const ProductUpdateWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUpdateWithoutReviewsInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'IntFieldUpdateOperationsInput' })
    t.field('discount', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('stock', { type: 'IntFieldUpdateOperationsInput' })
    t.field('category', { type: 'StringFieldUpdateOperationsInput' })
    t.field('manufacturer', { type: 'StringFieldUpdateOperationsInput' })
    t.field('img', { type: 'StringFieldUpdateOperationsInput' })
    t.field('likes', { type: 'IntFieldUpdateOperationsInput' })
    t.field('memory', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('storage', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('processor', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('gpu', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('os', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('screen', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('ShoppingProduct', {
      type: 'ShoppingProductUpdateManyWithoutProductNestedInput',
    })
  },
})

export const ProductUncheckedUpdateWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProductUncheckedUpdateWithoutReviewsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'IntFieldUpdateOperationsInput' })
    t.field('discount', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('stock', { type: 'IntFieldUpdateOperationsInput' })
    t.field('category', { type: 'StringFieldUpdateOperationsInput' })
    t.field('manufacturer', { type: 'StringFieldUpdateOperationsInput' })
    t.field('img', { type: 'StringFieldUpdateOperationsInput' })
    t.field('likes', { type: 'IntFieldUpdateOperationsInput' })
    t.field('memory', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('storage', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('processor', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('gpu', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('os', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('screen', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('ShoppingProduct', {
      type: 'ShoppingProductUncheckedUpdateManyWithoutProductNestedInput',
    })
  },
})

export const UserUpsertWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpsertWithoutReviewsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'UserUpdateWithoutReviewsInput' })
    t.nonNull.field('create', { type: 'UserCreateWithoutReviewsInput' })
  },
})

export const UserUpdateWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUpdateWithoutReviewsInput',
  definition(t) {
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('firstName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('lastName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('gender', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('birthday', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('address', { type: 'AddressUpdateOneWithoutUserNestedInput' })
    t.field('orders', { type: 'OrderUpdateManyWithoutUserNestedInput' })
    t.field('cart', { type: 'ShoppingProductUpdateManyWithoutUserNestedInput' })
  },
})

export const UserUncheckedUpdateWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'UserUncheckedUpdateWithoutReviewsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('password', { type: 'StringFieldUpdateOperationsInput' })
    t.field('firstName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('lastName', { type: 'StringFieldUpdateOperationsInput' })
    t.field('gender', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('birthday', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('role', { type: 'EnumRoleFieldUpdateOperationsInput' })
    t.field('createdAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('address', {
      type: 'AddressUncheckedUpdateOneWithoutUserNestedInput',
    })
    t.field('orders', {
      type: 'OrderUncheckedUpdateManyWithoutUserNestedInput',
    })
    t.field('cart', {
      type: 'ShoppingProductUncheckedUpdateManyWithoutUserNestedInput',
    })
  },
})

export const OrderCreateManyUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderCreateManyUserInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('OrderStatus', { type: 'String' })
    t.field('date', { type: 'DateTime' })
    t.field('subtotal', { type: 'Int' })
    t.nonNull.field('type', { type: 'OrderType' })
  },
})

export const ReviewCreateManyUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateManyUserInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('productId', { type: 'Int' })
    t.field('comment', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.field('date', { type: 'DateTime' })
  },
})

export const ShoppingProductCreateManyUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductCreateManyUserInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('quantity', { type: 'Int' })
    t.nonNull.field('productId', { type: 'Int' })
  },
})

export const OrderUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUpdateWithoutUserInput',
  definition(t) {
    t.field('OrderStatus', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('subtotal', { type: 'IntFieldUpdateOperationsInput' })
    t.field('type', { type: 'EnumOrderTypeFieldUpdateOperationsInput' })
    t.field('address', { type: 'OrderAddressUpdateOneWithoutOrderNestedInput' })
    t.field('products', {
      type: 'OrderProductUpdateManyWithoutOrderNestedInput',
    })
  },
})

export const OrderUncheckedUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUncheckedUpdateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('OrderStatus', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('subtotal', { type: 'IntFieldUpdateOperationsInput' })
    t.field('type', { type: 'EnumOrderTypeFieldUpdateOperationsInput' })
    t.field('address', {
      type: 'OrderAddressUncheckedUpdateOneWithoutOrderNestedInput',
    })
    t.field('products', {
      type: 'OrderProductUncheckedUpdateManyWithoutOrderNestedInput',
    })
  },
})

export const OrderUncheckedUpdateManyWithoutOrdersInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderUncheckedUpdateManyWithoutOrdersInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('OrderStatus', { type: 'StringFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('subtotal', { type: 'IntFieldUpdateOperationsInput' })
    t.field('type', { type: 'EnumOrderTypeFieldUpdateOperationsInput' })
  },
})

export const ReviewUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpdateWithoutUserInput',
  definition(t) {
    t.field('comment', { type: 'StringFieldUpdateOperationsInput' })
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('Product', {
      type: 'ProductUpdateOneRequiredWithoutReviewsNestedInput',
    })
  },
})

export const ReviewUncheckedUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUncheckedUpdateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('productId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('comment', { type: 'StringFieldUpdateOperationsInput' })
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const ReviewUncheckedUpdateManyWithoutReviewsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUncheckedUpdateManyWithoutReviewsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('productId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('comment', { type: 'StringFieldUpdateOperationsInput' })
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const ShoppingProductUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductUpdateWithoutUserInput',
  definition(t) {
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' })
    t.field('Product', {
      type: 'ProductUpdateOneRequiredWithoutShoppingProductNestedInput',
    })
  },
})

export const ShoppingProductUncheckedUpdateWithoutUserInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductUncheckedUpdateWithoutUserInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' })
    t.field('productId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const ShoppingProductUncheckedUpdateManyWithoutCartInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ShoppingProductUncheckedUpdateManyWithoutCartInput',
    definition(t) {
      t.field('id', { type: 'IntFieldUpdateOperationsInput' })
      t.field('quantity', { type: 'IntFieldUpdateOperationsInput' })
      t.field('productId', { type: 'IntFieldUpdateOperationsInput' })
    },
  })

export const ReviewCreateManyProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewCreateManyProductInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('userId', { type: 'Int' })
    t.field('comment', { type: 'String' })
    t.field('rating', { type: 'Int' })
    t.field('date', { type: 'DateTime' })
  },
})

export const ShoppingProductCreateManyProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductCreateManyProductInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('quantity', { type: 'Int' })
    t.nonNull.field('userId', { type: 'Int' })
  },
})

export const ReviewUpdateWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUpdateWithoutProductInput',
  definition(t) {
    t.field('comment', { type: 'StringFieldUpdateOperationsInput' })
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('User', { type: 'UserUpdateOneRequiredWithoutReviewsNestedInput' })
  },
})

export const ReviewUncheckedUpdateWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ReviewUncheckedUpdateWithoutProductInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('comment', { type: 'StringFieldUpdateOperationsInput' })
    t.field('rating', { type: 'IntFieldUpdateOperationsInput' })
    t.field('date', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const ShoppingProductUpdateWithoutProductInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShoppingProductUpdateWithoutProductInput',
  definition(t) {
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' })
    t.field('User', { type: 'UserUpdateOneRequiredWithoutCartNestedInput' })
  },
})

export const ShoppingProductUncheckedUpdateWithoutProductInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ShoppingProductUncheckedUpdateWithoutProductInput',
    definition(t) {
      t.field('id', { type: 'IntFieldUpdateOperationsInput' })
      t.field('quantity', { type: 'IntFieldUpdateOperationsInput' })
      t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    },
  })

export const ShoppingProductUncheckedUpdateManyWithoutShoppingProductInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ShoppingProductUncheckedUpdateManyWithoutShoppingProductInput',
    definition(t) {
      t.field('id', { type: 'IntFieldUpdateOperationsInput' })
      t.field('quantity', { type: 'IntFieldUpdateOperationsInput' })
      t.field('userId', { type: 'IntFieldUpdateOperationsInput' })
    },
  })

export const OrderProductCreateManyOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductCreateManyOrderInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('price', { type: 'Int' })
    t.nonNull.field('img', { type: 'String' })
    t.field('discount', { type: 'Float' })
    t.nonNull.field('quantity', { type: 'Int' })
  },
})

export const OrderProductUpdateWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductUpdateWithoutOrderInput',
  definition(t) {
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'IntFieldUpdateOperationsInput' })
    t.field('img', { type: 'StringFieldUpdateOperationsInput' })
    t.field('discount', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const OrderProductUncheckedUpdateWithoutOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'OrderProductUncheckedUpdateWithoutOrderInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('price', { type: 'IntFieldUpdateOperationsInput' })
    t.field('img', { type: 'StringFieldUpdateOperationsInput' })
    t.field('discount', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('quantity', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const OrderProductUncheckedUpdateManyWithoutProductsInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'OrderProductUncheckedUpdateManyWithoutProductsInput',
    definition(t) {
      t.field('id', { type: 'IntFieldUpdateOperationsInput' })
      t.field('name', { type: 'StringFieldUpdateOperationsInput' })
      t.field('price', { type: 'IntFieldUpdateOperationsInput' })
      t.field('img', { type: 'StringFieldUpdateOperationsInput' })
      t.field('discount', { type: 'FloatFieldUpdateOperationsInput' })
      t.field('quantity', { type: 'IntFieldUpdateOperationsInput' })
    },
  })

export const AggregateUser = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateUser',
  definition(t) {
    t.nullable.field('_count', { type: 'UserCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'UserAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'UserSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'UserMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'UserMaxAggregateOutputType' })
  },
})

export const AggregateAddress = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateAddress',
  definition(t) {
    t.nullable.field('_count', { type: 'AddressCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'AddressAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'AddressSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'AddressMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'AddressMaxAggregateOutputType' })
  },
})

export const AggregateProduct = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateProduct',
  definition(t) {
    t.nullable.field('_count', { type: 'ProductCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'ProductAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'ProductSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'ProductMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'ProductMaxAggregateOutputType' })
  },
})

export const AggregateOrder = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateOrder',
  definition(t) {
    t.nullable.field('_count', { type: 'OrderCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'OrderAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'OrderSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'OrderMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'OrderMaxAggregateOutputType' })
  },
})

export const AggregateOrderAddress = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateOrderAddress',
  definition(t) {
    t.nullable.field('_count', { type: 'OrderAddressCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'OrderAddressAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'OrderAddressSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'OrderAddressMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'OrderAddressMaxAggregateOutputType' })
  },
})

export const AggregateOrderProduct = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateOrderProduct',
  definition(t) {
    t.nullable.field('_count', { type: 'OrderProductCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'OrderProductAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'OrderProductSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'OrderProductMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'OrderProductMaxAggregateOutputType' })
  },
})

export const AggregateShoppingProduct = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateShoppingProduct',
  definition(t) {
    t.nullable.field('_count', {
      type: 'ShoppingProductCountAggregateOutputType',
    })
    t.nullable.field('_avg', { type: 'ShoppingProductAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'ShoppingProductSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'ShoppingProductMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'ShoppingProductMaxAggregateOutputType' })
  },
})

export const AggregateReview = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateReview',
  definition(t) {
    t.nullable.field('_count', { type: 'ReviewCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'ReviewAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'ReviewSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'ReviewMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'ReviewMaxAggregateOutputType' })
  },
})

export const UserCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserCountOutputType',
  definition(t) {
    t.field('orders', { type: 'Int' })
    t.field('reviews', { type: 'Int' })
    t.field('cart', { type: 'Int' })
  },
})

export const UserCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('email', { type: 'Int' })
    t.field('password', { type: 'Int' })
    t.field('firstName', { type: 'Int' })
    t.field('lastName', { type: 'Int' })
    t.field('gender', { type: 'Int' })
    t.field('birthday', { type: 'Int' })
    t.field('role', { type: 'Int' })
    t.field('createdAt', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const UserAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
  },
})

export const UserSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
  },
})

export const UserMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('email', { type: 'String' })
    t.nullable.field('password', { type: 'String' })
    t.nullable.field('firstName', { type: 'String' })
    t.nullable.field('lastName', { type: 'String' })
    t.nullable.field('gender', { type: 'String' })
    t.nullable.field('birthday', { type: 'DateTime' })
    t.nullable.field('role', { type: 'Role' })
    t.nullable.field('createdAt', { type: 'DateTime' })
  },
})

export const UserMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'UserMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('email', { type: 'String' })
    t.nullable.field('password', { type: 'String' })
    t.nullable.field('firstName', { type: 'String' })
    t.nullable.field('lastName', { type: 'String' })
    t.nullable.field('gender', { type: 'String' })
    t.nullable.field('birthday', { type: 'DateTime' })
    t.nullable.field('role', { type: 'Role' })
    t.nullable.field('createdAt', { type: 'DateTime' })
  },
})

export const AddressCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AddressCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('street', { type: 'Int' })
    t.field('city', { type: 'Int' })
    t.field('zipCode', { type: 'Int' })
    t.field('country', { type: 'Int' })
    t.field('phoneNumber', { type: 'Int' })
    t.field('userId', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const AddressAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AddressAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('userId', { type: 'Float' })
  },
})

export const AddressSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AddressSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('userId', { type: 'Int' })
  },
})

export const AddressMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AddressMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('street', { type: 'String' })
    t.nullable.field('city', { type: 'String' })
    t.nullable.field('zipCode', { type: 'String' })
    t.nullable.field('country', { type: 'String' })
    t.nullable.field('phoneNumber', { type: 'String' })
    t.nullable.field('userId', { type: 'Int' })
  },
})

export const AddressMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AddressMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('street', { type: 'String' })
    t.nullable.field('city', { type: 'String' })
    t.nullable.field('zipCode', { type: 'String' })
    t.nullable.field('country', { type: 'String' })
    t.nullable.field('phoneNumber', { type: 'String' })
    t.nullable.field('userId', { type: 'Int' })
  },
})

export const ProductCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductCountOutputType',
  definition(t) {
    t.field('reviews', { type: 'Int' })
    t.field('ShoppingProduct', { type: 'Int' })
  },
})

export const ProductCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('description', { type: 'Int' })
    t.field('price', { type: 'Int' })
    t.field('discount', { type: 'Int' })
    t.field('stock', { type: 'Int' })
    t.field('category', { type: 'Int' })
    t.field('manufacturer', { type: 'Int' })
    t.field('img', { type: 'Int' })
    t.field('likes', { type: 'Int' })
    t.field('memory', { type: 'Int' })
    t.field('storage', { type: 'Int' })
    t.field('processor', { type: 'Int' })
    t.field('gpu', { type: 'Int' })
    t.field('os', { type: 'Int' })
    t.field('screen', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const ProductAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('price', { type: 'Float' })
    t.nullable.field('discount', { type: 'Float' })
    t.nullable.field('stock', { type: 'Float' })
    t.nullable.field('likes', { type: 'Float' })
  },
})

export const ProductSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('price', { type: 'Int' })
    t.nullable.field('discount', { type: 'Float' })
    t.nullable.field('stock', { type: 'Int' })
    t.nullable.field('likes', { type: 'Int' })
  },
})

export const ProductMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('description', { type: 'String' })
    t.nullable.field('price', { type: 'Int' })
    t.nullable.field('discount', { type: 'Float' })
    t.nullable.field('stock', { type: 'Int' })
    t.nullable.field('category', { type: 'String' })
    t.nullable.field('manufacturer', { type: 'String' })
    t.nullable.field('img', { type: 'String' })
    t.nullable.field('likes', { type: 'Int' })
    t.nullable.field('memory', { type: 'String' })
    t.nullable.field('storage', { type: 'String' })
    t.nullable.field('processor', { type: 'String' })
    t.nullable.field('gpu', { type: 'String' })
    t.nullable.field('os', { type: 'String' })
    t.nullable.field('screen', { type: 'String' })
  },
})

export const ProductMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProductMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('description', { type: 'String' })
    t.nullable.field('price', { type: 'Int' })
    t.nullable.field('discount', { type: 'Float' })
    t.nullable.field('stock', { type: 'Int' })
    t.nullable.field('category', { type: 'String' })
    t.nullable.field('manufacturer', { type: 'String' })
    t.nullable.field('img', { type: 'String' })
    t.nullable.field('likes', { type: 'Int' })
    t.nullable.field('memory', { type: 'String' })
    t.nullable.field('storage', { type: 'String' })
    t.nullable.field('processor', { type: 'String' })
    t.nullable.field('gpu', { type: 'String' })
    t.nullable.field('os', { type: 'String' })
    t.nullable.field('screen', { type: 'String' })
  },
})

export const OrderCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderCountOutputType',
  definition(t) {
    t.field('products', { type: 'Int' })
  },
})

export const OrderCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('userId', { type: 'Int' })
    t.field('OrderStatus', { type: 'Int' })
    t.field('date', { type: 'Int' })
    t.field('subtotal', { type: 'Int' })
    t.field('type', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const OrderAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('userId', { type: 'Float' })
    t.nullable.field('subtotal', { type: 'Float' })
  },
})

export const OrderSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('userId', { type: 'Int' })
    t.nullable.field('subtotal', { type: 'Int' })
  },
})

export const OrderMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('userId', { type: 'Int' })
    t.nullable.field('OrderStatus', { type: 'String' })
    t.nullable.field('date', { type: 'DateTime' })
    t.nullable.field('subtotal', { type: 'Int' })
    t.nullable.field('type', { type: 'OrderType' })
  },
})

export const OrderMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('userId', { type: 'Int' })
    t.nullable.field('OrderStatus', { type: 'String' })
    t.nullable.field('date', { type: 'DateTime' })
    t.nullable.field('subtotal', { type: 'Int' })
    t.nullable.field('type', { type: 'OrderType' })
  },
})

export const OrderAddressCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderAddressCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('orderId', { type: 'Int' })
    t.field('fullName', { type: 'Int' })
    t.field('street', { type: 'Int' })
    t.field('city', { type: 'Int' })
    t.field('zipCode', { type: 'Int' })
    t.field('country', { type: 'Int' })
    t.field('phoneNumber', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const OrderAddressAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderAddressAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('orderId', { type: 'Float' })
  },
})

export const OrderAddressSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderAddressSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('orderId', { type: 'Int' })
  },
})

export const OrderAddressMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderAddressMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('orderId', { type: 'Int' })
    t.nullable.field('fullName', { type: 'String' })
    t.nullable.field('street', { type: 'String' })
    t.nullable.field('city', { type: 'String' })
    t.nullable.field('zipCode', { type: 'String' })
    t.nullable.field('country', { type: 'String' })
    t.nullable.field('phoneNumber', { type: 'String' })
  },
})

export const OrderAddressMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderAddressMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('orderId', { type: 'Int' })
    t.nullable.field('fullName', { type: 'String' })
    t.nullable.field('street', { type: 'String' })
    t.nullable.field('city', { type: 'String' })
    t.nullable.field('zipCode', { type: 'String' })
    t.nullable.field('country', { type: 'String' })
    t.nullable.field('phoneNumber', { type: 'String' })
  },
})

export const OrderProductCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderProductCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('orderId', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('price', { type: 'Int' })
    t.field('img', { type: 'Int' })
    t.field('discount', { type: 'Int' })
    t.field('quantity', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const OrderProductAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderProductAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('orderId', { type: 'Float' })
    t.nullable.field('price', { type: 'Float' })
    t.nullable.field('discount', { type: 'Float' })
    t.nullable.field('quantity', { type: 'Float' })
  },
})

export const OrderProductSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderProductSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('orderId', { type: 'Int' })
    t.nullable.field('price', { type: 'Int' })
    t.nullable.field('discount', { type: 'Float' })
    t.nullable.field('quantity', { type: 'Int' })
  },
})

export const OrderProductMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderProductMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('orderId', { type: 'Int' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('price', { type: 'Int' })
    t.nullable.field('img', { type: 'String' })
    t.nullable.field('discount', { type: 'Float' })
    t.nullable.field('quantity', { type: 'Int' })
  },
})

export const OrderProductMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'OrderProductMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('orderId', { type: 'Int' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('price', { type: 'Int' })
    t.nullable.field('img', { type: 'String' })
    t.nullable.field('discount', { type: 'Float' })
    t.nullable.field('quantity', { type: 'Int' })
  },
})

export const ShoppingProductCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ShoppingProductCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('quantity', { type: 'Int' })
    t.field('userId', { type: 'Int' })
    t.field('productId', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const ShoppingProductAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ShoppingProductAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('quantity', { type: 'Float' })
    t.nullable.field('userId', { type: 'Float' })
    t.nullable.field('productId', { type: 'Float' })
  },
})

export const ShoppingProductSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ShoppingProductSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('quantity', { type: 'Int' })
    t.nullable.field('userId', { type: 'Int' })
    t.nullable.field('productId', { type: 'Int' })
  },
})

export const ShoppingProductMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ShoppingProductMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('quantity', { type: 'Int' })
    t.nullable.field('userId', { type: 'Int' })
    t.nullable.field('productId', { type: 'Int' })
  },
})

export const ShoppingProductMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ShoppingProductMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('quantity', { type: 'Int' })
    t.nullable.field('userId', { type: 'Int' })
    t.nullable.field('productId', { type: 'Int' })
  },
})

export const ReviewCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ReviewCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('userId', { type: 'Int' })
    t.field('productId', { type: 'Int' })
    t.field('comment', { type: 'Int' })
    t.field('rating', { type: 'Int' })
    t.field('date', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const ReviewAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ReviewAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('userId', { type: 'Float' })
    t.nullable.field('productId', { type: 'Float' })
    t.nullable.field('rating', { type: 'Float' })
  },
})

export const ReviewSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ReviewSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('userId', { type: 'Int' })
    t.nullable.field('productId', { type: 'Int' })
    t.nullable.field('rating', { type: 'Int' })
  },
})

export const ReviewMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ReviewMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('userId', { type: 'Int' })
    t.nullable.field('productId', { type: 'Int' })
    t.nullable.field('comment', { type: 'String' })
    t.nullable.field('rating', { type: 'Int' })
    t.nullable.field('date', { type: 'DateTime' })
  },
})

export const ReviewMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ReviewMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('userId', { type: 'Int' })
    t.nullable.field('productId', { type: 'Int' })
    t.nullable.field('comment', { type: 'String' })
    t.nullable.field('rating', { type: 'Int' })
    t.nullable.field('date', { type: 'DateTime' })
  },
})
