// simulate spacebar
document.dispatchEvent(new KeyboardEvent("keydown", {
    key: " ",
    keyCode: 32,
    code: '"Spacebar"'
}));