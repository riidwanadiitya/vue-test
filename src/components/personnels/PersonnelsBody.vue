<template>
  <div class="bodyStyle">
    <PersonnelsCard :user-data="data" :limit-data="limitData"/>
  </div>
</template>
<script>
import PersonnelsCard from './personnelsCard/PersonnelsCard.vue'
export default {
  components: {
    PersonnelsCard
  },
  props: ['limitData', 'data']
}
</script>
<style>
.bodyStyle {
  width: 80vw;
  padding: 10px;
  margin: 20px;
  display: flex;
}
</style>
