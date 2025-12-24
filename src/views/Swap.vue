<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="swap-container">

    <!-- Header -->
    <h2 class="title">⚡ Garcia Swap</h2>

    <!-- Wallet Connect -->
    <button
      v-if="!walletAddress"
      class="connect-btn"
      @click="connectWallet">
      Connect Wallet
    </button>

    <div v-else class="wallet-box">
      🔗 {{ walletAddress }}
    </div>

    <!-- Swap Box -->
    <div class="swap-box">

      <!-- From -->
      <div class="swap-row">
        <span class="label">From</span>
        <input type="number" v-model="fromAmount" placeholder="0.0" />

        <select v-model="fromToken" class="token-select">
          <option value="GARCIA">GARCIA</option>
          <option value="USDC">USDC</option>
          <option value="ATOM">ATOM</option>
        </select>
      </div>

      <!-- To -->
      <div class="swap-row">
        <span class="label">To</span>
        <input type="number" v-model="toAmount" placeholder="0.0" />

        <select v-model="toToken" class="token-select">
          <option value="USDC">USDC</option>
          <option value="GARCIA">GARCIA</option>
          <option value="ATOM">ATOM</option>
        </select>
      </div>

      <!-- Swap Button -->
      <button class="swap-btn" @click="swapAction">
        🚀 Swap Now
      </button>

      <!-- LP Button -->
      <button class="lp-btn" @click="openLP">
        💧 Add Liquidity
      </button>

    </div>

  </div>
</template>

<script>
export default {
  name: "GarciaSwapComponent",

  data() {
    return {
      walletAddress: null,
      fromToken: "GARCIA",
      toToken: "USDC",
      fromAmount: "",
      toAmount: ""
    };
  },

  methods: {
    async connectWallet() {
      if (!window.keplr) {
        alert("Keplr wallet not found. Install Keplr first!");
        return;
      }

      try {
        await window.keplr.enable("garcia-1");
        const signer = window.keplr.getOfflineSigner("garcia-1");
        const accounts = await signer.getAccounts();

        this.walletAddress = accounts[0].address;
      } catch (e) {
        console.error(e);
        alert("Wallet connection failed.");
      }
    },

    swapAction() {
      alert("🚀 Swap module is coming soon!");
    },

    openLP() {
      alert("💧 Liquidity module is coming soon!");
    }
  }
};
</script>

<style scoped>
/* 전체 배경 */
.swap-container {
  padding: 40px;
  max-width: 420px;
  margin: auto;
  text-align: center;
  color: #b7d9ff;
  font-family: 'Roboto', sans-serif;
}

/* 제목 */
.title {
  font-size: 28px;
  font-weight: 900;
  color: #4db8ff;
  text-shadow: 0 0 15px #0099ff;
  margin-bottom: 25px;
}

/* 지갑 버튼 */
.connect-btn {
  padding: 14px 24px;
  background: linear-gradient(90deg, #0066ff, #00d0ff);
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 12px #008cff;
  transition: 0.2s;
}

.connect-btn:hover {
  box-shadow: 0 0 20px #33ccff;
  transform: scale(1.05);
}

/* 지갑 주소 박스 */
.wallet-box {
  background: rgba(0, 140, 255, 0.2);
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 14px;
  margin-bottom: 20px;
  border: 1px solid #33baff;
  box-shadow: 0 0 15px #008cff55;
}

/* 스왑 박스 */
.swap-box {
  margin-top: 20px;
  background: rgba(0, 40, 70, 0.4);
  border: 1px solid #1b7fff;
  border-radius: 18px;
  padding: 25px;
  backdrop-filter: blur(8px);
  box-shadow: 0 0 20px #005eff55;
}

/* ROW 디자인 */
.swap-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

/* 라벨 */
.label {
  width: 50px;
  text-align: left;
  font-weight: bold;
  color: #8bc9ff;
}

/* 입력창 */
input {
  width: 130px;
  padding: 10px;
  background: rgba(0, 140, 255, 0.1);
  border: 1px solid #4bb2ff;
  border-radius: 10px;
  color: white;
  text-align: right;
  font-size: 16px;
  box-shadow: 0 0 8px #008cff55 inset;
}

/* 드롭다운 */
.token-select {
  width: 90px;
  padding: 8px;
  background: rgba(0, 140, 255, 0.2);
  border: 1px solid #4bb2ff;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  box-shadow: 0 0 8px #008cff55;
}

/* Swap 버튼 */
.swap-btn {
  margin-top: 10px;
  width: 100%;
  padding: 15px;
  background: linear-gradient(90deg, #00aaff, #0066ff);
  border: none;
  border-radius: 14px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 18px #007bff;
  transition: 0.2s;
}

.swap-btn:hover {
  box-shadow: 0 0 28px #33ccff;
  transform: scale(1.03);
}

/* LP 버튼 */
.lp-btn {
  margin-top: 15px;
  width: 100%;
  padding: 15px;
  background: linear-gradient(90deg, #00ffcc, #009985);
  border: none;
  border-radius: 14px;
  color: white;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 18px #00ffaa55;
  transition: 0.2s;
}

.lp-btn:hover {
  box-shadow: 0 0 28px #00ffcc;
  transform: scale(1.03);
}
</style>
