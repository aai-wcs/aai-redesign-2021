document.addEventListener("DOMContentLoaded", () => {
    var navBurger = document.getElementById("navbar-burger")
    
    if (navBurger !== null) {
      navBurger.addEventListener("click", () => {
          navBurger.classList.toggle("is-active")
          document.getElementById("navbar-menu").classList.toggle("is-active")
      })
    }
})

function formSetup(formId, aaAction, aaLabel, opts) {
    var defaultHTML = '<div style="font-size: 14px; font-weight: 400; font-family: museo_sans, verdana, arial; width: 250px">Your use of the community edition is subject to the Automation Anywhere <a href="https://www.automationanywhere.com/terms" class="termsLink" target="_blank" style="font-size: 14px;">Terms</a>, <a href="/privacy" class="termsLink" target="_blank" style="font-size: 14px;">Privacy Policy</a> and <a href="https://www.automationanywhere.com/community-edition-license-agreement" class="termsLink" target="_blank" style="font-size: 14px;">Automation Anywhere Community Edition License Agreement</a>.</div>'

    var opts = typeof opts === "undefined" ? {} : opts
    var termsHTML = typeof opts.termsHTML === "string" ? opts.termsHTML : null
    var optinHTML = typeof opts.optinHTML === "string" ? opts.optinHTML : defaultHTML
    var callback = typeof opts.callback === "function" ? opts.callback : null

    MktoForms2.loadForm("//info.automationanywhere.com", "045-LQS-022", formId, function(form) {
        var optin = document.getElementById("optin")

        if (typeof termsHTML === "string") {
            var terms = document.createElement("div")
            terms.innerHTML = termsHTML

            if (optin)
                optin.parentNode.insertBefore(terms, optin)
            else {
		terms.classList.add('mktoFormRow')
		terms.innerHTML = '<div class="mktoFieldDescriptor mktoFormCol" style="margin-bottom: 10px;"><div class="mktoOffset" style="width: 10px;"></div><div class="mktoFieldWrap"><div class="mktoGutter mktoHasWidth" style="width: 10px;"></div><div class="mktoLogicalField mktoCheckboxList mktoHasWidth mktoValid" style="width: 297px;" aria-invalid="false"><div style="font-size: 14px; font-weight: 400; font-family: museo_sans, verdana, arial; width: 250px">' + termsHTML + '</div></div><div class="mktoClear"></div></div><div class="mktoClear"></div></div><div class="mktoClear"></div>'
                var submitButton = document.querySelector('.mktoButtonRow')
		submitButton.parentNode.insertBefore(terms, submitButton)
            }
        }

        if (optin) {
            optin.parentNode.getElementsByTagName("label")[0].innerHTML = optinHTML
            optin.parentNode.getElementsByTagName("label")[0].style["margin-bottom"] = 0
        }

        document.getElementById("first_name").style.display = "none"
        document.getElementById("first_name").parentNode.parentNode.style.display = "none"

        if (typeof callback === "function") {
            callback(form)
        }

        form.onSuccess(function() {
            // Send Tracking Event
            window.dataLayer = window.dataLayer || []
            aaAction = typeof(aaAction) == 'undefined' ? 'marketo-form' : aaAction
            aaLabel = typeof(aaLabel) == 'undefined' ? 'generic' : aaLabel
            window.dataLayer.push({
                'event': 'mktoFormSubmission',
                'eventCategory': 'form-submit',
                'eventAction': aaAction,
                'eventLabel': aaLabel
            })
        })
    })
}

function closeModal(e) {
    e.preventDefault();

    var modal = document.getElementById("form-modal");
    modal.classList.remove('is-active');
    document.querySelector("html").classList.remove('is-clipped');
}

function showModal() {
    event.preventDefault();

    var modal = document.getElementById("form-modal");
    modal.classList.add("is-active");
    document.querySelector("html").classList.add("is-clipped");

    modal.querySelector(".modal-background").addEventListener("click", closeModal);
    modal.querySelector(".delete").addEventListener("click", closeModal);
}
