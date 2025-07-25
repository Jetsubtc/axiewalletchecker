function checkWallet() {
    const input = document.getElementById("walletInput").value.trim().toLowerCase();
    const result = document.getElementById("result");
    const checkButton = document.getElementById("checkButton");
    const animationContainer = document.getElementById("animation-container");

    // Validate Ethereum address format
    if (!/^0x[a-fA-F0-9]{40}$/.test(input)) {
        result.textContent = "❌ Invalid wallet address";
        result.style.color = "orange";
        return;
    }

    // eligibleWallets should be defined globally by including Test/eligible-wallet.js before this script
    animationContainer.innerHTML = ""; // Clear previous animation

    if (typeof eligibleWallets !== 'undefined' && eligibleWallets.includes(input)) {
        result.textContent = "✅ This wallet is eligible!";
        result.style.color = "green";
        // Fireworks/confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    } else {
        result.textContent = "❌ This wallet is NOT eligible.";
        result.style.color = "red";
        // Sad axolotl image animation
        animationContainer.innerHTML = `
      <div class="sad-axolotl-anim">
        <img src="images/crying-axolotl.png" alt="Sad Axolotl" />
      </div>
    `;
setTimeout(() => {
    animationContainer.innerHTML = "";
}, 1800);
    }

    checkButton.classList.add("pop");
    checkButton.addEventListener('animationend', function handler() {
        checkButton.classList.remove('pop');
        checkButton.removeEventListener('animationend', handler);
    });
}
  