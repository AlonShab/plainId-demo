import React from 'react';
import PropTypes from 'prop-types';
import ResourceItem from './ResourceItem';
import {StyledList} from '../../../../styles/commonStyles';

export default function ResourcesList({
                                          resources,
                                          selectResource,
                                          selectedResourceId
                                      }) {
    return (
        <StyledList>
            {resources.map(({id, name}) =>
                <ResourceItem
                    key={id}
                    {...{
                        name,
                        isSelected: id === selectedResourceId,
                        onClick: () => selectResource(id)
                    }}
                />)}
        </StyledList>
    );
}

ResourcesList.propTypes = {
    resources: PropTypes.array,
    selectResource: PropTypes.func,
    selectedResourceId: PropTypes.string
};
