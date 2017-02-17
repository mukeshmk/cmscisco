import { Injectable } from '@angular/core';
import {accountData} from "./accounts.array";
import {account} from "./accounts.interface";

@Injectable()
export class AccountsService {
    public data : account;

    addAccounts(data){
        this.data = data;
        var prevLength = accountData.length;
        var currLength = accountData.push(this.data);

        console.log(prevLength);
        console.log(currLength);
        console.log(accountData);
    }
}
