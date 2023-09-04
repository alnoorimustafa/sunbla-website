<script lang="ts">
interface petition {
  id: number
  attributes: {
    hideName: boolean
    description: string
    title: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    image: {
      data: string
    }
    governorate: {
      data: {
        id: number
        attributes: {
          arName: string
        }
      }
    }
    category: {
      data: {
        id: number
        attributes: {
          arName: string
        }
      }
    }
    petition_stat: {
      data: {
        id: number
        attributes: {
          views: string
          shares: string
        }
      }
    }
  }
}

export default {
  data() {
    return {
      petitionData: null as petition | null,
      loading: false
    }
  },
  mounted() {
    // Fetch data when the component is mounted
    this.fetchPetitionData()
  },
  methods: {
    fetchPetitionData() {
      this.loading = true
      fetch(`https://sunbla.azurewebsites.net/api/petitions/${this.$route.params.id}?populate=*`)
        .then((res) => {
          this.loading = false
          if (res.status === 200) {
            return res.json()
          } else {
            throw new Error('Failed to fetch data')
          }
        })
        .then((data) => {
          console.log(data)
          this.petitionData = data.data as petition
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
        <p>
          <span class="text-green">المنطقة :</span>
          <span class="mx-1">
            {{ petitionData?.attributes?.governorate.data.attributes.arName }}
          </span>
        </p>
        <p>
          <span class="text-green">الفئة :</span>
          <span class="mx-1">
            {{ petitionData?.attributes?.category.data.attributes.arName }}
          </span>
        </p>
        <p>
          <span class="text-green">العنوان :</span>
          <span class="mx-1">
            {{ petitionData?.attributes?.title }}
          </span>
        </p>
        <p>
          <span class="text-green">الوصف :</span>
          <span class="mx-1">
            {{ petitionData?.attributes?.description }}
          </span>
        </p>
        <p>
          <span class="text-green">المشاهدات :</span>
          <span class="mx-1">
            {{ petitionData?.attributes.petition_stat.data.attributes.views }}
          </span>
        </p>
        <p>
          <span class="text-green">المشاركات :</span>
          <span class="mx-1">
            {{ petitionData?.attributes?.petition_stat.data.attributes.shares }}
          </span>
        </p>
        <p>
          <span class="text-green">تاريخ النشر :</span>
          <span class="mx-1">
            {{
              petitionData?.attributes?.createdAt
                ? new Date(petitionData?.attributes?.publishedAt).toLocaleDateString()
                : ''
            }}
          </span>
        </p>
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
