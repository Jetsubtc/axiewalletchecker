// Test function to check a specific wallet
function testWallet(address) {
    const lowerAddress = address.toLowerCase();
    console.log("Testing wallet:", lowerAddress);
    console.log("In eligibleWallets:", eligibleWallets.includes(lowerAddress));
    console.log("In walletRoles:", walletRoles.hasOwnProperty(lowerAddress));
    console.log("Role:", walletRoles[lowerAddress]);
}

// Run test on page load with a known OG wallet
window.onload = function() {
    console.log("Testing known OG wallet");
    testWallet("0x005f7a58ba12c7b5435de2744b8c4f2f766f5c4f");
};

function checkWallet() {
    // Always convert input to lowercase for consistent comparison
    let input = document.getElementById("walletInput").value.trim();
    // Log original input
    console.log("Original input:", input);
    
    // Convert to lowercase
    input = input.toLowerCase();
    
    const result = document.getElementById("result");
    const checkButton = document.getElementById("checkButton");
    const animationContainer = document.getElementById("animation-container");
    
    console.log("Checking wallet (lowercase):", input); // Debug log

    // Validate Ethereum address format
    if (!/^0x[a-fA-F0-9]{40}$/.test(input)) {
        result.textContent = "❌ Invalid wallet address";
        result.style.color = "orange";
        return;
    }

    // eligibleWallets should be defined globally by including Test/eligible-wallet.js before this script
    animationContainer.innerHTML = ""; // Clear previous animation
    
    console.log("Eligible wallets:", eligibleWallets); // Debug log
    console.log("Wallet roles:", walletRoles); // Debug log
    console.log("Is wallet in list:", eligibleWallets.includes(input)); // Debug check
    console.log("Direct check:", walletRoles.hasOwnProperty(input)); // Direct check
    
    // More detailed debugging
    console.log("Input type:", typeof input);
    console.log("walletRoles type:", typeof walletRoles);
    console.log("walletRoles keys:", Object.keys(walletRoles));
    
    // Check if the input wallet exists in walletRoles keys
    const walletRolesKeys = Object.keys(walletRoles);
    console.log("Is input in walletRoles keys:", walletRolesKeys.includes(input));

    // Check if the wallet is eligible using either method
    const isEligible = (typeof eligibleWallets !== 'undefined' && eligibleWallets.includes(input)) || 
                      (typeof walletRoles !== 'undefined' && walletRoles.hasOwnProperty(input));
    
    console.log("Is wallet eligible:", isEligible);
    
    if (isEligible) {
        // Check if wallet has a role
        let role = "";
        if (typeof walletRoles !== 'undefined' && walletRoles[input]) {
            role = walletRoles[input];
            result.textContent = `✅ This wallet is eligible! Role: ${role}`;
        } else {
            result.textContent = "✅ This wallet is eligible!";
        }
        result.style.color = "green";
        
        // Special effects based on role
        if (role === "OG") {
            // More intense confetti for OG
            confetti({
                particleCount: 200,
                spread: 90,
                origin: { y: 0.6 },
                colors: ['#FFD700', '#FFA500', '#FF8C00'] // Gold colors for OG
            });
        } else if (role === "WL") {
            // Special confetti for WL
            confetti({
                particleCount: 150,
                spread: 80,
                origin: { y: 0.6 },
                colors: ['#00BFFF', '#1E90FF', '#4169E1'] // Blue colors for WL
            });
        } else {
            // Regular confetti
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
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
  
