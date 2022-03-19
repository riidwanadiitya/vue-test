<template>
  <div>
    <PersonnelsHeadbar />
    <PersonnelsBody :limit-data="limitData" :data="dataFetchAll" />
    <div class="footerStyle">
      <button
        @click="prevPage"
        class="btnPrev"
        :disabled="limitData.start === 0"
      >
        <b-icon icon="chevron-left"></b-icon> Previous Page
      </button>
      <button
        @click="nextPage"
        class="btnNext"
        :disabled="limitData.finish === 28"
      >
        Next Page <b-icon icon="chevron-right"></b-icon>
      </button>
    </div>
  </div>
</template>
<script>
import PersonnelsHeadbar from '../components/personnels/PersonnelsHeadbar.vue'
import PersonnelsBody from '../components/personnels/PersonnelsBody.vue'
import axios from 'axios'

export default {
  name: 'PersonnelList',
  components: {
    PersonnelsHeadbar,
    PersonnelsBody
  },
  data () {
    return {
      dataFetchAll: [],
      limitData: { start: 0, finish: 4 }
    }
  },
  methods: {
    async fetchingData () {
      const req = await axios.get('https://randomuser.me/api/?results=28')
      this.dataFetchAll = req.data.results
      console.log(this.dataFetchAll)
    },
    nextPage () {
      this.limitData.start = this.limitData.start + 4
      this.limitData.finish = this.limitData.finish + 4
    },
    prevPage () {
      this.limitData.start = this.limitData.start - 4
      this.limitData.finish = this.limitData.finish - 4
    }
  },
  mounted () {
    this.fetchingData()
  }
}
</script>

<style>
.btnNext {
  padding: 10px;
  width: 150px;
  margin-left: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  border: 0;
  background: transparent;
}
.btnPrev {
  margin-right: 5px;
  padding: 10px;
  width: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  border: 0;
  background: transparent;
}

.footerStyle {
  width: 80vw;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
