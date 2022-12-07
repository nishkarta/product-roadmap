import { v4 as uuidv4 } from 'uuid'

const mockData = [
    {
        id: uuidv4(),
        title: 'Group Task 1',
        description: 'January-March',
        tasks: [
            {
                id: uuidv4(),
                name: 'Re-designed the zero-g doggie bags. No more spills!',
                "progress_percentage": 100,
            },
            {
                id: uuidv4(),
                name: 'Bundle interplanetary analytics for improved transmission',
                "progress_percentage": 80,
            },

        ]
    },
    {
        id: uuidv4(),
        title: 'Group Task 2',
        description: 'April-June',
        tasks: []
    },
    {
        id: uuidv4(),
        title: 'Group Task 3',
        description: 'July-September',
        tasks: [
            {
                id: uuidv4(),
                name: 'Bundle interplanetary analytics for improved transmission',
                "progress_percentage": 60,
            },
        ]
    },
    {
        id: uuidv4(),
        title: 'Group Task 4',
        description: 'October-December',
        tasks: [
            {
                id: uuidv4(),
                name: 'Bundle interplanetary analytics for improved transmission',
                "progress_percentage": 60,
            },
        ]
    }

]

export default mockData