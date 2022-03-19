<template>
  <div id="headbar">
    <div>
      <b-img
        src="https://d1.awsstatic.com/events/aws-hosted-events/2018/ASEAN/logo_gadjian.668caaac8c73023ab107fbc256ef31345f5d53a2.png"
        alt="Logo"
        class="logo"
      ></b-img>
    </div>
    <div class="headbarProfile">
      <div class="greetings">
        <span>Hello, <span class="colorPrimary">Gadjian User</span></span>
      </div>
      <div class="circleAvaContainer">
        <b-img
          src="https://picsum.photos/125/125/?image=58"
          alt="photo"
          class="circlePhoto"
        ></b-img>
      </div>
    </div>
  </div>
</template>

<style>
#headbar {
  width: 100vw;
  height: 10vh;
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 20px 0 20px;
  justify-content: space-between;
}

.logo {
  height: 7vh;
}

.greetings {
  font-size: 30px;
}

.headbarProfile {
  display: flex;
  align-items: center;
}

.colorPrimary {
  color: #2fbec0;
}

.circleAvaContainer {
  height: 7vh;
  aspect-ratio: 1/1;
  border-radius: 100%;
  background-color: red;
  margin-left: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circlePhoto {
  width: 7vh;
}
</style>
