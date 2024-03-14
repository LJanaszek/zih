import React, { PropsWithChildren } from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';

export interface ButtonLikeProps {
    buttonType?: 'primary' | 'inverted',
}

export const ButtonLike = ({buttonType, children}: PropsWithChildren<ButtonLikeProps>) => {
    const classname = classnames(styles.buttonLike, {
        [styles.inverted]: buttonType === 'inverted'
    });

    return <div className={classname}>{children}</div>
}
