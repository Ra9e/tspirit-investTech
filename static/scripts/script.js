'use strict'

const button1 = document.getElementById('continue-button');
const button2 = document.getElementById('finish-button');
const button3 = document.getElementById('leave-button');

const liveSectionCollection = document.getElementsByTagName('section');
const liveSectionsArray = Array.from(liveSectionCollection);

button1.addEventListener('click', function (event) {
    const sectionId = event.target.getAttribute('data-section');
    console.log(sectionId);

    liveSectionsArray.forEach(function (sectionElement) {
        sectionElement.hidden = true;
        if (sectionElement.className === sectionId) {
            sectionElement.hidden = false;
        }

    })
})

button2.addEventListener('click', function (event) {
    const sectionId = event.target.getAttribute('data-section');
    console.log(sectionId);

    liveSectionsArray.forEach(function (sectionElement) {
        sectionElement.hidden = true;
        if (sectionElement.className === sectionId) {
            sectionElement.hidden = false;
        }

    })
})
