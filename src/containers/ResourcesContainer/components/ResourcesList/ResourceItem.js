import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const StyledListItem = styled.li`
  display: flex;
  cursor: pointer;
  padding: 6px 5px;
  height: 50px;
  position: relative;
  border-bottom: 1px solid lightgray;
  background-color: ${({isSelected}) =>
    isSelected ? 'lightgray' : 'initial'};
  font-weight: ${({isSelected}) => (isSelected ? '600' : 'initial')};
`;

const ResourceName = styled.span`
  color: #696969;
  margin: auto 0;
  font-size: 13px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
`;

export default function ResourceItem({name, isSelected, onClick}) {
    return (
        <StyledListItem {...{
            onClick,
            isSelected
        }}>
            <ResourceName>{name}</ResourceName>
        </StyledListItem>
    );
}

ResourceItem.propTypes = {
    name: PropTypes.string,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func
};
