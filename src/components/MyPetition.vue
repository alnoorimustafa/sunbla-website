<script lang="ts">
import api from '../utilities/api'
interface petition {
  id: number
  hideName: boolean
  description: string
  title: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  image: string
  governorate: {
    id: string
    arName: string
    enName: string
    isCountry: boolean
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
  category: {
    id: number
    arName: string
    enName: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
  creator: string
  signers: number
  petition_stat: {
    data: {
      id: number
      attributes: {
        views: string
        shares: string
      }
    }
  }
  content_reports: string
  createdBy: string
  updatedBy: string
}

interface Res {
  data: [Data]
}
interface Data {
  id: string
}

export default {
  data() {
    return {
      petitionData: null as petition | null,
      loading: false,
      phone: '',
      error: '',
      clicked: false,
      signing: false,
      done: false,
      participated: 'false'
    }
  },
  computed: {
    international() {
      return '+964' + this.phone.slice(1)
    },
    isValidPhoneNumber() {
      // Use a regular expression to validate the phone number
      const phoneNumberPattern = /^07\d{9}$/
      return phoneNumberPattern.test(this.phone)
    }
  },
  mounted() {
    // Fetch data when the component is mounted
    this.fetchPetitionData()
    try {
      this.participated = localStorage.getItem(`${this.$route.params.id}`) as string
      console.log(this.participated === this.$route.params.id)
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async handleClick() {
      if (this.phone.length > 11 || this.phone.length < 11) {
        this.error = '  enter valid number  '
        return
      }
      this.signing = true
      this.clicked = true
      const existUser = (await api.get(`users?filters[username][$eq]=${this.phone}`)) as Res
      try {
        if (existUser.data.length > 0) {
          const newPetition = await api.put(`petitions/${this.$route.params.id}`, {
            data: {
              signers: {
                connect: [existUser.data[0].id]
              }
            }
          })
          if (newPetition.ok) {
            this.done = true
            localStorage.setItem(`${this.$route.params.id}`, `${this.$route.params.id}`)
            this.fetchPetitionData()
          } else {
            this.error = 'please retry again later'
          }
        } else {
          const res = await api.post(`users`, {
            username: this.phone,
            email: `${this.phone}@petition.com`,
            password: this.phone,
            role: 2
          })
          const data = res.data as { id: string }
          if (data.id) return
          const newPetition = await api.put(`petitions/${this.$route.params.id}`, {
            data: {
              signers: {
                connect: [data.id]
              }
            }
          })
          if (newPetition.ok) {
            console.log('done')
            this.done = true
            localStorage.setItem(`${this.$route.params.id}`, `${this.$route.params.id}`)
            this.fetchPetitionData()
          } else {
            this.error = 'please retry again later'
          }
        }
        this.signing = false
      } catch (error) {
        console.log(error)
      }
    },
    async fetchPetitionData() {
      this.loading = true
      await api
        .get(`petitions/${this.$route.params.id}?populate=*`)
        .then((res) => {
          this.loading = false
          if (res.status === 200) {
            this.petitionData = res.data as petition
            console.log(res.data)
          } else {
            throw new Error('Failed to fetch data')
          }
        })
        .catch((error) => console.error(error))
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="my-5">
      <div v-if="petitionData && !loading">
        <div class="d-flex align-items-center justify-content-center">
          <h1 class="fs-2">حملة</h1>
          <span class="fs-6 mx-2">رقم : {{ petitionData?.id }}</span>
        </div>
        <h3 class="text-center text-green">
          {{ petitionData.title }}
        </h3>
        <p>
          <span class="text-green">المشاركون :</span>
          <span class="mx-1"> {{ petitionData.signers }} </span>
        </p>
        <p>
          <span class="text-green">الوصف :</span>
          <span class="mx-1"> {{ petitionData.description }} </span>
        </p>
        <p>
          <span class="text-green">المنطقة :</span>
          <span class="mx-1"> {{ petitionData.governorate.arName }} </span>
        </p>
        <p>
          <span class="text-green">الفئة :</span>
          <span class="mx-1"> {{ petitionData.category.arName }} </span>
        </p>
        <p>
          <span class="text-green">تاريخ النشر :</span>
          <span class="mx-1">
            {{
              petitionData?.createdAt
                ? new Date(petitionData?.publishedAt).toLocaleDateString()
                : ''
            }}
          </span>
        </p>
        <div class="my-5 text-center" v-if="!signing && !done && participated !== $route.params.id">
          <input
            maxlength="11"
            minlength="11"
            v-model="phone"
            type="text"
            class="form-control mb-4"
            placeholder="رقم الموبايل"
          />

          <p v-if="!isValidPhoneNumber && clicked" style="color: red">
            الرجاء ادخال رقم موبايل صحيح يبدأ ب07 ويتكون من 11 رقم
          </p>
          <div v-if="error" class="text-center text-danger">
            <p>
              {{ error }}
            </p>
          </div>
          <button @click="handleClick" class="btn green text-white">التوقيع على الحملة</button>
        </div>
        <div v-else-if="signing && !done" class="text-center">
          <p>الرجاء الانتظار ...</p>
        </div>
        <div v-else-if="done || participated === $route.params.id" class="text-center text-green">
          <p>تم المشاركة في الحملة بنجاح</p>
          <p>شكرا لك</p>
        </div>
      </div>
      <div class="text-center" v-if="!petitionData && !loading">
        <h1 class="fs-2">لا يمكن ايجاد الحملة</h1>
      </div>
      <div v-if="!petitionData && loading" class="text-center">
        <p>جاري التحميل</p>
      </div>
    </div>
  </div>
</template>
