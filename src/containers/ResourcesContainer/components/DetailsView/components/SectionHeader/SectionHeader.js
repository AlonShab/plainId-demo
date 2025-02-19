import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {HeaderText} from '../../../../../../styles/commonStyles';

const SectionHeaderContainer = styled.div`
  margin-bottom: 10px;
`;

const SectionHeaderText = styled(HeaderText)`
  color: royalBlue;
  font-size: 11px;
  margin: auto 0;
`;

const HeaderTextContainer = styled.div`
  display: flex;
  margin-bottom: 3px;
`;

export default function SectionHeader({headerText}) {
    return (
        <SectionHeaderContainer>
            <HeaderTextContainer>
                <SectionHeaderText>{headerText}</SectionHeaderText>
            </HeaderTextContainer>
        </SectionHeaderContainer>
    );
}

SectionHeader.propTypes = {
    headerText: PropTypes.string
};
