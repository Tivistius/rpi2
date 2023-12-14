import React from 'react';

const ListItem = ({ item }) => {
    return (
        <li>{item.name}</li>
    );
};

const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
];

const ArtistsList = () => {
    return (
        <div>
            <header>

            </header>
            <ul>
                {data.map((data) => (
                    <ListItem key={data.id} item={data.name} />
                ))}
            </ul>
            <footer>

            </footer>
        </div>
    );
};

export default ArtistsList;