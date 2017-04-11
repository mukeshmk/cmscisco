import { Injectable } from '@angular/core';
import { orgData} from "./orgData.array";
import { organization} from "./oragnization.interface";


@Injectable()
export class organizationService{
    orgdata: organization;
    constructor() {
    }

    getOrg(){
        return orgData;
    }

    getOrgByOnlineName(orgID){
        return orgData.find( org => {
            return org.orgID == orgID;
        });

    }

    saveOrg(data)
    {
        var x = orgData.findIndex((org) => {
            return org.orgID == data.orgID;
        });

        if(x < 0){
            return -1;
        }
        orgData[x] = data;
        return 1;
    }

    addOrg(data)
    {
        this.orgdata=data;
        var prevLen=orgData.length;
        var curLen= orgData.push(this.orgdata);
        console.log(data);
        console.log(this.orgdata);
        console.log(curLen);
        console.log(prevLen);
        console.log(orgData);
        return 1;
    }
}