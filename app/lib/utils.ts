import { cookies } from "next/headers"

export const BASEURL = process.env.NEXT_PUBLIC_APP_URL

export const getAllCookies = (): string => {
  const cookieStore = cookies()
  const cookie = cookieStore
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join(";")
  return cookie
}

export const fetchWithCookies = async <T>(
  endpoint: string,
  init?: RequestInit
): Promise<T> => {
  const cookie = getAllCookies()
  const response = await fetch(`${BASEURL}${endpoint}`, {
    headers: {
      cookie,
    },
    ...init,
  })

  return response.json()
}
