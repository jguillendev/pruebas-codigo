import type { IApplyColor } from "./base";
import { applyColor } from "./base";

const elAlert: HTMLElement | null = document.getElementById("alert");
const addButton: HTMLElement | null = document.getElementById("button");
const userInput: HTMLInputElement | null = document.getElementById("input") as HTMLInputElement;
const elList: HTMLElement | null = document.getElementById("list");

const isEmpty = (value:string) => value.length === 0;

const renderAlert = (show:boolean) => {
    elAlert.style.display = show === true ? "block" : "none";
}

const onAddHandler = () => {

    if (isEmpty(userInput.value)) {
        renderAlert(true);
        return;
    }

    const listItem = document.createElement("li");
    applyColor({
        parent: elList,
        element: listItem
    });
    listItem.innerHTML = userInput.value;
    elList.appendChild(listItem);
    userInput.value = "";
    renderAlert(false);

    // BONUS !!
    // Agregando autofocus, para hacer esto user-friendly
    userInput.focus();

}
addButton.onclick = onAddHandler;

renderAlert(false);