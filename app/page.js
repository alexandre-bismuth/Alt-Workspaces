import Image from 'next/image'
import Title from '../components/title'
import About from '../components/about'

export default function Home() {
  return (
    <div className="snap-container">
      <Title />
      <About />
    </div>
  )
}
