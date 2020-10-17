var sideNavStatus = false;

var openSideNav = () => {
	var sideNav = document.querySelector('.side_nav');
	var sideNavUl = document.querySelector('.side_nav_ul');
    if (sideNavStatus == false) {

        document.getElementById("icon").className = "fas fa-chevron-left";

        sideNav.style.visibility = "visible";
        sideNav.style.opacity = 1;
        sideNav.style.width = "380px";
        sideNavUl.style.width = "180px";
        sideNavStatus = true;
        console.log(sideNav);
        console.log(sideNavStatus);
        sideNavUl.style.transition = "all 0.5s ease-in-out";

    } else {

        document.getElementById("icon").className = "fas fa-chevron-right";

        sideNav.style.visibility = "hidden";
        sideNav.style.opacity = 0;
        sideNav.style.width = "0px";
        sideNavUl.style.width = "0px";
        sideNavUl.style.transition = "all 0.5s ease-in-out";



        sideNavStatus = false;
        console.log(sideNav);
        console.log(sideNavStatus);
    }
}
