let dropupicon = "<span class=\"material-symbols - outlined\">arrow_drop_up</span >";
let dropdoicon = "<span class=\"material-symbols-outlined\">arrow_drop_down</span>";
let deleteicon = "<span class=\"material-symbols-outlined\">delete</span>";
let addicon = "<span class=\"material-symbols-outlined\">add</span>";
let callicone = "<span class=\"material-symbols-outlined\">call</span>";
let mailicone = "<span class=\"material-symbols-outlined\">mail</span>";
let addresicone = "<span class=\"material-symbols-outlined\">home</span>";

let numberoffields = 1;
let numberofformation = 1;
let numberofemployment = 1;
let nbskill = 1;
let nblanguage = 1;
let pages = 1;
let nbhb = 1;

let photourl = "emptypic.png"
let fileInputphoto = document.getElementById('lphoto');
fileInputphoto.onblur = () => {
    let photo = fileInputphoto.files[0];
    if (photo) {
        photourl = URL.createObjectURL(photo);
        fileInputphoto.style.backgroundImage = "url(" + photourl + ")";
        fileInputphoto.style.backgroundSize = "cover";
        cvphotoid.src = photourl;
    }
};



function addoninputtoallinputs() {
    let inp = document.querySelectorAll("input[type=text]");
    for (let i of inp) {
        i.oninput = filling;
    }
    let inpdate = document.querySelectorAll("input[type=date]");
    for (let i of inp) {
        i.onchange = filling;
    }
    let txtareas = document.querySelectorAll("textarea");
    for (let i of txtareas) {
        i.oninput = filling;
    }
}

function addnewfield() {
    numberoffields += 1;
    fieldhtml = "<div class=\"item_field\" id=\"fieldid" + numberoffields + "\"><input class=\"field_input\" type=\"text\" placeholder=\"Field title\"> <input type=\"text\" placeholder=\"Field description\"><button class='delbtn' onclick=\"deletefield(this)\">" + deleteicon + "</button></div>"
    document.querySelector("#area_fieldid").insertAdjacentHTML("beforeend", fieldhtml)
    let cvf = "<div id=\"cvfieldid" + numberoffields + "\"><div class=\"title\"></div><div class=\"txt\"></div></div>"
    document.querySelector(".cvfield").insertAdjacentHTML("beforeend", cvf)
    console.log(document.querySelector(".cvfield"))
    addoninputtoallinputs()
}
function deletefield(e) {
    if (confirm("Want to delete?")) {
        document.getElementById("cv" + e.parentElement.id).remove();
        e.parentElement.remove();
    }

}
function deletformation(e) {
    if (confirm("Want to delete?")) {
        let id = "cv" + e.parentElement.nextElementSibling.id;
        document.getElementById(id).remove();
        e.parentElement.nextElementSibling.remove();
        e.parentElement.remove();
    }

}
function deletemployment(e) {
    if (confirm("Want to delete?")) {
        let id = "cv" + e.parentElement.nextElementSibling.id;
        document.getElementById(id).remove();
        e.parentElement.nextElementSibling.remove();
        e.parentElement.remove();
    }

}
function hidefield(e) {
   // e.parentElement.nextElementSibling.classList.toggle("display_none");
    $(e.parentElement.nextElementSibling).slideToggle();
}
function filling() {
    cvheadline.innerHTML = headline.value;
    // cvPersonaldetailstitle.innerHTML = Personaldetails.value;
    cvname.innerText = nom.value + " " + familyname.value;

    cvemail.innerHTML = mailicone + email.value;
    cvtel.innerHTML = callicone + tel.value;
    cvadd.innerHTML = addresicone + add.value;


    cvprofiletitle.innerText = profile.value;
    cvprofiledesc.innerText = profiledesc.value;
    cvtskills.innerText = tskills.value;
    cvthbs.innerText = thbs.value;
    cvtlanguages.innerText = tlanguages.value;
    document.querySelector(".cveducation").children[0].innerText = educationtitle1.value
    document.querySelector(".cvemployment").children[0].innerText = employmenttitle1.value
    fillbyclass("education_field");
    fillbyclass("employment_field");
    fillfields();
    fillskills();
    filllanguages();
    fillhbs();
}

