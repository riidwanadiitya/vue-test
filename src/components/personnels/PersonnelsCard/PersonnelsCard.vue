<template>
  <div style="width: 100%">
    <div class="containerCard">
      <div
        v-for="(item, index) in userData.slice(
          limitData.start,
          limitData.finish
        )"
        :key="index"
      >
        <b-card class="cardStyle">
          <b-card-header class="cardHeader">
            <div>
              Personnel ID:
              <span class="personnelId">{{ item.id.value }}</span>
            </div>
            <div>
              <b-icon icon="three-dots"></b-icon>
            </div>
          </b-card-header>
          <b-card-body>
            <div class="contentCardHeader">
              <div class="cardImgContainer">
                <b-img
                  :src="item.picture.large"
                  class="imgThumb"
                  alt="Responsive image"
                ></b-img>
              </div>
            </div>
            <div class="contentCardBody">
              <div>
                <span><strong>Name</strong></span
                ><br />
                <span class="userData"
                  >{{ item.name.first }} {{ item.name.last }}</span
                >
              </div>
              <div>
                <span><strong>Telephone</strong></span
                ><br />
                <span class="userData">{{ item.phone }}</span>
              </div>
              <div>
                <span><strong>Birthday</strong></span
                ><br />
                <span class="userData"
                  >{{ item.dob.date.slice(8, 10) }}-{{
                    item.dob.date.slice(5, 7)
                  }}</span
                >
              </div>
              <div>
                <span><strong>Email</strong></span
                ><br />
                <span class="userData">{{ item.email }}</span>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataUsers: [
        {
          name: 'Ridwan',
          phone: 12345678,
          birthday: '07-25',
          email: 'riidwanaditya@gmail.com'
        },
        {
          name: 'Aditya',
          phone: 12345678,
          birthday: '07-25',
          email: 'riidwanaditya@gmail.com'
        },
        {
          name: 'Saputra',
          phone: 12345678,
          birthday: '07-25',
          email: 'riidwanaditya@gmail.com'
        },
        {
          name: 'Ridwan',
          phone: 12345678,
          birthday: '07-25',
          email: 'riidwanaditya@gmail.com'
        }
      ],
      dataFetchAll: []
    }
  },
  props: ['userData', 'limitData']
}
</script>

<style>
.containerCard {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.userData {
  font-size: 18px;
  opacity: 80%;
}

.imgThumb {
  width: 400px;
}

.contentCardBody {
  width: 100%;
}

.cardImgContainer {
  width: 60%;
  aspect-ratio: 1/1;
  background-color: white;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.contentCardHeader {
  width: 100%;
  aspect-ratio: 3/2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cardHeader {
  display: flex;
  justify-content: space-between;
}

.personnelId {
  color: #2fbec0;
}

.cardStyle {
  width: 19rem;
}
</style>
