import data from '../data.json';

const ApiService = (() => {
    const fetchData = async () => {
        return data;
    };

    return {
        getResources: async filteredName => {
            const data = await fetchData();
            let resources = data.resources;
            if (filteredName) {
                resources = resources.filter(({name}) =>
                    name.toLowerCase().includes(filteredName.toLowerCase())
                );
            }
            return resources;
        }
    };
})();

export default ApiService;
