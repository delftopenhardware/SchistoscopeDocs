import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Features',
    Svg: require('@site/static/img/scope2.svg').default,
    description: (
      <> • Automated XYZ stage, automatic focusing, and automatic scanning of regions of interest in prepared microscope slides.  
      • On device image analysis with Raspberry Pi 4 and Coral Edge TPU. • Image Stacking functioning. • 3D printed parts for easy local manufacturing and maintenance. • Easy to operate • Easy to clean
      </>
    ),
  },
  {
    title: 'Background',
    Svg: require('@site/static/img/scope1.svg').default,
    description: (
      <>
        For many parasitic diseases, the microscopic examination of clinical samples such as urine and stool still serves as the diagnostic reference standard, primarily because microscopes are accessible and cost-effective. However, conventional microscopy is laborious, requires highly skilled personnel, and is highly subjective. Requirements for skilled operators, coupled with the cost and maintenance needs of the microscopes, which is hardly done in endemic countries, presents grossly limited access to the diagnosis of parasitic diseases in resource-limited settings. The urgent requirement for the management of tropical diseases such as schistosomiasis, which is now focused on elimination, has underscored the critical need for the creation of access to easy-to-use diagnosis for case detection, community mapping, and surveillance. In this paper, we present a low-cost automated digital microscope—the Schistoscope—which is capable of automatic focusing and scanning regions of interest in prepared microscope slides, and automatic detection of Schistosoma haematobium eggs in captured images. The device was developed using widely accessible distributed manufacturing methods and off-the-shelf components to enable local manufacturability and ease of maintenance. For proof of principle, we created a Schistosoma haematobium egg dataset of over 5000 images captured from spiked and clinical urine samples from field settings and demonstrated the automatic detection of Schistosoma haematobium eggs using a trained deep neural network model. The experiments and results presented in this paper collectively illustrate the robustness, stability, and optical performance of the device, making it suitable for use in the monitoring and evaluation of schistosomiasis control programs in endemic settings.
      </>
    ),
  },

];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
