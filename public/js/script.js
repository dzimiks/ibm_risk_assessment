$(document).ready(function () {
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });

    // Dropdown menu
    $(".sidebar-dropdown > a").click(function () {
        $(".sidebar-submenu").slideUp(200);

        if ($(this).parent().hasClass("active")) {
            $(".sidebar-dropdown").removeClass("active");
            $(this).parent().removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this).next(".sidebar-submenu").slideDown(200);
            $(this).parent().addClass("active");
        }
    });

    $(".sidebar-dropdown-2 > a").click(function () {
        $(".sidebar-submenu-2").slideUp(200);

        if ($(this).parent().hasClass("active")) {
            $(".sidebar-dropdown-2").removeClass("active");
            $(this).parent().removeClass("active");
        } else {
            $(".sidebar-dropdown-2").removeClass("active");
            $(this).next(".sidebar-submenu-2").slideDown(200);
            $(this).parent().addClass("active");
        }
    });

    //toggle sidebar
    $("#toggle-sidebar").click(function () {
        $(".page-wrapper").toggleClass("toggled");
    });

    //Pin sidebar
    $("#pin-sidebar").click(function () {
        if ($(".page-wrapper").hasClass("pinned")) {
            // unpin sidebar when hovered
            $(".page-wrapper").removeClass("pinned");
            $("#sidebar").unbind("hover");
        } else {
            $(".page-wrapper").addClass("pinned");
            $("#sidebar").hover(
                function () {
                    // mouseenter
                    $(".page-wrapper").addClass("sidebar-hovered");
                },
                function () {
                    // mouseout
                    $(".page-wrapper").removeClass("sidebar-hovered");
                }
            )
        }
    });

    //toggle sidebar overlay
    $(".overlay").click(() => {
        $(".page-wrapper").toggleClass("toggled");
    });

    //switch between themes
    let themes = "default-theme legacy-theme chiller-theme ice-theme cool-theme light-theme";

    $('[data-theme]').click(() => {
        $('[data-theme]').removeClass("selected");
        $(this).addClass("selected");
        $('.page-wrapper').removeClass(themes);
        $('.page-wrapper').addClass($(this).attr('data-theme'));
    });

    // switch between background images
    let bgs = "bg1 bg2 bg3 bg4";

    $('[data-bg]').click(() => {
        $('[data-bg]').removeClass("selected");
        $(this).addClass("selected");
        $('.page-wrapper').removeClass(bgs);
        $('.page-wrapper').addClass($(this).attr('data-bg'));
    });

    // toggle background image
    $("#toggle-bg").change((e) => {
        e.preventDefault();
        $('.page-wrapper').toggleClass("sidebar-bg");
    });

    // toggle border radius
    $("#toggle-border-radius").change((e) => {
        e.preventDefault();
        $('.page-wrapper').toggleClass("boder-radius-on");
    });

    //custom scroll bar is only used on desktop
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(".sidebar-content").mCustomScrollbar({
            axis: "y",
            autoHideScrollbar: true,
            scrollInertia: 300
        });

        $(".sidebar-content").addClass("desktop");
    }

    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    $('#btnKupacID').click((e) => {
        e.preventDefault();

        // const kibanaOld = "https://47a7e36d434c46a284cd966d42828df9.eu-central-1.aws.cloud.es.io:9243/app/kibana#/dashboard/fc2d7b20-d187-11e9-9cc0-61448e3fa8be?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-1y,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(),gridData:(h:17,i:'1',w:21,x:0,y:15),id:e7d99fa0-d187-11e9-9cc0-61448e3fa8be,panelIndex:'1',type:visualization,version:'7.3.1'),(embeddableConfig:(vis:(params:(sort:(columnIndex:0,direction:desc)))),gridData:(h:18,i:'2',w:24,x:24,y:32),id:eaed07e0-d18c-11e9-9cc0-61448e3fa8be,panelIndex:'2',type:visualization,version:'7.3.1'),(embeddableConfig:(),gridData:(h:18,i:'3',w:24,x:0,y:50),id:'3087a590-d191-11e9-9cc0-61448e3fa8be',panelIndex:'3',type:visualization,version:'7.3.1'),(embeddableConfig:(),gridData:(h:15,i:'4',w:48,x:0,y:0),id:bb2332a0-d191-11e9-9cc0-61448e3fa8be,panelIndex:'4',type:visualization,version:'7.3.1'),(embeddableConfig:(),gridData:(h:18,i:'5',w:24,x:0,y:32),id:'6c421dd0-d197-11e9-9cc0-61448e3fa8be',panelIndex:'5',type:visualization,version:'7.3.1'),(embeddableConfig:(vis:(defaultColors:('0%25+-+10%25':'rgb(247,251,255)','10%25+-+20%25':'rgb(227,238,249)','20%25+-+30%25':'rgb(208,225,242)','30%25+-+40%25':'rgb(182,212,233)','40%25+-+50%25':'rgb(148,196,223)','50%25+-+60%25':'rgb(107,174,214)','60%25+-+70%25':'rgb(74,152,201)','70%25+-+80%25':'rgb(46,126,188)','80%25+-+90%25':'rgb(23,100,171)','90%25+-+100%25':'rgb(8,74,145)'),legendOpen:!f)),gridData:(h:17,i:'6',w:27,x:21,y:15),id:'8ae3f690-d1a7-11e9-9cc0-61448e3fa8be',panelIndex:'6',type:visualization,version:'7.3.1'),(embeddableConfig:(),gridData:(h:18,i:'7',w:24,x:24,y:50),id:'9850af10-d1ae-11e9-9cc0-61448e3fa8be',panelIndex:'7',type:visualization,version:'7.3.1')),query:(language:kuery,query:''),timeRestore:!t,title:'Main+Dashboard',viewMode:view)";
        const kupacID = $('#kupacID').val();
        const changes = "('$state':(store:appState),meta:(alias:!n,controlledBy:'1567894826071',disabled:!f,index:b7a67e40-d1ad-11e9-9cc0-61448e3fa8be,key:KupacID,negate:!f,params:(query:" + kupacID + "),type:phrase,value:'" + kupacID.toLocaleString() + "'),query:(match:(KupacID:(query:" + kupacID + ",type:phrase))))";
        const kibana = "https://47a7e36d434c46a284cd966d42828df9.eu-central-1.aws.cloud.es.io:9243/app/kibana#/dashboard/fc2d7b20-d187-11e9-9cc0-61448e3fa8be?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-1y,to:now))&_a=(description:'',filters:!(" + changes + "),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(),gridData:(h:17,i:'1',w:21,x:0,y:15),id:e7d99fa0-d187-11e9-9cc0-61448e3fa8be,panelIndex:'1',type:visualization,version:'7.3.1'),(embeddableConfig:(vis:(params:(sort:(columnIndex:0,direction:desc)))),gridData:(h:18,i:'2',w:24,x:24,y:32),id:eaed07e0-d18c-11e9-9cc0-61448e3fa8be,panelIndex:'2',type:visualization,version:'7.3.1'),(embeddableConfig:(),gridData:(h:18,i:'3',w:24,x:0,y:50),id:'3087a590-d191-11e9-9cc0-61448e3fa8be',panelIndex:'3',type:visualization,version:'7.3.1'),(embeddableConfig:(),gridData:(h:15,i:'4',w:48,x:0,y:0),id:bb2332a0-d191-11e9-9cc0-61448e3fa8be,panelIndex:'4',type:visualization,version:'7.3.1'),(embeddableConfig:(),gridData:(h:18,i:'5',w:24,x:0,y:32),id:'6c421dd0-d197-11e9-9cc0-61448e3fa8be',panelIndex:'5',type:visualization,version:'7.3.1'),(embeddableConfig:(vis:(defaultColors:('0%25+-+10%25':'rgb(247,251,255)','10%25+-+20%25':'rgb(227,238,249)','20%25+-+30%25':'rgb(208,225,242)','30%25+-+40%25':'rgb(182,212,233)','40%25+-+50%25':'rgb(148,196,223)','50%25+-+60%25':'rgb(107,174,214)','60%25+-+70%25':'rgb(74,152,201)','70%25+-+80%25':'rgb(46,126,188)','80%25+-+90%25':'rgb(23,100,171)','90%25+-+100%25':'rgb(8,74,145)'),legendOpen:!f)),gridData:(h:17,i:'6',w:27,x:21,y:15),id:'8ae3f690-d1a7-11e9-9cc0-61448e3fa8be',panelIndex:'6',type:visualization,version:'7.3.1'),(embeddableConfig:(),gridData:(h:18,i:'7',w:24,x:24,y:50),id:'9850af10-d1ae-11e9-9cc0-61448e3fa8be',panelIndex:'7',type:visualization,version:'7.3.1')),query:(language:kuery,query:''),timeRestore:!t,title:'Main+Dashboard',viewMode:view)";

        $('#kibanaMainDashboard').attr('src', kibana);
        $('#kupacIDValue').text(kupacID);

        if ($('#riskLevelDiv').hasClass('d-none')) {
            $('#riskLevelDiv').removeClass('d-none');
        }

        const riskLevelMoneyLabels = [500000, 2000000, 4000000, 6000000];
        $('#riskLevelMoney').text(riskLevelMoneyLabels[Math.floor(Math.random() * riskLevelMoneyLabels.length)].toLocaleString());

        const riskLevelLabels = ['No Risk', 'Low Risk', 'Medium Risk', 'High Risk'];
        const riskLevel500T = $('#riskLevel500T').text(riskLevelLabels[Math.floor(Math.random() * riskLevelLabels.length)]);
        const riskLevel2M = $('#riskLevel2M').text(riskLevelLabels[Math.floor(Math.random() * riskLevelLabels.length)]);
        const riskLevel4M = $('#riskLevel4M').text(riskLevelLabels[Math.floor(Math.random() * riskLevelLabels.length)]);
        const riskLevel6M = $('#riskLevel6M').text(riskLevelLabels[Math.floor(Math.random() * riskLevelLabels.length)]);

        setRiskLevelTextColor(riskLevel500T, 'riskLevel500T');
        setRiskLevelTextColor(riskLevel2M, 'riskLevel2M');
        setRiskLevelTextColor(riskLevel4M, 'riskLevel4M');
        setRiskLevelTextColor(riskLevel6M, 'riskLevel6M');
    });

    function setRiskLevelTextColor(riskLevel, riskLevelLabel) {
        switch (riskLevel[0].innerHTML) {
            case 'No Risk':
                $('#' + riskLevelLabel).removeClass();
                $('#' + riskLevelLabel).addClass('d-inline');
                $('#' + riskLevelLabel).addClass('font-weight-bold');
                $('#' + riskLevelLabel).addClass('text-green');

                // $('#card-border-color').removeClass();
                // $('#card-border-color').addClass('card');
                // $('#card-border-color').addClass('border-top-green');
                break;
            case 'Low Risk':
                $('#' + riskLevelLabel).removeClass();
                $('#' + riskLevelLabel).addClass('d-inline');
                $('#' + riskLevelLabel).addClass('font-weight-bold');
                $('#' + riskLevelLabel).addClass('text-yellow');

                // $('#card-border-color').removeClass();
                // $('#card-border-color').addClass('card');
                // $('#card-border-color').addClass('border-top-blue');
                break;
            case 'Medium Risk':
                $('#' + riskLevelLabel).removeClass();
                $('#' + riskLevelLabel).addClass('d-inline');
                $('#' + riskLevelLabel).addClass('font-weight-bold');
                $('#' + riskLevelLabel).addClass('text-orange');

                // $('#card-border-color').removeClass();
                // $('#card-border-color').addClass('card');
                // $('#card-border-color').addClass('border-top-orange');
                break;
            case 'High Risk':
                $('#' + riskLevelLabel).removeClass();
                $('#' + riskLevelLabel).addClass('d-inline');
                $('#' + riskLevelLabel).addClass('font-weight-bold');
                $('#' + riskLevelLabel).addClass('text-red');

                // $('#card-border-color').removeClass();
                // $('#card-border-color').addClass('card');
                // $('#card-border-color').addClass('border-top-red');
                break;
        }
    }
});