import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {HeaderText} from '../../../../../../styles/commonStyles';

const DetailsHeaderContainer = styled.div`
  background-color: #5390ea;
  padding: 9px;
`;

const DetailsHeaderText = styled(HeaderText)`
  color: white;
`;

export default function DetailsHeader({name}) {
    return (
        <DetailsHeaderContainer>
            <DetailsHeaderText>{name}</DetailsHeaderText>
        </DetailsHeaderContainer>
    );
}

DetailsHeader.propTypes = {
  name: PropTypes.string
};
