const myMap = new Map();


func=()=>{
const name = document.getElementById("name").value;
const reg = document.getElementById("reg").value;
const dept = document.getElementById("dept").value;
const mail = document.getElementById("mail").value;
const ph = document.getElementById("ph").value;
const gpa = document.getElementById("gpa").value;
    myMap.set("name", name);
    myMap.set("reg", reg);
    myMap.set("dept", dept);
    myMap.set("mail", mail);
    myMap.set("ph", ph);
    myMap.set("gpa", gpa);
    document.getElementById("change").innerHTML = "Saved: " + myMap.get("name") + ", " + myMap.get("reg") + ", " + myMap.get("dept") + ", " + myMap.get("mail") + ", " + myMap.get("ph") + ", " + myMap.get("gpa");
}
view=()=>{
                    

}