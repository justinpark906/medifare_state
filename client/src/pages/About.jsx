import '../styles/About.css';
import billImage from '../assets/about.png'; // Make sure your image is in src/assets

function About() {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={billImage} alt="Medical bill" />
      </div>
      <div className="about-text">
        <p className="founded">Founded in 2021</p>
        <h2 className="company-name">MediFare Inc.</h2>
        <p>Accidents happen. Medical debt shouldn’t.</p>
        <p>
          Medical debt is the leading cause of bankruptcy in the United States. We aim to
          share cash prices as well as negotiated prices from insurance companies for
          common medical treatments and surgical procedures so you can know what to expect
          before you receive the bill.
        </p>
      </div>
    </div>
  );
}

export default About;