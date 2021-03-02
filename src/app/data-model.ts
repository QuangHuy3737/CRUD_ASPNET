export class User {
    id = 0 ;
    name='';
    email='';
    address: Address[];
}
export class Address {
    street = '';
    city = '';
   
}
export const users : User[] = [
    {
        id :1,
        name: 'Huy',
        email:"huyquangtran37@gmail.com",
        address : [
            {street : '111 Abc ,street', city:'Ha noi'},
            {street : '112 Abc ,street', city:'Da nang'}
        ]


    },
    {
        id :2,
        name: 'Quang',
        email:"huyquang@gmail.com",
        address : [
            {street : '113 Abc ,street', city:'Ha noi'},
            {street : '114 Abc ,street', city:'Da nang'}
        ]


    },
    {
        id :3,
        name: 'Tran',
        email:"quang@gmail.com",
        address : [
            {street : '113 Abc ,street', city:'Ha noi'},
            {street : '114 Abc ,street', city:'Da nang'}
        ]


    },

];

