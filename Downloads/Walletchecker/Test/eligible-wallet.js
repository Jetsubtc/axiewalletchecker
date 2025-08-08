// All addresses must be lowercase
// Wallet addresses with roles
const walletRoles = {
  // Original wallets
  "0x1234567890abcdef1234567890abcdef12345678": "regular",
  "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd": "regular",
  "0xaabbccddeeff00112233445566778899aabbccdd": "regular",
  
  // OG wallets
  "0x005f7a58ba12c7b5435de2744b8c4f2f766f5c4f": "OG",
  "0xbe15dcb0e654765a2886654202ea8053d8c41cc9": "OG",
  "0x46270d93b9ac29123cda2e7f479ffccf1c85ecd4": "OG",
  "0xf8cb36c5700ff25e178a5cb29fb9fbf88296c8db": "OG",
  "0xcb1a2328bc49d7800b86031563f1724377f95d7c": "OG",
  "0x0d98c7149d2d35443d75ac782f7a64a4506c3306": "OG",
  "0x109f9374467249d353a9ecc2423197c60ce751b2": "OG",
  "0x44dfe0c96b2e8598c3515ec08cf8b62fbc680328": "OG",
  "0x10237221d03ec638f61cf9d50814a6cb3a9eabbc": "OG",
  "0xb53a0015e98c0e64064cb1ff565a951c0b32f04e": "OG",
  "0x1436779831dc8cc34ec65fe7e3e38fd80860a1d0": "OG",
  "0x2d969ba50a866ded6b1eabb00e2da859d8359595": "OG",
  "0xb5b13b49b8602a64dacbbcdd54e2f0aaafa2c8d1": "OG",
  "0xa32cdb988bab443b26c37a7cb02a37ca57bebef2": "OG",
  "0xdcebd3068724b8db61f681e974636ae58996cd31": "OG",
  "0xc56fa4508e48db909a1c06298eb632068a0f7cce": "OG",
  "0x79aa7b6881ae6b0afa00c7a76f24c0e711ad542a": "OG",
  "0x40f7275ad8d918d29e095f38de7e28364b84e4e0": "OG",
  "cd /Users/sithu/Downloads/Walletchecker/Test": "OG",
  "0x97f2518fedcbdf32d90ece4d02cd6531d3443ef5": "OG"
};

// For backward compatibility with existing code
const eligibleWallets = Object.keys(walletRoles);
 