var Emberyo = window.Emberyo = Ember.Application.create();

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');

Emberyo.appName="bader";

Emberyo.dataarray=[
{id:1,name:"bader",age :"24",city:"madinah"},
{id:2,name:"majed",city:"jeedah"},
{id:3,name:"samer",age :"23",city:"makkah"}

];
