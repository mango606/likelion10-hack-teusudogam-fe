import 'normalize.css';
import 'react-circular-progressbar/dist/styles.css';
import 'styles/style.scss';

import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';

import Header from 'components/header';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div
                css={css`
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 40px 0;
                `}
            >
                {children}
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node,
};

DefaultLayout.defaultProps = {
    children: null,
};

export default DefaultLayout;
