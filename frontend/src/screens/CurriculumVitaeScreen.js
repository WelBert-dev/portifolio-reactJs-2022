import React from 'react';

import './CurriculumVitaeScreen.css';

export default function CurriculumVitaeScreen() {

    var __html = require('../resources/curriculo.html');
    var template = { __html: __html };

    return (
        <div dangerouslySetInnerHTML={template} />
    )
};
