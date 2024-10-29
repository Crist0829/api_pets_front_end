import api from "@/services/api"
import { useState, useEffect } from "react"

const useFetch = <T>(url: string, key?: string, method = 'get', requestData = null) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api({ method, url, data: requestData })
        if (key) {
          setData(response.data[key])
        } else {
          setData(response.data)
        }
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url, key])

  return { data, loading, error }
}

export { useFetch }