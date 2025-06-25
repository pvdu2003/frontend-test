import Button from "../../shared/components/Button/Button";
import FeatureItem from "../../shared/components/Feature/FeatureItem";
import Slider from "../../shared/components/Slider/Slider";
import TestimonialCard from "../../shared/components/Testimonial/TestimonialCard";
import styles from "./Home.module.css";
function Home() {
  const features = [
    {
      title: "Search Data",
      description: "Easily search your stored data anytime.",
      icon: "./images/feature1.png",
    },
    {
      title: "24 Hours Access",
      description: "Your data is available 24/7 with strong protection.",
      icon: "./images/feature2.png",
    },
    {
      title: "Print Out",
      description: "Get a printable version of your data on demand.",
      icon: "./images/feature3.png",
    },
    {
      title: "Security Code",
      description: "Top-tier encryption ensures your data is safe.",
      icon: "./images/feature4.png",
    },
  ];

  const testimonials = [
    {
      name: "John Fang1",
      image: "./images/avatar1.jpg",
      company: "wordfaang.com",
      text: "Suspendisse ultrices at diam lectus nullam.1 ",
    },
    {
      name: "Jane Doe2",
      image: "./images/avatar1.jpg",
      company: "janedoe.io",
      text: "Suspendisse ultrices at diam lectus nullam.2 Nisl, sagittis viverra enim erat tortor2 ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    },
    {
      name: "John Fang3",
      image: "./images/avatar1.jpg",
      company: "wordfaang.com",
      text: "Nisl, sagittis viverra enim erat tortor ultricies massa3 turpis. Arcu pulvinar aenean3 nam laoreet nulla.",
    },
    {
      name: "Jane Doe4",
      image: "./images/avatar1.jpg",
      company: "janedoe.io",
      text: "Nisl, Suspendisse ultrices at diam lectus nullam. 4Nisl, sagittis viverra enim erat4 tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.",
    },
  ];
  return (
    <>
      <section className={styles.hero}>
        <div>
          <h1>Save your data storage here.</h1>
          <p>
            Data Warehouse is a data storage area that has been tested for
            security, so you can store your data here safely but not be afraid
            of being stolen by others.
          </p>
          <Button text="Learn More" />
        </div>
        <img src="./images/hero.png" alt="Illustration" />
      </section>
      <section className={styles.features}>
        <h2>Features</h2>
        <div className={styles.grid}>
          {features.map((f, idx) => (
            <div key={idx}>
              <FeatureItem
                title={f.title}
                description={f.description}
                icon={f.icon}
              />
            </div>
          ))}
        </div>
      </section>
      <section className={styles.testimonials}>
        <h2>Testimonials</h2>
        <Slider>
          {testimonials.map((t, idx) => (
            <TestimonialCard
              key={idx}
              name={t.name}
              image={t.image}
              company={t.company}
              text={t.text}
            />
          ))}
        </Slider>
      </section>
    </>
  );
}

export default Home;
