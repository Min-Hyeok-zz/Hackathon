<template>
  <div><div class="loadAnimation"><div class="loadBg"></div></div>
    <header id="header">
      <div class="logo"><nuxt-link :to="`/`"><i>Usit!</i></nuxt-link></div>
      <nav id="nav">
        <form action="" method="post" class="search-form">
          <input type="text" name="s" class="form-control" required placeholder="검색">
          <button type="submit"><i class="fas fa-search"></i></button>
        </form>
      </nav>
    </header>
    <aside id="aside">
      <div class="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul id="gnb">
        <li><nuxt-link to="/member/join">회원가입</nuxt-link></li>
        <li><nuxt-link to="/member/login">로그인</nuxt-link></li>
        <li>로그아웃</li>
        <li> <nuxt-link to="/member/mypage">마이페이지</nuxt-link></li>
      </ul>
    </aside>
    <nuxt/>
  </div>
</template>
<script>
export default {
  
}
</script>
<style src="~/assets/css/style.css" />
