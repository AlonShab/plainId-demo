import React, {Suspense, useEffect, useState} from 'react';
import styled from 'styled-components';
import {init as initTranslation} from './services/translation';
import HeaderPanel from './components/HeaderPanel/HeaderPanel';
import {GlobalStyle} from './styles/appDefaultStyles';
import ResourcesContainer from './containers/ResourcesContainer/ResourcesContainer';
import {headerPanelHeight, VerticalContainer} from './styles/commonStyles';

const ApplicationContainer = styled(VerticalContainer)`
    min-height: calc(100vh - ${headerPanelHeight});
`;

const MainContainer = styled.main`
    display: flex;
    flex: 1;
    position: relative;
    top: ${headerPanelHeight};
`;

function App() {
    const [initCompleted, setInitCompleted] = useState(false);

    useEffect(() => {
        const init = async () => {
            try {
                await initTranslation({lang: 'en-US'});
                setInitCompleted(true);
            } catch (e) {
                console.error(e);
            }
        };
        init();
    }, []);

    if (!initCompleted)
        return null;

    return (
        <Suspense fallback={null}>
            <GlobalStyle/>
            <ApplicationContainer>
                <HeaderPanel/>
                <MainContainer>
                    <ResourcesContainer/>
                </MainContainer>
            </ApplicationContainer>
        </Suspense>
    );
}

export default App;