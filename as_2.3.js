// Typescript: Example of Class creation with get and set function //
var myContacts = (function () {
    function myContacts() {
        this.name = null;
        this.phone = null;
    }
    Object.defineProperty(myContacts.prototype, "contactInfo", {
        // check to see if contact name is valid when returning value //
        get: function () {
            if (name !== undefined) {
                return this.name;
            }
            else {
                alert("This user is not valid");
            }
        },
        set: function (contactName) {
            this.name = contactName;
        },
        enumerable: true,
        configurable: true
    });
    return myContacts;
}());
var contact = new myContacts();
contact.contactInfo = "Jennifer Minnis";
console.log(contact.contactInfo);