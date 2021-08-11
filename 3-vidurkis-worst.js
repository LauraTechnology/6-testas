const data = [
    {
        name: 'Jonas',
        marks: [10, 2, 8, 4, 6]
    },
    {
        name: 'Maryte',
        marks: [3, 7, 9, 5]
    },
    {
        name: 'Petras',
        marks: [7, 7, 7]
    },
    {
        name: 'Ona',
        marks: [10, 9, 8, 7, 6]
    },
]

// 3 - Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi prasciausia pazymiu vidurki

// name: 'Jonas';



marksVidurkisJonas = 6
marksVidurkisMaryte = 6
marksVidurkisPetras = 7
marksVidurkisOna = 8

let maziausias = 6

if (maziausias >= 6) {
    console.log(maziausias)
}


// If Jonas-6 , Maryte - 6 , Petras-7, Ona-8; else prasciausias vidurkis 
//naudoti reikia duotą kintamąjį
//pvz.: https://github.com/LauraTechnology/6-testas/blob/main/3-vidurkis-worst.js neaišku kas yra 26-29 eilutės
//plius, jei klausiamas prasčiausiai besimokančio mokinio vidurkis, tai visų mokinių suma skamba nelogiškai :Thonk: