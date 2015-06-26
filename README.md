SANBREEZE
#### Responsive Web Framework (RWF) - 1.0.0 ALPHA

--

The SANBREEZE Responsive Web Framework (RWF) implements repsonsive web-layout to any website - browser and device independent.

--

This framework contains JavaScript, CSS, CSS themes files and CSS Web-Font resources, described as following:

|Content:		|		|				|
|-----------------------|---------------|-------------------------------|
|JavaScript		|sb-rwf.js	|Development Version		|
|			|sb-rwf-min.js	|Deployment Version		|
|			|sb-rwf-pck.js	|Deployment Version (packed)	|
|			|		|				|
|CSS 			|		|				|
|			|sb-rwf.css	|Development Version		|
|			|		|				|
|CSS Themes (optional)	|		|				|
|			|rwf-dark.css	|Development Version		|
|			|rwf-white.css	|Development Version		|

--

#### Requirements  :
  jQuery 1.11.0 or higher
  
--

#### Usage:
Please see the demo files for right usage...

###### Standard Usage:
``` javascript
$.rwf();
```

###### Optional Usage (Example):
```javascript
$.rwf({
	theme : "URI or path to theme file",
	menu : [{
		title : "Menu Title 1",
		href : "URI or path"
	},
	{
		title : "Menu Title 2",
		href : "URI or path"
	},
	{
		title : "Menu Title 3",
		href : "URI or path",
		submenu : [
			{
				title : "Submenu Title 1",
				href : "URI or path"
			},
			{
				title : "Submenu Title 2",
				href : "URI or path"
			},
		]
	}],
	imageSlider : {
		interval : 7500
	}
});
```

--

#### Setup Options (JavaScript):

|Option			|Type		|Description				|Default	|
|-----------------------|---------------|---------------------------------------|---------------|
|theme			|string		|path to css theme			|dark		|
|menu			|array		|					|		|
|menu : title		|string		|title of menu entry			|none		|
|menu : href		|string		|path to URI or anker to a class or id	|none		|
|menu : submenu		|array		|					|		|
|menu : submenu : title	|string		|title of submenu entry			|none		|
|menu : submenu : href	|string		|path to URI or anker to a class or id	|none		|
|imageSlider		|array		|					|		|
|imageSlider : interval	|number		|milliseconds for slide			|7500		|

--

#### HTML IDs and Classes:

|ID			|Class		|Description				|Default	|
|-----------------------|---------------|---------------------------------------|---------------|
|rwf-header		|		|					|		|
|rwf-site-content	|		|					|		|
|rwf-footer		|		|					|		|
