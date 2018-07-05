<template>
  <section class="content">
    <h1 class="chat-name">1:1 채팅</h1>
    <div class="chat">
        <div class="c-list left">
            <div class="user"></div>
            <div class="c-text">
                May i help you?
                <p>2018,07,05</p>
            </div>
        </div>
        <div class="c-list right">
            <div class="me"></div>
            <div class="c-text">
                Oh, I want some ring
                <p>2018,07,05</p>
            </div>
        </div>
        <div class="c-list left">
            <div class="user"></div>
            <div class="c-text">
                Yes, here
                <p>2018,07,05</p>
            </div>
        </div>
        <div class="c-list left">
            <div class="user"></div>
            <div class="c-text">
                Thank You
                <p>2018,07,05</p>
            </div>
        </div>
        <div class="c-list right">
            <div class="me"></div>
            <div class="c-text">
                Your welcome
                <p>2018,07,05</p>
            </div>
        </div>
        <div class="c-list left">
            <div class="user"></div>
            <div class="c-text">
                Ok, Bye
                <p>2018,07,05</p>
            </div>
        </div>
    </div>
    <form action="" method="post" class="chat-form">
        <input type="text" name="chat" placeholder="send message">
        <button type="button"><i class="fas fa-comment"></i></button>
    </form>
    <button class="chat-pay">결제하기</button>
    <div class="pay">
        <div class="before">
            <p class="false">취소</p>
            <p>등록된 지문을 인식 해 주세요</p>
            <i class="fas fa-fingerprint"></i>
            <p>또는 PIN 번호 사용</p>
        </div>
        <div class="after hide">
            <i class="fab fa-gratipay"></i>
            <p>완료되었습니다.</p>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    
}
</script>

<style>

</style>
