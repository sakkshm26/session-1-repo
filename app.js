/* function fn(par1, par2) {

} */

/* const fn = (par1, par2) => {
    return par1;
}

let i = "ankit"

switch (i) {
    case "ankit":
        console.log("Ankit");
        break;
    default:
        console.log("default");
} */

// const arr = ["a", "b", "c"];

/* for (let i = 0; i < 3; i++) {
    console.log(arr[i])
} */

/* for (let i of arr) {
    console.log(i);
} */

/* let obj = {
    key1: true,
    key2: "ankit",
    key3: 'a'
} */

// console.log(obj["key1"])
// console.log(obj["key2"])
// console.log(obj["key3"])

/* for (const key in obj) {
    console.log(obj[key])
} */

/* for (const [key, value] of Object.entries(obj)) {
    console.log(key, value);
} */

// document.getElementsByClassName("p-tag-1")[1].innerHTML = "<p>New line</p>"

/* setTimeout(() => {
    return console.log("Ankit")
}, 2000) */

const fn = async (value) => {
    setTimeout(2000, () => {
        return console.log("db query completed")
    })
}

fn(1).then(res => console.log(res));

// console.log(123)
// console.log("Ankit")

/* document.querySelector("#my-button-1").addEventListener("click", function def() {
    document.getElementsByClassName("p-tag-1")[1].innerHTML = "<p>New line</p>"
}) */