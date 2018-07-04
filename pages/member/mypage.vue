<template>
  <section class="content">
    <div class="mypage">
      <div class="m-img">
        <img src="../../assets/image/profile.png" alt="img">
        <p>Sarah</p>
      </div>
      <div class="m-content">
        서울 역삼동 거래 선호합니다.
      </div>
      <div class="m-box">
        <div>
          <p>신뢰도<br><span>69%</span></p>
        </div>
        <div>
          <p>거래성사율<br><span>87% ({{ list['data']['txcount'] }})</span></p>
        </div>
        <div>
          <p>거주지역<br><span>역삼동</span></p>
        </div>
      </div>
      <button type="button" @click="Token">more</button>
      <ul></ul>
    </div>
  </section>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
export default {
  async data () {
    return {
      list: [],
      a: ""
    }
  },
  asyncData ({ params }, callback) {
    axios.get(`http://192.168.43.52:5000/`)
    .then((res) => {
      callback(null, {
        list: res,
        a: res['data']['data']
      })
    })
  },
  methods: {
    Token () {
      const a = `https://ropsten.etherscan.io/tx/`
      const b = this.list['data']['data']
      location.href=a+b
    }
  }
}
</script>

<style>

</style>
