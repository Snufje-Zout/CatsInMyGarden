let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEL = document.getElementById("total-el")
let count = 0
let total = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function totalCount() {
    total += count
    totalEL.textContent = "Total: " + total
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    totalCount()
    countEl.textContent = 0
    count = 0
}

function newSession() {
    count = 0
    total = 0
    totalEL.textContent = "Total: "
    saveEl.textContent = "Previous entries: "
    countEl.textContent = count
}
