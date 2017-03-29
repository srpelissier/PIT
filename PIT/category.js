﻿var app2 = angular.module('app2', []);

app2.controller('category', function ($scope) {
    this.categorieText = "";
    this.setCategorieText = function (text) {
        this.categorieText = text;
    }
    this.categorieDefinition = "";
    this.setCategorieDefinition = function (definition) {
        this.categorieDefinition = definition;
    }

    this.industries = [{
        definition: 'Application Services',
        text: 'Application Services.',
        images: ["icons/services/applife.png"]
    }, {
        definition: 'Digital Customer Experience',
        text: 'DCE.',
        images: ["icons/services/icon_connectivity_50x50px_0.png"]
    }, {
        definition: 'Business Services',
        text: 'Business Services.',
        images: ["icons/services/businessprocess.png"]
    }, {
        definition: 'Cloud Choice',
        text: 'We are really good at Cloud services. Actually if I am looking in my database...We have answered 300 questions about Cloud Services.',
        images: ["icons/services/cloud.png"]
    }, {
        definition: 'Insights & Data',
        text: 'Insights and Data.',
        images: ["icons/services/insightsdata.png"]
    }, {
        definition: 'Consulting Services',
        text: 'Consulting Services.',
        images: ["icons/services/conserve.png"]
    }, {
        definition: 'Technology and Engineering',
        text: 'Tech & Engineering.',
        images: ["icons/services/profserv.png"]
    }, {
        definition: 'Digital Services',
        text: 'Digital Services.',
        images: ["icons/services/digiservices.png"]
    }, {
        definition: 'Ready2Series',
        text: 'Ready2Series.',
        images: ["icons/services/bpo.png"]
    }, {
        definition: 'Digital Manufacturing',
        text: 'Digital Manufacturing.',
        images: ["icons/services/digitalmfg.png"]
    }, {
        definition: 'Secure your assets',
        text: 'secure your assets.',
        images: ["icons/services/secureyourassets.png"]
    }, {
        definition: 'Testing Services',
        text: 'Testing Services.',
        images: ["icons/services/testserve.png"]
    }, {

        definition: 'Other',
        text: 'Other.',
        images: ["icons/services/telecom.png"]
    }, {

    }];
});
   

