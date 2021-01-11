import fakeDataProvider from 'ra-data-fakerest';

const dataProvider = fakeDataProvider({
    instances: [
        { uuid: '5af17e40-1b3f-437f-b63d-adf80d3bdffa', name: 'web01', owner: 'bd64e65e-e972-11ea-842a-0a15bbaed69b' },
        { uuid: 'eda4ed6c-6929-4b92-8063-659708e58805', name: 'mysql01', owner: 'fba89220-4eb3-4c6e-9990-f2dea16fb928' },
    ],
    images: [
        { uuid: 'cde11bfa-e973-11ea-9c6e-0a15bbaed69b', name: 'web01-2020-08-29', owner: 'bd64e65e-e972-11ea-842a-0a15bbaed69b' },
        { uuid: 'b38f005a-e973-11ea-b90d-0a15bbaed69b', name: 'mysql01-2020-08-29', owner: 'fba89220-4eb3-4c6e-9990-f2dea16fb928' },
    ],
})

export default dataProvider;