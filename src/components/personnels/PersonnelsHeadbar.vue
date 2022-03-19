<template>
  <div>
    <div class="headerStyle">
      <div>
        <h1>{{ title }}</h1>
        <h3>{{ subtitle }}</h3>
      </div>
      <div>
        <b-button class="searchBtn" variant="light"
          ><font-awesome-icon icon="fa-solid fa-search" class="leftIcon" />Find
          Personnels</b-button
        >
        <b-button class="addBtn" variant="light"
          >ADD PERSONNEL
          <font-awesome-icon icon="fa-solid fa-plus" class="rightIcon"
        /></b-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PersonnelHeadbar',
  data () {
    return { title: 'Personnel-List', subtitle: 'List of all personnels' }
  }
}
</script>
<style>
.leftIcon {
  margin-right: 10px;
}

.rightIcon {
  margin-left: 10px;
}

.headerStyle {
  width: 80vw;
  padding: 10px;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border-radius: 10px;
}

h3 {
  opacity: 70%;
}

.searchBtn {
  border: 1px solid;
  width: 200px;
  height: 3rem;
}

.addBtn {
  border: 1px solid #2fbec0;
  width: 200px;
  height: 3rem;
  background-color: #2fbec0;
  color: white;
}

.addBtn:hover {
  background-color: #2fbec0;
  opacity: 70%;
  color: white;
  border: 1px solid #2fbec0;
}

.searchBtn:hover {
  border: 1px solid;
  background-color: #e5e5e5;
}
</style>
