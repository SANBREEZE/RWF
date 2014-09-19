SANBREEZE
#### Responsive Web Framework - 1.0.0 ALPHA

The SANBREEZE Responsive Web Framework implements the repsonsive web-layout to any website.

This framework contains JavaScript, CSS and CSS themes files, described as following:

|JavaScript: |A
|-------------|--
|sb-rwf.js | Development Version




<table>
	<tr>
		<td>JavaScript:</td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td>sb-rwf.js</td>
		<td>Development Version</td>
	</tr>
	<tr>
		<td>CSS:</td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td>sb-rwf.css</td>
		<td>Development Version</td>
	</tr>
	<tr>
		<td>CSS Themes (optional):</td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td></td>
		<td>rwf_dark.css</td>
		<td>Development Version</td>
	</tr>
	<tr>
		<td></td>
		<td>rwf_white.css</td>
		<td>Development Version</td>
	</tr>
</table>

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
