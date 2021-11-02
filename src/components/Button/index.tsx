import type { NextComponentType, NextPageContext } from 'next';
import { PropsWithChildren } from 'react';

import styles from './Button.module.css';

interface ButtonProps {}

const Button: NextComponentType<NextPageContext, any, ButtonProps> = (
    props: PropsWithChildren<ButtonProps>) => {
    return (
        <div>
            <button className={styles.btn}>
                {props.children}
            </button>
        </div>
    )
}

export default Button
