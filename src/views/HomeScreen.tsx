import { BtnMyLocation, MapViews, ReactLogo, SearchBar } from '../components'

export const HomeScreen = () => {
  return (
    <div>
      <SearchBar />
        <MapViews />
        <BtnMyLocation />
        <ReactLogo />
    </div>
  )
}
