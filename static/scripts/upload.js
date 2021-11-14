upload('#fileUpload', '#buttonUpload',  {
    multi: true,
    accept: ['.png', '.jpg', '.jpeg']
})
upload('#fileUpload1', '#buttonUpload1', {
    multi: false,
    accept: ['.png', '.jpg', '.jpeg']
})

function upload(inputSelector, buttonSelector, options= {}) {
    const input = document.querySelector(inputSelector);
    const open = document.querySelector(buttonSelector);

    //const open = document.getElementsByClassName('photo-drop');
    /*const open = document.createElement('button')
    open.classList.add('drop-area')
    open.textContent = 'Open'*/

    if (options.multi) {
        input.setAttribute('multiple', true);
    }
    if (options.accept && Array.isArray(options.accept)) {
        input.setAttribute('accept', options.accept.join(','));
    }

    const triggerInput = () => input.click();

    const changeHandler = event => {
        if (!event.target.files.length) return;
        //console.log(event.target.files);

        const files = Array.from(event.target.files)
        open.innerText = ""
        files.forEach(file => {
            if (!file.type.match('image')) return;
            //console.log(file.name);
            open.innerText += " " + file.name

            const reader = new FileReader();
            reader.onload = ev => {
                console.log(ev.target.result);

                /*let buff = Buffer.from(ev.target.result, 'base64');
                const fs = require('fs');
                fs.writeFile('my-file.png', buff)*/
            }
            reader.readAsDataURL(file);
        })
    }

    open.addEventListener('click', triggerInput);
    input.addEventListener('change', changeHandler);
}






