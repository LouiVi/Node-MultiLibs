
//Configure app to use NodeJS as the main scripting engine
//giving you the full power of Node directly in your app!
cfg.Node

//Configure for Material UI and light theme.
cfg.MUI, cfg.Light

//Make sure the required node modules are installed to ide.
//(This downloads modules from https://www.npmjs.com).

modules = ["react", "moment", "vue", "bootstrap", "jquery", "suncalc", "lodash", "chartjs", "jimp", "xml2js", "html2canvas","image2css","qrcode","xml2js","csv","excel"];

for(t=0;t<modules.length;t++){
	ide.AddModule( modules[t] )
}

//Called when application is started.
function OnStart()
{
    //Set MUI primary color.
    app.InitializeUIKit( MUI.colors.teal.teal, "Light" )

    //Use the NodeJS 'moment' module to format date.
    moment = require('moment')
    var text = moment().format() + "\n"
     + moment().format("dddd, MMMM Do YYYY, h:mm:ss a") + "\n"
     + moment().format("ddd, hA") + "\n"
     + moment().format("[Today is] dddd") + "\n"

    //Create a MUI card layout.
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    var options = { title: "Node Demo", body: text,
        buttonText: "SEE MORE", width: 0.94 }
    var card = MUI.CreateCard(options)
    card.SetOnButtonTouch( card_OnBtnTouch )
    lay.AddChild(card)

    //Add main layout to app.
    app.AddLayout(lay)
}

//Handle 'see more' button.
function card_OnBtnTouch(btnText, cardName)
{
    app.OpenUrl( "https://www.npmjs.com" )
}