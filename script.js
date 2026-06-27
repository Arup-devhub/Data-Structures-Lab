// Local tracking mirroring structural C Stack parameters
let stack = [];
const MAX_SIZE = 5; // Simulating limited memory layout allocation
const container = document.getElementById("stack-container");
const statusText = document.getElementById("status-text");
const inputField = document.getElementById("element-input");

function updateVisuals() {
    // Clear out container elements
    container.innerHTML = "";

    // Rebuild visual array nodes mapping stack pointer data
    stack.forEach((value, index) => {
        const block = document.createElement("div");
        block.className = "stack-block";
        block.innerText = value;

        // Highlight the current active stack pointer 'top' node
        if (index === stack.length - 1) {
            block.classList.add("top-item");
        }

        container.appendChild(block);
    });
}

function updateStatus(message, type) {
    statusText.innerText = message;
    statusText.className = ""; // clear old configuration classes
    
    if (type === "error") statusText.classList.add("status-error");
    else if (type === "success") statusText.classList.add("status-success");
    else statusText.classList.add("status-idle");
}

function pushToStack() {
    const val = parseInt(inputField.value);

    // Structural input guarding
    if (isNaN(val)) {
        updateStatus("⚠️ Enter a valid integer number first!", "error");
        return;
    }

    // Condition Check: Stack Overflow validation block
    if (stack.length >= MAX_SIZE) {
        updateStatus(`🚨 STACK OVERFLOW! Maximum allocation threshold [${MAX_SIZE}] breached. Cannot push.`, "error");
        return;
    }

    // Process push entry element assignment
    stack.push(val);
    inputField.value = ""; // clear prompt bar value

    updateVisuals();
    updateStatus(`[Success] Pushed element ${val} onto memory stack. Top indicator bumped up.`, "success");
}

function popFromStack() {
    // Condition Check: Stack Underflow validation block
    if (stack.length === 0) {
        updateStatus("🚨 STACK UNDERFLOW! Array workspace completely empty. Cannot pop.", "error");
        return;
    }
    
    // Process top deletion stack tracking
    const poppedVal = stack.pop();
    
    updateVisuals();
    updateStatus(`[Success] Popped element ${poppedVal} off structural top. Array length decremented.`, "success");
}

function clearStack() {
    stack = [];
    inputField.value = "";
    updateVisuals();
    updateStatus("Lab environment reset safely. Stack elements cleared out.", "idle");
}
