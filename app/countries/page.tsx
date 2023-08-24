"use client"

import { BASEURL } from "../lib/utils"

export default async function Index() {
  console.log(BASEURL)
  // const response = await fetch(BASEURL + "/api/country", {
  //   cache: "no-store",
  // })
  // const countries = await response.json()
  // console.log(countries)

  return (
    <></>
    // <ul className="my-auto text-foreground">{JSON.stringify(countries)}</ul>
  )
}
