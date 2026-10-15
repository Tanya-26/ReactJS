
function showMessage(message, type) {
    const messageBox = document.getElementById("message");

    messageBox.textContent = message;
    messageBox.className = type;
}

function getFileDetails() {
    const fname = document.getElementById("fname").value.trim();
    const content = document.getElementById("content").value;

    if (!fname) {
        showMessage("Please enter a file name.", "error");
        return null;
    }

    return { fname, content };
}

async function writeFile() {
    const details = getFileDetails();

    if (!details) return;

    if (!details.content) {
        showMessage("Please enter content.", "error");
        return;
    }

    const url = `/write?fname=${encodeURIComponent(details.fname)}&content=${encodeURIComponent(details.content)}`;

    try {
        const response = await fetch(url, {
            method: "POST"
        });

        const data = await response.text();

        if (!response.ok) {
            throw new Error(data);
        }

        showMessage("File created successfully!", "success");
        document.getElementById("output").textContent = data;
    } catch (error) {
        showMessage(error.message, "error");
    }
}

async function appendFile() {
    const details = getFileDetails();

    if (!details) return;

    if (!details.content) {
        showMessage("Please enter content to append.", "error");
        return;
    }

    const url = `/append?fname=${encodeURIComponent(details.fname)}&content=${encodeURIComponent(details.content)}`;

    try {
        const response = await fetch(url, {
            method: "PUT"
        });

        const data = await response.text();

        if (!response.ok) {
            throw new Error(data);
        }

        showMessage("Content appended successfully!", "success");
        document.getElementById("output").textContent = data;
    } catch (error) {
        showMessage(error.message, "error");
    }
}

async function readFile() {
    const details = getFileDetails();

    if (!details) return;

    const url = `/read?fname=${encodeURIComponent(details.fname)}`;

    try {
        const response = await fetch(url, {
            method: "GET"
        });

        const data = await response.text();

        if (!response.ok) {
            throw new Error(data);
        }

        showMessage("File read successfully!", "success");

        document.getElementById("output").textContent =
            data.replace(/^<pre>|<\/pre>$/g, "");
    } catch (error) {
        showMessage(error.message, "error");
    }
}
