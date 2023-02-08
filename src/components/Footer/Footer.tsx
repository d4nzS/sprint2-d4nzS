import { FC } from 'react';

import classes from './Footer.module.scss';

const SOCIAL_NETWORKS = ['facebook', 'instagram', 'vk', 'linkedin'];

const Footer: FC = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.copyright}>
                <small className={classes.text}>© 2020-2023 Cleverland. </small>
                <small className={classes.text}>Все права защищены.</small>
            </div>
            <nav className={classes.nav}>
                <ul className={classes.list}>
                    {SOCIAL_NETWORKS.map(socialNetwork => (
                        <li key={socialNetwork}>
                            <a href={`https://${socialNetwork}.com`}>
                                <i className={classes[`${socialNetwork}-icon`]}/>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
