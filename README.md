SANBREEZE
#### Responsive Web Framework - 1.0.0 ALPHA

The SANBREEZE Responsive Web Framework implements the repsonsive web-layout to any website.

This framework contains JavaScript, CSS and CSS themes files, described as following:

<table>
<thead>A</thead>
<tr><td>JavaScript:</td><td></td></tr>
<tr><td>sb-rwf.js</td><td>Development Version</td></tr>
<tr></tr>
</table>

<ul>CSS:
<li>sb-rwf.css        - Development Version</li>
</ul>

<ul>CSS Themes (optional):
<li>rwf_dark.css      - Development Version</li>
<li>rwf_white.css     - Development Version</li>
</ul>

--

#### Requirements  :
  jQuery 1.11.0 or higher (except 2.x or higher)
  
--

#### Usage:
Please see the demo files for right usage...

###### Standard Usage:
``` javascript
$.rwf();
```

###### Optional Usage:
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
	}]
});
```

--

#### Setup Options:
