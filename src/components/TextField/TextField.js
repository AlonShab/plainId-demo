import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {fieldCommonStyle} from '../../styles/commonStyles';
import FieldWrapper from '../FieldWrapper/FieldWrapper';

const StyledInputField = styled.input`
  ${fieldCommonStyle};
`;

export function TextField({label, readOnly = true, ...props}) {
    return (
        <FieldWrapper {...{label}}>
            <StyledInputField {...{
                ...props,
                readOnly
            }} />
        </FieldWrapper>
    );
}

TextField.propTypes = {
    label: PropTypes.string,
    readOnly: PropTypes.bool
};
