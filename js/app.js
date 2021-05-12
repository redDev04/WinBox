const about = document.querySelector("#about")
const contact = document.querySelector("#contact")
const aboutCont = document.querySelector("#about-content")
const contactCont = document.querySelector("#content-contact")


about.addEventListener("click", () => {
    const aboutBox = new WinBox({
        title: "About Me",
        width: "400px",
        //modal: true,
        height: "400px",
        top: "50",
        left: "50",
        right: "50",
        bottom:"50",
        mount: aboutCont,
        onfocus: function () {
            this.setBackground("#00aa00")
        },
        onblur: function () {
            this.setBackground("#777")
        }
    })
})

contact.addEventListener("click", () => {
    const contactBox = new WinBox({
        title: "Contact Me",
        width: "400px",
        height: "400px",
        top: "150",
        left: "50",
        right: "50",
        bottom:"250",
        mount: contactCont,
        html: `<div class="content-contact">
        <h2>contact-me:$<span class="cursor">|</span></h2>
        <p>you can contact me at my phone number ot email below</p>
        <ul>
            <li>Phone: 0770843694</li>
            <li>Email: anessimao@gmail.com</li>
        </ul>
    </div>`,
    onfocus: function () {
        this.setBackground("#00aa00")
    },
    onblur: function () {
        this.setBackground("#777")
    }
    })
})