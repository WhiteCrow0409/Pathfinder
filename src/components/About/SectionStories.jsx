import "./About.css";

// Individual Story Component
const Story = ({ imgSrc, altText, caption, heading, text }) => (
  <div className="story">
    <figure className="story__shape">
      <img src={imgSrc} alt={altText} className="story__img" />
      <figcaption className="story__caption">{caption}</figcaption>
    </figure>
    <div className="story__text">
      <h3 className="heading-tertiary u-margin-bottom-small">{heading}</h3>
      <p>{text}</p>
    </div>
  </div>
);

// Section Stories Component
const SectionStories = () => (
  <section className="section-stories">
    <div className="row">
      <Story
        imgSrc="https://bsa.web.unc.edu/wp-content/uploads/sites/14595/2019/10/kushal_student_profile.jpg"
        altText="Person on a Tour"
        caption="Mary Smith"
        
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatibus accusantium esse quibusdam repellat molestiae a modi non, incidunt nisi minus labore quas blanditiis mollitia autem sapiente sint laboriosam fugiat?"
      />
    </div>

   
  </section>
);

export default SectionStories;  