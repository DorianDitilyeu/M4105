document.addEventListener("deviceready", init, false);
function init() {

    navigator.contacts.find(
        [navigator.contacts.fieldType.displayName],
        gotContacts,
        errorHandler
    );

}

function errorHandler(e) {
    console.log("errorHandler: "+e);
}

function gotContacts(c) {
    alert("Vous avez "+c.length+" contacts !");
    for(var i=0, len=c.length; i<len; i++) {
        alert(c.displayName[i]);
    }
}
