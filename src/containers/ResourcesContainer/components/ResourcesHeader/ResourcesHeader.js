import React from 'react';
import styled from 'styled-components';
import {HeaderText, SubHeaderText} from '../../../../styles/commonStyles';
import { useLocalTranslation } from '../../../../hooks/useLocalTranslation'

const ResourceHeaderText = styled(HeaderText)`
    color: #686868;
    margin-bottom: 3px;
`;

export default function ResourcesHeader() {
    const { t } = useLocalTranslation(import.meta.url, 'en-US');

    return (
        <>
            <ResourceHeaderText>{t('RESOURCES_HEADER_TITLE')}</ResourceHeaderText>
            <SubHeaderText>{t('RESOURCES_HEADER_SUBTITLE')}</SubHeaderText>
        </>
    );
}
