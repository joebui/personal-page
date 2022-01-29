import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

type FeatureItem = {
  title: string;
  image?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "About me",
    description: (
      <>
        My study, working experience, as well as some personal stuffs. But it
        will be in a friendly and less-formal way 😄
      </>
    ),
  },
  {
    title: "Blogging",
    description: (
      <>
        I believe in the power of sharing and open-sourcing and their benefits
        to the community
      </>
    ),
  },
  {
    title: "Project Cocoon",
    description: (
      <>
        A soon-to-be startup project I've been working on for more than a year
        with a group of enthusiastic software engineers
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
