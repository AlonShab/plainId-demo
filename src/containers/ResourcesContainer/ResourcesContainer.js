import React, {useEffect, useState, useCallback, useMemo} from 'react';
import ApiService from '../../services/apiService';
import ResourcesFilter from './components/ResourcesFilter/ResourcesFilter';
import ResourcesHeader from './components/ResourcesHeader/ResourcesHeader';
import ResourcesList from './components/ResourcesList/ResourcesList';
import DetailsView from './components/DetailsView/DetailsView';
import styled from 'styled-components';

const LeftPanel = styled.aside`
  width: 300px;
`;

const HeaderWrapper = styled.div`
  padding: 10px;
`;

const RightPanel = styled.div`
  background-color: #f3f3f3;
  flex: 1;
  padding: 75px;
`;

function ResourcesContainer() {
    const [filteredValue, setFilteredValue] = useState();
    const [resources, setResources] = useState([]);
    const [selectedResourceId, setSelectedResourceId] = useState();

    const fetchResources = useCallback(async str => {
        const resources = await ApiService.getResources(str);
        setResources(resources);
    }, []);

    const selectedResource = useMemo(() =>
        resources?.find(({id}) => id === selectedResourceId), [resources, selectedResourceId]);

    const onFilteredValueChange = useCallback(({target: {value}}) => {
        setFilteredValue(value);
    }, []);

    useEffect(() => {
        fetchResources(filteredValue);
    }, [filteredValue]);

    return (
        <>
            <LeftPanel>
                <HeaderWrapper>
                    <ResourcesHeader/>
                    <ResourcesFilter {...{
                        onChange: onFilteredValueChange,
                        value: filteredValue
                    }} />
                </HeaderWrapper>
                <nav>
                    <ResourcesList {...{
                        resources,
                        selectResource: setSelectedResourceId,
                        selectedResourceId
                    }} />
                </nav>
            </LeftPanel>
            <RightPanel>
                {selectedResource && <DetailsView {...{resource: selectedResource}} />}
            </RightPanel>
        </>
    );
}

export default ResourcesContainer;

ResourcesContainer.propTypes = {};
