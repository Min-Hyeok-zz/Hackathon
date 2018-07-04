<template>
  <section class="content">
    <div class="form-wrap">
      <h1 class="title">회원가입</h1>
        <form action="" method="post" class="form" @submit="join">
            <input type="text" name="id" placeholder="아이디" class="form-control" required>
            <input type="password" name="pw" placeholder="비밀번호" class="form-control" required>
            <input type="text" name="name" placeholder="이름" class="form-control" required>
            <button type="submit" class="form-btn">회원가입</button>
        </form>
    </div>
  </section>
</template>

<script>
import mh from '~/plugins/mh'
export default {
    methods: {
      join (e) {
        e.preventDefault();
        alert('회원가입이 완료되었습니다.')
        this.$router.push('/member/login')
      }
    }
}
</script>

<style>

</style>
