'use strict'
const button1 = document.getElementById('continue-button');
const button2 = document.getElementById('finish-button');
const button3 = document.getElementById('leave-button');

const liveSectionCollection = document.getElementsByTagName('section');
const liveSectionsArray = Array.from(liveSectionCollection);

const json =
    {
        "1": "\u041c\u0418\u0422\u0420\u041e\u041d\u0418\u041d",
        "2": "\u0412\u0410\u041b\u0415\u0420\u0418\u0418",
        "3": "\u0414\u041c\u0418\u0422\u0420\u0418\u0415\u0412\u0418\u0427",
        "4": "06.11.1984",
        "5": "\u041c\u0423\u0416.",
        "6": "\u0413\u041e\u0420. \u0411\u0410\u0420\u041d\u0410\u0423\u041b ",
        "7": "01 10 474358 ",
        "8": "\u041e\u0422\u0414\u0415\u041b\u041e\u041c \u0423\u0424\u041c\u0421 \u0420\u041e\u0421\u0421\u0418\u0418 \u041f\u041e \u0410\u041b\u0422\u0410\u0419\u0421\u041a\u041e\u041c\u0423 \u041a\u0420\u0410\u042e \u0432 \u0418\u041d\u0414\u0423\u0421\u0422\u0420\u0418\u0410\u041b\u042c\u041d\u041e\u041c \u0420-\u041d\u0415 \u0413. \u0411\u0410\u0420\u041d\u0410\u0423\u041b\u0410 ",
        "9": "29.09.2010",
        "10": "220-071",
        "11": "\u0420\u0435\u0433-\u043d:\u041e\u0411\u041b \u0421\u0412\u0415\u0420\u0414\u041b\u041e\u0412\u0421\u041a\u0410\u042f , \u0413\u041e\u0420. \u041a\u0410\u041c\u042b\u0428\u041b\u041e\u0412 , \u0423\u043b\u0438\u0446\u0430:\u0423\u041b. \u041c\u0410\u041b\u042b\u0428\u0415\u0412\u0410 , \u0414\u041e\u0418 32, "
    }
button1.addEventListener('click', function (event) {
    const sectionId = event.target.getAttribute('data-section');
    console.log(sectionId);

    let input = document.getElementsByClassName('input-value')[0]

    const str = JSON.stringify(json);
    const data = JSON.parse(str);
    const jsonLenght = str.split(":").length - 1;
    console.log(jsonLenght);


    for (let i=1; i <= 11; i++)
    {
        console.log(data[i])
        input.setAttribute('value', data[i]);
        input = document.getElementsByClassName('input-value')[i];
    }

    liveSectionsArray.forEach(function (sectionElement) {

        sectionElement.hidden = sectionElement.className !== sectionId;

    })
})

button2.addEventListener('click', function (event) {
    const sectionId = event.target.getAttribute('data-section');
    console.log(sectionId);

    liveSectionsArray.forEach(function (sectionElement) {

        sectionElement.hidden = sectionElement.className !== sectionId;

    })
})
