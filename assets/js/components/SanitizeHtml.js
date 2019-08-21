import React from 'react';
import { PropTypes } from 'prop-types';
import sanitizeHtml from 'sanitize-html';

const defaultOptions = {
    // allow all
    allowedTags: false,
    allowedAttributes: false,
    selfClosing: ['img', 'br', 'hr', 'area', 'base', 'basefont', 'input', 'link', 'meta'],
};

const sanitize = (dirty, options) => ({
    __html: sanitizeHtml(dirty, { ...defaultOptions, ...options }),
});
const SanitizeHtml = ({ html, options }) => <div dangerouslySetInnerHTML={sanitize(html, options)} />;

SanitizeHtml.propTypes = {
    html: PropTypes.string,
    options: PropTypes.object,
};

export default SanitizeHtml;
