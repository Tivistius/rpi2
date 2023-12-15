// Функция для создания уникальных элементов
function createPerson(name, photo, lifetime, youtube, workplace, chronology, description, gallery) {
    return {
        name,
        photo,
        lifetime,
        youtube,
        workplace,
        chronology,
        description,
        gallery
    };
}


// Создание 5 уникальных элементов
const artistArray = [
    createPerson("John", "test_photo.webp", "1990-2022", "https://www.youtube.com/user/john_doe", "Company XYZ", [["fist", "Header1", "someStuff1"], ["second", "Header2", "someStuff2"]], "he was a good man", ["test_gallery.jpg", "test_photo.webp", "test_gallery.jpg", "test_photo.webp", "test_gallery.jpg"]),
    createPerson("Jane", "test_photo.webp", "1985-2021", "https://www.youtube.com/user/jane_doe", "Company ABC", [["fist", "Header1", "someStuff1"], ["second", "Header2", "someStuff2"]], "he was a good man", ["test_gallery.jpg", "test_gallery.jpg", "test_gallery.jpg", "test_gallery.jpg", "test_gallery.jpg"]),
    createPerson("Bob", "test_photo.webp", "1998-2023", "https://www.youtube.com/user/bob_smith", "Company 123", [["fist", "Header1", "someStuff1"], ["second", "Header2", "someStuff2"]], "he was a good man", ["test_gallery.jpg", "test_gallery.jpg", "test_gallery.jpg", "test_gallery.jpg", "test_gallery.jpg"]),
    createPerson("Alice", "test_photo.webp", "1992-2024", "https://www.youtube.com/user/alice_wonderland", "Company XYZ", [["fist", "Header1", "someStuff1"], ["second", "Header2", "someStuff2"]], "he was a good man", ["test_gallery.jpg", "test_gallery.jpg", "test_gallery.jpg", "test_gallery.jpg", "test_gallery.jpg"]),
    createPerson("Charlie", "test_photo.webp", "1980-2022", "https://www.youtube.com/user/charlie_brown", "Company ABC", [["fist", "Header1", "someStuff1"], ["second", "Header2", "someStuff2"]], "he was a good man", ["test_gallery.jpg", "test_gallery.jpg", "test_gallery.jpg", "test_gallery.jpg", "test_gallery.jpg"])
];

export default artistArray;