const DATA = [
    {
        'id': 0.9640640017447453,
        'date': '10.10.2023',
        'category': 'Travel',
        'cost': 'Paris',
        'price': '1200',
        'isEditing': false,
        
    },
    {
        'id': 5.6548640017445270,
        'date': '08.05.2023',
        'category': 'Travel',
        'cost': 'Austria',
        'price': '900',
        'isEditing': false,
        
    }
];


export const getData = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(DATA);
        }, 500);
    });
};

// getData.then((DATA) =>{})