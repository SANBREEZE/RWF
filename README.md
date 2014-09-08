SANBREEZE
#### Responsive Web Framework (ALPHA)

The SANBREEZE Responsive Web Framework implements the repsonsive web-layout to any website.

This framework contains 3 JavaScript files and 2 CSS files, described as following:

<ul>JavaScript:
<li>sb-rwjs.js      - Development Version</li>
<li>sb-rwjs-min.js  - Deployment Version</li>
<li>sb-rwjs-pck.js  - Packed Deployment Version</li>
</ul>

<ul>CSS:
<li>sb-rwjs.css     - Development Version</li>
<li>sb-rwjs-min.css - Deployment Version</li>
</ul>


--

#### Requirements  :
  jQuery 1.11.0 or higher (except 2.x or higher)
  
--

#### Usage:
###### Standard Usage:
``` javascript
$().SB_RWJS().setup();
```

###### Optional Usage:
```javascript
$().SB_RWJS().setup({
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
