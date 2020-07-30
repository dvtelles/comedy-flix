import React, { FC } from 'react';

type ButtonLinkProps = {
    href: string,
    className: string
}

export const ButtonLink: FC<ButtonLinkProps> = ({ href, className, children }) => (
    <a className={className} href={href}>
        {children}
    </a>
)
