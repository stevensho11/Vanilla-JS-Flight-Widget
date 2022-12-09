const tableBody = document.querySelector('#table-body');

let flights = [
    {
        time: "07:11",
        destination: "Ebinoland",
        flight: "AB 123",
        gate: "A23",
        remarks: "DELAYED"
    },
    {
        time: "03:15",
        destination: "Ebinotopia",
        flight: "AB 594",
        gate: "A21",
        remarks: "ON TIME"
    },
    {
        time: "11:11",
        destination: "Ebino",
        flight: "AB 000",
        gate: "A15",
        remarks: "CANCELLED"
    }
];

const destination = ["New York", "Cancun", "Bali", "Tulum", "London", "Tokyo", "Seoul"];
const remarks = ["ON TIME", "DELAYED", "CANCELLED"];
let hour = 15;

function populateTable() {
    flights.forEach((flight) => {
        const tableRow = document.createElement("tr");

        for (const flightDetail in flight) {
            const tableCell = document.createElement("td");
            const word = Array.from(flight[flightDetail]);

            for (const [index, letter] of word.entries()) {
                const letterElement = document.createElement("div");

                setTimeout(() => {
                    letterElement.classList.add("flip");
                    letterElement.textContent = letter;
                    tableCell.append(letterElement);
                }, 100 * index);
            }
            tableRow.append(tableCell);
        }
        tableBody.append(tableRow);
    });
}

populateTable();

function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

function generateRandomNum(maxNumber) {
    const numbers = "0123456789";
    if (maxNumber) {
        const newNumbers = numbers.slice(0, maxNumber);
        return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length));
    }
    return numbers.charAt(Math.floor(Math.random() * numbers.length));
}

function generateTime() {
    hour++

    if (hour >= 24) {
        hour = 1;
    }

    const displayHour = (hour < 10) ? "0" + hour : hour;
    return displayHour + ":" + generateRandomNum(5) + generateRandomNum();
}

function switchIt() {
    flights.shift();
    flights.push({
        time: generateTime(),
        destination: destination[Math.floor(Math.random() * destination.length)],
        flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNum() + generateRandomNum() + generateRandomNum(),
        gate: generateRandomLetter() + " " + generateRandomNum() + generateRandomNum(),
        remarks: remarks[Math.floor(Math.random() * remarks.length)]
    })
    tableBody.textContent = "";
    populateTable();
}

setInterval(switchIt, 2000);
