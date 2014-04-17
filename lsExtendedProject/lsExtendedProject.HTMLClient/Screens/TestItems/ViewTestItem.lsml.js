/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewTestItem.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.TestItem.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.TestItem." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

