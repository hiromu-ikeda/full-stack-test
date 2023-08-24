export default async function Index() {
  const response = await fetch("http://localhost:3000/api/country", {
    cache: "no-store",
  })
  const countries = await response.json()

  return (
    <ul className="my-auto text-foreground">{JSON.stringify(countries)}</ul>
  )
}
