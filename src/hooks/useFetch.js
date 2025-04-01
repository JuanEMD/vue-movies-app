import { ref } from 'vue'
import axios from 'axios'

export const useFetch = (url, config = {}) => {
  const data = ref(null)
  const response = ref(null)
  const error = ref(null)
  const isLoading = ref(false)

  const fetch = async () => {
    isLoading.value = true
    try {
      const res = await axios.get(url, config)
      response.value = res
      data.value = res.data
    } catch (e) {
      error.value = e
    } finally {
      isLoading.value = false
    }
  }

  !config.skip && fetch()

  return { data, response, error, isLoading, fetch }
}
