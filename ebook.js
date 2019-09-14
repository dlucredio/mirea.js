const msg_continue_reading = 'Do you wish to continue reading from where you stopped?';
const msg_yes = 'Yes';
const msg_no = 'No';
const msg_theme = 'Theme';
const msg_theme_light1 = 'Light 1';
const msg_theme_light2 = 'Light 1';
const msg_theme_sepia1 = 'Sepia 1';
const msg_theme_sepia2 = 'Sepia 2';
const msg_theme_dark1 = 'Dark 1';
const msg_theme_dark2 = 'Dark 2';
const msg_theme_dark3 = 'Dark 3';
const msg_font_type = 'Font type';
const msg_font_size = 'Font size';
const msg_very_small = 'Very small';
const msg_small = 'Small';
const msg_medium = 'Medium';
const msg_large = 'Large';
const msg_very_large = 'Very large';
const msg_huge = 'Huge';
const msg_margins = 'Margins';
const msg_no_margins = 'No margins';
const msg_small_margins = 'Small';
const msg_medium_margins = 'Medium';
const msg_large_margins = 'Large';
const msg_huge_margins = 'Huge';
const msg_spacing = 'Spacing';

class EbookReaderNavBar extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    }

    connectedCallback() {
        let title = this.getAttribute("title");
        this._shadowRoot.innerHTML = `
        <style>
        * {
            box-sizing: border-box;
        }

        html {
            font-size: 100%;
        }

        .modal {
            display: none;
            position: fixed;
            z-index: 1;
            padding-top: 10rem;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgb(0, 0, 0);
            background-color: rgba(0, 0, 0, 0.4);
        }

        .modal-close-dialog {
            cursor: pointer;
        }

        .modal-content {
            background-color: #464646;
            margin: auto;
            padding: 1rem;
            border: 1px solid #ffffff;
            color: white;
            width: 50%;
        }

        nav {
            position: -webkit-sticky;
            position: sticky;
            left: 0;
            top: 0;
            width: 100%;
            padding: 1rem;
            background-color: #464646;
            color: white;
        }

        nav .row {
            display: flex;
            align-items: center;
        }

        nav .brand {
            flex: 1;
            font-size: 1.2rem;
        }

        .settings {
            width: 24px;
            height: 24px;
        }

        label {
            user-select: none;
            cursor: pointer;
        }

        input[type=checkbox] {
            display: none;
        }

        #checkbox-dropdown-navbar-menu:checked+div.options {
            display: flex;
            flex-direction: column;
        }

        div.options {
            width: 100%;
            display: none;
        }

        div.options-content {
            width: 100%;
            max-height: 30vh;
            overflow-y: auto;
            margin: 0.5rem 0pt;
            border: 1px solid white;
            border-radius: 5px;
        }

        div.powered-by {
            text-align: right;
            font-size: 0.7rem;
        }

        a, a:link, a:visited, a:active {
            color: white;
            text-decoration: underline;
            text-weight: bold;
        }

        div.options-row {
            margin: 0.3rem auto;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }

        button {
            padding: 0.5rem;
            border: 1px solid white;
            margin: 0.2rem;
            cursor: pointer;
            border-radius: 5px;
        }
    </style>
    <div id="dialog" class="modal">
        <div class="modal-content">
            <span class="modal-close-dialog" onclick="closeDialog()">&times;</span>
            <p>${msg_continue_reading}</p>
            <button onclick="restoreScrollPosition()">${msg_yes}</button>
            <button onclick="closeDialog()">${msg_no}</button>
        </div>
    </div>
    <nav>
        <div class="row">
            <div class="brand">${title}</div>
            <label id='label-dropdown-navbar-menu' for='checkbox-dropdown-navbar-menu'>
                <img class="settings" src="settings.png" />
            </label>
        </div>
        <div class="row">
            <input type='checkbox' id='checkbox-dropdown-navbar-menu' />
            <div class="options">
                <div class="options-content">

                    <div class="options-row">${msg_theme}</div>
                    <div class="options-row">
                        <button onclick="changeTheme('#000000','#ffffff')"
                            style="color:#000000; background-color: #ffffff">${msg_theme_light1}</button>
                        <button onclick="changeTheme('#4e4e4e','#ffffff')"
                            style="color:#4e4e4e; background-color: #ffffff">${msg_theme_light2}</button>
                        <button onclick="changeTheme('#000000','#e4cb87')"
                            style="color:#000000; background-color: #e4cb87">${msg_theme_sepia1}</button>
                        <button onclick="changeTheme('#615638','#e4cb87')"
                            style="color:#615638; background-color: #e4cb87">${msg_theme_sepia2}</button>
                        <button onclick="changeTheme('#ffffff','#000000')"
                            style="color:#ffffff; background-color: #000000">${msg_theme_dark1}</button>
                        <button onclick="changeTheme('#ffffff','#464646')"
                            style="color:#ffffff; background-color: #464646">${msg_theme_dark2}</button>
                        <button onclick="changeTheme('#42a309','#000000')"
                            style="color:#42a309; background-color: #000000">${msg_theme_dark3}</button>
                    </div>
                    <div class="options-row">${msg_font_type}</div>
                    <div class="options-row">
                        <button onclick="changeFont('Roboto', 'sans-serif')"
                            style="font-family: 'Roboto', sans-serif;">Roboto</button>
                        <button onclick="changeFont('Gayathri', 'sans-serif')"
                            style="font-family: 'Gayathri', sans-serif;">Gayathri</button>
                        <button onclick="changeFont('Chilanka', 'cursive')"
                            style="font-family: 'Chilanka', cursive;">Chilanka</button>
                        <button onclick="changeFont('Open Sans', 'sans-serif')"
                            style="font-family: 'Open Sans', sans-serif;">Open Sans</button>
                        <button onclick="changeFont('Manjari', 'sans-serif')"
                            style="font-family: 'Manjari', sans-serif;">Manjari</button>
                        <button onclick="changeFont('Montserrat', 'sans-serif')"
                            style="font-family: 'Montserrat', sans-serif;">Montserrat</button>
                        <button onclick="changeFont('Roboto Condensed', 'sans-serif')"
                            style="font-family: 'Roboto Condensed', sans-serif;">Roboto Condensed</button>
                        <button onclick="changeFont('Merriweather', 'serif')"
                            style="font-family: 'Merriweather', serif;">Merriweather</button>
                        <button onclick="changeFont('Roboto Slab', 'serif')"
                            style="font-family: 'Roboto Slab', serif;">Roboto Slab</button>
                        <button onclick="changeFont('Playfair Display', 'serif')"
                            style="font-family: 'Playfair Display', serif;">Playfair Display</button>
                        <button onclick="changeFont('Lora', 'serif')" style="font-family: 'Lora', serif;">Lora</button>
                    </div>
                    <div class="options-row">${msg_font_size}</div>
                    <div class="options-row">
                        <button onclick="changeSize('0.5rem')" style="font-size: 0.5rem;">${msg_very_small}</button>
                        <button onclick="changeSize('0.75rem')" style="font-size: 0.75rem;">${msg_small}</button>
                        <button onclick="changeSize('1.00rem')" style="font-size: 1.00rem;">${msg_medium}</button>
                        <button onclick="changeSize('1.25rem')" style="font-size: 1.25rem;">${msg_large}</button>
                        <button onclick="changeSize('1.5rem')" style="font-size: 1.5rem;">${msg_very_large}</button>
                        <button onclick="changeSize('2.0rem')" style="font-size: 2.0rem;">${msg_huge}</button>
                    </div>
                    <div class="options-row">${msg_margins}</div>
                    <div class="options-row">
                        <button onclick="changeMargin('0%')">${msg_no_margins}</button>
                        <button onclick="changeMargin('5%')">${msg_small_margins}</button>
                        <button onclick="changeMargin('10%')">${msg_medium_margins}</button>
                        <button onclick="changeMargin('15%')">${msg_large_margins}</button>
                        <button onclick="changeMargin('30%')">${msg_huge_margins}</button>
                    </div>
                    <div class="options-row">${msg_spacing}</div>
                    <div class="options-row">
                        <button onclick="changeSpacing(1)">1</button>
                        <button onclick="changeSpacing(1.25)">1.25</button>
                        <button onclick="changeSpacing(1.5)">1.5</button>
                        <button onclick="changeSpacing(1.75)">1.75</button>
                        <button onclick="changeSpacing(2)">2</button>
                    </div>
                </div>
                <div class="powered-by">Powered by: <a class="powered-by" href="https://github.com/dlucredio/mirea.js">mirea.js</a></div>
            </div>
        </div>
    </nav>
`;

        var link1 = document.createElement('link');
        link1.rel = 'stylesheet';
        link1.type = 'text/css';
        link1.href = 'https://fonts.googleapis.com/css?family=Chilanka|Gayathri|Lora|Manjari|Merriweather|Montserrat|Open+Sans|Playfair+Display|Roboto|Roboto+Condensed|Roboto+Slab&display=swap';
        document.head.appendChild(link1);

        var link2 = document.createElement('link');
        link2.rel = 'stylesheet';
        link2.type = 'text/css';
        link2.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
        
        document.head.appendChild(link2);
        document.body.onload = () => loadConfig();
    }
}

