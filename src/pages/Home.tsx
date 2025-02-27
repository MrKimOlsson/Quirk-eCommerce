import Hero from "../components/Hero"
import '../styles/layout.scss';

export const Home = () => {
  return (
    <>
      <Hero
        imageIndex={0}
        text="Be proud of your"
      />
      <section className="post-hero-content-wrapper">
        <h2>Products:</h2>
        <p>display product grid...</p>
      </section>
    </>
  )
}
