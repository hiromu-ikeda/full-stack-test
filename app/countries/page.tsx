import { Suspense } from "react"
import { fetchWithCookies } from "../lib/utils"

type Country = {
  name: string
}

const CountriesFeed = async ({
  countriesPromise,
}: {
  countriesPromise: Promise<Country[]>
}) => {
  const countries = await countriesPromise

  return (
    <>
      {countries.map((country) => (
        <p>{country.name}</p>
      ))}
    </>
  )
}

export default async function Index() {
  const countriesPromise = fetchWithCookies<Country[]>(`/api/country`, {
    cache: "no-store",
  })

  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <CountriesFeed countriesPromise={countriesPromise} />
      </Suspense>
    </div>
  )
}
