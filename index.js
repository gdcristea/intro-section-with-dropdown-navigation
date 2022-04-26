// *****************Sidebar************************
const openBtn = document.querySelector(".openbtn");
const closeBtn = document.querySelector(".closebtn");
const sidebar = document.getElementById("mySidebar");
const coverScreen = document.querySelector(".cover-screen");
const featuresContainer = document.querySelector(".features-container");
const featuresLinks = document.getElementById("features-links");
const companyContainer = document.querySelector(".company-container");
const companyLinks = document.getElementById("company-links");

     //Replace arrow-down with arrow-up for Features
const arrowDownFeatures = document.getElementsByClassName("arrow-icon-down")[0];
const arrowUpFeatures = document.createElement("img")
arrowUpFeatures.setAttribute("class", "arrow-icon-up");
arrowUpFeatures.setAttribute("src", "assets/icon-arrow-up.svg");
arrowUpFeatures.setAttribute("alt", "");

     // Replace arrow-down with arrow-up for Company
const arrowDownCompany = document.getElementsByClassName("arrow-icon-down")[1];
const arrowUpCompany = document.createElement("img")
arrowUpCompany.setAttribute("class", "arrow-icon-up");
arrowUpCompany.setAttribute("src", "assets/icon-arrow-up.svg");
arrowUpCompany.setAttribute("alt", "");

     // Event listeners
openBtn.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);
featuresContainer.addEventListener("click", DropDownListFeatures);
companyContainer.addEventListener("click", DropDownListCompany);

     // Functions
function openSidebar() {
    sidebar.style.width ="240px";
    sidebar.style.paddingLeft = "24px";
    coverScreen.style.display="block";
}

function closeSidebar() {
    sidebar.style.width = "0px";
    sidebar.style.paddingLeft = "0px";
    featuresLinks.className = "display-none";
    companyLinks.className = "display-none";
    coverScreen.style.display="none";
    arrowUpCompany.parentNode.replaceChild(arrowDownCompany, arrowUpCompany);
    arrowUpFeatures.parentNode.replaceChild(arrowDownFeatures, arrowUpFeatures);
}

function DropDownListFeatures() {
    featuresLinks.style.marginLeft = "24px";
    featuresLinks.style.marginTop = "24px";
    featuresLinks.style.marginBottom = "24px";

    if (featuresLinks.className === "display-none") {
        featuresLinks.className = "display-block";

        arrowDownFeatures.parentNode.replaceChild(arrowUpFeatures, arrowDownFeatures);
    } else {
        featuresLinks.className = "display-none";

        arrowUpFeatures.parentNode.replaceChild(arrowDownFeatures, arrowUpFeatures);
    }

}

function DropDownListCompany() {
    companyLinks.style.marginLeft = "24px";
    companyLinks.style.marginTop = "24px";
    companyLinks.style.marginBottom = "24px";

    if (companyLinks.className === "display-none") {
        companyLinks.className = "display-block";

        arrowDownCompany.parentNode.replaceChild(arrowUpCompany, arrowDownCompany);
    } else {
        companyLinks.className = "display-none";

        arrowUpCompany.parentNode.replaceChild(arrowDownCompany, arrowUpCompany);
    }
}

// *****************Desktop nav*********************
const DesktopFeaturesContainer = document.querySelector(".desktop-features-container");
const DesktopFeaturesLinks = document.getElementById("desktop-features-links");
const DesktopCompanyContainer = document.querySelector(".desktop-company-container");
const DesktopCompanyLinks = document.getElementById("desktop-company-links");

     //Replace arrow-down with arrow-up for Features
const DesktopArrowDownFeatures = document.getElementsByClassName("desktop-arrow-icon-down")[0];
const DesktopArrowUpFeatures = document.createElement("img")
DesktopArrowUpFeatures.setAttribute("class", "desktop-arrow-icon-up");
DesktopArrowUpFeatures.setAttribute("src", "assets/icon-arrow-up.svg");
DesktopArrowUpFeatures.setAttribute("alt", "");

     // Replace arrow-down with arrow-up for Company
const DesktopArrowDownCompany = document.getElementsByClassName("desktop-arrow-icon-down")[1];
const DesktopArrowUpCompany = document.createElement("img")
DesktopArrowUpCompany.setAttribute("class", "desktop-arrow-icon-up");
DesktopArrowUpCompany.setAttribute("src", "assets/icon-arrow-up.svg");
DesktopArrowUpCompany.setAttribute("alt", "");

     // Event listeners
DesktopFeaturesContainer.addEventListener("click", DesktopDropDownListFeatures);
DesktopCompanyContainer.addEventListener("click", DesktopDropDownListCompany);

     // Functions
function DesktopDropDownListFeatures() {
    if (DesktopFeaturesLinks.className === "display-none") {
        DesktopFeaturesLinks.className = "display-block";

        DesktopArrowDownFeatures.parentNode.replaceChild(DesktopArrowUpFeatures, DesktopArrowDownFeatures);
    } else {
        DesktopFeaturesLinks.className = "display-none";

        DesktopArrowUpFeatures.parentNode.replaceChild(DesktopArrowDownFeatures, DesktopArrowUpFeatures);
    }
}

function DesktopDropDownListCompany() {
    if (DesktopCompanyLinks.className === "display-none") {
        DesktopCompanyLinks.className = "display-block";

        DesktopArrowDownCompany.parentNode.replaceChild(DesktopArrowUpCompany, DesktopArrowDownCompany);
    } else {
        DesktopCompanyLinks.className = "display-none";

        DesktopArrowUpCompany.parentNode.replaceChild(DesktopArrowDownCompany, DesktopArrowUpCompany);
    }
}
