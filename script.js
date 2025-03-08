async function delayMessage(text, delay) {
    await new Promise(resolve => setTimeout(resolve, delay));
    document.getElementById('output').textContent = text;
}

document.getElementById('btn').addEventListener('click', () => {
    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value);
    if (text && delay) {
        delayMessage(text, delay);
    }
});

