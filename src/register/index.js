import "../styles.css";

const button = document.querySelector("button");
const jsonPre = document.querySelector("#jsonPre");
const emailInput = document.querySelector("#email");
const fullNameInput = document.querySelector("#fullName");
const passwordInput = document.querySelector("#password");
const status = document.querySelector("#status");

function updateStatus(ok) {
    if (ok) {
        status.innerText = "Успешно!";
        status.className = "success";
    } else {
        status.innerText = "Не зарегистрирован!";
        status.className = "error";
    }
}

async function onSubmit(event) {
    event.preventDefault();

    button.innerText = "Загрузка...";

    const res = await fetch("https://5fd54060406a6fc7.mokky.dev/register", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fullName: fullNameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        })
    });

    updateStatus(res.ok);

    if (res.ok) {
        const json = await res.json();
        console.log(json);
        jsonPre.innerText = JSON.stringify(json, null, 2);
    }

    button.innerText = "Зарегистрироваться";
}

document.querySelector("button").addEventListener("click", onSubmit);