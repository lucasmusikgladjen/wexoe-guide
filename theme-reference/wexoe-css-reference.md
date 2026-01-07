# Wexoe/Enfold CSS Reference

> **För utvecklare och LLMs:** Detta dokument innehåller de CSS-filer som är relevanta för att förstå och överskrida Enfolds styling.

Generated: 2026-01-07T15:37:36.027Z
URL: https://wexoe.se/

---

## 📋 Översikt

| Kategori | Filer | Total storlek |
|----------|-------|---------------|
| Enfold Core | 7 | 179.4 KB |
| Enfold Komponenter | 17 | 85.3 KB |
| Avia Snippets | 3 | 30.5 KB |
| Custom (Wexoe) | 2 | 175.2 KB |

---

## 🎯 TL;DR - Vanliga problem och lösningar

### Listor visar ikoner istället för bullets
```css
/* Enfold sätter ikoner via ::before - döda dem */
.custom-zone li::before {
  content: none !important;
  display: none !important;
}
.custom-zone ul { list-style-type: disc !important; }
.custom-zone ol { list-style-type: decimal !important; }
```

### CSS appliceras inte
```css
/* Enfold använder !important överallt - du måste också */
.my-element { color: red !important; }

/* Eller använd högre specificitet */
body .my-element { color: red; }
```

### Total isolering behövs
Använd Shadow DOM - se snippets i repot.

---

## 🔴 Enfold Core

Dessa filer definierar grundläggande styling som påverkar allt.


### grid.css
**Size:** 11.1 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/css/grid.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css

/* Table of Contents
==================================================
    #Base 960 Grid
    #Tablet (Portrait)
    #Mobile (Portrait)
    #Mobile (Landscape)
    #Clearing */
/* #Base 960 Grid
================================================== */
html {
	min-width: 910px;
}

html.responsive {
	min-width: 0px;
}

.boxed#top {
	margin: 0 auto;
	overflow: visible; /* position:relative; z-index: 3; */
}

.container {
	position: relative;
	width: 100%;
	margin: 0 auto;
	padding: 0px 50px;
	clear: both;
}

.inner-container{
	position: relative;
	height:100%;
	width:100%;
}

/*no z-index for container_wrap or fixed bgs start disapearing when other elements transition -> weird chrome bug*/
.container_wrap {
	clear: both;
	position: relative;
	/* z-index: 1; */
	border-top-style: solid;
	border-top-width: 1px;
}

.unit, .units {
	float: left;
	display: inline;
	margin-left: 50px;
	position: relative;
	z-index: 1;
	min-height: 1px;
}
.row {
	position: relative;
	margin-bottom: 20px;
	clear: both;
}


#wrap_all {
	width: 100%;
	position: static; /*fixes chrome 40 issue with fixed section bgs*/
	z-index: 2;
	overflow: hidden;
}

.boxed #wrap_all {
	overflow: visible; /*needed for cart icon */
}


/* Nested Column Classes */
body .unit.alpha,
body .units.alpha,
body div .first {
	margin-left: 0;
	clear: left;
}
body .unit.alpha, body .units.alpha {
	width: 100%;
}

/* Base sizes */
.container .av-content-full.units  {
	width: 100%
}

.container .av-content-small.units {
	width: 73%
}

.boxed#top, .html_boxed.html_header_sticky #header{
	width: 1010px;
}

.container{
	max-width: 1010px;
}


/* #Tablet (Portrait)
================================================== */
/* Note: Design for a width of 768px, Gutter: 30px, Unit: 32px */
@media only screen and (min-width: 768px) and (max-width: 989px)
{
	.responsive #top {
		overflow-x: hidden;
	}

	.responsive .boxed#top,
	.responsive.html_boxed.html_header_sticky #header{
		width: 782px;
	}

	.responsive .container{
		max-width: 782px;
	}

	.responsive.html_mobile_menu_tablet .boxed #wrap_all {
		overflow: hidden; /*needed for mobile menu scrolling */
	}
}



/* All Tablets and smaller */
@media only screen and (max-width: 989px)
{
	.responsive #top #wrap_all .flex_column.av-break-at-tablet,
	.responsive #top #wrap_all .av-break-at-tablet .flex_cell {
		margin: 0;
		margin-bottom: 20px;
		width: 100%;
		display: block;
	}

	/*	added 5.0.2: remove 20px only between 767px and 989px   */
	.responsive #top #wrap_all .av-break-at-tablet .flex_cell.no_margin{
		margin-bottom: 0;
	}

	.responsive #top #wrap_all .av-break-at-tablet-flextable,
	.responsive .av-layout-grid-container.av-break-at-tablet {
		display: block;
	}

	.responsive #top #wrap_all .av-break-at-tablet-flextable.av-mobile-columns-flex{
		display: flex;
		flex-direction: column;
	}

	.responsive #top #wrap_all .av-break-at-tablet-flexwrapper.av-column-wrapper-individual.av-mobile-columns-flex{
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.responsive #top #wrap_all .av-break-at-tablet-flextable.av-mobile-columns-flex.av-columns-reverse,
	.responsive #top #wrap_all .av-break-at-tablet-flexwrapper.av-column-wrapper-individual.av-mobile-columns-flex.av-columns-reverse{
		flex-direction: column-reverse;
	}

	.responsive #top #wrap_all .av-flex-cells .no_margin{
		height:auto !important;
		overflow: hidden;
	}

	.responsive #top #wrap_all .av-layout-grid-container .av-break-at-tablet .av_one_full,
	.responsive #top #wrap_all .av-layout-grid-container .av-break-at-tablet-flextable .av_one_full{
		margin-bottom: 0;		/*  https://github.com/KriesiMedia/wp-themes/issues/4095  */
	}
}


/*  #Mobile (Portrait)
================================================== */

@media only screen and (max-width: 767px)
{
	.responsive .boxed #wrap_all {
		overflow: hidden; /*needed for mobile menu scrolling */
	}

	.responsive #top {
		overflow-x: hidden;
	}

	.responsive .boxed#top, .responsive #top.boxed .stretch_full,
	.responsive.html_boxed.html_header_sticky #header,
	.responsive.html_boxed.html_header_transparency div #header{
		width: 100%;
		max-width: 100%;
	}

	.responsive #top .flex_column_table_cell{
		display: block;
	}

	.responsive #top .flex_column_table{
		display:block;
	}

	.responsive #top #wrap_all .av-mobile-columns-flex{
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.responsive #top #wrap_all .av-mobile-columns-flex.av-columns-reverse{
		flex-direction: column-reverse;
	}

	.responsive #top #wrap_all .container {
		width: 85%;
		max-width: 85%;
		margin: 0 auto;
		padding-left:0;
		padding-right:0;
		float:none;
	}
	.responsive .units, .responsive .unit {
		margin: 0;
	}

	.responsive #top .container .av-content-small,
	.responsive #top #wrap_all .flex_column,
	.responsive #top #wrap_all .av-flex-cells .no_margin {
		margin: 0;
		margin-bottom: 20px;
		width: 100%;
	}

	.responsive #top #wrap_all .av-flex-cells .no_margin{
		display: block;
		margin: 0;
		height:auto !important;
		overflow: hidden;
		padding-left:8% !important;
		padding-right:8% !important;
	}

	.responsive #top #wrap_all .av-flex-cells .no_margin .flex_cell_inner{
		width: 100%;
		max-width: 100%;
		margin: 0 auto;
	}

	.responsive #top #wrap_all .av-flex-cells .no_margin.av-zero-padding{
		padding-left:0% !important;
		padding-right:0% !important;
	}

	.responsive #top #wrap_all .flex_column:empty{
		margin:0;
	}

	.responsive #top #wrap_all .av-layout-grid-container .av_one_full{
		margin-bottom: 0;		/*  https://github.com/KriesiMedia/wp-themes/issues/4095  */
	}
}
/* #Mobile (Landscape)
================================================== */
/* Note: Design for a width of 480px */
@media only screen and (min-width: 480px) and (max-width: 767px)
{

}

/* #Clearing
================================================== */
/* Self Clearing Goodness */
.container:after {
	content: "\0020";
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
}
/* Use clearfix class on parent to clear nested units,
    or wrap each row of units in a <div class="row"> */
.clearfix:before,
.clearfix:after,
.flex_column:before,
.flex_column:after,
.widget:before,
.widget:after
{
	content: '\0020';
	display: block;
	overflow: hidden;
	visibility: hidden;
	width: 0;
	height: 0;
}

.flex_column:after,
.clearfix:after {
	clear: both;
}
.row,
.clearfix {
	zoom: 1;
}

/* You can also use a <br class="clear" /> to clear units */
.clear {
	clear: both;
	display: block;
	overflow: hidden;
	visibility: hidden;
	width: 0;
	height: 0;
}

/* Columns for better content separation
================================================== */
body div .first,
body div .no_margin {
	margin-left: 0;
}

div .flex_column {
	z-index: 1;
	float: left;
	position: relative;
	min-height: 1px;
	width: 100%;
}
div .av_one_fifth {
	margin-left: 6%;
	width: 15.2%;
}

div .av_one_fourth {
	margin-left: 6%;
	width: 20.5%;
}

div .av_one_third {
	margin-left: 6%;
	width: 29.333333333333332%;
}
div .av_two_fifth {
	margin-left: 6%;
	width: 36.4%;
}
div .av_one_half {
	margin-left: 6%;
	width: 47%;
}
div .av_three_fifth {
	margin-left: 6%;
	width: 57.599999999999994%;
}
div .av_two_third {
	margin-left: 6%;
	width: 64.66666666666666%;
}
div .av_three_fourth {
	margin-left: 6%;
	width: 73.5%;
}
div .av_four_fifth {
	margin-left: 6%;
	width: 78.8%;
}
div .av_one_sixth {
	margin-left: 6%;
	width: 11.666666666666666%;
}
div .av_one_seventh {
	margin-left: 6%;
	width: 9.142857142857142%;
}
div .av_one_eighth {
	margin-left: 6%;
	width: 7.25%;
}
div .av_one_nineth {
	margin-left: 6%;
	width: 5.777777777777778%;
}
div .av_one_tenth {
	margin-left: 6%;
	width: 4.6%;
}
/* Columns for better content separation (no margin)
================================================== */
#top div .no_margin {
	margin-left: 0;
	margin-top: 0;
}
#top .no_margin.av_one_fifth {
	width: 20%;
}
#top .no_margin.av_one_fourth {
	width: 25%;
}
#top .no_margin.av_one_third {
	width: 33.3%;
}
#top .no_margin.av_two_fifth {
	width: 40%;
}
#top .no_margin.av_one_half {
	width: 50%;
}
#top .no_margin.av_three_fifth {
	width: 60%;
}
#top .no_margin.av_two_third {
	width: 66.6%;
}
#top .no_margin.av_three_fourth {
	width: 75%;
}
#top .no_margin.av_four_fifth {
	width: 80%;
}
#top .no_margin.av_one_sixth {
	width: 16.666%;
}
#top .no_margin.av_one_seventh {
	width: 14.285714285714286%;
}
#top .no_margin.av_one_eighth {
	width: 12.5%;
}
#top .no_margin.av_one_nineth {
	width: 11.11111111111111%;
}
#top .no_margin.av_one_tenth {
	width: 10%;
}

/* Columns with equal height
================================================== */

#top .flex_column_table{
	display: table;
	table-layout: fixed;
	width: 100%;
	float: left;	/* added 4.7.4.1 to fix equal height after individual height columns  */
}

#top .flex_column_table.av-equal-height-column-flextable:not(:first-child){
	margin-top: 50px;  /* added 4.7.5.1 to fix inconsistent layout equal height after individual height columns but remove when first entry  */
}

#top .flex_column_table_cell{
	float: none;
	display: table-cell;
}

#top .av-flex-placeholder{
	display: table-cell;
	width: 6%;
}

.av-align-top{
	vertical-align: top;
}

.av-align-middle{
	vertical-align: middle;
}

.av-align-bottom{
	vertical-align: bottom;
}

/*breaking point logic for the common  1/4 element in ipads. makes sure that it converts to a 1/2 element in most cases*/
@media only screen and (min-width: 768px) and (max-width: 989px)
{
	.responsive .av_one_fourth.first.el_before_av_one_fourth.flex_column_div,
	.responsive .av_one_fourth.first + .av_one_fourth.flex_column_div,
	.responsive .av_one_fourth.first + .av_one_fourth + .av_one_fourth.flex_column_div,
	.responsive .av_one_fourth.first + .av_one_fourth + .av_one_fourth + .av_one_fourth.flex_column_div,
	.responsive .av_one_half.first + .av_one_fourth.el_before_av_one_fourth.flex_column_div,
	.responsive .av_one_half.first + .av_one_fourth.el_before_av_one_fourth + .av_one_fourth.flex_column_div,
	.responsive .avia-content-slider-inner .av_one_fourth.flex_column_div{
		margin-left: 4%;
		width: 48%;
	}

	/* added 4.8.9.1  broken layout with 25% width  https://kriesi.at/support/topic/4-column-layout-issues-on-ipad/  */
	.responsive #top .no_margin.av_one_fourth{
		margin-left: 0;
		width: 50%;
	}

	.responsive .av_one_fourth.first.el_before_av_one_fourth.flex_column_div,
	.responsive .av_one_fourth.first + .av_one_fourth + .av_one_fourth.flex_column_div,
	.responsive .av_one_half.first + .av_one_fourth.el_before_av_one_fourth.flex_column_div,
	.responsive .av_one_fourth.first + .av_one_fourth + .av_one_half.flex_column_div,
	.responsive .avia-content-slider-inner .av_one_fourth.first.flex_column_div{
		margin-left: 0%;
		clear: both;
	}

	.responsive .av_one_half.first.el_before_av_one_fourth.flex_column_div,
	.responsive .av_one_fourth.first + .av_one_fourth + .av_one_half.flex_column_div{
		width: 100%;
	}

	.responsive .av_one_half.first + .av_one_fourth.flex_column_div,
	.responsive .av_one_half.first + .av_one_fourth + .av_one_fourth.flex_column_div,
	.responsive .av_one_fourth.first + .av_one_fourth + .av_one_fourth.flex_column_div,
	.responsive .av_one_fourth.first + .av_one_fourth + .av_one_fourth + .av_one_fourth.flex_column_div,
	.responsive .av_one_fourth.first + .av_one_fourth + .av_one_half.flex_column_div{
		margin-top: 30px;
	}
}

```

</details>


### base.css
**Size:** 19.1 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/css/base.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
/* Table of Content
==================================================
	#Reset & Basics
	#Basic Styles
	#Site Styles
	#Typography
	#Links
	#Lists
	#Images
	#Buttons
	#Forms
	#Table
	#Misc
    #WordPress Generated Generics
    #print styles
*/

/* #Reset & Basics (Inspired by E. Meyers)
================================================== */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code, del, dfn,
em, img, ins, kbd, q, s, samp, small, strike, strong,
sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li,
fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary, time, mark, audio, video{
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

body figure{
	margin: 0;			/*	WP 6.1 bugfix		*/
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}

body {
	line-height: 1em;
}

ol,
ul {
	list-style: none;
}

.special-quote {
	quotes: none;
}

.special-quote:before,
.special-quote:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
	box-sizing: border-box;
}

/* #Basic Styles
================================================== */

html.responsive, .responsive body{
	overflow-x: hidden;
}

body {
	font: 13px/1.65em "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
	color: #444;
	-webkit-text-size-adjust: 100%;
}




/* #Typography
================================================== */

/*font-stacks*/
.arial-websave{
	font-family: Arial, Helvetica, Helvetica Neue, HelveticaNeue, Verdana, sans-serif;
}
.arial-black-websave{
	font-family: "Arial Black", Arial Bold, Gadget, sans-serif;
}
.arial-narrow-websave{
	font-family: Arial Narrow, Arial, sans-serif;
}
.helvetica-websave{
	font-family: Helvetica, "HelveticaNeue", "Helvetica Neue", Arial, Verdana, sans-serif;
}
.helvetica-neue-websave{
	font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif;
}
.lucida-sans-websave{
	font-family:"Lucida Sans", "Lucida Grande", "Lucida Sans Unicode", Helvetica, Helvetica Neue, HelveticaNeue, Arial, sans-serif;
}
.tahoma-websave{
	font-family: Tahoma, Verdana, Segoe, sans-serif;
}
.trebuchet-ms-websave{
	font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;
}
.verdana-websave{
	font-family: Verdana, Arial, Helvetica, Geneva, sans-serif;
}
.georgia-websave{
	font-family:"Georgia", "Times New Roman", Times, serif;
}
.lucida-bright-websave{
	font-family: Lucida Bright, Georgia, serif;
}
.palatino-websave{
	font-family: Palatino, Palatino Linotype, Palatino LT STD, Book Antiqua, Georgia, serif;
}
.times-new-roman-websave{
	font-family: TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif;
}
.courier-new-websave{
	font-family: Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter, monospace;
}
.lucida-sans-typewriter-websave{
	font-family: Lucida Sans Typewriter, Lucida Console, monaco, Bitstream Vera Sans Mono, monospace;
}
.copperplate-websave{
	font-family: Copperplate, Copperplate Gothic Light, fantasy;
}
.papyrus-websave{
	font-family: Papyrus, fantasy;
}
.brush-script-mt-websave{
	font-family: Brush Script MT, cursive;
}

/*default*/
h1,
h2,
h3,
h4,
h5,
h6 {
/*	font-family: "Georgia", "Times New Roman", Helvetica, Arial, sans-serif; */
	font-weight: 600;
}

#top h1 a,
#top h2 a,
#top h3 a,
#top h4 a,
#top h5 a,
#top h6 a {
	font-weight: inherit;
	text-decoration: none;
	color: inherit;
}

#top h1 strong,
#top h2 strong,
#top h3 strong,
#top h4 strong,
#top h5 strong,
#top h6 strong {
	color: inherit;
}

h1 {
	font-size: 34px;
	line-height: 1.1em;
	margin-bottom: 14px;
}
h2 {
	font-size: 28px;
	line-height: 1.1em;
	margin-bottom: 10px;
}
h3 {
	font-size: 20px;
	line-height: 1.1em;
	margin-bottom: 8px;		/*28*/
}
h4 {
	font-size: 18px;
	line-height: 1.1em;
	margin-bottom: 4px;		/*21*/
}
h5 {
	font-size: 16px;
	line-height: 1.1em;		/*17*/
}
h6 {
	font-size: 14px;
	line-height: 1.1em;
}

.flex_column h1 a:hover,
.flex_column h2 a:hover,
.flex_column h3 a:hover,
.flex_column h4 a:hover,
.flex_column h5 a:hover,
.flex_column h6 a:hover{
	text-decoration: underline;
}

p + h1,
p + h2,
p + h3,
p + h4,
p + h5,
p + h6{
	margin-top:1.5em;
}

p {
	margin: 0.85em 0;
}

p img {
	margin: 0;
}

p.lead {
	font-size: 21px;
	line-height: 27px;
}

em {
	font-style: italic;
}

strong,
b{
	font-weight: bold;
}

small {
	font-size: 80%;
}

hr {
	border: solid #ddd;
	border-width: 1px 0 0;
	clear: both;
	margin: 10px 0 30px;
	height: 0;
}

/*	Blockquotes  */
blockquote{
	border-left-style:solid;
	border-left-width:7px;
	padding-left:20px;
	margin-bottom:1em;
	margin-right:1em;
	font-size: 1.235em;
	line-height: 1.5em;
}

blockquote small,
blockquote cite,
blockquote small a,
blockquote cite a,
blockquote a small,
blockquote a cite{
	font-size: 12px;
}

mark{
	background-color: transparent;
	color:inherit;
}

/* #Links
================================================== */
a {
	text-decoration: none;
	outline: 0;
	max-width: 100%;
	max-width: none\9;
}

#top a:where(:not(.wp-element-button)) {
	text-decoration: none;				/*	WP 6.1 fix   */
}

a:hover,
a:focus,
a:visited {
	outline: 0;
	text-decoration: underline;
}

p a,
p a:visited {
	line-height: inherit;
}

a.avianolink,
.avianolink a{
	cursor: default;
}

#top .avia_hidden_link_text{
	display: none;
}


/* #Lists
================================================== */
ul, ol {
	margin-bottom: 20px;
}

ul {
	list-style: none outside;
	margin-left: 7px;
}

ol {
	list-style: decimal;
	margin-left: 15px;
}

ol, ul.square,
ul.circle,
ul.disc { }

ul.square {
	list-style: square outside;
}

ul.circle {
	list-style: circle outside;
}

ul.disc,
.entry-content-wrapper ul {
	list-style: disc outside;
}

ul ul,
ul ol,
ol ol,
ol ul {
	margin: 4px 0 5px 30px;
}

ul ul li,
ul ol li,
ol ol li,
ol ul li {
	margin-bottom: 6px;
}

.entry-content-wrapper li {
	margin-left: 1em;
	padding:3px 0;
}

.entry-content-wrapper div li {
	text-indent: 0;
}

.entry-content-wrapper .borderlist>li:first-child {
	border-top:1px solid;
}

.entry-content-wrapper .borderlist>li {
	border-bottom:1px solid;
	padding: 5px 0;
	list-style-position: outside;
	margin:0;
}


/* #Images
================================================== */

img,
a img {
	border:none;
	padding: 0;
	margin:0;
	display:inline-block;
	max-width: 100%;
	height:auto;
}

/* Hide Image Copyright everywhere by default on blog pages  */
small.avia-copyright{
	display: none;
}

.av-image-copyright{
	position: absolute;
	bottom: 0;
	z-index: 5;
}

.av-image-copyright.av-copyright-left{
	left: 0;
	padding: 0.2em 0.2em 0.2em 0.4em;
	border-top-right-radius: 5px;
}

.av-image-copyright.av-copyright-right{
	right: 0;
	padding: 0.2em 0.4em 0.2em 0.2em;
	border-top-left-radius: 5px;
}


/* #Buttons
================================================== */

input[type="submit"],
#submit,
.button{
	padding:9px 22px;
	cursor:pointer;
	border:none;
	-webkit-appearance: none;
	border-radius: 0px;
}


/* #Icons
================================================== */
[data-av_icon]:before {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-weight: normal;
	content: attr(data-av_icon);
	speak: never;
}


/* #Forms
================================================== */

#top form {
	margin-bottom: 20px;
}

#top fieldset {
	margin-bottom: 20px;
}

#top .input-text,
#top input[type="text"],
#top input[type="input"],
#top input[type="password"],
#top input[type="email"],
#top input[type="number"],
#top input[type="url"],
#top input[type="tel"],
#top input[type="search"],
#top textarea,
#top select {
	-webkit-appearance: none;
	border: 1px solid #e1e1e1;
	padding: 8px 6px;
	outline: none;
	font: 1em "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
	color: #777;
	margin: 0;
	width: 100%;
	display: block;
	margin-bottom: 20px;
	background: #fff;
	border-radius: 0px;
}

#top input[type="text"]:focus,
#top input[type="password"]:focus,
#top input[type="email"]:focus,
#top input[type="number"]:focus,
#top input[type="url"]:focus,
#top input[type="tel"]:focus,
#top input[type="search"]:focus,
#top textarea:focus {
	box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.2);
	color: #555;
}

#top textarea {
	min-height: 60px;
	line-height:1.5em;
}

#top label{
	font-weight: bold;
	font-size: 0.92em;
}

#top legend {
	display: block;
	font-weight: normal;
	font-size: 1.2em;
}

#top select {
	width: 100%;
}

#top input[type="checkbox"] {
	display: inline;
}

#top label span,
#top legend span {
	font-weight: normal;
	font-size: 13px;
	color: #444;
}

#top textarea{
	width:100%;
}

#top #wrap_all .valid .text_input,
#top #wrap_all .valid .text_area,
#top #wrap_all .valid .select{
	border:1px solid #9AA600;			/*#70A41B*/
}

#top #wrap_all .error .text_input,
#top #wrap_all .error .text_area,
#top #wrap_all .error .select{
	border:1px solid #DF653E;
}

#top #wrap_all .ajax_alert .text_input,
#top #wrap_all .ajax_alert .text_area,
#top #wrap_all .ajax_alert .select{
	border:1px solid #ffb628;
}

#top #wrap_all .valid .input_checkbox_label{
	color:#9AA600;
}

#top #wrap_all .error .input_checkbox_label{
	color:#DF653E;
}

/* #Table
================================================== */
table {
	width: 100%;
	padding: 0;
	margin: 0 0 20px 0;
	font-size: 13px;
}

table caption {
	padding: 0 0 5px 0;
	width: auto;
	font-style:italic;
	text-align: right;
	font-size: 12px;
}

th {
	font-weight:bold;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	text-align: left;
	padding: 9px 12px;
	border-style: solid;
	border-width: 1px;
	border-left:none;
	border-top:none;
}

td {
	font-size: 13px;
	padding: 9px 12px;
	border-style: solid;
	border-width: 1px;
	border-left:none;
	border-top:none;
}

tr th:first-child,
tr td:first-child{
	border-left-style: solid;
	border-left-width: 1px;
}

tr:first-child th,
tr:first-child td{
	border-top-style: solid;
	border-top-width: 1px;
}

#top th.nobg {
	background: none;
	border-top: 0;
}


/* #Other elements
================================================== */

/*code*/
pre{
	clear:both;
	border-style: solid;
	border-width: 1px;
	overflow:auto;
	padding:2em;
	line-height: 2em;
	font-size: 12px;
	background-image: linear-gradient(rgba(0, 0, 0, .05) 50%, transparent 50%, transparent);
	background-size: 100% 4em;
	font-family: Monaco, "Andale Mono", "Courier New", Courier, monospace;
	transition: all ease-in-out 0.5s;
	margin-bottom: 30px;
	position: relative;
	left:0;
	text-transform: none;
	width:100%;
}

code{
	font-family: Monaco, "Andale Mono", "Courier New", Courier, monospace;
}

iframe, object, embed{
	max-width:100%;
}

/* misc text styles */
sup{
	vertical-align: super;
	font-size: smaller;
}

sub{
	vertical-align: sub;
	font-size: smaller;
}


/* #Misc
================================================== */
.hidden {
	position: absolute;
	top:0;
	visibility: hidden;
}

.floatleft{
	float:left;
}

.floatright{
	float:right;
}

.clearboth{
	clear:both;
}

.special_amp{
	font-family: "Baskerville", "Palatino Linotype", "Palatino", "Times New Roman", serif;
	font-style: italic;
	font-size: 1.3em;
	line-height: 0.5em;
	font-weight:normal;
}

#top .noborder,
#top .noborder img{
	border:none;
	padding:0;
	background: transparent;
}

.bg_container{
	background-position: center center;
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: cover;
	height:100%;
	width:100%;
	position: fixed;
	z-index: -1;
	top:0;
	left:0;
}

.image-overlay{
	position: absolute;
	background: #fff;
	z-index: 300;
	height:100%;
	width:100%;
	opacity: 0;
}

.avia_transform a .image-overlay{
	transition: opacity 0.4s ease-in-out;
}

.avia_transform a:hover .image-overlay{
	opacity: 0.7 !important;
}

.image-overlay .image-overlay-inside{
	height:100%;
	width:100%;
	position: absolute;
	left:0;
	top:0;
}

.image-overlay .image-overlay-inside:before{
	position: absolute;
	border-radius: 50px;
	background: #000;
	height:80px;
	width:80px;
	line-height:80px;
	left:50%;
	top:50%;
	margin: -40px 0 0 -40px;
	z-index: 500;
	text-align: center;
	color:#fff;
}

.image-overlay .image-overlay-inside:before{
	content:"\E869";
	font-family: 'entypo-fontello';
	font-size: 18px;
	font-weight: normal;
}

.image-overlay.overlay-type-extern .image-overlay-inside:before{
	content:"\E832";
}

.image-overlay.overlay-type-video .image-overlay-inside:before{
	content:"\E897";
}

#top .hide-inner-overlay .image-overlay-inside{
	display: none;
}


/* #WordPress Generated Generics
================================================== */

/*img alignment*/
body .alignleft,
.entry-content-wrapper a:hover .alignleft{
	float:left;
	margin:4px 10px 0px 0;
	display: block;
	position: relative;
}

body .alignright,
.entry-content-wrapper a:hover .alignright {
	float:right;
	margin:4px 0px 0px 10px;
	display: block;
	position: relative;
}

body .aligncenter,
.entry-content-wrapper a:hover .aligncenter{
	clear:both;
	display:block;
	margin:10px auto;
	padding: 10px 0;
	position: relative;
}

.alignleft img,
.alignright img{
	display:block;
}


/*gallery*/
#top .gallery a,
#top .gallery a img{
	border:none;
	max-width: 100%;
	display: block;
	position: relative;
}

#top .gallery .gallery-item{
	margin:1px 1px 0 0;
	width:80px;
	height:80px;
	padding:0;
}

#top .gallery-caption{
	display: none;
}

.bypostauthor{

}

.gallery-icon{
	margin:0;
}

.gallery-item{
	margin:0;
}

.avia_textblock .gallery p{
	display:none;
}

/*image captions*/
div .wp-caption{
	max-width:100%;
	font-size: 11px;
	font-style: italic;
	border-width:1px;
	border-style: solid;
	margin:5px 15px 10px 0;
	position: relative;
}

#top .wp-caption img {
	border:medium none;
	display:block;
	padding:5px;
	margin:0;
	width:100%;
}

.wp-caption-text, #top .wp-caption .wp-caption-dd{
	display:block;
	font-size:11px;
	font-style:italic;
	margin:0 auto;
	padding:3px 10px 5px;
	text-align:center;
	font-family: Georgia,"Times New Roman";
	float: none;
}

#top .wp-caption.aligncenter{
	margin:5px auto 10px auto;
	padding:0;
}

#top .wp-caption.alignright{
	margin: 4px 0px 0px 10px;
}

/*smiley image*/
#top .wp-smiley{
	display:inline-block;
	border:none;
}

/*calendar table*/
#wp-calendar td, #wp-calendar th{
	text-align: center;
	font-size: 11px;
	padding: 3px;
}


@media only screen and (min-width: 990px)
{
	.responsive.av-no-preview #top #wrap_all .av-desktop-hide,
	.responsive.av-no-preview #top #wrap_all .av-desktop-font-size-hidden,
	.responsive.av-no-preview #top #wrap_all .av-desktop-font-size-title-hidden{
		display:none;
	}
}

/* Tablet Portrait size to standard 960 (devices and browsers) */
@media only screen and (min-width: 768px) and (max-width: 989px)
{
	.responsive.av-no-preview #top #wrap_all .av-medium-hide,
	.responsive.av-no-preview #top #wrap_all .av-medium-font-size-hidden,
	.responsive.av-no-preview #top #wrap_all .av-medium-font-size-title-hidden{
		display:none;
	}
}

/* Mobile Landscape Size to Tablet Portrait (devices and browsers) */
@media only screen and (min-width: 480px) and (max-width: 767px)
{
	.responsive.av-no-preview #top #wrap_all .av-small-hide,
	.responsive.av-no-preview #top #wrap_all .av-small-font-size-hidden,
	.responsive.av-no-preview #top #wrap_all .av-small-font-size-title-hidden{
		display:none;
	}
}

/* Mobile Portrait Size to Mobile Landscape Size (devices and browsers) */
@media only screen and (max-width: 479px)
{
	.responsive.av-no-preview #top #wrap_all .av-mini-hide,
	.responsive.av-no-preview #top #wrap_all .av-mini-font-size-hidden,
	.responsive.av-no-preview #top #wrap_all .av-mini-font-size-title-hidden{
		display:none;
	}
}


/* Print Styles
================================================== */
@media print
{
	.page-break{
		display:block;
		page-break-before:always;
	}

	p,
	a,
	strong{
		color:#000 !important;
	}

	a{
		text-decoration:underline;
	}

	.entry-content a:after{
		content:" [" attr(href) "] ";
	}

	.related_posts a:after{
		content:attr(title);
	}

	.container{
		width:100%;
	}

	#top{
		overflow-x:hidden;
	}

	.boxed#top{
		width:100%;
	}

	.container{
		width:100%;
		margin:0 auto;
	}

	.units,
	.unit{
		margin:0;
	}

	.container .one.unit,
	.container .one.units,
	.container .two.units,
	.container .three.units,
	.container .four.units,
	.container .five.units,
	.container .six.units,
	.container .seven.units,
	.container .eight.units,
	.container .nine.units,
	.container .ten.units,
	.container .eleven.units,
	.container .twelve.units,
	#top .flex_column{
		margin:0;
		margin-bottom:20px;
		width:100%;
	}

	#top.boxed .stretch_full{
		width:100%;
	}

	#top .offset-by-one,
	#top .offset-by-two,
	#top .offset-by-three,
	#top .offset-by-four,
	#top .offset-by-five,
	#top .offset-by-six,
	#top .offset-by-seven,
	#top .offset-by-eight,
	#top .offset-by-nine,
	#top .offset-by-ten,
	#top .offset-by-eleven{
		padding-left:0;
	}

	.avia-section-large .content,
	.avia-section-large .sidebar{
		padding-top:2%;
		padding-bottom:2%;
	}

	#top .flex_column.av_one_half{
		width:48%;
	}

	#top .flex_column.av_one_half.first{
		padding-right:2%;
	}

	.fixed_header #header,
	.html_header_top.html_header_sticky #header{
		position:relative;
		top:0;
	}

	.fixed_header #main{
		padding-top:0;
	}

	#header_main{
		border-bottom:0;
	}

	nav,
	#footer,
	#scroll-top-link,
	#av-cookie-consent-badge,
	.image-overlay,
	#top #main .sidebar,
	#commentform,
	.comment_container .miniheading,
	.comment_container .minitext,
	#top .avia-post-nav{
		display:none;
	}

	.avia-shadow{
		box-shadow:inset 0 0 0 rgba(0,0,0,0);
	}

	.grid-entry .inner-entry{
		margin-right: 0;
		box-shadow: 0 0 0 0 rgba(0,0,0,0);
	}

	.content{
		border:0;
	}

	.boxed .container{
		margin:0;
	}

	.avia-layerslider,
	.avia-fullwidth-slider{
		display:none;
	}

	.avia_transform .avia-icon-list .iconlist_icon{
		opacity:1;
		transform:scale(1);
	}

	#top .tab_titles{
		display:none;
	}

	#top .tabcontainer .tab.fullsize-tab{
		display:block;
		border-bottom:none;
	}

	#top .tab_content{
		display:block;
		visibility:visible;
		z-index:3;
		position:relative;
		overflow:auto;
		border-style:solid;
		border-width:1px;
		border-radius:2px;
		left:0;
		width:auto;
		background-color:#fcfcfc;
		color:#666;
	}

	#top .tab_inner_content{
		left:0;
	}

	#top .toggle_wrap{
		visibility:visible;
		display:block;
		position:static;
	}

	.grid-sort-container{
		width:60%;
		margin:0 auto;
	}

	#top .isotope-item{
		position:initial !important;
		top:0 !important;
		left:0 !important;
		transform:translate3d(0,0,0) !important;
	}

	.avia-progress-bar{
		margin:5px 0;
		border:1px solid #555 !important;
		border-radius:3px !important;
	}

	.avia-progress-bar .progress{
		box-shadow:inset 0 0 0 0 rgba(0,0,0,0) !important;
		border:0 !important;
	}

	.avia-progress-bar div.progress .bar{
		border:0 solid;
		border-right:1px solid #555 !important;
		border-radius:0;
	}

	.avia-testimonial-image{
		margin:0;
		width:100%;
		float:none;
		text-align:center;
		margin-bottom:15px;
		height:auto;
	}

	.avia-grid-testimonials .avia-testimonial-meta{
		margin-left:0;
	}

	body div .avia-testimonial{
		display:block;
		float:left;
	}

	.avia_transform .avia-testimonial .avia-testimonial-image{
		opacity:1;
		transform:scale(1);
	}

	.avia_transform .avia-gallery-thumb img{
		opacity:1;
	}
}

```

</details>


### layout.css
**Size:** 85.5 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/css/layout.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
/* Table of Content
======================================================================================================================================================
	#Site Styles
	#Blog Styles
	#Page Styles
	#Post Formats
	#Widget & Sidebar
	#Footer & #Socket
	#Comment
	#CSS Animations
	#Media Queries
	*/

/* ======================================================================================================================================================
#Site Styles
====================================================================================================================================================== */

#header{
	position: relative;
	z-index: 501; /*(issues/769)*/
	width:100%;
	background: transparent;
}

#header_main .container,
.main_menu ul:first-child > li a{
	height: 88px;
	line-height: 88px;
}

/*	header reading progress bar	*/
#header .header-reading-progress{
	position: absolute;
	height: 2px;
	width: 0%;
	border-radius: 0 5px 5px 0;
	/*filter: drop-shadow( 0 3px 5px rgba(0,0,0,0.4) );*/
	transition: all 0.1s linear;
}

#header .header-reading-progress.medium-bar{
	height: 4px;
}

#header .header-reading-progress.large-bar{
	height: 6px;
}

#header .header-reading-progress.very-large-bar{
	height: 8px;
}

/* sticky variation*/
.html_header_top.html_header_sticky #main{
	padding-top:88px;
}

.html_header_top.html_header_transparency #header{
	position: absolute;
}

.html_header_top.html_header_sticky #header{
	position: fixed;
}

.html_header_top.html_header_sticky.html_bottom_nav_header #main{
	padding-top:140px;
}

.html_bottom_nav_header .avia-search-tooltip {
	top: 101% !important;
	margin-left: -130px;
}

.html_header_top.html_header_sticky.html_header_unstick_top .header-scrolled-full#header {  }


/*big header*/
.html_header_top.html_header_sticky.html_large #main{
	padding-top:116px;
}

.html_header_top.html_header_sticky.html_large #header_main .container,
.html_header_top.html_header_sticky.html_large.html_main_nav_header .main_menu ul:first-child > li a {
	height: 116px;
	line-height: 116px;
}

.html_header_top.html_header_sticky.html_large.html_bottom_nav_header #main{
	padding-top:168px;
}

/* stretched variation*/
.html_header_top #top .av_header_stretch .container{
	width:96%;
	padding:0;
	max-width: 100%;
}

/*logo + position variation*/
.html_header_top #top .av_logo_right .logo{
	left:auto;
	right:0;
}

.html_header_top #top .av_menu_left .main_menu{
	left:0px;
	right:auto;
}

.html_header_top.html_main_nav_header #top .av_menu_left .main_menu{
	left:-13px;
	right:auto;
}

.html_header_top .av_bottom_nav_header #header_main_alternate .main_menu ul:first-child > li > a {
	height:50px;
	line-height: 50px;
}

.html_header_top .av_bottom_nav_header .av-logo-container .main_menu{
	display:none;
}

.html_header_top.html_bottom_nav_header #header_main{
	z-index: 3;
}

.html_header_top.html_bottom_nav_header #header_main_alternate .main_menu{
	clear: both;
	position: relative;
	line-height: 40px;
	height: 100%;
	width:100%;
	float:left;
}

.html_header_top.html_bottom_nav_header #header_main_alternate .main_menu>div,
.html_header_top.html_bottom_nav_header #header_main_alternate .main_menu ul:first-child{
	width:100%;
	height:50px;
}

.html_header_top.html_bottom_nav_header #header_main_alternate .main_menu ul:first-child>li:hover{
	z-index: 1000;
	position: relative;
}

.html_header_top.html_bottom_nav_header #header_main_alternate .main_menu .menu-item-search-dropdown{
	float:right;
}

#header_main_alternate{
	z-index: 2;
}

#header #header_main_alternate .container{
	max-height: none;
	height:auto;
}

#header_main_alternate .main_menu .menu li ul ul {
	left: 207px;
}

#header_main_alternate .avia_mega_div{
	right:auto;
	left:0;
}

.html_header_top.html_logo_center .main_menu{
	text-align: center;
}

.html_header_top.html_logo_center #header_main_alternate .main_menu ul:first-child{
	display: inline-block;
	width:auto;
	position: static;
}

.html_header_top.html_logo_center .logo{
	left:50%;
	transform: translate(-50%, 0);
}

.avia-msie-8 .logo img,
.avia-msie-8 .logo svg{
	height: 100%;
}

.avia-msie-8.html_header_top.html_logo_center .logo {
	left:46%; /*ie8 rule for somewhat centering the logo*/
}

.html_header_top.html_bottom_nav_header.html_logo_right .main_menu ul:first-child{
	width:auto;
	float:right;
}

.html_header_top.html_bottom_nav_header.html_logo_right .main_menu ul:first-child{
	width:auto;
	float:right;}

/*top bar variation*/
.html_header_top.html_header_topbar_active.html_header_sticky #top #main{
	padding-top:119px;
}

.html_header_top.html_header_topbar_active.html_header_sticky.html_large #top #main{
	padding-top:147px;
}

.html_header_top.html_header_topbar_active.html_header_sticky.html_bottom_nav_header #top #main{
	padding-top:170px;
}

.html_header_top.html_header_topbar_active.html_header_sticky.html_large.html_bottom_nav_header #top #main{
	padding-top:198px;
}

/*top bar element alignment*/
.av_icon_active_left .social_bookmarks{
	float: left;
}

.av_icon_active_right .social_bookmarks{
	float: right;
}

.av_secondary_right .sub_menu{
	float:right;
}

.av_phone_active_left .phone-info{
	float: left;
}

.av_phone_active_right .phone-info{
	float: right;
}


/*header with social icons and bottom nav */
.phone-info {
	float: left;
	font-weight: bold;
	line-height: 20px;
	font-size: 11px;
	padding:5px 0;
}

.phone-info div{
	display: inline-block;
	line-height: 1em;
}

.av_secondary_left .sub_menu>ul>li:last-child,
.av_secondary_left .sub_menu>div>ul>li:last-child{
	border:none;
	padding-right: 0;
}

.av_secondary_right .sub_menu>ul>li:last-child,
.av_secondary_right .sub_menu>div>ul>li:last-child{
	border:none;
	margin-right: 0px;
	padding-right:0;
	padding-left:10px;
}

.av_secondary_left .sub_menu>ul>li:first-child{
	padding-left:0;
}

.av_icon_active_left.av_secondary_left .sub_menu>ul>li:first-child{
	padding-left:10px;
}

.av_icon_active_right.av_secondary_right .sub_menu>ul>li:first-child{
	padding-left:10px;
}

.av_secondary_right .sub_menu{
	padding-left:10px;
}

.av_icon_active_right .social_bookmarks{
	padding-left:20px;
}

.av_secondary_left .sub_menu{
	padding-right:10px;
}

/* .html_boxed.html_header_sticky #header{ width:auto; } */
.html_boxed #main {
	position: static; /*necessary for boxed layout + fix bg sections */
	overflow: hidden;
}

.html_logo_right.html_bottom_nav_header #header_main .social_bookmarks{
	right:auto;
	left:0;
}


/*header with social icons and main nav */
#top nav .social_bookmarks{
	position: relative;
	top: 50%;
	margin-top: -16px;
	right: 0;
	overflow: hidden;
	clear: none;
	float: left;
}

.avia-menu.av_menu_icon_beside{
	padding-right:25px;
	margin-right:25px;
	border-right-width: 1px;
	border-right-style: solid;
	transition: border-color 0.2s ease-in-out;
}

.fallback_menu + .social_bookmarks {
	padding-left: 18px;
}

#header_meta{
	border-top:none;
	z-index: 10;
	min-height: 30px;
	border-bottom-style: solid;
	border-bottom-width: 1px;
	margin-bottom:-1px;
}

#header_meta .container{
	min-height: 30px;
}

#header_main{
	border-bottom-width: 1px;
	border-bottom-style: solid;
	z-index: 1;
}

#header.shadow{
	box-shadow:0px 0px 3px rgba(0, 0, 0, 0.2);
}

.header_bg{
	position: absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
	opacity:0.95;
	z-index: 0;
	transition: all 0.4s ease-in-out;
	-webkit-perspective: 1000px;
	-webkit-backface-visibility: hidden;
}

.html_header_sticky_disabled .header_bg {
	opacity: 1;
}

.avia-msie-8.html_header_transparency .av_header_sticky_disabled#header{
	background: transparent;
}

/*minimal header*/
.av_minimal_header .header_bg{
	opacity:1;
}

.av_minimal_header #header_main, .av_minimal_header #header_meta{
	border:none;
}

.av_minimal_header .avia-menu-fx{
	display: none;
}

#top #header.av_minimal_header .main_menu ul:first-child >li > ul,
#top #header.av_minimal_header .main_menu .avia_mega_div > .sub-menu{
	border-top: none;
}

.av_minimal_header #header_main .container,
.av_minimal_header .main_menu ul:first-child > li a{
	height:90px;
	line-height: 90px;
}

.html_header_top.html_header_sticky.html_large .av_minimal_header #header_main .container,
.html_header_top.html_header_sticky.html_large.html_main_nav_header .av_minimal_header .main_menu ul:first-child > li a{
	height:118px;
	line-height: 118px;
}

#top .av_minimal_header #s{
	border:none;
	padding: 12px 47px 12px 5px;
}

#top .av_minimal_header .av_ajax_search_entry{
	border:none;
}

.av_minimal_header_shadow{
	box-shadow: 0 0 2px 1px rgba(0,0,0,0.1);
}

.av_minimal_header_shadow.av_header_transparency{
	box-shadow: 0 0 0px 0px rgba(0,0,0,0.0);
}

.av_minimal_header #header_main_alternate{
	border:none;
}


/*transparent header*/
.html_header_transparency #main{
	padding-top: 0 !important;
}

#top .av_header_transparency .main_menu ul:first-child > li > a:hover,
#top .av_header_transparency .main_menu ul:first-child > li > a:focus,
#top #wrap_all .av_header_transparency .sub_menu > ul > li > a:hover,
#top #wrap_all .av_header_transparency .sub_menu > ul > li > a:focus{
	opacity: 0.8;
	transition: opacity 0.4s ease-in-out;
}

#top .av_header_transparency.av_alternate_logo_active .logo a > img,
#top .av_header_transparency.av_alternate_logo_active .logo a > svg{
	opacity: 0;
}

#top .av_header_transparency #header_main,
#top .av_header_transparency .avia-menu.av_menu_icon_beside{
	border-color: transparent;
}

#top .av_header_transparency .header_bg{
	background-color: transparent;
	opacity: 0;
}

#top .av_header_transparency .phone-info, #top .av_header_transparency .social_bookmarks li a {
	color:inherit;
}

#top #header.av_header_transparency .avia_mega_div{
	margin-top:1px;
	padding-top:1px;
}

#top .av_header_transparency .avia-menu-fx {
	bottom: 22%;
	width: 70%;
	left: 15%;
}

#top .av_header_transparency .phone-info.with_nav span{
	border-color: rgba(255, 255, 255, 0.25);
	color:#fff;
}

#top .av_header_transparency #header_meta li{
	border-color: rgba(255,255,255,0.25);
	color:inherit;
}

#top .av_header_transparency #header_meta{
	background: transparent;
	box-shadow: none;
	border-bottom: 1px solid rgba(255,255,255,0.25);
}

.html_header_transparency #header_meta{
	transition: background 0.4s ease-in-out;
}


/*transparent glassy*/
#top .av_header_glassy.av_header_transparency .header_bg{
	background-color: #fff;
	opacity: 0.1;
}

#top .av_header_glassy.av_header_transparency #header_main{
	border-color: rgba(255,255,255,0.25);
	border-top-color: transparent;
}

#top .av_header_glassy.av_header_transparency .avia-menu.av_menu_icon_beside{
	border-color: rgba(255, 255, 255, 0.25);
}

#top .av_header_glassy.av_header_transparency .social_bookmarks li,
#top .av_header_glassy.av_header_transparency .social_bookmarks li a{
	border-color: rgba(255,255,255,0.25);
	color:#fff;
}

#top .av_header_glassy.av_header_transparency #header_main_alternate{
	border-bottom-color: rgba(255,255,255,0.25);
}

/*with border*/
#top .av_header_with_border.av_header_transparency #header_main{
	border: 1px solid rgba(255,255,255,0.25);
	border-left: none;
	border-right: none;
	border-top-color: transparent;
}

#top .av_header_with_border.av_header_transparency .avia-menu.av_menu_icon_beside{
	border-color: rgba(255,255,255,0.25);
}


/*disabled search icon*/
.html_header_searchicon_disabled #top .av_header_border_disabled.av_bottom_nav_disabled .main_menu .menu>li:last-child>a .avia-menu-fx{
	padding-right:13px;
	box-sizing: content-box;
}


/*scrolldown header*/
#top .av_header_scrolldown{
	transition: opacity 0.6s ease-out, margin 0.6s ease-out;
	margin-top:0px;
}

#top .av_header_scrolldown.av_header_transparency{
	opacity: 0;
	margin-top:-250px !important;
}

.html_header_transparency.html_header_scrolldown #top .avia-builder-el-0 .container,
.html_header_transparency.html_header_scrolldown #top .avia-builder-el-0 .slideshow_inner_caption {
	padding-top: 0;
}

/* page as footer fix */
.html_header_transparency #top .footer-page-content .avia-builder-el-0 .container{
	padding-top: 0;
}

/*perma hidden*/
#top .header_hidden{
	display:none;
}


/*header separator variations*/
.av_seperator_small_border .av-main-nav > li > a > .avia-menu-text{
	border-left-style: solid;
	border-left-width:1px;
	padding-left: 13px;
	margin-left: -13px;
}

.av_seperator_small_border .av-main-nav > li:first-child > a > .avia-menu-text{
	border-left:none;
}

.av_seperator_big_border .av-main-nav > li > a{
	border-left-style: solid;
	border-left-width:1px;
	text-align: center;
	min-width: 90px;
}

#top .av_seperator_big_border .av-main-nav > li:last-child > a,
#top .av_seperator_big_border .av-main-nav > #menu-item-search > a{
	border-right-style: solid;
	border-right-width:1px;
}

#top .av_seperator_big_border .av-main-nav > #menu-item-search > a{
	border-left-style: solid;
	border-left-width:1px;
	border-color: inherit;
}

#top .av_seperator_big_border#header .av-menu-button > a .avia-menu-text{
	border:none;
}

.av_seperator_big_border .avia-menu.av_menu_icon_beside{
	padding-right: 0;
}

#top .av_seperator_big_border#header .av-main-nav > li > a{
	padding:0 13px;
}

#top .av_seperator_big_border .avia-menu.av_menu_icon_beside{
	border-right-style:none;
	border-right-width:0;
}

.html_bottom_nav_header #top .av_seperator_big_border .av-main-nav > #menu-item-search > a{
	border-left-style: solid;
	border-left-width:1px;
	border-color: inherit;
	margin-left: -1px;
}


.avia-menu-subtext,
#top .sub-menu .avia-menu-subtext{
	display:none;
}

/*menu flyout position*/
.html_header_top #top .av_menu_left .main_menu .menu li ul ul{
	left: 207px;
}


/*sidebar headers*/
.html_header_sidebar{}

.html_header_sidebar #top #header{
	width:300px;
	position: absolute;
	min-height:100%;
	border-bottom:none;
}

.html_boxed.html_header_sidebar #wrap_all{
	position: relative;
}

.html_header_sidebar #top #header_main{
	border-top:none;
}

.html_header_sidebar #header .container{
	width:100%;
	height:auto;
	line-height: 1.3em;
	padding:0;
	float:none;
	max-width: 100%;
}

.html_header_sidebar .header_bg{
	opacity: 1;
}

.html_header_left #top  #header{}

.html_header_right #top #header{
	right: 0;
}

.html_header_left #main{
	margin-left:300px;
	position: relative;
	border-left-style:solid;
	border-left-width:1px;
}

.html_header_right #main{
	margin-right:300px;
	position: relative;
	border-right-style:solid;
	border-right-width:1px;
}

.html_header_sidebar #top #header.av_always_sticky{
	position: fixed;
	-webkit-backface-visibility: hidden; /*fix for layout bugs when scrolling*/
}

.html_header_sidebar .logo{
	position: relative;
	clear:both;
	padding:40px;
	border-bottom-style: solid;
	border-bottom-width:1px;
	height:auto;
	max-height: none;
	width:100%;
}

.html_header_sidebar .logo img,
.html_header_sidebar .logo svg{
	width: 100%;
	max-height: none;
	padding: 0;
	height: auto;
}

.html_header_sidebar .main_menu{
	position: relative;
	clear:both;
	z-index: 200;
}

.html_header_sidebar #header .av-main-nav , .html_header_sidebar #header .av-main-nav-wrap{
	width:100%;
}

.html_header_sidebar #header .av-main-nav {
	padding:20px 0;
}

.html_header_sidebar #header .av-main-nav > li{
	float:none;
	display: block;
	margin:0 13%;
}

.html_header_sidebar #header .av-main-nav > li > a{
	line-height: 1.3em;
	height:auto;
	padding:15px 3px;
	border-bottom-style: solid;
	border-bottom-width:1px;
	margin:0 auto;
}

.html_header_sidebar #header .av-main-nav > li > a .avia-menu-text{
	font-size: inherit;			/* 16px removed in 4.9.1 - overrides advanced styling setting */
	font-weight: normal;
	display: block;
}

.html_header_sidebar #header .av-main-nav > li > a .avia-menu-subtext{
	display:block;
	font-weight:normal;
	font-size:12px;
	padding-top: 3px;
}

.html_header_sidebar #header .av-main-nav > li:last-child > a{
	border:none;
}

.html_header_sidebar #header .av-main-nav > li:nth-last-child(2) > a{
	border:none;
}

.html_header_sidebar #header .avia-menu-fx{
	display:none;
}

.html_header_sidebar .av-main-nav ul{
	border-top-width: 1px;
}

.html_header_left .av-main-nav ul{
	top:0;
	left:100%;
	box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
}

.html_header_left #top .av-main-nav ul ul{
	left:207px;
	top:-1px;
}

.html_header_right .av-main-nav ul{
	top:0;
	left:auto;
	right:100%;
	box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.1);
}

.html_header_right #top .av-main-nav ul ul{
	left:-207px;
	top:-1px;
}

.html_header_sidebar #top .av-main-nav ul a{
	padding: 12px 15px;
}

.html_header_sidebar #main > .avia-builder-el-0{
	border-top:none;
}


.html_header_sidebar #top #header .av-menu-button > a{
	border:none;
}

.html_header_sidebar #top #header .av-menu-button + .av-menu-button > a{
	padding-top:0;
}

.html_header_sidebar #top #header .av-menu-button-colored:hover{
	opacity: 0.8;
}


.html_header_left  #header .avia_mega_div{
	left:100%;
	top:0;
}

.html_header_right #header .avia_mega_div{
	right:100%;
	top:0;
}

.html_header_sidebar #top #header .avia_mega_div > .sub-menu{
	border-width: 1px;
	border-style:solid;
}


.html_header_sidebar.html_content_align_left  .container {
	float:left;
}

.html_header_sidebar.html_content_align_right .container {
	float:right;
}


.html_header_sidebar.html_content_align_left #footer,
.html_header_sidebar.html_content_align_right #footer,
.html_header_sidebar.html_content_align_left #socket,
.html_header_sidebar.html_content_align_right #socket
{
	overflow: hidden;
}

.html_header_sidebar .container_wrap {
	width: 100%;
}


#header .avia-custom-sidebar-widget-area{
	margin:0;
	padding:0;
	float:none;
}

#header .avia-custom-sidebar-widget-area .widget{
	border-top-style: solid;
	border-top-width:1px;
	padding:40px;
	width:100%;
	overflow: hidden;
}


.html_header_sidebar .av-sidebar-social-container{
	position: relative;
	clear: both;
	overflow: hidden;
}

.html_header_sidebar #top #header .social_bookmarks{
	position: relative;
	top:0;
	margin:0;
	border-top-style: solid;
	border-top-width:1px;
	clear:both;
	display:table;
	width:100%;
	table-layout: fixed;
}

.html_header_sidebar #top #header .social_bookmarks li{
	float:none;
	display:table-cell;
	text-align: center;
}

.html_header_sidebar #top #header .social_bookmarks li.social_icon_1 a{
	border:none;
}

.html_header_sidebar #top #header .social_bookmarks li a{
	width:100%;
	border-radius: 0;
	border-left-style: solid;
	border-left-width: 1px;
	padding:10px 0;
}

.html_header_sidebar .av_default_container_wrap, .html_header_sidebar .container_wrap_first{
	float: left;
}

/*main header on top, logo below*/
.html_top_nav_header #header_main_alternate{
	border-top:none;
	border-bottom-style: solid;
	border-bottom-width:1px;
}

.html_top_nav_header.html_minimal_header #header_main_alternate{
	border:none;
}
.html_top_nav_header div .logo{
	position: relative;
}

.html_top_nav_header .av-logo-container .inner-container{
	position: relative;
	overflow: hidden;
}

.html_top_nav_header.html_header_top.html_header_sticky #top #wrap_all #main{
	padding-top:50px;
}

.html_top_nav_header.html_header_top.html_header_sticky.html_header_topbar_active #top #wrap_all #main{
	padding-top:80px;
}

.html_top_nav_header .av-logo-container{
	height:88px;
}

.html_top_nav_header.html_large .av-logo-container{
	height:150px;
}

.html_top_nav_header #header_main{
	border:none;
}


/*burger menu*/
.av-hamburger {
	padding: 0 0 0 0;
	display: inline-block;
	cursor: pointer;
	font: inherit;
	color: inherit;
	text-transform: none;
	background-color: transparent;
	border: 0;
	margin: 0;
	overflow: visible;
}


.av-hamburger-box {
	width: 35px;
	height: 24px;
	display: inline-block;
	position: relative;
}

.av-hamburger-inner {
	display: block;
	top: 50%;
	margin-top: -2px;
}

.av-hamburger-inner,
.av-hamburger-inner::before,
.av-hamburger-inner::after {
	width: 40px;
	height: 3px;
	background-color: #000;
	border-radius: 3px;
	position: absolute;
	transition: transform 0.15s ease;
}

.av-hamburger-inner::before,
.av-hamburger-inner::after {
	content: "";
	display: block;
}

.av-hamburger-inner::before {
	top: -10px;
}

.av-hamburger-inner::after {
	bottom: -10px;
}

/*
 * Spin
 */
.av-hamburger--spin .av-hamburger-inner {
	transition-duration: 0.3s;
	transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.av-hamburger--spin .av-hamburger-inner::before {
	transition: top 0.1s 0.34s ease-in, opacity 0.1s ease-in, background-color 0.15s ease;
}

.av-hamburger--spin .av-hamburger-inner::after {
	transition: bottom 0.1s 0.34s ease-in, transform 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19) , background-color 0.15s ease;
}

.av-hamburger--spin.is-active .av-hamburger-inner {
	transform: rotate(225deg);
	transition-delay: 0.14s;
	transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

.av-hamburger--spin.is-active .av-hamburger-inner::before {
	top: 0;
	opacity: 0;
	transition: top 0.1s ease-out, opacity 0.1s 0.14s ease-out, background-color 0.15s ease;
}

.av-hamburger--spin.is-active .av-hamburger-inner::after {
	bottom: 0;
	transform: rotate(-90deg);
	transition: bottom 0.1s ease-out, transform 0.3s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1), background-color 0.15s ease;
}


/*own additions*/
.av-burger-menu-main{
	display:none;
	transition: padding 0.3s ease-out;
}

.js_active.html_burger_menu #avia-menu > li{
	display:none;
}

.js_active.html_burger_menu #avia-menu .av-burger-menu-main,
.html_burger_menu #top #avia-menu .menu-item-search-dropdown{
	display:block;
}

.av-burger-menu-main{
	cursor: pointer;
}

.av-burger-menu-main a{
	padding-left:10px;
}

.av-hamburger strong{
	display:none;
}

.av-hamburger-box {
    height: 8px;
}

.av-hamburger-inner,
.av-hamburger-inner::before,
.av-hamburger-inner::after {
	width:100%;
}

.html_burger_menu #top #wrap_all .menu-item-search-dropdown > a{
	font-size:24px;
}

html.av-burger-overlay-active #top .menu-item-search-dropdown > a{
	color:#fff;
}

.html_burger_menu_active #header .avia-menu .menu-item{
	display: none;
}

.html_burger_menu_active .menu-item-avia-special{
	display:block;
}

.html_burger_menu_active #top #wrap_all .menu-item-search-dropdown > a {
	font-size: 24px;
}

.html_header_sidebar #top div .av-burger-menu-main{
	display:none;
}

.html_burger_menu_active #top #wrap_all #header .av-burger-menu-main > a{
	background: transparent;
	position: relative;
	z-index: 10;
}

/*
* Spin Reverse
*/
.av-hamburger--spin-r .av-hamburger-inner {
	transition-duration: 0.3s;
	transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.av-hamburger--spin-r .av-hamburger-inner::before {
	transition: top 0.1s 0.34s ease-in, opacity 0.1s ease-in;
}

.av-hamburger--spin-r .av-hamburger-inner::after {
	transition: bottom 0.1s 0.34s ease-in, transform 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.av-hamburger--spin-r.is-active .av-hamburger-inner {
	transform: rotate(-225deg);
	transition-delay: 0.14s;
	transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

.av-hamburger--spin-r.is-active .av-hamburger-inner::before {
	top: 0;
	opacity: 0;
	transition: top 0.1s ease-out, opacity 0.1s 0.14s ease-out;
}

.av-hamburger--spin-r.is-active .av-hamburger-inner::after {
	bottom: 0;
	transform: rotate(-90deg);
	transition: bottom 0.1s ease-out, transform 0.3s 0.14s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.av-burger-overlay{
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	right: 0;
	z-index:100;
	display: none;
	overflow: hidden;
	opacity: 0;
}

.av-burger-overlay-inner,
.av-burger-overlay-bg{
	position: absolute;
	top: 0;
	left: 0;
	height:100%;
	width: 100%;
	min-height: 700px;
	display:table;
	vertical-align: middle;
	text-align: center;
	z-index: 5;
}

.av-burger-overlay-bg{
	z-index: 3;
	opacity: 0.9;
	background: #000;
	display: block;
	position: fixed;
}

.av-burger-overlay-scroll{
	overflow: auto;
	position: absolute;
	height: 100%;
	width: 100%;
	z-index: 10;
	-webkit-overflow-scrolling: touch;
}


#av-burger-menu-ul li a{
	position: relative;
	display: block;
	transition: none;
}

#av-burger-menu-ul li ul {
	background:transparent;
}

html.av-burger-overlay-active #header_meta,
html.av-burger-overlay-active #menu-item-shop.cart_dropdown,
html.av-burger-overlay-active .cart_dropdown,
html.av-burger-overlay-active #top .social_bookmarks{
    z-index: 1;
}

.av-burger-overlay-active #top .av-hamburger-inner,
.av-burger-overlay-active #top .av-hamburger-inner::before,
.av-burger-overlay-active #top .av-hamburger-inner::after{
	background-color:#fff;
}

.av-burger-overlay-active #top #header .av-main-nav > li > a{
	background: transparent;
}

.av-burger-overlay-active #scroll-top-link{
	z-index:150;
}

#top #av-burger-menu-ul{
	display: table-cell;
	height: 100%;
	width:100%;
	vertical-align: middle;
	padding:125px 0;
}

@media only screen and (orientation: landscape) and (max-width: 989px)
{
	#top #av-burger-menu-ul{
		vertical-align: top;
	}
}

.html_av-overlay-full #av-burger-menu-ul li{
	display:block;
	height:auto;
	width:100%;
	padding:0.3em 0;
	font-size: 35px;
}

.html_av-overlay-full #top #wrap_all #av-burger-menu-ul li{
	line-height:1.6em;
}

.html_av-overlay-full #top #wrap_all #av-burger-menu-ul li li{
	font-size: 0.6em;
	line-height:1.4em;
}

.html_av-overlay-full #top #wrap_all #av-burger-menu-ul li li li{
	font-size: 0.8em;
}

.html_av-overlay-full #top #wrap_all #av-burger-menu-ul li a{
	color:#fff;
	height:auto;
	line-height:inherit;
	font-size: inherit;
}

.html_av-overlay-full #av-burger-menu-ul li a:hover,
.html_av-overlay-full #av-burger-menu-ul li a:active,
.html_av-overlay-full #av-burger-menu-ul li a:focus{
	text-decoration: none;
	opacity: 0.7;
}

.html_av-overlay-full.av-burger-overlay-active #top #wrap_all #menu-item-search a,
.html_av-overlay-full.av-burger-overlay-active #top #wrap_all #menu-item-search a:hover{
	color:#fff;
}


.html_header_top.html_logo_center.av-burger-overlay-active .menu-item-avia-special{
	z-index: 150;
}

#top #wrap_all #av-burger-menu-ul > li{
	opacity:0;
	position: relative;
	top:18px;
	transition: opacity 0.3s ease-out, top 0.3s ease-out, left 0.3s ease-out;
	transform: translate3d(0,0,0); /*fixes disapearing in ios*/
}

.avia_desktop.avia-safari #top #wrap_all #av-burger-menu-ul > li {
	transform: none;
}

#top #wrap_all #header #av-burger-menu-ul > li.av-active-burger-items{
	opacity:1;
	top:0;
	left:0;
}


.html_av-overlay-full #top #av-burger-menu-ul .av-menu-button > a .avia-menu-text{
	padding: 0.5em 1.5em;
}

.html_av-overlay-full #top #av-burger-menu-ul .av-menu-button{
	margin-top: 0.4em;
}

.html_av-overlay-full #av-burger-menu-ul li ul li a {
	font-size: 1.3em;
}


#av-burger-menu-ul li a .avia-menu-subtext{
	display: block;
	font-size: 0.6em;
	line-height: 1.2em;
	margin: -10px 0 13px 0;
	opacity: 0.7;
	text-transform: none;
}

.html_av-overlay-side  #av-burger-menu-ul li a .avia-menu-subtext{
	font-size:1em;
	margin:0;
	opacity: 0.9;
}

#av-burger-menu-ul .avia-menu-fx{
	display:none;
}

/*small*/
#top .av-small-burger-icon{
	transform: scale(0.6);
	transform-origin: right;
}

#top #wrap_all #header .av-small-burger-icon a{
	padding:0;
}


/*side opening menu*/
.html_av-overlay-side .av-burger-overlay-bg{
	opacity: 0.3;
	cursor: pointer;
}

.html_av-overlay-side #top .av-burger-overlay li {
	margin:0;
}

.html_av-overlay-side #top #wrap_all .av-burger-overlay li a{
	line-height: 1.3em;
	height:auto;
	padding:15px 50px;
	display: block;
	text-align: left;
	text-decoration: none;
}

.html_av-overlay-side #top .av-burger-overlay li a:hover{
	text-decoration: none;
}
.html_av-overlay-side #top #wrap_all #av-burger-menu-ul > li{
	top:0;
	left:18px;
}

.html_av-overlay-side #top #wrap_all .av-burger-overlay li li a{
	padding-left:70px;
}

.html_av-overlay-side #top #wrap_all .av-burger-overlay li li li a{
	padding-left:90px;
}

.html_av-overlay-side #top #wrap_all .av-burger-overlay li li li li a{
	padding-left:110px;
}

.html_av-overlay-side #top #wrap_all .av-burger-overlay li li li li li a{
	padding-left:130px;
}

.html_av-overlay-side .av-burger-overlay-scroll{
	width:350px;
	right:0;
	max-width:100%;
	transform: translateX(350px);
	transition: all 0.5s cubic-bezier(0.75, 0, 0.25, 1);
}

.html_av-overlay-side.av-burger-overlay-active-delayed .av-burger-overlay-scroll{
	transform: translateX(0);
}

.html_av-overlay-side #top #wrap_all #av-burger-menu-ul > li{
	opacity:1;
	top:0;
	left:0;
}


/*side opening menu classic*/
.html_av-overlay-side-classic #top .av-burger-overlay{
	font-size: 1em;
}

.html_av-overlay-side-classic #av-burger-menu-ul{
	vertical-align: top;
}

.html_av-overlay-side-classic #top .av-burger-overlay li a{
	border-bottom-style: solid;
	border-bottom-width: 1px;
}

.html_av-overlay-side-classic #top .av-burger-overlay li li .avia-bullet{
	height: 1px;
	display: block;
	position: absolute;
	margin-top: 0;
	opacity: 0.3;
	border: none!important;
	width: 7px;
	left: 50px;
	top: 50%;
}

.html_av-overlay-side-classic #top .av-burger-overlay li li li .avia-bullet{
	left: 70px;
}

.html_av-overlay-side-classic #top .av-burger-overlay li li li li .avia-bullet{
	left: 90px;
}

.html_av-overlay-side-classic #top .av-burger-overlay li li li li li .avia-bullet{
	left: 110px;
}

.html_av-overlay-side-classic #top .av-burger-overlay li li li li li li .avia-bullet{
	left: 130px;
}


/*side opening menu minimal*/
.html_av-overlay-side-minimal .av-burger-overlay-bg{
	opacity: 0.1;
}

.html_av-overlay-side-minimal #top .av-burger-overlay{
	font-size: 1.1em;
}

.html_av-overlay-side-minimal #top .av-burger-overlay .sub-menu{
	font-size: 0.9em;
}


/*hidden submenu items*/
/*#top #av-burger-menu-ul .av-show-submenu > ul{display: block;}*/
.html_av-submenu-hidden #av-burger-menu-ul li ul{
	display:none;
}

.html_av-submenu-hidden .av-submenu-indicator{
	display: inline-block;
	padding:0 10px;
	font-size: 11px;
	opacity: 0.5;
	vertical-align: top;
	float: right;
	transition: all 0.2s ease-out;
	position: absolute;
	right: 30px;
	top: 50%;
	margin-top: -9px;
	height: 20px;
	line-height: 20px;
}

.html_av-submenu-hidden .av-submenu-indicator:before{
	content:"\E87d";
	font-family: 'entypo-fontello';
}

.html_av-submenu-hidden .av-show-submenu > a > .av-submenu-indicator{
	transform: rotate(90deg);
}


/*logo*/
div .logo{
	float: left;
	position: absolute;
	left: 0;
	z-index: 1;
}

.logo, .logo a{
	overflow: hidden;
	position: relative;
	display: block;
	height: 100%;
}

.logo img,
.logo svg{
	padding: 0;
	display: block;
	width: auto;
	height: auto;
	max-height: 100%;
	image-rendering: auto;
	position: relative;
	z-index: 2;
	height : 100%\9; /*hack: fixes ie8 logo*/
	height: auto\9; /*hack: fixes ie8 squished logo*/
	transition: opacity 0.4s ease-in-out;
}

.logo svg,
.logo.avia-img-svg-logo > a > img,
.logo .alternate.avia-img-svg-logo{
	height: 100%;
}

.logo img.alternate,
.logo .subtext.avia-svg-logo-sub svg{
	position: absolute;
	z-index: 1;
	top:0;
	left:0;
	opacity: 0;
}

.av_header_transparency .logo img.alternate,
.av_header_transparency .logo .subtext.avia-svg-logo-sub svg{
	opacity: 1;
}

/*menu*/
.main_menu{
	clear:none;
	position: absolute;
	z-index: 100;
	line-height:30px;
	height:100%;
	margin:0;
	right:0;
}

.main_menu .pointer_arrow_wrap{
	display:none;
}

.av-main-nav-wrap{
	float:left;
	position: relative;
	z-index: 3;
}

.av-main-nav-wrap ul{
	margin:0;
	padding: 0;
}


.av-main-nav{
	z-index: 110;
	position: relative;
}

.av-main-nav ul {
	display: none;
	margin-left:0;
	left:0;
	position: absolute;
	top: 100%;
	width: 208px;
	z-index: 2;
	padding:0;
	box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
	margin-top:-1px;
}

.av-main-nav ul li {
	margin:0;
	padding:0;
	width:100%;
}

.av-main-nav ul li a {
	border-right-style: solid;
	border-right-width:1px;
	border-left-style: solid;
	border-left-width:1px;
}

.av-main-nav ul li:last-child > a {
	border-bottom-style: solid;
	border-bottom-width: 1px;
}

.av-main-nav li{
	float:left;
	position:relative;
	z-index:20;
}

.av-main-nav li:hover{
	z-index: 100
}

.av-main-nav > li > ul {
	border-top-width:2px;
	border-top-style: solid;
}

.av-main-nav > li {
	line-height: 30px;
}

.av-main-nav li a {
	max-width:none; /* fixes IE8 menu width issue*/
}
.av-main-nav > li > a{
	display: block;
	text-decoration: none;
	padding:0 13px;
	font-weight: normal;
	font-weight: 600;
	font-size: 13px;
	transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out, border-color 0.4s ease-in-out;
}

.av-main-nav > li > a,
div #menu-item-shop.cart_dropdown{
	transition: none;
	transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out, border-color 0.4s ease-in-out;
}

.av_header_transparency .av-main-nav > li > a , .av_header_transparency #menu-item-shop.cart_dropdown{
	transition: border-color 0.2s ease-in-out;
}


#top .av-main-nav ul a{
	width:100%;
	height:auto;
	float:left;
	text-align:left;
	line-height:23px;
	padding:8px 15px;
	font-size: 12px;
	min-height: 23px;
	max-width: none;
	text-decoration: none;
	font-family: inherit;
}

#top .av-main-nav ul ul {
	left:-207px;
	top:0px;
	margin:0;
	border-top-style: solid;
	border-top-width: 1px;
	padding-top: 0px
}

.av-main-nav li:hover ul ul{
	display:none;
}

#top .av-main-nav li:hover > ul {
	display:block;
}


.avia-menu-fx{
	position: absolute;
	bottom:-1px;
	height:2px;
	z-index: 10;
	width:100%;
	left:0;
	opacity: 0;
	visibility: hidden;
}

.av-main-nav li:hover .avia-menu-fx,
.current-menu-item > a > .avia-menu-fx,
.av-main-nav li:hover .current_page_item > a > .avia-menu-fx{
	opacity: 1;
	visibility: visible;
}

.avia-menu-fx .avia-arrow-wrap{
	height:10px;
	width:10px;
	position: absolute;
	top:-10px;
	left:50%;
	margin-left:-5px;
	overflow: hidden;
	display:none;
	visibility: hidden;
}

.current-menu-item>a>.avia-menu-fx>.avia-arrow-wrap, .current_page_item>a>.avia-menu-fx>.avia-arrow-wrap{
	display:block;
}

.avia-menu-fx .avia-arrow-wrap .avia-arrow{
	top: 10px;
}


.html_main_nav_header.html_logo_left #top .main_menu .menu>li:last-child>a,
.html_bottom_nav_header #top #menu-item-search>a{
	padding-right:0;
}

.html_bottom_nav_header.html_logo_center #top .av_seperator_big_border #menu-item-search>a{
	padding-right:13px;
	border-right-style: solid;
	border-right-width: 1px;
}

.html_bottom_nav_header .av-logo-container .main_menu{
	display:none;
}


/*mega menu styles*/
.main_menu .avia-bullet{
	display:none
}

#top #header .menu-item-mega-parent.current-menu-item{
	overflow: visible!important;
}

#top #header .mega_menu_title a{
	color:inherit;
	font-size: 17px;
	line-height: 1.1em;
	padding:0;
	margin:0;
	background: transparent;
	border:none;
}

#top #header .mega_menu_title a:hover{
	text-decoration: underline;
}


#header .avia_mega_div{ /* use similar styles to .main_menu .menu ul */
	display: none;
	margin: -1px 0 0 0;
	right: 0;
	position: absolute;
	top: 100%;
	z-index: 2;
	box-shadow: 0 32px 60px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	padding:1px 0 0;
	text-align: left;
}

#header.av_minimal_header .avia_mega_div{
	margin:0;
	border-top-style:solid;
	border-top-width:1px;
}

#header.av_minimal_header .avia_mega_div .units{
	border-right:none;
}

#header .avia_mega_div .units{
	padding:0 14px 0 15px;
	margin:0;
	border-right-style:dotted;
	border-right-width:1px;
}

#header li:hover .avia_mega_div{
	display:block;
}

#top #header .avia_mega_div ul,
#top #header .avia_mega_div li{ /*reset list styles for mega menus*/
	position: relative;
	display:block;
	top:auto;
	left:auto;
	height:auto;
}

#top #header .avia_mega_div .sub-menu{
	overflow: hidden;
	width:100%;
	box-shadow: none;
	border-style:none;
	border-width:0px;
	position: relative;
	top:0;
	display:block;
	left:0;
	clear: both;
}

/*wrapper around all columns*/
#top #header .avia_mega_div > .sub-menu{
	display: table;
	padding:20px 30px 30px;
	border-top-style:solid;
	border-top-width:2px;
}

#top #header .avia_mega_div > .sub-menu.avia_mega_hr {
	padding-top: 30px;
}

/*columns*/
#top #header .avia_mega_div > .sub-menu > li{
	display: table-cell;
	float:none;
	padding-top:10px;
	padding-bottom:0;
	vertical-align: top;
}

#top #header .avia_mega_div > .sub-menu.avia_mega_hr{
	border-top-width:1px;
	border-top-style:dashed;
}

/*columns inner*/
#top #header .avia_mega_div > .sub-menu > li > ul{
	padding:0;
}


/*column lists*/
#top #header .avia_mega_div > .sub-menu > li > ul li{
	display: block;
	float: none;
	padding: 0;
	margin:0;
	list-style-type: circle;
	list-style-position: inside;
}

/*nested column lists*/
#top #header .avia_mega_div > .sub-menu > li > ul ul li{
	margin-left:15px;
}

/*column lists links*/
#top #header .avia_mega_div > .sub-menu > li > ul > li  a{
	width:auto;
	float:none;
	display: block;
	border:none;
	padding:3px 12px 3px 12px;
	font-weight: normal;
	height: auto;
	line-height: 23px;
}

#header .avia_mega_div .avia_mega_menu_columns_first{
	padding-left:0;
}

#header .avia_mega_div .avia_mega_menu_columns_last{
	padding-right:0;
	border-right-style:none;
	border-right-width:0;
}

.avia-bullet {
	display: block;
	position: absolute;
	height: 0;
	width: 0;
	top: 51%;
	margin-top: -3px;
	left: -3px;
	border-top: 3px solid transparent !important;
	border-bottom: 3px solid transparent !important;
	border-left: 3px solid green;
}

.avia_mega_div .avia-bullet {
	margin-top: 12px;
	left: 3px;
	display: block;
	top: 0;
}

/*mega text blocks*/
#header .mega_menu_title{
	margin-bottom:8px;
	font-size: 17px;
	line-height: 1.1em;
	font-weight: 600;
	display: block;
}

#header .avia_mega_text_block{
	line-height: 21px;
}

#top #header .avia_mega_div .sub-menu .avia_mega_text_block a{
	padding:0;
	display: inline;
	border:none;
	text-decoration: underline;
}


/*menu button style*/
#top #wrap_all #header .av-menu-button > a{
	background: transparent;
}

#top #wrap_all .av_header_border_disabled .av-menu-button > a{
	border:none;
}

.av-menu-button + .av-menu-button{
	margin-left: -10px;
}

.av-menu-button + .av-menu-button > a{
	padding-left:0px;
}

#top .av-menu-button > a .avia-menu-text{
	padding: 9px;
}

#top .av-menu-button > a .avia-menu-text{
	border: 2px solid;
	border-radius: 2px;
}

.av-menu-button > a .avia-menu-fx{
	display:none
}
.av-menu-button-colored  > a .avia-menu-text{
	padding: 11px 10px 10px 10px;
}

/* was introduced to have same height colored and ghost main menu buttons but does not work in certain situations: eg when border radius for all buttons is set to 100
#top .av-menu-button-colored  > a .avia-menu-text{border: 2px solid;  border-radius: 2px;position: relative;}
#top .av-menu-button-colored  > a .avia-menu-text:after{content: "";width: calc(100% + 4px);height: 1px;position: absolute;bottom:-2px;left: -2px;}
*/

.av-menu-button-colored  > a:hover .avia-menu-text{
	opacity: 0.9;
}

#top #header .av-menu-button > a .avia-menu-subtext{
	display:none;
}

#top #header .av-menu-button > a .avia-menu-text{
	text-align: center;
	white-space: nowrap;
}


/*ajax search*/
#top #menu-item-search{
	z-index: 100;
}

#top .menu-item-search-dropdown > a,
#searchform #searchsubmit,
.av_ajax_search_image, .iconfont{
	font-size: 17px;
}

#top #menu-item-search.menu-item-search-dropdown>a{
	border-left:none;
}

#top #menu-item-search:hover>a{
	background: transparent;
	color: inherit;
}

.avia-search-tooltip{
	position: absolute;
	z-index: 9999999;
	padding:0;
	width: 300px;
	top: 85% !important;
	margin-left: -120px;
	border-radius: 2px;
	box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.2);
	border-width:1px;
	border-style: solid;
}

.avia-search-tooltip .avia-arrow-wrap{
	width:20px;
	height:20px;
	position: absolute;
	top:-20px;
	right:10px;
	margin-left:-10px;
	overflow: hidden;
}

.avia-arrow{
	height:10px;
	width:10px;
	position: absolute;
	top:-6px;
	left:50%;
	margin-left:-5px;
	transform: rotate(45deg);
	border-width:1px;
	border-style: solid;
	visibility: hidden\9;
}

.avia-search-tooltip .avia-arrow{
	top: 15px;
}

#top #searchform {
	margin:0;
	padding:0;
}

#top #searchform>div{
	position: relative;
	max-width: 300px;
}

#top .widget #searchform>div{
	margin:0;
	max-width: 100%;
}

#top #searchform br{
	display:none;
}

#top #s{
	width:100%;
	position: relative;
	padding:11px 47px 11px 5px;
	z-index: 1;
	margin:0;
	box-shadow: none;
}

#top #searchsubmit, .ajax_load{
	width: 40px;
	height: 100%;
	line-height: 40px;
	padding: 0;
	position: absolute; right: 0; top : 0;
	z-index: 2;
	margin:0;
	border-radius: 0;
	min-width: 40px;
}

.avia_mobile #top #searchsubmit,
.avia_mobile .ajax_load{
	height: 41px;
}

.avia-search-tooltip #searchform>div{
	margin:16px;
}

.ajax_load{
	z-index: 5;
}

.ajax_load_inner{
	background: url("../images/layout/loading.gif") no-repeat scroll center center #fff;
	opacity: 0.5;
	position: absolute;
	top:0;
	left:0;
	right:0;
	bottom:0;
}

#top #searchform .ajax_search_response{
	line-height: 1.4em;
	font-size: 12px;
	margin:0;
}

.ajax_search_response h4{
	padding:20px 16px 2px 16px;
	font-size: 14px;
	margin:0;
}

.ajax_search_response h4:first-child{
	padding-top:0px;
	border:none;
}

#top div .av_ajax_search_entry{
	display:block;
	text-decoration: none;
	line-height: 1.4em;
	font-size: 12px;
	height:auto;
	padding:10px 16px;
	border-bottom-style: dashed;
	border-bottom-width: 1px;
	clear:both;
	overflow: hidden;
	position: relative;
}

#top div .av_ajax_search_entry:hover{
	background-color: rgba(0,0,0,0.04);
}

#top div .av_ajax_search_entry.with_image .av_ajax_search_image{
	background: transparent;
}

.av_ajax_search_content{
	overflow: hidden;
	display: block;
}

.av_ajax_search_title{
	display:block;
	font-weight: bold;
	text-transform: uppercase;
}

.ajax_not_found .av_ajax_search_title{
	text-transform: none;
}

.av_ajax_search_image{
	height:32px;
	line-height:32px;
	text-align: center;
	width:32px;
	float:left;
	margin-right:8px;
	border-radius: 40px;
	overflow: hidden;
	font-size: 15px;
}

.av_ajax_search_image img{
	display:block;
	border:none;
	max-width: 100%;
	min-height:32px;
	min-width:32px;
}

.ajax_search_excerpt {
	font-size: 12px;
	line-height: 1.4em;
	display: block;
	margin-top: 3px;
	font-style: italic;
}

#top div .av_ajax_search_entry_view_all{
	text-align: center;
	font-weight: bold;
	border:none;
}

#top div .ajax_not_found,
#top div .av_ajax_search_entry.ajax_not_found:hover{
	border:none;
	background: transparent;
}

/*title container*/

/*avia title big*/
.title_container{
	position: relative;
}

#top .title_container .container{
	padding-top:10px;
	padding-bottom:10px;
	min-height: 56px;
}

.title_container .main-title {
	margin: 0;
	font-size: 16px;
	position: relative;
	z-index: 2;
	min-height: 36px;
	line-height: 2.3em;
	top: 0;
	font-weight: 400;
}

.title_container .main-title a{
	text-decoration: none;
}

.title_meta, #top .portfolio-entry .title_meta{
	display: block;
	clear: both;
	position: relative;
	z-index: 1;
	margin-top:-1em;
	padding:0;
}

.title_meta p{
	margin: 1.3em 0 0 0;
}

.title_container .breadcrumb {
	z-index: 10;
	line-height: 15px;
	font-size: 11px;
	position: absolute;
	right: 50px;
	top:50%;
	margin-top: -7px;
}

.breadcrumb a{
	text-decoration: none;
}

.breadcrumb a:hover{
	text-decoration: underline;
}

.breadcrumb-trail .trail-before,
.breadcrumb-trail .trail-end,
.breadcrumb-trail .sep,
.breadcrumb-trail a,
.breadcrumb-trail .bbp-breadcrumb-current{
	display: block;
	float: left;
	padding:0px 3px;
}

.breadcrumb-trail span, .bbp-breadcrumb-current a{
	display: inline;
	padding:0;
	float:none;
}

.breadcrumb .sep{
	display: block;
	overflow: hidden;
	width:8px;
}


/*blank pages*/

#top.avia-blank #wrap_all #main{
	padding-top: 0 !important;
	margin:0;
}

#top.avia-blank #wrap_all #main .container {
	padding-top: 0 !important;
}

#top.avia-blank{
	height: 100%;
	position: absolute;
	width: 100% !important;
	margin: 0;
	display: table;
	vertical-align: middle;
	float: none;
	top:0;
	left:0;
	table-layout: fixed;
}

#top.boxed.avia-blank{
	max-width:100% !important;
}

#top.boxed.avia-blank .container{
	margin: 0 auto;
}

#top.avia-blank #wrap_all{
	display: table-cell;
	float: none;
	vertical-align: middle;
}

#top.avia-blank #wrap_all #main{
	padding:0;
}

#top.avia-blank #main .container_wrap:last-child{
	border-bottom-style: solid;
	border-bottom-width: 1px;
}

#top.avia-blank #main .container_wrap:first-child{
	border-top-style: solid;
	border-top-width: 1px;
}

/*--------------------framed layout---------------*/
.av-frame{
	position: fixed;
	z-index: 600;
}

.html_av-framed-box .av-frame.av-frame-vert{
	left:0;
	width:100%;
	top:0;
}

.html_av-framed-box .av-frame.av-frame-hor{
	top:0;
	height:100%;
	left:0;
}

.html_av-framed-box .av-frame.av-frame-bottom{
	top:auto;
	bottom:0;
}

.html_av-framed-box .av-frame.av-frame-right{
	left:auto;
	right:0;
}

.html_av-framed-box.html_av_admin_bar_active .av-frame.av-frame-top{
	margin-top:32px;
}

.html_header_top.html_header_sticky.html_av-framed-box #header{
	left:0;
}

.html_header_top.html_header_sticky.html_av-framed-box #header_main,
.html_header_top.html_header_sticky.html_av-framed-box #header_meta
{
	margin:0 50px;
}


/*--------------------alternate header styles---------------*/


/*social bookmarks*/

#top .social_bookmarks {
	height: 30px;
	z-index: 150;
	-webkit-backface-visibility: hidden;
	margin: 0 0 0 -9px;
}

#top .social_bookmarks li{
	height:100%;
	float:left;
	padding:0;
	transition: all 0.2s ease-in-out;
	border-right-style: solid;
	border-right-width: 1px;
	display: block;
	width:30px;
}

#top #header .social_bookmarks li:last-child{
	border-right-style:none;
	border-right-width:0;
}

#top .social_bookmarks li a{
	float:left;
	width:30px;
	line-height:30px;
	display: block;
	margin:0px;
	outline: none;
	padding:0;
	min-height:30px;
	height:100%;
	overflow: visible;
	z-index: 2;
	position: relative;
	text-align: center;
}

#top #wrap_all .social_bookmarks,
#top #wrap_all .social_bookmarks a,
#top #wrap_all .social_bookmarks li{
	background: transparent;
}

#top #wrap_all .social_bookmarks li a:hover{
	text-decoration: none;
}

#top #wrap_all .av-social-link-rss:hover a,
#top #wrap_all .av-social-link-rss a:focus{
	color: #fff;
	background-color: #ffa133;
}

#top #wrap_all .av-social-link-facebook:hover a,
#top #wrap_all .av-social-link-facebook a:focus{
	color: #fff;
	background-color: #37589b;
}

#top #wrap_all .av-social-link-twitter:hover a,
#top #wrap_all .av-social-link-twitter a:focus,
#top #wrap_all .av-social-link-square-x-twitter:hover a,
#top #wrap_all .av-social-link-square-x-twitter a:focus{
	color: #000;
	background-color: #fff;
}

#top #wrap_all .av-social-link-tiktok:hover a,
#top #wrap_all .av-social-link-tiktok a:focus{
	color: #00F2EA;
	background-color: #FF0050;
}

#top #wrap_all .av-social-link-whatsapp:hover a,
#top #wrap_all .av-social-link-whatsapp a:focus{
	color: #fff;
	background-color: #00e676;
}

#top #wrap_all .av-social-link-mail:hover a,
#top #wrap_all .av-social-link-mail a:focus{
	color: #fff;
	background-color: #9fae37;
}

#top #wrap_all .av-social-link-dribbble:hover a,
#top #wrap_all .av-social-link-dribbble a:focus{
	color: #fff;
	background-color: #e44885;
}

#top #wrap_all .av-social-link-linkedin:hover a,
#top #wrap_all .av-social-link-linkedin a:focus{
	color: #fff;
	background-color: #419cca;
}

#top #wrap_all .av-social-link-search:hover a,
#top #wrap_all .av-social-link-search a:focus{
	color: #fff;
	background-color: #222222;
}

#top #wrap_all .av-social-link-gplus:hover a,
#top #wrap_all .av-social-link-gplus a:focus{
	color: #fff;
	background-color: #de5a49;
}

#top #wrap_all .av-social-link-behance:hover a,
#top #wrap_all .av-social-link-behance a:focus{
	color: #fff;
	background-color: #008cfa;
}

#top #wrap_all .av-social-link-flickr:hover a,
#top #wrap_all .av-social-link-flickr a:focus{
	color: #fff;
	background-color: #ff0086;
}

#top #wrap_all .av-social-link-forrst:hover a,
#top #wrap_all .av-social-link-forrst a:focus{
	color: #fff;
	background-color: #234317;
}

#top #wrap_all .av-social-link-myspace:hover a,
#top #wrap_all .av-social-link-myspace a:focus{
	color: #fff;
	background-color: #000000;
}

#top #wrap_all .av-social-link-tumblr:hover a,
#top #wrap_all .av-social-link-tumblr a:focus{
	color: #fff;
	background-color: #345574;
}

#top #wrap_all .av-social-link-vimeo:hover a,
#top #wrap_all .av-social-link-vimeo a:focus{
	color: #fff;
	background-color: #31baff;
}

#top #wrap_all .av-social-link-youtube:hover a,
#top #wrap_all .av-social-link-youtube a:focus{
	color: #fff;
	background-color: #a72b1d;
}

#top #wrap_all .av-social-link-pinterest:hover a,
#top #wrap_all .av-social-link-pinterest a:focus{
	color: #fff;
	background-color: #cb2027;
}

#top #wrap_all .av-social-link-skype:hover a,
#top #wrap_all .av-social-link-skype a:focus{
	color: #fff;
	background-color: #12a5f4;
}

#top #wrap_all .av-social-link-instagram:hover a,
#top #wrap_all .av-social-link-instagram a:focus{
	color: #fff;
	background-color: #a67658;
}

#top #wrap_all .av-social-link-five_100_px:hover a,
#top #wrap_all .av-social-link-five_100_px a:focus{
	color: #fff;
	background-color: #222222;
}

#top #wrap_all .av-social-link-soundcloud:hover a,
#top #wrap_all .av-social-link-soundcloud a:focus{
	color: #fff;
	background-color: #F76700;
}

#top #wrap_all .av-social-link-xing:hover a,
#top #wrap_all .av-social-link-xing a:focus{
	color: #fff;
	background-color: #006567;
}

#top #wrap_all .av-social-link-vk:hover a,
#top #wrap_all .av-social-link-vk a:focus{
	color: #fff;
	background-color: #597BA5;
}

#top #wrap_all .av-social-link-reddit:hover a,
#top #wrap_all .av-social-link-reddit a:focus{
	color: #fff;
	background-color: #FF4500;
}

#top #wrap_all .av-social-link-telegram:hover a,
#top #wrap_all .av-social-link-telegram a:focus{
	color: #fff;
	background-color: #25A4E3;
}

#top #wrap_all .av-social-link-yelp:hover a,
#top #wrap_all .av-social-link-yelp a:focus{
	color: #fff;
	background-color: #d32323;
}

#top .av-section-bottom-logo .social_bookmarks,
.html_bottom_nav_header #top .av-logo-container .social_bookmarks{
	position: absolute;
	top: 50%;
	margin-top: -15px;
	right: 0;
}

.html_bottom_nav_header .main_menu .social_bookmarks{
	display:none
}


.html_cart_at_menu #top .av-section-bottom-logo .social_bookmarks,
.html_bottom_nav_header.html_cart_at_menu  #top .av-logo-container .social_bookmarks{
	left:0;
	right: auto;
}

#top .av-logo-container .social_bookmarks li{
	border:none;
}

#top .av-logo-container .social_bookmarks li a{
	border-radius: 100px;
}


/*first level*/
.sub_menu{
	float:left;
	z-index: 2;
	font-size: 11px;
	line-height: 30px;
	position: relative;
	top:10px;
}

#top .sub_menu>ul{
	float:left;
	margin:0;
}

#top .sub_menu>ul, #top .sub_menu>ul>li{
	background: transparent;
}

.sub_menu li{
	float:left;
	position: relative;
	padding:0 10px;
	border-right-style: solid;
	border-right-width: 1px;
	line-height: 10px;
}

.sub_menu>ul>li>a,
.sub_menu>div>ul>li>a{
	text-decoration: none;
	font-weight: bold;
	padding:7px 0;
}

/*second level*/
#top .sub_menu li ul{
	display: none;
	position: absolute;
	width:170px;
	padding:4px 0;
	z-index: 101;
	box-shadow: 0 8px 15px rgba(0,0,0,0.1);
	left:-50%;
	margin:0;
	border-style: solid;
	border-width: 1px;
	top:19px;
}

#top .sub_menu li:hover>ul{
	display:block;
}

.sub_menu>ul>li:hover>a{
	text-decoration: underline;
}

.sub_menu li li{
	float:none;
	line-height: 20px;
	border:none;
	padding: 0 0;
	margin:0;
}

#top .sub_menu li li a{
	width: 100%;
	height: auto;
	text-align: left;
	line-height: 23px;
	padding: 6px 18px;
	font-size: 12px;
	min-height: 23px;
	max-width: none;
	text-decoration: none;
	display: block;
	border-top-style: dashed;
	border-top-width: 1px;
}

#top .sub_menu li li:first-child > a {
	border: none;
}

#top .sub_menu li li a:hover{
	text-decoration: none;
	background: #f8f8f8;
}

/*third level and deeper*/
#top .sub_menu li li ul{
	top:-1px;
	left:-169px;
	background: none;
	padding: 0;
}

.pointer_arrow{
	border-style:solid;
	border-width:1px;
}


/* ======================================================================================================================================================
#Blog Styles default global stuff, always necessary. more style in the ALB blog module
====================================================================================================================================================== */

.content,
.sidebar{
	padding-top:50px;
	padding-bottom:50px;
	box-sizing: content-box;
	min-height: 1px;
	z-index: 1;
}

.content:hover,
.sidebar:hover{
	z-index: 1;
}

/*right sidebar - default*/
#top #main .sidebar{
	border-left-style:solid;
	border-left-width:1px;
	margin-left:0;
	float: none;
	width: auto;
	overflow: hidden;
	display: block;
	clear: none;
}

.inner_sidebar{
	margin-left:50px;
}

.content{
	border-right-style:solid;
	border-right-width:1px;
	margin-right:-1px;
}

.content .entry-content-wrapper{
	padding-right:50px;
}

/*left sidebar*/
#top #main .sidebar_left .sidebar{
	border-right-style:solid;
	border-right-width:1px;
	border-left:none;
}

.sidebar_left .inner_sidebar{
	margin-right:50px;
	margin-left:0;
}

.sidebar_left .content{
	float:right;
	border-left-style:solid;
	border-left-width:1px;
	border-right:none;
	margin-right:-50px;
	margin-left:-1px;
	padding-left:50px;
}


/*no sidebar*/
.fullsize .content{
	margin:0;
	border:none;
}

.fullsize .content .entry-content-wrapper{
	padding-right:0;
}


.container .minor-meta{
	font-size: 0.9em;
}

.post{
	clear:both;
	width:100%;
	float:left;
	position: relative;
}


.rounded-container,
.rounded-container img{
	border-radius: 111px;
	overflow: hidden;
	display: block;
	position: relative;
	z-index: 2;
}

.rounded-container{
	float:left;
	width:81px;
	height:81px;
	text-align: center;
	line-height: 81px;
}

.rounded-container .iconfont,
.small-preview .iconfont{
	font-size: 23px;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 1;
}


.entry-content-wrapper .post-title{
	font-size: 21px;
	line-height: 1.3em;
}


/*pagination*/

.pagination {
	clear:both;
	padding: 10px 0px 50px 0;
	position:relative;
	z-index:3;
	line-height: 13px;
	overflow: hidden;
}

.pagination span,
.pagination a {
	display:block;
	float:left;
	font-size:11px;
	line-height:13px;
	padding:2px 9px 1px 9px;
	text-decoration:none;
	width:auto;
}

#top .pagination .current,
#top .pagination a,
#top .fullsize .template-blog .pagination a{
	float: left;
	height: 35px;
	width: 35px;
	line-height: 35px;
	text-align: center;
	padding: 0;
	border-radius: 100px;
	margin-right: 3px;
	box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.2);
}

.pagination .current{
	font-size:11px;
	padding:1px 9px 1px 9px;
	font-weight: bold;
}

.pagination .pagination-meta{
	float:right;
	line-height: 35px;
}


/*single post navigation*/

#top .avia-post-nav{
	position: fixed;
	height:110px;
	top:50%;
	background: #aaa;
	background: rgba(0,0,0,0.1);
	color:#fff;
	margin-top:-55px;
	padding:15px;
	text-decoration: none;
	z-index: 501; /*fixes: https://github.com/AviaThemes/wp-themes/issues/807 */
	transform: translate3d(0,0,0); /* fixes: https://kriesi.at/support/topic/next-previous-blog-post-bug/ */
}

#top .avia-post-nav:hover{
	background: #222;
	background: rgba(0,0,0,0.8);
}

.avia-post-nav .label{
	position: absolute;
	top:50%;
	height:22px;
	line-height: 22px;
	margin-top:-11px;
	font-size: 24px;
}

.avia-post-nav .entry-image{
	height:80px;
	width:80px;
	display:block;
}

.avia-post-nav .entry-image img{
	border-radius: 100px;
	display: block;
}

.avia-post-prev{
	left:0;
	border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;
}

.avia-post-prev .label{
	left:10px;
}

.avia-post-next{
	right:0;
	border-top-left-radius: 4px;
	border-bottom-left-radius: 4px;
}

.avia-post-next .label{
	right:10px;
}

.avia-post-next.with-image{
	text-align: right;
}

.avia-post-nav .entry-info{
	display:block;
	height:80px;
	width:220px;
	display: table;
}

.avia-post-next .entry-info{
	margin:0 20px 0 1px;
}

.avia-post-prev .entry-info{
	margin:0 1px 0 20px;
}

.avia-post-nav .entry-info span{
	display: table-cell;
	vertical-align: middle;
	font-size: 13px;
	line-height: 1.65em;
}
.avia-post-nav .entry-info-wrap{
	width:1px;
	overflow: hidden;
	display:block;
}

.avia-post-nav:hover .entry-info-wrap{
	width:240px;
}


/* page split pagination */
.pagination_split_post{
	clear: both;
	padding-top: 20px;
}


.no_sidebar_border#top #main .sidebar,
.no_sidebar_border .content{
	border-left:none;
	border-right:none;
}

.sidebar_shadow#top #main .sidebar,
.sidebar_shadow .content{
	border-left:none;
	border-right:none;
}

.sidebar_shadow#top #main .sidebar_right.av-enable-shadow{
	box-shadow: inset 25px 0 25px -25px #e9e9eb;
}

.sidebar_shadow .sidebar_right .content.av-enable-shadow{
	box-shadow: 25px 0 25px -25px #e9e9eb;
}

.sidebar_shadow#top #main .sidebar_left.av-enable-shadow{
	box-shadow: inset -25px 0 25px -25px #e9e9eb;
}

.sidebar_shadow .sidebar_left .content.av-enable-shadow{
	box-shadow: -25px 0 25px -25px #e9e9eb;
}


/* ======================================================================================================================================================
#Page Styles
====================================================================================================================================================== */

.template-page .entry-content-wrapper h1,
.template-page .entry-content-wrapper h2{
	text-transform: uppercase;
	letter-spacing: 1px;
}

.extra-mini-title{
	padding-bottom:20px;
}

.page-heading-container{
	position: relative;
	margin-bottom: 40px;
	padding: 0 0 44px 0;
	border-bottom-width: 1px;
	border-bottom-style: solid;
	padding-right: 50px;
}

.fullsize .page-heading-container{
	padding-right:0;
}

.page-thumb img{
	border-radius: 3px;
}

/*template builder page styles*/
.template-page .template-blog .entry-content-wrapper h1,
.template-page .template-blog .entry-content-wrapper h2{
	text-transform: none;
	letter-spacing: 0;
}

.content .entry-content-wrapper .entry-content-wrapper{
	padding-right:0;
	padding-left:0;
}

.content .entry-content-wrapper .entry-content-wrapper .big-preview.single-big {
	padding: 0 0 10px 0;
}


/*search page*/
.template-search #searchform>div{
	max-width: 100%;
	margin-bottom:0;
}

#top .template-search.content .entry-content-wrapper {
	padding-bottom: 40px;
	padding-left:55px;
	font-size: 13px;
	clear:both;
}

.template-search .pagination {
	padding: 1px 50px 10px 55px;
}

.template-search .entry-content-wrapper .post-title {
	font-size:19px;
}

#top .template-search .entry-content-wrapper .post-title a:hover{
	text-decoration: underline;
}

.search-result-counter {
	position: absolute;
	left: 0;
	top: 1px;
	box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.2);
	height: 44px;
	line-height: 24px;
	padding: 10px;
	text-align: center;
	border-radius: 100px;
	width: 44px;
}

#top #search-fail{
	padding-left:0;
}

#top #search-fail #searchform{
	padding-bottom: 40px;
}

.template-search .post-entry{
	position: relative;
	clear:both;
}

.template-search .avia-content-slider.avia-content-grid-active .post-entry{
	clear: unset;
}


/*author page*/
.page-heading-container .author_description{
	overflow: hidden;
}

.template-author .content .post .entry-content-wrapper{
	padding-bottom:40px;
	font-size: 1em;
	line-height: 1.65em;
}

.template-author .pagination {
	padding: 1px 50px 10px 0;
}

.template-author .entry-content-wrapper .post-title {
	font-size:19px;
}

#top .template-author .entry-content-wrapper .post-title a:hover{
	text-decoration: underline;
}

.author-extra-border{
	display:block;
	position: absolute;
	bottom:-1px;
	width:600%;
	right:0;
	border-bottom-width: 1px;
	border-bottom-style: solid;
}

.fullsize .author-extra-border{
	right:auto;
	left:-100%
}

.template-author .post-entry{
	position: relative;
	clear:both;
}


/*archive page*/
.template-archives .tab_inner_content li {
	width: 48%;
	float: left;
	clear: none;
	margin:0 2% 0 0 ;
	list-style-position: inside;
}

.template-archives .relThumWrap img,
.template-archives .relThumWrap span{
	width:100%;
	text-decoration: none;
}

.template-archives .relThumbTitle{
	display: block;
	clear:both;
}


/*tag archive */
#top .fullsize .template-blog .tag-page-post-type-title {
	font-size: 50px;
	text-transform: uppercase;
}

.archive .category-term-description:empty{
	display:none;
}

.archive .category-term-description{
	margin-bottom: 25px;
}


/* ======================================================================================================================================================
#Widget & Sidebar - those are loaded in any case since the fallback widgets might be in use in the footer. if any other widgets are used the widget.css file
gets loaded
====================================================================================================================================================== */
.widgettitle{
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 1.1em;
}

.widget{
	clear:both;
	position: relative;
	padding:30px 0 30px 0;
	float:none;
}

#footer .widget{
	padding:0;
	margin:30px 0 30px 0;
	overflow: hidden;
}

#top .widget ul{
	padding:0;
	margin:0;
	width:100%;
	float:left;
}

#top #footer .widget ul{
	float:none
}

.widget li{
	clear:both;
}

.widget ul ul li,
.widget ul ol li,
.widget ol ol li,
.widget ol ul li{
	margin-bottom:0;
}


/*direct mailchimp form embeds: show the button which has a clear attribute*/
#mc_embed_signup .clear{
	visibility: visible;
	overflow: visible;
	height:auto;
}


/* ======================================================================================================================================================
#Footer & #Socket
====================================================================================================================================================== */

#footer{
	padding: 15px 0 30px 0;
	z-index: 1;
}

#socket .container{
	padding-top: 15px;
	padding-bottom: 15px;
}

#socket{
	font-size: 11px;
	margin-top: -1px;
	z-index: 1;
}

#socket .menu{
	margin-top: 6px;
}

#socket .sub_menu_socket{
	float: right;
	margin: 0;
}

#socket .sub_menu_socket div{
	overflow: hidden;
}

#socket .sub_menu_socket li{
	float: left;
	display: block;
	padding: 0 10px;
	border-left-style: solid;
	border-left-width: 1px;
	line-height: 10px;
}

#socket .sub_menu_socket li:first-child{
	border:none;
}

#socket .sub_menu_socket li:last-child{
	padding-right:0;
}

#socket .copyright{
	float:left;
}

/*	Curtain effect	*/
.av-curtain-footer #av-curtain-footer-placeholder{
	display: none;
	pointer-events: none;
}

.av-curtain-footer .av-curtain-footer-container{
	position: relative;
	float: left;
	width: 100%;
}

.html_header_sidebar.html_header_left .av-curtain-footer.av-curtain-activated .av-curtain-footer-container{
	width: calc(100% - 300px);
	margin-left: 301px;
}

.html_header_sidebar.html_header_right .av-curtain-footer.av-curtain-activated .av-curtain-footer-container{
	width: calc(100% - 301px);
	margin-left: 0;
}

/*	activate curtain effect on screen width	*/
@media only screen and (min-width: 990px)
{
	.av-curtain-footer.av-curtain-medium #av-curtain-footer-placeholder{
		clear: both;
		background: transparent;
		display: block;
	}
	.av-curtain-footer.av-curtain-medium #main > *:not(.av-curtain-footer-container){
		z-index: 1;
		position: relative;
	}

	.av-curtain-footer.av-curtain-medium .av-curtain-footer-container{
		width: 100%;
		display: block;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 0;
	}
}

@media only screen and (min-width: 769px)
{
	.av-curtain-footer.av-curtain-small #av-curtain-footer-placeholder{
		clear: both;
		background: transparent;
		display: block;
	}
	.av-curtain-footer.av-curtain-small #main > *:not(.av-curtain-footer-container){
		z-index: 1;
		position: relative;
	}

	.av-curtain-footer.av-curtain-small .av-curtain-footer-container{
		width: 100%;
		display: block;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 0;
	}
}

@media only screen and (min-width: 480px)
{
	.av-curtain-footer.av-curtain-mini #av-curtain-footer-placeholder{
		clear: both;
		background: transparent;
		display: block;
	}
	.av-curtain-footer.av-curtain-mini #main > *:not(.av-curtain-footer-container){
		z-index: 1;
		position: relative;
	}

	.av-curtain-footer.av-curtain-mini .av-curtain-footer-container{
		width: 100%;
		display: block;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 0;
	}
}

/*	activate curtain effect with js	*/
.av-curtain-footer.av-curtain-activated #av-curtain-footer-placeholder{
	clear: both;
	background: transparent;
	display: block;
}

.av-curtain-footer.av-curtain-activated #main > *:not(.av-curtain-footer-container){
	z-index: 1;
	position: relative;
}

.av-curtain-footer.av-curtain-activated .av-curtain-footer-container{
	width: 100%;
	display: block;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 0;
}

#scroll-top-link{
	position: fixed;
	border-radius: 2px;
	height: 50px;
	width: 50px;
	line-height: 50px;
	text-decoration: none;
	text-align: center;
	opacity: 0;
	right: 50px;
	bottom: 50px;
	z-index: 1030;
	visibility: hidden;
}

#av-cookie-consent-badge{
	position: fixed;
	border-radius: 2px;
	height: 30px;
	width: 30px;
	line-height: 30px;
	text-decoration: none;
	text-align: center;
	opacity: 0;
	right: 50px;
	bottom: 50px;
	z-index: 1030;
	visibility: hidden;
}

#scroll-top-link.avia_pop_class,
#av-cookie-consent-badge.avia_pop_class{
	opacity: 0.7;
	visibility: visible;
}

#socket .social_bookmarks{
	float: right;
	margin: -10px 0 0 30px;
	position: relative;
}

#socket .social_bookmarks li{
	border-radius: 300px;
	border: none;
	overflow: hidden;
	top: 5px;
	position: relative;
}

#socket .social_bookmarks li a{
	border-radius: 300px;
}
#socket .avia-bullet,
#socket .avia-menu-fx{
	display: none;
}


/* ======================================================================================================================================================
#CSS ANIMATION
====================================================================================================================================================== */

.small-preview,
.avia-post-nav .entry-info-wrap,
.avia-post-nav,
.avia-menu-fx,
.team-social,
.button,
.related-format-icon,
.avia-slideshow-controls a,
#top .social_bookmarks li a,
.fallback-post-type-icon,
#scroll-top-link,
#av-cookie-consent-badge,
.avia-slideshow-button{
	transition: all 0.3s ease-out;
}

.main_menu a,
.pagination a{
	transition: color 0.15s ease-out;
	transition: background 0.15s ease-out;
}

.avia_pop_class,
.avia-search-tooltip{
	animation: avia_pop 0.3s 1 cubic-bezier(0.175, 0.885, 0.320, 1.275); /* IE 10+ */
}

a:hover .image-overlay .image-overlay-inside{
	animation: avia_pop_small 0.5s 1 cubic-bezier(0.175, 0.885, 0.320, 1.275);
}

.av-post-swiped-overlay{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 1;
	z-index: 100;
	background-color: #fff;
}

.av-post-swiped-overlay.swiped-ltr{
	animation: avia_swipe_ltr 3s 1 cubic-bezier(0.17,0.84,0.44,1);
	width: 0;
	left: 100%;
}

.av-post-swiped-overlay.swiped-rtl{
	animation: avia_swipe_rtl 3s 1 cubic-bezier(0.17,0.84,0.44,1);
	width: 0;
}

@keyframes avia_swipe_ltr{
	0%	{ width: 100%; left: 0; }
	100%{ width: 100%; left: 100%; }
}

@keyframes avia_swipe_rtl{
	0%	{ width: 100%; left: 0; }
	100%{ width: 100%; left: -100%; }
}

@keyframes avia_pop {
  0%   { transform:scale(0.8);  }
  100% { transform:scale(1);   }
}

@keyframes avia_pop_small {
  0%   { transform:rotate(-175deg) scale(0.2);  }
  100% { transform:rotate(0deg) scale(1);   }
}

@keyframes avia_pop_loader {
  0%   { transform: rotate(0deg) scale(0.2);  }
  100% { transform: rotate(720deg) scale(1);   }
}

@keyframes avia_shrink {
  0% { opacity:0; transform: scale(1); }
  75% {opacity:0.7; }
  100% { opacity:0; transform: scale(0);}
}

@keyframes av-load8 {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}



/* #Media Queries
================================================== */

/* large screens with 1140px width */

@media only screen and (min-width: 1140px)  {

}


/* screens with 1024px width */

@media only screen and (max-width: 1024px) {
	#top .socket_color, 
	#top .footer_color,
	#top .header_color .header_bg,
	#top .main_color,
	#top .alternate_color {
		background-attachment: scroll;
	}
}

/* Smaller than standard 960 (devices and browsers) */
@media only screen and (max-width: 989px)
{
	.responsive.html_header_sidebar #top #header{
		width:27%
	}

	.responsive.html_header_left #main {
		margin-left: 27%;
	}

	.responsive.html_header_right #main {
		margin-right: 27%;
	}

	.responsive.html_header_sidebar #header .av-main-nav{
		padding: 4% 0;
	}

	.responsive.html_header_sidebar #header .av-main-nav > li {
		margin: 0 10%;
	}

	.responsive.html_header_sidebar #header .av-main-nav > li > a .avia-menu-text{
		font-size: 14px;
	}

	.responsive.html_header_sidebar #header .av-main-nav > li > a .avia-menu-subtext{
		font-size: 11px;
	}

	.responsive.html_header_sidebar #header .avia-custom-sidebar-widget-area .widget{
		padding:10%;
	}

	.responsive.html_header_sidebar .logo{
		padding: 10%;
	}

	/*headers*/
	.responsive.html_mobile_menu_tablet #top .av_header_transparency.av_alternate_logo_active .logo a > img,
	.responsive.html_mobile_menu_tablet #top .av_header_transparency.av_alternate_logo_active .logo a > svg{
		opacity: 1
	}

	.responsive.html_mobile_menu_tablet #top .av_header_transparency .logo img.alternate,
	.responsive.html_mobile_menu_tablet #top .av_header_transparency .logo .subtext.avia-svg-logo-sub{
		display: none;
	}

	/* curtain footer */
	.responsive.html_header_sidebar.html_header_left .av-curtain-footer.av-curtain-activated .av-curtain-footer-container{
		width: calc(73%);
		margin-left: calc(27% + 1px);
	}

	.responsive.html_header_sidebar.html_header_right .av-curtain-footer.av-curtain-activated .av-curtain-footer-container{
		width: calc(73% - 1px);
		margin-left: 0;
	}

	/*framed layout*/
	.responsive .av-frame{
		display:none;
	}

	.responsive.html_av-framed-box{
		padding:0;
	}

	.responsive.html_header_top.html_header_sticky.html_av-framed-box #header_main,
	.responsive.html_header_top.html_header_sticky.html_av-framed-box #header_meta{
		margin:0 auto;
	}

	.responsive #top .avia-post-prev {
		left: 0px;
	}
	.responsive #top .avia-post-next {
		right: 0px;
	}

	.responsive.html_av-framed-box.html_av-overlay-side .av-burger-overlay-scroll{
		right:0
	}

	/* cookie consent */
	.responsive .avia-cookie-consent .container{
		padding: 0;
	}

	.responsive .avia-cookie-consent a.avia_cookie_infolink,
	.responsive .avia-cookie-consent p {
		display: block;
		margin-right: 0;
	}

	.responsive .avia-cookie-consent-button{
		margin: 0.5em;
	}

	.responsive .av-framed-box .avia-cookiemessage-top,
	.responsive .av-framed-box .avia-cookiemessage-bottom {
		width: 100% !important;
		left: 0 !important;
	}

	.responsive .av-framed-box .avia-cookiemessage-bottom{
		bottom: 0 !important;
	}

	.responsive .av-framed-box .avia-cookiemessage-top{
		top: 0 !important;
	}

	.responsive .avia-cookiemessage-top-left,
	.responsive .avia-cookiemessage-bottom-left,
	.responsive .avia-cookiemessage-top-right,
	.responsive .avia-cookiemessage-bottom-right{
		width: 35%;
	}

}

/* Tablet Portrait size to standard 960 (devices and browsers) */
@media only screen and (min-width: 768px) and (max-width: 989px)
{
	.responsive .main_menu ul:first-child > li > a {
		padding: 0 10px;
	}

	.responsive #top .header_bg {
		opacity: 1;
	}

	.responsive #main .container_wrap:first-child{
		border-top:none;
	}

	.responsive .logo{
		float:left;
	}

	.responsive .logo img{
		margin:0;
	}

	.responsive.html_top_nav_header.html_mobile_menu_tablet #top .social_bookmarks {
		right: 50px;
	}

	.responsive.html_top_nav_header.html_mobile_menu_tablet #top #wrap_all #main{
		padding-top:0;
	}

	.responsive.js_active .avia_combo_widget .top_tab .tab{
		font-size: 10px;
	}

	.responsive.js_active .avia_combo_widget .news-thumb{
		display:none;
	}

	.responsive #top #wrap_all .grid-sort-container .av_one_sixth{
		width:33.3%;
		margin-bottom: 0;
	}

	.responsive body.boxed#top,
	.responsive.html_boxed.html_header_sticky #top #header,
	.responsive.html_boxed.html_header_transparency #top #header{
		max-width: 100%;
	}

	.responsive.html_header_top.html_header_sticky.html_bottom_nav_header.html_mobile_menu_tablet #main{
		padding-top: 88px;
	}

	.responsive.html_header_top.html_header_sticky.html_bottom_nav_header.html_top_nav_header.html_mobile_menu_tablet #main{
		margin-top:0;
	}

	.responsive #top .av-hide-on-tablet{
		display:none !important;
	}

	/*new menu*/
	.responsive.html_mobile_menu_tablet .av-burger-menu-main{
		display: block;
	}

	.responsive #top #wrap_all .av_mobile_menu_tablet .main_menu{
		top:0;
		left:auto;
		right:0;
		display:block;
	}

	.responsive.html_logo_right #top #wrap_all .av_mobile_menu_tablet .main_menu{
		top:0;
		left:0;
		right:auto;
	}

	.responsive #top .av_mobile_menu_tablet .av-main-nav .menu-item{
		display:none;
	}

	.responsive #top .av_mobile_menu_tablet .av-main-nav .menu-item-avia-special{
		display:block;
	}

	.responsive #top #wrap_all .av_mobile_menu_tablet .menu-item-search-dropdown > a {
		font-size: 24px;
	}

	.responsive #top .av_mobile_menu_tablet #header_main_alternate{
		display:none;
	}

	.responsive.html_mobile_menu_tablet #top #wrap_all #header {
		position: relative;
		width:100%;
		float:none;
		height:auto;
		margin:0 !important;
		opacity: 1;
		min-height:0;
	}

	.responsive.html_mobile_menu_tablet #top #header #header_meta .social_bookmarks{
		display:none;
	}

	.responsive.html_mobile_menu_tablet #top .av-logo-container .social_bookmarks{
		display:none
	}

	.responsive.html_mobile_menu_tablet #top .av-logo-container .main_menu .social_bookmarks{
		display:block;
		position: relative;
		margin-top: -15px;
		right:0;
	}

	.responsive.html_logo_center.html_bottom_nav_header .av_mobile_menu_tablet .avia-menu.av_menu_icon_beside{
		height:100%;
	}

	.responsive.html_mobile_menu_tablet #top #wrap_all .menu-item-search-dropdown > a {
		font-size: 24px;
	}

	.responsive.html_mobile_menu_tablet #top #main .av-logo-container .main_menu{
		display:block;
	}

	.responsive.html_mobile_menu_tablet.html_header_top.html_header_sticky #top #wrap_all #main{
		padding-top: 88px;
	}

	.responsive.html_mobile_menu_tablet.html_header_top #top #main {
		padding-top: 0 !important;
		margin: 0;
	}

	.responsive.html_mobile_menu_tablet.html_top_nav_header.html_header_sticky #top #wrap_all #main{
		padding-top:0;
	}

	.responsive.html_mobile_menu_tablet #top #header_main > .container .main_menu  .av-main-nav > li > a,
	.responsive.html_mobile_menu_tablet #top #wrap_all .av-logo-container {
		height:90px;
		line-height:90px;
	}

	.responsive.html_mobile_menu_tablet #top #header_main > .container .main_menu  .av-main-nav > li > a{
		min-width: 0;
		padding:0 0 0 20px;
		margin:0;
		border-style: none;
		border-width: 0;
	}

	.responsive.html_mobile_menu_tablet #top .av_seperator_big_border .avia-menu.av_menu_icon_beside{
		border-right-style: solid;
		border-right-width: 1px;
		padding-right: 25px;
	}

	.responsive.html_mobile_menu_tablet #top #header .av-main-nav > li > a, .responsive #top #header .av-main-nav > li > a:hover{
		background:transparent;
		color: inherit;
	}

	.responsive.html_mobile_menu_tablet.html_top_nav_header .av-logo-container .inner-container{
		overflow: visible;
	}

}

/* All Mobile Sizes (devices and browser) */
@media only screen and (max-width: 767px)
{
	/*blog*/
	.responsive .template-archives .tab_inner_content li{
		width: 98%;
	}

	.responsive .template-blog .blog-meta,
	.responsive .post_author_timeline,
	.responsive #top #main .sidebar{
		display: none;
	}

	/*	@since 4.9 https://kriesi.at/support/topic/remove-sidebar-from-blog-on-mobile/	*/
	.sidebar_shadow#top #main .sidebar_right.av-enable-shadow,
	.sidebar_shadow#top #main .sidebar_left.av-enable-shadow,
	.sidebar_shadow .sidebar_right .content.av-enable-shadow,
	.sidebar_shadow .sidebar_left .content.av-enable-shadow{
		box-shadow: none;
	}

	.responsive #top #main .sidebar.smartphones_sidebar_active{
		display: block;
		text-align: left;
		border-left: none;
		border-right: none;
		border-top-style: dashed;
		border-top-width: 1px;
		width: 100%;
		clear: both;
	}

	.responsive #top #main .sidebar.smartphones_sidebar_active .inner_sidebar{
		margin: 0;
	}

	.responsive .content .entry-content-wrapper{
		padding:0;
	}

	.responsive .content{
		border:none;
	}

	.responsive .template-blog .post_delimiter {
		margin: 0 0 30px 0;
		padding: 30px 0 0 0;
	}

	.responsive .big-preview{
		padding: 0 0 10px 0;
	}

	.responsive .related_posts{
		padding:20px 0;
	}

	.responsive .comment_content{
		padding-right:0;
		padding-left:0;
	}

	.responsive .fullsize div .template-blog .entry-content-wrapper{
		text-align: left;
		font-size:14px;
		line-height: 24px;
	}

	.responsive #top .fullsize .template-blog .post .entry-content-wrapper > * {
		max-width: 100%;
	}

	.responsive #top .avia-post-nav {
		display: none;
	}

	.responsive #top .av-related-style-full .no_margin.av_one_half.relThumb{
		display: block;
		width:100%;
		clear:both;
	}

	/*all templates*/
	.responsive .title_container .breadcrumb{
		left:-2px;
	}

	.responsive .title_container .main-title + .breadcrumb{
		position: relative;
		right:auto;
		top:-6px;
		margin:0;
		left:-2px;
	}

	.responsive .pagination{
		padding-left: 0;
		padding-right: 0;
	}
	.responsive #top .av-hide-on-mobile,
	.responsive #top .av-hide-on-tablet{
		display:none !important;
	}


	/*header*/
	.responsive #top .av_header_transparency.av_alternate_logo_active .logo a > img,
	.responsive #top .av_header_transparency.av_alternate_logo_active .logo a > svg{
		opacity: 1
	}

	.responsive #top .av_header_transparency .logo img.alternate,
	.responsive #top .av_header_transparency .logo .subtext.avia-svg-logo-sub{
		display: none;
	}

	.responsive #top #wrap_all #header {
		position: relative;
		width:100%;
		float:none;
		height:auto;
		margin:0 !important;
		opacity: 1;
		min-height:0;
	}

	.responsive #top #main {
		padding-top:0 !important;
		margin:0;
	}

	.responsive #top #main .container_wrap:first-child{
		border-top:none;
	}

	.responsive.html_header_top.html_logo_center .logo {
		left: 0%;
		transform: translate(0%, 0);
		margin:0;
	}

	.responsive .phone-info{
		float:none;
		width:100%;
		clear:both;
		text-align: center;
	}

	.responsive .phone-info div{
		margin:0;
		padding:0;
		border:none;
	}

	.responsive.html_header_top #header_main .social_bookmarks,
	.responsive.html_top_nav_header #top .social_bookmarks {
		width:auto;
		margin-top:-16px;
	}

	.responsive #top .logo{
		position: static;
		display:table;
		height:80px !important;
		float:none;
		padding:0;
		border:none;
		width:80%;
	}

	.responsive .logo a{
		display:table-cell;
		vertical-align: middle;
	}

	.responsive .logo img,
	.responsive .logo svg{
		height: auto !important;
		width: auto;
		max-width: 100%;
		display: block;
		max-height: 80px;
	}

	.responsive #header_main .container{
		height:auto !important;
	}

	.responsive #top .header_bg {
		opacity: 1;
	}

	.responsive.social_header .phone-info {
		text-align: center;
		float:none;
		clear:both;
		margin:0;
		padding:0;
	}

	.responsive.social_header .phone-info div{
		border:none;
		width:100%;
		text-align: center;
		float:none;
		clear:both;
		margin:0;
		padding:0;
	}

	.responsive #header_meta .social_bookmarks li{
		border-style:solid;
		border-width:1px;
		margin-bottom:-1px;
		margin-left:-1px;
	}

	.responsive #top #header_meta .social_bookmarks li:last-child{
		border-right-style: solid;
		border-right-width:  1px;
	}

	.responsive #header .sub_menu,
	.responsive #header_meta .sub_menu>ul{
		float:none;
		width:100%;
		text-align: center;
		margin:0 auto;
		position: static;
	}

	.responsive #header .social_bookmarks{
		padding-bottom:2px;
		width:100%;
		text-align: center;
		height:auto;
		line-height: 0.8em;
		margin:0;
	}

	.responsive #header_meta .sub_menu>ul>li{
		float:none;
		display: inline-block;
		padding: 0 10px;
	}

	.responsive #header .social_bookmarks li{
		float:none;
		display: inline-block;
	}

	.responsive.bottom_nav_header #header_main .social_bookmarks{
		position: relative;
		top: 0;
		right: 0;
		margin: 10px auto;
		clear:both;
	}

	.responsive.bottom_nav_header.social_header .main_menu>div{
		height:auto;
	}

	.responsive .logo img,
	.responsive .logo svg{
		margin: 0;
	}
	.responsive.html_header_sidebar #top #header .social_bookmarks{
		display:none;
	}

	.responsive body.boxed#top,
	.responsive.html_boxed.html_header_sticky #top #header{
		max-width: 100%;
	}

	.responsive.html_header_transparency #top .avia-builder-el-0 .container,
	.responsive.html_header_transparency #top .avia-builder-el-0 .slideshow_inner_caption{
		padding-top:0;
	}

	.responsive #top .av_phone_active_right .phone-info.with_nav span{
		border:none;
	}

	.responsive #top #wrap_all .av_header_transparency .main_menu ul:first-child > li > a,
	.responsive #top #wrap_all .av_header_transparency .sub_menu > ul > li > a,
	.responsive #top .av_header_transparency #header_main_alternate,
	.responsive .av_header_transparency #header_main .social_bookmarks li a,
	.responsive #top #wrap_all .av_header_transparency .phone-info.with_nav span,
	.responsive #top .av_header_transparency #header_meta,
	.responsive #top .av_header_transparency #header_meta li,
	.responsive #top #header_meta .social_bookmarks li a{
		color:inherit;
		border-color: inherit;
		background: inherit;
	}

	.responsive.html_top_nav_header .av-logo-container{
		height:auto;
	}

	.responsive.html_top_nav_header .av-section-bottom-logo{
		border-bottom-style: solid;
		border-bottom-width: 1px;
	}

	/*new mobile*/
	.responsive .av-burger-menu-main{
		display: block;
	}

	.responsive #top #wrap_all .main_menu{
		top:0;
		height:80px;
		left:auto;
		right:0;
		display: block;
		position: absolute;
	}

	.responsive .main_menu ul:first-child > li a {
		height: 80px;
		line-height: 80px;
	}

	.responsive #top .av-main-nav .menu-item{
		display:none;
	}

	.responsive #top .av-main-nav .menu-item-avia-special{
		display:block;
	}

	.responsive #top #wrap_all .menu-item-search-dropdown > a {
		font-size: 24px;
	}

	.responsive #header_main_alternate{
		display:none;
	}

	.responsive #top #header .social_bookmarks{
		display:none;
	}

	.responsive #top #header .main_menu .social_bookmarks{
		display:block;
		position: relative;
		margin-top: -15px;
	}

	.responsive #top .av-logo-container .avia-menu{
		height:100%;
	}

	.responsive #top .av-logo-container .avia-menu > li > a{
		line-height: 80px;
	}

	.responsive #top #main .av-logo-container .main_menu{
		display:block;
	}

	.responsive #top #main .av-logo-container .social_bookmarks{
		display:none;
	}

	.responsive #top #main .av-logo-container .main_menu .social_bookmarks{
		display:block;
		position: relative;
	}

	.responsive #top #main .av-logo-container .main_menu{
		display:block;
	}

	.responsive #top #header_main > .container .main_menu  .av-main-nav > li > a,
	.responsive #top #wrap_all .av-logo-container {
		height:80px;
		line-height:80px;
	}

	.responsive #top #wrap_all .av-logo-container {
		padding:0;
	}

	.responsive #top #header_main > .container .main_menu  .av-main-nav > li > a{
		min-width: 0;
		padding:0 0 0 20px;
		margin:0;
		border-style: none;
		border-width: 0;
	}

	.responsive #top .av_seperator_big_border .avia-menu.av_menu_icon_beside{
		border-right-style: solid;
		border-right-width: 1px;
		padding-right: 25px;
	}

	.responsive #top #header .av-main-nav > li > a, .responsive #top #header .av-main-nav > li > a:hover{
		background:transparent;
		color: inherit;
	}

	.responsive.html_top_nav_header .av-logo-container .inner-container{
		overflow: visible;
	}

	/*related images*/
	.responsive #top .related_entries_container .av_one_eighth{
		width:25%;
	}

	.responsive #top .relThumb5{
		clear:both;
	}

	.responsive.html_header_transparency #top .avia-builder-el-0 .container{
		padding-top:0px;
	}

	.responsive.html_header_sidebar #header .avia-custom-sidebar-widget-area{
		display:none;
	}

	.responsive.html_header_sidebar #main{
		border: none;
	}

	/*tabs*/
	.responsive.js_active #top .avia_combo_widget .top_tab .tab{
		border-top: 1px solid;
		border-bottom:none;
		width: 100%;
	}

	.responsive.js_active #top .avia_combo_widget .news-wrap li{
		padding:5px;
	}

	/*widgets*/
	.tagcloud a{
		padding:8px 20px;
		margin:0 8px 8px 0;
	}

	.widget li{
		line-height: 1.8em;
		font-size: 15px;
	}

	/*footer*/
	.responsive #scroll-top-link{
		display: none; /*iphones etc scroll better by tapping the status bar at the top of the screen*/
	}

	.responsive #socket .sub_menu_socket{
		display: block;
		float: none;
		width: 100%;
		clear: both;
		margin: 0 0 0 -15px;
	}

	/* curtain footer */
	.responsive.html_header_sidebar.html_header_left  .av-curtain-footer.av-curtain-activated .av-curtain-footer-container{
		width: 100%;
		margin-left: 0;
	}
	
	.responsive.html_header_sidebar.html_header_right  .av-curtain-footer.av-curtain-activated .av-curtain-footer-container{
		width: 100%;
	}

	.responsive.html_top_nav_header.av-burger-overlay-active #top #wrap_all #header {
		z-index: 0;
	}

	.responsive.html_top_nav_header.av-burger-overlay-active .av-curtain-footer.av-curtain-activated #main>.av-section-bottom-logo {
		z-index: 100;
	}

	/* cookie consent */
	body.responsive.admin-bar .avia-cookiemessage-top, body.responsive.admin-bar .avia-cookiemessage-top-left,
	body.responsive.admin-bar .avia-cookiemessage-top-right{
		margin-top: 46px;
	}

	.responsive .avia-cookiemessage-top-left, .responsive .avia-cookiemessage-bottom-left, .responsive .avia-cookiemessage-top-right,
	.responsive .avia-cookiemessage-bottom-right{
		width: 55%;
	}

}


/* Mobile Landscape Size to Tablet Portrait (devices and browsers) */
@media only screen and (min-width: 480px) and (max-width: 767px)
{
	/*portfolio*/
	.responsive #top #wrap_all .grid-sort-container.grid-total-odd .grid-entry.grid-loop-1{
		width:100%;
	}

	.responsive #top #wrap_all .grid-sort-container .grid-entry{
		width:50%;
		margin-bottom: 0;
	}

	.responsive #top #wrap_all .portfolio-parity-odd{
		clear:both;
	}
}

/* Mobile Portrait Size to Mobile Landscape Size (devices and browsers) */
@media only screen and (max-width: 479px)
{
	/*related images*/
	.responsive #top .related_entries_container .av_one_eighth{
		width:50%;
	}

	.responsive #top .related_entries_container .av_one_eighth:nth-child(odd){
		clear:both;
	}

	.responsive.html_header_top #header_main .social_bookmarks,
	.responsive.html_top_nav_header .social_bookmarks{
		display:none;
	}

	/*new mobile header*/
	.responsive .avia-menu.av_menu_icon_beside{
		padding:0;
		margin:0;
		border:none;
	}

	.responsive #top #wrap_all #header .social_bookmarks,
	.responsive #top #wrap_all #main .av-logo-container .social_bookmarks{
		display:none;
	}

	.responsive #top .av_seperator_big_border .avia-menu.av_menu_icon_beside{
		margin-right:0;
		padding-right:0;
		border:none;
	}

	/* cookie consent */
	.responsive .avia-cookiemessage-top-left,
	.responsive .avia-cookiemessage-bottom-left,
	.responsive .avia-cookiemessage-top-right,
	.responsive .avia-cookiemessage-bottom-right{
		width: 85% !important;
		left: 7.5% !important;
		right: 7.5% !important;
	}
}

/*	https://kriesi.at/support/topic/open-street-map-marker-line-brakes  */
.leaflet-popup-content br:nth-child(even) {
	display: none !important;
}

```

</details>


### icongrid.css
**Size:** 10.0 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/icongrid/icongrid.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
/* ======================================================================================================================================================
ICONGRID
====================================================================================================================================================== */

.avia-icongrid{
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
}

.avia-icongrid .av-icon-cell-item{
    display: block;
    float: left;
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;
    position: relative;
}

.avia-icongrid-icon{
    font-size: 42px;
    line-height: 1;
    margin-bottom: 0.5em;
    color: initial;
}

.avia-icongrid .av-icon-cell-item .avia-icongrid-wrapper{
    position: relative;
    display: block;
	-webkit-backface-visibility: hidden;   /* new for mobile even to parent container  */
    backface-visibility: hidden;    /* new for mobile even to parent container  */
}

.avia-icongrid .av-icon-cell-item .avia-icongrid-content{
    opacity: 0;
    visibility: hidden;
    padding: 4em 3em;
}

.avia-icongrid .av-icon-cell-item .avia-icongrid-flipback{
	padding: 4em 3em;
}

.avia-icongrid .av-icon-cell-item .avia-icongrid-front,
.avia-icongrid .av-icon-cell-item .avia-icongrid-front.bg-img:before,
.avia-icongrid .av-icon-cell-item .avia-icongrid-flipback.bg-img:before{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.avia-icongrid .av-icon-cell-item .avia-icongrid-front.bg-img:before,
.avia-icongrid .av-icon-cell-item .avia-icongrid-flipback.bg-img:before{
	content: "";
	display: block;
	-webkit-clip-path: inset(0 0 0 0);
	clip-path: inset(0 0 0 0);
}

.avia-icongrid-numrow-1 .av-icon-cell-item{
	flex: 0 1 100%;
}

.avia-icongrid-numrow-2 .av-icon-cell-item{
	flex: 0 1 50%;
}

.avia-icongrid-numrow-3 .av-icon-cell-item{
	flex: 0 1 33.33%;
}

.avia-icongrid-numrow-4 .av-icon-cell-item{
	flex: 0 1 25%;
}

.avia-icongrid-numrow-5 .av-icon-cell-item{
	flex: 0 1 20%;
}

/*	when link is set to grid item img tag in content gets an overlay - breaks layout  */
.avia-icongrid a.avia-icongrid-wrapper .image-overlay{
	display: none !important;
}

.avia-icongrid a.avia-icongrid-wrapper:hover{
	cursor: pointer;
}


/* flipbox */
.avia-icongrid-flipbox:before,
.avia-icongrid-flipbox:after{
	display: none;				/* needed for flex layout - pseudo containers follow rules  */
}

.avia-icongrid-flipbox .av-icon-cell-item{
    perspective: 1000px;
}

.avia-icongrid-flipbox .av-icon-cell-item article{
    position: relative;
    display: block;
    z-index: 20;				/* 3, changed 4.8 as links not working */
    min-height: 200px;
    -webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	perspective: 1000px;
    transition: transform 10.6s;
}

.avia-icongrid-flipbox .av-icon-cell-item .avia-icongrid-front,
.avia-icongrid-flipbox .av-icon-cell-item .avia-icongrid-flipback{
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	transition: 0.6s;
	transform-style: preserve-3d;
	height: 100%;
    /*width: 100%;*/
}

.avia-msie-9 .avia-icongrid-flipbox .av-icon-cell-item .avia-icongrid-flipback{
    opacity: 0;
    visibility: hidden;
}


.avia-icongrid-flipbox .av-icon-cell-item .avia-icongrid-front{
	margin: 1px;
}

.avia-icongrid-flipbox .av-icon-cell-item .avia-icongrid-flipback{
	position: absolute;
	width: 100%;
	left: 0;
	top: 0;
	margin: 1px;
}

.avia-icongrid-flipbox .av-icon-cell-item .avia-icongrid-front .avia-icongrid-inner,
.avia-icongrid-flipbox .av-icon-cell-item .avia-icongrid-flipback .avia-icongrid-inner{
    position: absolute;
    color: initial;
    width: 100%;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 4em 3em;
    -webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}

/*** Flip Grid y-axis ***/
.avia-icongrid-flipbox .av-icon-cell-item .avia-icongrid-front{
	z-index: 2;
	transform: rotateY(0deg);
}

.avia-icongrid-flipbox .av-icon-cell-item.invert-flip .avia-icongrid-front{
	z-index: 2;
	transform: rotateY(-180deg);
}

.avia-icongrid-flipbox .av-icon-cell-item .avia-icongrid-flipback{
    transform: rotateY(-180deg);
}

.avia-icongrid-flipbox .av-icon-cell-item.invert-flip .avia-icongrid-flipback{
    transform: rotateY(0deg);
}

.avia-icongrid-flipbox .av-icon-cell-item:hover .avia-icongrid-front,
.avia-icongrid-flipbox .av-icon-cell-item.avia-hover .avia-icongrid-front{
    transform: rotateY(180deg);
}

.avia-icongrid-flipbox .av-icon-cell-item.invert-flip:hover .avia-icongrid-front,
.avia-icongrid-flipbox .av-icon-cell-item.invert-flip.avia-hover .avia-icongrid-front{
    transform: rotateY(0deg);
}

.avia-icongrid-flipbox .av-icon-cell-item:hover .avia-icongrid-flipback,
.avia-icongrid-flipbox .av-icon-cell-item.avia-hover .avia-icongrid-flipback{
    transform: rotateY(0deg);
}

.avia-icongrid-flipbox .av-icon-cell-item.invert-flip:hover .avia-icongrid-flipback,
.avia-icongrid-flipbox .av-icon-cell-item.invert-flip.avia-hover .avia-icongrid-flipback{
    transform: rotateY(180deg);
}

.avia-msie-9 .avia-icongrid-flipbox .av-icon-cell-item:hover .avia-icongrid-front,
.avia-msie-9 .avia-icongrid-flipbox .av-icon-cell-item.avia-hover .avia-icongrid-front{
    opacity: 0;
    visibility: hidden;
}

.avia-msie-9 .avia-icongrid-flipbox .av-icon-cell-item:hover .avia-icongrid-flipback,
.avia-msie-9 .avia-icongrid-flipbox .av-icon-cell-item.avia-hover .avia-icongrid-flipback{
    opacity: 1;
    visibility: visible;
}

/****  End Flipbox y-axis  ****/


/*** Flip Grid x-axis ***/
.avia-flip-x .avia-icongrid-flipbox .av-icon-cell-item .avia-icongrid-front{
    z-index: 2;
    transform: rotateX(0deg);
}

.avia-flip-x .avia-icongrid-flipbox .av-icon-cell-item.invert-flip .avia-icongrid-front{
    z-index: 2;
    transform: rotateX(-180deg);
}

.avia-flip-x .avia-icongrid-flipbox .av-icon-cell-item .avia-icongrid-flipback{
    transform: rotateX(-180deg);
}

.avia-flip-x .avia-icongrid-flipbox .av-icon-cell-item.invert-flip .avia-icongrid-flipback{
    transform: rotateX(0deg);
}

.avia-flip-x .avia-icongrid-flipbox .av-icon-cell-item:hover .avia-icongrid-front,
.avia-flip-x .avia-icongrid-flipbox .av-icon-cell-item.avia-hover .avia-icongrid-front{
    transform: rotateX(180deg);
}

.avia-flip-x .avia-icongrid-flipbox .av-icon-cell-item.invert-flip:hover .avia-icongrid-front,
.avia-flip-x .avia-icongrid-flipbox .av-icon-cell-item.invert-flip.avia-hover .avia-icongrid-front{
    transform: rotateX(0deg);
}

.avia-flip-x .avia-icongrid-flipbox .av-icon-cell-item:hover .avia-icongrid-flipback,
.avia-flip-x .avia-icongrid-flipbox .av-icon-cell-item.avia-hover .avia-icongrid-flipback{
    transform: rotateX(0deg);
}

.avia-flip-x .avia-icongrid-flipbox .av-icon-cell-item.invert-flip:hover .avia-icongrid-flipback,
.avia-flip-x .avia-icongrid-flipbox .av-icon-cell-item.invert-flip.avia-hover .avia-icongrid-flipback{
    transform: rotateX(180deg);
}
/****  End Flipbox x-axis  ****/



/* tooltip */
.avia-icongrid-tooltip:before,
.avia-icongrid-tooltip:after{
	display: none;					/* needed for flex layout - pseudo containers follow rules  */
}

.avia-icongrid-tooltip .av-icon-cell-item article:before{
    content: "";
    display: block;
    padding-top: 100%;
}

.avia-icongrid-tooltip .av-icon-cell-item .avia-icongrid-front{
    position: absolute;
    width: 100%;
    height: auto;
    padding: 2em;
    bottom: 50%;
    top: auto;
    transform: translateY(50%);
    transition: all 0.3s ease-in-out;
}

.avia-icongrid-tooltip .av-icon-cell-item .avia-icongrid-front.bg-img .avia-icongrid-inner{
    position: absolute;
    color: initial;
    width: 100%;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 4em 3em;
    -webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}

.avia-icongrid-tooltip .av-icon-cell-item .avia-icongrid-content{
	position: absolute;
	bottom: 4em;
	width: 85%;
	left: 7.5%;
	padding: 1em 2em !important;
	background-color: white;
	color: white;
	z-index: 8;
	border-width: 0.3em;
	border-style: solid;
	transition: all 0.3s ease-in-out;
	box-shadow: 0 0 2em rgba(0,0,0,0.1);
}

.avia-icongrid-tooltip .av-icon-cell-item .avia-icongrid-content .avia-icongrid-inner{
    color: initial;
}

.avia-icongrid-tooltip .av-icon-cell-item .avia-icongrid-content:after{
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    box-sizing: border-box;
    border-left-width: 0.5em;
    border-right-width: 0.5em;
    border-top-width: 0.5em;
    border-left-style: solid;
    border-right-style: solid;
    border-top-style: solid;
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: inherit;
    transform: translateX(-50%);
    bottom: -0.75em;
    box-shadow: 0 0 2em rgba(0,0,0,0.1);
}

.avia-icongrid-tooltip .av-icon-cell-item:hover .avia-icongrid-content,
.avia-icongrid-tooltip .av-icon-cell-item.avia-hover .avia-icongrid-content{
    visibility: visible;
    opacity: 1;
    bottom: 45%;
}

.avia-icongrid-tooltip .av-icon-cell-item:hover .avia-icongrid-front,
.avia-icongrid-tooltip .av-icon-cell-item.avia-hover .avia-icongrid-front{
    bottom: 0.5em;
    transform: translateY(0);
}

.avia-icongrid-tooltip .article-icon-entry.av-icongrid-empty .avia-icongrid-content,
.avia-icongrid-tooltip .av-icon-cell-item:hover .article-icon-entry.av-icongrid-empty .avia-icongrid-content,
.avia-icongrid-tooltip .av-icon-cell-item.avia-hover .article-icon-entry.av-icongrid-empty .avia-icongrid-content{
	display: none;
}


/****  responsive cases  ****/
@media only screen and (max-width: 989px)
{
	#top .avia-icongrid.av-flex-cells.av-break-989 .av-icon-cell-item{
		flex: 1 1 100%;
	}

	#top .avia-icongrid.av-flex-cells.av-can-break-50.av-50-break-989 .av-icon-cell-item{
        flex: 0 1 50%;
    }
}

@media only screen and (max-width: 767px)
{
    #top .avia-icongrid.av-flex-cells.av-can-break-50.av-50-break-767 .av-icon-cell-item{
		flex: 0 1 50%;
	}

	#top .avia-icongrid.av-flex-cells.av-break-767 .av-icon-cell-item,
    #top .avia-icongrid.av-flex-cells.av-can-break-50.av-50-break-989 .av-icon-cell-item{
		flex: 1 1 100%;
	}
}

```

</details>


### site-main.css
**Size:** 3.1 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold_child_by_yanco/site-styles/site-main.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
/* =============================================================================
   Main Site Specific Styles
   ========================================================================== */
/* =============================================================================
   General
   ========================================================================== */
/* =============================================================================
   Main Site
   ========================================================================== */
/* =============================================================================
   Data Solutions
   ========================================================================== */
/* =============================================================================
   Automation
   ========================================================================== */
/* =============================================================================
   Installation Solutions
   ========================================================================== */
/* =============================================================================
   Power Solutions
   ========================================================================== */
/* line 6, ../assets/scss/site-styles/site-main.scss */
#header #menu-item-search #searchsubmit,
#searchsubmit {
  background-color: #11325d;
}

/* line 11, ../assets/scss/site-styles/site-main.scss */
.text-and-image-module-wrapper .text-wrapper,
.newsletter-we-are-module-wrapper .we-are-wrapper {
  background-color: #11325d;
}

/* line 16, ../assets/scss/site-styles/site-main.scss */
#top .text-and-image-module-wrapper .text-wrapper input[type='submit'],
#top .newsletter-we-are-module-wrapper .newsletter-wrapper input[type='submit'] {
  background-color: #11325d;
}

/* line 22, ../assets/scss/site-styles/site-main.scss */
#main a:hover {
  color: #11325d;
}

/* line 27, ../assets/scss/site-styles/site-main.scss */
.single article p > a {
  color: #11325d;
}

/* line 31, ../assets/scss/site-styles/site-main.scss */
#top.search .search-results-wrapper .post-title.entry-title {
  color: #11325d;
  text-decoration: underline;
}

/* line 36, ../assets/scss/site-styles/site-main.scss */
#top .main_color .activity-entry,
#top.single-aktivitet .activity-date-wrapper {
  border-left-color: #11325d;
}

/* line 41, ../assets/scss/site-styles/site-main.scss */
#top .activity-entry .activity-month-name,
#top.single-aktivitet .activity-month-name {
  color: #11325d;
}

/* line 46, ../assets/scss/site-styles/site-main.scss */
#top.single-aktivitet .activity-signup > a,
#top .activity-entry .activity-signup > a {
  background-color: #11325d;
}

/* line 51, ../assets/scss/site-styles/site-main.scss */
#cookie_action_close_header {
  background-color: #11325d !important;
}

@media only screen and (min-width: 520px) and (max-width: 768px) {
  /* line 56, ../assets/scss/site-styles/site-main.scss */
  .slider-solutions {
    max-height: 400px;
  }
}
@media only screen and (max-width: 519px) {
  /* line 62, ../assets/scss/site-styles/site-main.scss */
  .slider-solutions {
    max-height: 280px;
  }
}

```

</details>


### header.css
**Size:** 16.3 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold_child_by_yanco/site-styles/header.css?5`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");
.header {
  position: fixed;
  width: 100%;
  z-index: 10000;
  background-color: #fff;
  color: #11325D;
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.08);
}
.header .container {
  max-width: 1420px !important;
}
@media (min-width: 992px) {
  .header_thin .header-main {
    padding: 15px 0;
  }
}
.header-main {
  position: relative;
  z-index: 2;
  padding: 25px 0;
  background-color: #fff;
  transition: 0.2s ease padding;
}
.header-main-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-main__logo {
  text-decoration: none;
  transition: 0.2s ease max-height !important;
}
.header-main__logo img,
.header-main__logo svg {
  display: block;
  height: 36px;
}
.header-main-menu {
  display: flex;
  align-items: center;
  gap: 25px;
  margin: 0;
}
@media (max-width: 992px) {
  .header-main-menu_left {
    display: none;
  }
}
.header-main-menu_right {
  gap: 15px;
  margin-left: 25px;
}
@media (max-width: 992px) {
  .header-main-menu_right {
    gap: 0;
  }
}
.header-main-menu-item {
  font-size: 17px;
  line-height: 23px;
  font-weight: normal;
  transition: none;
}
.header-main-menu-item:last-child {
  margin-right: 0;
}
.header-main-menu-item_primary {
  padding: 5px 12px;
  background-color: #F2F2F2;
  border-radius: 48px;
}
.header-main-menu-item_icon .icon-link {
  width: 24px;
  height: 24px;
  display: block;
  filter: invert(14%) sepia(89%) saturate(1132%) hue-rotate(192deg) brightness(90%) contrast(95%);
  transition: 0.2s ease filter;
}
.header-main-menu-item_icon .icon-link:hover {
  filter: invert(44%) sepia(13%) saturate(2245%) hue-rotate(171deg) brightness(93%) contrast(94%);
}
.header-main-menu-item_search .avia-tt {
  background-color: #ffffff;
  color: #000;
}
.header-main-menu-item_search .avia-search-tooltip {
  margin-top: 10px;
}
.header-main-menu-item_search .av_ajax_search_image {
  flex-shrink: 0;
  background-color: #9cc2df;
  color: #fff;
}
.header-main-menu-item_search .av_ajax_search_entry {
  display: flex !important;
  align-items: center;
  border-bottom: unset !important;
}
.header-main-menu-item_search .av_ajax_search_entry.av_ajax_search_entry_view_all {
  justify-content: center;
  opacity: 0.8;
}
.header-main-menu-item_search .av_ajax_search_entry.av_ajax_search_entry_view_all:hover {
  opacity: 1;
}
.header-main-menu-item_search .ajax_not_found .av_ajax_search_title {
  opacity: 0.7;
}
.header-main-menu-item a {
  color: #11325D;
  transition: 0.2s ease color;
}
.header-main-menu-item a:hover {
  color: #3974B5;
  transition: 0.2s ease color;
}
.header-main-menu-wrapper {
  display: flex;
}
.header-top {
  position: relative;
  z-index: 1;
  background-color: #E8E8E8;
}
.header-top-menu {
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  row-gap: 10px;
  margin: 0;
  position: relative;
  z-index: 1;
}
@media (max-width: 1400px) {
  .header-top-menu {
    column-gap: 15px;
  }
}
@media (max-width: 992px) {
  .header-top-menu {
    display: none;
  }
}
.header-top-menu-item {
  position: relative;
}
.header-top-menu-item__link {
  display: block;
  padding: 10px 15px;
  font: 600 22px/26px "Open Sans", sans-serif;
  color: #11325D;
  cursor: pointer;
  transition: 0.2s ease;
  transition-property: color, background-color;
}
.header-top-menu-item__link:hover {
  color: #3974B5;
}
.header-top-menu-item__link.active {
  background-color: #F8F8F8;
  color: #3974B5;
}
.header-top-menu-item:has(.active):after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 15px;
  width: 50px;
  border-bottom: 2px solid #11325D;
}
.header-dropdown {
  position: relative;
  color: #11325D;
  background-color: #F8F8F8;
  border: unset;
}
@media (max-width: 992px) {
  .header-dropdown {
    display: none;
  }
}
.header-dropdown .navbar {
  max-height: 65vh;
  overflow-y: scroll;
}
.header-dropdown .navbar::-webkit-scrollbar {
  display: none;
}
.header-dropdown .navbar-nav {
  position: absolute;
  top: 0;
  width: 100%;
  padding-bottom: 20px;
  pointer-events: none;
  transform: translateY(10px);
  opacity: 0;
  transition: 0.2s ease;
  transition-property: opacity, transform;
}
.header-dropdown .navbar-nav.active {
  position: static;
  pointer-events: auto;
  transform: translateY(0);
  opacity: 1;
}
.header-dropdown .navbar .menu {
  display: flex;
  gap: 30px;
  width: 100%;
}
.header-dropdown .navbar .menu-item {
  width: 100%;
}
.header-dropdown .navbar .menu-item_large {
  width: 200%;
}
.header-dropdown .navbar .menu-item__title {
  padding: 10px 0;
  margin: 10px 0 20px;
  font-size: 18px;
  line-height: 24px;
  text-transform: uppercase;
  color: #11325D;
  border-bottom: 2px solid #AAA;
}
.header-dropdown .navbar .menu-item__title_tiny-border {
  border: unset;
}
.header-dropdown .navbar .menu-item__title_tiny-border:after {
  content: "";
  display: block;
  margin-top: 10px;
  width: 50px;
  border-bottom: 2px solid #AAA;
}
.header-dropdown .navbar .menu-item__text {
  margin-bottom: 20px;
  font-size: 13px;
  line-height: 17px;
  font-weight: 400;
}
.header-dropdown .navbar .menu-item__img {
  margin-top: 25px;
}
.header-dropdown .navbar .menu-item__link, .header-dropdown .navbar .menu-item-second__item {
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 600;
  color: #11325D;
}
.header-dropdown .navbar .menu-item__link a, .header-dropdown .navbar .menu-item-second__item a {
  color: #11325D;
  transition: 0.2s ease color !important;
}
.header-dropdown .navbar .menu-item__link a:hover, .header-dropdown .navbar .menu-item-second__item a:hover {
  color: #ed7801 !important;
}
.header-dropdown .navbar .menu-item__link_arrow:after {
  content: "";
  display: inline-block;
  margin-left: 20px;
  width: 20px;
  height: 11px;
  transform: translateX(0);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  width='20' height='11' viewBox='0 0 20 11'%3E%0A  %3Cpath d='M12.777,9.661,17.15,5.951H0v-1.3H17.145L12.777.944,13.754,0,20,5.306l-6.246,5.306Z' fill='%23000'/%3E%0A%3C/svg%3E");
  filter: invert(14%) sepia(89%) saturate(1132%) hue-rotate(192deg) brightness(90%) contrast(95%);
  transition: 0.2s ease;
  transition-property: transform, filter;
}
@media (min-width: 1250px) and (max-width: 1350px) {
  .header-dropdown .navbar .menu-item__link_arrow:after {
    margin-left: 10px;
  }
}
@media (max-width: 1300px) {
  .header-dropdown .navbar .menu-item__link_arrow:after {
    margin-left: 5px;
  }
}
.header-dropdown .navbar .menu-item__link_arrow:hover:after {
  transform: translateX(5px);
  filter: invert(44%) sepia(13%) saturate(2245%) hue-rotate(171deg) brightness(93%) contrast(94%);
}
.header-dropdown .navbar .menu-item-second {
  margin: 0;
}
.header-dropdown .navbar .menu-item-second__item a {
  color: #11325D;
  transition: 0.2s ease color;
}
.header-dropdown .navbar .menu-item-second__item a:hover {
  color: #3974B5;
}
.header-dropdown .navbar .menu-item-second-row {
  display: flex;
  gap: 30px;
}
.header-dropdown .navbar .menu-item-second-row .menu-item-second {
  width: 50%;
}
.header-dropdown .navbar .menu-item_close {
  width: 50px;
}
.header-dropdown .navbar__close {
  margin-top: 10px;
  width: 50px;
  height: 50px;
  background-color: transparent;
  background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg'  width='50' height='50' viewBox='0 0 50 50'%3E%0A  %3Ccircle cx='25' cy='25' r='25' fill='%2311325d' opacity='0'/%3E%0A  %3Cpath d='M13.435,29.293V15.542H-.316v-2.5H13.435V-.707h2.551V13.042h13.7v2.5h-13.7V29.293Z' transform='translate(24.938 4.724) rotate(45)' fill='%23000'/%3E%0A%3C/svg%3E%0A");
  background-size: 100%;
  cursor: pointer;
  border: none;
  filter: invert(14%) sepia(89%) saturate(1132%) hue-rotate(192deg) brightness(90%) contrast(95%);
  transition: 0.2s ease filter;
}
.header-dropdown .navbar__close:hover {
  filter: invert(44%) sepia(13%) saturate(2245%) hue-rotate(171deg) brightness(93%) contrast(94%);
}
.header-mobile {
  display: none;
  overflow-y: auto;
  transform: translateY(10px);
  opacity: 0;
  height: 0;
  visibility: hidden;
  pointer-events: none;
  background-color: #E8E8E8;
  transition: 0.2s ease;
  transition-property: transform, opacity, visibility;
}
@media (max-width: 992px) {
  .header-mobile {
    display: block;
  }
}
.header-mobile.active {
  pointer-events: auto;
  transform: translate(0);
  visibility: visible;
  opacity: 1;
  height: calc(100vh - 100px);
  padding-bottom: 30px;
}
.header-mobile .accordion-menu {
  margin: 0;
}
.header-mobile .accordion-menu-item {
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
}
.header-mobile .accordion-menu-item_arrow {
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 600;
  color: #11325D;
  transition: 0.2s ease color;
}
.header-mobile .accordion-menu-item_arrow:hover {
  color: #3974B5;
}
.header-mobile .accordion-menu-item_arrow a {
  display: block;
  color: inherit;
  text-transform: uppercase;
  transition: none;
}
.header-mobile .accordion-menu-item_arrow a:after {
  content: "";
  display: inline-block;
  margin-left: 10px;
  width: 20px;
  height: 11px;
  transform: translateX(0);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  width='20' height='11' viewBox='0 0 20 11'%3E%0A  %3Cpath d='M12.777,9.661,17.15,5.951H0v-1.3H17.145L12.777.944,13.754,0,20,5.306l-6.246,5.306Z' fill='%23000'/%3E%0A%3C/svg%3E");
  filter: invert(14%) sepia(89%) saturate(1132%) hue-rotate(192deg) brightness(90%) contrast(95%);
  transition: 0.2s ease;
  transition-property: transform, filter;
}
.header-mobile .accordion-menu-item_arrow a:hover:after {
  transform: translateX(5px);
  filter: invert(44%) sepia(13%) saturate(2245%) hue-rotate(171deg) brightness(93%) contrast(94%);
}
.header-mobile .accordion-menu-item_next {
  margin-top: 25px;
}
.header-mobile .accordion-menu-item_icon {
  padding: 20px;
}
@media (min-width: 768px) and (max-width: 992px) {
  .header-mobile .accordion-menu-item_icon {
    padding: 20px 40px;
  }
}
.header-mobile .accordion-menu-item_icon a {
  display: block;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  filter: invert(14%) sepia(89%) saturate(1132%) hue-rotate(192deg) brightness(90%) contrast(95%);
  transition: 0.2s ease filter;
}
.header-mobile .accordion-menu-item_icon a:hover {
  filter: invert(44%) sepia(13%) saturate(2245%) hue-rotate(171deg) brightness(93%) contrast(94%);
}
.header-mobile .accordion-menu-item__link {
  position: relative;
  display: block;
  padding: 15px 40px;
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
  cursor: pointer;
  color: #11325D;
}
@media (max-width: 768px) {
  .header-mobile .accordion-menu-item__link {
    padding: 15px 20px;
  }
}
.header-mobile .accordion-menu-item__link:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 40px;
  margin-top: 8px;
  width: 50px;
  border-bottom: 2px solid #11325D;
}
@media (max-width: 768px) {
  .header-mobile .accordion-menu-item__link:before {
    left: 20px;
  }
}
.header-mobile .accordion-menu-item__link:after {
  content: "";
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  width: 11px;
  height: 7px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'  width='10.611' height='7.225' viewBox='0 0 10.611 7.225'%3E%0A  %3Cpath d='M9.979,10.611,9,9.664l5.138-4.359L9,.947,9.979,0l6.246,5.306Z' transform='translate(10.611 -9) rotate(90)' fill='%2311325D'/%3E%0A%3C/svg%3E%0A");
  background-repeat: no-repeat;
  transition: 0.2s ease transform;
}
@media (max-width: 768px) {
  .header-mobile .accordion-menu-item__link:after {
    right: 20px;
  }
}
.header-mobile .accordion-menu-item__link_secondary {
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  text-transform: uppercase;
  padding: 10px 0;
  border-bottom: 2px solid #AAA;
}
.header-mobile .accordion-menu-item__link_secondary:before {
  content: unset;
}
.header-mobile .accordion-menu-item__link_secondary:after {
  right: 0;
}
.header-mobile .accordion-menu-item__link_simple {
  font-size: 17px;
  line-height: 23px;
  font-weight: normal;
}
@media (max-width: 768px) {
  .header-mobile .accordion-menu-item__link_simple {
    padding: 8px 20px;
  }
}
.header-mobile .accordion-menu-item__link_simple:hover {
  color: #3974B5;
}
.header-mobile .accordion-menu-item__link_simple:before, .header-mobile .accordion-menu-item__link_simple:after {
  content: unset;
}
.header-mobile .accordion-menu-item__link_primary {
  width: fit-content;
  margin-left: 12px;
  padding: 8px 10px;
  background-color: #F2F2F2;
  border-radius: 48px;
}
@media (min-width: 768px) and (max-width: 992px) {
  .header-mobile .accordion-menu-item__link_primary {
    margin-left: 32px;
  }
}
.header-mobile .accordion-menu-item__link.active:after {
  transform: translateY(-50%) rotate(180deg);
}
.header-mobile .accordion-menu-item-content {
  overflow: hidden;
  display: none;
  padding: 10px 20px;
}
@media (min-width: 768px) and (max-width: 992px) {
  .header-mobile .accordion-menu-item-content {
    padding: 10px 40px;
  }
}
.header-mobile .accordion-menu-item-content_secondary {
  background-color: #fff;
}
.header-mobile .accordion-menu-item-content__text {
  margin-bottom: 20px;
  font-size: 13px;
  line-height: 17px;
  font-weight: 400;
}
.header-mobile .accordion-menu-item-post__img {
  margin-top: 20px;
}
.header-mobile .accordion-menu-item-post__title {
  padding: 10px 0;
  margin: 10px 0 20px;
  font-size: 18px;
  line-height: 24px;
  text-transform: uppercase;
  color: #11325D;
}
.header-mobile .accordion-menu-item-post__title:after {
  content: "";
  display: block;
  margin-top: 10px;
  width: 50px;
  border-bottom: 2px solid #AAA;
}
.header-mobile .accordion-menu-item-post__text {
  margin-bottom: 20px;
  font-size: 13px;
  line-height: 17px;
  font-weight: 400;
}
.header-mobile .accordion-menu-secondary {
  margin: 5px 0;
}
.header-mobile .accordion-menu-secondary-item {
  font-size: 13px;
  line-height: 16px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #11325D;
}
.header-mobile .accordion-menu-secondary-item:hover {
  color: #3974B5;
}
.header-mobile .accordion-menu-secondary-item a {
  display: block;
  color: inherit;
}
.header .header-main-menu-item_icon-cart .icon-link,
.header .accordion-menu-item_icon-cart .icon-link {
  background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24'%3E%3Cpath d='M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z' /%3E%3C/svg%3E") !important;
}
.header .header-main-menu-item_icon-search .icon-link,
.header .accordion-menu-item_icon-search .icon-link {
  background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 24 24'%3E%3Cpath d='M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z' /%3E%3C/svg%3E") !important;
}
.header-backdrop {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transition: 0.2s ease;
  transition-property: opacity, visibility;
}
.header .av-hamburger {
  display: none;
  transform: scale(0.6);
  transform-origin: right;
}
@media (max-width: 992px) {
  .header .av-hamburger {
    display: block;
  }
}
.header .av-hamburger-inner {
  background: #11325D;
}
.header .av-hamburger-inner:before, .header .av-hamburger-inner:after {
  background-color: #11325D !important;
}
.header:has(.navbar-nav.active) .header-backdrop {
  opacity: 1;
  visibility: visible;
}

.html_stretched.html_header_top.html_header_sticky .home#top #wrap_all #main {
  margin-top: 0 !important;
  padding-top: 89px !important;
}
@media (max-width: 992px) {
  .html_stretched.html_header_top.html_header_sticky .home#top #wrap_all #main {
    padding-top: 30px !important;
  }
}

@media (max-width: 992px) {
  .hidden-mobile {
    display: none;
  }
}
/*# sourceMappingURL=header.css.map */

```

</details>


### shortcodes.css
**Size:** 34.3 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/css/shortcodes.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
/* ======================================================================================================================================================
GENERIC
====================================================================================================================================================== */


p:empty,
.entry-content-wrapper:empty{
	display:none;
}

.avia-shadow{
	box-shadow:inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

/*fix webkit flickering bug*/
.webkit_fix{
	-webkit-perspective: 1000px;
	-webkit-backface-visibility: hidden;
}

body .container_wrap .avia-builder-el-no-sibling{
	margin-top:0;
	margin-bottom:0;
}

body .container_wrap .avia-builder-el-last{
	margin-bottom:0;
}

body .container_wrap .avia-builder-el-first{
	margin-top:0;
}

body .av-align-left{
	text-align: left;
}

body .av-align-right{
	text-align: right;
}

body .av-align-center{
	text-align: center;
}

#top .av_inherit_color *{
	color:inherit;
}
#top .av_inherit_color a{
	text-decoration: underline;
}

#top .av_opacity_variation{
	opacity: 0.7;
}

#top .av-shortcode-disabled-notice{
	display:block;
	text-align: center;
	margin: 5px;
	padding: 20px;
	background-color: #FFFDF3;
	color: #C96D11;
	border:1px solid #E6BF4A;
	clear:both;
}

#top .av-shortcode-disabled-notice a{
	color: inherit;
	text-decoration: underline;
}

/* ======================================================================================================================================================
SCREEN READER see https://webaim.org/techniques/css/invisiblecontent/#techniques
====================================================================================================================================================== */
.av-screen-reader-only {
	position: absolute;
	left: -10000px;
	top: auto;
	width: 1px;
	height: 1px;
	overflow: hidden;
}

/*	=====================================================================================
Loading icon e.g. masonry, portfolio     (moved from portfolio.css)
========================================================================================== */
.avia_loading_icon{
	background: rgba(0,0,0,0.7);
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	margin: 0;
	display: none;
	z-index: 10000;
}

#top .avia_loading_icon .av-siteloader{
	border-top-color: #fff;
	border-right-color: #fff;
	border-bottom-color: #fff;
	position: absolute;
	top: 50%;
	left: 50%;
	margin: -20px 0 0 -20px;
}

/*	=============================================================================================
Tooltip for social share buttons     (moved from blog.css - breaks layout if blog disabled )
================================================================================================= */
.avia-related-tooltip{
	position: absolute;
	z-index: 9999999;
	padding: 0;
	width: 200px;
	border-radius: 2px;
	box-shadow: 0px 3px 13px 0px rgba(0, 0, 0, 0.1);
	border-width: 1px;
	border-style: solid;
	padding: 15px;
	margin-top: -10px;
}

.avia-related-tooltip .avia-arrow-wrap{
	top: auto;
	bottom: 0;
	position: absolute;
	left: 50%
}

.avia-related-tooltip .avia-arrow-wrap .avia-arrow{
	border-top: none;
	border-left: none;
	top: -4px;
}


/* ======================================================================================================================================================
TEXT BLOCK
====================================================================================================================================================== */
.avia_textblock{
	clear: both;
	line-height: 1.65em;
}

.avia_textblock.av_multi_colums > p:first-child{
	margin-top: 0;
}

.flex_column + .avia_textblock{
	padding-top: 50px;
}

/* ======================================================================================================================================================
Columns
====================================================================================================================================================== */
body .column-top-margin{
	margin-top:50px;
}

body .flex_column.avia-link-column{
	cursor: pointer;
}
body .flex_column.avia-link-column.avia-link-column-hover:hover{
	opacity: 0.8;
}

/* ======================================================================================================================================================
Icon
====================================================================================================================================================== */
.av-icon-display{
	display: block;
	font-size: 30px;
	line-height: 58px;
	margin: 0 auto 20px auto;
	width: 60px;
	border-radius: 100px;
	border-style: solid;
	border-width: 1px;
	text-align: center;
	transition: all 0.3s ease-in-out;
}

/* ======================================================================================================================================================
COLOR SECTION
====================================================================================================================================================== */
.avia-section{
	clear:both;
	width:100%;
	float:left;
	min-height:100px;
	position: static; /*fixes a glitch with bg image not displaying below video slide*/
}

.avia-section.avia-section-small{
	min-height:0;
}

.js_active .av-minimum-height .container{
	z-index: 1; /*required for transition*/
	opacity: 0;
	transition: opacity 0.6s ease-in;
}

.js_active.av-preloader-enabled .av-minimum-height .container{
	transition: opacity 1.2s ease-in;
}

.avia-section.av-minimum-height .container{
	display: table;
	table-layout: fixed;
}

.avia-section.av-minimum-height .container .content{
	display: table-cell;
	vertical-align: middle;
	height:100%;
	float:none !important;
}

.av-minimum-height-100 .container {
	height:1500px;			/*will be overwritten by js*/
}

.avia-full-stretch{
	background-size: cover !important;
}

.avia-full-contain{
	background-size: contain !important;
}

.avia_mobile .avia-full-stretch{
	background-attachment: scroll !important;
}

#top #main .avia-section .template-page{
	width:100%;
	border:none;
	margin-left: auto;
	padding-left: 0;
	margin-right: auto;
}

.avia-section .template-page .entry-content-wrapper{
	padding-right:0;
}

.avia-section-small .content,
.avia-section-small .sidebar {
	padding-top: 20px;
	padding-bottom: 20px;
}

.avia-section-large .content,
.avia-section-large .sidebar {
	padding-top: 70px;
	padding-bottom: 70px;
}

.avia-section-huge .content,
.avia-section-huge .sidebar {
	padding-top: 130px;
	padding-bottom: 130px;
}

.avia-section-no-padding .content,
.avia-section-no-padding .sidebar,
.avia-section-custom .content,
.avia-section-custom .sidebar{
	padding-top:0;
	padding-bottom:0;
}

.html_header_sticky_disabled .container_wrap:first-child,
.avia-section.avia-full-stretch,
.html_header_transparency .avia-section.avia-builder-el-0{
	border-top:none;
}

#top #wrap_all #main .avia-no-border-styling{
	border:none;
}

#top .scroll-down-link {
	height: 60px;
	width: 80px;
	margin: 0px 0 0 -40px;
	line-height: 60px;
	position: absolute;
	left: 49.85%;
	bottom: 0px;
	color: #FFF;
	text-align: center;
	font-size: 70px;
	z-index: 100;
	text-decoration: none;
	text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
	animation: avia_fade_move_down 2s ease-in-out infinite;
}

/*video bg*/
#top .av-section-with-video-bg{
	border-top:none;
	position: relative;
}

#top .av-section-video-bg{
	position: absolute;
	top:0;
	left:0;
	right:0;
	bottom: 0;
	padding: 0;
	margin: 0;
	z-index: 1;
}

#top .av-section-video-bg .av-click-to-play-overlay{
	display: none;
}

#top .av-section-video-bg .avia-slideshow-inner{
	height:100% !important;
}

#top .av-section-with-video-bg .av-section-video-bg .av-video-service-vimeo iframe{
	transform: 			scale(1.2);
}

/*handle video section on mobile*/
.avia_mobile #top .av-parallax-section{
	z-index: 0;
	transform: translate3d(0,0,0);
}

.avia_mobile #top .av-parallax{
	position: absolute;
	z-index: -10;
}

.avia_mobile #top .av-parallax .container{
	z-index: 10;
}
.avia_mobile #top .av-section-mobile-video-disabled .av-section-video-bg{
	display:none;
}

.avia_desktop #top .av-section-mobile-video-disabled
{background-image: none !important;
}

.avia_desktop #top .av-section-mobile-video-disabled .av-parallax{
	display: none;
}

@media only screen and (max-width: 1024px) {
    .touch-device #top .avia-section.avia-bg-style-fixed {
        background-attachment: scroll;
    }
}


/*parallax section*/
.av-parallax-section{
	position: relative;
	border-top: none;
	overflow: hidden;
}

.av-parallax {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 0;
	height: calc((100vh * 0.3) + 100%);
	will-change: transform;
}

.av-parallax-inner{
	position: absolute;
	width: 100%;
	height:100%;
	bottom:0;
	left:0;
}

/*prevent img pos flickering*/
.js_active .av-parallax,
.js_active .av-parallax-object{
	opacity: 0;
}

.js_active .av-parallax.enabled-parallax{
	opacity: 1
}

.js_active .av-parallax.active-parallax,
.js_active .av-parallax-object.active-parallax{
	opacity: 1;
	transition: opacity 0.3s ease-in-out;
}


/*special border top elements*/
.avia_transform .av-extra-border-element{
	position: relative;
	width: 100%;
	overflow: visible;
}

.avia_transform .av-extra-border-element.border-extra-arrow-down{
	position: relative;
	width: 50px;
	height: 25px;
	left: 50%;
	margin-left: -26px;
	margin-top: -1px;
	z-index: 25;
	margin-bottom: -25px;
	clear:both;
}

.avia_transform .av-extra-border-element .av-extra-border-outer{
	overflow: hidden;
	height:100%;
	width:100%;
	position: absolute;
}

.avia_transform .av-extra-border-element.border-extra-arrow-down .av-extra-border-inner{
	position: absolute;
	left: 50%;
	width: 50px;
	height: 50px;
	transform: translateX(-50%) rotate(45deg);
	top: -39px;
}

.av-section-color-overlay + .container + .border-extra-diagonal,
.av-section-color-overlay + .scroll-down-link + .container + .border-extra-diagonal{
    z-index: 1;
}

.avia_transform .av-extra-border-element.border-extra-diagonal{
	height:250px;
	margin-top: -250px;
}

.avia_transform .av-extra-border-element.border-extra-diagonal .av-extra-border-inner{
	top: 250px;
    right: 0;
    width: 110%;
    height: 100%;
    transform-origin: right top;
    transform: rotate(5deg);
    position: absolute;
}

.avia_transform .av-extra-border-element.border-extra-diagonal.border-extra-diagonal-inverse .av-extra-border-inner{
    transform: rotate(-5deg);
    transform-origin: left top;
    right:auto;
    left:0;
}

.av-extra-border-element.diagonal-box-shadow .av-extra-border-inner{
    box-shadow: 0 0 44px -8px rgba(0,0,0,0.2);
}

div .av-section-color-overlay-wrap{
	position: relative;
	width:100%;
}

.html_header_sidebar .av-section-color-overlay-wrap{
	float:left;
}

div .av-section-color-overlay{
	position: absolute;
	top:0;
	left: 0;
	bottom: 0;
	width:100%;
}

div .av-arrow-down-section .av-section-color-overlay{
	bottom: 24px;
}

div .av-section-color-overlay{
	z-index: 1;
}

div .av-video-service-html5 .av-section-color-overlay{
	z-index: 8;
}

.html_minimal_header #main > .avia-builder-el-0,
.av_minimal_header + #main .container_wrap_first:first-child {
	border-top: none;
}


/* ======================================================================================================================================================
Dropcaps
====================================================================================================================================================== */
.av_dropcap1 {
	display: block;
	float: left;
	font-size: 38px;
	line-height: 32px;
	margin: 4px 8px 0 0;
}

.av_dropcap2{
	display:block;
	float:left;
	font-size:18px;
	line-height:35px;
	width:35px;
	text-align: center;
	margin:4px 8px 0 0;
	border-radius: 100px;
	font-weight: bold;
}

/* ======================================================================================================================================================
Contact Form Defaults
====================================================================================================================================================== */

fieldset{
	border:none;
}

#top select,
#top .avia_ajax_form .select,
#top .entry-content-wrapper select{
	-webkit-appearance: none;
	border-radius:0px;
	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAANCAYAAAC+ct6XAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjBBRUQ1QTQ1QzkxMTFFMDlDNDdEQzgyNUE1RjI4MTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjBBRUQ1QTU1QzkxMTFFMDlDNDdEQzgyNUE1RjI4MTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMEFFRDVBMjVDOTExMUUwOUM0N0RDODI1QTVGMjgxMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMEFFRDVBMzVDOTExMUUwOUM0N0RDODI1QTVGMjgxMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pk5mU4QAAACUSURBVHjaYmRgYJD6////MwY6AyaGAQIspCieM2cOjKkIxCFA3A0TSElJoZ3FUCANxAeAWA6IOYG4iR5BjWwpCDQCcSnNgxoIVJCDFwnwA/FHWlp8EIpHSKoGgiggLkITewrEcbQO6mVAbAbE+VD+a3IsJTc7FQAxDxD7AbEzEF+jR1DDywtoCr9DbhwzDlRZDRBgACYqHJO9bkklAAAAAElFTkSuQmCC);
	background-position: center right;
	background-repeat: no-repeat;
	border-radius: 2px;
}

#top select[multiple],
#top .avia_ajax_form .select[multiple]{
	background-image:none;
}

#top select[multiple] {
	background-image:none;
}


/* ======================================================================================================================================================
Sidebar
====================================================================================================================================================== */
.avia-builder-widget-area{
	position: relative;
}

.flex_column .widget:first-child,
.content .widget:first-child{
	padding-top: 0;
	border-top: none;
}

.flex_column .widget .widgettitle ,
.content .widget .widgettitle{
	margin-top:0.85em;
}



/* ======================================================================================================================================================
AVIA PLAYER Defaults
====================================================================================================================================================== */

/*playlist shortcode*/

.avia_textblock .wp-playlist{
	margin:0;
}

.wp-playlist-light .wp-playlist-item.wp-playlist-playing{
	background: transparent;
}

.wp-playlist-current-item img{
	border-radius: 3px;
}

.wp-playlist-current-item img[src$="media/audio.png"]{
	border-radius: 0px;
	background: #fff;
}

.wp-playlist-item-meta.wp-playlist-item-title{
	font-weight: bold;
}

.wp-playlist-tracks .wp-playlist-item{
	padding: 4px 3px;
}

.wp-playlist-tracks .wp-playlist-item-length{
	top: 4px;
}

div .mejs-controls .mejs-time-rail .mejs-time-loaded,
div .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current{
	background:#9c9c9c;
}

div .mejs-controls .mejs-time-rail > span,
div .mejs-controls .mejs-time-rail a,
div .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current,
div .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-total{
	height:7px;
}

div .mejs-controls div.mejs-time-rail{
	padding-top: 7px;
}

div .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-total{
	top:12px;
}

div .mejs-container,
div .mejs-embed,
div .mejs-embed body,
div .mejs-container div .mejs-controls{
	background:transparent;
}

div .mejs-container{
	border-radius:2px;
	background:#313131
}

div .wp-playlist-item-album{
	font-style: normal;
}

div .mejs-controls .mejs-playpause-button,
div .mejs-controls .mejs-volume-button{
	height:30px;
}

#top .mejs-container .mejs-controls .mejs-time,
#top .mejs-time-rail .mejs-time-float{
	color:#fff;
}

#top .mejs-time-rail .mejs-time-float {
	border:none;
}

div .mejs-container .mejs-controls{
	height: 30px;
	width: 100%;
}

#top .mejs-container{
	height: 30px;
}

#top .mejs-container.mejs-audio{
	max-height: 30px
}

div .mejs-button>button {
	margin: 6px 6px;
}

div .mejs-time{
	padding: 12px 6px 0;
	height:18px;
}

div .mejs-time-rail,
div .mejs-horizontal-volume-slider{
	height:30px;
}

div .mejs-controls .mejs-time-rail .mejs-time-handle{
	display:none;
}

div .mejs-time-buffering,
div .mejs-time-current,
div .mejs-time-float-corner,
div .mejs-time-hovered,
div .mejs-time-loaded,
div .mejs-time-marker,
div .mejs-time-total{
	height:7px;
	outline:none;
}

div .mejs-controls{
	padding:0;
}


/* ======================================================================================================================================================
Privacy toggles frontend
====================================================================================================================================================== */
#top .av-toggle-switch{
	display: block;
	margin-bottom: 10px;
	margin-top:10px;
	opacity: 0;
	text-align: left;
}

#top .av-toggle-switch.active{
	animation: avia-fadein 1s 1 ease-in;
	opacity: 1;
}

#top .av-toggle-switch input[type="checkbox"] {
	display:none
}

#top .av-toggle-switch label {
	cursor:pointer;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

#top .av-toggle-switch label .toggle-track {
	display:block;
	height:27px;
	width:54px;
	background:rgba(0, 0, 0, 0.08);
	border-radius:100px;
	position:relative;
	margin-right:15px;
	border:1px solid rgba(0, 0, 0, 0.15);
	clear:both;
	vertical-align: bottom;
	float: left;
	transition:all .1s ease-in;
}

#top .av-toggle-switch .toggle-track:before{
	content:'';
	display:inline;height:25px;width:25px;background:#fff;
	border-radius:100px;
	position:absolute;
	top:0;
	right:0;
	transition:right .1s ease-in;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 1px 1px;
}

#top .av-toggle-switch.av-cookie-sc-disabled .toggle-track{
	opacity: 0.2;
}

#top .av-toggle-switch input[type="checkbox"]:checked +  .toggle-track:before{
	right:27px;
}

#top .av-toggle-switch input[type="checkbox"]:checked +  .toggle-track{
	background:#5dceba;
}

#top .av-toggle-switch .toggle-label-content{
	color: inherit;
	font-weight: bold;
	display: block;
	overflow: hidden;
	font-size: inherit;
}

#top .avia-cookie-consent-modal-buttons-wrap{
	text-align: center;
}


/* ======================================================================================================================================================
Tooltips
========================================================================================================================================================= */
.avia-tooltip{
	position: absolute;
	z-index: 9999999;
	padding:12px;
	margin-top:-18px;
	margin-left: -4px;
	background: #000;
	background: rgba(0, 0, 0, 0.8);
	color:#fff;
	width:140px;
	border-radius: 2px;
	text-align: center;
}

.avia-tooltip .inner_tooltip{
	font-size: 0.925em;
	line-height: 1.65em;
}

#top .avia-tooltip.transparent_dark,
#top .avia-tooltip.transparent_dark .avia-arrow{
	background: #000;
	background: rgba(0, 0, 0, 0.8);
	color:#fff;
	border:none;
}

#top .avia-tooltip.transparent_dark h1,
#top .avia-tooltip.transparent_dark h2,
#top .avia-tooltip.transparent_dark h3,
#top .avia-tooltip.transparent_dark h4,
#top .avia-tooltip.transparent_dark h5,
#top .avia-tooltip.transparent_dark h6{
	color:inherit;
}

.avia-tooltip.av-tooltip-shadow,
.avia-tooltip.av-tooltip-shadow .avia-arrow{
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
}

.avia-tooltip ul,
.avia-tooltip ol,
.avia-tooltip blockquote{
	text-align: left;
	list-style-position: inside;
}

.avia-tooltip .avia-arrow{
	background: rgba(0, 0, 0, 0.8);
	border:none;
}

.avia-tooltip .avia-arrow-wrap{
	width:20px;
	height:20px;
	position: absolute;
	bottom:-20px;
	left:50%;
	margin-left:-7px;
	overflow: hidden;
}

.avia-tooltip .inner_tooltip br:first-child{
	display:none;
}

/*tooltip positions. mainly used for image hotspots but also for testimonials*/
.av-tt-hotspot .avia-arrow-wrap{
	bottom:auto;
	bottom:-19px;
}

.transparent_dark.av-tt-hotspot .avia-arrow-wrap{
	bottom:-20px;
}

/*below*/
.avia-tooltip.av-tt-pos-below{
	margin-top: 18px;
}

.avia-tooltip.av-tt-pos-below .avia-arrow-wrap{
	bottom:auto;
	top:-19px;
}

.avia-tooltip.av-tt-pos-below .avia-arrow{
	bottom: -6px;
	top:auto;
}

/*to the left*/
.avia-tooltip.av-tt-pos-left{
	margin-top: 0;
	margin-left: -18px;
}

.avia-tooltip.av-tt-pos-left .avia-arrow-wrap{
	left: auto;
	margin-left: 0;
	right: -19px;
	top: 50%;
	margin-top: -10px;
}

.avia-tooltip.av-tt-pos-left .avia-arrow{
	top: 5px;
	left: -5px;
	margin-left: 0;
}

/*to the right*/
.avia-tooltip.av-tt-pos-right{
	margin-top: 0;
	margin-left: 18px;
}

.avia-tooltip.av-tt-pos-right .avia-arrow-wrap{
	left: -19px;
	margin-left: 0;
	top: 50%;
	margin-top: -10px;
}

.avia-tooltip.av-tt-pos-right .avia-arrow{
	top: 5px;
	left:auto;
	right: -5px;
	margin-left: 0;
}

/*arrow alignment for above and below tooltips*/
.av-tt-pos-above.av-tt-align-right.avia-tooltip,
.av-tt-pos-below.av-tt-align-right.avia-tooltip{
	margin-left:4px;
}

.av-tt-pos-above.av-tt-align-left .avia-arrow-wrap,
.av-tt-pos-below.av-tt-align-left .avia-arrow-wrap{
	left: 0;
	margin-left: 7px;
}

.av-tt-pos-above.av-tt-align-right .avia-arrow-wrap,
.av-tt-pos-below.av-tt-align-right .avia-arrow-wrap{
	left: auto;
	right:0;
	margin-left: auto;
	margin-right: 7px;
}

/*arrow alignment for left and right tooltips*/
.av-tt-pos-left.av-tt-align-top .avia-arrow-wrap,
.av-tt-pos-right.av-tt-align-top .avia-arrow-wrap{
	top: 0;
	margin-top: 2px;
}

.av-tt-pos-left.av-tt-align-bottom .avia-arrow-wrap,
.av-tt-pos-right.av-tt-align-bottom .avia-arrow-wrap{
	bottom: 0;
	margin-bottom: 4px;
	top: auto;
}

.av-tt-pos-above.av-tt-align-centered,
.av-tt-pos-below.av-tt-align-centered{
	text-align: center;
}

/* ======================================================================================================================================================
ANIMATIONS
====================================================================================================================================================== */
.avia_transform .av-animated-generic {
	opacity: 0;
}

.avia_transform.avia_mobile .avia-mobile-no-animations .av-animated-generic {
	opacity: 1;
}

.avia_transform .av-animated-when-visible,
.avia_transform .av-animated-when-almost-visible,
.avia_transform .av-animated-when-visible-95{
	opacity: 0;
}

.avia_transform .shadow-animated.av-animated-when-visible,
.avia_transform .shadow-animated.av-animated-when-almost-visible,
.avia_transform .shadow-animated.av-animated-when-visible-95{
	opacity: 1;
}

.avia-animate-admin-preview.fade-in,
.avia_transform .avia_start_delayed_animation.fade-in {
	animation: avia-fadein 1.5s 1 ease-out;
	opacity: 1;
}

.avia-animate-admin-preview.pop-up,
.avia_transform .avia_start_delayed_animation.pop-up {
	animation: avia_image_appear 0.5s 1 cubic-bezier(0.175, 0.885, 0.320, 1.275);
	opacity: 1;
}

.avia-animate-admin-preview.top-to-bottom,
.avia_transform .avia_start_delayed_animation.top-to-bottom {
	animation: avia-ttb 0.8s 1 cubic-bezier(0.175, 0.885, 0.320, 1.275);
	opacity: 1;
}

.avia-animate-admin-preview.bottom-to-top,
.avia_transform .avia_start_delayed_animation.bottom-to-top {
	animation: avia-btt 0.8s 1 cubic-bezier(0.165, 0.840, 0.440, 1.000);
	opacity: 1;
}

.avia-animate-admin-preview.left-to-right,
.avia_transform .avia_start_delayed_animation.left-to-right {
	animation: avia-ltr 0.8s 1 cubic-bezier(0.175, 0.885, 0.320, 1.275);
	opacity: 1;
}

.avia-animate-admin-preview.right-to-left,
.avia_transform .avia_start_delayed_animation.right-to-left {
	animation: avia-rtl 0.8s 1 cubic-bezier(0.175, 0.885, 0.320, 1.275);
	opacity: 1;
}

.avia-animate-admin-preview.av-rotateIn,
.avia_transform .avia_start_delayed_animation.av-rotateIn {
	animation: avia-rotateIn 0.8s 1 cubic-bezier(0.175, 0.885, 0.320, 1.275);
	opacity: 1;
}

.avia-animate-admin-preview.av-rotateInUpLeft,
.avia_transform .avia_start_delayed_animation.av-rotateInUpLeft {
	animation: avia-rotateInUpLeft 0.8s 1 cubic-bezier(0.175, 0.885, 0.320, 1.275);
	opacity: 1;
}

.avia-animate-admin-preview.av-rotateInUpRight,
.avia_transform .avia_start_delayed_animation.av-rotateInUpRight {
	animation: avia-rotateInUpRight 0.8s 1 cubic-bezier(0.175, 0.885, 0.320, 1.275);
	opacity: 1;
}

.avia-animate-admin-preview.avia-curtain-reveal-overlay,
.avia_transform.avia_desktop .avia-curtain-reveal-overlay,
.avia_transform .avia-curtain-reveal-overlay{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 1;
	z-index: 100;
}

.avia-animate-admin-preview.curtain-reveal-ttb,
.avia_transform .avia_start_delayed_animation.curtain-reveal-ttb{
	animation: avia-curtain-reveal-ttb cubic-bezier(0.17,0.84,0.44,1) 1s 1;
	height: 0;
	top: 100%;
}

.avia-animate-admin-preview.curtain-reveal-btt,
.avia_transform .avia_start_delayed_animation.curtain-reveal-btt{
	animation: avia-curtain-reveal-btt cubic-bezier(0.17,0.84,0.44,1) 1s 1;
	height: 0;
}

.avia-animate-admin-preview.curtain-reveal-ltr,
.avia_transform .avia_start_delayed_animation.curtain-reveal-ltr{
	animation: avia-curtain-reveal-ltr cubic-bezier(0.17,0.84,0.44,1) 1s 1;
	width: 0;
	left: 100%;
}

.avia-animate-admin-preview.curtain-reveal-rtl,
.avia_transform .avia_start_delayed_animation.curtain-reveal-rtl{
	animation: avia-curtain-reveal-rtl cubic-bezier(0.17,0.84,0.44,1) 1s 1; /* IE 10+ */
	width: 0;
}


/*pop up animation*/
@keyframes avia_appear {
  0%   { transform:scale(0.5); opacity: 0.1;  }
  100% { transform:scale(1); opacity: 1;  }
}

@keyframes avia_image_appear {
  0%   { transform:scale(0.7); opacity: 0.1;  }
  100% { transform:scale(1); opacity: 1;  }
}

@keyframes avia_hotspot_appear {
  0%   { transform:translate(0, 80px); opacity: 0.1;  }
  100% { transform:translate(0, 0px); opacity: 1;  }
}

@keyframes avia_appear_short {
  0%   { transform:scale(0.5); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { transform:scale(1); opacity: 0;  }
}


/*pop up animation*/
@keyframes avia_masonry_show {
  0%   { transform:translateZ(300px) translateY(200px) rotateX(-70deg); opacity: 0.1;  }
  100% { transform:translateZ(0px) translateY(0px) rotateX(0deg); opacity: 1;  }
}


/*animated arrow animattion*/
@keyframes avia_fade_move_down {
  0%   { transform:translate(0,-20px); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { transform:translate(0,20px); opacity: 0; }
}


/*slide down (height increase) animation*/
@keyframes avia_slide_down {
  0%   { height:0%; }
  100% { height:100%; }
}


/*expand width animation*/
@keyframes avia_expand {
  0%   { width:0%; }
  100% { width:100%; }
}


/*fade in animation*/
@keyframes avia-ltr {
  0%   { transform:translate(-10%,0); opacity: 0;  }
  100% { transform:translate(0,0); opacity: 1; }
}

@keyframes avia-rtl {
  0%   { transform:translate(10%,0); opacity: 0;  }
  100% { transform:translate(0,0); opacity: 1; }
}

@keyframes avia-btt {
  0%   { transform:translate(0,50%); opacity: 0;  }
  100% { transform:translate(0,0); opacity: 1; }
}

@keyframes avia-ttb {
  0%   { transform:translate(0, -10%); opacity: 0;  }
  100% { transform:translate(0,0); opacity: 1; }
}


@keyframes avia-fadein {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes avia-fadeOut {
  0%   { opacity: 1; }
  100% { opacity: 0; }
}


/*rotate*/
@keyframes avia-rotateIn {
  0% {
    transform-origin: center;
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  100% {
    transform-origin: center;
    transform: none;
    opacity: 1;
  }
}

@keyframes avia-rotateInUpLeft {
  0% {
    transform-origin: left bottom;
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  100% {
    transform-origin: left bottom;
    transform: none;
    opacity: 1;
  }
}

@keyframes avia-rotateInUpRight {
  0% {
    transform-origin: right bottom;
    transform: rotate3d(0, 0, 1, -22deg);
    opacity: 0;
  }

  100% {
    transform-origin: right bottom;
    transform: none;
    opacity: 1;
  }
}


/*background animation*/
@keyframes avia-bg-move {
  0%   { background-position: -31px 0;  }
  100% { background-position: 0 0; }
}


/*caption animation*/
@keyframes caption-right {
  0%   { transform:translate(2000px,0); opacity: 0;  }
  100% { transform:translate(0,0); opacity: 1; }
}

@keyframes caption-left {
  0%   { transform:translate(-2000px,0); opacity: 0;  }
  100% { transform:translate(0,0); opacity: 1; }
}

@keyframes caption-top {
  0%   { transform:translate(0,-20px); opacity: 0;  }
  100% { transform:translate(0,0); opacity: 1; }
}

@keyframes caption-bottom {
  0%   { transform:translate(0,20px); opacity: 0;  }
  100% { transform:translate(0,0); opacity: 1; }
}


/*image hotspot pulse*/
@keyframes av_pulsate {
    0% 		{transform: scale(0.1); opacity: 0.0;}
    50% 	{opacity: 0.7;}
    100% 	{transform: scale(1); opacity: 0.0;}
}


/*sonar effect*/
@keyframes sonarEffect {
	0% {opacity: 0.3;}
	40% {opacity: 0.5;box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px #fff, 0 0 0 10px rgba(255,255,255,0.5);}
	100% {box-shadow: 0 0 0 2px rgba(255,255,255,0.1), 0 0 10px 10px #fff, 0 0 0 10px rgba(255,255,255,0.5);transform: scale(1.5);opacity: 0;}
}


/* curtain reveals  1px miscalc on several screen sizes !!! */
@keyframes avia-curtain-reveal-ltr{
	0%	{ width: 101%; left: 0; }
	100%{ width: 0; left: 100%; }
}

@keyframes avia-curtain-reveal-rtl{
	0%	{ width: 100%; }
	100%{ width: 0; }
}

@keyframes avia-curtain-reveal-ttb{
	0%	{ height: 101%; top: 0; }
	100%{ height: 0; top: 100%; }
}

@keyframes avia-curtain-reveal-btt{
	0%	{ height: 100%; }
	100%{ height: 0; }
}

/*	==================================================================
	Advanced Animations		based on https://github.com/animate-css
	==================================================================
*/

.avia-animate-admin-preview.fade-in-left,
.avia_transform .avia_start_delayed_animation.fade-in-left{
	animation: avia-fade-in-left cubic-bezier(0.17,0.84,0.44,1) 1s 1 forwards;
}

.avia-animate-admin-preview.fade-in-right,
.avia_transform .avia_start_delayed_animation.fade-in-right{
	animation: avia-fade-in-right cubic-bezier(0.17,0.84,0.44,1) 1s 1 forwards;
}

.avia-animate-admin-preview.fade-in-down,
.avia_transform .avia_start_delayed_animation.fade-in-down{
	animation: avia-fade-in-down cubic-bezier(0.17,0.84,0.44,1) 1s 1 forwards;
}

.avia-animate-admin-preview.fade-in-up,
.avia_transform .avia_start_delayed_animation.fade-in-up{
	animation: avia-fade-in-up cubic-bezier(0.17,0.84,0.44,1) 1s 1 forwards;
}

.avia-animate-admin-preview.flip-in-x,
.avia_transform .avia_start_delayed_animation.flip-in-x{
	animation: avia-flip-in-x cubic-bezier(0.17,0.84,0.44,1) 1s 1 forwards;
}

.avia-animate-admin-preview.flip-in-y,
.avia_transform .avia_start_delayed_animation.flip-in-y{
	animation: avia-flip-in-y cubic-bezier(0.17,0.84,0.44,1) 1s 1 forwards;
}

.avia-animate-admin-preview.roll-in,
.avia_transform .avia_start_delayed_animation.roll-in{
	animation: avia-roll-in cubic-bezier(0.17,0.84,0.44,1) 1s 1 forwards;
}

.avia-animate-admin-preview.zoom-in,
.avia_transform .avia_start_delayed_animation.zoom-in{
	animation: avia-zoom-in cubic-bezier(0.17,0.84,0.44,1) 1s 1 forwards;
}

@keyframes avia-fade-in-left{
	0% {
		opacity: 0;
		transform: translate3d(-100%, 0, 0);
	}
  100% {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
}

@keyframes avia-fade-in-right{
	0% {
		opacity: 0;
		transform: translate3d(100%, 0, 0);
	}
	100% {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
}

@keyframes avia-fade-in-down {
	0% {
		opacity: 0;
		transform: translate3d(0, -100%, 0);
	}
	100% {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
}

@keyframes avia-fade-in-up {
	0% {
		opacity: 0;
		transform: translate3d(0, 100%, 0);
	}
	100% {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
}

@keyframes avia-flip-in-x{
	0% {
		transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
		animation-timing-function: ease-in;
		opacity: 0;
	}
/*	40% {
		transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
		animation-timing-function: ease-in;
	}
	60% {
		transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
		opacity: 1;
	}*/
	80% {
		transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
	}
	100% {
		transform: perspective(400px);
		opacity: 1;
	}
}

@keyframes avia-flip-in-y{
	0% {
		transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
		animation-timing-function: ease-in;
		opacity: 0;
	}
/*	40% {
		transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
		animation-timing-function: ease-in;
	}
	60% {
		transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
		opacity: 1;
	}*/
	80% {
		transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
	}
	100% {
		transform: perspective(400px);
		opacity: 1;
	}
}

@keyframes avia-roll-in{
	0% {
		opacity: 0;
		transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
	}
	100% {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
}

@keyframes avia-zoom-in{
	0% {
		opacity: 0;
		transform: scale3d(0.3, 0.3, 0.3);
	}
	100% {
		opacity: 1;
	}
}



/*	=============================
	Shape SVG Dividers
	=============================
*/
.avia-divider-svg{
	overflow: hidden;
	position: absolute;
	left: 0;
	width: 100%;
	line-height: 0;
	direction: ltr;
	pointer-events: none;
}

.avia-divider-svg-top{
    top: 0px;
}

/* fix a small gap on different screen sizes - rotate(180deg) seems not calculate correctly  */
.avia-divider-svg-bottom{
	bottom: -2px;
}

/*	Temporary fixes for Chrome 85 issue. Can be removed in a future version of Chrome.	*/
.avia-divider-svg-top:not(.avia-svg-original) svg,
.avia-divider-svg-bottom:not(.avia-svg-negative) svg{
	z-index: -1;
}

.avia-divider-svg.avia-divider-svg-bottom.avia-svg-original,
.avia-divider-svg.avia-divider-svg-top.avia-svg-negative{
	transform: rotate(180deg);
}

.avia-divider-svg svg{
	fill: #fff;
	display: block;
	width: calc(100% + 1.3px);
	position: relative;
	left: 50%;
	transform: translateX(-50%);
}

.avia-divider-svg path{
	transform-origin: center;
	transform: rotateY(0deg);
}

.avia-divider-svg.avia-flipped-svg svg{
	transform: translateX(-50%) rotateY(180deg);
}

.avia-divider-svg.avia-to-front{
	z-index: 100;
}


/*	special case for paralax with overlay hiding svg */
.av-parallax-section.av-section-color-overlay-active .avia-divider-svg{
	z-index: 1;
}
.av-parallax-section.av-section-color-overlay-active .avia-divider-svg.avia-to-front{
	z-index: 100;
}


```

</details>


---

## 🟠 Enfold Komponenter

Styling för specifika element som knappar, listor, rubriker etc.


### buttons.css
**Size:** 6.5 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/buttons/buttons.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
/* ======================================================================================================================================================
Button
====================================================================================================================================================== */

/*button element*/
.avia-button-wrap{
	display:inline-block;
}

.avia-button{
	color: #777;
	border-color: #e1e1e1;
	background-color: #f8f8f8;
}

body div .avia-button{
	border-radius: 3px;
	padding:10px;
	font-size: 12px;
	text-decoration: none;
	display:inline-block;
	border-bottom-style: solid;
	border-bottom-width: 1px;
	margin:3px 0;
	line-height: 1.2em;
	position: relative;
	font-weight: normal;
	text-align: center;
	max-width: 100%;
}

.avia-button:hover{
	opacity: 0.9;
	transition: all 0.4s ease-in-out;
}

.avia-button:active{
	border-bottom-width: 0px;
	border-top-width: 1px;
	border-top-style: solid;
}

.avia-button.avia-color-theme-color-subtle{
	background-image: none;
}

.avia-button.avia-color-theme-color-subtle:hover{}

.avia-button .avia_button_icon{
	position: relative;
	left: -0.3em;
	-webkit-perspective: 1000px;
	-webkit-backface-visibility: hidden;
}

.avia-button .avia_button_icon.avia_button_icon_right{
	left: 0.3em;
}

.avia-button.avia-icon_select-no .avia_button_icon{
	display:none
}

.avia-button.avia-color-grey,
.avia-button.avia-color-grey:hover{
	background-color: #555;
	border-color: #333333;
	color: #fff;
}

.avia-button.avia-color-black,
.avia-button.avia-color-black:hover{
	background-color: #2c2c2c;
	border-color: #000;
	color: #fff;
}

.avia-button.avia-color-red,
.avia-button.avia-color-red:hover{
	background-color: #B02B2C;
	border-color: #8B2121;
	color: #fff;
}

.avia-button.avia-color-orange,
.avia-button.avia-color-orange:hover{
	background-color: #edae44;
	border-color: #CA9336;
	color: #fff;
}

.avia-button.avia-color-green,
.avia-button.avia-color-green:hover{
	background-color: #83a846;
	border-color: #6F8F3B;
	color: #fff;
}

.avia-button.avia-color-blue,
.avia-button.avia-color-blue:hover{
	background-color: #7bb0e7;
	border-color: #6693C2;
	color: #fff;
}

.avia-button.avia-color-aqua,
.avia-button.avia-color-aqua:hover{
	background-color: #4ecac2;
	border-color: #3EAAA3;
	color: #fff;
}

.avia-button.avia-color-teal,
.avia-button.avia-color-teal:hover{
	background-color: #5f8789;
	border-color: #3F5E5F;
	color: #fff;
}

.avia-button.avia-color-purple,
.avia-button.avia-color-purple:hover{
	background-color: #745f7e;
	border-color: #514358;
	color: #fff;
}

.avia-button.avia-color-pink,
.avia-button.avia-color-pink:hover{
	background-color: #d65799;
	border-color: #BB4B85;
	color: #fff;
}

.avia-button.avia-color-silver,
.avia-button.avia-color-silver:hover{
	background-color: #DADADA;
	border-color: #B4B4B4;
	color: #555;
}

#top a.avia-button.avia-font-color-grey,
.avia-button.avia-font-color-grey-hover:hover{
	color: #333333;
}

#top a.avia-button.avia-font-color-black,
.avia-button.avia-font-color-black-hover:hover{
	color: #000;
}

#top a.avia-button.avia-font-color-red,
.avia-button.avia-font-color-red-hover:hover{
	color: #8B2121;
}

#top a.avia-button.avia-font-color-orange,
.avia-button.avia-font-color-orange-hover:hover{
	color: #CA9336;
}

#top a.avia-button.avia-font-color-green,
.avia-button.avia-font-color-green-hover:hover{
	color: #6F8F3B;
}

#top a.avia-button.avia-font-color-blue,
.avia-button.avia-font-color-blue-hover:hover{
	color: #6693C2;
}

#top a.avia-button.avia-font-color-aqua,
.avia-button.avia-font-color-aqua-hover:hover{
	color: #3EAAA3;
}

#top a.avia-button.avia-font-color-teal,
.avia-button.avia-font-color-teal-hover:hover{
	color: #3F5E5F;
}

#top a.avia-button.avia-font-color-purple,
.avia-button.avia-font-color-purple-hover:hover{
	color: #514358;
}

#top a.avia-button.avia-font-color-pink,
.avia-button.avia-font-color-pink-hover:hover{
	color: #BB4B85;
}

#top a.avia-button.avia-font-color-silver,
.avia-button.avia-font-color-silver-hover:hover{
	color: #B4B4B4;
}

#top .avia-button.avia-color-light{
	color:#fff;
	border:3px solid #fff;
	background: transparent;
}

#top .avia-button.avia-color-dark{
	color:#000;
	border:3px solid #000;
	color:rgba(0,0,0,0.6);
	border-color: rgba(0,0,0,0.6);
	background: transparent;
}

.avia-button.avia-color-light:hover{
	opacity: 0.7;
	color:#fff;
}

.avia-button.avia-color-dark:hover{
	opacity: 0.7;
	color:#000;
	color:rgba(0,0,0,0.6);
}

.avia-button.avia-color-theme-color-subtle{
	border-width:1px;
	border-style: solid;
}

.avia-button-center {
	display:block;
	text-align: center;
	clear:both;
}

.avia-button-right{
	display:block;
	float:right;
}

.avia-button.avia-position-right{
	float:right;
	display:block;
}

.avia-button.avia-position-left{
	float:left;
	display:block;
}

.avia-button.avia-size-small{
	padding:9px 10px 7px;
	font-size: 13px;
	min-width: 80px;
}

.avia-button.avia-size-medium{
	padding:12px 16px 10px;
	font-size: 13px;
	min-width: 90px;
}

.avia-button.avia-size-large{
	padding: 15px 30px 13px;
	font-size: 13px;
	min-width: 139px;
}

.avia-button.avia-size-x-large{
	padding: 25px 50px 23px;
	font-size: 15px;
	min-width: 200px;
}

.av-icon-on-hover .avia_button_icon{
	width: 0px;
	overflow: hidden;
	display: inline-block;
	height: 1em;
	transition:all 0.2s ease-in-out;
	opacity: 0;
}

.av-icon-on-hover:hover .avia_button_icon{
	width: 1.5em;
	opacity: 1;
}

#top .av-button-notext{
	min-width: 0;
}

#top .av-button-notext .avia_button_icon{
	left:0;
}

.av-button-label-on-hover{
	box-sizing: content-box;
}
.av-button-label-on-hover.avia-button.avia-size-small{
	padding:0;
	line-height: 30px;
	width: 32px;
}

.av-button-label-on-hover.avia-button.avia-size-medium{
	padding:0;
	line-height: 36px;
	width: 38px;
}

.av-button-label-on-hover.avia-button.avia-size-large{
	padding:0;
	line-height: 42px;
	width: 44px;
}

.av-button-label-on-hover.avia-button.avia-size-x-large{
	padding:0;
	line-height: 66px;
	width: 68px;
}

#top .avia-button .avia_button_background{
	opacity: 0;
	position: absolute;
	top: -3px;
	left: 0;
	bottom: -6px;
	right: 0;
	transition: all 0.4s ease-in-out;
}

#top .avia-button:hover .avia_button_background{
	opacity: 0.9;
}

#top .avia-button .avia_button_icon,
#top .avia-button .avia_iconbox_title{
	position: relative;
	z-index: 3;
}

/*	Sonar effect	*/
.avia-button.avia-sonar-shadow:after{
	content: '';
	pointer-events: none;
	position: absolute;
	top: 0;
	left: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	z-index: -1;
	/*border-radius: 10px;*/
	box-sizing: content-box;
	box-shadow: 0 0 0 2px rgba(255,255,255,0.1);
	transform: scale(0.9);
	transform-style: preserve-3d;
}

```

</details>


### buttonrow.css
**Size:** 0.5 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/buttonrow/buttonrow.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
.avia-buttonrow-wrap > .avia-button{
    vertical-align: bottom;
}

.avia-buttonrow-left{
    text-align: left;
}

.avia-buttonrow-right{
    text-align: right;
}

.avia-buttonrow-center{
    text-align: center;
}

.avia-buttonrow-right .avia-button:first-child,
.avia-buttonrow-left .avia-button:first-child{
    margin-left: 0 !important;
}

.avia-buttonrow-right .avia-button:last-child,
.avia-buttonrow-left .avia-button:last-child {
    margin-right: 0 !important;
}

```

</details>


### comments.css
**Size:** 5.7 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/comments/comments.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
/* ======================================================================================================================================================
#Comment
====================================================================================================================================================== */


h4#comments{
	margin-bottom:30px;
}

#respond{
	margin-top:20px;
}

.commentlist ul {
	border-left-style: dashed;
	border-left-width: 1px;
}

.children .children .says{
	border-bottom-style: dashed;
	border-bottom-width: 1px;
}

.miniheading,
.author_name,
#reply-title,
#top .logged-in-as,
.dynamic-column-title{
	font-weight: 600;
	letter-spacing: 1px;
}

#comments span,
.minitext,
.form-allowed-tags,
#reply-title small,
#commentform label{
	font-size: 0.85em;
	display:block;
	letter-spacing: 0;
	text-transform: none;
	padding-top:8px;
	line-height: 1.5em;
	font-weight: normal;
}

.comment_meta_container{
	clear:both;
	float:none;
}

#top .commentlist{
	margin:0;
	padding: 0 0 10px 0px;
	border:none;
}

#top .commentlist .comment{
	list-style-type: none;
	list-style-position: outside;
	width:100%;
	position: relative;
	display: block;
	background: none;
	min-height:100px;
	clear: both;
}

#top .commentlist .comment.depth-1{
	float:left;
}

#top .commentlist .comment>div{
	min-height: 100px;
	float: left;
	width:100%;
}

.commentlist>.comment{
	border-bottom-style: dashed;
	border-bottom-width: 1px;
	margin-bottom:30px;
}

.gravatar{
	position: relative;
	z-index: 2;
	border-radius: 200px;
	overflow: hidden;
	float: left;
}

.gravatar img{
	padding:0;
	margin:0;
	display: block;
	border-radius: 200px;
}

.comment_content{
	position:relative;
	margin:0 0 0 85px;
	padding:0 35px 15px 0;
	z-index: 10;
	overflow: hidden;
}

.author_name a,
.author_name a:hover{
	font-weight: bold;
	text-decoration: none;
}

.comment-edit-link,
#cancel-comment-reply-link{
	display:inline-block;
	font-size: 10px;
}

.author_name,
.comment_title{
	font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}

.commentmetadata {
	font-size:11px;
	line-height: 1em;
}

.commentmetadata a{
	text-decoration: none;
}

.commentmetadata a:hover{
	text-decoration: underline;
}

.says {
	display: block;
	height: 1px;
	left: -70px;
	position: absolute;
	text-indent: 200%;
	top: 18px;
	width: 40px;
	overflow: hidden;
}

#top .comment_text{
	clear: both;
	font-size: 13px;
	padding:  0 0 15px 0;
	border:none;
}

#top .comment-reply-link {
	font-size: 11px;
	text-decoration: none;
	line-height: 20px;
}

.side-container-comment-inner{
	text-align: center;
	position: relative;
	overflow: hidden;
	margin-bottom:15px;
}

.comment-count {
	font-size: 24px;
	line-height: 60px;
	width: 60px;
	display: block;
	text-align: center;
	border-radius: 200px;
	margin: 0 auto;
	position: relative;
	z-index: 100;
}

.side-container-comment-inner .comment-text{
	font-size: 12px;
	text-transform: uppercase;
}

.center-border{
	position: absolute;
	top:39%;
	width:42%;
	border-top-style: solid;
	border-top-width: 1px;
	z-index: 1;
}
.center-border-left{
	left:0;
}

.center-border-right{
	right:0;
}


/*children*/
#top .commentlist ul{
	margin: 0 0 0 74px;
	clear:both;
}

#top .commentlist .children ul{
	margin: 0 0 0 47px;
}

.children .comment_content {
	margin: 0 0 0 28px;
	padding-bottom:30px;
	z-index: 1;
}

.children .gravatar{
	position: relative;
	left:-24px;
	z-index: 2;
	width:45px;
}

#top .children .comment-reply-link {
	left: -42px;
	top: 51px;
}

/*comment page nav*/

.comment_page_nav_links{
	position: relative;
	display: block;
	clear:both;
	overflow: hidden;
	font-size:11px;
}

.comment_prev_page a{
	float:left;
}

.comment_next_page a{
	float:right;
}

.comment_page_nav_links_bottom{
}

.comment_page_nav_links_top{

}

.sidebar_right .comment_container {
	padding-right: 50px;
}

.sidebar_left .comment_container {
	margin-left: 0;
}

.comment_container{
	max-width: 100%;
}

/*generated by comment_form()*/

#commentform{
	position: relative;
}

#commentform p{
	position: relative;
	padding:0 0 10px 0;
	margin:0;
}

#reply-title small a{
	float:right;
}

#commentform label{
	position: absolute;
	left:245px;
	font-size: 11px;
	top:0;
	font-weight: bold;
}

#commentform input[type='checkbox'] + label{
	left:2.5em;
}

#commentform div input{
	margin:0;
}

.commentlist #commentform label{
	position: static;
	display: block;
}

.comment-notes, #commentform  .comment-form-comment label{
	display:none;
}

#top .comment-form-url input,
#top .comment-form-email input,
#top .comment-form-author input{
	width: 220px;
}

#top .commentlist .comment-form-url input,
#top .commentlist .comment-form-email input,
#top .commentlist .comment-form-author input{
	width: 70%;
}

#comment{
	width:602px;
	height:150px;
	padding:10px 7px;
	font-size: 12px;
	margin:0;
}

.form-allowed-tags{
	font-size: 11px;
	line-height: 1.5em;
	margin-bottom: 5px;
}

.form-allowed-tags code{
	display:block;
	padding-top:5px;
}

.commentlist #respond {
	padding: 0 0 30px 56px;
}

.commentlist #respond #comment{
	width:90%;
}

.commentlist #respond .form-allowed-tags{
	display:none;
}

#reply-title{
	display:none;
}

#reply-title small{
	display:inline;
}

.commentlist #reply-title{
	display:block;
}

#comment{
	width:94%;
	font-size:12px;
}

.personal_data p{
	float:left;
	width:33%;
}

.personal_data label{
	display:none;
}

.template-blog .post .entry-content-wrapper{
	/*
		font-size: 14px;
		line-height: 1.7em;
	*/
	overflow:hidden;
}

.template-blog .post_delimiter{
	margin: 0 0 50px 0;
	padding: 50px 0 0 0;
	/*
		border-bottom-style: solid;
		border-bottom-width: 1px;
	*/
	clear:both;
}

.template-blog .post-entry-last .post_delimiter{
	border:none;
	height:1px;
}

.av-buildercomment .av-buildercomment-unapproved{
	padding: 30px 0 15px;
	text-align: center;
	font-size: 1.4em;
	font-weight: 500;
}
```

</details>


### contact.css
**Size:** 13.2 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/contact/contact.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
/* ======================================================================================================================================================
Contact Form defaults
====================================================================================================================================================== */

.avia_ajax_form {
	clear: both;
}

.avia_ajax_form fieldset p br {
	display: none;
}

.avia_ajax_form label {
	display: block;
	visibility: visible;
	position: relative; /*dont delete. ie8 needs this separate*/
}

.avia_ajax_form label,
.modified_width:before {
	display: block;
	visibility: visible;
	position: relative;
	margin-bottom: 7px;
	font-weight: 600;
}

.avia_ajax_form p.av-form-empty-line {
	height: 2em;
}

#ajaxresponse.hidden {
	visibility: visible;
	position: static;
	display: none;
}

#top .avia_ajax_form .text_input,
#top .avia_ajax_form .select,
#top .avia_ajax_form .text_area {
	width: 100%;
	margin-bottom: 0;
	display: inline;
	min-width: 50px;
	padding: 13px;
	border-radius: 2px;
}

#top .avia_ajax_form .select[multiple] option {
	padding: 5px;
}

#top .avia_ajax_form .select[multiple] option.av-placeholder {
	font-weight: 600;
	border-bottom: 1px solid;
	margin-bottom: 5px;
}

#top .avia_ajax_form input[type="checkbox"] {
	float: left;
	margin-right: 8px;
	top: 2px;
	position: relative;
}

#top .avia_ajax_form input[type="submit"].avia-button-default-style {
	background-color: #9a9a9a;
	border-color: #737373;
	pointer-events: none;
	opacity: 0;
	animation: all 0.7s;
}

#top .avia_ajax_form.av-form-input-visible input[type="submit"].avia-button-default-style {
	opacity: 1;
	animation: all 0.7s;
}

.value_verifier_label {
	position: absolute;
	bottom: 11px;
	left: 10px;
	font-size: 13px;
	line-height: 21px;
}

.avia_ajax_form.av-form-labels-hidden label {
	position: fixed;
	top: -1000px;
	left: -2000px;
}

.avia_ajax_form.av-form-labels-hidden label.input_checkbox_label {
	position: initial;
	top: initial;
	left: initial;
}

.avia_ajax_form p {
	position: relative;
	clear: both;
	float: left;
	width: 100%;
	margin: 11px 0;
}

.avia_ajax_form.av-form-labels-hidden p {
	margin-top: 8px;
	margin-bottom: 8px;
}

.avia_ajax_form p.hidden {
	position: absolute;
	width: 0px;
	left: 0;
	top: 0;
}

.avia_ajax_form .form_element_half {
	width: 49.5%;
	float: left;
	margin-left: 1%;
	clear: none;
}

.avia_ajax_form .form_element_third {
	width: 32.6%;
	float: left;
	margin-left: 1%;
	clear: none;
}

.avia_ajax_form .form_element_two_third {
	width: 66.4%;
	float: left;
	margin-left: 1%;
	clear: none;
}

.avia_ajax_form .form_element_fourth {
	width: 24.2%;
	float: left;
	margin-left: 1%;
	clear: none;
}
.avia_ajax_form .form_element_three_fourth {
	width: 74.8%;
	float: left;
	margin-left: 1%;
	clear: none;
}

.avia_ajax_form .first_form {
	clear: both;
	margin-left: 0;
}

.avia_ajax_form .button {
	margin: 0;
	padding: 16px 20px;
	border-radius: 2px;
	border-bottom-width: 1px;
	border-bottom-style: solid;
	font-weight: normal;
	font-size: 0.92em;
	min-width: 142px;
	outline: none;
}

.modified_width .button {
	width: 100%;
	padding: 13px 10px 14px;
	min-width: 0;
}

.av-form-labels-visible .modified_width:before {
	display: block;
	content: "Submit Form";
	visibility: hidden;
}

.av-form-labels-visible .av-last-visible-form-element.first_form.modified_width:before {
	display: none;
}

#footer .avia_ajax_form textarea {
	height: 90px;
}

.avia_ajax_form p input,
.avia_ajax_form p textarea,
.avia_ajax_form p select,
.avia_ajax_form p .input_checkbox_label {
	transition: all 0.3s ease-in-out;
}

#top .button.av-sending-button {
	transition: none;
	background-size: 32px 32px;
	animation: avia-bg-move 1.2s linear infinite; 
}

.av-centered-form,
#top .av-centered-form input {
	text-align: center;
}

#top .av-centered-form ::-webkit-input-placeholder,
#top .av-centered-form ::-moz-placeholder,
#top .av-centered-form :-ms-input-placeholder {
	text-align: center;
}

#top .avia_ajax_form input.captcha,
#top .av-centered-form input.captcha {
	text-align: left;
	padding-left: 70px;
}

.avia_ajax_form .av-hidden-submit {
	display: none;
}

.avia-form-success {
	text-align: center;
	border-style: solid;
	border-width: 1px;
	padding: 20px 15px;
	line-height: 1.4em;
	border-radius: 2px;
	clear: both;
}

.avia-form-error {
	text-align: center;
	border-style: solid;
	border-width: 1px;
	padding: 20px 15px;
	line-height: 1.4em;
	border-radius: 2px;
	clear: both;
	font-weight: bold;
}

.av-fields-with-error {
	padding: 10px 10px;
	margin-right: 20px;
	font-size: 12px;
	background-color: #f8f8f8;
	color: #c26666;
	border: 2px solid #c26666 !important;
	border-radius: 5px;
}

#top .av-custom-form-color ::placeholder {
	color: inherit;
	opacity: 0.8;
}

#top .av-centered-form input[type="checkbox"] {
	float: none;
}

#top .av-centered-form .input_checkbox_label {
	display: inline-block;
}

.avia_ajax_form .required {
	text-decoration: none;
}

/*contact form datepicker*/
#top .avia-datepicker-div {
	background: #fff;
	border: 1px solid #e1e1e1;
	font-size: 15px;
}

#top .avia-datepicker-div a {
	color: #333;
	background-color: #f8f8f8;
	background-image: none;
}

#top .avia-datepicker-div a.ui-state-active {
	color: #8bba34;
}

#top .avia-datepicker-div a.ui-state-highlight {
	color: #8bba34;
}

#top .avia-datepicker-div a.ui-state-hover {
	color: #fff;
	background-color: #bbb;
}

#top .avia-datepicker-div .ui-datepicker-buttonpane button {
	background-color: #8bba34;
	color: #fff;
	border-color: #8bba34;
}

#top .avia-datepicker-div.ui-datepicker {
	width: 300px;
	padding: 20px;
	display: none;
	box-shadow: 0px 0px 44px 0px rgba(0, 0, 0, 0.2);
	border-radius: 0;
}

#top .avia-datepicker-div.ui-datepicker .ui-datepicker-header {
	position: relative;
	padding: 0.2em 0;
	background: transparent;
	border: none;
}

#top .avia-datepicker-div.ui-datepicker .ui-datepicker-prev,
#top .avia-datepicker-div.ui-datepicker .ui-datepicker-next {
	position: absolute;
	top: 4px;
	width: 50px;
	text-align: center;
	line-height: 34px;
	height: 34px;
	cursor: pointer;
	border-radius: 0;
	text-decoration: none;
	font-size: 12px;
}

#top .avia-datepicker-div.ui-datepicker .ui-datepicker-prev {
	left: 2px;
}

#top .avia-datepicker-div.ui-datepicker .ui-datepicker-next {
	right: 2px;
}

#top .avia-datepicker-div.ui-datepicker .ui-datepicker-title {
	margin: 0px 53px;
	line-height: 32px;
	text-align: center;
	font-weight: bold;
	letter-spacing: 1.5px;
	text-transform: uppercase;
}

#top .ui-datepicker-title select {
	width: 72px;
	float: left;
	font-size: 12px;
	margin-left: 3px;
	margin-bottom: 0;
	border-radius: 0px;
}

#top .avia-datepicker-div.ui-datepicker .ui-datepicker-title select {
	font-size: 14px;
	margin: 1px;
}

#top .avia-datepicker-div.ui-datepicker select.ui-datepicker-month-year {
	width: 100%;
}

#top .avia-datepicker-div.ui-datepicker select.ui-datepicker-month,
#top .avia-datepicker-div.ui-datepicker select.ui-datepicker-year {
	width: 48%;
}

#top .avia-datepicker-div.ui-datepicker select.ui-datepicker-year {
	float: right;
}

#top .avia-datepicker-div.ui-datepicker table {
	width: 100%;
	font-size: 0.9em;
	border-collapse: collapse;
	margin: 0 0 0.4em;
}

#top .avia-datepicker-div.ui-datepicker th {
	padding: 0.7em 0.3em;
	text-align: center;
	font-weight: bold;
	border: 0;
}

#top .avia-datepicker-div.ui-datepicker td {
	border: 0;
	padding: 1px;
}

#top .avia-datepicker-div.ui-datepicker td span,
#top .avia-datepicker-div.ui-datepicker td a {
	border: none;
	display: block;
	padding: 0.2em;
	text-align: center;
	text-decoration: none;
}

#top .avia-datepicker-div.ui-datepicker .ui-datepicker-buttonpane {
	background-image: none;
	margin: 0.7em 0 0 0;
	padding: 0 0.2em;
	border-left: 0;
	border-right: 0;
	border-bottom: 0;
}

#top .avia-datepicker-div.ui-datepicker .ui-datepicker-buttonpane button {
	float: right;
	margin: 0.5em 0 0.4em;
	cursor: pointer;
	padding: 10px 20px;
	width: auto;
	overflow: visible;
	border: none;
	background-image: none;
	border-radius: 3px;
	font-size: 13px;
}

#top .avia-datepicker-div.ui-datepicker .ui-datepicker-buttonpane button.ui-datepicker-current {
	float: left;
}

#top .avia-datepicker-div .ui-widget-content {
	background: transparent;
	border: none;
}

#top .avia-datepicker-div.ui-datepicker .ui-datepicker-prev span,
#top .avia-datepicker-div.ui-datepicker .ui-datepicker-next span {
	text-indent: 0;
	overflow: visible;
	background-image: none;
	display: inline;
	position: static;
	margin: 0;
	font-weight: normal;
}

/* RTL support */
.avia-datepicker-div.ui-datepicker-rtl {
	direction: rtl;
}

.avia-datepicker-div.ui-datepicker-rtl .ui-datepicker-prev {
	right: 2px;
	left: auto;
}

.avia-datepicker-div.ui-datepicker-rtl .ui-datepicker-next {
	left: 2px;
	right: auto;
}

.avia-datepicker-div.ui-datepicker-rtl .ui-datepicker-prev:hover {
	right: 1px;
	left: auto;
}

.avia-datepicker-div.ui-datepicker-rtl .ui-datepicker-next:hover {
	left: 1px;
	right: auto;
}

.avia-datepicker-div.ui-datepicker-rtl .ui-datepicker-buttonpane {
	clear: right;
}

.avia-datepicker-div.ui-datepicker-rtl .ui-datepicker-buttonpane button {
	float: left;
}

.avia-datepicker-div.ui-datepicker-rtl .ui-datepicker-buttonpane button.ui-datepicker-current {
	float: right;
}

.avia-datepicker-div.ui-datepicker-rtl .ui-datepicker-group {
	float: right;
}

.avia-datepicker-div.ui-datepicker-rtl .ui-datepicker-group-last .ui-datepicker-header {
	border-right-width: 0;
	border-left-width: 1px;
}

.avia-datepicker-div.ui-datepicker-rtl .ui-datepicker-group-middle .ui-datepicker-header {
	border-right-width: 0;
	border-left-width: 1px;
}

/*custom form colors*/
#top .av-custom-form-color * {
	color: inherit;
}

#top .av-custom-form-color a {
	text-decoration: underline;
}

#top .av-custom-form-color ::-webkit-input-placeholder,
#top .av-custom-form-color ::-moz-placeholder,
#top .av-custom-form-color :-ms-input-placeholder {
	color: inherit;
	opacity: 0.8;
}

#top .av-custom-form-color .button {
	border: 2px solid;
}

#top .av-custom-form-color .button:hover {
}

#top .av-light-form,
#top .av-light-form + .ajaxresponse * {
	color: #fff;
}

#top .av-light-form + .ajaxresponse .avia-form-success {
	background: transparent;
}

#top div .av-light-form .input-text,
#top div .av-light-form input[type="text"],
#top div .av-light-form input[type="input"],
#top div .av-light-form input[type="password"],
#top div .av-light-form input[type="email"],
#top div .av-light-form input[type="number"],
#top div .av-light-form input[type="url"],
#top div .av-light-form input[type="tel"],
#top div .av-light-form input[type="search"],
#top div .av-light-form textarea,
#top div .av-light-form select,
div div .av-light-form .button {
	color: #fff;
	border-color: #fff;
	border-width: 2px !important;
	background-color: transparent;
}

#top .av-dark-form,
#top .av-dark-form + .ajaxresponse * {
	color: #222;
}

#top .av-dark-form + .ajaxresponse .avia-form-success {
	background: transparent;
}

#top div .av-dark-form .input-text,
#top div .av-dark-form input[type="text"],
#top div .av-dark-form input[type="input"],
#top div .av-dark-form input[type="password"],
#top div .av-dark-form input[type="email"],
#top div .av-dark-form input[type="number"],
#top div .av-dark-form input[type="url"],
#top div .av-dark-form input[type="tel"],
#top div .av-dark-form input[type="search"],
#top div .av-dark-form textarea,
#top div .av-dark-form select,
div div .av-dark-form .button {
	color: #222;
	border-color: #222;
	border-width: 2px !important;
	background-color: transparent;
}

/* recaptcha */
#top .avia_ajax_form .av-recaptcha-area {
	display: block;
}

#top .avia_ajax_form .av-recaptcha-submit.avia_button_inactive,
#top .avia_ajax_form .av-recaptcha-submit-real.avia_button_inactive {
	opacity: 0.3;
}
#top .avia_ajax_form .av-recaptcha-submit.avia_button_inactive:hover,
#top .avia_ajax_form .av-recaptcha-submit-real.avia_button_inactive:hover {
	cursor: default;
}

#top .avia_ajax_form .av-recaptcha-error {
	display: inline-block;
	width: 100%;
}

#top .avia_ajax_form .av-recaptcha-error.av-recaptcha-severe-error {
	background-color: red;
	color: white;
	border-radius: 8px;
	padding: 10px;
	text-align: center;
}

#top .avia_ajax_form .av-recaptcha-error.av-recaptcha-severe-error .av-recaptcha-error-main {
	color: white;
	font-weight: 900 !important;
}

#top .avia_ajax_form .av-recaptcha-error.av-err-content {
	margin: 5px 0;
	color: #fe6d4e;
	background-color: #fff;
	font-weight: 700;
	display: block;
	clear: both;
}

#top .avia_ajax_form.avia_recaptcha_v3 .av_form_privacy_check {
	margin-top: -15px;
}

body .grecaptcha-badge {
	z-index: 9000;
}

body.av-google-badge-hide .grecaptcha-badge {
	visibility: hidden;
}

body.av-google-badge-visible #scroll-top-link {
	bottom: 80px;
}

#top .avia_ajax_form .av-google-badge-message {
	padding: 12px 0 0 0;
	min-width: 300px;
	max-width: 100%;
	font-size: 0.8em;
	line-height: 1.3em;
}

#top .avia_ajax_form.av-centered-form .av-google-badge-message {
	text-align: center;
	width: 100%;
	max-width: 100%;
	float: left;
}

#top .avia_ajax_form .avia-disabled-form {
	padding: 15px 15px;
	font-size: 1.5em;
	font-weight: 900;
	display: none;
}

#top .avia_ajax_form.av-form-user-disabled .avia-disabled-form {
	display: block;
}

#top .avia_ajax_form.av-centered-form .avia-disabled-form {
	text-align: center;
}

@media only screen and (max-width: 479px) {
	.responsive .avia_ajax_form .form_element {
		width: 100%;
		clear: both;
		margin-right: 0;
		margin-left: 0;
		float: none;
	}
}

```

</details>


### gallery.css
**Size:** 3.5 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/gallery/gallery.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
/* ======================================================================================================================================================
Gallery
====================================================================================================================================================== */
#top div .avia-gallery{
	overflow: hidden;
	padding-bottom: 2px;
	clear: both;
}

#top div .avia-gallery img{
	float:left;
	border-style: solid;
	border-width: 1px;
	padding: 7px;
	width: 100%;
	border-radius: 0;
}

#top div .avia-gallery .avia-gallery-big{
	display: block;
	overflow: hidden;
	padding: 7px;
	margin-bottom: -1px;
	border-top-left-radius: 2px;
	border-top-right-radius: 2px;
	border-style: solid;
	border-width: 1px;
}

#top div .avia-gallery .avia-gallery-big-inner{
	display: block;
	overflow: hidden;
	height: 100%;
}

#top div .avia-gallery .avia-gallery-big img{
	padding: 0;
	border: none;
}

#top .avia-gallery .avia-gallery-thumb a{
	width: 20%;
	opacity: 1;
}

#top #wrap_all .avia-gallery .avia-gallery-thumb a{
	display: inline-block;
	vertical-align: top;
}

#top .avia-gallery .avia-gallery-thumb a:hover{
	opacity: 0.5;
}

#top .avia-gallery .avia-gallery-caption{
	display: none;
}

#top div .avia-gallery .avia-gallery-big-no-crop-thumb{
	text-align: center;
}

#top div .avia-gallery .avia-gallery-big-no-crop-thumb img{
	clear: both;
	float: none;
	text-align: center;
}

.avia-gallery .big-prev-fake{
	display: none;
}

/*gallery animation*/
.avia_transform .avia-gallery-animate .avia-gallery-thumb img{
	opacity: 0.1;
	transform: scale(0.5);
}
.avia_transform .avia-gallery-animate .avia-gallery-thumb  img.avia_start_animation{
	animation: avia_appear 0.9s 1 cubic-bezier(0.175, 0.885, 0.320, 1.275); /* IE 10+ */
	opacity: 1;
	transform: scale(1);
}

.avia-gallery-animate .av-hover-grow{
	overflow: hidden;
}

.avia-gallery-animate .av-hover-grow img{
	transition: all 1.7s cubic-bezier(0.230, 1.000, 0.320, 1.000);
}
.avia-gallery-animate .av-hover-grow:hover img {
	transform: scale(1.1);
}

/*.av-hide-gallery-thumbs .avia-gallery-thumb{display:none;}   removed 4.8.4.1  */


#top #av-admin-preview .avia-gallery .avia-gallery-big-inner{
	height:auto;
}

/* Fix for Chrome https://kriesi.at/support/topic/gallery-thumbnail-layout-issue-on-chromium-based-browsers/  */
.avia-chrome .avia-gallery-thumb{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

/* @since 4.8.4.1 moved see https://kriesi.at/support/topic/gallery-light-box-not-working/#post-1312261 */
.av-hide-gallery-thumbs .avia-gallery-thumb{
	display: none;
}

/* @since 5.5 support for slideshow arrows  */
.avia-gallery.av-slideshow-ui .avia-slideshow-arrows{
	position: absolute;
	z-index: 310;			/*	above lightbox image overlay 300	*/
	width: 100%;
	margin: 0;
	top: 7px;
	left: 0;
}

#top .avia-gallery.av-slideshow-ui .avia-slideshow-arrows a{
	margin: 0;
}

.avia-gallery.av-slideshow-ui:not(.av-control-minimal) .avia-slideshow-arrows a{
	border-radius: 50%;
}

#top .avia-gallery.av-slideshow-ui .avia-slideshow-arrows .av-gallery-prev{
	margin-left: 7px;
}

#top .avia-gallery.av-slideshow-ui .avia-slideshow-arrows .av-gallery-next{
	margin-right: 7px;
}

#av-admin-preview .avia-gallery.av-slideshow-ui .avia-slideshow-arrows{
	top: 27px;
}

#av-admin-preview .avia-gallery.av-slideshow-ui .avia-slideshow-arrows .av-gallery-prev{
	margin-left: 27px;
}
#av-admin-preview .avia-gallery.av-slideshow-ui .avia-slideshow-arrows .av-gallery-next{
	margin-right: 27px;
}


@media only screen and (max-width: 767px)
{
	.responsive .avia-gallery-thumb img{
		padding: 3px;
	}
}


```

</details>


### heading.css
**Size:** 4.5 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/heading/heading.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css

/* ======================================================================================================================================================
HEADING
====================================================================================================================================================== */
.av-special-heading{
	width:100%;
	clear:both;
	display: block;
	margin-top:50px;
	position: relative;
}

.avia_mobile .av-special-heading{
	-webkit-perspective: 1000px;
	-webkit-backface-visibility: hidden;
}

.av-special-heading.avia-builder-el-no-sibling{
	margin-top:0px;
	margin-bottom:0px;
}

.flex_column + .av-special-heading{
	float:left;
}

body .av-special-heading .av-special-heading-tag{
	padding:0;
	margin:0;
	float:left;
}

.meta-heading .av-special-heading-tag{
	font-weight: normal;
}

.custom-color-heading .av-special-heading-tag {
	color: inherit;
}

.special-heading-border{
	position: relative;
	overflow: hidden;
}

.av-special-heading-h1 .special-heading-border{
	height: 3.4em;
}

.av-special-heading-h2 .special-heading-border{
	height: 2.6em;
}

.av-special-heading-h3 .special-heading-border{
	height: 1.9em;
}

.av-special-heading-h4 .special-heading-border{
	height: 1.6em;
}

.av-special-heading-h5 .special-heading-border{
	height: 1.5em;
}

.av-special-heading-h6 .special-heading-border{
	height: 1.4em;
}

.special-heading-inner-border{
	display: block;
	width:100%;
	margin-left:15px;
	border-top-style: solid;
	border-top-width:1px;
	position: relative;
	top:50%;
	opacity: 0.15;
}

.meta-heading .special-heading-inner-border{
	opacity: 0.2;
}

.custom-color-heading .special-heading-inner-border{
	opacity: 0.4;
}

#top #wrap_all .custom-color-heading .av-special-heading-tag,
#top .custom-color-heading a,
#top .custom-color-heading strong,
#top .custom-color-heading .special_amp{
	color: inherit;
}

#top .custom-color-heading a{
	text-decoration: underline;
}
#top .av-special-heading.av-icon.custom-color-heading a.av-heading-link{
	text-decoration: none;
}
#top .custom-color-heading a:hover{
	opacity:0.8;
	text-decoration: none;
}

#top #wrap_all .av-inherit-size .av-special-heading-tag{
	font-size: 1em;
}

.av-thin-font .av-special-heading-tag,
.modern-quote .av-special-heading-tag{
	font-weight: 300;
}

.av-thin-font strong,
.modern-quote strong{
	font-weight: 600;
}

body .av-special-heading.modern-centered{
	text-align: center;
}

body .av-special-heading.modern-right{
	text-align: right;
}

body .av-special-heading.elegant-centered{
	text-align: center;
}

body .av-special-heading.elegant-centered .av-special-heading-tag{
	position: relative;
	overflow: hidden;
}

body .av-special-heading.elegant-centered .av-special-heading-tag .heading-wrap:before,
body .av-special-heading.elegant-centered .av-special-heading-tag .heading-wrap:after {
	content: "";
	position: absolute;
	height: 1px;
	border-bottom-style: solid;
	border-bottom-width: 1px;
	border-color: inherit;
	top: 50%;
	transform: translateY(-50%);
	width: 1000px;
}

body .av-special-heading.elegant-centered .av-special-heading-tag .heading-wrap:before {
	right: 100%;
	margin-right: 1em;
}

body .av-special-heading.elegant-centered .av-special-heading-tag .heading-wrap:after {
	left: 100%;
	margin-left: 1em;
}

body .av-special-heading.elegant-centered .av-special-heading-tag .heading-wrap{
	display: inline-block;
	position: relative;
}

body .av-special-heading.elegant-centered .av-special-heading-tag .heading-char{
	display: block;
	font-size: 1em;
	line-height: 1;
}



/*quote style*/
body .av-special-heading.blockquote > *{
	white-space: normal;
	float: none;
}

.av-special-heading.classic-quote{
	text-align: center;
}

.av-special-heading.classic-quote.classic-quote-left{
	text-align: left;
}

.av-special-heading.classic-quote.classic-quote-right{
	text-align: right;
}



body .av-special-heading.classic-quote > *{
	display:block;
	font-family: "Droid Serif", Georgia, Times, serif;
	font-weight: normal;
	font-style: italic;
	float: none;
}

body .av-special-heading.blockquote .special-heading-border{
	display:none;
}

/*linked header*/
#top .av-special-heading.av-linked-heading a:hover{
	opacity: 0.5;
}



/*subheading*/

.av-subheading{
	font-size: 15px;
	line-height: 1.3em;
}

.av-subheading p:first-child{
	margin-top:0;
}

.av-subheading p:last-child{
	margin-bottom:0;
}

.av-subheading_below{
	margin-top:0.3em;
}

.av-subheading_above{
	margin-bottom:0.3em;
}

/*.av-subheading.av_custom_color{opacity: 0.8;}  removed 4.9.2.2  */


/* Accessibility rules */
#top.av-accessibility-aaa .av-subheading {
	line-height: 1.5em;
}

```

</details>


### hr.css
**Size:** 2.3 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/hr/hr.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
/* ======================================================================================================================================================
HR
====================================================================================================================================================== */

.hr{
	clear: both;
	display:block;
	width:100%;
	height:25px;
	line-height:25px;
	position: relative;
	margin:30px 0;
	float:left;
}

.hr-inner{
	width:100%;
	position: absolute;
	height:1px;
	left:0;
	top:50%;
	width:100%;
	margin-top:-1px;
	border-top-width:1px;
	border-top-style:solid;
}

#top .hr-invisible,
.hr-invisible .hr-inner{
	margin:0;
	border:none;
}

.hr-invisible {
	float:none;
}

.hr-full,
.hr-big{
	margin:70px 0;
}

.hr-full .hr-inner{
	width:300%;
	left:-100%;
}

.hr-full.hr-shadow .hr-inner{
	box-shadow:0 1px 2px 0px rgba(0, 0, 0, 0.1);
}

.sidebar_right .hr-full .hr-inner{
	left:auto;
	right:-50px;
}

.sidebar_left .hr-full .hr-inner{
	left:-50px;
}



.hr-short{
	height:20px;
	line-height:20px;
	margin:30px 0;
	float:none;
}

.hr-short .hr-inner{
	width:32%;
	left:50%;
	margin-left:-16%;
}

.hr-short.hr-left .hr-inner{
	left:0%;
	margin-left:0%;
}

.hr-short.hr-right .hr-inner{
	left:auto;
	right:0;
	margin-left:0%;
}

.hr-short .hr-inner-style{
	border-radius: 20px;
	height:9px;
	width:9px;
	border-width:2px;
	border-style:solid;
	display:block;
	position: absolute;
	left:50%;
	margin-left:-5px;
	margin-top:-5px;
}

.hr-short.hr-left .hr-inner-style{
	left:5px;
}

.hr-short.hr-right .hr-inner-style{
	left:auto;
	right:0;
}

body .container_wrap .hr.avia-builder-el-last,
body .container_wrap .hr.avia-builder-el-first {
	margin:30px 0;
}


/*custom*/
.hr-custom{
	margin:0;
	display: block;
	min-height:21px;
	height:auto;
	overflow: hidden;
	white-space: nowrap;
	width:100%;
	float: left;
}

.hr-custom .hr-inner{
	display: inline-block;
	position: relative;
	vertical-align: middle;
}

.hr-custom.hr-center{
	text-align: center;
}

.hr-custom.hr-right {
	text-align: right;
}

.hr-custom.hr-left  {
	text-align: left;
}

.hr-custom .hr-inner.inner-border-av-border-none{
	border:none;
}

.hr-custom .hr-inner.inner-border-av-border-fat{
	border-top-width:2px;
}

.av-seperator-icon {
	display: inline-block;
	vertical-align: middle;
	font-size: 15px;
}

.hr-custom.hr-icon-yes .hr-inner{
	margin-left:10px;
	margin-right:10px;
}

```

</details>


### icon.css
**Size:** 2.1 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/icon/icon.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
/* ======================================================================================================================================================
ICON
====================================================================================================================================================== */

/*right icons*/
#top .av_font_icon a{
	color: inherit;
	display: block;
}

.av_font_icon a:hover, .av_font_icon a:focus {
	text-decoration: none;
}

.av_font_icon {
	display:block;
	text-align: center;
}

.avia-icon-pos-left {
	float:left;
	margin-right: 0.5em;
}

.avia-icon-pos-right {
	float: right;
	margin-left: 0.5em;
}

/*tooltip*/

#top .avia-icon-tooltip{
	width:250px;
	font-size: 15px;
	line-height: 1.6em;
}


/*big icon with border*/
.av_font_icon.av-icon-style-border .av-icon-char{
-webkit-backface-visibility: hidden; /*fix bug in webkit where item shifts a few px on hover*/
}

.av_font_icon.av-icon-style-border .av-icon-char{
	box-sizing: content-box;
	border-radius: 1000px;
	border-width: 3px;
	border-style: solid;
	display: block;
	margin: 0 auto;
	padding:30px;
	color: inherit;
	border-color: inherit;
	position: relative;
	clear: both;
}

.av_icon_caption{
	font-size: 16px;
	text-transform: uppercase;
	line-height: 1.3em;
	display: block;
	text-align: center;
	margin-top:8px;
	font-weight: 400;
}

.av_font_icon.av-icon-style-border .av-icon-char:after {
	pointer-events: none;
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	content: '';
	box-sizing: content-box;
	top: 0;
	left: 0;
	padding: 0;
	z-index: -1;
	box-shadow: 0 0 0 2px rgba(255,255,255,0.1);
	opacity: 0;
	transform: scale(0.9);
	transform-style: preserve-3d;
}

/*	backwards comp. default behaviour prior 4.8.4 with white shadow only	*/
.av_font_icon.av-icon-style-border:not(.avia-sonar-shadow) a.av-icon-char:hover:after {
	animation: sonarEffect 1s ease-out ;
}

/*icon animation*/
.avia_transform .av_font_icon.avia-icon-animate{
	opacity: 0.1;
	transform:scale(0.5);
}

.avia_transform .avia_start_delayed_animation.av_font_icon.avia-icon-animate{
	animation: avia_appear 0.7s 1 cubic-bezier(0.175, 0.885, 0.320, 1.275);
	opacity: 1;
	transform:scale(1);
}

```

</details>


### iconbox.css
**Size:** 3.0 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/iconbox/iconbox.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
/* ======================================================================================================================================================
ICONBOX
====================================================================================================================================================== */
#top .iconbox{
	background: transparent;
}

.iconbox{
	margin-bottom:30px;
	position: relative;
	clear:both;
}

.iconbox_icon{
	float: left;
	margin: 2px 10px 0 0;
	height: 23px;
	width: 23px;
	font-size: 23px;
	line-height: 18px;
	transition: all 0.3s ease-in-out;
}

a.iconbox_icon:hover{
	text-decoration: none;
}

.iconbox_left .iconbox_icon{
	border-radius: 50px;
	text-align: center;
	position: relative;
	top: -7px;
	left: -5px;
	height: 30px;
	width: 30px;
	line-height: 30px;
	margin: 2px 0px 0 0;
}

.iconbox .iconbox_content .iconbox_content_title{
	border: medium none;
	padding: 2px 0 0 0;
	position: relative;
	margin:0 0 16px 0;
	clear:none;
	letter-spacing: 1px;
	text-transform: uppercase;
	font-size:1.25em;
}

#top .iconbox_top{
	margin-top:20px;
	text-align: center;
}

.iconbox_top .iconbox_content{
	padding:45px 20px 20px 20px;
	border-radius: 3px;
	box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.3);
}

.iconbox_top .iconbox_icon{
	float:none;
	position: absolute;
	left: 50%;
	top:-26px;
	margin:0 0 0 -26px;
	padding:15px;
	border-radius:100px;
	box-sizing: content-box;
	font-size: 20px;
	line-height: 24px;
}

.iconbox_left_content .iconbox_content,
.iconbox_right_content .iconbox_content{
	overflow: hidden;
}

.iconbox_left_content .iconbox_content .iconbox_content_title,
.iconbox_right_content .iconbox_content .iconbox_content_title{
	margin: 0 0 -3px 0;
}

#top .iconbox_left_content .iconbox_icon,
#top .iconbox_right_content .iconbox_icon{
	width: 74px;
	height: 74px;
	font-size: 27px;
	line-height: 72px;
	border-style: solid;
	border-width: 1px;
	border-radius: 500px;
	text-align: center;
	margin-right:22px;
}

#top .iconbox_right_content{
	text-align: right;
}

#top .iconbox_right_content .iconbox_icon{
	float: right;
	margin-right:0;
	margin-left:22px;
}

.iconbox .iconbox_content p:last-child{
	margin-bottom: 0;
}

#top .iconbox.av-no-box .iconbox_content{
	padding:0;
	border:none;
	box-shadow:none;
	background: transparent;
}

#top .iconbox.av-no-box .iconbox_icon{
	position: relative;
	top:0;
	margin:0 auto 20px auto;
	left:0;
	width:90px;
	height:90px;
	line-height:90px;
	border-style: solid;
	border-width: 1px;
	padding:0;
	font-size: 30px;
	display:block;
}

#top .iconbox_left_content.av-icon-style-no-border .iconbox_icon,
#top .iconbox_right_content.av-icon-style-no-border .iconbox_icon{
	border:none;
	height:50px;
	width:50px;
	line-height: 50px;
	margin-top: 0;
	font-size: 50px;
}

#top .iconbox_content_container{
	line-height: 1.65em;
	min-height: 5px;	/*  needed when empty content	*/
}

@media only screen and (min-width: 768px) and (max-width: 989px)
{
	#top .iconbox_left_content .iconbox_icon,
	#top .iconbox_right_content .iconbox_icon{
		margin-bottom: 15px;
		/*float: none;*/
		display: inline-block;
	}
}

```

</details>


### iconlist.css
**Size:** 3.8 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/iconlist/iconlist.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
/* ======================================================================================================================================================
ICONLIST
====================================================================================================================================================== */
.avia-icon-list-container{
	margin:30px 0;
	clear: both;
}

.avia-icon-list{
	margin:0;
	padding:0;
}

.avia-icon-list li{
	margin:0;
	padding:0 0 30px 0;
	list-style-type: none;
	list-style-position: outside;
	clear:both;
	position: relative;
	min-height:60px;
}

.avia-icon-list .iconlist_icon{
	height:64px;
	width:64px;
	line-height: 64px;
	font-size: 30px;
	text-align: center;
	border-radius: 500px;
	position: relative;
	float:left;
	margin-right:30px;
	margin-left:2px;
	z-index: 5;
	color:#fff;
}

.avia-icon-list a.iconlist_icon:hover{
	color:#fff;
	text-decoration: none;
}

.avia-icon-list .iconlist_title{
	text-transform: uppercase;
	top: 4px;
	margin-bottom:0;
	position: relative;
}

#top .avia-icon-list .iconlist_title a:hover{
	text-decoration: underline;
}

.avia-icon-list .iconlist_content_wrap{
	overflow: hidden;
	min-height: 1.5em;
	padding-bottom:4px;
}

.avia-icon-list article.article-icon-entry {
	min-height: 45px;
}

.avia-icon-list .av-iconlist-empty .iconlist_title{
	margin-top: 17px;
}

.avia-icon-list .iconlist-timeline{
	position: absolute;
	top: 1%;
	left: 32px;
	width: 1px;
	height: 99%;
	border-right-width: 1px;
	border-right-style: dashed;
}

.avia-icon-list .iconlist_content{
	line-height: 1.65em;
}

.avia-icon-list .iconlist_content li {
	min-height: 0;
	padding: 0;
	list-style: disc outside;
}

.avia-icon-list li:last-child .iconlist-timeline{
	display:none;
}

#top .av_iconlist_title a{
	text-decoration: none;
}

#top .av_iconlist_title a:hover{
	text-decoration: underline;
}

/*iconlist small*/
#top .av-iconlist-small li{
	padding:0px;
	min-height:0px;
}

#top .av-iconlist-small article.article-icon-entry{
	min-height:0px;
}

#top .av-iconlist-small .iconlist-timeline{
	display:none;
}

#top .av-iconlist-small .iconlist_icon{
	background: transparent;
	color: inherit;
	height: 1.45em;
	width: 1.45em;
	line-height: 1.45em;
	font-size: inherit;
	margin-right: 0.25em;
}

#top .av-iconlist-small.avia-icon-list-right .iconlist_icon {
    float: right;
    margin-left: 0.1em;
    margin-right: 2px;
}

#top .av-iconlist-small .iconlist_content_wrap{
	min-height: 0;
	padding: 0;
}

.av-iconlist-small .iconlist_title_small {
    line-height: 1.45em;
}

.av-iconlist-small .iconlist_content p:first-child{
	margin-top: 2px;
}


/*right icons*/
.avia-icon-list-right {
	text-align: right;
}

.avia-icon-list-right .iconlist_icon{
	float:right;
	margin-left:30px;
	margin-right:0;
	margin-right:2px;
}

.avia-icon-list-right .iconlist-timeline{
	left: auto;
	right: 32px;
}

/*iconlist animation*/
.avia_transform .avia-icon-list.av-iconlist-big.avia-iconlist-animate .iconlist_icon{
	opacity: 0.1;
	transform:scale(0.5);
}

.avia_transform .avia-iconlist-animate .iconlist-timeline{
	height: 0%;
}

.avia_transform .avia-icon-list.av-iconlist-big.avia-iconlist-animate .avia_start_animation .iconlist_icon{
	animation: avia_appear 1s 1 cubic-bezier(0.175, 0.885, 0.320, 1.275);
	opacity: 1;
	transform:scale(1);
}

.avia_transform .avia-icon-list.av-iconlist-big.avia-iconlist-animate .avia_start_animation .iconlist-timeline{
	animation: avia_slide_down 1s 1 cubic-bezier(0.175, 0.885, 0.320, 1.275);
	height: 100%;
}

/*	Sonar effect	*/
.avia-icon-list.avia-sonar-shadow .iconlist_icon:after{
	content: '';
	pointer-events: none;
	position: absolute;
	top: 0;
	left: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	z-index: -1;
	border-radius: 500px;
	box-sizing: content-box;
	box-shadow: 0 0 0 2px rgba(255,255,255,0.1);
	transform: scale(0.9);
	transform-style: preserve-3d;
}

```

</details>


### image.css
**Size:** 6.8 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/image/image.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
/* ======================================================================================================================================================
Image
====================================================================================================================================================== */
.avia-image-container{
	display: block;
	position: relative;
	max-width: 100%;
}

.avia-image-container-inner,
.avia_image,
.av-image-caption-overlay{
	border-radius: 3px;
	display: block;
	position: relative;
	max-width: 100%;
}

.avia-image-container.avia-align-center{
	display:block;
	margin: 0 auto 10px auto;
	text-align: center;
	clear: both;
}

.avia-image-container.avia-align-center .avia-image-container-inner{
	margin:0 auto;
	display:inline-block;
	vertical-align:bottom
}

.avia-image-container.avia-align-left{
	display:block;
	float:left;
	margin-right: 15px;
	margin-top: 5px;
}

.avia-image-container.avia-align-right{
	display:block;
	float:right;
	margin-left: 15px;
	margin-top: 5px;
}

.avia-image-container.avia-align-center.avia-builder-el-no-sibling{
	margin-bottom:0;
	margin-top:0;
}

.avia_image + br{
	display: none;
}

.avia-image-overlay-wrap a.avia_image{
	overflow: hidden;
}

.avia-image-overlay-wrap a.avia_image .image-overlay{
	/*transform: scale(1.5);			removed 5.6.10   https://kriesi.at/support/topic/attachment-source-for-av-tab-section-image/#post-1430008  */
}

.avia-image-container .avia_image,
.avia-image-container .avia-image-overlay-wrap{
    transition: all 0.7s;
}

/*	.avia-image-container.av-hover-grow img:hover,			removed 5.0 - doubles scale e.g. 300 -> 363 instead 330 */
.avia-image-container.av-hover-grow .avia-image-overlay-wrap:hover{
    transform: scale(1.1);
}

.avia-image-container.av-hover-grow,
.avia-image-container.av-hover-grow .avia-image-container-inner,
.avia-image-container.av-hover-grow .avia-image-overlay-wrap a.avia_image{
    overflow: visible;
}

/*	@since 5.0	*/
.avia-image-container.av-img-box-shadow .avia-image-overlay-wrap .avia_image,
.avia-image-container.av-img-box-shadow.av-styling-circle .avia-image-container-inner,
.avia-image-container.av-img-box-shadow.av-styling-circle .avia_image{
    overflow: revert;				/*  https://github.com/KriesiMedia/wp-themes/issues/4025  changed from visible -> revert   */
}

/*  https://github.com/KriesiMedia/wp-themes/issues/4025  changed from hidden -> revert
update: added "avia-image-container-inner" selector and changed back to hidden to fix Zoom issue  */
.avia-image-container.av-hover-grow.av-hide-overflow .avia-image-container-inner {
    overflow: hidden;
}

/*styling variations*/
.av-styling-circle .avia-image-container-inner,
.av-styling-circle .avia_image,
.av-styling-circle .av-image-caption-overlay,
.av-styling-circle div.av-caption-image-overlay-bg{
	overflow: hidden;
	border-radius: 10000px;
}

.avia-safari div.av-image-caption-overlay-center{
	-webkit-transform: translate3d(0,0,0); /*flicker fix for caption in safari*/
}

.av-styling-no-styling .avia-image-container-inner,
.av-styling-no-styling .avia_image,
.av-styling-no-styling .av-image-caption-overlay{
	border-radius: 0;
	border:none;
}

/*captions*/
.av-image-caption-overlay{
	position: absolute;
	height:100%;
	width:100%;
	z-index: 10;
	text-align: center;
	transition: all 0.3s ease-in-out;
}


.av-image-caption-overlay-position{
	display: table;
	width: 100%;
	height:100%;
	position: relative;
}

.av-image-caption-overlay-center{
	display:table-cell;
	vertical-align: middle;
	font-size: 1.3em;
	line-height: 1.5em;
	padding: 0px 1.5em;
}

.av-image-caption-overlay-center p:first-child{
	margin-top:0;
}

.av-image-caption-overlay-center p:last-child{
	margin-bottom:0;
}

.av-caption-image-overlay-bg{
	position: absolute;
	height:100%;
	width:100%;
	transition: all 0.3s ease-in-out;
}

.av-overlay-hover-deactivate .avia-image-overlay-wrap:hover .av-caption-image-overlay-bg{
	opacity: 0 !important;
}

.av-overlay-on-hover .av-image-caption-overlay{
	opacity: 0;
}
.av-overlay-on-hover .avia-image-container-inner:hover .av-image-caption-overlay{
	opacity: 1;
}

.avia_transform .avia_animated_image{
	opacity: 0;
}


/* image copyright */
.avia-image-container small.avia-copyright{
	font-size: 0.8em;
	text-align: left;
	line-height: 1.7em;
}
/* Simple */

.avia-image-container .avia-copyright{
	display: block;
}

.avia-image-container.av-has-copyright .avia-image-overlay-wrap{
	position: relative;
	overflow: hidden;
}

.av-styling-circle.avia-image-container.av-has-copyright .avia-image-container-inner{
	overflow: visible;
}

.avia-image-container.av-has-copyright.av-styling-circle .avia-copyright{
	text-align: center;
}

/* Icon Reveal on Hover */
.avia-image-container.av-has-copyright.av-copyright-icon-reveal .avia-copyright{
	position: absolute;
	background-color: rgba(0,0,0,0.1);
	text-align: right;
	color: #fff;
	padding: 0 2em 0 0;
	right: 0;
	bottom: 0;
	width: 2em;
	line-height: 2em;
	max-height: 2em;
	text-indent: -99999px;
	overflow: hidden;
	transition: all 0.3s ease-in;
	z-index: 308;
}

.avia-image-container.av-has-copyright.av-copyright-icon-reveal .avia-copyright:hover{
	width: 100%;
	padding: 0 3em 0 1em;
	text-indent: 0;
	max-height: 100%;
	background-color: rgba(0,0,0,0.4);
}

.avia-image-container.av-has-copyright.av-copyright-icon-reveal .avia-copyright:after{
	content: "\E81e";
	font-family: "entypo-fontello";
	display: block;
	position: absolute;
	right: 0;
	bottom: 0;
	text-indent: 0;
	font-size: 0.8em;
	width: 2.6em;
	height: 2.6em;
	line-height: 2.8em;
	text-align: center;
	color: rgba(255,255,255,0.7);
	border-radius: 3px;
	cursor: pointer;
}

.avia-image-container.av-has-copyright.av-copyright-icon-reveal .avia-copyright:hover:after{
	background-color: rgba(0,0,0,0.2);
	color: rgba(255,255,255,1);
}


.avia-image-container.av-styling-circle.av-has-copyright.av-copyright-icon-reveal .avia-copyright{
	border-radius: 20px;
	background-color: rgba(0,0,0,0.15);
	text-align: right;
}

.avia-image-container.av-styling-circle.av-has-copyright.av-copyright-icon-reveal .avia-copyright:after{
	border-radius: 100%;
}

.avia-image-container.av-styling-circle.av-has-copyright.av-copyright-icon-reveal .avia-copyright:hover{
	border-radius: 15px;
	background-color: rgba(0,0,0,0.5);
}

/*	fade image	*/
.av-hover-fade .avia_image.fade-basic{
	opacity: 1;
}

.av-hover-fade .avia_image.fade-overlay{
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
}

.av-hover-fade .avia-image-container-inner:hover .avia_image.fade-basic{
	animation: avia-fadeOut 0.7s 1 ease-in-out;
	opacity: 0;
}

.av-hover-fade .avia-image-container-inner:hover .avia_image.fade-overlay{
	animation: avia-fadein 0.7s 1 ease-in-out;
	opacity: 1;
}

.avia-image-container.av-hover-fade.av-img-linked:hover{
	cursor: pointer;
}

.avia-image-container.av-hover-fade.av-img-linked:hover a.noHover{
	z-index: 5;		/* @since 5.7   link is not working !!  */
}

```

</details>


### menu.css
**Size:** 9.2 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/menu/menu.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
/* ======================================================================================================================================================
SUBMENU
====================================================================================================================================================== */

#top .sticky_placeholder{
	height:51px;
	position: relative;
	clear:both;
}

#top .av-submenu-container	{
	min-height:52px;
	position: relative;
	width:100%;
	border-bottom-style: solid;
	border-bottom-width: 1px;
	-webkit-perspective: 1000px;
	-webkit-backface-visibility: hidden;
	font-size: 13px;
	line-height: 1.65em;
}

#top .av-submenu-container.av-sticky-submenu{
	position: absolute;
}

#top .av-submenu-container .container{
	padding:0 !important;
}

#top .av-subnav-menu{
	margin:0;
}

#top .av-subnav-menu li {
	position: relative;
	display: block;
	margin:0;
}

#top .av-subnav-menu > li {
	padding:15px 0;
	display: inline-block;
}

#top .av-subnav-menu > li > a{
	padding:0px 10px 0px 12px;
	display: block;
	border-left-style:solid;
	border-left-width:1px;
}

#top .av-subnav-menu > li:first-child a{
	border-left:none;
}

#top .av-subnav-menu > li ul{
	visibility:hidden;
	position: absolute;
	width:200px;
	top:50px;
	left: 0;
	text-align: left;
	border-style: solid;
	border-width:1px;
	margin:0;
	opacity: 0;
	transition:all 0.3s ease-in-out;
}

#top .av-subnav-menu > li ul a{
	line-height: 23px;
	padding: 8px 15px;
	width:100%;
	display: block;
}

#top .av-subnav-menu > li ul ul{
	left:198px;
	top:-1px;
}

#top .av-subnav-menu li a{
	text-decoration: none;
}

#top .av-subnav-menu li:hover > ul{
	visibility:visible;
	opacity: 1;
}

#top .av-subnav-menu li > ul.av-visible-mobile-sublist{
	visibility:visible;
	opacity: 1;
}

#top .av-subnav-menu .avia-bullet{
	display:none;
}

#top .av-subnav-menu .av-menu-button > a{
	padding: 0;
	border:none;
}

#top .av-submenu-pos-left{
	text-align: left;
}

#top .av-submenu-pos-center{
	text-align: center;
}

#top .av-submenu-pos-right{
	text-align: right;
}

#top .av-submenu-pos-right > .av-subnav-menu > li ul ul{
	left:-200px;
}

#top .av-submenu-container .avia-menu-fx{
	display:none;
}

#top .mobile_menu_toggle{
	display: none;
	height: 46px;
	min-width: 46px;
	line-height: 46px;
	padding:0px 20px;
	text-decoration: none;
	text-align: center;
	margin:0 3px;
	z-index: 10000;
	border-style:solid;
	border-width: 1px;
	border-top:none;
	border-bottom:none;
	font-size: 30px;
	position: relative;
}

#top .mobile_menu_toggle .av-current-placeholder{
	font-size: 14px;
	vertical-align: bottom;
	display: inline-block;
	margin-left:20px;
}

#top .av-subnav-menu li:hover > ul {
	z-index: 10;
}

#top .av-submenu-container:hover {
    z-index: 400 !important;
}


@media only screen and (max-width: 989px)
{
	.responsive #top .av-switch-990 .sticky_placeholder{
		max-height:0px;
	}

	.responsive #top .av-switch-990.av-submenu-container{
		top: auto !important;
		position: relative !important;
		height:auto;
		min-height:0;
		margin-bottom: -1px;
	}

	/*.responsive #top .av-switch-990 .av-menu-mobile-active {text-align: center; }*/
	.responsive #top .av-switch-990 .av-menu-mobile-active .mobile_menu_toggle{
		display: inline-block;
	}

	.responsive #top .av-switch-990 .av-menu-mobile-active .av-subnav-menu{
		display:none;
	}

	.responsive #top #wrap_all .av-switch-990 .av-menu-mobile-active.container {
		width:100%;
		max-width: 100%;
	}

	.responsive #top .av-switch-990 .av-menu-mobile-active .av-open-submenu.av-subnav-menu{
		display:block;
	}

	.responsive #top .av-switch-990 .av-menu-mobile-active .av-subnav-menu > li:first-child{
		margin-top:-1px;
	}

	.responsive #top .av-switch-990 .av-menu-mobile-active .av-subnav-menu  li{
		display:block;
		border-top-style: solid;
		border-top-width: 1px;
		padding:0;
	}

	.responsive #top .av-switch-990 .av-menu-mobile-active .av-subnav-menu > li > a{
		border-left:none;
		padding:15px 15%;
		text-align: left;
	}

	.responsive #top .av-switch-990 .av-menu-mobile-active .av-subnav-menu > li a:before{
		content: "\25BA";
		position: absolute;
		top: 15px;
		margin-left: -10px;
		font-family: 'entypo-fontello';
		font-size: 7px;
	}

	.responsive #top .av-switch-990 .av-menu-mobile-active .av-subnav-menu li > ul{
		visibility:visible;
		opacity: 1;
		top:0;
		left:0;
		position: relative;
		width:100%;
		border:none;
	}

	.responsive #top .av-switch-990 .av-menu-mobile-active.av-submenu-hidden .av-subnav-menu li > ul{
		display: none;
	}

	.responsive #top .av-switch-990 .av-menu-mobile-active.av-submenu-hidden .av-subnav-menu li > ul.av-visible-sublist{
		display: block;
	}

	.responsive #top .av-switch-990 .av-menu-mobile-active .av-subnav-menu li > ul a{
		padding:15px 19%;
	}

	.responsive #top .av-switch-990 .av-menu-mobile-active .av-subnav-menu li li > ul a{
		padding:15px 24%;
	}

	.responsive #top .av-switch-990 .av-menu-mobile-active .av-subnav-menu li li li > ul a{
		padding:15px 29%;
	}
}

@media only screen and (max-width: 767px)
{
	.responsive #top .av-switch-768 .sticky_placeholder{
		max-height:0px;
	}

	.responsive #top .av-switch-768.av-submenu-container{
		top: auto !important;
		position: relative !important;
		height:auto;
		min-height:0;
		margin-bottom: -1px;
	}

	/*.responsive #top .av-switch-768 .av-menu-mobile-active {text-align: center; }*/
	.responsive #top .av-switch-768 .av-menu-mobile-active .mobile_menu_toggle{
		display: inline-block;
	}

	.responsive #top .av-switch-768 .av-menu-mobile-active .av-subnav-menu{
		display:none;
	}

	.responsive #top #wrap_all .av-switch-768 .av-menu-mobile-active.container {
		width:100%;
		max-width: 100%;
	}

	.responsive #top .av-switch-768 .av-menu-mobile-active .av-open-submenu.av-subnav-menu{
		display:block;
	}

	.responsive #top .av-switch-768 .av-menu-mobile-active .av-subnav-menu > li:first-child{
		margin-top:-1px;
	}

	.responsive #top .av-switch-768 .av-menu-mobile-active .av-subnav-menu  li{
		display:block;
		border-top-style: solid;
		border-top-width: 1px;
		padding:0;
	}

	.responsive #top .av-switch-768 .av-menu-mobile-active .av-subnav-menu > li > a{
		border-left:none;
		padding:15px 15%;
		text-align: left;
	}

	.responsive #top .av-switch-768 .av-menu-mobile-active .av-subnav-menu > li a:before{
		content: "\25BA";
		position: absolute;
		top: 15px;
		margin-left: -10px;
		font-family: 'entypo-fontello';
		font-size: 7px;
	}

	.responsive #top .av-switch-768 .av-menu-mobile-active .av-subnav-menu li > ul{
		visibility:visible;
		opacity: 1;
		top:0;
		left:0;
		position: relative;
		width:100%;
		border:none;
	}

	.responsive #top .av-switch-768 .av-menu-mobile-active.av-submenu-hidden .av-subnav-menu li > ul{
		display: none;
	}

	.responsive #top .av-switch-768 .av-menu-mobile-active.av-submenu-hidden .av-subnav-menu li > ul.av-visible-sublist{
		display: block;
	}

	.responsive #top .av-switch-768 .av-menu-mobile-active .av-subnav-menu li > ul a{
		padding:15px 19%;
	}

	.responsive #top .av-switch-768 .av-menu-mobile-active .av-subnav-menu li li > ul a{
		padding:15px 24%;
	}

	.responsive #top .av-switch-768 .av-menu-mobile-active .av-subnav-menu li li li > ul a{
		padding:15px 29%;
	}
}

@media only screen and (max-width: 479px)
{
	.responsive #top .av-switch-480 .sticky_placeholder{
		max-height:0px;
	}

	.responsive #top .av-switch-480.av-submenu-container{
		top: auto !important;
		position: relative !important;
		height:auto;
		min-height:0;
		margin-bottom: -1px;
	}

	/*.responsive #top .av-switch-480 .av-menu-mobile-active {text-align: center; }*/
	.responsive #top .av-switch-480 .av-menu-mobile-active .mobile_menu_toggle{
		display: inline-block;
	}

	.responsive #top .av-switch-480 .av-menu-mobile-active .av-subnav-menu{
		display:none;
	}

	.responsive #top #wrap_all .av-switch-480 .av-menu-mobile-active.container {
		width:100%;
		max-width: 100%;
	}

	.responsive #top .av-switch-480 .av-menu-mobile-active .av-open-submenu.av-subnav-menu{
		display:block;
	}

	.responsive #top .av-switch-480 .av-menu-mobile-active .av-subnav-menu > li:first-child{
		margin-top:-1px;
	}

	.responsive #top .av-switch-480 .av-menu-mobile-active .av-subnav-menu  li{
		display:block;
		border-top-style: solid;
		border-top-width: 1px;
		padding:0;
	}

	.responsive #top .av-switch-480 .av-menu-mobile-active .av-subnav-menu > li > a{
		border-left:none;
		padding:15px 15%;
		text-align: left;
	}

	.responsive #top .av-switch-480 .av-menu-mobile-active .av-subnav-menu > li a:before{
		content: "\25BA";
		position: absolute;
		top: 15px;
		margin-left: -10px;
		font-family: 'entypo-fontello';
		font-size: 7px;
	}

	.responsive #top .av-switch-480 .av-menu-mobile-active .av-subnav-menu li > ul{
		visibility:visible;
		opacity: 1;
		top:0;
		left:0;
		position: relative;
		width:100%;
		border:none;
	}

	.responsive #top .av-switch-480 .av-menu-mobile-active.av-submenu-hidden .av-subnav-menu li > ul{
		display: none;
	}

	.responsive #top .av-switch-480 .av-menu-mobile-active.av-submenu-hidden .av-subnav-menu li > ul.av-visible-sublist{
		display: block;
	}

	.responsive #top .av-switch-480 .av-menu-mobile-active .av-subnav-menu li > ul a{
		padding:15px 19%;
	}

	.responsive #top .av-switch-480 .av-menu-mobile-active .av-subnav-menu li li > ul a{
		padding:15px 24%;
	}

	.responsive #top .av-switch-480 .av-menu-mobile-active .av-subnav-menu li li li > ul a{
		padding:15px 29%;
	}
}

```

</details>


### slideshow_feature_image.css
**Size:** 2.2 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/slideshow_feature_image/slideshow_feature_image.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
/* ======================================================================================================================================================
Slideshow Feature Image Slider
====================================================================================================================================================== */
#top .avia-featureimage-slideshow{
	margin: 0;
}

#top .avia-slideshow-fixed-height > li{
	position: absolute;
	width:100%;
	height:100%;
	background-size: cover;
	background-position: center center;
}

.avia-featureimage-slideshow .caption_container{
	height: 100%;
}

.html_boxed .avia-featureimage-slideshow .caption_container,
.html_av-framed-box .avia-featureimage-slideshow .caption_container{
	max-width: 100%;
}

.avia-featureimage-slideshow .slideshow_caption h2{
	margin: 0;
	text-shadow: 0px 0px 7px rgba(0,0,0,0.7);
}

.avia-featureimage-slideshow h2.avia-caption-title:after{
    display: block;
    content: "";
    width: 40px;
    border-top: 3px solid #fff;
    margin: 11px auto;
    position: relative;
    top: 7px;
}

.main_color .av-no-image-slider h2 a{
	text-shadow: none;
}

#top .avia-featureimage-slideshow .avia-caption-content{
	margin: 0 auto;
	max-width: 600px;
	padding-top: 4px;
}

.avia-featureimage-slideshow .av-image-copyright{
	line-height: 1.2em;
}


@media only screen and (max-width: 767px){

	#top .avia-featureimage-slideshow .avia-caption-content{
		display: none;
	}
}

/* Tablet Portrait size to standard 960 (devices and browsers) */
@media only screen and (min-width: 768px) and (max-width: 989px){

	.responsive.av-no-preview #top .avia-featureimage-slideshow.av-medium-font-size-overwrite-css .avia-caption-content{
		display: block;
	}
}

/* Mobile Landscape Size to Tablet Portrait (devices and browsers) */
@media only screen and (min-width: 480px) and (max-width: 767px){

	.responsive.av-no-preview #top .avia-featureimage-slideshow.av-small-font-size-overwrite-css .avia-caption-content{
		display: block;
	}
}

/* Mobile Portrait Size to Mobile Landscape Size (devices and browsers) */
@media only screen and (max-width: 479px){

	.responsive.av-no-preview #top .avia-featureimage-slideshow.av-mini-font-size-overwrite-css .avia-caption-content{
		display: block;
	}
}

```

</details>


### table.css
**Size:** 6.8 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/table/table.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
/* ======================================================================================================================================================
Table
====================================================================================================================================================== */

/*data table*/

div .avia-table {
	background: transparent;
	width:100%;
	clear:both;
	margin:30px 0;
	table-layout: fixed;
}

.avia-data-table .avia-heading-row .avia-desc-col{
	border-top:none;
	border-left:none;
}

.avia-data-table .avia-button-row td{
	text-align: center;
}

.avia-data-table .avia-center-col{
	text-align: center;
}

.avia-data-table td:before{
	display:none;
}

.avia-data-table .avia-pricing-row td,
.avia-data-table .avia-pricing-row th{
	text-align: center;
	font-size: 40px;
	line-height: 1.3em
}

.avia-data-table .avia-desc-col{
	text-align: right;
}

.avia-data-table .avia-pricing-row small{
	display: block;
	font-size: 11px;
	font-style: italic;
	line-height: 1.7em;
}

.avia-data-table .avia-pricing-row .avia-desc-col{
	font-size: 14px;
	text-align: right;
}

/*minimal data table*/
.avia-data-table.avia_pricing_minimal th,
.avia-data-table.avia_pricing_minimal td{
	text-align: center;
	padding:12px;
	color: inherit;
}

#top .avia-data-table.avia_pricing_minimal tr{
	background: transparent;
}


@media only screen and (max-width: 767px)
{
	.responsive div .avia_responsive_table .avia-data-table table,
    .responsive div .avia_responsive_table .avia-data-table tbody,
    .responsive div .avia_responsive_table .avia-data-table tr,
    .responsive div .avia_responsive_table .avia-data-table td,
    .responsive div .avia_responsive_table .avia-data-table th{
		display:block;
		border-top:none;
		border-right:none;
		border-left:none;
		text-align: center;
	}

    .responsive .avia_responsive_table .avia-data-table{
		border-style:solid;
		border-width: 1px;
	}

    .responsive .avia_responsive_table .avia-data-table .avia-pricing-row .avia-desc-col{
		text-align: center;
	}

    .responsive .avia_responsive_table .avia-data-table .avia-button-row,
	.responsive .avia_responsive_table .avia-data-table tr:first-child th{
		display:none;
	}

	.responsive .avia_responsive_table .avia-data-table td:before{
		display:block;
		font-style: italic;
		font-size: 11px;
	}

	.responsive .avia_responsive_table .avia-data-table td{
		position: relative;
	}

    .responsive .avia_scrollable_table{
		width: 100%;
		overflow-x: scroll;
		overflow-y: hidden;
		-webkit-overflow-scrolling: touch;					/*	non standard	*/
    }

    .avia_scrollable_table .avia-table {
    	width: auto;
    }

    .responsive .avia_scrollable_table .avia-data-table > thead > tr > th,
    .responsive .avia_scrollable_table .avia-data-table > tbody > tr > th,
    .responsive .avia_scrollable_table .avia-data-table > tfoot > tr > th,
    .responsive .avia_scrollable_table .avia-data-table > thead > tr > td,
    .responsive .avia_scrollable_table .avia-data-table > tbody > tr > td,
    .responsive .avia_scrollable_table .avia-data-table > tfoot > tr > td {
        white-space: nowrap;
    }
}

/*pricing table*/

.avia-pricing-table-container {
	position: relative;
	clear: both;
	width:100%;
	display:table;
	table-layout: fixed;
}

.pricing-table-wrap {
	display:table-cell;
}

.pricing-table {
	margin:10px;
}

.pricing-table>li{
	list-style-type: none;
	list-style-position: outside;
	padding:9px 12px;
	border-top-style:solid;
	border-top-width:1px;
	border-left-style:solid;
	border-left-width:1px;
	border-right-style:solid;
	border-right-width:1px;
	margin:0;
	text-align: center;
	position: relative;
}

.avia-pricing-table-container .pricing-table>li:last-child{
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
	border-bottom-style:solid;
	border-bottom-width:1px;
	display: block;
}


.pricing-table > li:first-child,
.pricing-extra{
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
	border-top-style:solid;
	border-top-width:1px;
	border-left-style:solid;
	border-left-width:1px;
	border-right-style:solid;
	border-right-width:1px;
}

.pricing-extra{
	display:none;
}

.avia-desc-col.pricing-table li{
	border-style:dashed;
	border-left:none;
	border-right:none;
	text-align: right;
}

#top .avia-desc-col.pricing-table .avia-button-row{
	border:none;
}

#top .avia-button-row .avia-button-wrap{
	margin:10px 0;
}

.avia-center-col.pricing-table{
	text-align: center;
}

.pricing-table li.avia-pricing-row {
	text-align: center;
	font-size: 60px;
	line-height: 1em;
	padding:25px 12px;
/*	text-shadow: 0 2px 0 #C9C9C9, 0 3px 0 #BBB, 0 3px 0 #B9B9B9, 0 1px 0 #AAA, 0 1px 1px rgba(0, 0, 0, .1), 0 0 3px rgba(0, 0, 0, .1), 0 4px 10px rgba(0, 0, 0, .2); */
	font-weight:600;
}

.pricing-table li.avia-pricing-row small{
	display: block;
	font-size: 16px;
	font-style: italic;
	line-height: 1.4em;
	font-weight: normal;
	letter-spacing: 1px;
	text-shadow:none;
}

.pricing-table.avia-highlight-col .pricing-extra{
	display:block;
	position: absolute;
	top:-20px;
	height:25px;
	left:-1px;
	right:-1px;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
}

.avia-pricing-table-container .pricing-table li.empty-table-cell{
	display: none;
}

.avia-pricing-table-container.avia_show_empty_cells .pricing-table li.empty-table-cell,
.avia-pricing-table-container .pricing-table.avia-desc-col li.empty-table-cell{
	display: block;
}

.fallback-table-val{
	visibility: hidden;
}

.pricing-table.avia-highlight-col{
	box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.1);
	margin:4px;
}

.pricing-table.avia-highlight-col>li:last-child {
	padding-bottom:25px;
}

.pricing-table.avia-highlight-col .first-table-item{
	position: relative;
	top: -9px;
	z-index: 10;
}

.pricing-table li.avia-pricing-row .currency-symbol{
	font-size:0.5em;
	position: relative;
	top:-0.6em;
	line-height: 1em;
	text-shadow:none;
	font-weight:normal;
}

.avia_pricing_default .pricing-table li.avia-pricing-row small,
.avia_pricing_default .pricing-table li.avia-pricing-row .currency-symbol{
	opacity: 0.4;
	color:#fff;
	text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
}

/*style variation*/
.avia_show_empty_cells .pricing-table .empty-table-cell{
	display:block;
}

.avia_pricing_minimal .pricing-table{
	box-shadow: 0 0 1px 0px rgba(0, 0, 0, 0.1);
}

#top .avia_pricing_minimal .pricing-table>li{
	border:none;
}

.avia_pricing_minimal .pricing-table > li:first-child,
#top .avia_pricing_minimal .pricing-extra,
.avia_pricing_minimal .pricing-table>li:last-child{
	border-radius: 0;
	border: none;
}

.avia_pricing_minimal .pricing-table.avia-highlight-col .pricing-extra{
	left:0;
	right:0;
}

.avia_pricing_minimal .pricing-table li.avia-pricing-row{
	font-weight:300;
}

@media only screen and (max-width: 767px)
{
	.responsive .avia-pricing-table-container,
	.responsive .pricing-table-wrap{
		display:block;
	}

	.responsive .pricing-table{
		display:block;
		margin-bottom:40px;
	}

	.responsive .pricing-table.avia-desc-col{
		display:none;
	}
}

```

</details>


### tabs.css
**Size:** 3.8 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/tabs/tabs.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
/* ======================================================================================================================================================
Tabs
====================================================================================================================================================== */
#top .tabcontainer{
	background: transparent;
}

.tabcontainer{
	margin: 30px 0;
	position: relative;
	width:100%;
	clear: both;
	overflow: hidden;
	background: transparent;
}

.tab_titles{
	position: relative;
	width:100%;
	clear: both;
	float:left;
	z-index: 5;
}

.widget .tabcontainer{
	margin-top:0px;
}


.js_active .tab_content{
	visibility: hidden;
	clear: both;
	padding: 10px 19px;
	overflow:auto;
	position: absolute;
	top:0;
	z-index: 0;
	left:120%;
	width:100%;
}

.js_active .tab{
	cursor:pointer;
	margin:0 -1px 0 0;
	display: block;
	float: left;
	z-index: 2;
	position: relative;
	padding:12px 16px;
	top:1px;
	font-size: 0.8em;
	-webkit-touch-callout: none;			/*	non standard	*/
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	border-style: solid;
	border-width:1px;
}

.js_active .top_tab .tab{
	border-bottom: none;
	padding:12px 16px 14px 16px;
}

.js_active .active_tab{
	z-index: 4;
	position: relative;
	font-weight: bold;
}

.js_active .tab_titles .tab:first-child{
	border-top-left-radius:  2px;
}

.js_active .tab_titles .tab:last-child{
	border-top-right-radius: 2px;
}

.js_active .active_tab_content{
	display: block;
	visibility: visible;
	z-index: 3;
	position: relative;
	overflow:auto;
	border-style: solid;
	border-width:1px;
	border-radius: 2px;
	left:0;
	width:auto;
}

.tabcontainer .tab_icon{
	margin-right: 7px;
	font-size: 1em;
}

.tab_inner_content{
	margin: 11px 0;
	left:-200%;
	position: relative;
}

.active_tab_content .tab_inner_content{
	left:0;
	position: relative;
}

/*sidebar tabs*/
.sidebar_tab .tab_titles{
	width:30%;
	min-width:170px;
	max-width:250px;
	float:left;
	display: block;
}

.sidebar_tab_right .tab_titles{
	float:right;
}

.sidebar_tab .tab_titles .tab{
	width:100%;
	margin:0 0 -1px 0;
	top:0;
}

.sidebar_tab .tab_content{
	overflow: hidden;
	clear:none;
	left: -1px;
}

.sidebar_tab_right .tab_content{
	left: 1px;
}

.js_active .sidebar_tab .tab_titles .tab:last-child{
	border-top-right-radius: 0;
	border-bottom-left-radius: 2px;
}

.sidebar_tab_left .active_tab.tab{
	width:100.5%;
	border-right:none;
}

.sidebar_tab_right .active_tab.tab{
	width:100.5%;
	border-left:none;
	left:-1px;
}

/*noborder sidebar tabs*/
.noborder_tabs.sidebar_tab_left .tab_content, .noborder_tabs.sidebar_tab_right .tab_content{
	border:none;
	box-shadow: -8px 0px 20px -10px rgba(0, 0, 0, 0.2);
	left:0;
	padding:0px 0 0 30px;
}

.noborder_tabs.sidebar_tab_right .tab_content{
	box-shadow: 8px 0px 20px -10px rgba(0, 0, 0, 0.2);
	padding:0px 30px 0 0;
}

.noborder_tabs.sidebar_tab_left .tab{
	border-left:none;
}

.noborder_tabs.sidebar_tab_right .tab{
	border-right:none;
}

.noborder_tabs .tab:first-child{
	border-top:none;
}
.noborder_tabs .tab:last-child{
	border-bottom:none;
}

.tabcontainer .tab.fullsize-tab{
	display:none;
}

@media only screen and (max-width: 767px)  {
	.responsive .tabcontainer{
		border-width: 1px;
		border-style: solid;
		border-top:none;
		overflow: hidden;
	}

	.responsive .tabcontainer .tab_titles{
		display:none;
	}

	.responsive .tabcontainer .tab_content,
	.responsive .tabcontainer .tab{
		width:100%;
		max-width:100%;
		border-left:none;
		border-right:0;
		left:0;
		top:0;
		min-height: 0!important;
	}

	.responsive .tabcontainer .tab_content{
		border-bottom:none;
		padding:15px 30px;
		clear: both;
	}

	.responsive .tabcontainer .tab.fullsize-tab{
		display:block;
		margin-bottom:-1px;
	}

	.responsive .top_tab .tab.fullsize-tab{
		margin-bottom:0px;
	}
}

```

</details>


### toggles.css
**Size:** 5.4 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/config-templatebuilder/avia-shortcodes/toggles/toggles.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
/* ======================================================================================================================================================
Accordion/Toggle
====================================================================================================================================================== */


/*toggle*/
.js_active .toggle_wrap,
.avia-admin-preview-container .toggle_wrap{
	visibility: hidden;
	position: absolute;
	z-index: 0;
	width: 100%;
	left: 120%;
}

.active_tc.toggle_wrap{
	position: static;
	visibility: visible;
	left: 0;
	width: auto;
	z-index: 1;
	display: none;
}

.js_active .toggler,
.avia-admin-preview-container .toggler{
	cursor: pointer;
	display: block;
	margin:0;
	padding: 9px 3px 9px 35px;
	position: relative;
	top: 1px;
	border-style:solid;
	border-width:1px;
	line-height: 1.65em;
	-webkit-touch-callout: none;			/*	non standard	*/
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.js_active .toggler.av-title-below.activeTitle,
.avia-admin-preview-container .toggler.av-title-below.activeTitle{
	top: unset;
	bottom: 1px;
}

.togglecontainer{
	margin:30px 0;
	position: relative;
	clear: both;
	display: flex;
	flex-direction: column;
}

.togglecontainer .taglist{
	display: flex;
	flex-wrap: wrap;
}

.togglecontainer .single_toggle:first-child .toggler,
.togglecontainer .taglist + .single_toggle .toggler{
	border-top-left-radius:  2px;
	border-top-right-radius: 2px;
}

.togglecontainer > div:last-of-type .toggler{
	border-bottom-left-radius:  2px;
	border-bottom-right-radius: 2px;
}

.togglecontainer > p.activeTitle{
	border-radius: 0;
}

.toggle_content{
	padding: 12px 30px 11px 30px;
	margin: 0 0 5px 0;
	border-style:solid;
	border-width:1px;
	border-top:none;
	border-bottom-left-radius: 2px;
	border-bottom-right-radius: 2px;
	overflow: hidden;
}

.av-title-below > .toggle_content{
	padding: 11px 30px 12px 30px;
	margin: 5px 0 0 0;
	border-top: 1px;
	border-bottom: none;
}

.toggle_icon{
	position: absolute;
	width: 15px;
	height: 15px;
	border-style: solid;
	border-width: 1px;
	top: 50%;
	left: 10px;
	margin-top: -8px;
}

.toggle_icon .vert_icon{
	border-left-style:solid;
	border-left-width:3px;
	position: absolute;
	left:5px;
	top:1px;
	height:11px;
}

.toggle_icon .hor_icon{
	border-top-style:solid;
	border-top-width:3px;
	position: absolute;
	top:5px;
	left:1px;
	width:11px;
}

.activeTitle .toggle_icon .vert_icon{
	border:none;
}


.hasCurrentStyle .toggle_icon,
.hasCurrentStyle .toggle_icon > span{
    border-color: inherit !important;
}

/* removed, otherwise opening animation does not work
.active_tc.toggle_wrap{
display:block;
}
*/
#top .av_toggle_section .av-inherit-border-color *{
	border-color: inherit;
}

#top .av_toggle_section .av-inherit-font-color *{
	color: inherit;
}

.toggler .toggle_icon,
.toggler:hover .toggle_icon *{
	transition: all 0.4s ease-in-out;
}

/*sorting*/
.taglist {
	margin-bottom:5px;
}

.taglist .tag-tab:last-child .tag-seperator{
	display: none;
}

.taglist .tag-seperator{
	padding: 0px 4px;
}

.single_toggle{
	width:100%;
	/* @since 5.6.7 - fixes chrome bug https://kriesi.at/support/topic/bug-in-chrome-for-accordion-toggles/  */
	/* float:left; */
	display: block;
	margin: 0 0 -2px 0;
	padding-bottom: 1px;
	overflow: hidden;
	position: relative;
}

/*minimal toggle*/
.av-minimal-toggle.togglecontainer .single_toggle .toggler{
	border-radius:0;
	border-left:none;
	border-right:none;
	border-top:none;
	font-size: 1.1em;
}

.av-minimal-toggle .toggle_content{
	border-radius:0;
	border:none;
	padding:12px 35px 11px 35px;
}

.av-minimal-toggle .single_toggle{
	margin: 0 0 7px 0;
	padding-bottom: 0px;
}

.av-minimal-toggle .toggle_icon {
	margin-top: -7px;
	border: none;
}

.av-minimal-toggle .toggler:hover {
	opacity: 0.8;
}

.av-minimal-toggle .activeTitle.toggler:hover {
	opacity: 1;
}


/* elegant toggle */
.av-elegant-toggle.togglecontainer .single_toggle:first-child .toggler,
.av-elegant-toggle.togglecontainer .taglist + .single_toggle .toggler{
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.av-elegant-toggle.togglecontainer .av_toggle_section:first-of-type .toggler{
    border-top-width: 1px;
    border-top-style: solid;
}

.js_active .av-elegant-toggle .toggler,
.avia-admin-preview-container .av-elegant-toggle .toggler{
    padding: 35px 55px 30px 35px;
    font-size: 17px;
    top: 0;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
}

.av-elegant-toggle .toggle_icon{
    width: 32px;
    height: 32px;
    border-radius: 40px;
    left: auto;
    right: 20px;
    margin-top: -16px;
    border-width: 2px;
    opacity: 0.4;
    /*transition: all 0.2s ease-in;   removed 4.8.6.1 - replaced for all icons*/
}

.av-elegant-toggle .activeTitle .toggle_icon,
.av-elegant-toggle .single_toggle:hover .toggle_icon {
    opacity: 1;
}

.av-elegant-toggle .toggle_icon .hor_icon,
.av-elegant-toggle .toggle_icon .vert_icon{
    border-width: 2px;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}

.av-elegant-toggle .toggle_content{
    margin-bottom: 0;
    font-size: 15px;
    line-height: 1.4;
    padding: 20px 35px 30px 35px;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-width: 1px;
    border-radius: 0;
}

.av-elegant-toggle .single_toggle{
    border-width: 0;
    margin: 0;
    padding: 0;
    float: none;
}

```

</details>


### cookie-law-info-table.css
**Size:** 6.0 KB | **Source:** `https://wexoe.se/wp-content/plugins/cookie-law-info/legacy/public/css/cookie-law-info-table.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
/**
 Responsive table courtesy of Mark Wiltshire: mark@bamboorocketapps.com (thanks!)

 For more styles try: http://icant.co.uk/csstablegallery/
 ----
 Generic styles:
 Here you could e.g. customise width of column 1 and 2,
 or add a generic roll-over effect on table rows
*/
.cookielawinfo-column-1 {width: 25%;}
.cookielawinfo-column-2 {width: 10%;}
.cookielawinfo-column-3 {width: 15%;}
.cookielawinfo-column-4 {width: 50%;}

/** Simple style */
.cookielawinfo-simple thead {width: 100%;}
.cookielawinfo-simple td {padding: 5px 5px 5px 0;vertical-align: top;}
.cookielawinfo-simple thead th {padding-right: 10px;text-align: left;}

/** Modern style */
.cookielawinfo-modern {border: 1px solid #e3e3e3;background-color: #f2f2f2;width: 100%;border-radius: 6px;-webkit-border-radius: 6px;-moz-border-radius: 6px;}
.cookielawinfo-modern td, .cookielawinfo-modern th {padding: 5px;color: #333;}
.cookielawinfo-modern thead {font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;padding: .2em 0 .2em .5em;text-align: left;color: #4B4B4B;background-color: #C8C8C8;background-image: -webkit-gradient(linear, left top, left bottom, from(#f2f2f2), to(#e3e3e3), color-stop(.6,#B3B3B3));background-image: -moz-linear-gradient(top, #D6D6D6, #B0B0B0, #B3B3B3 90%);border-bottom: solid 1px #999;}
.cookielawinfo-modern th {font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 17px;line-height: 20px;font-style: normal;font-weight: normal;text-align: left;text-shadow: white 1px 1px 1px;}
.cookielawinfo-modern td {line-height: 20px;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size: 14px;border-bottom: 1px solid #fff;border-top: 1px solid #fff;}
.cookielawinfo-modern tr.cookielawinfo-row:hover {background-color: #fff;}

/** Elegant style */
.cookielawinfo-elegant {border: 1px solid #DFDFDF;background-color: #F9F9F9;width: 100%;-moz-border-radius: 3px;-webkit-border-radius: 3px;border-radius: 3px;font-family: Arial,"Bitstream Vera Sans",Helvetica,Verdana,sans-serif;color: #333;}
.cookielawinfo-elegant tr {border-top-color: white;border-bottom: 1px solid #DFDFDF;color: #555;}
.cookielawinfo-elegant th {text-shadow: rgba(255, 255, 255, 0.796875) 0px 1px 0px;font-family: Georgia,"Times New Roman","Bitstream Charter",Times,serif;font-weight: normal;padding: 7px 7px 8px;text-align: left;line-height: 1.3em;font-size: 14px;}
.cookielawinfo-elegant td {font-size: 12px;padding: 4px 7px 2px;vertical-align: top;}

/** Rounded style */
.cookielawinfo-rounded {background-color: #f5f5f5;padding: 5px;border-radius: 5px;-moz-border-radius: 5px;-webkit-border-radius: 5px;border: 1px solid #ebebeb;}
.cookielawinfo-rounded td, .rounded th {padding: 1px 5px;}
.cookielawinfo-rounded thead {text-shadow: 0 1px 0 white;color: #999;}
.cookielawinfo-rounded th {text-align: left;text-transform: uppercase;font-size: 11pt;border-bottom: 1px solid #fff;padding: 1px 5px;}
.cookielawinfo-rounded td {font-size: 10pt;padding: 5px;}
.cookielawinfo-rounded tr.cookielawinfo-row:hover {background-color: #fff;}

/** Classic Style */
table.cookielawinfo-classic {font-family: Verdana, Arial, Helvetica, sans-serif;border-collapse: collapse;border-left: 1px solid #ccc;border-top: 1px solid #ccc; color: #333;}
table.cookielawinfo-classic thead tr th {text-transform: uppercase;background: #e2e2e2;}
table.cookielawinfo-classic tfoot tr th, table.cookielawinfo-classic tfoot tr td {text-transform: uppercase;color: #000;font-weight: bold;}
table.cookielawinfo-classic tfoot tr th {width: 20%;}
table.cookielawinfo-classic tfoot tr td {width: 80%;}
table.cookielawinfo-classic td, table.cookielawinfo-classic th {border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;padding: 5px;line-height: 1.8em;font-size: 0.8em;vertical-align: top;width: 20%;}
table.cookielawinfo-classic tr.odd th, table.cookielawinfo-classic tr.odd td {background: #efefef;}

/* "Winter Blues" CSS theme for CSS Table Gallery (http://icant.co.uk/csstablegallery/) by Gunta Klavina (http://www.klavina.com) */
table.cookielawinfo-winter {font: 85% "Lucida Grande", "Lucida Sans Unicode", "Trebuchet MS", sans-serif;padding: 0; margin: 10px 0 20px; border-collapse: collapse; color: #333; background: #F3F5F7;}
table.cookielawinfo-winter a {color: #3A4856; text-decoration: none; border-bottom: 1px solid #C6C8CB;}
table.cookielawinfo-winter a:visited {color: #777;}
table.cookielawinfo-winter a:hover {color: #000;}
table.cookielawinfo-winter caption {text-align: left; text-transform: uppercase;  padding-bottom: 10px; font: 200% "Lucida Grande", "Lucida Sans Unicode", "Trebuchet MS", sans-serif;}
table.cookielawinfo-winter thead th {background: #3A4856; padding: 15px 10px; color: #fff; text-align: left; font-weight: normal;}
table.cookielawinfo-winter tbody {border-left: 1px solid #EAECEE; border-right: 1px solid #EAECEE;}
table.cookielawinfo-winter tbody {border-bottom: 1px solid #EAECEE;}
table.cookielawinfo-winter tbody td, table.cookielawinfo-winter tbody th {padding: 10px; background: url("../../images/td_back.gif") repeat-x; text-align: left;}
table.cookielawinfo-winter tbody tr {background: #F3F5F7;}
table.cookielawinfo-winter tbody tr.odd {background: #F0F2F4;}
table.cookielawinfo-winter tbody  tr:hover {background: #EAECEE; color: #111;}
table.cookielawinfo-winter tfoot td, table.cookielawinfo-winter tfoot th, table.cookielawinfo-winter tfoot tr {text-align: left; font: 120%  "Lucida Grande", "Lucida Sans Unicode", "Trebuchet MS", sans-serif; text-transform: uppercase; background: #fff; padding: 10px;}

/** 27/05/2013: responsive table by Mark Wiltshire */
@media(max-width:800px) {
		table.cookielawinfo-row-cat-table td, table.cookielawinfo-row-cat-table th
		{
		  width:23%;
		  font-size:12px;
		  word-wrap: break-word;
		}
		table.cookielawinfo-row-cat-table .cookielawinfo-column-4, table.cookielawinfo-row-cat-table .cookielawinfo-column-4
		{
		  width:45%;
		}
}

.cookielawinfo-row-cat-title{
	border-bottom: 1px solid #eee;
	text-align: center;
}
.cookielawinfo-row-cat-title-head{
	text-align: center;
}
.cookielawinfo-row-cat-table{
	width: 99%;
	margin-left: 5px;
}

```

</details>


---

## 🟡 Avia Snippets

Kompletterande Enfold-styling.


### avia-snippet-fold-unfold.css
**Size:** 2.7 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/css/avia-snippet-fold-unfold.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
/*
	Fold / Unfold basic stylings for various elements

    Created on : 21.03.2023, 15:59:05
    Author     : Guenter
	@since     : 5.6
*/

.avia-fold-unfold-section{
	position: relative;
	display: block;
	float: left;
	width: 100%;
}

.avia-fold-unfold-section.avia-fold-init{
	max-height: 80px;
	overflow: hidden;
	opacity: 0.3;
}

.avia-fold-textblock-wrap.avia-fold-init:not(.avia-fold-init-done) .avia_textblock,
.avia-fold-section-wrap.avia-fold-init:not(.avia-fold-init-done) + .avia-section,
.avia-fold-grid-row-wrap.avia-fold-init:not(.avia-fold-init-done) + .av-layout-grid-container{
	display: none;
}

.avia-fold-unfold-section.avia-fold-init-done{
	max-height: 500px;
	overflow: hidden;
	opacity: 1;
	transition: all 1.0s ease-in-out;
}

.avia-fold-unfold-section .av-fold-unfold-container{
	position: relative;
	clear: both;
	overflow: hidden;
	max-height: 80px;			/*	set via js for transition, initialize in post css to avoid jumping, adjust to max content height to unfold	*/
	transition: all 0.7s ease-in-out;
}

.avia-fold-unfold-section .av-fold-unfold-container::after{
	opacity: 0;
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	background: linear-gradient( to bottom, rgba(255,255,255,0), rgba(255,255,255,1) );
	z-index: -1;			/* allow pointer events */
	height: 100%;
	transition: all 0.7s ease-in-out;
}

.avia-fold-unfold-section .av-fold-unfold-container.folded::after{
	z-index: 500;
	opacity: 1;
}

.av-fold-unfold-container .av-fold-unfold-inner{
	display: block;
	position: relative;
	float: left;
	width: 100%;
}

.avia-fold-unfold-section .av-fold-button-wrapper{
	position: relative;
	display: block;
	float: left;
	width: 100%;
	padding-left: 0;
	padding-right: 0;
}

.avia-fold-unfold-section.align-left .av-fold-button-wrapper.av-fold-btn-padding{
	padding-left: 30px;
}

.avia-fold-unfold-section.align-right .av-fold-button-wrapper.av-fold-btn-padding{
	padding-right: 30px;
}

.avia-fold-unfold-section .av-fold-button-container{
	position: relative;
	display: inline-block;
	margin-top: 15px;
	margin-bottom: 15px;
	float: left;
	z-index: 20;
	transition: all 0.7s ease-in-out;
}

.avia-fold-unfold-section.align-right .av-fold-button-container{
	float: right;
}

.avia-fold-unfold-section.align-center .av-fold-button-container{
	left: 50%;
	transform: translateX(-50%);
}

.avia-fold-unfold-section.fold-button .av-fold-button-container{
	padding: 0.5em 0.8em;
	border: 1px solid;
	border-radius: 7px;
}

#top .avia-fold-unfold-section :not(.avia-button-wrap) .av-fold-button-container{
	text-decoration: underline;
}

.avia-fold-unfold-section .av-fold-button-container:hover{
	opacity: 0.6;
	cursor: pointer;
}

/*	Element specific */

.avia-fold-unfold-section .av-fold-unfold-container .avia_textblock{
	display: inline-block;
}

```

</details>


### avia-snippet-lightbox.css
**Size:** 4.2 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/css/avia-snippet-lightbox.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
/*--------------------lightbox enhancements---------------*/


/*

.mfp-figure - container that holds image and caption
.mfp-bg     - black overlay
.mfp-preloader - "Loading..." incdicator

*/
.mfp-ready .mfp-figure {
	opacity: 0;
}

div .mfp-title{
	line-height: 1.4em;
    font-size: 13px;
}

.mfp-title a{
	text-decoration: underline;
	color:#fff;
}

.mfp-title a:hover{
	text-decoration: none;
	opacity: 0.8;
}

.mfp-zoom-in .mfp-figure,
.mfp-zoom-in .mfp-iframe-holder .mfp-iframe-scaler{
	opacity: 0;
	transition: all 0.3s ease-out;
	transform: scale(0.95);
}

.mfp-zoom-in.mfp-bg,
.mfp-zoom-in .mfp-preloader {
	opacity: 0;
	transition: all 0.3s ease-out;
}

.mfp-zoom-in.mfp-image-loaded .mfp-figure,
.mfp-zoom-in.mfp-ready .mfp-iframe-holder .mfp-iframe-scaler{
	opacity: 1;
	transform: scale(1);
}
.mfp-zoom-in.mfp-ready.mfp-bg,
.mfp-zoom-in.mfp-ready .mfp-preloader {
	opacity: 0.8;
}

.mfp-zoom-in.mfp-removing .mfp-figure,
.mfp-zoom-in.mfp-removing .mfp-iframe-holder .mfp-iframe-scaler{
	transform: scale(0.95);
	opacity: 0;
}

.mfp-zoom-in.mfp-removing.mfp-bg,
.mfp-zoom-in.mfp-removing .mfp-preloader {
	opacity: 0;
}

div.avia-popup .mfp-iframe-scaler{
	overflow: visible; /*so the close button is shown*/
}

div.avia-popup .mfp-zoom-out-cur {
	cursor: auto;
}

div.avia-popup .mfp-zoom-out-cur .mfp-image-holder .mfp-close {
	cursor: pointer;
}

div.avia-popup .mfp-close {
	width: 40px;
	height: 40px;
	right: -13px;
	text-align: center;
	border-radius: 100px;
	border: 2px solid transparent;
	line-height: 38px;
	padding: 0;
	top: -5px;
	transition: all 0.3s ease-out;
	font-family: Arial, Baskerville, monospace !important;
}

div.avia-popup .mfp-close:hover{
	border: 2px solid #fff;
	transform: scale(0.8) rotateZ(90deg);
}

div.avia-popup .mfp-iframe-scaler .mfp-close{
	top: -43px;
}

div.avia-popup .mfp-figure:after{
	box-shadow: none; display: none;
}

div.avia-popup button.mfp-arrow:before,
div.avia-popup button.mfp-arrow:after{
	border:none;
	margin:0;
	display:none;
}

div.avia-popup button.mfp-arrow:before{
	opacity:1;
	display:block;
	position: absolute;
	top:50%;
	left:0;
	width:100%;
	height:80px;
	line-height:80px;
	margin-top:-40px;
	color:#fff;
	font-size: 50px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-weight: normal;
	transition: all 0.3s ease-out;
	transform: scale(1,1);
}

div.avia-popup button.mfp-arrow:hover:before{
	transform: scale(0.8,0.8);
}

div.avia-popup button.mfp-arrow:before{
	content:"\E87d";
	font-family: 'entypo-fontello';
}

div.avia-popup button.mfp-arrow-left:before{
	content:"\E87c"; font-family: 'entypo-fontello';
}

/*seems to cause problems on safari and chrome so disabled temp: https://github.com/KriesiMedia/wp-themes/issues/1171
.mfp-img{
animation: avia-fadein 10.7s 1 cubic-bezier(0.175, 0.885, 0.320, 1.275);
}*/

.mfp-img {
	animation: none !important;
}


@media (max-width: 900px){
	.mfp-arrow {
		text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
	}
}

div.avia-popup .mfp-s-error .mfp-preloader {
	background: transparent;
	width:100%;
	animation: none;
	white-space: nowrap;
}

/*	added 6.0  support for videos	*/
.mfp-wrap.avia-mfp-is-video .mfp-iframe-holder{
	padding: 0px;
}

.mfp-wrap.avia-mfp-is-video .mfp-iframe-holder .mfp-content {
	max-width: unset;
	padding: 0 50px
}

.mfp-wrap.avia-mfp-is-video .mfp-iframe-scaler {
	position: relative;
	top: 50%;
	transform: translateY(-50%) !important;
}

.mfp-wrap.avia-mfp-video-16-9 .mfp-iframe-holder .mfp-content {
	height: 50.625vw;		/*** the calculated height is then  90 * 9 / 16   ***/
	width: 90vw;			/*** the wanted width ***/
}

.mfp-wrap.avia-mfp-video-16-9 .mfp-iframe-scaler {
	padding-top: 56.25%;	/*** 100 x 9 / 16 = 56.25 ***/
}

.mfp-wrap.avia-mfp-video-4-3 .mfp-iframe-holder .mfp-content {
	height: 67.5vw;
	width: 90vw;
}

.mfp-wrap.avia-mfp-video-4-3 .mfp-iframe-scaler {
	padding-top: 75%;
}

.mfp-wrap.avia-mfp-video-9-16 .mfp-iframe-holder .mfp-content{
	height: 85vh;			/*** the wanted height ***/
	width: 47.8vh;			/*** the calculated width is then 85 * 9 / 16   ***/
}

.mfp-wrap.avia-mfp-video-9-16 .mfp-iframe-scaler{
	padding-top: 178%;		/*** 100 x 16 / 9 = 177.88 ***/
}

.mfp-wrap.avia-mfp-video-3-4 .mfp-iframe-holder .mfp-content{
	height: 85vh;
	width: 63.8vh;
}

.mfp-wrap.avia-mfp-video-3-4 .mfp-iframe-scaler{
	padding-top: 134%;
}

```

</details>


### avia-snippet-widget.css
**Size:** 23.6 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/css/avia-snippet-widget.css`

<details>
<summary>Visa CSS (klicka för att expandera)</summary>

```css
/* ======================================================================================================================================================
#Sidebar & Widgets
====================================================================================================================================================== */

.sidebar .widget:first-child,
.content .sidebar .widget:first-child{
	padding-top:0;
	border-top-style: none;
	border-top-width: 0;
}

/* archive widget */
.widget_archive label.screen-reader-text {
    display: none;
}


/*nav menu widget*/
.widget_nav_menu a{
	display: block;
	padding:4px 0px 5px 0;
	text-decoration: none;
}

div .widget_nav_menu{
	padding-bottom:24px;
}

#top .widget_nav_menu ul{
	margin:0;
	padding:0;
	float: none;
	list-style-type: none;
}

#top .widget_nav_menu li{
	position: relative;
	box-sizing: content-box;
	clear:both;
	font-size:13px;
}

#top #footer .widget_nav_menu li{
	background-color:transparent;
}

#top .widget_nav_menu ul ul li:before {
	content: "\2219";
	position: absolute;
	top:5px;
}

#top .sidebar_left .widget_nav_menu ul ul li:before {
    right: -10px;
}

#top .sidebar_left.sidebar_align_left .widget_nav_menu ul ul li:before {
    right: auto;
    left: 0;
}

#top .widget_nav_menu ul ul li a{
	padding:6px 0px 7px 12px;
}

.widget_nav_menu .current-menu-item>a,
.widget_nav_menu .current_page_item>a{
	font-weight: bold;
}

.sidebar .widget_nav_menu ul:first-child>.current-menu-item,
.sidebar .widget_nav_menu ul:first-child>.current_page_item,
.sidebar .widget_nav_menu ul:first-child>.current-menu-ancestor{
	padding-left: 51px;
	left: -51px;
	top:1px;
	margin-top: -1px;
	padding-top:1px;
	width:100%;
	box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.2);
	margin-bottom: 4px;
}

.widget_nav_menu ul ul{
	display:block;
}

.widget_nav_menu.widget_nav_hide_child ul ul{
	display:none;
}

#top .widget_nav_menu .current-menu-item > ul,
#top .widget_nav_menu .current_page_item > ul,
#top .widget_nav_menu .current_page_ancestor > ul,
#top .widget_nav_menu .current-menu-ancestor > ul{
	display:block;
/*	padding:0 0 0 13px;*/
}

#top .widget_nav_menu .sub-menu > li{
	display: block;
	padding: 0 0 0 13px;
}

#top .sidebar_left .widget_nav_menu .current-menu-item > ul,
#top .sidebar_left .widget_nav_menu .current_page_item > ul,
#top .sidebar_left .widget_nav_menu .current_page_ancestor > ul,
#top .sidebar_left .widget_nav_menu .current-menu-ancestor > ul{
	padding:0 13px 0 0 ;
}

#top .sidebar_left.sidebar_align_left .widget_nav_menu .current-menu-item > ul,
#top .sidebar_left.sidebar_align_left .widget_nav_menu .current_page_item > ul,
#top .sidebar_left.sidebar_align_left .widget_nav_menu .current_page_ancestor > ul,
#top .sidebar_left.sidebar_align_left .widget_nav_menu .current-menu-ancestor > ul{
    padding:0 0 0 13px ;
}


#top .sidebar_left .widget_nav_menu .sub-menu{
	padding-right: 13px;
}

#top .sidebar_left.sidebar_align_left .widget_nav_menu .sub-menu{
    padding-left: 13px;
    padding-right: 0;
}


.widget_nav_menu ul:first-child>.current-menu-item>a,
.widget_nav_menu ul:first-child>.current_page_item>a{
	border:none;
	padding:6px 7px 7px 0;
}

#top .widget_nav_menu ul ul .sub-menu,
#top .widget_nav_menu ul ul .children{
	padding:0 0 0 10px;
	overflow: hidden;
	margin:0;
}

.widget_nav_menu .nested_nav>li:first-child>a{
	border:none;
}

#top .widget_nav_menu .nested_nav{
	padding-bottom:30px;
}

#top .content .flex_column .widget_nav_menu li a {
	padding: 0.8em 3px;
}

#top .content .flex_column .widget_nav_menu li a:hover,
#top .content .flex_column .widget_nav_menu ul:first-child>.current-menu-item,
#top .content .flex_column .widget_nav_menu ul:first-child>.current_page_item{
	background-color: rgba(255,255,255,0.4);
}

#top .content .flex_column .widget_nav_menu li {
	background-color: transparent;
	margin: 0;
	padding:0;
	border-bottom-style: solid;
	border-bottom-width: 1px;
}

#top .content .flex_column .widget_nav_menu li:first-child {
	border-top-style: solid;
	border-top-width: 1px;
}

/*instagram*/

.av-instagram-pics{
	display:table;
	width:100%;
	table-layout: fixed;
}
.av-instagram-row{
	display:table-row;
}

.av-instagram-item{
	display: table-cell;
	padding: 3px;
	height:100%;
}

.av-instagram-item a{
	display:block;
	position: relative;
	padding-bottom:100%;
	width:100%;
	background-size: cover;
}

.av-instagram-item img{
	display:block;
}

.av-instagram-item .image-overlay.overlay-type-image {
	left: 0;
	width: 100%;
}

.av-instagram-item:first-child {
	padding-left: 0px;
}

.av-instagram-item:last-child  {
	padding-right: 0px;
}

.av-instagram-row:first-child .av-instagram-item{
	padding-top: 0px;
}

.av-instagram-row:last-child .av-instagram-item {
	padding-bottom: 0px;
}

.av-instagram-follow{
	width:100%;
	text-align: center;
	display: block;
	margin-top:3px;
}

.avia-instagram-feed .av-instagram-errors-msg.av-instagram-admin{
	color: #cc0033;
}

/*mailchimp*/
#top .av-mailchimp-widget fieldset,
#top .av-mailchimp-widget form{
	margin:0;
}

#top .av-mailchimp-widget p{
	margin:2px 0;
}

#top .av-mailchimp-widget-style-boxed_form{
	padding:15px;
	border-style: solid;
	border-width: 1px;
}

#top .av-mailchimp-widget .button{
	margin-top:5px;
	width:100%;
	padding: 13px 10px;
}

.widgettitle + .av-mailchimp-widget-style-boxed_form{
	margin-top:-10px;
}

#top .av-form-error-container{
	border: 1px solid #BB1313;
	padding: 15px;
	color: #BB1313;
	line-height: 1.4em;
	font-size: 13px;
	margin-bottom: 20px;
}

/*text*/
.textwidget ul{
	margin-left:0px;
	overflow: hidden;
}

/*combo widget*/
.js_active .avia_combo_widget .tab_titles{
	border-bottom-width: 1px;
	border-bottom-style: solid;
}

.js_active #top .avia_combo_widget .active_tab{
	border-bottom-style: solid;
	border-bottom-width: 2px;
	border-bottom-color: initial;
}

.js_active #top .avia_combo_widget .tab_content {
	padding:0;
	background: transparent;
	border: none;
}

.js_active .avia_combo_widget .top_tab .tab{
	border: none;
	background: transparent;
	padding:5px 10px;
	border-bottom-style: solid;
	border-bottom-width: 2px;
	border-bottom-color: transparent;
}

/*likebox*/
.av_facebook_widget_wrap{
	overflow: hidden;
	position: relative;
	padding: 0px;
	background: #fff;
}

.av_facebook_widget_wrap_border_yes{
	border-style: solid;
	border-width: 1px;
}

.av_facebook_widget_wrap_positioner iframe{
	position: absolute;
	height:100%;
	width:100%;
}

.av_facebook_widget_wrap_positioner{}

.av_facebook_widget{
	width:100%;
}

.av_facebook_widget {
	width: 107%;
	max-width: 137%;
	left: -5px;
	top: -4px;
	position: relative;
}

.avia_fb_likebox .av_facebook_widget_page_title{
	font-size: 1.2em;
	font-weight: 700;
	margin: 12px 0;
}

.widget .av_widget_img_text_confirm .av_img_text_confirm_link{
	display: inline-block;
	position: relative;
	width: 100%;
}

.widget .av_widget_img_text_confirm .av_img_text_confirm_link img{
	width: 100%;
}

.widget .av_widget_img_text_confirm .av_img_text_confirm_link:hover{
	text-decoration: none;
}

.widget .av_widget_img_text_confirm .av_img_text_confirm_text{
	font-size: 1.5em;
	position: absolute;
	padding: 25px;
	text-align: center;
	top: 0;
	height: 100%;
	display: flex;
	align-items: center;
	opacity: 0;
	width: 100%;
}

.widget .av_widget_img_text_confirm .av_img_text_confirm_text span{
	width: 100%;
}

.widget .av_widget_img_text_confirm .av_img_text_confirm_text:hover{
	opacity: 1;
}


.avia_fb_likebox .av_facebook_widget_main_wrap{
	background-attachment: scroll;
	background-size: cover;
	background-position: center center;
	width:100%;
	min-width:180px;
	min-height:214px;
	position: relative;
	font-family: Helvetica, Arial, sans-serif;
}

.avia_fb_likebox .av_facebook_widget_main_wrap_shadow{
	position: absolute;
	top:0;
	left:0;right:0;
	height:90px;
	background: linear-gradient(to bottom, rgba(0, 0, 0, .7) 0%, rgba(0, 0, 0, 0) 100%);
	z-index: 0;
}

.avia_fb_likebox .av_facebook_widget_logo_image{
	position: absolute;
	height:54px;
	width:54px;
	top:8px;
	left:8px;
	background:#fff;
	box-shadow: 0 1px 6px rgba(0, 0, 0, .5);
	border: 2px solid #fff;
	z-index: 2;
}

.avia_fb_likebox .av_facebook_widget_logo_image img{
	max-width: 50px;
	max-height:50px;
	text-align: center;
	display: inline-block;
}

.avia_fb_likebox  .av_facebook_widget_page_title_container{
	color:#fff;
	margin: 0px 18px 0 68px;
	position: relative;
	z-index: 2;
	font-size: 18px;
    font-weight: 500;
    line-height: 1.358;
    margin-bottom: -5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-shadow: 0 2px 4px rgba(0, 0, 0, .9);
    top:8px;
	min-height: 95px;
}

#top .avia_fb_likebox  .av_facebook_widget_page_title_container a{
	color:#fff;
}

.avia_fb_likebox  .av_facebook_widget_page_title_container .av_facebook_widget_content{
	font-size: 12px;
}



.avia_fb_likebox  .av_facebook_widget_page_title_container span{
	display: block;
}


.avia_fb_likebox .av_facebook_widget_add_info{
	width:100%;
	min-height: 83px;
	background: #f6f7f9;
    border: 1px solid #e9ebee;
    border-top: 0;
	font-size: 12px;
    line-height: 16px;
    color: #4b4f56;
    padding:8px;
}

.avia_fb_likebox .av_facebook_widget_add_info_inner{
	background: #fff;
    border-color: #e9ebee #dfe0e4 #d0d1d5;
    border-radius: 2px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .12);
    position: relative;
    min-height: 66px;
    padding:8px;
}

.avia_fb_likebox .av_facebook_widget_imagebar{
	height:32px;
	background-repeat: repeat;
	background-size: auto 100%;
	background-image:url("../images/layout/fake_facebook.jpg");
}

.avia_fb_likebox .av_facebook_widget_add_info_inner_wrap{
	min-height: 15px;
	padding-bottom: 4px;
	display: block;
}

.avia_fb_likebox .av_facebook_widget_button{
	background-color: #f6f7f9;
    border-color: #ced0d4;
    color: #4b4f56;
    line-height: 22px;
    border: 1px solid rgba(0, 0, 0, .12);
    font-size: 12px;
    padding: 0 5px;
    display: inline-block;
    margin:8px;
}

.avia_fb_likebox .av_facebook_widget_icon {
    display: inline-block;
    margin-right: 5px;
    background: #3a5797;
    height: 16px;
    width: 16px;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    font-size: 11px;
    line-height: 18px;
}

.avia_fb_likebox .ajax_load{
	display: none;
}

.avia_fb_likebox.ajax_loading_now .ajax_load{
	display: block;
}


/*social media count widget*/
.avia_socialcount{
	overflow: hidden;
	text-align: left;
}

#top .social_widget_icon{
	padding:0;
	margin:0;
	height:30px;
	width:30px;
	line-height: 32px;
	text-align: center;
	float: left;
	font-size: 17px;
	border-radius: 2px;
}

.asc_twitter .social_widget_icon{
	color:#000;
	background-color:#fff;
}

.asc_rss .social_widget_icon{
	color:#fff;
	background-color:#ffa133;
	border-color:#ffa133;
	text-shadow: 1px 1px 1px #D18021;
}

.avia_socialcount .seperator{
	display:none;
}

div #footer .avia_socialcount{
	padding:10px 0 0 0;
}

.asc_multi_count{
	float:left;
	width:50%;
}

.avia_socialcount a,
.avia_socialcount a:hover{
	height:40px;
	text-decoration: none;
	display:block;
	min-width:89px;
}

.avia_socialcount strong,
.avia_socialcount span{
	display:block;
	line-height: 1em;
	padding:0 0 0 36px;
}

.avia_socialcount a strong{
	font-size: 11px;
	font-weight: bold;
	letter-spacing: 0;
	padding-top: 4px;
}

.avia_socialcount a span{
	font-size:10px;
	padding-top:3px;
}


/*twitter widget*/
#top .widget.tweetbox .tweets{
	list-style-type: none;
	list-style-position: outside;
	border:none;
}

#top .widget.tweetbox .tweet{
	padding:10px 0;
	line-height: 18px;
	position: relative;
	overflow: hidden;
	font-size:11px;
	background: none;
	border-top-style: dashed;
	border-top-width: 1px;
	margin:0;
}

#top .widget.tweetbox .tweet:first-child{
	border:none;
}

.widget.tweetbox .tweet-thumb{
	position:relative;
}

.widget.tweetbox .tweet-thumb a{
	margin-right:9px;
	padding:3px;
	float:left;
	border-style: solid;
	border-width: 1px;
	margin-top: 5px;
	display:block;
	width:36px;
}

#top .widget.tweetbox .tweet-thumb img{
	display:block;
	float:left;
	border:none;
	padding:0;
	margin:0;
}

.widget.tweetbox .tweet-text{
	position: relative;
	overflow: hidden;
}

.widget.tweetbox .tweet-time{
	clear: both;
	font-size:11px;
}

.widget.tweetbox .tweet-text.avatar_no {
	font-size: 12px;
	line-height: 1.7em;
	font-weight: 400;
}

.widget.tweetbox .tweet-text.avatar_no .tweet-time{
	font-style: italic;
	font-weight: normal;
}


/*advertising widget*/
.avia_partner_widget{
	overflow: hidden;
	clear:both;
}

.avia_partner_widget a,
.avia_partner_widget a:hover {
	float: left;
	display: block;
	text-decoration: none;
	width: 49.5%;
	outline: none;
	border: none;
	padding-bottom: 49.5%;
	position: relative;
	margin-right: 1%;
}

.avia_partner_widget a.avia_partner2,
.avia_partner_widget a.avia_partner2:hover {
	margin-right: 0;
}

#top .avia_partner_widget{
	max-width:304px;
}

#top .avia_partner_widget img{
	position: absolute;
	left:0;
	top:0;
}

.avia_partner1{
	margin-right:1px;
}

.avia_parnter_empty{
	line-height: 1em;
	height:97%;
	width:97%;
	display: block;
	font-size:10px;
	text-align: center;
	position: absolute;
	border-style: solid;
	border-width: 1px;
}

.avia_parnter_empty span{
	width:100%;
	position: absolute;
	top:50%;
	margin-top:-5px;
	text-align: center;
	left:0;
}

/*Google Maps*/
.widget .avia-google-map-container{
	height:230px;
	width:100%;
}

.widget .avia-google-map-container{
	background: no-repeat center;
	background-size: cover;
}

.widget .content .avia-google-map-container{
	height:230px;
}

#top .widget .infoWindow  input[type="text"]{
	margin: 0 0px 3px 0;
}

.widget .avia-google-map-container img,
.widget .avia-google-map-container a img{
	max-width: none;
}

.widget .avia-google-map-container div,
.widget .avia-google-map-container img,
.widget .avia-google-map-container a{
	box-sizing: content-box;
}

.widget .avia-google-map-container .av_text_confirm_link{
    padding: 25px;
    text-align: center;
    opacity: 0;
    position: absolute;
    width: 150px;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -50px;
    background: rgba(0,0,0,0.7);
    border-radius: 3px;
    color: #fff;
    font-size: 1em;
    line-height: 1.3em;
	transition: all 0.3s ease-in-out;
}

.widget .avia-google-map-container .av_text_confirm_link:hover{
	color: #fff;
    background: rgba(0,0,0,0.9);
}

.widget .avia-google-map-container.av_gmaps_show_delayed.av-no-fallback-img .av_text_confirm_link,
.widget .avia-google-map-container.av_gmaps_show_page_only.av-no-fallback-img .av_text_confirm_link{
	height: auto;
	opacity: 1;
}

.widget .avia-google-map-container .av_text_confirm_link span{
	width: 100%;
}

.widget .avia-google-map-container:hover .av_text_confirm_link{
	opacity: 1;
	text-decoration: none;
}


/*news widget*/
#top .news-content{
	padding:7px 0 3px 0;
	line-height: 1.7em;
	position: relative;
	overflow: hidden;
	font-size:0.85em;
	display: block;
	clear: both;
	margin:0;
}

#top .news-wrap{
	border:none;
	list-style-type: none;
	list-style-position: outside;
}

#top .news-wrap li{
	border:none;
	background: none;
	text-indent: 0;
}

.news-link,
.news-link:hover,
#top .widget ul li .news-link:hover{
	display: block;
	position: relative;
	text-decoration: none;
	overflow: hidden;
	z-index: 2;
}


/*default size news/portfolio widget*/
.news-thumb{
	margin-right:9px;
	padding:3px;
	float:left;
	margin-top: 4px;
	border-style: solid;
	border-width: 1px;
	height:36px;
	width:36px;
	display: block;
}

.news-thumb img{
	width:28px;
	height:28px;
}


/*bigger size news/portfolio widget*/
.image_size_portfolio_small .news-link{
	float:left;
	margin-right:10px;
}

.image_size_portfolio_small .news-thumb,
.image_size_portfolio_small .tweet-thumb img,
.image_size_portfolio_small .news-thumb img{
	width:150px;
	min-height:100px;
}

.image_size_portfolio_small .news-excerpt{
	overflow: hidden;
	font-size: 13px;
	line-height: 1.65em;
}

.image_size_portfolio_small .news-headline{
	font-size:14px;
}

#top .news-thumb img{
	display:block;
	float:left;
	border:none;
	padding:0;
	margin:0;
}

.news-headline{
	overflow: hidden;
	font-weight: bold;
	margin-top:2px;
	display:block;
}

.news-time{
	font-weight:normal;
	clear: both;
	font-size:0.92em;
	display:block;
}

.news-excerpt{}


/*tagcloud*/
.tagcloud br{
	display:none;
}

.tagcloud a{
	font-size:11px !important;
	padding:2px 8px;
	margin:0 1px 1px 0;
	display:block;
	float:left;
	border-style: solid;
	border-width: 1px;
	text-decoration: none;
}

.tagcloud a:hover{
	text-shadow: none;
	text-decoration: underline;
}

.widget_tag_cloud h3{
	border:none;
}


/*rss*/
.widget_rss li{
	line-height: 1.5em;
	font-size: 11px;
}

.widget_rss li div{
	font-family: "Georgia", "Times New Roman", Helvetica, Arial, sans-serif;
	font-style: italic;
}

.rsswidget{
	display:block;
	font-weight: bold;
}

.rss-date,
.widget_rss cite{
	font-size:11px;
}

.widget_rss li{
	padding:7px 0;
}

.widget_rss .widgettitle img{
	display:none;
}


/*recentcomments, recent entries*/
.recentcomments,
.widget_recent_entries li{
	padding:7px 0;
	display:block;
	font-size: 0.85em;
	line-height: 1.5em;
}

.recentcomments a,
.widget_recent_entries li a{
	font-style: italic;
	font-family: "Georgia", "Times New Roman", Helvetica, Arial, sans-serif;
}

.recentcomments,
.widget_recent_entries li{
	border-top-width:3px;
	border-top-style: solid;
}

.recentcomments:first-child,
.widget_recent_entries li:first-child{
	border-top:none;
}


/*sidebar left mods for all widgets*/
.sidebar_left .widget_nav_menu ul:first-child>.current-menu-item,
.sidebar_left .widget_nav_menu ul:first-child>.current_page_item,
.sidebar_left .widget_nav_menu ul:first-child>.current-menu-ancestor{
	padding-right: 52px;
	padding-left:0;
	left: auto;
	top:1px;
}

.sidebar_left.sidebar{
	text-align: right;
}

.sidebar_left .news-thumb{
	float:right;
	margin: 4px 0 0 9px;
}


/*TWITTER WIDGET PRO STYLES*/
#top .widget_twitter{
	font-size: 12px;
	line-height: 1.65em;
}

#top .widget_twitter .twitter-avatar{
	float:left;
	margin-right:13px;
	border-style: solid;
	border-width:1px;
	padding:3px;
	display: block;
}

#top .widget_twitter .twitter-avatar a,
#top .widget_twitter .twitter-avatar img{
	display: block;
}

#top .widget_twitter ul{
	overflow: hidden;
	margin:0;
	padding:0;
}

#top .widget_twitter li{
	padding: 0 0 8px 0;
	margin: 0 0 8px 0;
	border-bottom-style: solid;
	border-bottom-width: 2px;
}

#top .widget_twitter li:last-child{
	border-bottom: none;
}

#top .widget_twitter .entry-content-wrapper{
	padding:0;
	margin:0;
	float: none;
	clear: both;
	position: relative;
	border:none;
	width:100%;
}

#top .widget_twitter .entry-meta{
	display: block;
	font-size: 11px;
	font-style: italic;
	opacity: 0.8;
	margin-top:5px;
}

#top .widget_twitter .time-meta,
#top .widget_twitter .from-meta{}

#top .widget_twitter .intent-meta{
	display: block;
	font-size: 11px;
	margin-top:8px;
}

#top .widget_twitter .intent-meta a{
	text-decoration: none;
	margin-right: 4px;
}

#top .widget_twitter .intent-meta a:hover{
	text-decoration: underline;
}


/* user defined text alignmnt for sidebars */
.sidebar_left.sidebar_align_left.sidebar{
	text-align: left;
}

.sidebar_left.sidebar_align_left .news-thumb{
	float:left;
	margin: 4px 9px 0 0
}

.sidebar_left.sidebar_align_left .widget_nav_menu ul:first-child>.current-menu-item,
.sidebar_left.sidebar_align_left .widget_nav_menu ul:first-child>.current_page_item,
.sidebar_left.sidebar_align_left .widget_nav_menu ul:first-child>.current-menu-ancestor{
    padding-left: 52px;
    padding-right:0;
    left: 0;
    right: auto;
    top:1px;
}


/* Table of Contents */
.avia-toc-container{
    position: relative;
}

.avia-toc-container a {
    display: block;
    position: relative;
    line-height: 1.4em;
}

.avia-toc-container a:hover {
    text-decoration: none;
}

/* simple style */
.avia-toc-style-simple a{
    overflow-x: hidden;
    margin-bottom: 1em;
    min-height: 25px;
}

.avia-toc-style-simple a span{
    background-color: #fff;
    position: relative;
    padding-right: 5px;
    z-index: 2;
}


.avia-toc-style-simple a:after {
    float: left;
    width: 0;
    color: rgba(0,0,0,0.25);
    font-size: 9px;
    font-weight: normal;
    white-space: nowrap;
    content:
            ". . . . . . . . . . . . . . . . . . . . "
            ". . . . . . . . . . . . . . . . . . . . "
            ". . . . . . . . . . . . . . . . . . . . "
            ". . . . . . . . . . . . . . . . . . . . "
}

.avia-toc-style-simple .avia-toc-level-0:after {
	line-height: 3;
}

.avia-toc-style-simple .avia-toc-level-1:after {
	line-height: 3;
}

.avia-toc-style-simple .avia-toc-level-2:after {
	line-height: 2.9;
}

.avia-toc-style-simple .avia-toc-level-3:after {
	line-height: 2.7;
}

.avia-toc-style-simple .avia-toc-level-4:after {
	line-height: 2.5;
}

.avia-toc-style-simple .avia-toc-level-5:after {
	line-height: 2.4;
}

.avia-toc-style-simple .avia-toc-level-0 {
	font-weight: bold;
	font-size: 1em;
}

.avia-toc-style-simple .avia-toc-level-2 {
	font-weight: normal;
	font-size: 0.9375em;
}

.avia-toc-style-simple .avia-toc-level-3 {
	font-weight: normal;
	font-size: 0.875em;
}

.avia-toc-style-simple .avia-toc-level-4 {
	font-weight: normal;
	font-size: 0.8125em;
}

.avia-toc-style-simple .avia-toc-level-5 {
	font-weight: normal;
	font-size: 0.8125em;
	font-style: italic;
}

/* indentation */
.avia-toc-style-simple.avia-toc-indent .avia-toc-level-1 {
	margin-left: 0.625em
}

.avia-toc-style-simple.avia-toc-indent .avia-toc-level-2 {
	margin-left: 1em
}

.avia-toc-style-simple.avia-toc-indent .avia-toc-level-3 {
	margin-left: 1.428em
}

.avia-toc-style-simple.avia-toc-indent .avia-toc-level-4 {
	margin-left: 2.307em
}

.avia-toc-style-simple.avia-toc-indent .avia-toc-level-5 {
	margin-left: 2.692em
}

/* elegant style */
.avia-toc-style-elegant{
    padding-left: 30px;
}

.avia-toc-style-elegant a {
    text-transform: uppercase;
    padding-bottom: 1.5em;
}

.avia-toc-style-elegant .avia-toc-level-0{
	font-weight: bold;
	font-size: 0.875em;
}

.avia-toc-style-elegant .avia-toc-level-1{
	font-weight: normal;
	font-size: 0.875em;
}

.avia-toc-style-elegant .avia-toc-level-2{
	font-weight: normal;
	font-size: 0.8125em;
}

.avia-toc-style-elegant .avia-toc-level-3{
	font-weight: bold;
	font-size: 0.8125em;
}

.avia-toc-style-elegant .avia-toc-level-4{
	font-weight: normal;
	font-size: 0.75em
}

.avia-toc-style-elegant .avia-toc-level-5{
	font-weight: normal;
	font-size: 0.75em;
	font-style: italic;
}


.avia-toc-style-elegant a:before{
    content: '';
    position: absolute;
    height: calc(100% + 0.3em);
    left: -20px;
    top: 0.15em;
    border-left-width: 2px;
    border-left-style: solid;
    border-left-color: rgba(0,0,0,0.08);
}

.avia-toc-style-elegant a.avia-toc-level-0:last-child:after,
.avia-toc-style-elegant a:first-child:after,
.avia-toc-style-elegant a.avia-toc-level-0:after,
.avia-toc-style-elegant a:first-child span:after,
.avia-toc-style-elegant a.avia-toc-level-0 span:after{
    content: '';
    position: absolute;
    width: 9px;
    height: 9px;
    border-width: 3px;
    border-style: solid;
    border-radius: 9px;
    left: -26px;
    top: 0.15em;
    z-index: 2;
}

.avia-toc-style-elegant a:first-child span:after,
.avia-toc-style-elegant a.avia-toc-level-0 span:after{
    border-color: transparent;
    z-index: 1;
}

.avia-toc-style-elegant a:first-child:hover span:after,
.avia-toc-style-elegant a.avia-toc-level-0:hover span:after{
    animation: sonarEffect 2s ease-out infinite;
}

.avia-toc-style-elegant a:last-child:before{
    display: none;
}

.avia-toc-style-elegant a:last-child:after{
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    left: -23px;
    top: 0.4em;
    border-radius: 8px;
}

/* indentation */
.avia-toc-style-elegant.avia-toc-indent .avia-toc-level-1{
	padding-left: 0.625em
}
.avia-toc-style-elegant.avia-toc-indent .avia-toc-level-2{
	padding-left: 1em
}
.avia-toc-style-elegant.avia-toc-indent .avia-toc-level-3{
	padding-left: 1.428em
}
.avia-toc-style-elegant.avia-toc-indent .avia-toc-level-4{
	padding-left: 2.307em
}
.avia-toc-style-elegant.avia-toc-indent .avia-toc-level-5{
	padding-left: 2.692em
}


```

</details>


---

## 🟢 Custom (Wexoe)

Er egen CSS - detta kan ni modifiera fritt.


### wexe.css
**Size:** 174.5 KB | **Source:** `https://wexoe.se/wp-content/uploads/dynamic_avia/wexe.css`

```css
:root{--enfold-socket-color-bg:#282b2e;--enfold-socket-color-bg2:#52565c;--enfold-socket-color-primary:#ffffff;--enfold-socket-color-secondary:#ebebeb;--enfold-socket-color-color:#e8e8e8;--enfold-socket-color-meta:#777777;--enfold-socket-color-heading:#ffffff;--enfold-socket-color-border:#282b2e;--enfold-socket-color-constant-font:#282b2e;--enfold-socket-color-button-border:#dddddd;--enfold-socket-color-button-border2:#c9c9c9;--enfold-socket-color-iconlist:#171a1d;--enfold-socket-color-timeline:#171a1d;--enfold-socket-color-timeline-date:#04070a;--enfold-socket-color-masonry:#41454b;--enfold-socket-color-stripe:#ffffff;--enfold-socket-color-stripe2:#ffffff;--enfold-socket-color-stripe2nd:#fcfcfc;--enfold-socket-color-button-font:#282b2e;--enfold-footer-color-bg:#35383c;--enfold-footer-color-bg2:#52565c;--enfold-footer-color-primary:#ffffff;--enfold-footer-color-secondary:#ebebeb;--enfold-footer-color-color:#e8e8e8;--enfold-footer-color-meta:#777777;--enfold-footer-color-heading:#ffffff;--enfold-footer-color-border:#35383c;--enfold-footer-color-constant-font:#35383c;--enfold-footer-color-button-border:#dddddd;--enfold-footer-color-button-border2:#c9c9c9;--enfold-footer-color-iconlist:#24272b;--enfold-footer-color-timeline:#24272b;--enfold-footer-color-timeline-date:#010408;--enfold-footer-color-masonry:#41454b;--enfold-footer-color-stripe:#ffffff;--enfold-footer-color-stripe2:#ffffff;--enfold-footer-color-stripe2nd:#fcfcfc;--enfold-footer-color-button-font:#35383c;--enfold-alternate-color-bg:#f8f8f8;--enfold-alternate-color-bg2:#ffffff;--enfold-alternate-color-primary:#000000;--enfold-alternate-color-secondary:#9cc3df;--enfold-alternate-color-color:#999999;--enfold-alternate-color-meta:#919191;--enfold-alternate-color-heading:#222222;--enfold-alternate-color-border:#ebebeb;--enfold-alternate-color-constant-font:#ffffff;--enfold-alternate-color-button-border:#000000;--enfold-alternate-color-button-border2:#7aa1bd;--enfold-alternate-color-iconlist:#dadada;--enfold-alternate-color-timeline:#dadada;--enfold-alternate-color-timeline-date:#a7a7a7;--enfold-alternate-color-masonry:#eeeeee;--enfold-alternate-color-stripe:#222222;--enfold-alternate-color-stripe2:#111111;--enfold-alternate-color-stripe2nd:#add4ef;--enfold-alternate-color-button-font:#ffffff;--enfold-main-color-bg:#ffffff;--enfold-main-color-bg2:#f8f8f8;--enfold-main-color-primary:#000000;--enfold-main-color-secondary:#9cc3df;--enfold-main-color-color:#000000;--enfold-main-color-meta:#919191;--enfold-main-color-heading:#222222;--enfold-main-color-border:#ebebeb;--enfold-main-color-constant-font:#ffffff;--enfold-main-color-button-border:#000000;--enfold-main-color-button-border2:#7aa1bd;--enfold-main-color-iconlist:#dadada;--enfold-main-color-timeline:#dadada;--enfold-main-color-timeline-date:#a7a7a7;--enfold-main-color-masonry:#e7e7e7;--enfold-main-color-stripe:#222222;--enfold-main-color-stripe2:#111111;--enfold-main-color-stripe2nd:#add4ef;--enfold-main-color-button-font:#ffffff;--enfold-header-color-bg:#ffffff;--enfold-header-color-bg2:#f8f8f8;--enfold-header-color-primary:#9cc2df;--enfold-header-color-secondary:#9cc3df;--enfold-header-color-color:#000000;--enfold-header-color-meta:#969696;--enfold-header-color-heading:#000000;--enfold-header-color-border:#ebebeb;--enfold-header-color-constant-font:#ffffff;--enfold-header-color-button-border:#7aa0bd;--enfold-header-color-button-border2:#7aa1bd;--enfold-header-color-iconlist:#dadada;--enfold-header-color-timeline:#dadada;--enfold-header-color-timeline-date:#a7a7a7;--enfold-header-color-masonry:#e7e7e7;--enfold-header-color-stripe:#bee4ff;--enfold-header-color-stripe2:#add3ef;--enfold-header-color-stripe2nd:#add4ef;--enfold-header-color-button-font:#ffffff;--enfold-header_burger_color:inherit;--enfold-header_replacement_menu_color:inherit;--enfold-header_replacement_menu_hover_color:inherit;--enfold-font-family-theme-body:"HelveticaNeue","Helvetica Neue",Helvetica,Arial,sans-serif;--enfold-font-size-theme-content:13px;--enfold-font-size-theme-h1:34px;--enfold-font-size-theme-h2:28px;--enfold-font-size-theme-h3:20px;--enfold-font-size-theme-h4:18px;--enfold-font-size-theme-h5:16px;--enfold-font-size-theme-h6:14px;--enfold-font-size-content-font:16px} ::selection{background-color:var(--enfold-main-color-primary);color:var(--enfold-main-color-bg)} html.html_boxed{background:#ffffff center center repeat scroll} body,body .avia-tooltip{font-size:16px} .socket_color,.socket_color div,.socket_color header,.socket_color main,.socket_color aside,.socket_color footer,.socket_color article,.socket_color nav,.socket_color section,.socket_color span,.socket_color applet,.socket_color object,.socket_color iframe,.socket_color h1,.socket_color h2,.socket_color h3,.socket_color h4,.socket_color h5,.socket_color h6,.socket_color p,.socket_color blockquote,.socket_color pre,.socket_color a,.socket_color abbr,.socket_color acronym,.socket_color address,.socket_color big,.socket_color cite,.socket_color code,.socket_color del,.socket_color dfn,.socket_color em,.socket_color img,.socket_color ins,.socket_color kbd,.socket_color q,.socket_color s,.socket_color samp,.socket_color small,.socket_color strike,.socket_color strong,.socket_color sub,.socket_color sup,.socket_color tt,.socket_color var,.socket_color b,.socket_color u,.socket_color i,.socket_color center,.socket_color dl,.socket_color dt,.socket_color dd,.socket_color ol,.socket_color ul,.socket_color li,.socket_color fieldset,.socket_color form,.socket_color label,.socket_color legend,.socket_color table,.socket_color caption,.socket_color tbody,.socket_color tfoot,.socket_color thead,.socket_color tr,.socket_color th,.socket_color td,.socket_color article,.socket_color aside,.socket_color canvas,.socket_color details,.socket_color embed,.socket_color figure,.socket_color fieldset,.socket_color figcaption,.socket_color footer,.socket_color header,.socket_color hgroup,.socket_color menu,.socket_color nav,.socket_color output,.socket_color ruby,.socket_color section,.socket_color summary,.socket_color time,.socket_color mark,.socket_color audio,.socket_color video,#top .socket_color .pullquote_boxed,.responsive #top .socket_color .avia-testimonial,.responsive #top.avia-blank #main .socket_color.container_wrap:first-child,#top .socket_color.fullsize .template-blog .post_delimiter,.socket_color .related_posts.av-related-style-full a{border-color:var(--enfold-socket-color-border)} .socket_color .rounded-container,#top .socket_color .pagination a:hover,.socket_color .small-preview,.socket_color .fallback-post-type-icon{background:var(--enfold-socket-color-meta);color:var(--enfold-socket-color-bg)} .socket_color .av-default-color,#top .socket_color .av-force-default-color,.socket_color .av-catalogue-item,.socket_color .wp-playlist-item .wp-playlist-caption,.socket_color .wp-playlist{color:var(--enfold-socket-color-color)} .socket_color,.socket_color .site-background,.socket_color .first-quote,.socket_color .related_image_wrap,.socket_color .gravatar img.socket_color .hr_content,.socket_color .news-thumb,.socket_color .post-format-icon,.socket_color .ajax_controlls a,.socket_color .tweet-text.avatar_no,.socket_color .toggler,.socket_color .toggler.activeTitle:hover,.socket_color #js_sort_items,.socket_color.inner-entry,.socket_color .grid-entry-title,.socket_color .related-format-icon,.grid-entry .socket_color .avia-arrow,.socket_color .avia-gallery-big,.socket_color .avia-gallery-big,.socket_color .avia-gallery img,.socket_color .grid-content,.socket_color .av-share-box ul,#top .socket_color .av-related-style-full .related-format-icon,.socket_color .related_posts.av-related-style-full a:hover,.socket_color.avia-fullwidth-portfolio .pagination .current,.socket_color.avia-fullwidth-portfolio .pagination a,.socket_color .av-hotspot-fallback-tooltip-inner,.socket_color .av-hotspot-fallback-tooltip-count{background-color:var(--enfold-socket-color-bg);color:var(--enfold-socket-color-color)} .socket_color .avia-fold-unfold-section .av-fold-unfold-container::after{background:linear-gradient( to bottom,rgba(40,43,46,0),rgba(40,43,46,1) )} .socket_color .avia-fold-unfold-section .av-fold-button-container:not(.avia-button),.socket_color.avia-fold-unfold-section .av-fold-button-container:not(.avia-button){color:var(--enfold-socket-color-color)} .socket_color .avia-fold-unfold-section .av-fold-button-container.fold-button{background:var(--enfold-socket-color-bg);border-color:var(--enfold-socket-color-border)} .socket_color .avia-curtain-reveal-overlay{background:var(--enfold-socket-color-bg)} .socket_color .avia-icon-circles-icon{background:var(--enfold-socket-color-bg);border-color:var(--enfold-socket-color-border);color:var(--enfold-socket-color-color)} .socket_color .avia-icon-circles-icon.active{background:var(--enfold-socket-color-secondary);border-color:var(--enfold-socket-color-secondary);color:var(--enfold-socket-color-bg)} .socket_color .avia-icon-circles-icon-text{color:var(--enfold-socket-color-color);background:var(--enfold-socket-color-bg)} .socket_color .heading-color,.socket_color a.iconbox_icon:hover,.socket_color h1,.socket_color h2,.socket_color h3,.socket_color h4,.socket_color h5,.socket_color h6,.socket_color .sidebar .current_page_item>a,.socket_color .sidebar .current-menu-item>a,.socket_color .pagination .current,.socket_color .pagination a:hover,.socket_color strong.avia-testimonial-name,.socket_color .heading,.socket_color .toggle_content strong,.socket_color .toggle_content strong a,.socket_color .tab_content strong,.socket_color .tab_content strong a,.socket_color .asc_count,.socket_color .avia-testimonial-content strong,#top .socket_color .av-related-style-full .av-related-title,.socket_color .wp-playlist-item-meta.wp-playlist-item-title,#top .socket_color .av-no-image-slider h2 a,.socket_color .av-small-bar .avia-progress-bar .progressbar-title-wrap,.socket_color div .news-headline .news-title,.socket_color .av-default-style .av-countdown-cell-inner .av-countdown-time,.socket_color .av-default-style.av-countdown-timer.av-flip-numbers .card__top.card-time-color,.socket_color .av-default-style.av-countdown-timer.av-flip-numbers .card__bottom.card-time-color,.socket_color .av-default-style.av-countdown-timer.av-flip-numbers .card__back.card-time-color::before,.socket_color .av-default-style.av-countdown-timer.av-flip-clock .flip-clock__card .flip-clock-counter{color:var(--enfold-socket-color-heading)} .socket_color .av-countdown-timer.av-events-countdown a .av-countdown-time-label{color:var(--enfold-socket-color-color)} .socket_color .meta-color,.socket_color .sidebar,.socket_color .sidebar a,.socket_color .minor-meta,.socket_color .minor-meta a,.socket_color .text-sep,.socket_color blockquote,.socket_color .post_nav a,.socket_color .comment-text,.socket_color .side-container-inner,.socket_color .news-time,.socket_color .pagination a,.socket_color .pagination span,.socket_color .tweet-text.avatar_no .tweet-time,#top .socket_color .extra-mini-title,.socket_color .team-member-job-title,.socket_color .team-social a,.socket_color #js_sort_items a,.grid-entry-excerpt,.socket_color .avia-testimonial-subtitle,.socket_color .commentmetadata a,.socket_color .social_bookmarks a,.socket_color .meta-heading>*,.socket_color .slide-meta,.socket_color .slide-meta a,.socket_color .taglist,.socket_color .taglist a,.socket_color .phone-info,.socket_color .phone-info a,.socket_color .av-sort-by-term a,.socket_color .av-magazine-time,.socket_color .av-magazine .av-magazine-entry-icon,.socket_color .av-catalogue-content,.socket_color .wp-playlist-item-length,.html_modern-blog #top div .socket_color .blog-categories a,.html_modern-blog #top div .socket_color .blog-categories a:hover{color:var(--enfold-socket-color-meta)} .socket_color .special-heading-inner-border{border-color:var(--enfold-socket-color-color)}.socket_color .meta-heading .special-heading-inner-border{border-color:var(--enfold-socket-color-meta)} .socket_color a,.socket_color .widget_first,.socket_color strong,.socket_color b,.socket_color b a,.socket_color strong a,.socket_color #js_sort_items a:hover,.socket_color #js_sort_items a.active_sort,.socket_color .av-sort-by-term a.active_sort,.socket_color .special_amp,.socket_color .taglist a.activeFilter,.socket_color #commentform .required,#top .socket_color .av-no-color.av-icon-style-border a.av-icon-char,.html_elegant-blog #top .socket_color .blog-categories a,.html_elegant-blog #top .socket_color .blog-categories a:hover{color:var(--enfold-socket-color-primary)} .socket_color a:hover,.socket_color h1 a:hover,.socket_color h2 a:hover,.socket_color h3 a:hover,.socket_color h4 a:hover,.socket_color h5 a:hover,.socket_color h6 a:hover,.socket_color .template-search a.news-content:hover,.socket_color .wp-playlist-item .wp-playlist-caption:hover{color:var(--enfold-socket-color-secondary)} .socket_color .primary-background,.socket_color .primary-background a,div .socket_color .button,.socket_color #submit,.socket_color input[type='submit'],.socket_color .small-preview:hover,.socket_color .avia-menu-fx,.socket_color .avia-menu-fx .avia-arrow,.socket_color.iconbox_top .iconbox_icon,.socket_color .iconbox_top a.iconbox_icon:hover,.socket_color .avia-data-table th.avia-highlight-col,.socket_color .avia-color-theme-color,.socket_color .avia-color-theme-color:hover,.socket_color .image-overlay .image-overlay-inside:before,.socket_color .comment-count,.socket_color .av_dropcap2,.responsive #top .socket_color .av-open-submenu.av-subnav-menu > li > a:hover,#top .socket_color .av-open-submenu.av-subnav-menu li > ul a:hover,.socket_color .av-colored-style .av-countdown-cell-inner,.socket_color .wc-block-components-button:not(.is-link){background-color:var(--enfold-socket-color-primary);color:var(--enfold-socket-color-constant-font);border-color:var(--enfold-socket-color-button-border)} .socket_color .av-colored-style.av-countdown-timer.av-flip-numbers .card__top,.socket_color .av-colored-style.av-countdown-timer.av-flip-numbers .card__bottom,.socket_color .av-colored-style.av-countdown-timer.av-flip-numbers .card__back::before,.socket_color .av-colored-style.av-countdown-timer.av-flip-numbers .card__back::after,.socket_color .av-colored-style.av-countdown-timer.av-flip-clock .flip-clock-counter{background-color:var(--enfold-socket-color-primary);color:var(--enfold-socket-color-constant-font)} #top #wrap_all .socket_color .av-menu-button-colored > a .avia-menu-text{background-color:var(--enfold-socket-color-primary);color:var(--enfold-socket-color-constant-font);border-color:var(--enfold-socket-color-primary)} #top #wrap_all .socket_color .av-menu-button-colored > a .avia-menu-text:after{background-color:var(--enfold-socket-color-button-border)} #top .socket_color .mobile_menu_toggle{color:var(--enfold-socket-color-primary);background:var(--enfold-socket-color-bg)} #top .socket_color .av-menu-mobile-active .av-subnav-menu > li > a:before{color:var(--enfold-socket-color-primary)} #top .socket_color .av-open-submenu.av-subnav-menu > li > a:hover:before{color:var(--enfold-socket-color-bg)} .socket_color .button:hover,.socket_color .ajax_controlls a:hover,.socket_color #submit:hover,.socket_color .big_button:hover,.socket_color .contentSlideControlls a:hover,.socket_color #submit:hover ,.socket_color input[type='submit']:hover{background-color:var(--enfold-socket-color-secondary);color:var(--enfold-socket-color-bg);border-color:var(--enfold-socket-color-button-border2)} .socket_color .avia-toc-style-elegant a.avia-toc-level-0:last-child:after,.socket_color .avia-toc-style-elegant a:first-child:after,.socket_color .avia-toc-style-elegant a.avia-toc-level-0:after{background-color:var(--enfold-socket-color-bg);border-color:var(--enfold-socket-color-secondary)} .socket_color .avia-toc-style-elegant a:first-child span:after,.socket_color .avia-toc-style-elegant a.avia-toc-level-0 span:after{background-color:var(--enfold-socket-color-bg)} .socket_color .avia-toc-style-elegant a:first-child:hover span:after,.socket_color .avia-toc-style-elegant a.avia-toc-level-0:hover span:after{border-color:var(--enfold-socket-color-secondary)} .socket_color .avia-toc-style-elegant a:before{border-color:var(--enfold-socket-color-border)} .socket_color .avia-toc-style-elegant a:first-child:after,.socket_color .avia-toc-style-elegant a.avia-toc-level-0:after{border-color:var(--enfold-socket-color-secondary);background-color:var(--enfold-socket-color-bg)} .socket_color .avia-toc-style-elegant a:last-child:after{background-color:var(--enfold-socket-color-border)} .socket_color .timeline-bullet{background-color:var(--enfold-socket-color-border);border-color:var(--enfold-socket-color-bg)} .socket_color table,.socket_color .widget_nav_menu ul:first-child>.current-menu-item,.socket_color .widget_nav_menu ul:first-child>.current_page_item,.socket_color .widget_nav_menu ul:first-child>.current-menu-ancestor,.socket_color .pagination .current,.socket_color .pagination a,.socket_color.iconbox_top .iconbox_content,.socket_color .av_promobox,.socket_color .toggle_content,.socket_color .toggler:hover,#top .socket_color .av-minimal-toggle .toggler,.socket_color .related_posts_default_image,.socket_color .search-result-counter,.socket_color .container_wrap_meta,.socket_color .avia-content-slider .slide-image,.socket_color .avia-slider-testimonials .avia-testimonial-content,.socket_color .avia-testimonial-arrow-wrap .avia-arrow,.socket_color .news-thumb,.socket_color .portfolio-preview-content,.socket_color .portfolio-preview-content .avia-arrow,.socket_color .av-magazine .av-magazine-entry-icon,.socket_color .related_posts.av-related-style-full a,.socket_color .aviaccordion-slide,.socket_color.avia-fullwidth-portfolio .pagination,.socket_color .isotope-item.special_av_fullwidth .av_table_col.portfolio-grid-image,.socket_color .av-catalogue-list li:hover,.socket_color .wp-playlist,.socket_color .avia-slideshow-fixed-height > li,.socket_color .avia-form-success,.socket_color .avia-form-error,.socket_color .av-boxed-grid-style .avia-testimonial{background:var(--enfold-socket-color-bg2)} #top .socket_color .post_timeline li:hover .timeline-bullet{background-color:var(--enfold-socket-color-secondary)} .socket_color blockquote,.socket_color .avia-bullet,.socket_color .av-no-color.av-icon-style-border a.av-icon-char{border-color:var(--enfold-socket-color-primary)} .html_header_top .socket_color .main_menu ul:first-child >li > ul,.html_header_top #top .socket_color .avia_mega_div > .sub-menu{border-top-color:var(--enfold-socket-color-primary)} .socket_color .breadcrumb,.socket_color .breadcrumb a,#top .socket_color.title_container .main-title,#top .socket_color.title_container .main-title a{color:var(--enfold-socket-color-color)} .socket_color .av-icon-display,#top .socket_color .av-related-style-full a:hover .related-format-icon,.socket_color .av-default-style .av-countdown-cell-inner,.socket_color .av-default-style.av-countdown-timer.av-flip-numbers .card__top,.socket_color .av-default-style.av-countdown-timer.av-flip-numbers .card__bottom,.socket_color .av-default-style.av-countdown-timer.av-flip-numbers .card__back::before,.socket_color .av-default-style.av-countdown-timer.av-flip-numbers .card__back::after,.socket_color .av-default-style.av-countdown-timer.av-flip-clock .flip-clock-counter{background-color:var(--enfold-socket-color-bg2);color:var(--enfold-socket-color-meta)} .socket_color .av-masonry-entry:hover .av-icon-display{background-color:var(--enfold-socket-color-primary);color:var(--enfold-socket-color-constant-font);border-color:var(--enfold-socket-color-button-border)} #top .socket_color .av-masonry-entry.format-quote:hover .av-icon-display{color:var(--enfold-socket-color-primary)} .socket_color textarea::placeholder,.socket_color input::placeholder{color:var(--enfold-socket-color-meta);opacity:0.5} .socket_color .header_bg,.socket_color .main_menu ul ul,.socket_color .main_menu .menu ul li a,.socket_color .pointer_arrow_wrap .pointer_arrow,.socket_color .avia_mega_div,.socket_color .av-subnav-menu > li ul,.socket_color .av-subnav-menu a{background-color:var(--enfold-socket-color-bg);color:var(--enfold-socket-color-meta)} .socket_color .main_menu .menu ul li a:hover,.socket_color .main_menu .menu ul li a:focus,.socket_color .av-subnav-menu ul a:hover,.socket_color .av-subnav-menu ul a:focus{background-color:var(--enfold-socket-color-bg2)} .socket_color .sub_menu>ul>li>a,.socket_color .sub_menu>div>ul>li>a,.socket_color .main_menu ul:first-child > li > a,#top .socket_color .main_menu .menu ul .current_page_item > a,#top .socket_color .main_menu .menu ul .current-menu-item > a,#top .socket_color .sub_menu li ul a{color:var(--enfold-socket-color-meta)} #top .socket_color .main_menu .menu ul li > a:hover,#top .socket_color .main_menu .menu ul li > a:focus{color:var(--enfold-socket-color-color)} .socket_color .av-subnav-menu a:hover,.socket_color .av-subnav-menu a:focus,.socket_color .main_menu ul:first-child > li a:hover,.socket_color .main_menu ul:first-child > li a:focus,.socket_color .main_menu ul:first-child > li.current-menu-item > a,.socket_color .main_menu ul:first-child > li.current_page_item > a,.socket_color .main_menu ul:first-child > li.active-parent-item > a{color:var(--enfold-socket-color-color)} #top .socket_color .main_menu .menu .avia_mega_div ul .current-menu-item > a{color:var(--enfold-socket-color-primary)} .socket_color .sub_menu > ul > li > a:hover,.socket_color .sub_menu > ul > li > a:focus,.socket_color .sub_menu > div > ul > li > a:hover,.socket_color .sub_menu > div > ul > li > a:focus{color:var(--enfold-socket-color-color)} #top .socket_color .sub_menu ul li a:hover,#top .socket_color .sub_menu ul li a:focus,.socket_color .sub_menu ul:first-child > li.current-menu-item > a,.socket_color .sub_menu ul:first-child > li.current_page_item > a,.socket_color .sub_menu ul:first-child > li.active-parent-item > a{color:var(--enfold-socket-color-color)} .socket_color .sub_menu li ul a,.socket_color #payment,.socket_color .sub_menu ul li,.socket_color .sub_menu ul,#top .socket_color .sub_menu li li a:hover,#top .socket_color .sub_menu li li a:focus{background-color:var(--enfold-socket-color-bg)} .socket_color#header .avia_mega_div > .sub-menu.avia_mega_hr,.html_bottom_nav_header.html_logo_center #top #menu-item-search>a{border-color:var(--enfold-socket-color-border)} #top .socket_color .widget_pages ul li a:focus,#top .socket_color .widget_nav_menu ul li a:focus{color:var(--enfold-socket-color-secondary)} @media only screen and (max-width:767px){#top #wrap_all .av_header_transparency{background-color:var(--enfold-socket-color-bg);color:var(--enfold-socket-color-color);border-color:var(--enfold-socket-color-border)}} @media only screen and (max-width:989px){.html_mobile_menu_tablet #top #wrap_all .av_header_transparency{background-color:var(--enfold-socket-color-bg);color:var(--enfold-socket-color-color);border-color:var(--enfold-socket-color-border)}} .socket_color .avia-tt,.socket_color .avia-tt .avia-arrow,.socket_color .avia-tt .avia-arrow{background-color:var(--enfold-socket-color-bg);color:var(--enfold-socket-color-meta)} .socket_color .av_ajax_search_image{background-color:var(--enfold-socket-color-primary);color:var(--enfold-socket-color-bg)} .socket_color .ajax_search_excerpt{color:var(--enfold-socket-color-meta)} .socket_color .av_ajax_search_title{color:var(--enfold-socket-color-heading)} .socket_color .ajax_load{background-color:var(--enfold-socket-color-primary)} .socket_color .av_searchsubmit_wrapper{background-color:var(--enfold-socket-color-primary)} #top .socket_color .avia-color-theme-color{color:var(--enfold-socket-color-button-font);border-color:var(--enfold-socket-color-button-border)} .socket_color .avia-color-theme-color-subtle{background-color:var(--enfold-socket-color-bg2);color:var(--enfold-socket-color-color)} .socket_color .avia-color-theme-color-subtle:hover{background-color:var(--enfold-socket-color-bg);color:var(--enfold-socket-color-heading)} #top .socket_color .avia-color-theme-color-highlight{color:var(--enfold-socket-color-button-font);border-color:var(--enfold-socket-color-secondary);background-color:var(--enfold-socket-color-secondary)} #top .socket_color .avia-font-color-theme-color,#top .socket_color .avia-font-color-theme-color-hover:hover{color:var(--enfold-socket-color-button-font)} .socket_color .avia-font-color-theme-color-subtle{color:var(--enfold-socket-color-color)} .socket_color .avia-font-color-theme-color-subtle-hover:hover{color:var(--enfold-socket-color-heading)} #top .socket_color .avia-font-color-theme-color-highlight,#top .socket_color .avia-font-color-theme-color-highlight-hover:hover{color:var(--enfold-socket-color-button-font)} .socket_color .avia-icon-list .iconlist_icon{background-color:var(--enfold-socket-color-iconlist)} .socket_color .avia-icon-list .iconlist-timeline{border-color:var(--enfold-socket-color-border)} .socket_color .iconlist_content{color:var(--enfold-socket-color-meta)} .socket_color .avia-timeline .milestone_icon{background-color:var(--enfold-socket-color-timeline)} .socket_color .avia-timeline .milestone_inner{background-color:var(--enfold-socket-color-timeline)} .socket_color .avia-timeline{border-color:var(--enfold-socket-color-timeline)} .socket_color .av-milestone-icon-wrap:after{border-color:var(--enfold-socket-color-timeline)} .socket_color .avia-timeline .av-milestone-date{color:var(--enfold-socket-color-timeline-date)} .socket_color .avia-timeline .av-milestone-date span{background-color:var(--enfold-socket-color-timeline)} .socket_color .avia-timeline-horizontal .av-milestone-content-wrap footer{background-color:var(--enfold-socket-color-timeline)} .socket_color .av-timeline-nav a{background-color:var(--enfold-socket-color-timeline)} #top .socket_color .input-text,#top .socket_color input[type='text'],#top .socket_color input[type='input'],#top .socket_color input[type='password'],#top .socket_color input[type='email'],#top .socket_color input[type='number'],#top .socket_color input[type='url'],#top .socket_color input[type='tel'],#top .socket_color input[type='search'],#top .socket_color textarea,#top .socket_color select{border-color:var(--enfold-socket-color-border);background-color:var(--enfold-socket-color-bg2);color:var(--enfold-socket-color-meta)} #top .socket_color .invers-color .input-text,#top .socket_color .invers-color input[type='text'],#top .socket_color .invers-color input[type='input'],#top .socket_color .invers-color input[type='password'],#top .socket_color .invers-color input[type='email'],#top .socket_color .invers-color input[type='number'],#top .socket_color .invers-color input[type='url'],#top .socket_color .invers-color input[type='tel'],#top .socket_color .invers-color input[type='search'],#top .socket_color .invers-color textarea,#top .socket_color .invers-color select{background-color:var(--enfold-socket-color-bg)} .socket_color .required{color:var(--enfold-socket-color-primary)} .socket_color .av-masonry{background-color:var(--enfold-socket-color-masonry)} .socket_color .av-masonry-pagination,.socket_color .av-masonry-pagination:hover,.socket_color .av-masonry-outerimage-container{background-color:var(--enfold-socket-color-bg)} .socket_color .container .av-inner-masonry-content,#top .socket_color .container .av-masonry-load-more,#top .socket_color .container .av-masonry-sort,.socket_color .container .av-masonry-entry .avia-arrow{background-color:var(--enfold-socket-color-bg2)} .socket_color .hr-short .hr-inner-style,.socket_color .hr-short .hr-inner{background-color:var(--enfold-socket-color-bg)} div .socket_color .tabcontainer .active_tab_content,div .socket_color .tabcontainer .active_tab{background-color:var(--enfold-socket-color-bg2);color:var(--enfold-socket-color-color)} .responsive.js_active #top .socket_color .avia_combo_widget .top_tab .tab{border-top-color:var(--enfold-socket-color-border)} .socket_color .template-archives .tabcontainer a,#top .socket_color .tabcontainer .tab:hover,#top .socket_color .tabcontainer .tab.active_tab{color:var(--enfold-socket-color-color)} .socket_color .template-archives .tabcontainer a:hover{color:var(--enfold-socket-color-secondary)} .socket_color .sidebar_tab_icon{background-color:var(--enfold-socket-color-border)} #top .socket_color .sidebar_active_tab .sidebar_tab_icon{background-color:var(--enfold-socket-color-primary)} .socket_color .sidebar_tab:hover .sidebar_tab_icon{background-color:var(--enfold-socket-color-secondary)} .socket_color .sidebar_tab,.socket_color .tabcontainer .tab{color:var(--enfold-socket-color-meta)} .socket_color div .sidebar_active_tab ,div .socket_color .tabcontainer.noborder_tabs .active_tab_content,div .socket_color .tabcontainer.noborder_tabs .active_tab{color:var(--enfold-socket-color-color);background-color:var(--enfold-socket-color-bg)} #top .socket_color .avia-smallarrow-slider .avia-slideshow-dots a{background-color:var(--enfold-socket-color-bg2)} #top .socket_color .avia-smallarrow-slider .avia-slideshow-dots a.active,#top .socket_color .avia-smallarrow-slider .avia-slideshow-dots a:hover{background-color:var(--enfold-socket-color-meta)} @media only screen and (max-width:767px){.responsive #top .socket_color .tabcontainer .active_tab{background-color:var(--enfold-socket-color-secondary);color:var(--enfold-socket-color-constant-font)} .responsive #top .socket_color .tabcontainer{border-color:var(--enfold-socket-color-border)} .responsive #top .socket_color .active_tab_content{background-color:var(--enfold-socket-color-bg2)}} .socket_color tr:nth-child(even),.socket_color .avia-data-table .avia-heading-row .avia-desc-col,.socket_color .avia-data-table .avia-highlight-col,.socket_color .pricing-table>li:nth-child(even),body .socket_color .pricing-table.avia-desc-col li,#top .socket_color .avia-data-table.avia_pricing_minimal th{background-color:var(--enfold-socket-color-bg);color:var(--enfold-socket-color-color)} .socket_color table caption,.socket_color tr:nth-child(even),.socket_color .pricing-table>li:nth-child(even),#top .socket_color .avia-data-table.avia_pricing_minimal td{color:var(--enfold-socket-color-meta)} .socket_color tr:nth-child(odd),.socket_color .pricing-table>li:nth-child(odd),.socket_color .pricing-extra{background:var(--enfold-socket-color-bg2)} .socket_color .pricing-table li.avia-pricing-row,.socket_color .pricing-table li.avia-heading-row,.socket_color .pricing-table li.avia-pricing-row .pricing-extra{background-color:var(--enfold-socket-color-primary);color:var(--enfold-socket-color-constant-font);border-color:var(--enfold-socket-color-stripe)} .socket_color .pricing-table li.avia-heading-row,.socket_color .pricing-table li.avia-heading-row .pricing-extra{background-color:var(--enfold-socket-color-stripe2);color:var(--enfold-socket-color-constant-font);border-color:var(--enfold-socket-color-stripe)} .socket_color .pricing-table.avia-desc-col .avia-heading-row,.socket_color .pricing-table.avia-desc-col .avia-pricing-row{border-color:var(--enfold-socket-color-border)} .socket_color .theme-color-bar .bar{background:var(--enfold-socket-color-primary)} .socket_color .mejs-controls .mejs-time-rail .mejs-time-current,.socket_color .mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-current,.socket_color .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current,.socket_color .button.av-sending-button,.socket_color .av-striped-bar .theme-color-bar .bar{background:var(--enfold-socket-color-primary)} body .socket_color .mejs-controls .mejs-time-rail .mejs-time-float{background:var(--enfold-socket-color-primary);color:#fff} body .socket_color .mejs-controls .mejs-time-rail .mejs-time-float-corner{border:solid 4px var(--enfold-socket-color-primary);border-color:var(--enfold-socket-color-primary) transparent transparent transparent} .socket_color .progress{background-color:var(--enfold-socket-color-bg2)} .socket_color .av_searchform_element_results .av_ajax_search_entry,.socket_color .av_searchform_element_results .av_ajax_search_title,.socket_color.av_searchform_element_results .av_ajax_search_entry,.socket_color.av_searchform_element_results .av_ajax_search_title{color:var(--enfold-socket-color-primary)} .socket_color .av_searchform_element_results .ajax_search_excerpt,.socket_color.av_searchform_element_results .ajax_search_excerpt{color:var(--enfold-socket-color-meta)} .socket_color .av_searchform_element_results .av_ajax_search_image,.socket_color.av_searchform_element_results .av_ajax_search_image{color:var(--enfold-socket-color-meta)} .socket_color .button.av-sending-button{background:var(--enfold-socket-color-secondary);background-image:linear-gradient(-45deg,var(--enfold-socket-color-secondary) 25%,var(--enfold-socket-color-stripe2nd) 25%,var(--enfold-socket-color-stripe2nd) 50%,var(--enfold-socket-color-secondary) 50%,var(--enfold-socket-color-secondary) 75%,var(--enfold-socket-color-stripe2nd) 75%,var(--enfold-socket-color-stripe2nd));border-color:var(--enfold-socket-color-secondary)} .socket_color span.bbp-admin-links a{color:var(--enfold-socket-color-primary)} .socket_color span.bbp-admin-links a:hover{color:var(--enfold-socket-color-secondary)} #top .socket_color .bbp-reply-content,#top .socket_color .bbp-topic-content,#top .socket_color .bbp-body .super-sticky .page-numbers,#top .socket_color .bbp-body .sticky .page-numbers,#top .socket_color .bbp-pagination-links a:hover,#top .socket_color .bbp-pagination-links span.current{background:var(--enfold-socket-color-bg)} #top .socket_color .bbp-topics .bbp-header,#top .socket_color .bbp-topics .bbp-header,#top .socket_color .bbp-forums .bbp-header,#top .socket_color .bbp-topics-front ul.super-sticky,#top .socket_color .bbp-topics ul.super-sticky,#top .socket_color .bbp-topics ul.sticky,#top .socket_color .bbp-forum-content ul.sticky,#top .socket_color .bbp-body .page-numbers{background-color:var(--enfold-socket-color-bg2)} #top .socket_color .bbp-meta,#top .socket_color .bbp-author-role,#top .socket_color .bbp-author-ip,#top .socket_color .bbp-pagination-count,#top .socket_color .bbp-topics .bbp-body .bbp-topic-title:before{color:var(--enfold-socket-color-meta)} #top .socket_color .bbp-admin-links{color:var(--enfold-socket-color-border)} .socket_color #bbpress-forums li.bbp-body ul.forum,.socket_color #bbpress-forums li.bbp-body ul.topic,.avia_transform .socket_color .bbp-replies .bbp-reply-author:before,.avia_transform .forum-search .socket_color .bbp-reply-author:before,.avia_transform .forum-search .socket_color .bbp-topic-author:before{background-color:var(--enfold-socket-color-bg);border-color:var(--enfold-socket-color-border)} #top .socket_color .bbp-author-name{color:var(--enfold-socket-color-heading)} .socket_color .widget_display_stats dt,.socket_color .widget_display_stats dd{background-color:var(--enfold-socket-color-bg2)} html,#scroll-top-link,#av-cookie-consent-badge{background-color:var(--enfold-socket-color-bg)} #scroll-top-link,#av-cookie-consent-badge{color:var(--enfold-socket-color-color);border:1px solid var(--enfold-socket-color-border)} .footer_color,.footer_color div,.footer_color header,.footer_color main,.footer_color aside,.footer_color footer,.footer_color article,.footer_color nav,.footer_color section,.footer_color span,.footer_color applet,.footer_color object,.footer_color iframe,.footer_color h1,.footer_color h2,.footer_color h3,.footer_color h4,.footer_color h5,.footer_color h6,.footer_color p,.footer_color blockquote,.footer_color pre,.footer_color a,.footer_color abbr,.footer_color acronym,.footer_color address,.footer_color big,.footer_color cite,.footer_color code,.footer_color del,.footer_color dfn,.footer_color em,.footer_color img,.footer_color ins,.footer_color kbd,.footer_color q,.footer_color s,.footer_color samp,.footer_color small,.footer_color strike,.footer_color strong,.footer_color sub,.footer_color sup,.footer_color tt,.footer_color var,.footer_color b,.footer_color u,.footer_color i,.footer_color center,.footer_color dl,.footer_color dt,.footer_color dd,.footer_color ol,.footer_color ul,.footer_color li,.footer_color fieldset,.footer_color form,.footer_color label,.footer_color legend,.footer_color table,.footer_color caption,.footer_color tbody,.footer_color tfoot,.footer_color thead,.footer_color tr,.footer_color th,.footer_color td,.footer_color article,.footer_color aside,.footer_color canvas,.footer_color details,.footer_color embed,.footer_color figure,.footer_color fieldset,.footer_color figcaption,.footer_color footer,.footer_color header,.footer_color hgroup,.footer_color menu,.footer_color nav,.footer_color output,.footer_color ruby,.footer_color section,.footer_color summary,.footer_color time,.footer_color mark,.footer_color audio,.footer_color video,#top .footer_color .pullquote_boxed,.responsive #top .footer_color .avia-testimonial,.responsive #top.avia-blank #main .footer_color.container_wrap:first-child,#top .footer_color.fullsize .template-blog .post_delimiter,.footer_color .related_posts.av-related-style-full a{border-color:var(--enfold-footer-color-border)} .footer_color .rounded-container,#top .footer_color .pagination a:hover,.footer_color .small-preview,.footer_color .fallback-post-type-icon{background:var(--enfold-footer-color-meta);color:var(--enfold-footer-color-bg)} .footer_color .av-default-color,#top .footer_color .av-force-default-color,.footer_color .av-catalogue-item,.footer_color .wp-playlist-item .wp-playlist-caption,.footer_color .wp-playlist{color:var(--enfold-footer-color-color)} .footer_color,.footer_color .site-background,.footer_color .first-quote,.footer_color .related_image_wrap,.footer_color .gravatar img.footer_color .hr_content,.footer_color .news-thumb,.footer_color .post-format-icon,.footer_color .ajax_controlls a,.footer_color .tweet-text.avatar_no,.footer_color .toggler,.footer_color .toggler.activeTitle:hover,.footer_color #js_sort_items,.footer_color.inner-entry,.footer_color .grid-entry-title,.footer_color .related-format-icon,.grid-entry .footer_color .avia-arrow,.footer_color .avia-gallery-big,.footer_color .avia-gallery-big,.footer_color .avia-gallery img,.footer_color .grid-content,.footer_color .av-share-box ul,#top .footer_color .av-related-style-full .related-format-icon,.footer_color .related_posts.av-related-style-full a:hover,.footer_color.avia-fullwidth-portfolio .pagination .current,.footer_color.avia-fullwidth-portfolio .pagination a,.footer_color .av-hotspot-fallback-tooltip-inner,.footer_color .av-hotspot-fallback-tooltip-count{background-color:var(--enfold-footer-color-bg);color:var(--enfold-footer-color-color)} .footer_color .avia-fold-unfold-section .av-fold-unfold-container::after{background:linear-gradient( to bottom,rgba(53,56,60,0),rgba(53,56,60,1) )} .footer_color .avia-fold-unfold-section .av-fold-button-container:not(.avia-button),.footer_color.avia-fold-unfold-section .av-fold-button-container:not(.avia-button){color:var(--enfold-footer-color-color)} .footer_color .avia-fold-unfold-section .av-fold-button-container.fold-button{background:var(--enfold-footer-color-bg);border-color:var(--enfold-footer-color-border)} .footer_color .avia-curtain-reveal-overlay{background:var(--enfold-footer-color-bg)} .footer_color .avia-icon-circles-icon{background:var(--enfold-footer-color-bg);border-color:var(--enfold-footer-color-border);color:var(--enfold-footer-color-color)} .footer_color .avia-icon-circles-icon.active{background:var(--enfold-footer-color-secondary);border-color:var(--enfold-footer-color-secondary);color:var(--enfold-footer-color-bg)} .footer_color .avia-icon-circles-icon-text{color:var(--enfold-footer-color-color);background:var(--enfold-footer-color-bg)} .footer_color .heading-color,.footer_color a.iconbox_icon:hover,.footer_color h1,.footer_color h2,.footer_color h3,.footer_color h4,.footer_color h5,.footer_color h6,.footer_color .sidebar .current_page_item>a,.footer_color .sidebar .current-menu-item>a,.footer_color .pagination .current,.footer_color .pagination a:hover,.footer_color strong.avia-testimonial-name,.footer_color .heading,.footer_color .toggle_content strong,.footer_color .toggle_content strong a,.footer_color .tab_content strong,.footer_color .tab_content strong a,.footer_color .asc_count,.footer_color .avia-testimonial-content strong,#top .footer_color .av-related-style-full .av-related-title,.footer_color .wp-playlist-item-meta.wp-playlist-item-title,#top .footer_color .av-no-image-slider h2 a,.footer_color .av-small-bar .avia-progress-bar .progressbar-title-wrap,.footer_color div .news-headline .news-title,.footer_color .av-default-style .av-countdown-cell-inner .av-countdown-time,.footer_color .av-default-style.av-countdown-timer.av-flip-numbers .card__top.card-time-color,.footer_color .av-default-style.av-countdown-timer.av-flip-numbers .card__bottom.card-time-color,.footer_color .av-default-style.av-countdown-timer.av-flip-numbers .card__back.card-time-color::before,.footer_color .av-default-style.av-countdown-timer.av-flip-clock .flip-clock__card .flip-clock-counter{color:var(--enfold-footer-color-heading)} .footer_color .av-countdown-timer.av-events-countdown a .av-countdown-time-label{color:var(--enfold-footer-color-color)} .footer_color .meta-color,.footer_color .sidebar,.footer_color .sidebar a,.footer_color .minor-meta,.footer_color .minor-meta a,.footer_color .text-sep,.footer_color blockquote,.footer_color .post_nav a,.footer_color .comment-text,.footer_color .side-container-inner,.footer_color .news-time,.footer_color .pagination a,.footer_color .pagination span,.footer_color .tweet-text.avatar_no .tweet-time,#top .footer_color .extra-mini-title,.footer_color .team-member-job-title,.footer_color .team-social a,.footer_color #js_sort_items a,.grid-entry-excerpt,.footer_color .avia-testimonial-subtitle,.footer_color .commentmetadata a,.footer_color .social_bookmarks a,.footer_color .meta-heading>*,.footer_color .slide-meta,.footer_color .slide-meta a,.footer_color .taglist,.footer_color .taglist a,.footer_color .phone-info,.footer_color .phone-info a,.footer_color .av-sort-by-term a,.footer_color .av-magazine-time,.footer_color .av-magazine .av-magazine-entry-icon,.footer_color .av-catalogue-content,.footer_color .wp-playlist-item-length,.html_modern-blog #top div .footer_color .blog-categories a,.html_modern-blog #top div .footer_color .blog-categories a:hover{color:var(--enfold-footer-color-meta)} .footer_color .special-heading-inner-border{border-color:var(--enfold-footer-color-color)}.footer_color .meta-heading .special-heading-inner-border{border-color:var(--enfold-footer-color-meta)} .footer_color a,.footer_color .widget_first,.footer_color strong,.footer_color b,.footer_color b a,.footer_color strong a,.footer_color #js_sort_items a:hover,.footer_color #js_sort_items a.active_sort,.footer_color .av-sort-by-term a.active_sort,.footer_color .special_amp,.footer_color .taglist a.activeFilter,.footer_color #commentform .required,#top .footer_color .av-no-color.av-icon-style-border a.av-icon-char,.html_elegant-blog #top .footer_color .blog-categories a,.html_elegant-blog #top .footer_color .blog-categories a:hover{color:var(--enfold-footer-color-primary)} .footer_color a:hover,.footer_color h1 a:hover,.footer_color h2 a:hover,.footer_color h3 a:hover,.footer_color h4 a:hover,.footer_color h5 a:hover,.footer_color h6 a:hover,.footer_color .template-search a.news-content:hover,.footer_color .wp-playlist-item .wp-playlist-caption:hover{color:var(--enfold-footer-color-secondary)} .footer_color .primary-background,.footer_color .primary-background a,div .footer_color .button,.footer_color #submit,.footer_color input[type='submit'],.footer_color .small-preview:hover,.footer_color .avia-menu-fx,.footer_color .avia-menu-fx .avia-arrow,.footer_color.iconbox_top .iconbox_icon,.footer_color .iconbox_top a.iconbox_icon:hover,.footer_color .avia-data-table th.avia-highlight-col,.footer_color .avia-color-theme-color,.footer_color .avia-color-theme-color:hover,.footer_color .image-overlay .image-overlay-inside:before,.footer_color .comment-count,.footer_color .av_dropcap2,.responsive #top .footer_color .av-open-submenu.av-subnav-menu > li > a:hover,#top .footer_color .av-open-submenu.av-subnav-menu li > ul a:hover,.footer_color .av-colored-style .av-countdown-cell-inner,.footer_color .wc-block-components-button:not(.is-link){background-color:var(--enfold-footer-color-primary);color:var(--enfold-footer-color-constant-font);border-color:var(--enfold-footer-color-button-border)} .footer_color .av-colored-style.av-countdown-timer.av-flip-numbers .card__top,.footer_color .av-colored-style.av-countdown-timer.av-flip-numbers .card__bottom,.footer_color .av-colored-style.av-countdown-timer.av-flip-numbers .card__back::before,.footer_color .av-colored-style.av-countdown-timer.av-flip-numbers .card__back::after,.footer_color .av-colored-style.av-countdown-timer.av-flip-clock .flip-clock-counter{background-color:var(--enfold-footer-color-primary);color:var(--enfold-footer-color-constant-font)} #top #wrap_all .footer_color .av-menu-button-colored > a .avia-menu-text{background-color:var(--enfold-footer-color-primary);color:var(--enfold-footer-color-constant-font);border-color:var(--enfold-footer-color-primary)} #top #wrap_all .footer_color .av-menu-button-colored > a .avia-menu-text:after{background-color:var(--enfold-footer-color-button-border)} #top .footer_color .mobile_menu_toggle{color:var(--enfold-footer-color-primary);background:var(--enfold-footer-color-bg)} #top .footer_color .av-menu-mobile-active .av-subnav-menu > li > a:before{color:var(--enfold-footer-color-primary)} #top .footer_color .av-open-submenu.av-subnav-menu > li > a:hover:before{color:var(--enfold-footer-color-bg)} .footer_color .button:hover,.footer_color .ajax_controlls a:hover,.footer_color #submit:hover,.footer_color .big_button:hover,.footer_color .contentSlideControlls a:hover,.footer_color #submit:hover ,.footer_color input[type='submit']:hover{background-color:var(--enfold-footer-color-secondary);color:var(--enfold-footer-color-bg);border-color:var(--enfold-footer-color-button-border2)} .footer_color .avia-toc-style-elegant a.avia-toc-level-0:last-child:after,.footer_color .avia-toc-style-elegant a:first-child:after,.footer_color .avia-toc-style-elegant a.avia-toc-level-0:after{background-color:var(--enfold-footer-color-bg);border-color:var(--enfold-footer-color-secondary)} .footer_color .avia-toc-style-elegant a:first-child span:after,.footer_color .avia-toc-style-elegant a.avia-toc-level-0 span:after{background-color:var(--enfold-footer-color-bg)} .footer_color .avia-toc-style-elegant a:first-child:hover span:after,.footer_color .avia-toc-style-elegant a.avia-toc-level-0:hover span:after{border-color:var(--enfold-footer-color-secondary)} .footer_color .avia-toc-style-elegant a:before{border-color:var(--enfold-footer-color-border)} .footer_color .avia-toc-style-elegant a:first-child:after,.footer_color .avia-toc-style-elegant a.avia-toc-level-0:after{border-color:var(--enfold-footer-color-secondary);background-color:var(--enfold-footer-color-bg)} .footer_color .avia-toc-style-elegant a:last-child:after{background-color:var(--enfold-footer-color-border)} .footer_color .timeline-bullet{background-color:var(--enfold-footer-color-border);border-color:var(--enfold-footer-color-bg)} .footer_color table,.footer_color .widget_nav_menu ul:first-child>.current-menu-item,.footer_color .widget_nav_menu ul:first-child>.current_page_item,.footer_color .widget_nav_menu ul:first-child>.current-menu-ancestor,.footer_color .pagination .current,.footer_color .pagination a,.footer_color.iconbox_top .iconbox_content,.footer_color .av_promobox,.footer_color .toggle_content,.footer_color .toggler:hover,#top .footer_color .av-minimal-toggle .toggler,.footer_color .related_posts_default_image,.footer_color .search-result-counter,.footer_color .container_wrap_meta,.footer_color .avia-content-slider .slide-image,.footer_color .avia-slider-testimonials .avia-testimonial-content,.footer_color .avia-testimonial-arrow-wrap .avia-arrow,.footer_color .news-thumb,.footer_color .portfolio-preview-content,.footer_color .portfolio-preview-content .avia-arrow,.footer_color .av-magazine .av-magazine-entry-icon,.footer_color .related_posts.av-related-style-full a,.footer_color .aviaccordion-slide,.footer_color.avia-fullwidth-portfolio .pagination,.footer_color .isotope-item.special_av_fullwidth .av_table_col.portfolio-grid-image,.footer_color .av-catalogue-list li:hover,.footer_color .wp-playlist,.footer_color .avia-slideshow-fixed-height > li,.footer_color .avia-form-success,.footer_color .avia-form-error,.footer_color .av-boxed-grid-style .avia-testimonial{background:var(--enfold-footer-color-bg2)} #top .footer_color .post_timeline li:hover .timeline-bullet{background-color:var(--enfold-footer-color-secondary)} .footer_color blockquote,.footer_color .avia-bullet,.footer_color .av-no-color.av-icon-style-border a.av-icon-char{border-color:var(--enfold-footer-color-primary)} .html_header_top .footer_color .main_menu ul:first-child >li > ul,.html_header_top #top .footer_color .avia_mega_div > .sub-menu{border-top-color:var(--enfold-footer-color-primary)} .footer_color .breadcrumb,.footer_color .breadcrumb a,#top .footer_color.title_container .main-title,#top .footer_color.title_container .main-title a{color:var(--enfold-footer-color-color)} .footer_color .av-icon-display,#top .footer_color .av-related-style-full a:hover .related-format-icon,.footer_color .av-default-style .av-countdown-cell-inner,.footer_color .av-default-style.av-countdown-timer.av-flip-numbers .card__top,.footer_color .av-default-style.av-countdown-timer.av-flip-numbers .card__bottom,.footer_color .av-default-style.av-countdown-timer.av-flip-numbers .card__back::before,.footer_color .av-default-style.av-countdown-timer.av-flip-numbers .card__back::after,.footer_color .av-default-style.av-countdown-timer.av-flip-clock .flip-clock-counter{background-color:var(--enfold-footer-color-bg2);color:var(--enfold-footer-color-meta)} .footer_color .av-masonry-entry:hover .av-icon-display{background-color:var(--enfold-footer-color-primary);color:var(--enfold-footer-color-constant-font);border-color:var(--enfold-footer-color-button-border)} #top .footer_color .av-masonry-entry.format-quote:hover .av-icon-display{color:var(--enfold-footer-color-primary)} .footer_color textarea::placeholder,.footer_color input::placeholder{color:var(--enfold-footer-color-meta);opacity:0.5} .footer_color .header_bg,.footer_color .main_menu ul ul,.footer_color .main_menu .menu ul li a,.footer_color .pointer_arrow_wrap .pointer_arrow,.footer_color .avia_mega_div,.footer_color .av-subnav-menu > li ul,.footer_color .av-subnav-menu a{background-color:var(--enfold-footer-color-bg);color:var(--enfold-footer-color-meta)} .footer_color .main_menu .menu ul li a:hover,.footer_color .main_menu .menu ul li a:focus,.footer_color .av-subnav-menu ul a:hover,.footer_color .av-subnav-menu ul a:focus{background-color:var(--enfold-footer-color-bg2)} .footer_color .sub_menu>ul>li>a,.footer_color .sub_menu>div>ul>li>a,.footer_color .main_menu ul:first-child > li > a,#top .footer_color .main_menu .menu ul .current_page_item > a,#top .footer_color .main_menu .menu ul .current-menu-item > a,#top .footer_color .sub_menu li ul a{color:var(--enfold-footer-color-meta)} #top .footer_color .main_menu .menu ul li > a:hover,#top .footer_color .main_menu .menu ul li > a:focus{color:var(--enfold-footer-color-color)} .footer_color .av-subnav-menu a:hover,.footer_color .av-subnav-menu a:focus,.footer_color .main_menu ul:first-child > li a:hover,.footer_color .main_menu ul:first-child > li a:focus,.footer_color .main_menu ul:first-child > li.current-menu-item > a,.footer_color .main_menu ul:first-child > li.current_page_item > a,.footer_color .main_menu ul:first-child > li.active-parent-item > a{color:var(--enfold-footer-color-color)} #top .footer_color .main_menu .menu .avia_mega_div ul .current-menu-item > a{color:var(--enfold-footer-color-primary)} .footer_color .sub_menu > ul > li > a:hover,.footer_color .sub_menu > ul > li > a:focus,.footer_color .sub_menu > div > ul > li > a:hover,.footer_color .sub_menu > div > ul > li > a:focus{color:var(--enfold-footer-color-color)} #top .footer_color .sub_menu ul li a:hover,#top .footer_color .sub_menu ul li a:focus,.footer_color .sub_menu ul:first-child > li.current-menu-item > a,.footer_color .sub_menu ul:first-child > li.current_page_item > a,.footer_color .sub_menu ul:first-child > li.active-parent-item > a{color:var(--enfold-footer-color-color)} .footer_color .sub_menu li ul a,.footer_color #payment,.footer_color .sub_menu ul li,.footer_color .sub_menu ul,#top .footer_color .sub_menu li li a:hover,#top .footer_color .sub_menu li li a:focus{background-color:var(--enfold-footer-color-bg)} .footer_color#header .avia_mega_div > .sub-menu.avia_mega_hr,.html_bottom_nav_header.html_logo_center #top #menu-item-search>a{border-color:var(--enfold-footer-color-border)} #top .footer_color .widget_pages ul li a:focus,#top .footer_color .widget_nav_menu ul li a:focus{color:var(--enfold-footer-color-secondary)} @media only screen and (max-width:767px){#top #wrap_all .av_header_transparency{background-color:var(--enfold-footer-color-bg);color:var(--enfold-footer-color-color);border-color:var(--enfold-footer-color-border)}} @media only screen and (max-width:989px){.html_mobile_menu_tablet #top #wrap_all .av_header_transparency{background-color:var(--enfold-footer-color-bg);color:var(--enfold-footer-color-color);border-color:var(--enfold-footer-color-border)}} .footer_color .avia-tt,.footer_color .avia-tt .avia-arrow,.footer_color .avia-tt .avia-arrow{background-color:var(--enfold-footer-color-bg);color:var(--enfold-footer-color-meta)} .footer_color .av_ajax_search_image{background-color:var(--enfold-footer-color-primary);color:var(--enfold-footer-color-bg)} .footer_color .ajax_search_excerpt{color:var(--enfold-footer-color-meta)} .footer_color .av_ajax_search_title{color:var(--enfold-footer-color-heading)} .footer_color .ajax_load{background-color:var(--enfold-footer-color-primary)} .footer_color .av_searchsubmit_wrapper{background-color:var(--enfold-footer-color-primary)} #top .footer_color .avia-color-theme-color{color:var(--enfold-footer-color-button-font);border-color:var(--enfold-footer-color-button-border)} .footer_color .avia-color-theme-color-subtle{background-color:var(--enfold-footer-color-bg2);color:var(--enfold-footer-color-color)} .footer_color .avia-color-theme-color-subtle:hover{background-color:var(--enfold-footer-color-bg);color:var(--enfold-footer-color-heading)} #top .footer_color .avia-color-theme-color-highlight{color:var(--enfold-footer-color-button-font);border-color:var(--enfold-footer-color-secondary);background-color:var(--enfold-footer-color-secondary)} #top .footer_color .avia-font-color-theme-color,#top .footer_color .avia-font-color-theme-color-hover:hover{color:var(--enfold-footer-color-button-font)} .footer_color .avia-font-color-theme-color-subtle{color:var(--enfold-footer-color-color)} .footer_color .avia-font-color-theme-color-subtle-hover:hover{color:var(--enfold-footer-color-heading)} #top .footer_color .avia-font-color-theme-color-highlight,#top .footer_color .avia-font-color-theme-color-highlight-hover:hover{color:var(--enfold-footer-color-button-font)} .footer_color .avia-icon-list .iconlist_icon{background-color:var(--enfold-footer-color-iconlist)} .footer_color .avia-icon-list .iconlist-timeline{border-color:var(--enfold-footer-color-border)} .footer_color .iconlist_content{color:var(--enfold-footer-color-meta)} .footer_color .avia-timeline .milestone_icon{background-color:var(--enfold-footer-color-timeline)} .footer_color .avia-timeline .milestone_inner{background-color:var(--enfold-footer-color-timeline)} .footer_color .avia-timeline{border-color:var(--enfold-footer-color-timeline)} .footer_color .av-milestone-icon-wrap:after{border-color:var(--enfold-footer-color-timeline)} .footer_color .avia-timeline .av-milestone-date{color:var(--enfold-footer-color-timeline-date)} .footer_color .avia-timeline .av-milestone-date span{background-color:var(--enfold-footer-color-timeline)} .footer_color .avia-timeline-horizontal .av-milestone-content-wrap footer{background-color:var(--enfold-footer-color-timeline)} .footer_color .av-timeline-nav a{background-color:var(--enfold-footer-color-timeline)} #top .footer_color .input-text,#top .footer_color input[type='text'],#top .footer_color input[type='input'],#top .footer_color input[type='password'],#top .footer_color input[type='email'],#top .footer_color input[type='number'],#top .footer_color input[type='url'],#top .footer_color input[type='tel'],#top .footer_color input[type='search'],#top .footer_color textarea,#top .footer_color select{border-color:var(--enfold-footer-color-border);background-color:var(--enfold-footer-color-bg2);color:var(--enfold-footer-color-meta)} #top .footer_color .invers-color .input-text,#top .footer_color .invers-color input[type='text'],#top .footer_color .invers-color input[type='input'],#top .footer_color .invers-color input[type='password'],#top .footer_color .invers-color input[type='email'],#top .footer_color .invers-color input[type='number'],#top .footer_color .invers-color input[type='url'],#top .footer_color .invers-color input[type='tel'],#top .footer_color .invers-color input[type='search'],#top .footer_color .invers-color textarea,#top .footer_color .invers-color select{background-color:var(--enfold-footer-color-bg)} .footer_color .required{color:var(--enfold-footer-color-primary)} .footer_color .av-masonry{background-color:var(--enfold-footer-color-masonry)} .footer_color .av-masonry-pagination,.footer_color .av-masonry-pagination:hover,.footer_color .av-masonry-outerimage-container{background-color:var(--enfold-footer-color-bg)} .footer_color .container .av-inner-masonry-content,#top .footer_color .container .av-masonry-load-more,#top .footer_color .container .av-masonry-sort,.footer_color .container .av-masonry-entry .avia-arrow{background-color:var(--enfold-footer-color-bg2)} .footer_color .hr-short .hr-inner-style,.footer_color .hr-short .hr-inner{background-color:var(--enfold-footer-color-bg)} div .footer_color .tabcontainer .active_tab_content,div .footer_color .tabcontainer .active_tab{background-color:var(--enfold-footer-color-bg2);color:var(--enfold-footer-color-color)} .responsive.js_active #top .footer_color .avia_combo_widget .top_tab .tab{border-top-color:var(--enfold-footer-color-border)} .footer_color .template-archives .tabcontainer a,#top .footer_color .tabcontainer .tab:hover,#top .footer_color .tabcontainer .tab.active_tab{color:var(--enfold-footer-color-color)} .footer_color .template-archives .tabcontainer a:hover{color:var(--enfold-footer-color-secondary)} .footer_color .sidebar_tab_icon{background-color:var(--enfold-footer-color-border)} #top .footer_color .sidebar_active_tab .sidebar_tab_icon{background-color:var(--enfold-footer-color-primary)} .footer_color .sidebar_tab:hover .sidebar_tab_icon{background-color:var(--enfold-footer-color-secondary)} .footer_color .sidebar_tab,.footer_color .tabcontainer .tab{color:var(--enfold-footer-color-meta)} .footer_color div .sidebar_active_tab ,div .footer_color .tabcontainer.noborder_tabs .active_tab_content,div .footer_color .tabcontainer.noborder_tabs .active_tab{color:var(--enfold-footer-color-color);background-color:var(--enfold-footer-color-bg)} #top .footer_color .avia-smallarrow-slider .avia-slideshow-dots a{background-color:var(--enfold-footer-color-bg2)} #top .footer_color .avia-smallarrow-slider .avia-slideshow-dots a.active,#top .footer_color .avia-smallarrow-slider .avia-slideshow-dots a:hover{background-color:var(--enfold-footer-color-meta)} @media only screen and (max-width:767px){.responsive #top .footer_color .tabcontainer .active_tab{background-color:var(--enfold-footer-color-secondary);color:var(--enfold-footer-color-constant-font)} .responsive #top .footer_color .tabcontainer{border-color:var(--enfold-footer-color-border)} .responsive #top .footer_color .active_tab_content{background-color:var(--enfold-footer-color-bg2)}} .footer_color tr:nth-child(even),.footer_color .avia-data-table .avia-heading-row .avia-desc-col,.footer_color .avia-data-table .avia-highlight-col,.footer_color .pricing-table>li:nth-child(even),body .footer_color .pricing-table.avia-desc-col li,#top .footer_color .avia-data-table.avia_pricing_minimal th{background-color:var(--enfold-footer-color-bg);color:var(--enfold-footer-color-color)} .footer_color table caption,.footer_color tr:nth-child(even),.footer_color .pricing-table>li:nth-child(even),#top .footer_color .avia-data-table.avia_pricing_minimal td{color:var(--enfold-footer-color-meta)} .footer_color tr:nth-child(odd),.footer_color .pricing-table>li:nth-child(odd),.footer_color .pricing-extra{background:var(--enfold-footer-color-bg2)} .footer_color .pricing-table li.avia-pricing-row,.footer_color .pricing-table li.avia-heading-row,.footer_color .pricing-table li.avia-pricing-row .pricing-extra{background-color:var(--enfold-footer-color-primary);color:var(--enfold-footer-color-constant-font);border-color:var(--enfold-footer-color-stripe)} .footer_color .pricing-table li.avia-heading-row,.footer_color .pricing-table li.avia-heading-row .pricing-extra{background-color:var(--enfold-footer-color-stripe2);color:var(--enfold-footer-color-constant-font);border-color:var(--enfold-footer-color-stripe)} .footer_color .pricing-table.avia-desc-col .avia-heading-row,.footer_color .pricing-table.avia-desc-col .avia-pricing-row{border-color:var(--enfold-footer-color-border)} .footer_color .theme-color-bar .bar{background:var(--enfold-footer-color-primary)} .footer_color .mejs-controls .mejs-time-rail .mejs-time-current,.footer_color .mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-current,.footer_color .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current,.footer_color .button.av-sending-button,.footer_color .av-striped-bar .theme-color-bar .bar{background:var(--enfold-footer-color-primary)} body .footer_color .mejs-controls .mejs-time-rail .mejs-time-float{background:var(--enfold-footer-color-primary);color:#fff} body .footer_color .mejs-controls .mejs-time-rail .mejs-time-float-corner{border:solid 4px var(--enfold-footer-color-primary);border-color:var(--enfold-footer-color-primary) transparent transparent transparent} .footer_color .progress{background-color:var(--enfold-footer-color-bg2)} .footer_color .av_searchform_element_results .av_ajax_search_entry,.footer_color .av_searchform_element_results .av_ajax_search_title,.footer_color.av_searchform_element_results .av_ajax_search_entry,.footer_color.av_searchform_element_results .av_ajax_search_title{color:var(--enfold-footer-color-primary)} .footer_color .av_searchform_element_results .ajax_search_excerpt,.footer_color.av_searchform_element_results .ajax_search_excerpt{color:var(--enfold-footer-color-meta)} .footer_color .av_searchform_element_results .av_ajax_search_image,.footer_color.av_searchform_element_results .av_ajax_search_image{color:var(--enfold-footer-color-meta)} .footer_color .button.av-sending-button{background:var(--enfold-footer-color-secondary);background-image:linear-gradient(-45deg,var(--enfold-footer-color-secondary) 25%,var(--enfold-footer-color-stripe2nd) 25%,var(--enfold-footer-color-stripe2nd) 50%,var(--enfold-footer-color-secondary) 50%,var(--enfold-footer-color-secondary) 75%,var(--enfold-footer-color-stripe2nd) 75%,var(--enfold-footer-color-stripe2nd));border-color:var(--enfold-footer-color-secondary)} .footer_color span.bbp-admin-links a{color:var(--enfold-footer-color-primary)} .footer_color span.bbp-admin-links a:hover{color:var(--enfold-footer-color-secondary)} #top .footer_color .bbp-reply-content,#top .footer_color .bbp-topic-content,#top .footer_color .bbp-body .super-sticky .page-numbers,#top .footer_color .bbp-body .sticky .page-numbers,#top .footer_color .bbp-pagination-links a:hover,#top .footer_color .bbp-pagination-links span.current{background:var(--enfold-footer-color-bg)} #top .footer_color .bbp-topics .bbp-header,#top .footer_color .bbp-topics .bbp-header,#top .footer_color .bbp-forums .bbp-header,#top .footer_color .bbp-topics-front ul.super-sticky,#top .footer_color .bbp-topics ul.super-sticky,#top .footer_color .bbp-topics ul.sticky,#top .footer_color .bbp-forum-content ul.sticky,#top .footer_color .bbp-body .page-numbers{background-color:var(--enfold-footer-color-bg2)} #top .footer_color .bbp-meta,#top .footer_color .bbp-author-role,#top .footer_color .bbp-author-ip,#top .footer_color .bbp-pagination-count,#top .footer_color .bbp-topics .bbp-body .bbp-topic-title:before{color:var(--enfold-footer-color-meta)} #top .footer_color .bbp-admin-links{color:var(--enfold-footer-color-border)} .footer_color #bbpress-forums li.bbp-body ul.forum,.footer_color #bbpress-forums li.bbp-body ul.topic,.avia_transform .footer_color .bbp-replies .bbp-reply-author:before,.avia_transform .forum-search .footer_color .bbp-reply-author:before,.avia_transform .forum-search .footer_color .bbp-topic-author:before{background-color:var(--enfold-footer-color-bg);border-color:var(--enfold-footer-color-border)} #top .footer_color .bbp-author-name{color:var(--enfold-footer-color-heading)} .footer_color .widget_display_stats dt,.footer_color .widget_display_stats dd{background-color:var(--enfold-footer-color-bg2)} .alternate_color,.alternate_color div,.alternate_color header,.alternate_color main,.alternate_color aside,.alternate_color footer,.alternate_color article,.alternate_color nav,.alternate_color section,.alternate_color span,.alternate_color applet,.alternate_color object,.alternate_color iframe,.alternate_color h1,.alternate_color h2,.alternate_color h3,.alternate_color h4,.alternate_color h5,.alternate_color h6,.alternate_color p,.alternate_color blockquote,.alternate_color pre,.alternate_color a,.alternate_color abbr,.alternate_color acronym,.alternate_color address,.alternate_color big,.alternate_color cite,.alternate_color code,.alternate_color del,.alternate_color dfn,.alternate_color em,.alternate_color img,.alternate_color ins,.alternate_color kbd,.alternate_color q,.alternate_color s,.alternate_color samp,.alternate_color small,.alternate_color strike,.alternate_color strong,.alternate_color sub,.alternate_color sup,.alternate_color tt,.alternate_color var,.alternate_color b,.alternate_color u,.alternate_color i,.alternate_color center,.alternate_color dl,.alternate_color dt,.alternate_color dd,.alternate_color ol,.alternate_color ul,.alternate_color li,.alternate_color fieldset,.alternate_color form,.alternate_color label,.alternate_color legend,.alternate_color table,.alternate_color caption,.alternate_color tbody,.alternate_color tfoot,.alternate_color thead,.alternate_color tr,.alternate_color th,.alternate_color td,.alternate_color article,.alternate_color aside,.alternate_color canvas,.alternate_color details,.alternate_color embed,.alternate_color figure,.alternate_color fieldset,.alternate_color figcaption,.alternate_color footer,.alternate_color header,.alternate_color hgroup,.alternate_color menu,.alternate_color nav,.alternate_color output,.alternate_color ruby,.alternate_color section,.alternate_color summary,.alternate_color time,.alternate_color mark,.alternate_color audio,.alternate_color video,#top .alternate_color .pullquote_boxed,.responsive #top .alternate_color .avia-testimonial,.responsive #top.avia-blank #main .alternate_color.container_wrap:first-child,#top .alternate_color.fullsize .template-blog .post_delimiter,.alternate_color .related_posts.av-related-style-full a{border-color:var(--enfold-alternate-color-border)} .alternate_color .rounded-container,#top .alternate_color .pagination a:hover,.alternate_color .small-preview,.alternate_color .fallback-post-type-icon{background:var(--enfold-alternate-color-meta);color:var(--enfold-alternate-color-bg)} .alternate_color .av-default-color,#top .alternate_color .av-force-default-color,.alternate_color .av-catalogue-item,.alternate_color .wp-playlist-item .wp-playlist-caption,.alternate_color .wp-playlist{color:var(--enfold-alternate-color-color)} .alternate_color,.alternate_color .site-background,.alternate_color .first-quote,.alternate_color .related_image_wrap,.alternate_color .gravatar img.alternate_color .hr_content,.alternate_color .news-thumb,.alternate_color .post-format-icon,.alternate_color .ajax_controlls a,.alternate_color .tweet-text.avatar_no,.alternate_color .toggler,.alternate_color .toggler.activeTitle:hover,.alternate_color #js_sort_items,.alternate_color.inner-entry,.alternate_color .grid-entry-title,.alternate_color .related-format-icon,.grid-entry .alternate_color .avia-arrow,.alternate_color .avia-gallery-big,.alternate_color .avia-gallery-big,.alternate_color .avia-gallery img,.alternate_color .grid-content,.alternate_color .av-share-box ul,#top .alternate_color .av-related-style-full .related-format-icon,.alternate_color .related_posts.av-related-style-full a:hover,.alternate_color.avia-fullwidth-portfolio .pagination .current,.alternate_color.avia-fullwidth-portfolio .pagination a,.alternate_color .av-hotspot-fallback-tooltip-inner,.alternate_color .av-hotspot-fallback-tooltip-count{background-color:var(--enfold-alternate-color-bg);color:var(--enfold-alternate-color-color)} .alternate_color .avia-fold-unfold-section .av-fold-unfold-container::after{background:linear-gradient( to bottom,rgba(248,248,248,0),rgba(248,248,248,1) )} .alternate_color .avia-fold-unfold-section .av-fold-button-container:not(.avia-button),.alternate_color.avia-fold-unfold-section .av-fold-button-container:not(.avia-button){color:var(--enfold-alternate-color-color)} .alternate_color .avia-fold-unfold-section .av-fold-button-container.fold-button{background:var(--enfold-alternate-color-bg);border-color:var(--enfold-alternate-color-border)} .alternate_color .avia-curtain-reveal-overlay{background:var(--enfold-alternate-color-bg)} .alternate_color .avia-icon-circles-icon{background:var(--enfold-alternate-color-bg);border-color:var(--enfold-alternate-color-border);color:var(--enfold-alternate-color-color)} .alternate_color .avia-icon-circles-icon.active{background:var(--enfold-alternate-color-secondary);border-color:var(--enfold-alternate-color-secondary);color:var(--enfold-alternate-color-bg)} .alternate_color .avia-icon-circles-icon-text{color:var(--enfold-alternate-color-color);background:var(--enfold-alternate-color-bg)} .alternate_color .heading-color,.alternate_color a.iconbox_icon:hover,.alternate_color h1,.alternate_color h2,.alternate_color h3,.alternate_color h4,.alternate_color h5,.alternate_color h6,.alternate_color .sidebar .current_page_item>a,.alternate_color .sidebar .current-menu-item>a,.alternate_color .pagination .current,.alternate_color .pagination a:hover,.alternate_color strong.avia-testimonial-name,.alternate_color .heading,.alternate_color .toggle_content strong,.alternate_color .toggle_content strong a,.alternate_color .tab_content strong,.alternate_color .tab_content strong a,.alternate_color .asc_count,.alternate_color .avia-testimonial-content strong,#top .alternate_color .av-related-style-full .av-related-title,.alternate_color .wp-playlist-item-meta.wp-playlist-item-title,#top .alternate_color .av-no-image-slider h2 a,.alternate_color .av-small-bar .avia-progress-bar .progressbar-title-wrap,.alternate_color div .news-headline .news-title,.alternate_color .av-default-style .av-countdown-cell-inner .av-countdown-time,.alternate_color .av-default-style.av-countdown-timer.av-flip-numbers .card__top.card-time-color,.alternate_color .av-default-style.av-countdown-timer.av-flip-numbers .card__bottom.card-time-color,.alternate_color .av-default-style.av-countdown-timer.av-flip-numbers .card__back.card-time-color::before,.alternate_color .av-default-style.av-countdown-timer.av-flip-clock .flip-clock__card .flip-clock-counter{color:var(--enfold-alternate-color-heading)} .alternate_color .av-countdown-timer.av-events-countdown a .av-countdown-time-label{color:var(--enfold-alternate-color-color)} .alternate_color .meta-color,.alternate_color .sidebar,.alternate_color .sidebar a,.alternate_color .minor-meta,.alternate_color .minor-meta a,.alternate_color .text-sep,.alternate_color blockquote,.alternate_color .post_nav a,.alternate_color .comment-text,.alternate_color .side-container-inner,.alternate_color .news-time,.alternate_color .pagination a,.alternate_color .pagination span,.alternate_color .tweet-text.avatar_no .tweet-time,#top .alternate_color .extra-mini-title,.alternate_color .team-member-job-title,.alternate_color .team-social a,.alternate_color #js_sort_items a,.grid-entry-excerpt,.alternate_color .avia-testimonial-subtitle,.alternate_color .commentmetadata a,.alternate_color .social_bookmarks a,.alternate_color .meta-heading>*,.alternate_color .slide-meta,.alternate_color .slide-meta a,.alternate_color .taglist,.alternate_color .taglist a,.alternate_color .phone-info,.alternate_color .phone-info a,.alternate_color .av-sort-by-term a,.alternate_color .av-magazine-time,.alternate_color .av-magazine .av-magazine-entry-icon,.alternate_color .av-catalogue-content,.alternate_color .wp-playlist-item-length,.html_modern-blog #top div .alternate_color .blog-categories a,.html_modern-blog #top div .alternate_color .blog-categories a:hover{color:var(--enfold-alternate-color-meta)} .alternate_color .special-heading-inner-border{border-color:var(--enfold-alternate-color-color)}.alternate_color .meta-heading .special-heading-inner-border{border-color:var(--enfold-alternate-color-meta)} .alternate_color a,.alternate_color .widget_first,.alternate_color strong,.alternate_color b,.alternate_color b a,.alternate_color strong a,.alternate_color #js_sort_items a:hover,.alternate_color #js_sort_items a.active_sort,.alternate_color .av-sort-by-term a.active_sort,.alternate_color .special_amp,.alternate_color .taglist a.activeFilter,.alternate_color #commentform .required,#top .alternate_color .av-no-color.av-icon-style-border a.av-icon-char,.html_elegant-blog #top .alternate_color .blog-categories a,.html_elegant-blog #top .alternate_color .blog-categories a:hover{color:var(--enfold-alternate-color-primary)} .alternate_color a:hover,.alternate_color h1 a:hover,.alternate_color h2 a:hover,.alternate_color h3 a:hover,.alternate_color h4 a:hover,.alternate_color h5 a:hover,.alternate_color h6 a:hover,.alternate_color .template-search a.news-content:hover,.alternate_color .wp-playlist-item .wp-playlist-caption:hover{color:var(--enfold-alternate-color-secondary)} .alternate_color .primary-background,.alternate_color .primary-background a,div .alternate_color .button,.alternate_color #submit,.alternate_color input[type='submit'],.alternate_color .small-preview:hover,.alternate_color .avia-menu-fx,.alternate_color .avia-menu-fx .avia-arrow,.alternate_color.iconbox_top .iconbox_icon,.alternate_color .iconbox_top a.iconbox_icon:hover,.alternate_color .avia-data-table th.avia-highlight-col,.alternate_color .avia-color-theme-color,.alternate_color .avia-color-theme-color:hover,.alternate_color .image-overlay .image-overlay-inside:before,.alternate_color .comment-count,.alternate_color .av_dropcap2,.responsive #top .alternate_color .av-open-submenu.av-subnav-menu > li > a:hover,#top .alternate_color .av-open-submenu.av-subnav-menu li > ul a:hover,.alternate_color .av-colored-style .av-countdown-cell-inner,.alternate_color .wc-block-components-button:not(.is-link){background-color:var(--enfold-alternate-color-primary);color:var(--enfold-alternate-color-constant-font);border-color:var(--enfold-alternate-color-button-border)} .alternate_color .av-colored-style.av-countdown-timer.av-flip-numbers .card__top,.alternate_color .av-colored-style.av-countdown-timer.av-flip-numbers .card__bottom,.alternate_color .av-colored-style.av-countdown-timer.av-flip-numbers .card__back::before,.alternate_color .av-colored-style.av-countdown-timer.av-flip-numbers .card__back::after,.alternate_color .av-colored-style.av-countdown-timer.av-flip-clock .flip-clock-counter{background-color:var(--enfold-alternate-color-primary);color:var(--enfold-alternate-color-constant-font)} #top #wrap_all .alternate_color .av-menu-button-colored > a .avia-menu-text{background-color:var(--enfold-alternate-color-primary);color:var(--enfold-alternate-color-constant-font);border-color:var(--enfold-alternate-color-primary)} #top #wrap_all .alternate_color .av-menu-button-colored > a .avia-menu-text:after{background-color:var(--enfold-alternate-color-button-border)} #top .alternate_color .mobile_menu_toggle{color:var(--enfold-alternate-color-primary);background:var(--enfold-alternate-color-bg)} #top .alternate_color .av-menu-mobile-active .av-subnav-menu > li > a:before{color:var(--enfold-alternate-color-primary)} #top .alternate_color .av-open-submenu.av-subnav-menu > li > a:hover:before{color:var(--enfold-alternate-color-bg)} .alternate_color .button:hover,.alternate_color .ajax_controlls a:hover,.alternate_color #submit:hover,.alternate_color .big_button:hover,.alternate_color .contentSlideControlls a:hover,.alternate_color #submit:hover ,.alternate_color input[type='submit']:hover{background-color:var(--enfold-alternate-color-secondary);color:var(--enfold-alternate-color-bg);border-color:var(--enfold-alternate-color-button-border2)} .alternate_color .avia-toc-style-elegant a.avia-toc-level-0:last-child:after,.alternate_color .avia-toc-style-elegant a:first-child:after,.alternate_color .avia-toc-style-elegant a.avia-toc-level-0:after{background-color:var(--enfold-alternate-color-bg);border-color:var(--enfold-alternate-color-secondary)} .alternate_color .avia-toc-style-elegant a:first-child span:after,.alternate_color .avia-toc-style-elegant a.avia-toc-level-0 span:after{background-color:var(--enfold-alternate-color-bg)} .alternate_color .avia-toc-style-elegant a:first-child:hover span:after,.alternate_color .avia-toc-style-elegant a.avia-toc-level-0:hover span:after{border-color:var(--enfold-alternate-color-secondary)} .alternate_color .avia-toc-style-elegant a:before{border-color:var(--enfold-alternate-color-border)} .alternate_color .avia-toc-style-elegant a:first-child:after,.alternate_color .avia-toc-style-elegant a.avia-toc-level-0:after{border-color:var(--enfold-alternate-color-secondary);background-color:var(--enfold-alternate-color-bg)} .alternate_color .avia-toc-style-elegant a:last-child:after{background-color:var(--enfold-alternate-color-border)} .alternate_color .timeline-bullet{background-color:var(--enfold-alternate-color-border);border-color:var(--enfold-alternate-color-bg)} .alternate_color table,.alternate_color .widget_nav_menu ul:first-child>.current-menu-item,.alternate_color .widget_nav_menu ul:first-child>.current_page_item,.alternate_color .widget_nav_menu ul:first-child>.current-menu-ancestor,.alternate_color .pagination .current,.alternate_color .pagination a,.alternate_color.iconbox_top .iconbox_content,.alternate_color .av_promobox,.alternate_color .toggle_content,.alternate_color .toggler:hover,#top .alternate_color .av-minimal-toggle .toggler,.alternate_color .related_posts_default_image,.alternate_color .search-result-counter,.alternate_color .container_wrap_meta,.alternate_color .avia-content-slider .slide-image,.alternate_color .avia-slider-testimonials .avia-testimonial-content,.alternate_color .avia-testimonial-arrow-wrap .avia-arrow,.alternate_color .news-thumb,.alternate_color .portfolio-preview-content,.alternate_color .portfolio-preview-content .avia-arrow,.alternate_color .av-magazine .av-magazine-entry-icon,.alternate_color .related_posts.av-related-style-full a,.alternate_color .aviaccordion-slide,.alternate_color.avia-fullwidth-portfolio .pagination,.alternate_color .isotope-item.special_av_fullwidth .av_table_col.portfolio-grid-image,.alternate_color .av-catalogue-list li:hover,.alternate_color .wp-playlist,.alternate_color .avia-slideshow-fixed-height > li,.alternate_color .avia-form-success,.alternate_color .avia-form-error,.alternate_color .av-boxed-grid-style .avia-testimonial{background:var(--enfold-alternate-color-bg2)} #top .alternate_color .post_timeline li:hover .timeline-bullet{background-color:var(--enfold-alternate-color-secondary)} .alternate_color blockquote,.alternate_color .avia-bullet,.alternate_color .av-no-color.av-icon-style-border a.av-icon-char{border-color:var(--enfold-alternate-color-primary)} .html_header_top .alternate_color .main_menu ul:first-child >li > ul,.html_header_top #top .alternate_color .avia_mega_div > .sub-menu{border-top-color:var(--enfold-alternate-color-primary)} .alternate_color .breadcrumb,.alternate_color .breadcrumb a,#top .alternate_color.title_container .main-title,#top .alternate_color.title_container .main-title a{color:var(--enfold-alternate-color-color)} .alternate_color .av-icon-display,#top .alternate_color .av-related-style-full a:hover .related-format-icon,.alternate_color .av-default-style .av-countdown-cell-inner,.alternate_color .av-default-style.av-countdown-timer.av-flip-numbers .card__top,.alternate_color .av-default-style.av-countdown-timer.av-flip-numbers .card__bottom,.alternate_color .av-default-style.av-countdown-timer.av-flip-numbers .card__back::before,.alternate_color .av-default-style.av-countdown-timer.av-flip-numbers .card__back::after,.alternate_color .av-default-style.av-countdown-timer.av-flip-clock .flip-clock-counter{background-color:var(--enfold-alternate-color-bg2);color:var(--enfold-alternate-color-meta)} .alternate_color .av-masonry-entry:hover .av-icon-display{background-color:var(--enfold-alternate-color-primary);color:var(--enfold-alternate-color-constant-font);border-color:var(--enfold-alternate-color-button-border)} #top .alternate_color .av-masonry-entry.format-quote:hover .av-icon-display{color:var(--enfold-alternate-color-primary)} .alternate_color textarea::placeholder,.alternate_color input::placeholder{color:var(--enfold-alternate-color-meta);opacity:0.5} .alternate_color .header_bg,.alternate_color .main_menu ul ul,.alternate_color .main_menu .menu ul li a,.alternate_color .pointer_arrow_wrap .pointer_arrow,.alternate_color .avia_mega_div,.alternate_color .av-subnav-menu > li ul,.alternate_color .av-subnav-menu a{background-color:var(--enfold-alternate-color-bg);color:var(--enfold-alternate-color-meta)} .alternate_color .main_menu .menu ul li a:hover,.alternate_color .main_menu .menu ul li a:focus,.alternate_color .av-subnav-menu ul a:hover,.alternate_color .av-subnav-menu ul a:focus{background-color:var(--enfold-alternate-color-bg2)} .alternate_color .sub_menu>ul>li>a,.alternate_color .sub_menu>div>ul>li>a,.alternate_color .main_menu ul:first-child > li > a,#top .alternate_color .main_menu .menu ul .current_page_item > a,#top .alternate_color .main_menu .menu ul .current-menu-item > a,#top .alternate_color .sub_menu li ul a{color:var(--enfold-alternate-color-meta)} #top .alternate_color .main_menu .menu ul li > a:hover,#top .alternate_color .main_menu .menu ul li > a:focus{color:var(--enfold-alternate-color-color)} .alternate_color .av-subnav-menu a:hover,.alternate_color .av-subnav-menu a:focus,.alternate_color .main_menu ul:first-child > li a:hover,.alternate_color .main_menu ul:first-child > li a:focus,.alternate_color .main_menu ul:first-child > li.current-menu-item > a,.alternate_color .main_menu ul:first-child > li.current_page_item > a,.alternate_color .main_menu ul:first-child > li.active-parent-item > a{color:var(--enfold-alternate-color-color)} #top .alternate_color .main_menu .menu .avia_mega_div ul .current-menu-item > a{color:var(--enfold-alternate-color-primary)} .alternate_color .sub_menu > ul > li > a:hover,.alternate_color .sub_menu > ul > li > a:focus,.alternate_color .sub_menu > div > ul > li > a:hover,.alternate_color .sub_menu > div > ul > li > a:focus{color:var(--enfold-alternate-color-color)} #top .alternate_color .sub_menu ul li a:hover,#top .alternate_color .sub_menu ul li a:focus,.alternate_color .sub_menu ul:first-child > li.current-menu-item > a,.alternate_color .sub_menu ul:first-child > li.current_page_item > a,.alternate_color .sub_menu ul:first-child > li.active-parent-item > a{color:var(--enfold-alternate-color-color)} .alternate_color .sub_menu li ul a,.alternate_color #payment,.alternate_color .sub_menu ul li,.alternate_color .sub_menu ul,#top .alternate_color .sub_menu li li a:hover,#top .alternate_color .sub_menu li li a:focus{background-color:var(--enfold-alternate-color-bg)} .alternate_color#header .avia_mega_div > .sub-menu.avia_mega_hr,.html_bottom_nav_header.html_logo_center #top #menu-item-search>a{border-color:var(--enfold-alternate-color-border)} #top .alternate_color .widget_pages ul li a:focus,#top .alternate_color .widget_nav_menu ul li a:focus{color:var(--enfold-alternate-color-secondary)} @media only screen and (max-width:767px){#top #wrap_all .av_header_transparency{background-color:var(--enfold-alternate-color-bg);color:var(--enfold-alternate-color-color);border-color:var(--enfold-alternate-color-border)}} @media only screen and (max-width:989px){.html_mobile_menu_tablet #top #wrap_all .av_header_transparency{background-color:var(--enfold-alternate-color-bg);color:var(--enfold-alternate-color-color);border-color:var(--enfold-alternate-color-border)}} .alternate_color .avia-tt,.alternate_color .avia-tt .avia-arrow,.alternate_color .avia-tt .avia-arrow{background-color:var(--enfold-alternate-color-bg);color:var(--enfold-alternate-color-meta)} .alternate_color .av_ajax_search_image{background-color:var(--enfold-alternate-color-primary);color:var(--enfold-alternate-color-bg)} .alternate_color .ajax_search_excerpt{color:var(--enfold-alternate-color-meta)} .alternate_color .av_ajax_search_title{color:var(--enfold-alternate-color-heading)} .alternate_color .ajax_load{background-color:var(--enfold-alternate-color-primary)} .alternate_color .av_searchsubmit_wrapper{background-color:var(--enfold-alternate-color-primary)} #top .alternate_color .avia-color-theme-color{color:var(--enfold-alternate-color-button-font);border-color:var(--enfold-alternate-color-button-border)} .alternate_color .avia-color-theme-color-subtle{background-color:var(--enfold-alternate-color-bg2);color:var(--enfold-alternate-color-color)} .alternate_color .avia-color-theme-color-subtle:hover{background-color:var(--enfold-alternate-color-bg);color:var(--enfold-alternate-color-heading)} #top .alternate_color .avia-color-theme-color-highlight{color:var(--enfold-alternate-color-button-font);border-color:var(--enfold-alternate-color-secondary);background-color:var(--enfold-alternate-color-secondary)} #top .alternate_color .avia-font-color-theme-color,#top .alternate_color .avia-font-color-theme-color-hover:hover{color:var(--enfold-alternate-color-button-font)} .alternate_color .avia-font-color-theme-color-subtle{color:var(--enfold-alternate-color-color)} .alternate_color .avia-font-color-theme-color-subtle-hover:hover{color:var(--enfold-alternate-color-heading)} #top .alternate_color .avia-font-color-theme-color-highlight,#top .alternate_color .avia-font-color-theme-color-highlight-hover:hover{color:var(--enfold-alternate-color-button-font)} .alternate_color .avia-icon-list .iconlist_icon{background-color:var(--enfold-alternate-color-iconlist)} .alternate_color .avia-icon-list .iconlist-timeline{border-color:var(--enfold-alternate-color-border)} .alternate_color .iconlist_content{color:var(--enfold-alternate-color-meta)} .alternate_color .avia-timeline .milestone_icon{background-color:var(--enfold-alternate-color-timeline)} .alternate_color .avia-timeline .milestone_inner{background-color:var(--enfold-alternate-color-timeline)} .alternate_color .avia-timeline{border-color:var(--enfold-alternate-color-timeline)} .alternate_color .av-milestone-icon-wrap:after{border-color:var(--enfold-alternate-color-timeline)} .alternate_color .avia-timeline .av-milestone-date{color:var(--enfold-alternate-color-timeline-date)} .alternate_color .avia-timeline .av-milestone-date span{background-color:var(--enfold-alternate-color-timeline)} .alternate_color .avia-timeline-horizontal .av-milestone-content-wrap footer{background-color:var(--enfold-alternate-color-timeline)} .alternate_color .av-timeline-nav a{background-color:var(--enfold-alternate-color-timeline)} #top .alternate_color .input-text,#top .alternate_color input[type='text'],#top .alternate_color input[type='input'],#top .alternate_color input[type='password'],#top .alternate_color input[type='email'],#top .alternate_color input[type='number'],#top .alternate_color input[type='url'],#top .alternate_color input[type='tel'],#top .alternate_color input[type='search'],#top .alternate_color textarea,#top .alternate_color select{border-color:var(--enfold-alternate-color-border);background-color:var(--enfold-alternate-color-bg2);color:var(--enfold-alternate-color-meta)} #top .alternate_color .invers-color .input-text,#top .alternate_color .invers-color input[type='text'],#top .alternate_color .invers-color input[type='input'],#top .alternate_color .invers-color input[type='password'],#top .alternate_color .invers-color input[type='email'],#top .alternate_color .invers-color input[type='number'],#top .alternate_color .invers-color input[type='url'],#top .alternate_color .invers-color input[type='tel'],#top .alternate_color .invers-color input[type='search'],#top .alternate_color .invers-color textarea,#top .alternate_color .invers-color select{background-color:var(--enfold-alternate-color-bg)} .alternate_color .required{color:var(--enfold-alternate-color-primary)} .alternate_color .av-masonry{background-color:var(--enfold-alternate-color-masonry)} .alternate_color .av-masonry-pagination,.alternate_color .av-masonry-pagination:hover,.alternate_color .av-masonry-outerimage-container{background-color:var(--enfold-alternate-color-bg)} .alternate_color .container .av-inner-masonry-content,#top .alternate_color .container .av-masonry-load-more,#top .alternate_color .container .av-masonry-sort,.alternate_color .container .av-masonry-entry .avia-arrow{background-color:var(--enfold-alternate-color-bg2)} .alternate_color .hr-short .hr-inner-style,.alternate_color .hr-short .hr-inner{background-color:var(--enfold-alternate-color-bg)} div .alternate_color .tabcontainer .active_tab_content,div .alternate_color .tabcontainer .active_tab{background-color:var(--enfold-alternate-color-bg2);color:var(--enfold-alternate-color-color)} .responsive.js_active #top .alternate_color .avia_combo_widget .top_tab .tab{border-top-color:var(--enfold-alternate-color-border)} .alternate_color .template-archives .tabcontainer a,#top .alternate_color .tabcontainer .tab:hover,#top .alternate_color .tabcontainer .tab.active_tab{color:var(--enfold-alternate-color-color)} .alternate_color .template-archives .tabcontainer a:hover{color:var(--enfold-alternate-color-secondary)} .alternate_color .sidebar_tab_icon{background-color:var(--enfold-alternate-color-border)} #top .alternate_color .sidebar_active_tab .sidebar_tab_icon{background-color:var(--enfold-alternate-color-primary)} .alternate_color .sidebar_tab:hover .sidebar_tab_icon{background-color:var(--enfold-alternate-color-secondary)} .alternate_color .sidebar_tab,.alternate_color .tabcontainer .tab{color:var(--enfold-alternate-color-meta)} .alternate_color div .sidebar_active_tab ,div .alternate_color .tabcontainer.noborder_tabs .active_tab_content,div .alternate_color .tabcontainer.noborder_tabs .active_tab{color:var(--enfold-alternate-color-color);background-color:var(--enfold-alternate-color-bg)} #top .alternate_color .avia-smallarrow-slider .avia-slideshow-dots a{background-color:var(--enfold-alternate-color-bg2)} #top .alternate_color .avia-smallarrow-slider .avia-slideshow-dots a.active,#top .alternate_color .avia-smallarrow-slider .avia-slideshow-dots a:hover{background-color:var(--enfold-alternate-color-meta)} @media only screen and (max-width:767px){.responsive #top .alternate_color .tabcontainer .active_tab{background-color:var(--enfold-alternate-color-secondary);color:var(--enfold-alternate-color-constant-font)} .responsive #top .alternate_color .tabcontainer{border-color:var(--enfold-alternate-color-border)} .responsive #top .alternate_color .active_tab_content{background-color:var(--enfold-alternate-color-bg2)}} .alternate_color tr:nth-child(even),.alternate_color .avia-data-table .avia-heading-row .avia-desc-col,.alternate_color .avia-data-table .avia-highlight-col,.alternate_color .pricing-table>li:nth-child(even),body .alternate_color .pricing-table.avia-desc-col li,#top .alternate_color .avia-data-table.avia_pricing_minimal th{background-color:var(--enfold-alternate-color-bg);color:var(--enfold-alternate-color-color)} .alternate_color table caption,.alternate_color tr:nth-child(even),.alternate_color .pricing-table>li:nth-child(even),#top .alternate_color .avia-data-table.avia_pricing_minimal td{color:var(--enfold-alternate-color-meta)} .alternate_color tr:nth-child(odd),.alternate_color .pricing-table>li:nth-child(odd),.alternate_color .pricing-extra{background:var(--enfold-alternate-color-bg2)} .alternate_color .pricing-table li.avia-pricing-row,.alternate_color .pricing-table li.avia-heading-row,.alternate_color .pricing-table li.avia-pricing-row .pricing-extra{background-color:var(--enfold-alternate-color-primary);color:var(--enfold-alternate-color-constant-font);border-color:var(--enfold-alternate-color-stripe)} .alternate_color .pricing-table li.avia-heading-row,.alternate_color .pricing-table li.avia-heading-row .pricing-extra{background-color:var(--enfold-alternate-color-stripe2);color:var(--enfold-alternate-color-constant-font);border-color:var(--enfold-alternate-color-stripe)} .alternate_color .pricing-table.avia-desc-col .avia-heading-row,.alternate_color .pricing-table.avia-desc-col .avia-pricing-row{border-color:var(--enfold-alternate-color-border)} .alternate_color .theme-color-bar .bar{background:var(--enfold-alternate-color-primary)} .alternate_color .mejs-controls .mejs-time-rail .mejs-time-current,.alternate_color .mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-current,.alternate_color .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current,.alternate_color .button.av-sending-button,.alternate_color .av-striped-bar .theme-color-bar .bar{background:var(--enfold-alternate-color-primary)} body .alternate_color .mejs-controls .mejs-time-rail .mejs-time-float{background:var(--enfold-alternate-color-primary);color:#fff} body .alternate_color .mejs-controls .mejs-time-rail .mejs-time-float-corner{border:solid 4px var(--enfold-alternate-color-primary);border-color:var(--enfold-alternate-color-primary) transparent transparent transparent} .alternate_color .progress{background-color:var(--enfold-alternate-color-bg2)} .alternate_color .av_searchform_element_results .av_ajax_search_entry,.alternate_color .av_searchform_element_results .av_ajax_search_title,.alternate_color.av_searchform_element_results .av_ajax_search_entry,.alternate_color.av_searchform_element_results .av_ajax_search_title{color:var(--enfold-alternate-color-primary)} .alternate_color .av_searchform_element_results .ajax_search_excerpt,.alternate_color.av_searchform_element_results .ajax_search_excerpt{color:var(--enfold-alternate-color-meta)} .alternate_color .av_searchform_element_results .av_ajax_search_image,.alternate_color.av_searchform_element_results .av_ajax_search_image{color:var(--enfold-alternate-color-meta)} .alternate_color .button.av-sending-button{background:var(--enfold-alternate-color-secondary);background-image:linear-gradient(-45deg,var(--enfold-alternate-color-secondary) 25%,var(--enfold-alternate-color-stripe2nd) 25%,var(--enfold-alternate-color-stripe2nd) 50%,var(--enfold-alternate-color-secondary) 50%,var(--enfold-alternate-color-secondary) 75%,var(--enfold-alternate-color-stripe2nd) 75%,var(--enfold-alternate-color-stripe2nd));border-color:var(--enfold-alternate-color-secondary)} .alternate_color span.bbp-admin-links a{color:var(--enfold-alternate-color-primary)} .alternate_color span.bbp-admin-links a:hover{color:var(--enfold-alternate-color-secondary)} #top .alternate_color .bbp-reply-content,#top .alternate_color .bbp-topic-content,#top .alternate_color .bbp-body .super-sticky .page-numbers,#top .alternate_color .bbp-body .sticky .page-numbers,#top .alternate_color .bbp-pagination-links a:hover,#top .alternate_color .bbp-pagination-links span.current{background:var(--enfold-alternate-color-bg)} #top .alternate_color .bbp-topics .bbp-header,#top .alternate_color .bbp-topics .bbp-header,#top .alternate_color .bbp-forums .bbp-header,#top .alternate_color .bbp-topics-front ul.super-sticky,#top .alternate_color .bbp-topics ul.super-sticky,#top .alternate_color .bbp-topics ul.sticky,#top .alternate_color .bbp-forum-content ul.sticky,#top .alternate_color .bbp-body .page-numbers{background-color:var(--enfold-alternate-color-bg2)} #top .alternate_color .bbp-meta,#top .alternate_color .bbp-author-role,#top .alternate_color .bbp-author-ip,#top .alternate_color .bbp-pagination-count,#top .alternate_color .bbp-topics .bbp-body .bbp-topic-title:before{color:var(--enfold-alternate-color-meta)} #top .alternate_color .bbp-admin-links{color:var(--enfold-alternate-color-border)} .alternate_color #bbpress-forums li.bbp-body ul.forum,.alternate_color #bbpress-forums li.bbp-body ul.topic,.avia_transform .alternate_color .bbp-replies .bbp-reply-author:before,.avia_transform .forum-search .alternate_color .bbp-reply-author:before,.avia_transform .forum-search .alternate_color .bbp-topic-author:before{background-color:var(--enfold-alternate-color-bg);border-color:var(--enfold-alternate-color-border)} #top .alternate_color .bbp-author-name{color:var(--enfold-alternate-color-heading)} .alternate_color .widget_display_stats dt,.alternate_color .widget_display_stats dd{background-color:var(--enfold-alternate-color-bg2)} .alternate_color dropcap2,.alternate_color dropcap3,.alternate_color avia_button,.alternate_color avia_button:hover,.alternate_color .on-primary-color,.alternate_color .on-primary-color:hover{color:var(--enfold-alternate-color-constant-font)} .main_color,.main_color div,.main_color header,.main_color main,.main_color aside,.main_color footer,.main_color article,.main_color nav,.main_color section,.main_color span,.main_color applet,.main_color object,.main_color iframe,.main_color h1,.main_color h2,.main_color h3,.main_color h4,.main_color h5,.main_color h6,.main_color p,.main_color blockquote,.main_color pre,.main_color a,.main_color abbr,.main_color acronym,.main_color address,.main_color big,.main_color cite,.main_color code,.main_color del,.main_color dfn,.main_color em,.main_color img,.main_color ins,.main_color kbd,.main_color q,.main_color s,.main_color samp,.main_color small,.main_color strike,.main_color strong,.main_color sub,.main_color sup,.main_color tt,.main_color var,.main_color b,.main_color u,.main_color i,.main_color center,.main_color dl,.main_color dt,.main_color dd,.main_color ol,.main_color ul,.main_color li,.main_color fieldset,.main_color form,.main_color label,.main_color legend,.main_color table,.main_color caption,.main_color tbody,.main_color tfoot,.main_color thead,.main_color tr,.main_color th,.main_color td,.main_color article,.main_color aside,.main_color canvas,.main_color details,.main_color embed,.main_color figure,.main_color fieldset,.main_color figcaption,.main_color footer,.main_color header,.main_color hgroup,.main_color menu,.main_color nav,.main_color output,.main_color ruby,.main_color section,.main_color summary,.main_color time,.main_color mark,.main_color audio,.main_color video,#top .main_color .pullquote_boxed,.responsive #top .main_color .avia-testimonial,.responsive #top.avia-blank #main .main_color.container_wrap:first-child,#top .main_color.fullsize .template-blog .post_delimiter,.main_color .related_posts.av-related-style-full a{border-color:var(--enfold-main-color-border)} .main_color .rounded-container,#top .main_color .pagination a:hover,.main_color .small-preview,.main_color .fallback-post-type-icon{background:var(--enfold-main-color-meta);color:var(--enfold-main-color-bg)} .main_color .av-default-color,#top .main_color .av-force-default-color,.main_color .av-catalogue-item,.main_color .wp-playlist-item .wp-playlist-caption,.main_color .wp-playlist{color:var(--enfold-main-color-color)} .main_color,.main_color .site-background,.main_color .first-quote,.main_color .related_image_wrap,.main_color .gravatar img.main_color .hr_content,.main_color .news-thumb,.main_color .post-format-icon,.main_color .ajax_controlls a,.main_color .tweet-text.avatar_no,.main_color .toggler,.main_color .toggler.activeTitle:hover,.main_color #js_sort_items,.main_color.inner-entry,.main_color .grid-entry-title,.main_color .related-format-icon,.grid-entry .main_color .avia-arrow,.main_color .avia-gallery-big,.main_color .avia-gallery-big,.main_color .avia-gallery img,.main_color .grid-content,.main_color .av-share-box ul,#top .main_color .av-related-style-full .related-format-icon,.main_color .related_posts.av-related-style-full a:hover,.main_color.avia-fullwidth-portfolio .pagination .current,.main_color.avia-fullwidth-portfolio .pagination a,.main_color .av-hotspot-fallback-tooltip-inner,.main_color .av-hotspot-fallback-tooltip-count{background-color:var(--enfold-main-color-bg);color:var(--enfold-main-color-color)} .main_color .avia-fold-unfold-section .av-fold-unfold-container::after{background:linear-gradient( to bottom,rgba(255,255,255,0),rgba(255,255,255,1) )} .main_color .avia-fold-unfold-section .av-fold-button-container:not(.avia-button),.main_color.avia-fold-unfold-section .av-fold-button-container:not(.avia-button){color:var(--enfold-main-color-color)} .main_color .avia-fold-unfold-section .av-fold-button-container.fold-button{background:var(--enfold-main-color-bg);border-color:var(--enfold-main-color-border)} .main_color .avia-curtain-reveal-overlay{background:var(--enfold-main-color-bg)} .main_color .avia-icon-circles-icon{background:var(--enfold-main-color-bg);border-color:var(--enfold-main-color-border);color:var(--enfold-main-color-color)} .main_color .avia-icon-circles-icon.active{background:var(--enfold-main-color-secondary);border-color:var(--enfold-main-color-secondary);color:var(--enfold-main-color-bg)} .main_color .avia-icon-circles-icon-text{color:var(--enfold-main-color-color);background:var(--enfold-main-color-bg)} .main_color .heading-color,.main_color a.iconbox_icon:hover,.main_color h1,.main_color h2,.main_color h3,.main_color h4,.main_color h5,.main_color h6,.main_color .sidebar .current_page_item>a,.main_color .sidebar .current-menu-item>a,.main_color .pagination .current,.main_color .pagination a:hover,.main_color strong.avia-testimonial-name,.main_color .heading,.main_color .toggle_content strong,.main_color .toggle_content strong a,.main_color .tab_content strong,.main_color .tab_content strong a,.main_color .asc_count,.main_color .avia-testimonial-content strong,#top .main_color .av-related-style-full .av-related-title,.main_color .wp-playlist-item-meta.wp-playlist-item-title,#top .main_color .av-no-image-slider h2 a,.main_color .av-small-bar .avia-progress-bar .progressbar-title-wrap,.main_color div .news-headline .news-title,.main_color .av-default-style .av-countdown-cell-inner .av-countdown-time,.main_color .av-default-style.av-countdown-timer.av-flip-numbers .card__top.card-time-color,.main_color .av-default-style.av-countdown-timer.av-flip-numbers .card__bottom.card-time-color,.main_color .av-default-style.av-countdown-timer.av-flip-numbers .card__back.card-time-color::before,.main_color .av-default-style.av-countdown-timer.av-flip-clock .flip-clock__card .flip-clock-counter{color:var(--enfold-main-color-heading)} .main_color .av-countdown-timer.av-events-countdown a .av-countdown-time-label{color:var(--enfold-main-color-color)} .main_color .meta-color,.main_color .sidebar,.main_color .sidebar a,.main_color .minor-meta,.main_color .minor-meta a,.main_color .text-sep,.main_color blockquote,.main_color .post_nav a,.main_color .comment-text,.main_color .side-container-inner,.main_color .news-time,.main_color .pagination a,.main_color .pagination span,.main_color .tweet-text.avatar_no .tweet-time,#top .main_color .extra-mini-title,.main_color .team-member-job-title,.main_color .team-social a,.main_color #js_sort_items a,.grid-entry-excerpt,.main_color .avia-testimonial-subtitle,.main_color .commentmetadata a,.main_color .social_bookmarks a,.main_color .meta-heading>*,.main_color .slide-meta,.main_color .slide-meta a,.main_color .taglist,.main_color .taglist a,.main_color .phone-info,.main_color .phone-info a,.main_color .av-sort-by-term a,.main_color .av-magazine-time,.main_color .av-magazine .av-magazine-entry-icon,.main_color .av-catalogue-content,.main_color .wp-playlist-item-length,.html_modern-blog #top div .main_color .blog-categories a,.html_modern-blog #top div .main_color .blog-categories a:hover{color:var(--enfold-main-color-meta)} .main_color .special-heading-inner-border{border-color:var(--enfold-main-color-color)}.main_color .meta-heading .special-heading-inner-border{border-color:var(--enfold-main-color-meta)} .main_color a,.main_color .widget_first,.main_color strong,.main_color b,.main_color b a,.main_color strong a,.main_color #js_sort_items a:hover,.main_color #js_sort_items a.active_sort,.main_color .av-sort-by-term a.active_sort,.main_color .special_amp,.main_color .taglist a.activeFilter,.main_color #commentform .required,#top .main_color .av-no-color.av-icon-style-border a.av-icon-char,.html_elegant-blog #top .main_color .blog-categories a,.html_elegant-blog #top .main_color .blog-categories a:hover{color:var(--enfold-main-color-primary)} .main_color a:hover,.main_color h1 a:hover,.main_color h2 a:hover,.main_color h3 a:hover,.main_color h4 a:hover,.main_color h5 a:hover,.main_color h6 a:hover,.main_color .template-search a.news-content:hover,.main_color .wp-playlist-item .wp-playlist-caption:hover{color:var(--enfold-main-color-secondary)} .main_color .primary-background,.main_color .primary-background a,div .main_color .button,.main_color #submit,.main_color input[type='submit'],.main_color .small-preview:hover,.main_color .avia-menu-fx,.main_color .avia-menu-fx .avia-arrow,.main_color.iconbox_top .iconbox_icon,.main_color .iconbox_top a.iconbox_icon:hover,.main_color .avia-data-table th.avia-highlight-col,.main_color .avia-color-theme-color,.main_color .avia-color-theme-color:hover,.main_color .image-overlay .image-overlay-inside:before,.main_color .comment-count,.main_color .av_dropcap2,.responsive #top .main_color .av-open-submenu.av-subnav-menu > li > a:hover,#top .main_color .av-open-submenu.av-subnav-menu li > ul a:hover,.main_color .av-colored-style .av-countdown-cell-inner,.main_color .wc-block-components-button:not(.is-link){background-color:var(--enfold-main-color-primary);color:var(--enfold-main-color-constant-font);border-color:var(--enfold-main-color-button-border)} .main_color .av-colored-style.av-countdown-timer.av-flip-numbers .card__top,.main_color .av-colored-style.av-countdown-timer.av-flip-numbers .card__bottom,.main_color .av-colored-style.av-countdown-timer.av-flip-numbers .card__back::before,.main_color .av-colored-style.av-countdown-timer.av-flip-numbers .card__back::after,.main_color .av-colored-style.av-countdown-timer.av-flip-clock .flip-clock-counter{background-color:var(--enfold-main-color-primary);color:var(--enfold-main-color-constant-font)} #top #wrap_all .main_color .av-menu-button-colored > a .avia-menu-text{background-color:var(--enfold-main-color-primary);color:var(--enfold-main-color-constant-font);border-color:var(--enfold-main-color-primary)} #top #wrap_all .main_color .av-menu-button-colored > a .avia-menu-text:after{background-color:var(--enfold-main-color-button-border)} #top .main_color .mobile_menu_toggle{color:var(--enfold-main-color-primary);background:var(--enfold-main-color-bg)} #top .main_color .av-menu-mobile-active .av-subnav-menu > li > a:before{color:var(--enfold-main-color-primary)} #top .main_color .av-open-submenu.av-subnav-menu > li > a:hover:before{color:var(--enfold-main-color-bg)} .main_color .button:hover,.main_color .ajax_controlls a:hover,.main_color #submit:hover,.main_color .big_button:hover,.main_color .contentSlideControlls a:hover,.main_color #submit:hover ,.main_color input[type='submit']:hover{background-color:var(--enfold-main-color-secondary);color:var(--enfold-main-color-bg);border-color:var(--enfold-main-color-button-border2)} .main_color .avia-toc-style-elegant a.avia-toc-level-0:last-child:after,.main_color .avia-toc-style-elegant a:first-child:after,.main_color .avia-toc-style-elegant a.avia-toc-level-0:after{background-color:var(--enfold-main-color-bg);border-color:var(--enfold-main-color-secondary)} .main_color .avia-toc-style-elegant a:first-child span:after,.main_color .avia-toc-style-elegant a.avia-toc-level-0 span:after{background-color:var(--enfold-main-color-bg)} .main_color .avia-toc-style-elegant a:first-child:hover span:after,.main_color .avia-toc-style-elegant a.avia-toc-level-0:hover span:after{border-color:var(--enfold-main-color-secondary)} .main_color .avia-toc-style-elegant a:before{border-color:var(--enfold-main-color-border)} .main_color .avia-toc-style-elegant a:first-child:after,.main_color .avia-toc-style-elegant a.avia-toc-level-0:after{border-color:var(--enfold-main-color-secondary);background-color:var(--enfold-main-color-bg)} .main_color .avia-toc-style-elegant a:last-child:after{background-color:var(--enfold-main-color-border)} .main_color .timeline-bullet{background-color:var(--enfold-main-color-border);border-color:var(--enfold-main-color-bg)} .main_color table,.main_color .widget_nav_menu ul:first-child>.current-menu-item,.main_color .widget_nav_menu ul:first-child>.current_page_item,.main_color .widget_nav_menu ul:first-child>.current-menu-ancestor,.main_color .pagination .current,.main_color .pagination a,.main_color.iconbox_top .iconbox_content,.main_color .av_promobox,.main_color .toggle_content,.main_color .toggler:hover,#top .main_color .av-minimal-toggle .toggler,.main_color .related_posts_default_image,.main_color .search-result-counter,.main_color .container_wrap_meta,.main_color .avia-content-slider .slide-image,.main_color .avia-slider-testimonials .avia-testimonial-content,.main_color .avia-testimonial-arrow-wrap .avia-arrow,.main_color .news-thumb,.main_color .portfolio-preview-content,.main_color .portfolio-preview-content .avia-arrow,.main_color .av-magazine .av-magazine-entry-icon,.main_color .related_posts.av-related-style-full a,.main_color .aviaccordion-slide,.main_color.avia-fullwidth-portfolio .pagination,.main_color .isotope-item.special_av_fullwidth .av_table_col.portfolio-grid-image,.main_color .av-catalogue-list li:hover,.main_color .wp-playlist,.main_color .avia-slideshow-fixed-height > li,.main_color .avia-form-success,.main_color .avia-form-error,.main_color .av-boxed-grid-style .avia-testimonial{background:var(--enfold-main-color-bg2)} #top .main_color .post_timeline li:hover .timeline-bullet{background-color:var(--enfold-main-color-secondary)} .main_color blockquote,.main_color .avia-bullet,.main_color .av-no-color.av-icon-style-border a.av-icon-char{border-color:var(--enfold-main-color-primary)} .html_header_top .main_color .main_menu ul:first-child >li > ul,.html_header_top #top .main_color .avia_mega_div > .sub-menu{border-top-color:var(--enfold-main-color-primary)} .main_color .breadcrumb,.main_color .breadcrumb a,#top .main_color.title_container .main-title,#top .main_color.title_container .main-title a{color:var(--enfold-main-color-color)} .main_color .av-icon-display,#top .main_color .av-related-style-full a:hover .related-format-icon,.main_color .av-default-style .av-countdown-cell-inner,.main_color .av-default-style.av-countdown-timer.av-flip-numbers .card__top,.main_color .av-default-style.av-countdown-timer.av-flip-numbers .card__bottom,.main_color .av-default-style.av-countdown-timer.av-flip-numbers .card__back::before,.main_color .av-default-style.av-countdown-timer.av-flip-numbers .card__back::after,.main_color .av-default-style.av-countdown-timer.av-flip-clock .flip-clock-counter{background-color:var(--enfold-main-color-bg2);color:var(--enfold-main-color-meta)} .main_color .av-masonry-entry:hover .av-icon-display{background-color:var(--enfold-main-color-primary);color:var(--enfold-main-color-constant-font);border-color:var(--enfold-main-color-button-border)} #top .main_color .av-masonry-entry.format-quote:hover .av-icon-display{color:var(--enfold-main-color-primary)} .main_color textarea::placeholder,.main_color input::placeholder{color:var(--enfold-main-color-meta);opacity:0.5} .main_color .header_bg,.main_color .main_menu ul ul,.main_color .main_menu .menu ul li a,.main_color .pointer_arrow_wrap .pointer_arrow,.main_color .avia_mega_div,.main_color .av-subnav-menu > li ul,.main_color .av-subnav-menu a{background-color:var(--enfold-main-color-bg);color:var(--enfold-main-color-meta)} .main_color .main_menu .menu ul li a:hover,.main_color .main_menu .menu ul li a:focus,.main_color .av-subnav-menu ul a:hover,.main_color .av-subnav-menu ul a:focus{background-color:var(--enfold-main-color-bg2)} .main_color .sub_menu>ul>li>a,.main_color .sub_menu>div>ul>li>a,.main_color .main_menu ul:first-child > li > a,#top .main_color .main_menu .menu ul .current_page_item > a,#top .main_color .main_menu .menu ul .current-menu-item > a,#top .main_color .sub_menu li ul a{color:var(--enfold-main-color-meta)} #top .main_color .main_menu .menu ul li > a:hover,#top .main_color .main_menu .menu ul li > a:focus{color:var(--enfold-main-color-color)} .main_color .av-subnav-menu a:hover,.main_color .av-subnav-menu a:focus,.main_color .main_menu ul:first-child > li a:hover,.main_color .main_menu ul:first-child > li a:focus,.main_color .main_menu ul:first-child > li.current-menu-item > a,.main_color .main_menu ul:first-child > li.current_page_item > a,.main_color .main_menu ul:first-child > li.active-parent-item > a{color:var(--enfold-main-color-color)} #top .main_color .main_menu .menu .avia_mega_div ul .current-menu-item > a{color:var(--enfold-main-color-primary)} .main_color .sub_menu > ul > li > a:hover,.main_color .sub_menu > ul > li > a:focus,.main_color .sub_menu > div > ul > li > a:hover,.main_color .sub_menu > div > ul > li > a:focus{color:var(--enfold-main-color-color)} #top .main_color .sub_menu ul li a:hover,#top .main_color .sub_menu ul li a:focus,.main_color .sub_menu ul:first-child > li.current-menu-item > a,.main_color .sub_menu ul:first-child > li.current_page_item > a,.main_color .sub_menu ul:first-child > li.active-parent-item > a{color:var(--enfold-main-color-color)} .main_color .sub_menu li ul a,.main_color #payment,.main_color .sub_menu ul li,.main_color .sub_menu ul,#top .main_color .sub_menu li li a:hover,#top .main_color .sub_menu li li a:focus{background-color:var(--enfold-main-color-bg)} .main_color#header .avia_mega_div > .sub-menu.avia_mega_hr,.html_bottom_nav_header.html_logo_center #top #menu-item-search>a{border-color:var(--enfold-main-color-border)} #top .main_color .widget_pages ul li a:focus,#top .main_color .widget_nav_menu ul li a:focus{color:var(--enfold-main-color-secondary)} @media only screen and (max-width:767px){#top #wrap_all .av_header_transparency{background-color:var(--enfold-main-color-bg);color:var(--enfold-main-color-color);border-color:var(--enfold-main-color-border)}} @media only screen and (max-width:989px){.html_mobile_menu_tablet #top #wrap_all .av_header_transparency{background-color:var(--enfold-main-color-bg);color:var(--enfold-main-color-color);border-color:var(--enfold-main-color-border)}} .main_color .avia-tt,.main_color .avia-tt .avia-arrow,.main_color .avia-tt .avia-arrow{background-color:var(--enfold-main-color-bg);color:var(--enfold-main-color-meta)} .main_color .av_ajax_search_image{background-color:var(--enfold-main-color-primary);color:var(--enfold-main-color-bg)} .main_color .ajax_search_excerpt{color:var(--enfold-main-color-meta)} .main_color .av_ajax_search_title{color:var(--enfold-main-color-heading)} .main_color .ajax_load{background-color:var(--enfold-main-color-primary)} .main_color .av_searchsubmit_wrapper{background-color:var(--enfold-main-color-primary)} #top .main_color .avia-color-theme-color{color:var(--enfold-main-color-button-font);border-color:var(--enfold-main-color-button-border)} .main_color .avia-color-theme-color-subtle{background-color:var(--enfold-main-color-bg2);color:var(--enfold-main-color-color)} .main_color .avia-color-theme-color-subtle:hover{background-color:var(--enfold-main-color-bg);color:var(--enfold-main-color-heading)} #top .main_color .avia-color-theme-color-highlight{color:var(--enfold-main-color-button-font);border-color:var(--enfold-main-color-secondary);background-color:var(--enfold-main-color-secondary)} #top .main_color .avia-font-color-theme-color,#top .main_color .avia-font-color-theme-color-hover:hover{color:var(--enfold-main-color-button-font)} .main_color .avia-font-color-theme-color-subtle{color:var(--enfold-main-color-color)} .main_color .avia-font-color-theme-color-subtle-hover:hover{color:var(--enfold-main-color-heading)} #top .main_color .avia-font-color-theme-color-highlight,#top .main_color .avia-font-color-theme-color-highlight-hover:hover{color:var(--enfold-main-color-button-font)} .main_color .avia-icon-list .iconlist_icon{background-color:var(--enfold-main-color-iconlist)} .main_color .avia-icon-list .iconlist-timeline{border-color:var(--enfold-main-color-border)} .main_color .iconlist_content{color:var(--enfold-main-color-meta)} .main_color .avia-timeline .milestone_icon{background-color:var(--enfold-main-color-timeline)} .main_color .avia-timeline .milestone_inner{background-color:var(--enfold-main-color-timeline)} .main_color .avia-timeline{border-color:var(--enfold-main-color-timeline)} .main_color .av-milestone-icon-wrap:after{border-color:var(--enfold-main-color-timeline)} .main_color .avia-timeline .av-milestone-date{color:var(--enfold-main-color-timeline-date)} .main_color .avia-timeline .av-milestone-date span{background-color:var(--enfold-main-color-timeline)} .main_color .avia-timeline-horizontal .av-milestone-content-wrap footer{background-color:var(--enfold-main-color-timeline)} .main_color .av-timeline-nav a{background-color:var(--enfold-main-color-timeline)} #top .main_color .input-text,#top .main_color input[type='text'],#top .main_color input[type='input'],#top .main_color input[type='password'],#top .main_color input[type='email'],#top .main_color input[type='number'],#top .main_color input[type='url'],#top .main_color input[type='tel'],#top .main_color input[type='search'],#top .main_color textarea,#top .main_color select{border-color:var(--enfold-main-color-border);background-color:var(--enfold-main-color-bg2);color:var(--enfold-main-color-meta)} #top .main_color .invers-color .input-text,#top .main_color .invers-color input[type='text'],#top .main_color .invers-color input[type='input'],#top .main_color .invers-color input[type='password'],#top .main_color .invers-color input[type='email'],#top .main_color .invers-color input[type='number'],#top .main_color .invers-color input[type='url'],#top .main_color .invers-color input[type='tel'],#top .main_color .invers-color input[type='search'],#top .main_color .invers-color textarea,#top .main_color .invers-color select{background-color:var(--enfold-main-color-bg)} .main_color .required{color:var(--enfold-main-color-primary)} .main_color .av-masonry{background-color:var(--enfold-main-color-masonry)} .main_color .av-masonry-pagination,.main_color .av-masonry-pagination:hover,.main_color .av-masonry-outerimage-container{background-color:var(--enfold-main-color-bg)} .main_color .container .av-inner-masonry-content,#top .main_color .container .av-masonry-load-more,#top .main_color .container .av-masonry-sort,.main_color .container .av-masonry-entry .avia-arrow{background-color:var(--enfold-main-color-bg2)} .main_color .hr-short .hr-inner-style,.main_color .hr-short .hr-inner{background-color:var(--enfold-main-color-bg)} div .main_color .tabcontainer .active_tab_content,div .main_color .tabcontainer .active_tab{background-color:var(--enfold-main-color-bg2);color:var(--enfold-main-color-color)} .responsive.js_active #top .main_color .avia_combo_widget .top_tab .tab{border-top-color:var(--enfold-main-color-border)} .main_color .template-archives .tabcontainer a,#top .main_color .tabcontainer .tab:hover,#top .main_color .tabcontainer .tab.active_tab{color:var(--enfold-main-color-color)} .main_color .template-archives .tabcontainer a:hover{color:var(--enfold-main-color-secondary)} .main_color .sidebar_tab_icon{background-color:var(--enfold-main-color-border)} #top .main_color .sidebar_active_tab .sidebar_tab_icon{background-color:var(--enfold-main-color-primary)} .main_color .sidebar_tab:hover .sidebar_tab_icon{background-color:var(--enfold-main-color-secondary)} .main_color .sidebar_tab,.main_color .tabcontainer .tab{color:var(--enfold-main-color-meta)} .main_color div .sidebar_active_tab ,div .main_color .tabcontainer.noborder_tabs .active_tab_content,div .main_color .tabcontainer.noborder_tabs .active_tab{color:var(--enfold-main-color-color);background-color:var(--enfold-main-color-bg)} #top .main_color .avia-smallarrow-slider .avia-slideshow-dots a{background-color:var(--enfold-main-color-bg2)} #top .main_color .avia-smallarrow-slider .avia-slideshow-dots a.active,#top .main_color .avia-smallarrow-slider .avia-slideshow-dots a:hover{background-color:var(--enfold-main-color-meta)} @media only screen and (max-width:767px){.responsive #top .main_color .tabcontainer .active_tab{background-color:var(--enfold-main-color-secondary);color:var(--enfold-main-color-constant-font)} .responsive #top .main_color .tabcontainer{border-color:var(--enfold-main-color-border)} .responsive #top .main_color .active_tab_content{background-color:var(--enfold-main-color-bg2)}} .main_color tr:nth-child(even),.main_color .avia-data-table .avia-heading-row .avia-desc-col,.main_color .avia-data-table .avia-highlight-col,.main_color .pricing-table>li:nth-child(even),body .main_color .pricing-table.avia-desc-col li,#top .main_color .avia-data-table.avia_pricing_minimal th{background-color:var(--enfold-main-color-bg);color:var(--enfold-main-color-color)} .main_color table caption,.main_color tr:nth-child(even),.main_color .pricing-table>li:nth-child(even),#top .main_color .avia-data-table.avia_pricing_minimal td{color:var(--enfold-main-color-meta)} .main_color tr:nth-child(odd),.main_color .pricing-table>li:nth-child(odd),.main_color .pricing-extra{background:var(--enfold-main-color-bg2)} .main_color .pricing-table li.avia-pricing-row,.main_color .pricing-table li.avia-heading-row,.main_color .pricing-table li.avia-pricing-row .pricing-extra{background-color:var(--enfold-main-color-primary);color:var(--enfold-main-color-constant-font);border-color:var(--enfold-main-color-stripe)} .main_color .pricing-table li.avia-heading-row,.main_color .pricing-table li.avia-heading-row .pricing-extra{background-color:var(--enfold-main-color-stripe2);color:var(--enfold-main-color-constant-font);border-color:var(--enfold-main-color-stripe)} .main_color .pricing-table.avia-desc-col .avia-heading-row,.main_color .pricing-table.avia-desc-col .avia-pricing-row{border-color:var(--enfold-main-color-border)} .main_color .theme-color-bar .bar{background:var(--enfold-main-color-primary)} .main_color .mejs-controls .mejs-time-rail .mejs-time-current,.main_color .mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-current,.main_color .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current,.main_color .button.av-sending-button,.main_color .av-striped-bar .theme-color-bar .bar{background:var(--enfold-main-color-primary)} body .main_color .mejs-controls .mejs-time-rail .mejs-time-float{background:var(--enfold-main-color-primary);color:#fff} body .main_color .mejs-controls .mejs-time-rail .mejs-time-float-corner{border:solid 4px var(--enfold-main-color-primary);border-color:var(--enfold-main-color-primary) transparent transparent transparent} .main_color .progress{background-color:var(--enfold-main-color-bg2)} .main_color .av_searchform_element_results .av_ajax_search_entry,.main_color .av_searchform_element_results .av_ajax_search_title,.main_color.av_searchform_element_results .av_ajax_search_entry,.main_color.av_searchform_element_results .av_ajax_search_title{color:var(--enfold-main-color-primary)} .main_color .av_searchform_element_results .ajax_search_excerpt,.main_color.av_searchform_element_results .ajax_search_excerpt{color:var(--enfold-main-color-meta)} .main_color .av_searchform_element_results .av_ajax_search_image,.main_color.av_searchform_element_results .av_ajax_search_image{color:var(--enfold-main-color-meta)} .main_color .button.av-sending-button{background:var(--enfold-main-color-secondary);background-image:linear-gradient(-45deg,var(--enfold-main-color-secondary) 25%,var(--enfold-main-color-stripe2nd) 25%,var(--enfold-main-color-stripe2nd) 50%,var(--enfold-main-color-secondary) 50%,var(--enfold-main-color-secondary) 75%,var(--enfold-main-color-stripe2nd) 75%,var(--enfold-main-color-stripe2nd));border-color:var(--enfold-main-color-secondary)} .main_color span.bbp-admin-links a{color:var(--enfold-main-color-primary)} .main_color span.bbp-admin-links a:hover{color:var(--enfold-main-color-secondary)} #top .main_color .bbp-reply-content,#top .main_color .bbp-topic-content,#top .main_color .bbp-body .super-sticky .page-numbers,#top .main_color .bbp-body .sticky .page-numbers,#top .main_color .bbp-pagination-links a:hover,#top .main_color .bbp-pagination-links span.current{background:var(--enfold-main-color-bg)} #top .main_color .bbp-topics .bbp-header,#top .main_color .bbp-topics .bbp-header,#top .main_color .bbp-forums .bbp-header,#top .main_color .bbp-topics-front ul.super-sticky,#top .main_color .bbp-topics ul.super-sticky,#top .main_color .bbp-topics ul.sticky,#top .main_color .bbp-forum-content ul.sticky,#top .main_color .bbp-body .page-numbers{background-color:var(--enfold-main-color-bg2)} #top .main_color .bbp-meta,#top .main_color .bbp-author-role,#top .main_color .bbp-author-ip,#top .main_color .bbp-pagination-count,#top .main_color .bbp-topics .bbp-body .bbp-topic-title:before{color:var(--enfold-main-color-meta)} #top .main_color .bbp-admin-links{color:var(--enfold-main-color-border)} .main_color #bbpress-forums li.bbp-body ul.forum,.main_color #bbpress-forums li.bbp-body ul.topic,.avia_transform .main_color .bbp-replies .bbp-reply-author:before,.avia_transform .forum-search .main_color .bbp-reply-author:before,.avia_transform .forum-search .main_color .bbp-topic-author:before{background-color:var(--enfold-main-color-bg);border-color:var(--enfold-main-color-border)} #top .main_color .bbp-author-name{color:var(--enfold-main-color-heading)} .main_color .widget_display_stats dt,.main_color .widget_display_stats dd{background-color:var(--enfold-main-color-bg2)} .main_color dropcap2,.main_color dropcap3,.main_color avia_button,.main_color avia_button:hover,.main_color .on-primary-color,.main_color .on-primary-color:hover{color:var(--enfold-main-color-constant-font)} #main{border-color:var(--enfold-main-color-border)} #scroll-top-link:hover,#av-cookie-consent-badge:hover{background-color:var(--enfold-main-color-bg2);color:var(--enfold-main-color-primary);border:1px solid var(--enfold-main-color-border)} .html_stretched #wrap_all{background-color:var(--enfold-main-color-bg)} #top .avia-datepicker-div .ui-datepicker-month,#top .avia-datepicker-div .ui-datepicker-year{color:var(--enfold-main-color-heading)} #top .avia-datepicker-div{background:var(--enfold-main-color-bg);border:1px solid var(--enfold-main-color-border)} #top .avia-datepicker-div a{color:var(--enfold-main-color-meta);background-color:var(--enfold-main-color-bg2)} #top .avia-datepicker-div a.ui-state-active,#top .avia-datepicker-div a.ui-state-highlight{color:var(--enfold-main-color-primary)} #top .avia-datepicker-div a.ui-state-hover{color:var(--enfold-main-color-bg2);background-color:var(--enfold-main-color-meta)} #top .avia-datepicker-div .ui-datepicker-buttonpane button{background-color:var(--enfold-main-color-primary);color:var(--enfold-main-color-constant-font);border-color:var(--enfold-main-color-primary)} #top .av-siteloader{border-color:var(--enfold-main-color-border);border-left-color:var(--enfold-main-color-primary)} #top div.avia-popup .mfp-preloader{border-left-color:var(--enfold-main-color-primary)} .av-preloader-reactive #top .av-siteloader{border-color:var(--enfold-main-color-border)} #top .av-siteloader-wrap{background-color:var(--enfold-main-color-bg)} .av-preloader-reactive #top .av-siteloader:before{background-color:var(--enfold-main-color-border)} .av-tab-section-tab-title-container{background-color:var(--enfold-main-color-bg2)} #top .av-section-tab-title{color:var(--enfold-main-color-meta)} #top a.av-active-tab-title{color:var(--enfold-main-color-primary)} #top .av-tab-arrow-container span{background-color:var(--enfold-main-color-bg)} .header_color,.header_color div,.header_color header,.header_color main,.header_color aside,.header_color footer,.header_color article,.header_color nav,.header_color section,.header_color span,.header_color applet,.header_color object,.header_color iframe,.header_color h1,.header_color h2,.header_color h3,.header_color h4,.header_color h5,.header_color h6,.header_color p,.header_color blockquote,.header_color pre,.header_color a,.header_color abbr,.header_color acronym,.header_color address,.header_color big,.header_color cite,.header_color code,.header_color del,.header_color dfn,.header_color em,.header_color img,.header_color ins,.header_color kbd,.header_color q,.header_color s,.header_color samp,.header_color small,.header_color strike,.header_color strong,.header_color sub,.header_color sup,.header_color tt,.header_color var,.header_color b,.header_color u,.header_color i,.header_color center,.header_color dl,.header_color dt,.header_color dd,.header_color ol,.header_color ul,.header_color li,.header_color fieldset,.header_color form,.header_color label,.header_color legend,.header_color table,.header_color caption,.header_color tbody,.header_color tfoot,.header_color thead,.header_color tr,.header_color th,.header_color td,.header_color article,.header_color aside,.header_color canvas,.header_color details,.header_color embed,.header_color figure,.header_color fieldset,.header_color figcaption,.header_color footer,.header_color header,.header_color hgroup,.header_color menu,.header_color nav,.header_color output,.header_color ruby,.header_color section,.header_color summary,.header_color time,.header_color mark,.header_color audio,.header_color video,#top .header_color .pullquote_boxed,.responsive #top .header_color .avia-testimonial,.responsive #top.avia-blank #main .header_color.container_wrap:first-child,#top .header_color.fullsize .template-blog .post_delimiter,.header_color .related_posts.av-related-style-full a{border-color:var(--enfold-header-color-border)} .header_color .rounded-container,#top .header_color .pagination a:hover,.header_color .small-preview,.header_color .fallback-post-type-icon{background:var(--enfold-header-color-meta);color:var(--enfold-header-color-bg)} .header_color .av-default-color,#top .header_color .av-force-default-color,.header_color .av-catalogue-item,.header_color .wp-playlist-item .wp-playlist-caption,.header_color .wp-playlist{color:var(--enfold-header-color-color)} .header_color,.header_color .site-background,.header_color .first-quote,.header_color .related_image_wrap,.header_color .gravatar img.header_color .hr_content,.header_color .news-thumb,.header_color .post-format-icon,.header_color .ajax_controlls a,.header_color .tweet-text.avatar_no,.header_color .toggler,.header_color .toggler.activeTitle:hover,.header_color #js_sort_items,.header_color.inner-entry,.header_color .grid-entry-title,.header_color .related-format-icon,.grid-entry .header_color .avia-arrow,.header_color .avia-gallery-big,.header_color .avia-gallery-big,.header_color .avia-gallery img,.header_color .grid-content,.header_color .av-share-box ul,#top .header_color .av-related-style-full .related-format-icon,.header_color .related_posts.av-related-style-full a:hover,.header_color.avia-fullwidth-portfolio .pagination .current,.header_color.avia-fullwidth-portfolio .pagination a,.header_color .av-hotspot-fallback-tooltip-inner,.header_color .av-hotspot-fallback-tooltip-count{background-color:var(--enfold-header-color-bg);color:var(--enfold-header-color-color)} .header_color .avia-fold-unfold-section .av-fold-unfold-container::after{background:linear-gradient( to bottom,rgba(255,255,255,0),rgba(255,255,255,1) )} .header_color .avia-fold-unfold-section .av-fold-button-container:not(.avia-button),.header_color.avia-fold-unfold-section .av-fold-button-container:not(.avia-button){color:var(--enfold-header-color-color)} .header_color .avia-fold-unfold-section .av-fold-button-container.fold-button{background:var(--enfold-header-color-bg);border-color:var(--enfold-header-color-border)} .header_color .avia-curtain-reveal-overlay{background:var(--enfold-header-color-bg)} .header_color .avia-icon-circles-icon{background:var(--enfold-header-color-bg);border-color:var(--enfold-header-color-border);color:var(--enfold-header-color-color)} .header_color .avia-icon-circles-icon.active{background:var(--enfold-header-color-secondary);border-color:var(--enfold-header-color-secondary);color:var(--enfold-header-color-bg)} .header_color .avia-icon-circles-icon-text{color:var(--enfold-header-color-color);background:var(--enfold-header-color-bg)} .header_color .heading-color,.header_color a.iconbox_icon:hover,.header_color h1,.header_color h2,.header_color h3,.header_color h4,.header_color h5,.header_color h6,.header_color .sidebar .current_page_item>a,.header_color .sidebar .current-menu-item>a,.header_color .pagination .current,.header_color .pagination a:hover,.header_color strong.avia-testimonial-name,.header_color .heading,.header_color .toggle_content strong,.header_color .toggle_content strong a,.header_color .tab_content strong,.header_color .tab_content strong a,.header_color .asc_count,.header_color .avia-testimonial-content strong,#top .header_color .av-related-style-full .av-related-title,.header_color .wp-playlist-item-meta.wp-playlist-item-title,#top .header_color .av-no-image-slider h2 a,.header_color .av-small-bar .avia-progress-bar .progressbar-title-wrap,.header_color div .news-headline .news-title,.header_color .av-default-style .av-countdown-cell-inner .av-countdown-time,.header_color .av-default-style.av-countdown-timer.av-flip-numbers .card__top.card-time-color,.header_color .av-default-style.av-countdown-timer.av-flip-numbers .card__bottom.card-time-color,.header_color .av-default-style.av-countdown-timer.av-flip-numbers .card__back.card-time-color::before,.header_color .av-default-style.av-countdown-timer.av-flip-clock .flip-clock__card .flip-clock-counter{color:var(--enfold-header-color-heading)} .header_color .av-countdown-timer.av-events-countdown a .av-countdown-time-label{color:var(--enfold-header-color-color)} .header_color .meta-color,.header_color .sidebar,.header_color .sidebar a,.header_color .minor-meta,.header_color .minor-meta a,.header_color .text-sep,.header_color blockquote,.header_color .post_nav a,.header_color .comment-text,.header_color .side-container-inner,.header_color .news-time,.header_color .pagination a,.header_color .pagination span,.header_color .tweet-text.avatar_no .tweet-time,#top .header_color .extra-mini-title,.header_color .team-member-job-title,.header_color .team-social a,.header_color #js_sort_items a,.grid-entry-excerpt,.header_color .avia-testimonial-subtitle,.header_color .commentmetadata a,.header_color .social_bookmarks a,.header_color .meta-heading>*,.header_color .slide-meta,.header_color .slide-meta a,.header_color .taglist,.header_color .taglist a,.header_color .phone-info,.header_color .phone-info a,.header_color .av-sort-by-term a,.header_color .av-magazine-time,.header_color .av-magazine .av-magazine-entry-icon,.header_color .av-catalogue-content,.header_color .wp-playlist-item-length,.html_modern-blog #top div .header_color .blog-categories a,.html_modern-blog #top div .header_color .blog-categories a:hover{color:var(--enfold-header-color-meta)} .header_color .special-heading-inner-border{border-color:var(--enfold-header-color-color)}.header_color .meta-heading .special-heading-inner-border{border-color:var(--enfold-header-color-meta)} .header_color a,.header_color .widget_first,.header_color strong,.header_color b,.header_color b a,.header_color strong a,.header_color #js_sort_items a:hover,.header_color #js_sort_items a.active_sort,.header_color .av-sort-by-term a.active_sort,.header_color .special_amp,.header_color .taglist a.activeFilter,.header_color #commentform .required,#top .header_color .av-no-color.av-icon-style-border a.av-icon-char,.html_elegant-blog #top .header_color .blog-categories a,.html_elegant-blog #top .header_color .blog-categories a:hover{color:var(--enfold-header-color-primary)} .header_color a:hover,.header_color h1 a:hover,.header_color h2 a:hover,.header_color h3 a:hover,.header_color h4 a:hover,.header_color h5 a:hover,.header_color h6 a:hover,.header_color .template-search a.news-content:hover,.header_color .wp-playlist-item .wp-playlist-caption:hover{color:var(--enfold-header-color-secondary)} .header_color .primary-background,.header_color .primary-background a,div .header_color .button,.header_color #submit,.header_color input[type='submit'],.header_color .small-preview:hover,.header_color .avia-menu-fx,.header_color .avia-menu-fx .avia-arrow,.header_color.iconbox_top .iconbox_icon,.header_color .iconbox_top a.iconbox_icon:hover,.header_color .avia-data-table th.avia-highlight-col,.header_color .avia-color-theme-color,.header_color .avia-color-theme-color:hover,.header_color .image-overlay .image-overlay-inside:before,.header_color .comment-count,.header_color .av_dropcap2,.responsive #top .header_color .av-open-submenu.av-subnav-menu > li > a:hover,#top .header_color .av-open-submenu.av-subnav-menu li > ul a:hover,.header_color .av-colored-style .av-countdown-cell-inner,.header_color .wc-block-components-button:not(.is-link){background-color:var(--enfold-header-color-primary);color:var(--enfold-header-color-constant-font);border-color:var(--enfold-header-color-button-border)} .header_color .av-colored-style.av-countdown-timer.av-flip-numbers .card__top,.header_color .av-colored-style.av-countdown-timer.av-flip-numbers .card__bottom,.header_color .av-colored-style.av-countdown-timer.av-flip-numbers .card__back::before,.header_color .av-colored-style.av-countdown-timer.av-flip-numbers .card__back::after,.header_color .av-colored-style.av-countdown-timer.av-flip-clock .flip-clock-counter{background-color:var(--enfold-header-color-primary);color:var(--enfold-header-color-constant-font)} #top #wrap_all .header_color .av-menu-button-colored > a .avia-menu-text{background-color:var(--enfold-header-color-primary);color:var(--enfold-header-color-constant-font);border-color:var(--enfold-header-color-primary)} #top #wrap_all .header_color .av-menu-button-colored > a .avia-menu-text:after{background-color:var(--enfold-header-color-button-border)} #top .header_color .mobile_menu_toggle{color:var(--enfold-header-color-primary);background:var(--enfold-header-color-bg)} #top .header_color .av-menu-mobile-active .av-subnav-menu > li > a:before{color:var(--enfold-header-color-primary)} #top .header_color .av-open-submenu.av-subnav-menu > li > a:hover:before{color:var(--enfold-header-color-bg)} .header_color .button:hover,.header_color .ajax_controlls a:hover,.header_color #submit:hover,.header_color .big_button:hover,.header_color .contentSlideControlls a:hover,.header_color #submit:hover ,.header_color input[type='submit']:hover{background-color:var(--enfold-header-color-secondary);color:var(--enfold-header-color-bg);border-color:var(--enfold-header-color-button-border2)} .header_color .avia-toc-style-elegant a.avia-toc-level-0:last-child:after,.header_color .avia-toc-style-elegant a:first-child:after,.header_color .avia-toc-style-elegant a.avia-toc-level-0:after{background-color:var(--enfold-header-color-bg);border-color:var(--enfold-header-color-secondary)} .header_color .avia-toc-style-elegant a:first-child span:after,.header_color .avia-toc-style-elegant a.avia-toc-level-0 span:after{background-color:var(--enfold-header-color-bg)} .header_color .avia-toc-style-elegant a:first-child:hover span:after,.header_color .avia-toc-style-elegant a.avia-toc-level-0:hover span:after{border-color:var(--enfold-header-color-secondary)} .header_color .avia-toc-style-elegant a:before{border-color:var(--enfold-header-color-border)} .header_color .avia-toc-style-elegant a:first-child:after,.header_color .avia-toc-style-elegant a.avia-toc-level-0:after{border-color:var(--enfold-header-color-secondary);background-color:var(--enfold-header-color-bg)} .header_color .avia-toc-style-elegant a:last-child:after{background-color:var(--enfold-header-color-border)} .header_color .timeline-bullet{background-color:var(--enfold-header-color-border);border-color:var(--enfold-header-color-bg)} .header_color table,.header_color .widget_nav_menu ul:first-child>.current-menu-item,.header_color .widget_nav_menu ul:first-child>.current_page_item,.header_color .widget_nav_menu ul:first-child>.current-menu-ancestor,.header_color .pagination .current,.header_color .pagination a,.header_color.iconbox_top .iconbox_content,.header_color .av_promobox,.header_color .toggle_content,.header_color .toggler:hover,#top .header_color .av-minimal-toggle .toggler,.header_color .related_posts_default_image,.header_color .search-result-counter,.header_color .container_wrap_meta,.header_color .avia-content-slider .slide-image,.header_color .avia-slider-testimonials .avia-testimonial-content,.header_color .avia-testimonial-arrow-wrap .avia-arrow,.header_color .news-thumb,.header_color .portfolio-preview-content,.header_color .portfolio-preview-content .avia-arrow,.header_color .av-magazine .av-magazine-entry-icon,.header_color .related_posts.av-related-style-full a,.header_color .aviaccordion-slide,.header_color.avia-fullwidth-portfolio .pagination,.header_color .isotope-item.special_av_fullwidth .av_table_col.portfolio-grid-image,.header_color .av-catalogue-list li:hover,.header_color .wp-playlist,.header_color .avia-slideshow-fixed-height > li,.header_color .avia-form-success,.header_color .avia-form-error,.header_color .av-boxed-grid-style .avia-testimonial{background:var(--enfold-header-color-bg2)} #top .header_color .post_timeline li:hover .timeline-bullet{background-color:var(--enfold-header-color-secondary)} .header_color blockquote,.header_color .avia-bullet,.header_color .av-no-color.av-icon-style-border a.av-icon-char{border-color:var(--enfold-header-color-primary)} .html_header_top .header_color .main_menu ul:first-child >li > ul,.html_header_top #top .header_color .avia_mega_div > .sub-menu{border-top-color:var(--enfold-header-color-primary)} .header_color .breadcrumb,.header_color .breadcrumb a,#top .header_color.title_container .main-title,#top .header_color.title_container .main-title a{color:var(--enfold-header-color-color)} .header_color .av-icon-display,#top .header_color .av-related-style-full a:hover .related-format-icon,.header_color .av-default-style .av-countdown-cell-inner,.header_color .av-default-style.av-countdown-timer.av-flip-numbers .card__top,.header_color .av-default-style.av-countdown-timer.av-flip-numbers .card__bottom,.header_color .av-default-style.av-countdown-timer.av-flip-numbers .card__back::before,.header_color .av-default-style.av-countdown-timer.av-flip-numbers .card__back::after,.header_color .av-default-style.av-countdown-timer.av-flip-clock .flip-clock-counter{background-color:var(--enfold-header-color-bg2);color:var(--enfold-header-color-meta)} .header_color .av-masonry-entry:hover .av-icon-display{background-color:var(--enfold-header-color-primary);color:var(--enfold-header-color-constant-font);border-color:var(--enfold-header-color-button-border)} #top .header_color .av-masonry-entry.format-quote:hover .av-icon-display{color:var(--enfold-header-color-primary)} .header_color textarea::placeholder,.header_color input::placeholder{color:var(--enfold-header-color-meta);opacity:0.5} .header_color .header_bg,.header_color .main_menu ul ul,.header_color .main_menu .menu ul li a,.header_color .pointer_arrow_wrap .pointer_arrow,.header_color .avia_mega_div,.header_color .av-subnav-menu > li ul,.header_color .av-subnav-menu a{background-color:var(--enfold-header-color-bg);color:var(--enfold-header-color-meta)} .header_color .main_menu .menu ul li a:hover,.header_color .main_menu .menu ul li a:focus,.header_color .av-subnav-menu ul a:hover,.header_color .av-subnav-menu ul a:focus{background-color:var(--enfold-header-color-bg2)} .header_color .sub_menu>ul>li>a,.header_color .sub_menu>div>ul>li>a,.header_color .main_menu ul:first-child > li > a,#top .header_color .main_menu .menu ul .current_page_item > a,#top .header_color .main_menu .menu ul .current-menu-item > a,#top .header_color .sub_menu li ul a{color:var(--enfold-header-color-meta)} #top .header_color .main_menu .menu ul li > a:hover,#top .header_color .main_menu .menu ul li > a:focus{color:var(--enfold-header-color-color)} .header_color .av-subnav-menu a:hover,.header_color .av-subnav-menu a:focus,.header_color .main_menu ul:first-child > li a:hover,.header_color .main_menu ul:first-child > li a:focus,.header_color .main_menu ul:first-child > li.current-menu-item > a,.header_color .main_menu ul:first-child > li.current_page_item > a,.header_color .main_menu ul:first-child > li.active-parent-item > a{color:var(--enfold-header-color-color)} #top .header_color .main_menu .menu .avia_mega_div ul .current-menu-item > a{color:var(--enfold-header-color-primary)} .header_color .sub_menu > ul > li > a:hover,.header_color .sub_menu > ul > li > a:focus,.header_color .sub_menu > div > ul > li > a:hover,.header_color .sub_menu > div > ul > li > a:focus{color:var(--enfold-header-color-color)} #top .header_color .sub_menu ul li a:hover,#top .header_color .sub_menu ul li a:focus,.header_color .sub_menu ul:first-child > li.current-menu-item > a,.header_color .sub_menu ul:first-child > li.current_page_item > a,.header_color .sub_menu ul:first-child > li.active-parent-item > a{color:var(--enfold-header-color-color)} .header_color .sub_menu li ul a,.header_color #payment,.header_color .sub_menu ul li,.header_color .sub_menu ul,#top .header_color .sub_menu li li a:hover,#top .header_color .sub_menu li li a:focus{background-color:var(--enfold-header-color-bg)} .header_color#header .avia_mega_div > .sub-menu.avia_mega_hr,.html_bottom_nav_header.html_logo_center #top #menu-item-search>a{border-color:var(--enfold-header-color-border)} #top .header_color .widget_pages ul li a:focus,#top .header_color .widget_nav_menu ul li a:focus{color:var(--enfold-header-color-secondary)} @media only screen and (max-width:767px){#top #wrap_all .av_header_transparency{background-color:var(--enfold-header-color-bg);color:var(--enfold-header-color-color);border-color:var(--enfold-header-color-border)}} @media only screen and (max-width:989px){.html_mobile_menu_tablet #top #wrap_all .av_header_transparency{background-color:var(--enfold-header-color-bg);color:var(--enfold-header-color-color);border-color:var(--enfold-header-color-border)}} .header_color .avia-tt,.header_color .avia-tt .avia-arrow,.header_color .avia-tt .avia-arrow{background-color:var(--enfold-header-color-bg);color:var(--enfold-header-color-meta)} .header_color .av_ajax_search_image{background-color:var(--enfold-header-color-primary);color:var(--enfold-header-color-bg)} .header_color .ajax_search_excerpt{color:var(--enfold-header-color-meta)} .header_color .av_ajax_search_title{color:var(--enfold-header-color-heading)} .header_color .ajax_load{background-color:var(--enfold-header-color-primary)} .header_color .av_searchsubmit_wrapper{background-color:var(--enfold-header-color-primary)} #top .header_color .avia-color-theme-color{color:var(--enfold-header-color-button-font);border-color:var(--enfold-header-color-button-border)} .header_color .avia-color-theme-color-subtle{background-color:var(--enfold-header-color-bg2);color:var(--enfold-header-color-color)} .header_color .avia-color-theme-color-subtle:hover{background-color:var(--enfold-header-color-bg);color:var(--enfold-header-color-heading)} #top .header_color .avia-color-theme-color-highlight{color:var(--enfold-header-color-button-font);border-color:var(--enfold-header-color-secondary);background-color:var(--enfold-header-color-secondary)} #top .header_color .avia-font-color-theme-color,#top .header_color .avia-font-color-theme-color-hover:hover{color:var(--enfold-header-color-button-font)} .header_color .avia-font-color-theme-color-subtle{color:var(--enfold-header-color-color)} .header_color .avia-font-color-theme-color-subtle-hover:hover{color:var(--enfold-header-color-heading)} #top .header_color .avia-font-color-theme-color-highlight,#top .header_color .avia-font-color-theme-color-highlight-hover:hover{color:var(--enfold-header-color-button-font)} .header_color .avia-icon-list .iconlist_icon{background-color:var(--enfold-header-color-iconlist)} .header_color .avia-icon-list .iconlist-timeline{border-color:var(--enfold-header-color-border)} .header_color .iconlist_content{color:var(--enfold-header-color-meta)} .header_color .avia-timeline .milestone_icon{background-color:var(--enfold-header-color-timeline)} .header_color .avia-timeline .milestone_inner{background-color:var(--enfold-header-color-timeline)} .header_color .avia-timeline{border-color:var(--enfold-header-color-timeline)} .header_color .av-milestone-icon-wrap:after{border-color:var(--enfold-header-color-timeline)} .header_color .avia-timeline .av-milestone-date{color:var(--enfold-header-color-timeline-date)} .header_color .avia-timeline .av-milestone-date span{background-color:var(--enfold-header-color-timeline)} .header_color .avia-timeline-horizontal .av-milestone-content-wrap footer{background-color:var(--enfold-header-color-timeline)} .header_color .av-timeline-nav a{background-color:var(--enfold-header-color-timeline)} #top .header_color .input-text,#top .header_color input[type='text'],#top .header_color input[type='input'],#top .header_color input[type='password'],#top .header_color input[type='email'],#top .header_color input[type='number'],#top .header_color input[type='url'],#top .header_color input[type='tel'],#top .header_color input[type='search'],#top .header_color textarea,#top .header_color select{border-color:var(--enfold-header-color-border);background-color:var(--enfold-header-color-bg2);color:var(--enfold-header-color-meta)} #top .header_color .invers-color .input-text,#top .header_color .invers-color input[type='text'],#top .header_color .invers-color input[type='input'],#top .header_color .invers-color input[type='password'],#top .header_color .invers-color input[type='email'],#top .header_color .invers-color input[type='number'],#top .header_color .invers-color input[type='url'],#top .header_color .invers-color input[type='tel'],#top .header_color .invers-color input[type='search'],#top .header_color .invers-color textarea,#top .header_color .invers-color select{background-color:var(--enfold-header-color-bg)} .header_color .required{color:var(--enfold-header-color-primary)} .header_color .av-masonry{background-color:var(--enfold-header-color-masonry)} .header_color .av-masonry-pagination,.header_color .av-masonry-pagination:hover,.header_color .av-masonry-outerimage-container{background-color:var(--enfold-header-color-bg)} .header_color .container .av-inner-masonry-content,#top .header_color .container .av-masonry-load-more,#top .header_color .container .av-masonry-sort,.header_color .container .av-masonry-entry .avia-arrow{background-color:var(--enfold-header-color-bg2)} .header_color .hr-short .hr-inner-style,.header_color .hr-short .hr-inner{background-color:var(--enfold-header-color-bg)} div .header_color .tabcontainer .active_tab_content,div .header_color .tabcontainer .active_tab{background-color:var(--enfold-header-color-bg2);color:var(--enfold-header-color-color)} .responsive.js_active #top .header_color .avia_combo_widget .top_tab .tab{border-top-color:var(--enfold-header-color-border)} .header_color .template-archives .tabcontainer a,#top .header_color .tabcontainer .tab:hover,#top .header_color .tabcontainer .tab.active_tab{color:var(--enfold-header-color-color)} .header_color .template-archives .tabcontainer a:hover{color:var(--enfold-header-color-secondary)} .header_color .sidebar_tab_icon{background-color:var(--enfold-header-color-border)} #top .header_color .sidebar_active_tab .sidebar_tab_icon{background-color:var(--enfold-header-color-primary)} .header_color .sidebar_tab:hover .sidebar_tab_icon{background-color:var(--enfold-header-color-secondary)} .header_color .sidebar_tab,.header_color .tabcontainer .tab{color:var(--enfold-header-color-meta)} .header_color div .sidebar_active_tab ,div .header_color .tabcontainer.noborder_tabs .active_tab_content,div .header_color .tabcontainer.noborder_tabs .active_tab{color:var(--enfold-header-color-color);background-color:var(--enfold-header-color-bg)} #top .header_color .avia-smallarrow-slider .avia-slideshow-dots a{background-color:var(--enfold-header-color-bg2)} #top .header_color .avia-smallarrow-slider .avia-slideshow-dots a.active,#top .header_color .avia-smallarrow-slider .avia-slideshow-dots a:hover{background-color:var(--enfold-header-color-meta)} @media only screen and (max-width:767px){.responsive #top .header_color .tabcontainer .active_tab{background-color:var(--enfold-header-color-secondary);color:var(--enfold-header-color-constant-font)} .responsive #top .header_color .tabcontainer{border-color:var(--enfold-header-color-border)} .responsive #top .header_color .active_tab_content{background-color:var(--enfold-header-color-bg2)}} .header_color tr:nth-child(even),.header_color .avia-data-table .avia-heading-row .avia-desc-col,.header_color .avia-data-table .avia-highlight-col,.header_color .pricing-table>li:nth-child(even),body .header_color .pricing-table.avia-desc-col li,#top .header_color .avia-data-table.avia_pricing_minimal th{background-color:var(--enfold-header-color-bg);color:var(--enfold-header-color-color)} .header_color table caption,.header_color tr:nth-child(even),.header_color .pricing-table>li:nth-child(even),#top .header_color .avia-data-table.avia_pricing_minimal td{color:var(--enfold-header-color-meta)} .header_color tr:nth-child(odd),.header_color .pricing-table>li:nth-child(odd),.header_color .pricing-extra{background:var(--enfold-header-color-bg2)} .header_color .pricing-table li.avia-pricing-row,.header_color .pricing-table li.avia-heading-row,.header_color .pricing-table li.avia-pricing-row .pricing-extra{background-color:var(--enfold-header-color-primary);color:var(--enfold-header-color-constant-font);border-color:var(--enfold-header-color-stripe)} .header_color .pricing-table li.avia-heading-row,.header_color .pricing-table li.avia-heading-row .pricing-extra{background-color:var(--enfold-header-color-stripe2);color:var(--enfold-header-color-constant-font);border-color:var(--enfold-header-color-stripe)} .header_color .pricing-table.avia-desc-col .avia-heading-row,.header_color .pricing-table.avia-desc-col .avia-pricing-row{border-color:var(--enfold-header-color-border)} .header_color .theme-color-bar .bar{background:var(--enfold-header-color-primary)} .header_color .mejs-controls .mejs-time-rail .mejs-time-current,.header_color .mejs-controls .mejs-volume-button .mejs-volume-slider .mejs-volume-current,.header_color .mejs-controls .mejs-horizontal-volume-slider .mejs-horizontal-volume-current,.header_color .button.av-sending-button,.header_color .av-striped-bar .theme-color-bar .bar{background:var(--enfold-header-color-primary)} body .header_color .mejs-controls .mejs-time-rail .mejs-time-float{background:var(--enfold-header-color-primary);color:#fff} body .header_color .mejs-controls .mejs-time-rail .mejs-time-float-corner{border:solid 4px var(--enfold-header-color-primary);border-color:var(--enfold-header-color-primary) transparent transparent transparent} .header_color .progress{background-color:var(--enfold-header-color-bg2)} .header_color .av_searchform_element_results .av_ajax_search_entry,.header_color .av_searchform_element_results .av_ajax_search_title,.header_color.av_searchform_element_results .av_ajax_search_entry,.header_color.av_searchform_element_results .av_ajax_search_title{color:var(--enfold-header-color-primary)} .header_color .av_searchform_element_results .ajax_search_excerpt,.header_color.av_searchform_element_results .ajax_search_excerpt{color:var(--enfold-header-color-meta)} .header_color .av_searchform_element_results .av_ajax_search_image,.header_color.av_searchform_element_results .av_ajax_search_image{color:var(--enfold-header-color-meta)} .header_color .button.av-sending-button{background:var(--enfold-header-color-secondary);background-image:linear-gradient(-45deg,var(--enfold-header-color-secondary) 25%,var(--enfold-header-color-stripe2nd) 25%,var(--enfold-header-color-stripe2nd) 50%,var(--enfold-header-color-secondary) 50%,var(--enfold-header-color-secondary) 75%,var(--enfold-header-color-stripe2nd) 75%,var(--enfold-header-color-stripe2nd));border-color:var(--enfold-header-color-secondary)} .header_color span.bbp-admin-links a{color:var(--enfold-header-color-primary)} .header_color span.bbp-admin-links a:hover{color:var(--enfold-header-color-secondary)} #top .header_color .bbp-reply-content,#top .header_color .bbp-topic-content,#top .header_color .bbp-body .super-sticky .page-numbers,#top .header_color .bbp-body .sticky .page-numbers,#top .header_color .bbp-pagination-links a:hover,#top .header_color .bbp-pagination-links span.current{background:var(--enfold-header-color-bg)} #top .header_color .bbp-topics .bbp-header,#top .header_color .bbp-topics .bbp-header,#top .header_color .bbp-forums .bbp-header,#top .header_color .bbp-topics-front ul.super-sticky,#top .header_color .bbp-topics ul.super-sticky,#top .header_color .bbp-topics ul.sticky,#top .header_color .bbp-forum-content ul.sticky,#top .header_color .bbp-body .page-numbers{background-color:var(--enfold-header-color-bg2)} #top .header_color .bbp-meta,#top .header_color .bbp-author-role,#top .header_color .bbp-author-ip,#top .header_color .bbp-pagination-count,#top .header_color .bbp-topics .bbp-body .bbp-topic-title:before{color:var(--enfold-header-color-meta)} #top .header_color .bbp-admin-links{color:var(--enfold-header-color-border)} .header_color #bbpress-forums li.bbp-body ul.forum,.header_color #bbpress-forums li.bbp-body ul.topic,.avia_transform .header_color .bbp-replies .bbp-reply-author:before,.avia_transform .forum-search .header_color .bbp-reply-author:before,.avia_transform .forum-search .header_color .bbp-topic-author:before{background-color:var(--enfold-header-color-bg);border-color:var(--enfold-header-color-border)} #top .header_color .bbp-author-name{color:var(--enfold-header-color-heading)} .header_color .widget_display_stats dt,.header_color .widget_display_stats dd{background-color:var(--enfold-header-color-bg2)} .header_color dropcap2,.header_color dropcap3,.header_color avia_button,.header_color avia_button:hover,.header_color .on-primary-color,.header_color .on-primary-color:hover{color:var(--enfold-header-color-constant-font)} #main,.avia-msie-8 .av_header_sticky_disabled#header{background-color:var(--enfold-header-color-bg)} .html_header_sidebar #header .av-main-nav > li > a .avia-menu-text{color:var(--enfold-header-color-heading)} .html_header_sidebar #header .av-main-nav > li > a .avia-menu-subtext{color:var(--enfold-header-color-meta)} .html_header_sidebar #header .av-main-nav > li:hover > a .avia-menu-text,.html_header_sidebar #header .av-main-nav > li.current-menu-ancestor > a .avia-menu-text,.html_header_sidebar #header .av-main-nav li.current-menu-item > a .avia-menu-text{color:var(--enfold-header-color-primary)} #top #wrap_all .av_seperator_big_border#header .av-menu-button-colored > a{background-color:var(--enfold-header-color-primary)} #top #wrap_all .av_seperator_big_border#header .av-menu-button-bordered > a{background-color:var(--enfold-header-color-bg2)} html.html_header_sidebar #wrap_all{background-color:var(--enfold-header-color-bg)} .header_color .av-hamburger-inner,.header_color .av-hamburger-inner::before,.header_color .av-hamburger-inner::after{background-color:var(--enfold-header-color-meta)} .html_av-overlay-side #top .av-burger-overlay-scroll{background:var(--enfold-header-color-bg)} .html_av-overlay-side #top #wrap_all div .av-burger-overlay-scroll #av-burger-menu-ul a:hover{background-color:var(--enfold-header-color-bg2)} .html_av-overlay-side-classic #top #wrap_all .av-burger-overlay #av-burger-menu-ul li a{border-color:var(--enfold-header-color-border)} .html_av-overlay-side #top #wrap_all .av-burger-overlay-scroll #av-burger-menu-ul a{color:var(--enfold-header-color-color)} .html_av-overlay-side.av-burger-overlay-active #top #wrap_all #header .menu-item-search-dropdown a{color:var(--enfold-header-color-color)} .html_av-overlay-side-classic #top .av-burger-overlay li li .avia-bullet,.html_av-overlay-side.av-burger-overlay-active #top .av-hamburger-inner,.html_av-overlay-side.av-burger-overlay-active #top .av-hamburger-inner::before,.html_av-overlay-side.av-burger-overlay-active #top .av-hamburger-inner::after{background-color:var(--enfold-header-color-color)} #header .header-reading-progress{background-color:var(--enfold-header-color-heading)} .html_av-overlay-side .av-burger-overlay-scroll{width:350px;transform:translateX(350px)} .bbp-topics .bbp-body .bbp-topic-title:before{content:'\E83b';font-family:'entypo-fontello'} .bbp-topics .bbp-body .topic-voices-multi .bbp-topic-title:before{content:'\E83c';font-family:'entypo-fontello'} .bbp-topics .bbp-body .super-sticky .bbp-topic-title:before{content:'\E808';font-family:'entypo-fontello'} .bbp-topics .bbp-body .sticky .bbp-topic-title:before{content:'\E809';font-family:'entypo-fontello'} .bbp-topics .bbp-body .status-closed .bbp-topic-title:before{content:'\E824';font-family:'entypo-fontello'} .bbp-topics .bbp-body .super-sticky.status-closed .bbp-topic-title:before{content:'\E809\E824';font-family:'entypo-fontello'} .bbp-topics .bbp-body .sticky.status-closed .bbp-topic-title:before{content:'\E808\E824';font-family:'entypo-fontello'} #top .avia-layerslider .ls-nav-prev:before{content:'\E87c';font-family:'entypo-fontello'} #top .avia-layerslider .ls-nav-next:before{content:'\E87d';font-family:'entypo-fontello'} #top .avia-layerslider .ls-nav-start:before,#top .avia_playpause_icon:before{content:'\E897';font-family:'entypo-fontello'} #top .avia-layerslider .ls-nav-stop:before,#top .avia_playpause_icon.av-pause:before{content:'\E899';font-family:'entypo-fontello'} .image-overlay .image-overlay-inside:before{content:'\E869';font-family:'entypo-fontello'} .image-overlay.overlay-type-extern .image-overlay-inside:before{content:'\E832';font-family:'entypo-fontello'} .image-overlay.overlay-type-video .image-overlay-inside:before{content:'\E897';font-family:'entypo-fontello'} div.avia-popup button.mfp-arrow:before{content:'\E87d';font-family:'entypo-fontello'} div.avia-popup button.mfp-arrow-left:before{content:'\E87c';font-family:'entypo-fontello'}
.html_header_transparency #top .avia-builder-el-0 .container, .html_header_transparency #top .avia-builder-el-0 .slideshow_caption{padding-top:84px;}
h1, h2, h3, h4, h5, h6, #top .title_container .main-title, tr.pricing-row td, #top .portfolio-title, .callout .content-area, .avia-big-box .avia-innerbox, .av-special-font, .av-current-sort-title, .html_elegant-blog #top .minor-meta, #av-burger-menu-ul li {font-family:'open sans', Helvetica, Arial, sans-serif; }

:root {
--enfold-font-family-heading: 'open sans', Helvetica, Arial, sans-serif;
}


body.open_sans {font-family:'open sans', Helvetica, Arial, sans-serif; }

:root {
--enfold-font-family-body: 'open sans', Helvetica, Arial, sans-serif;
}


#top .av-main-nav ul ul{left:225px !important;margin-top:-36px !important}#top .avia-layerslider .ls-wp-container.wexoe-main-slider{margin-top:44px !important}@media (max-width:989px){#top .avia-layerslider .ls-wp-container.wexoe-main-slider{margin-top:56px !important}}.ls-fullwidth .ls-bottom-nav-wrapper{top:-10px !important}.ls-fullwidth .ls-bottom-slidebuttons a{margin-left:4px !important;margin-right:4px !important}#header_meta .phone-info,#top #header_meta .phone-info a{font-size:14px !important}#header nav ul li .avia-menu-text{font-size:20px !important}#header nav ul li ul li .avia-menu-text{font-size:16px !important}#top .av-main-nav ul.sub-menu li a{color:#787878 !important;font-size:14px !important;font-weight:400 !important;line-height:20px !important;padding:7px 15px 8px 15px !important}#top .av-main-nav ul.sub-menu li a:hover{font-weight:700 !important}.page-id-6463 #breadcrumbs-wrapper{display:none !important}.page-id-6475 #breadcrumbs-wrapper{display:none !important}h1.av-special-heading-tag,.yanco-pre-header > h1,.yanco-pre-header > h2,.yanco-pre-header > .av-special-heading-tag{font-size:40px !important}#top.single-loesning .avia_textblock h3,#top.single-loesning h3.slide-entry-title,#top.single-produkt .avia_textblock h3,#top.single-produkt h3.slide-entry-title{font-size:16px !important;line-height:1.5em !important;margin-top:12px !important}.before-footer-logo-wrapper{border-top:40px solid #ffffff !important}.main_color a,.main_color a strong,.main_color strong a{color:#3974b5}.arrangementer-wrapper a{color:#000 !important}span.blog-tags.minor-meta{display:none}#top .news-overview-wrapper.avia-content-slider .entry-content-header,.news-overview-wrapper.avia-content-slider .slide-content,.news-overview-wrapper.avia-content-slider .more-link,.read-more-link{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.page .main_color .avia_textblock a,.page .main_color .avia_textblock p a,.page .main_color .avia_textblock h2 a,.page .main_color .avia_textblock h3 a,.page .main_color .entry-content p a,.page .main_color .entry-content h2 a,.page .main_color .entry-content h3 a,.single-aktivitet .main_color .avia_textblock a,.single-aktivitet .main_color .avia_textblock p a,.single-aktivitet .main_color .avia_textblock h2 a,.single-aktivitet .main_color .avia_textblock h3 a,.single-aktivitet .main_color .entry-content p a,.single-aktivitet .main_color .entry-content h2 a,.single-aktivitet .main_color .entry-content h3 a,.single-loesning .main_color .avia_textblock p a,.single-loesning .main_color .avia_textblock h2 a,.single-loesning .main_color .entry-content p a,.single-loesning .main_color .entry-content h2 a,.single-loesning .main_color .entry-content h3 a,.single-post .main_color .avia_textblock a,.single-post .main_color .avia_textblock p a,.single-post .main_color .avia_textblock h2 a,.single-post .main_color .avia_textblock h3 a,.single-post .main_color .entry-content p a,.single-post .main_color .entry-content h2 a,.single-post .main_color .entry-content h3 a{color:#11325d !important;font-weight:bold !important;text-decoration:underline !important}.avia_codeblock input[type="text"],.avia_codeblock input[type="email"],.avia_codeblock input[type="tel"]{width:100% !important}.avia_codeblock button{background-color:#11325d;background-image:url("//wexoe.se/wp-content/themes/enfold_child_by_yanco/assets/images/icon-cta-arrow-right-neg-11x18px-@2.png");background-position:95% center !important;background-repeat:no-repeat !important;background-size:11px 18px !important;border-color:#11325d;border-width:0 !important;color:#ffffff;font-size:18px !important;font-weight:bold !important;line-height:24px !important;margin-top:10px;min-width:270px !important;padding:13px 40px 13px 25px;-webkit-transition:opacity 0.3s ease-in;-moz-transition:opacity 0.3s ease-in;-ms-transition:opacity 0.3s ease-in;-o-transition:opacity 0.3s ease-in;transition:opacity 0.3s ease-in;text-align:left !important}.avia_codeblock button:hover{background-color:#11325d;border-color:#11325d;color:#ffffff;cursor:pointer;opacity:0.8 !important;-webkit-transition:opacity 0.15s ease-in;-moz-transition:opacity 0.15s ease-in;-ms-transition:opacity 0.15s ease-in;-o-transition:opacity 0.15s ease-in;transition:opacity 0.15s ease-in}.magic-hide{display:none}.entry-content-wrapper ul li:not(.gfield),.entry-content>ul li:not(.gfield){background-position:0 6px !important}.entry-content-wrapper ol li:not(.gfield),.entry-content > ol li:not(.gfield){background-position:0 6px !important}#top .accent-button-orange .avia-button{background-color:#ed7902 !important}.responsive #top .avia-button,.responsive #top .accent-button-orange .avia-button{font-size:16px !important;color:#ffffff !important}#top #header_meta .container{padding:10px 40px !important}#top .avia-fullwidth-slider .avia-slideshow{max-height:440px}#top .slider-solutions h1::after,#top .slider-solutions h2::after{border-bottom:none !important;margin:0 auto !important}#top .avia-slideshow-button{margin-top:0 !important}#top .avia-slideshow-arrows a,#top .av-control-minimal .avia-slideshow-dots a{-webkit-transition:opacity .3s ease-in;-moz-transition:opacity .3s ease-in;-ms-transition:opacity .3s ease-in;-o-transition:opacity .3s ease-in;transition:opacity .3s ease-in}#top .avia-slideshow-arrows a:hover,#top .av-control-minimal .avia-slideshow-dots a:hover{-webkit-transition:opacity .3s ease-in;-moz-transition:opacity .3s ease-in;-ms-transition:opacity .3s ease-in;-o-transition:opacity .3s ease-in;transition:opacity .3s ease-in}#top .avia-slideshow-arrows a:hover{color:#ffffff;opacity:.8 !important}.wexoe-front-slider-box-wrapper{background-color:#ebebeb;padding:10px}.wexoe-front-slider-box-column{border:10px solid #ebebeb}.wexoe-front-slider-box-text{padding:7px 20px 20px 20px}.wexoe-front-slider-box-text h3{margin:0 !important;word-break:break-word}#top.home .wexoe-front-slider-box-text h3 a,#top.page-template-default.page.page-id-6511 .wexoe-front-slider-box-text h3 a{color:#222222 !important;display:block !important;text-decoration:none !important}.wexoe-front-slider-box-text p{margin:0 !important}#top.home .wexoe-front-slider-box-text p a,#top.page-template-default.page.page-id-6511 .wexoe-front-slider-box-text p a{color:#7d7d7d !important;display:block !important;font-weight:600 !important;padding-bottom:6px !important;text-decoration:none !important;text-transform:uppercase !important}.wexoe-quote-wrapper .quote-wrapper p{margin-left:auto;margin-right:auto;max-width:850px}.page .main_color .wexoe-front-section-text-row-links .avia-image-container.avia-align-center{margin-bottom:-15px !important}.page .main_color .wexoe-front-section-text-row-links .avia_textblock p a{font-weight:600 !important;text-decoration:none !important}.single-post .entry-content-wrapper .big-preview.single-big,.single-produkt .entry-content-wrapper .big-preview.single-big{padding-bottom:60px !important}.single-post .entry-content-wrapper .big-preview.single-big + .trompet-wrapper.alb-active,.single-produkt .entry-content-wrapper .big-preview.single-big + .trompet-wrapper.alb-active{margin-top:0 !important}@media only screen and (min-width:1150px) and (max-width:1366px){#top .slider-solutions h1,#top .slider-solutions h2{font-size:60px !important;line-height:66px !important}}@media only screen and (min-width:768px){.html_stretched.html_header_top.html_header_sticky #top #wrap_all #main{padding-top:136px !important}}@media (max-width:989px){.html_stretched.html_header_top.html_header_sticky #top #wrap_all #main{padding-top:0 !important} #top #header_meta .container{max-height:50px !important} #top #header_meta .phone-info{padding:0 !important}}@media only screen and (max-width:767px){#top .wexoe-front-slider-box-wrapper .no_margin.av_one_fourth{display:block;width:100%} #top .wexoe-front-slider-box-wrapper img{height:auto !important;width:100% !important} #top #header_meta .container{padding:10px 0 !important} .responsive #top #header_meta .social_bookmarks li:last-child{border-right-width:0 !important} .responsive #top #wrap_all .av-logo-container .logo > a > img{max-width:176px !important} .responsive #top.single-post .sidebar.sidebar_left,.responsive #top.single-produkt .sidebar.sidebar_left{display:none !important} .single-produkt h1.av-special-heading-tag,.single-produkt .yanco-pre-header > h1,.single-produkt .yanco-pre-header > h2,.single-produkt .yanco-pre-header > .av-special-heading-tag{font-size:30px !important;line-height:36px !important} .single-produkt .yanco-pre-header > h1,.single-produkt .yanco-pre-header > h2,.single-produkt .yanco-pre-header > .av-special-heading-tag{font-size:30px !important;line-height:36px !important}}@media only screen and (max-width:519px){.slider-solutions{max-height:none !important}}@media only screen and (max-width:414px){.html_stretched.responsive #top #wrap_all .av-logo-container .logo > a > img{max-height:80px !important} .slider-solutions .avia-slideshow-inner{height:300px !important} #top .slider-solutions h1{font-size:27px !important;line-height:32px !important}}@media only screen and (max-width:413px){#top #header_meta .phone-info{padding-top:3px !important} .responsive #header .social_bookmarks{padding-top:2px !important} .responsive.html_mobile_menu_tablet .phone-info > span > a{background-size:24px !important;height:24px !important;width:24px !important}}.page-id-8879 #breadcrumbs-wrapper{display:none !important} .page-id-9022 #breadcrumbs-wrapper{display:none !important} .page-id-9108 #breadcrumbs-wrapper{display:none !important} .custom-tab-style .avia-tab-title{font-family:'Open sans',sans-serif;font-size:16px;font-weight:normal;color:#FFFFFF} .custom-tab-style .avia-tab-title:hover{color:#ed9034} .page-id-9301 #breadcrumbs-wrapper{display:none !important} .page-id-9429 #breadcrumbs-wrapper{display:none !important} @media only screen and (max-width:767px){#top.page-id-9429 #main .avia-section .template-page.content{padding-top:20px !important;padding-bottom:20px !important} #top.page-id-123 #main .avia-section.m100hero .template-page.content{padding-top:100px !important}} .page-id-9598 #breadcrumbs-wrapper{display:none !important} .page-id-9645 #breadcrumbs-wrapper{display:none !important} #breadcrumbs-wrapper{display:none !important} #top .tight-section .template-page.content{padding-top:0 !important;padding-bottom:0 !important} #top .mid-tight-section .template-page.content{padding-top:20px !important;padding-bottom:20px !important} #top .mid-section .template-page.content{padding-top:50px !important;padding-bottom:50px !important} #top .mid-loose-section .template-page.content{padding-top:75px !important;padding-bottom:75px !important} #top .no-top-mid-tight-section .template-page.content{padding-top:0 !important;padding-bottom:30px !important} #top .no-top-mid-section .template-page.content{padding-top:0 !important;padding-bottom:50px !important} #top .no-top-mid-loose-section .template-page.content{padding-top:0 !important;padding-bottom:75px !important} .logo-strip-container{overflow:hidden;width:100%;background:#ffffff;padding:1rem 0;position:relative} .logo-strip-track{display:flex;flex-wrap:nowrap;align-items:center;gap:2rem;will-change:transform} .logo-strip-track img{height:100px;width:auto !important;flex-shrink:0;object-fit:contain;display:block} .logo-strip-container::before,.logo-strip-container::after{content:"";position:absolute;top:0;bottom:0;width:80px;pointer-events:none;z-index:2}.logo-strip-container::before{left:0;background:linear-gradient(to right,rgba(255,255,255,1),rgba(255,255,255,0))}.logo-strip-container::after{right:0;background:linear-gradient(to left,rgba(255,255,255,1),rgba(255,255,255,0))} .logo-strip-container{width:100% !important;max-width:100% !important;margin-left:0 !important;margin-right:0 !important;padding-left:0 !important;padding-right:0 !important} .logo-strip-container.av-extra-border-element,#top .container .logo-strip-container{max-width:100% !important;width:100% !important} @media only screen and (max-width:767px){.header{position:static !important}} .logo-strip-track{display:flex;flex-wrap:nowrap;align-items:center;gap:2rem} :root{--logo-w:180px;--logo-h:80px} .logo-slot{width:var(--logo-w);height:var(--logo-h);flex:0 0 var(--logo-w);display:flex;align-items:center;justify-content:center;background:transparent} .logo-slot > img{height:100%;width:auto;max-width:100%;display:block;margin:0 !important;padding:0 !important;border:0 !important} @media only screen and (max-width:767px){#top .mobile-tight-section .template-page.content{padding-top:0 !important;padding-bottom:0 !important} #top .mobile-small-section .template-page.content{padding-top:25px !important;padding-bottom:25px !important} #top .mobile-medium-section .template-page.content{padding-top:40px !important;padding-bottom:40px !important} #top .mobile-large-section .template-page.content{padding-top:60px !important;padding-bottom:60px !important} #top .mobile-no-top-small-section .template-page.content{padding-top:0 !important;padding-bottom:25px !important} #top .mobile-no-top-medium-section .template-page.content{padding-top:0 !important;padding-bottom:40px !important} #top .mobile-small-no-bottom-section .template-page.content{padding-top:25px !important;padding-bottom:0 !important} #top .mobile-hero-section .template-page.content{padding-top:100px !important;padding-bottom:25px !important}}
.container{width:100%} .container .av-content-small.units{width:70%} .responsive .boxed#top,.responsive.html_boxed.html_header_sticky #header,.responsive.html_boxed.html_header_transparency #header{width:1270px;max-width:90%} .responsive .container{max-width:1270px}

```


### custom.css
**Size:** 0.7 KB | **Source:** `https://wexoe.se/wp-content/themes/enfold/css/custom.css`

```css
/* Have fun adding your style here :) - PS: At all times this file should contain a comment or a rule, otherwise opera might act buggy :( */

/* General Custom CSS */




/*
Desktop Styles
================================================== */
/* Note: Add new css to the media query below that you want to only effect the desktop view of your site */

@media only screen and (min-width: 768px) {
  /* Add your Desktop Styles here */

}



/*
Mobile Styles
================================================== */
/* Note: Add new css to the media query below that you want to only effect the Mobile and Tablet Portrait view */

@media only screen and (max-width: 767px) {
  /* Add your Mobile Styles here */

}
```


---

## 🔍 Snabbreferens: Problematiska selektorer

Dessa selektorer från Enfold har hög specificitet eller !important:


**grid.css:**
- `.responsive #top #wrap_all .av-flex-cells .no_margin`
- `.responsive #top #wrap_all .av-flex-cells .no_margin`
- `.responsive #top #wrap_all .av-flex-cells .no_margin.av-zero-padding`

**base.css:**
- `.avia_transform a:hover .image-overlay`
- `p,
	a,
	strong`
- `#top .isotope-item`
- `.avia-progress-bar`
- `.avia-progress-bar .progress`
- `.avia-progress-bar div.progress .bar`

**layout.css:**
- `.html_bottom_nav_header .avia-search-tooltip`
- `/*transparent header*/
.html_header_transparency #main`
- `#top .av_header_scrolldown.av_header_transparency`
- `.html_av-overlay-side-classic #top .av-burger-overlay li li .avia-bullet`
- `#top #header .menu-item-mega-parent.current-menu-item`
- `.avia-bullet`
- `.avia-search-tooltip`
- `/*blank pages*/

#top.avia-blank #wrap_all #main`
- `#top.avia-blank #wrap_all #main .container`
- `#top.avia-blank`

**icongrid.css:**
- `.avia-icongrid-tooltip .av-icon-cell-item .avia-icongrid-content`

**site-main.css:**
- `/* line 51, ../assets/scss/site-styles/site-main.scss */
#cookie_action_close_header`

**header.css:**
- `.header .container`
- `.header-main__logo`
- `.header-main-menu-item_search .av_ajax_search_entry`
- `.header-dropdown .navbar .menu-item__link a, .header-dropdown .navbar .menu-item-second__item a`
- `.header .av-hamburger-inner:before, .header .av-hamburger-inner:after`
- `.html_stretched.html_header_top.html_header_sticky .home#top #wrap_all #main`
- `@media (max-width: 992px)`

**shortcodes.css:**
- `.avia-section.av-minimum-height .container .content`
- `.avia-full-stretch`
- `.avia-full-contain`
- `.avia_mobile .avia-full-stretch`
- `#top .av-section-video-bg .avia-slideshow-inner`
- `.avia_desktop #top .av-section-mobile-video-disabled`

**buttonrow.css:**
- `.avia-buttonrow-right .avia-button:first-child,
.avia-buttonrow-left .avia-button:first-child`
- `.avia-buttonrow-right .avia-button:last-child,
.avia-buttonrow-left .avia-button:last-child`

**contact.css:**
- `.av-fields-with-error`
- `#top .avia_ajax_form .av-recaptcha-error.av-recaptcha-severe-error .av-recaptcha-error-main`

**image.css:**
- `.av-overlay-hover-deactivate .avia-image-overlay-wrap:hover .av-caption-image-overlay-bg`

**menu.css:**
- `#top .av-submenu-container .container`
- `#top .av-submenu-container:hover`
- `.responsive #top .av-switch-990.av-submenu-container`
- `.responsive #top .av-switch-768.av-submenu-container`
- `.responsive #top .av-switch-480.av-submenu-container`

**tabs.css:**
- `.responsive .tabcontainer .tab_content,
	.responsive .tabcontainer .tab`

**toggles.css:**
- `.hasCurrentStyle .toggle_icon,
.hasCurrentStyle .toggle_icon > span`

---

## 📝 Anteckningar

- **Enfold version:** Kontrollera i Utseende → Teman
- **Senast uppdaterad:** 2026-01-07
- **Genererad från:** https://wexoe.se/
