let personData = [];
let jsDOM = {
    data: {
        fname: document.getElementById('firstName'),
        lname: document.getElementById('lastName'),
        email: document.getElementById('email'),
        phone: document.getElementById('phoneNumber'),
        city: document.getElementById('city'),
    },
    personData: document.getElementById('personData')
};
function showData() {
    if(personData==""){
        alert('There is no Data to show');
    }else{
        let parentDiv = jsDOM.personData;
        parentDiv.innerHTML = '';
        let node = document.createElement("div");
        let nodeHeader = document.createElement("h3");
        nodeHeader.style.fontFamily = "century gothic";
        let nodeHeaderText = document.createTextNode("Person Data");
        nodeHeader.appendChild(nodeHeaderText);
        node.appendChild(nodeHeader);
        let fullname, email, phone, city;
        personData.forEach(x => {
            fullname = `${x.firstname} ${x.lastname}`, email = x.email, phone = x.phone, city = x.city;
            let personData1 = document.createElement('p');
            var img = document.createElement("img");
            img.src = "img/name.png";
            personData1.appendChild(img);
            let personDataText = document.createTextNode("  " + fullname);
            personData1.appendChild(personDataText);
            var br = document.createElement("br");
            personData1.appendChild(br);
            img = document.createElement("img");
            img.src = "img/email.png";
            personData1.appendChild(img);
            personDataText = document.createTextNode("  " + email);
            personData1.appendChild(personDataText);
            br = document.createElement("br");
            personData1.appendChild(br);
            img = document.createElement("img");
            img.src = "img/phone.png";
            personData1.appendChild(img);
            personDataText = document.createTextNode("  " + phone);
            personData1.appendChild(personDataText);
            br = document.createElement("br");
            personData1.appendChild(br);
            img = document.createElement("img");
            img.src = "img/address.png";
            personData1.appendChild(img);
            personDataText = document.createTextNode("  " + city);
            personData1.appendChild(personDataText);
            node.appendChild(personData1);
        });
        parentDiv.appendChild(node);
}
}
function clearFields() {
    jsDOM.data.fname.value = "";
    jsDOM.data.lname.value = "";
    jsDOM.data.email.value = "";
    jsDOM.data.phone.value = "";
    jsDOM.data.city.value = "";
}
function addData() {
    if (jsDOM.data.fname.value == '' || jsDOM.data.lname.value == '' || jsDOM.data.email.value == '' || jsDOM.data.city.value == '') {
    let arrayData = [];
    Object.values(jsDOM.data).forEach(x => {
        if (x.value == "") {
            arrayData.push(`${x.title} is required.`);
        }
    });
    alert(arrayData.join('\n'));
}else{
    personData.push({ firstname: jsDOM.data.fname.value, lastname: jsDOM.data.lname.value, email: jsDOM.data.email.value, phone: jsDOM.data.phone.value, city: jsDOM.data.city.value });
    clearFields();
}
}
