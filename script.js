let isAdminLoggedIn = false;
function joinGym() {

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("welcomeMessage");

    if (name == "" || mobile == "" || email == "") {
        message.innerHTML = "❌ Please fill all details!";
        message.style.color = "red";
        return;
    }

    let member = {
        name: name,
        mobile: mobile,
        email: email
    };

    let members = JSON.parse(localStorage.getItem("members")) || [];
    members.push(member);
    localStorage.setItem("members", JSON.stringify(members));

    message.innerHTML = "🎉 Welcome " + name + "! Registration Successful.";
    message.style.color = "lime";
    message.style.fontSize = "20px";
    message.style.fontWeight = "bold";

    document.getElementById("name").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("email").value = "";
  updateTotalMembers();
}
function showMembers() {
  if (!isAdminLoggedIn) {
    alert("Please login as Admin first!");
    return;
}

    let members = JSON.parse(localStorage.getItem("members")) || [];

    let output = "<h3>Registered Members</h3>";

    members.forEach(function(member, index) {
        
output += "<p>" +
(index + 1) + ". " +
member.name + " | " +
member.mobile + " | " +
member.email +
' <button onclick="editMember(' + index + ')">Edit</button>' +
' <button onclick="deleteMember(' + index + ')">Delete</button>' +
"</p>";
    });

    document.getElementById("memberList").innerHTML = output;
}
function deleteMembers() {
    localStorage.removeItem("members");
    document.getElementById("memberList").innerHTML = "";
    alert("All members deleted successfully!");
  updateTotalMembers();
}
function searchMember() {

    let search = document.getElementById("search").value.toLowerCase();

    let members = JSON.parse(localStorage.getItem("members")) || [];

    let output = "<h3>Search Result</h3>";

    members.forEach(function(member) {
    if (member.name.toLowerCase().includes(search)) {
            output += "<p>" + member.name + " | " + member.mobile + " | " + member.email + "</p>";
        }
    });

    document.getElementById("memberList").innerHTML = output;
}
function deleteMember(index) {
    let members = JSON.parse(localStorage.getItem("members")) || [];

    members.splice(index, 1);

    localStorage.setItem("members", JSON.stringify(members));

    showMembers();
  updateTotalMembers();
}
function editMember(index) {

    let members = JSON.parse(localStorage.getItem("members")) || [];

    let newName = prompt("Enter New Name", members[index].name);
    let newMobile = prompt("Enter New Mobile", members[index].mobile);
    let newEmail = prompt("Enter New Email", members[index].email);

    if (newName && newMobile && newEmail) {
        members[index].name = newName;
        members[index].mobile = newMobile;
        members[index].email = newEmail;

        localStorage.setItem("members", JSON.stringify(members));

        showMembers();
    }
}
function adminLogin() {

    let password = document.getElementById("adminPassword").value;

    if (password === "1234") {
        isAdminLoggedIn = true;

        document.getElementById("loginStatus").innerHTML = "✅ Admin Login Successful";
        document.getElementById("loginStatus").style.color = "lime";
    } else {
        isAdminLoggedIn = false;

        document.getElementById("loginStatus").innerHTML = "❌ Wrong Password";
        document.getElementById("loginStatus").style.color = "red";
    }
}
function updateTotalMembers() {
    let members = JSON.parse(localStorage.getItem("members")) || [];
    document.getElementById("totalMembers").innerHTML =
        "👥 Total Members: " + members.length;
}
function updateTotalMembers() {
    let members = JSON.parse(localStorage.getItem("members")) || [];
    document.getElementById("totalMembers").innerHTML =
        "👥 Total Members: " + members.length;
}
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
function calculateBMI() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if (height === "" || weight === "") {
        document.getElementById("result").innerHTML = "Please enter height and weight";
        return;
    }

    let bmi = weight / ((height / 100) * (height / 100));

    let status = "";

    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi < 25) {
        status = "Normal";
    } else if (bmi < 30) {
        status = "Overweight";
    } else {
        status = "Obese";
    }

    document.getElementById("result").innerHTML =
        "Your BMI: " + bmi.toFixed(1) + " (" + status + ")";
}

document.getElementById("joinForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let form = document.getElementById("joinForm");

let name = form.querySelector("#name").value;
let mobile = form.querySelector("#mobile").value;
let email = form.querySelector("#email").value;
let plan = form.querySelector("#plan").value;document.getElementById("plan").value;

    let message = `New Gym Registration

Name: ${name}
Mobile: ${mobile}
Email: ${email}
Plan: ${plan}`;

    let phone = "916265065250"; // यहाँ अपना WhatsApp नंबर लिखो

    window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
        "_blank"
    );
});