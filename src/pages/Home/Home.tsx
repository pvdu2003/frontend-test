import Button from "../../shared/components/Button/Button";
import FeatureItem from "../../shared/components/Feature/FeatureItem";
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
    </>
  );
}

export default Home;
