function addWidgetsForm0fd4fc08c6a7c4d() {
    Form0fd4fc08c6a7c4d.setDefaultUnit(kony.flex.DP);
    var Button0gfee5c8b7ad340 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button0gfee5c8b7ad340",
        "isVisible": true,
        "left": "31dp",
        "skin": "slButtonGlossBlue",
        "text": "Dummy",
        "top": "234dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    Form0fd4fc08c6a7c4d.add(Button0gfee5c8b7ad340);
};

function Form0fd4fc08c6a7c4dGlobals() {
    Form0fd4fc08c6a7c4d = new kony.ui.Form2({
        "addWidgets": addWidgetsForm0fd4fc08c6a7c4d,
        "enabledForIdleTimeout": false,
        "id": "Form0fd4fc08c6a7c4d",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "button",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "button",
            "labelRightSideView": "Edit"
        },
        "titleBarSkin": "slTitleBar"
    });
};