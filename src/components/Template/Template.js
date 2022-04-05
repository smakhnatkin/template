import cx from 'classnames';
import styles from  './Template.module.css';

export const Template = ({
    children,
    className,
    onChange,
    value,
    ...props
}) => {
    // ...
    return (
        <div
            className={cx(styles._, className)}
            {...props}
        >
            <input value={value} onChange={onChange}>{value}</input>
            {children}
        </div>
    )
}


