// 1. Перевірка IP-адреси
function isIPAddress(ip) {
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipRegex.test(ip);
}

// 2. Знаходження формату rgba(r, g, b, a)
function findRGBA(text) {
    const rgbaRegex = /rgba\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*(?:0\vert{}1\vert{}0?\.\d+)\s*\)/i;
    const match = text.match(rgbaRegex);
    return match ? match[0] : null;
}

// 3. Знаходження кольору #ABC або #ABCDEF
function findHexColor(text) {
    const hexRegex = /#([0-9a-fA-F]{3}){1,2}\b/;
    const match = text.match(hexRegex);
    return match ? match[0] : null;
}

// 4. Знаходження тегів із заданим ім'ям
function findTags(text, tag) {
    const tagRegex = new RegExp(`<${tag}\\b[^>]*>(.*?)<\/${tag}>|<${tag}\\b[^>]*\/?>`, 'gi');
    return text.match(tagRegex) || [];
}

// 5. Знаходження усіх додатних чисел
function findPosNum(text) {
    const numRegex = /\b\d+(?:\.\d+)?\b/g;
    return text.match(numRegex) || [];
}

// 6. Знаходження дат у форматі РРРР-ММ-ДД
function findDates(text) {
    const dateRegex = /\b\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])\b/g;
    return text.match(dateRegex) || [];
}

// 7. Знаходження email-адрес
function findEmail(text) {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    return text.match(emailRegex) || [];
}

// === Демонстрація роботи у консолі ===
const sampleText = "Привіт! Мій IP: 192.168.1.1, дата зустрічі: 2026-10-15. Пошта: test.user@gmail.com. Колір #FF5733 або rgba(255, 87, 51, 0.8). Числа: 10, -5, 42.7. Тег: <img src='test.jpg' />";

console.log("--- Тестування регулярних виразів ---");
console.log("isIPAddress('192.168.1.1'):", isIPAddress("192.168.1.1")); // true
console.log("findRGBA:", findRGBA(sampleText));
console.log("findHexColor:", findHexColor(sampleText));
console.log("findDates:", findDates(sampleText));
console.log("findEmail:", findEmail(sampleText));
console.log("findPosNum:", findPosNum(sampleText));
console.log("findTags (img):", findTags(sampleText, "img"));