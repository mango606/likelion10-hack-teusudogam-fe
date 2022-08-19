import { css, useTheme } from '@emotion/react';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import { AuthorizationContext } from 'contexts/authorization-context';

function UserMenuButton({ children, onClick }) {
    return (
        <button
            type="button"
            onClick={onClick}
            css={css`
                white-space: nowrap;
                padding: 8px;
                background: none;
                border: none;
                color: #ffffff;
                cursor: pointer;
                transition: 0.2s;

                :hover {
                    background-color: rgba(0, 0, 0, 0.1);
                }
            `}
        >
            {children}
        </button>
    );
}

UserMenuButton.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
};

UserMenuButton.defaultProps = {
    children: undefined,
};

const UserMenu = React.forwardRef(({ className }, ref) => {
    const theme = useTheme();
    const { logout } = useContext(AuthorizationContext);

    return (
        <div
            ref={ref}
            css={css`
                border: 2px solid ${theme.colors.white};
                font-size: 1rem;
                background-color: ${theme.colors.primary1};
                border-radius: 6px;
                overflow: hidden;
            `}
            className={className}
        >
            <UserMenuButton
                onClick={(event) => {
                    event.stopPropagation();
                    logout();
                }}
            >
                로그아웃
            </UserMenuButton>
        </div>
    );
});

UserMenu.propTypes = {
    className: PropTypes.string,
};

UserMenu.defaultProps = {
    className: undefined,
};

export default UserMenu;
