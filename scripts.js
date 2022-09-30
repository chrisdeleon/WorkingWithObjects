class Contacts {
    constructor(name, last, email, pic){
        this.name = name;
        this.last = last;
        this.email = email;
        this.pic = pic
    }
    updateContact() {
        var contactDiv = document.getElementById('name');
        contactDiv.innerHTML = "";
        contactDiv.innerHTML = `<h1>${this.name} ${this.last}</h1>`
        document.getElementById('contactImg').src = `images/${this.pic}`
    }
}

var contact1 = new Contacts("Snow", "White", "swhite@castle.com", "snowwhite.png");
var contact2 = new Contacts ("Dopey", "Dwarf", "ddwarf@cottage.com", "dopey.png")

var contacts=[contact1, contact2]

// display the name of all of the contact we currently have
var strContacts = "<ul>"
for (var i = 0; i < contacts.length; i++){
    strContacts += `<li value =${i}>${contacts[i].name} ${contacts[i].last} </li>`;
}
strContacts += "</ul>";
document.getElementById('contactList').innerHTML = strContacts;

document.getElementById('contactList').addEventListener('click', function(e){
    console.log(contacts[e.target.value]);
    contacts[e.target.value].updateContact();
})

var contact3 = new Contacts("Bashful", "Dwarf", "bdwarf@cottage.com", "bashful.png");
contacts.push(contact3);