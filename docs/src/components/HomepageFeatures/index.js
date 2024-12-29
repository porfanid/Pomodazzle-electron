import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Boost Your Productivity',
        Svg: require('../../../static/svgs/solid/rocket.svg').default,
        description: (
            <>
                Maximize your focus and efficiency using the proven Pomodoro technique.
                Break tasks into manageable chunks and achieve more in less time.
            </>
        ),
    },
    {
        title: 'Customizable Timer',
        Svg: require('../../../static/svgs/regular/calendar.svg').default,
        description: (
            <>
                Tailor your Pomodoro sessions to fit your workflow. Adjust focus and
                break durations to create a personalized experience.
            </>
        ),
    },
    {
        title: 'Cross-Platform Support',
        Svg: require('../../../static/svgs/solid/laptop-code.svg').default,
        description: (
            <>
                Use Pomodazzle on Windows, macOS, and Linux. Start focusing no matter
                which platform you prefer.
            </>
        ),
    },
    {
        title: 'Minimalist Design',
        Svg: require('../../../static/svgs/solid/compass-drafting.svg').default,
        description: (
            <>
                Enjoy a distraction-free interface that keeps you focused on your tasks
                and lets you start working with just one click.
            </>
        ),
    },
    {
        title: 'Notifications & Alerts',
        Svg: require('../../../static/svgs/regular/bell.svg').default,
        description: (
            <>
                Get reminders for breaks and focus sessions with simple and non-intrusive
                notifications, helping you stay on track.
            </>
        ),
    },
];

function Feature({Svg, Img, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                {Svg ? (
                    <Svg className={styles.featureSvg} role="img" />
                ) : Img ? (
                    <img src={Img} alt={title} className={styles.featureSvg} />
                ) : null}
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
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
