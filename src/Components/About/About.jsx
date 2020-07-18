import { Icon, Image } from "semantic-ui-react";
import style from "./About.module.css";
import pic from "../../Assets/myPic.jpg";

import React from "react";

const About = () => {
  return (
    <div className={style.Container}>
      <Image src={pic} size="small" circular style={{ margin: 10 }} />
      <span>
        Made By: <h1>Anish Saha</h1>
      </span>
      <span className={style.iconContainer}>
        <a
          href="https://www.facebook.com/anish.saha.77770/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={style.icon}>
            <Icon name="facebook" size="big" color="black" />
            Anish Saha
          </span>
        </a>
        <span className={style.icon}>
          <Icon name="location arrow" size="big" />
          Kolkata 700064
        </span>
        <span className={style.icon}>
          <Icon name="mail" size="big" />
          anishsaha61@gmail.com
        </span>
      </span>
      <span style={{ margin: 10 }}>
        <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
        Anish Saha 2020
      </span>
    </div>
  );
};

export default About;
