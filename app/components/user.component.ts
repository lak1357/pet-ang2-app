import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    
})
export class UserComponent {

    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;

    constructor() {
        this.name = "Scooby Doo";
        this.email = "lak@gmail.com";
        this.address = {
            street: "Hill Road",
            city: "Matale",
            state: "Central"
        };
        this.hobbies = ["Movies", "Reading", "Sports"];
        this.showHobbies = false;
    }


    togglesHobbies() {
        if (this.showHobbies) {
            this.showHobbies = false;
        }
        else {
            this.showHobbies = true;
        }
    }

    addHobby() {
        this.hobbies.push("Foo");
    }

    deleteHobby(index: number) {
        this.hobbies.splice(index, 1);
    }

}


interface address {
    street: string;
    city: string;
    state: string;
}