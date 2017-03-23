// Typescript: Example of Class creation with get and set function //

class myContacts { 
    private name: string; 
    private phone: number; 

// check to see if contact name is valid when returning value //
    get contactInfo(): string {
        if (name !== undefined) {
            return this.name;
        }else {
            alert("This user is not valid");
        }

    }
    
    set contactInfo(contactName: string) {
        this.name = contactName;
    
    }

}

var contact = new myContacts();
contact.contactInfo = "Jennifer Minnis";
alert(contact.contactInfo);