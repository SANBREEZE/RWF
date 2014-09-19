SANBREEZE
#### Responsive Web Framework - 1.0.0 ALPHA

The SANBREEZE Responsive Web Framework implements the repsonsive web-layout to any website.

This framework contains JavaScript, CSS and CSS themes files, described as following:

<ul>JavaScript:
<li>sb-rwf.js         - Development Version</li>
</ul>

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
###### Standard Usage:
``` javascript
$.rwf();
```

###### Optional Usage:
```javascript
$.rwf({
  min-icon-size :32,              // Icon Min-Size in PX  (Default: 32px)
  max-icon-size :64,              // Icon Max-Size in PX  (Default: 64px)
  tabs  : {                       // Defines a Tab-Bar    (Default: None)
    tab : {
      icon  : "PathToYourIcon",   // Icon for Tab1
      title : "Tab Title"         // Title for Tab1
    },
    tab : {
      icon  : "PathToYourIcon",   // Icon for Tab2
      title : "Tab Title"         // Title for Tab2
    }
  }
});
```

--

#### Setup Options:
