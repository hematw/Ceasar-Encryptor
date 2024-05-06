const msgInput = document.getElementById("input-msg")
const keyInput = document.getElementById("input-key");
const encDataEl = document.getElementById("enc-data");
const btn = document.getElementById("btn");


function caesarCipherEncrypt(str, shift) {
    const alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    let result = "";

    for (let i = 0; i < str.length; i++) {
        let char = str[i].toUpperCase();
        let index = alphabet.indexOf(char);

        if (index !== -1) {
            let newIndex = (index + shift) % 26;
            result += alphabet[newIndex];
        } else {
            result += char;
        }
    }

    return result.toLowerCase();
}

btn.addEventListener("click", () => {
    if (msgInput.value && keyInput.value) {
        const key = Number.parseInt(keyInput.value)

        encDataEl.value = caesarCipherEncrypt(msgInput.value, key)
    }
})