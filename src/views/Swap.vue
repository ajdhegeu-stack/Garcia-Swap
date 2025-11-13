$path = "C:\Users\ajdhe\garcia-swap\src\views\SwapPage.vue"
@"
<template>
  <div class="swap-container">
    <h1>GarciaSwap 💱</h1>
    <p>토큰을 교환할 수 있는 Garcia 체인 전용 스왑 시스템입니다.</p>

    <div class="swap-box">
      <div class="input-group">
        <label>From</label>
        <input type="text" placeholder="GARCIA" v-model="fromToken" />
      </div>

      <div class="input-group">
        <label>To</label>
        <input type="text" placeholder="USDC" v-model="toToken" />
      </div>

      <button @click="swapTokens">스왑하기</button>

      <p v-if="swapResult" class="result">{{ swapResult }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SwapPage',
  data() {
    return {
      fromToken: '',
      toToken: '',
      swapResult: ''
    }
  },
  methods: {
    swapTokens() {
      if (!this.fromToken || !this.toToken) {
        this.swapResult = '토큰 정보를 모두 입력해주세요.';
      } else {
        this.swapResult = `${this.fromToken} ➡️ ${this.toToken} 교환이 완료되었습니다!`;
      }
    }
  }
}
</script>

<style scoped>
.swap-container {
  text-align: center;
  padding: 50px;
  background-color: #000;
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
}

.swap-box {
  margin-top: 20px;
  display: inline-block;
  padding: 20px;
  background-color: #111;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

.input-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.input-group input {
  width: 200px;
  padding: 8px;
  border: none;
  border-radius: 5px;
}

button {
  background-color: #00b894;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #00a884;
}

.result {
  margin-top: 15px;
  color: #00ffcc;
}
</style>
"@ | Out-File -FilePath $path -Encoding utf8
