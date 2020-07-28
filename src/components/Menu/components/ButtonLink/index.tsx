import React, {FC} from 'react';


export const ButtonLink: FC<{href: string, className: string}> = (props) => {
    const href = props.href;
    const className = props.className;

    return (
        <a className={className} href={href}>
            {props.children}
        </a>
    )
}