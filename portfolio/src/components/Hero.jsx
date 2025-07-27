import photo from '../assets/img.jpg'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-photo">
        <img src={photo} alt="Kourosh" />
      </div>
      <div className="hero-content">
        <h1>Hey, I'm Kourosh!</h1>
        <p>
          I’m Kourosh, a Media Design student at Fontys University of Applied Sciences with a focus on Mobile App Development. I have experience in UI/UX design, front-end development, and project management. As Vice President of Proxy, the Fontys ICT study association, I coordinate events and manage external communications, bringing strong organizational and teamwork skills to every project.
        </p>
        <div className="hero-buttons">
          <a href="#about"><button>About me</button></a>
          <a href="#contact"><button>Contact me</button></a>
        </div>
      </div>
    </section>
  )
}