let btnshowcv = false;
function showcv() {
    btnshowcv = !btnshowcv;
    if (btnshowcv) {
        event.target.innerText = "Show form"
    } else { event.target.innerText = "Show cv" }
    let con = document.querySelector(".b");
    con.classList.toggle('display_none');
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function addformation(e) {
    numberofformation++;
    let codeformation = "<div> <br><hr><br> <input readonly type=\"text\" value=\"Education\" class=\"input_title\"><button class='delbtn' onclick=\"deletformation(this)\">" + deleteicon + "</button><button class='hidbtn' onclick=\"hidefield(this)\">" + dropdoicon + "</button></div><div id=\"educationdetails" + numberofformation + "\" class=\"personaldetails_details\"><label>Education: </label><input type=\"text\" placeholder=\"Education\"><label>School: </label><input type=\"text\" placeholder=\"School\"><label>City: </label><input type=\"text\" placeholder=\"School\"><label>Start date: </label><input style=\"width: 50%;\" type=\"date\"><label>End date: </label><input style=\"width: 50%;\" type=\"date\"><label>Description: </label><textarea style=\"width: 50%;\" name=\"\" id=\"\" cols=\"30\" rows=\"5\" placeholder=\"Description\"></textarea></div>";
    e.insertAdjacentHTML("beforebegin", codeformation);
    let codecvformation = "<div id=\"cveducationdetails" + numberofformation + "\" class=\"cveducation3\"><div class=\"bold\" >date debut - date fine</div><div class=\"bold\" >education</div><div class=\"bold\">school, city</div><div>description</div></div>";
    document.querySelector(".cveducation").insertAdjacentHTML("beforeend", codecvformation);
    addoninputtoallinputs()
}
function addemployment(e) {
    numberofemployment++;
    let codeemployment = "<div> <br><hr><br> <input readonly type=\"text\" value=\"Employment\" class=\"input_title\"><button class='delbtn' onclick=\"deletemployment(this)\">" + deleteicon + "</button><button class='hidbtn' onclick=\"hidefield(this)\">" + dropdoicon + "</button></div><div id=\"employmentdetails" + numberofemployment + "\" class=\"personaldetails_details\"><label>Employment: </label><input type=\"text\" placeholder=\"Position\"><label>Employer: </label><input type=\"text\" placeholder=\"Employer\"><label>City: </label><input type=\"text\" placeholder=\"City\"><label>Start date: </label><input style=\"width: 50%;\" type=\"date\"><label>End date: </label><input style=\"width: 50%;\" type=\"date\"><label>Description: </label><textarea style=\"width: 50%;\" name=\"\" id=\"\" cols=\"30\" rows=\"5\" placeholder=\"Description\"></textarea></div>";
    e.insertAdjacentHTML("beforebegin", codeemployment);
    let codecvemployment = "<div id=\"cvemploymentdetails" + numberofemployment + "\" class=\"cvemployment3\"><div class=\"bold\" >date debut - date fine</div><div class=\"bold\">position</div><div class=\"bold\">employer, city</div><div>description</div></div>";
    document.querySelector(".cvemployment").insertAdjacentHTML("beforeend", codecvemployment);
    addoninputtoallinputs()
}
function fillbyclass(cls) {
    let elms = document.getElementsByClassName(cls)[0].children;
    if (elms.length > 0) {
        for (let i = 1; i < elms.length; i = i + 2) {

            let index1 = elms[i].id;
            let index2 = "cv" + index1;
        /*date debut - date fin*/document.getElementById(index2).children[0].innerText = document.getElementById(index1).children[7].value + " " + document.getElementById(index1).children[9].value;
        /*education*/document.getElementById(index2).children[1].innerText = document.getElementById(index1).children[1].value;
        /*school, city*/document.getElementById(index2).children[2].innerText = document.getElementById(index1).children[3].value + ", " + document.getElementById(index1).children[5].value;
        /*description*/document.getElementById(index2).children[3].innerText = document.getElementById(index1).children[11].value;
        }
    }
}
function fillfields() {
    let elms = document.querySelector(".area_field").children;
    for (f of elms) {
        let index1 = f.id;
        let index2 = "cv" + index1;
        document.getElementById(index2).children[0].innerHTML = document.getElementById(index1).children[0].value;
        document.getElementById(index2).children[1].innerHTML = document.getElementById(index1).children[1].value;
    }

}
function onchangeskillrange(e) {
    let v = 'choose';
    if (e.value == 0) { v = 'Beginner' }
    else if (e.value == 1) { v = "Moderate" }
    else if (e.value == 2) { v = "Good" }
    else if (e.value == 3) { v = "Very good" }
    else if (e.value == 4) { v = "Excellent" }
    e.nextElementSibling.innerHTML = v
    fillskills()
}
function onchangelanguagerange(e) {
    let v = 'choose';
    if (e.value == 0) { v = 'Beginner' }
    else if (e.value == 1) { v = "Moderate" }
    else if (e.value == 2) { v = "Good" }
    else if (e.value == 3) { v = "Very good" }
    else if (e.value == 4) { v = "Fluent" }
    e.nextElementSibling.innerHTML = v
    filllanguages()
}
function deletskill(e) {
    if (confirm("Want to delete?")) {
        let i = "cv" + e.parentElement.id;
        document.getElementById(i).remove();
        e.parentElement.remove();
    }

}
function delethb(e) {
    if (confirm("Want to delete?")) {
        let i = "cv" + e.parentElement.id;
        document.getElementById(i).remove();
        e.parentElement.remove();
    }

}
function deletlanguage(e) {
    if (confirm("Want to delete?")) {
        let i = "cv" + e.parentElement.id;
        document.getElementById(i).remove();
        e.parentElement.remove();
    }

}
function addnewskill() {
    nbskill++;
    let skillhtml = "<div class=\"skillfield\" id=\"skillfieldid" + nbskill + "\"><input type=\"text\" placeholder=\"Skill\"><input type=\"range\" min=\"0\" max=\"4\" step=\"1\" onchange=\"onchangeskillrange(this)\"><span>Choose</span><button class='delbtn' onclick=\"deletskill(this)\">" + deleteicon + "</button></div>"
    document.querySelector(".skillsfields").insertAdjacentHTML("beforeend", skillhtml)
    let cvskillhtml = "<div class=\"cvskill\" id=\"cvskillfieldid" + nbskill + "\"><div class='bold' ></div><div ></div></div>"
    document.querySelector(".cvskillsfields").insertAdjacentHTML("beforeend", cvskillhtml)
}
function addnewlanguage() {
    nblanguage++;
    let languagehtml = "<div class=\"languagefield\" id=\"languagefieldid" + nblanguage + "\"><input type=\"text\" placeholder=\"language\"><input type=\"range\" min=\"0\" max=\"4\" step=\"1\" onchange=\"onchangelanguagerange(this)\"><span>Choose</span><button class='delbtn' onclick=\"deletlanguage(this)\">" + deleteicon + "</button></div>"
    document.querySelector(".languagesfields").insertAdjacentHTML("beforeend", languagehtml)
    let cvlanguagehtml = "<div class=\"cvlanguage\" id=\"cvlanguagefieldid" + nblanguage + "\"><div class='bold' ></div><div ></div></div>"
    document.querySelector(".cvlanguagesfields").insertAdjacentHTML("beforeend", cvlanguagehtml)
}
function addnewhb() {
    nbhb++;
    let hbhtml = "<div class=\"hbfield\" id=\"hbfieldid" + nbhb + "\"><input type=\"text\" placeholder=\"hobbie\"><button class='delbtn' onclick=\"delethb(this)\">" + deleteicon + "</button></div>"
    document.querySelector(".hbsfields").insertAdjacentHTML("beforeend", hbhtml)
    let cvhbhtml = "<div class=\"cvhb\" id=\"cvhbfieldid" + nbhb + "\"><div ></div><div>"
    document.querySelector(".cvhbsfields").insertAdjacentHTML("beforeend", cvhbhtml)
}

function fillskills() {
    let elms = document.querySelector(".skillsfields").children;
    for (f in elms) {
        if (f > 0) {
            let index1 = elms[f].id;
            let index2 = "cv" + index1;
            document.getElementById(index2).children[0].innerHTML = document.getElementById(index1).children[0].value;
            document.getElementById(index2).children[1].innerHTML = document.getElementById(index1).children[2].innerText;
        }

    }
}
function fillhbs() {
    let elms = document.querySelector(".hbsfields").children;
    for (f in elms) {
        if (f > 0) {
            let index1 = elms[f].id;
            let index2 = "cv" + index1;
            document.getElementById(index2).children[0].innerHTML = document.getElementById(index1).children[0].value;
        }
    }
}
function filllanguages() {

    let elms = document.querySelector(".languagesfields").children;
    for (f in elms) {
        if (f > 0) {
            let index1 = elms[f].id;
            let index2 = "cv" + index1;
            document.getElementById(index2).children[0].innerHTML = document.getElementById(index1).children[0].value;
            document.getElementById(index2).children[1].innerHTML = document.getElementById(index1).children[2].innerText;
        }

    }
}
// function getMMPerPixel() {
//     const inchPerMM = 0.0393701; // 1 mm = 0.0393701 inches
//     const dpi = window.devicePixelRatio * 96; // Assume 96dpi as default
//     return 25.4 / dpi; // 1 inch = 25.4 mm
// }


function btnprint() {
    // printforme();
    window.print();
    // rmprintforme();
}


filling();
addoninputtoallinputs()
