import Button from "../../shared/components/Button/Button";
import styles from "./Profile.module.css";
function Profile() {
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
    </>
  );
}

export default Profile;
