// Функция для создания уникальных элементов
function createPerson(name, photo, lifetime, youtube, workplace, chronology, description) {
    return {
        name,
        photo,
        lifetime,
        youtube,
        workplace,
        chronology,
        description
    };
}


// Создание 5 уникальных элементов
const artistArray = [
    createPerson("John", "test_photo.webp", "1990-2022", "https://www.youtube.com/user/john_doe", "Company XYZ", [["fist", "someStuff1"], ["second", "someStuff2"]], "he was a good man"),
    createPerson("Jane", "test_photo.webp", "1985-2021", "https://www.youtube.com/user/jane_doe", "Company ABC", [["fist", "someStuff1"], ["second", "someStuff2"]], "he was a good man"),
    createPerson("Bob", "test_photo.webp", "1998-2023", "https://www.youtube.com/user/bob_smith", "Company 123", [["fist", "someStuff1"], ["second", "someStuff2"]], "he was a good man"),
    createPerson("Alice", "test_photo.webp", "1992-2024", "https://www.youtube.com/user/alice_wonderland", "Company XYZ", [["fist", "someStuff1"], ["second", "someStuff2"]], "he was a good man"),
    createPerson("Charlie", "test_photo.webp", "1980-2022", "https://www.youtube.com/user/charlie_brown", "Company ABC", [["fist", "someStuff1"], ["second", "someStuff2"]], "he was a good man")
];

export default artistArray;