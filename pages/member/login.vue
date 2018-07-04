<template>
  <section class="content">
    <div class="form-wrap">
      <h1 class="title"><img src="../../assets/image/logo.png" alt=""></h1>
        <form action="" method="post" class="form" @submit="login">
            <input type="text" name="id" placeholder="아이디" class="form-control" required>
            <input type="text" name="subject" placeholder="글제목" class="form-control" required>
            <button type="submit">로그인</button>
        </form>
    </div>
  </section>
</template>

<script>
export default {
    methods: {
      login (e) {
        e.preventDefault();
        alert('로그인 되었습니다.')
        this.$router.push('/')
      }
    }
}
</script>

<style>

</style>