var scrollStop = function (callback) {
    if (!callback || typeof callback !== 'function') return;
    var isScrolling;
    window.addEventListener('scroll', function (event) {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(function () {
            callback();
        }, 66);
    }, false);
};

scrollStop(function () {
    if (typeof (Storage) !== "undefined") {
        localStorage.pageYOffset = window.pageYOffset;
    }
});

customElements.define('ebook-reader-navbar', EbookReaderNavBar);

function closeDialog() {
    document.getElementsByTagName("ebook-reader-navbar")[0]._shadowRoot.getElementById("dialog").style.display = "none";
}

function restoreScrollPosition() {
    if (typeof (Storage) !== "undefined") {
        window.scrollTo(0, localStorage.pageYOffset);
    }
    closeDialog();
}

function loadConfig() {
    if (typeof (Storage) !== "undefined") {
        changeTheme(localStorage.fg, localStorage.bg);
        changeFont(localStorage.font, localStorage.fontFallback);
        changeSize(localStorage.size);
        changeMargin(localStorage.margin);
        changeSpacing(localStorage.spacing);
        if (localStorage.getItem("pageYOffset") !== null) {
            document.getElementsByTagName("ebook-reader-navbar")[0]._shadowRoot.getElementById("dialog").style.display = "block";
        }

    }
}

function changeTheme(fg, bg) {
    document.body.style.color = fg;
    document.body.style.backgroundColor = bg;
    if (typeof (Storage) !== "undefined") {
        localStorage.fg = fg;
        localStorage.bg = bg;
    }
}

function changeFont(font, fontFallback) {
    let ff = "'" + font + "', " + fontFallback;
    console.log(ff);

    document.getElementById("content").style.fontFamily = ff;
    if (typeof (Storage) !== "undefined") {
        localStorage.font = font;
        localStorage.fontFallback = fontFallback;
    }
}

function changeSize(size) {
    document.getElementById("content").style.fontSize = size;
    if (typeof (Storage) !== "undefined") {
        localStorage.size = size;
    }
}

function changeMargin(margin) {
    document.getElementById("content").style.marginLeft = margin;
    document.getElementById("content").style.marginRight = margin;
    if (typeof (Storage) !== "undefined") {
        localStorage.margin = margin;
    }
}

function changeSpacing(spacing) {
    document.getElementById("content").style.lineHeight = spacing;
    if (typeof (Storage) !== "undefined") {
        localStorage.spacing = spacing;
    }
}