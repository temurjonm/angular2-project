/**
 * @author Temur Mahmudov
 */
export class Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;    
}

export class Users{
    id: number;
    name: string;
    phone: string;
    email: string; 
    address = new Address();
}