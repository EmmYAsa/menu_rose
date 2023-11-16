let $account = document.getElementsByClassName('my-account')[0];
let $hidenInfoAccount = document.getElementsByClassName('hiden-container-account')[0];

let $messages = document.getElementsByClassName('messages')[0];
let $hidenInfoMessages = document.getElementsByClassName('hiden-container-massages')[0];

let $settings = document.getElementsByClassName('settings')[0];
let $hidenInfoSettings = document.getElementsByClassName('hiden-container-settings')[0];

let $img1 = document.getElementsByClassName('first-arrow')[0];
let $img2 = document.getElementsByClassName('second-arrow')[0];
let $img3 = document.getElementsByClassName('third-arrow')[0];


let $language = document.getElementsByClassName('language')[0]
let $notification = document.getElementsByClassName('notification')[0]
let $privacy = document.getElementsByClassName('privacy')[0]

let $containerLanguage = document.getElementsByClassName('container-language')[0];
let $containerNotification = document.getElementsByClassName('container-notification')[0]
let $containerPrivacy = document.getElementsByClassName('container-privacy')[0]

$account.addEventListener('click', () => {
    if ($hidenInfoAccount.classList.contains('hiden')) {
        $hidenInfoAccount.classList.remove('hiden');
        $img1.src = '../img/icons8-arrow-gray-24.png';
    } else {
        $hidenInfoAccount.classList.add('hiden');
        $img1.src = '../img/icons8-arrow-24.png';
    }
});

$messages.addEventListener('click', () => {
    if ($hidenInfoMessages.classList.contains('hiden')) {
        $hidenInfoMessages.classList.remove('hiden');
        $img2.src = '../img/icons8-arrow-gray-24.png';
    }

    else {
        $hidenInfoMessages.classList.add('hiden');
        $img2.src = '../img/icons8-arrow-24.png';
    }
})

$settings.addEventListener('click', () => {
    if ($hidenInfoSettings.classList.contains('hiden')) {
        $hidenInfoSettings.classList.remove('hiden');
        $img3.src = '../img/icons8-arrow-gray-24.png';
    }

    else {
        $hidenInfoSettings.classList.add('hiden');
        $img3.src = '../img/icons8-arrow-24.png';
    }
})

$language.addEventListener('click', () => {
    $containerLanguage.classList.remove('hiden')

})

$containerLanguage.addEventListener('click', () => {
    $containerLanguage.classList.add('hiden')
})

$notification.addEventListener('click', () => {
    $containerNotification.classList.remove('hiden')
})

$containerNotification.addEventListener('click', () => {
    $containerNotification.classList.add('hiden')
})

$privacy.addEventListener('click', () => {
    $containerPrivacy.classList.remove('hiden')

})

$containerPrivacy.addEventListener('click', () => {
    $containerPrivacy.classList.add('hiden')
})