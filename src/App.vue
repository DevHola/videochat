<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

html,body {
    width:100%;
    height: auto;
    margin:0;
    padding:0;
}

body {
    font-family: 'Open Sans', sans-serif;
    position: relative;
	font-size:14px;
	line-height:24px;
	color:#6f6f6f;
}

a{
    color: #6f6f6f;
}

a,
a:active,
a:focus,
a:hover{
	outline:none;
	-webkit-transition: all 0.3s ease-in-out;
	-moz-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
}

a:hover{
	text-decoration:none;
}

h1, h2, h3, h4, h5, h6{
	color:#3f3f3f;
	margin:0 0 0 0;
    font-weight: bold;
}

h1{
	font-size:48px;
	line-height:52px;
}

h2{
	font-size:36px;
	line-height:48px;
}

h3{
	font-size:30px;
	line-height:36px;
}

h4{
	font-size:24px;
	line-height:30px;
}

h5{
	font-size:18px;
	line-height:24px;
}

h6{
	font-size:14px;
	line-height:18px;
}

p{
	margin-bottom:20px;
}

.topbar{
    padding:5px 0;
    background-color: #2f3191;
	color:black;
}
.topbar .bar-phone{
	border-right:1px solid #fff;
	font-size:14px;
	line-height:14px;
	float:left;
	padding-right:20px;
	margin: 9px 0;
}
.topbar .bar-mail{
	font-size:14px;
	line-height:14px;
	float:left;
	margin: 9px 0;
	margin-left:20px;
}
.topbar .bar-phone strong, .topbar .bar-mail strong{
	font-weight:600;
}
.topbar .header-social{
	float:right;
	margin:-5px 0;
}
.topbar .header-social a{
	color:grey;
	display:block;
	float:left;
	font-size:16px;
	height:43px;
	width:50px;
	text-align:center;
	line-height:43px;
	border-right:1px solid #fff;
}
.topbar .header-social a:first-of-type{
	border-left:1px solid black;
}
.topbar .header-social .facebook:hover{
	background:#3B5998;
}
.topbar .header-social .twitter:hover{
	background:#55ACEE;
}
.topbar .header-social .linkedin:hover{
	background:#32608a;
}
.topbar .header-social .google:hover{
	background:#dd4b39;
}
.topbar .header-social .youtube:hover{
	background:#e52d27;
}
.sponsor-button {
    border: 2px solid #2f3191;
    border-radius: 3px;
    color: #2f3191;
    display: inline-block;
    margin: 20px 0 0 0;
    padding: 5px 10px;
	font-weight:600;
	text-transform:uppercase;
}
.donation{
    border-radius: 3px;
    color: #fff;
    display: inline-block;
    padding: 5px 10px;
	margin: 20px 0 0 0;
	font-weight:600;
	text-transform:uppercase;
	background:#ec1d25;
	border:2px solid #ec1d25;
}
.donation:hover{
	background:#fff;
	color: #ec1d25;
	border:2px solid #ec1d25;
}
.sponsor-button:hover {
    background-color: #2f3191;
    color: #fff;
}
.navbar > .container .navbar-brand {
    width: 260px;
    padding: 5px 15px;
}


#first-slider .main-container {
  padding: 0;
}

#first-slider .slide1 h2, #first-slider .slide2 h2, #first-slider .slide3 h2, #first-slider .slide4 h2{
    color: #fff;
    font-size:60px;
    text-transform: uppercase;
    font-weight:700;
	width:80%;
	margin:0 auto;
	padding:15% 0 0 0;
}
#first-slider .slide1 h2 span, #first-slider .slide2 h2 span, #first-slider .slide3 h2 span, #first-slider .slide4 h2 span{
	background: #2f3191;
	padding: 0 20px;
}
#first-slider .slide1 h3, #first-slider .slide2 h3, #first-slider .slide3 h3, #first-slider .slide4 h3{
    color: #fff;
    font-size: 20px;
	width:60%;
	margin:35px auto 0 auto;
	line-height:28px;
	font-weight:400;
}

#first-slider .slide1 h4,#first-slider .slide2 h4,#first-slider .slide3 h4,#first-slider .slide4 h4{
    color: #fff;
    font-size:16px;
    text-transform: uppercase;
    font-weight:700;
	width:80%;
	margin:20px auto 0 auto;
}
#first-slider .slide1 h4 a,#first-slider .slide2 h4 a,#first-slider .slide3 h4 a,#first-slider .slide4 h4 a{
	color:#fff;
	background:#ec1d25;
	display:inline-block;
	border-radius:3px;
	padding:5px 20px;
}
#first-slider .slide1 h4 a:hover,#first-slider .slide2 h4 a:hover,#first-slider .slide3 h4 a:hover,#first-slider .slide4 h4 a:hover{
	color:#fff;
	background:#ec1d25;
	display:inline-block;
	border-radius:3px;
	padding:5px 20px;
}

#first-slider .slide1 .text-left ,#first-slider .slide3 .text-left{
    padding-left: 40px;
}


#first-slider .carousel-indicators {
  bottom: 0;
}
#first-slider .carousel-control.right,
#first-slider .carousel-control.left {
  background-image: none;
}
#first-slider .carousel .item {
  min-height:540px; 
  height: 100%;
  width:100%;
  text-align:center;
}

.carousel-inner .item .container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
}


#first-slider h3{
  animation-delay: 2s;
}
#first-slider h4 {
  animation-delay: 3s;
}
#first-slider h2 {
  animation-delay: 1s;
}


#first-slider .carousel-control {
    width: 5%;
        text-shadow: none;
}


#first-slider h1 {
  text-align: center;  
  margin-bottom: 30px;
  font-size: 30px;
  font-weight: bold;
}

#first-slider .p {
  padding-top: 125px;
  text-align: center;
}

#first-slider .p a {
  text-decoration: underline;
}
#first-slider .carousel-indicators li {
    width: 14px;
    height: 14px;
    background-color: rgba(255,255,255,.4);
  border:none;
}
#first-slider .carousel-indicators .active{
    width: 16px;
    height: 16px;
    background-color: #fff;
  border:none;
}


.carousel-fade .carousel-inner .item {
  -webkit-transition-property: opacity;
  transition-property: opacity;
}
.carousel-fade .carousel-inner .item,
.carousel-fade .carousel-inner .active.left,
.carousel-fade .carousel-inner .active.right {
  opacity: 0;
}
.carousel-fade .carousel-inner .active,
.carousel-fade .carousel-inner .next.left,
.carousel-fade .carousel-inner .prev.right {
  opacity: 1;
}
.carousel-fade .carousel-inner .next,
.carousel-fade .carousel-inner .prev,
.carousel-fade .carousel-inner .active.left,
.carousel-fade .carousel-inner .active.right {
  left: 0;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}
.carousel-fade .carousel-control {
  z-index: 2;
}

.carousel-control .fa-angle-right, .carousel-control .fa-angle-left {
    position: absolute;
    top: 50%;
    z-index: 5;
    display: inline-block;
}
.carousel-control .fa-angle-left{
    left: 25%;
    width: 38px;
    height: 38px;
    margin-top: -15px;
    font-size: 30px;
    color: #fff;
    border: 3px solid #ffffff;
    -webkit-border-radius: 23px;
    -moz-border-radius: 23px;
    border-radius: 53px;
}
.carousel-control .fa-angle-right{
    right: 25%;
    width: 38px;
    height: 38px;
    margin-top: -15px;
    font-size: 30px;
    color: #fff;
    border: 3px solid #ffffff;
    -webkit-border-radius: 23px;
    -moz-border-radius: 23px;
    border-radius: 53px;
}
.carousel-control {
    opacity: 1;
    filter: alpha(opacity=100);
}

#about-sec{
	display:block;
	width:100%;
	margin:60px 0;
}
#about-sec h1{
	color: #ec1d25;
}
#about-sec h2{
	margin-top:50px;
	font-size:30px;
	line-height:36px;
}
#about-sec hr{
	width:150px; border:2px solid #2f3191;
}
#about-sec p{
	margin:15px 0 0 0;
}
#about-sec .btn1 {
    border: 2px solid #2f3191;
    border-radius: 3px;
    color: #2f3191;
    display: inline-block;
    margin: 30px 0 0 0;
    padding: 9px 20px;
	font-weight:600;
	text-transform:uppercase;
}
#about-sec .btn1:hover {
    border: 2px solid #ec1d25;
	background:#ec1d25;
    color: #fff;
}
#about-sec .btn2 {
	background:#ec1d25;
    border-radius: 3px;
    color: #fff;
    display: inline-block;
    margin: 30px 0 0 20px;
    padding: 9px 20px;
	font-weight:600;
	text-transform:uppercase;
}
#about-sec .btn2:hover {
    background-color: #2f3191;
    color: #fff;
}

#activities-sec{
	display:block;
	width:100%;
	background-size:cover;
	background-attachment:fixed;
	background-position:center;
	margin:60px 0;
	padding:60px 0;
}
#activities-sec h1, #activities-sec h4, #activities-sec h5{
	color: #fff;
}
#activities-sec h4{
	text-transform:uppercase;
	font-size:18px;
	line-height:18px;
}
#activities-sec hr{
	width:150px; border:2px solid #fff;
}
#activities-sec p{
	margin:10px 0 0 0;
	color:#fff;
}
#activities-sec a{
	margin:15px 0 0 0;
	color:#fff;
	font-weight:700;
	border:2px solid #fff;
	display:inline-block;
	border-radius:3px;
	padding:5px 10px;
}
#activities-sec a:hover{
	color:#ec1d25;
	background:#fff;
}
#activities-sec .top-off{
	margin-top:40px;
}
#activities-sec .grid-content-left{
	float:left;
	margin-right:20px;
}
#activities-sec .grid-content-left i {
    height: 80px;
    line-height: 80px;
    width: 80px;
	background:#fff;
	text-align:center;
	font-size:36px;
	color:#ec1d25;
	transition: all 0.3s ease-in-out;
}
#activities-sec .grid-content-wrapper {
	float:right;
	width:72%;
}
#activities-sec .top-off:hover .grid-content-left i{
	border-radius:50%;
}

#video-sec{
	display:block;
	width:100%;
	margin:60px 0;
}
#video-sec h1{
	color: #ec1d25;
	text-transform:uppercase;
}
#video-sec hr{
	width:150px; border:2px solid #2f3191;
}
#video-sec p{
	margin:0 0 0 0;
}
#video-sec .top-off{
	margin-top:40px;
}
.grid-image img {
	width:100%;
}
#video-sec .media-image{
	width:85px;
	height:85px;
	margin-right:20px;
	float:left;
}
#video-sec .media-text{
	float:right;
	width:81%;
}
#video-sec .media-text h5{
	margin-top:15px;
}
#video-sec .media-image img{
	width:100%;
}
video {
    width: 100%;
    height: auto;
}

#projects-sec{
	display:block;
	width:100%;
	background-size:cover;
	background-attachment:fixed;
	background-position:center;
	margin:60px 0;
	padding:60px 0;
}
#projects-sec h1, #projects-sec h4, #projects-sec h5{
	color: #fff;
}
#projects-sec h4{
	text-transform:uppercase;
	font-size:18px;
	line-height:18px;
}
#projects-sec hr{
	width:150px; border:2px solid #fff;
}
#projects-sec p{
	margin:10px 0 0 0;
	color:#fff;
}
#projects-sec a{
	margin:15px 0 0 0;
	color:#fff;
	font-weight:700;
	border:2px solid #fff;
	display:inline-block;
	border-radius:3px;
	padding:5px 10px;
}
#projects-sec a:hover{
	color:#ec1d25;
	background:#fff;
}
#projects-sec .top-off{
	margin-top:30px;
}
#projects-sec h3{
	font-size:22px; 
	text-transform:uppercase;
	color:#fff;
	margin:10px 0 0 0;
	line-height:26px;
}
#projects-sec .post-content hr{
	width:100px;
	border:1px solid #fff;
	margin:10px auto;
}

#gallery-sec{
	display:block;
	width:100%;
	margin:60px 0;
}
#gallery-sec h1{
	color: #ec1d25;
}
#gallery-sec hr{
	width:150px; border:2px solid #2f3191;
}
#gallery-sec p{
	margin:15px 0 0 0;
}
#gallery-sec .btn1 {
    border: 2px solid #2f3191;
    border-radius: 3px;
    color: #2f3191;
    display: inline-block;
    margin: 30px 0 0 0;
    padding: 9px 20px;
	font-weight:600;
	text-transform:uppercase;
}
#gallery-sec .btn1:hover {
    border: 2px solid #ec1d25;
	background:#ec1d25;
    color: #fff;
}
#gallery-sec .btn2 {
	background:#ec1d25;
    border-radius: 3px;
    color: #fff;
    display: inline-block;
    margin: 30px 0 0 20px;
    padding: 9px 20px;
	font-weight:600;
	text-transform:uppercase;
}
#gallery-sec .btn2:hover {
    background-color: #2f3191;
    color: #fff;
}
#gallery-sec ul{
	margin:0;
	padding:0;
}
#gallery-sec ul li{
	list-style:none;
	width:23.5%;
	margin:20px 2% 0 0;
	float:left;
}
#gallery-sec ul li:nth-child(4n+0){
	margin:20px 0 0 0;
}
#gallery-sec ul li .image{
	position:relative;
	width:100%;
	overflow:hidden;
}
#gallery-sec ul li .image img{
	width:100%;
	transition: all 0.3s ease-in-out;
}
#gallery-sec ul li .image:hover img{
	transform:scale(1.2);
}
#gallery-sec ul li .image .overlay{
	width:100%;
	height:100%;
	background:rgba(236, 29, 37, 0);
	position:absolute;
	left:0; top:0;
	transition: all 0.3s ease-in-out;
	text-align:center;
	opacity:0;
}
#gallery-sec ul li .image:hover .overlay{
	background:rgba(236, 29, 37, 0.8);
	opacity:1;
}
#gallery-sec ul li .image .overlay i{ color:#fff; font-size:50px; margin:24% 0;
}

.callout {
    padding: 40px 0;
    background: #ec1d25;
}
.callout h2{
	color:#fff;
	font-size:26px;
	text-transform:uppercase;
	line-height:30px
}
.callout .callout-actions {
    padding: 0 0;
    font-size: 0;
    text-align: center;
}
.callout .callout-actions .button {
    display: inline-block;
    vertical-align: top;
    min-width: 213px;
    margin: 0;
	padding: 11px 15px 12px;
    background: transparent;
    border: 2px solid #fff;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
}
.callout .callout-separator {
    color: #ec1d25;
    font-weight: bold;
    text-transform: uppercase;
}
.callout .callout-separator span {
    display: inline-block;
    vertical-align: middle;
    width: 43px;
    height: 43px;
    border-radius: 50%;
    background: #fff;
    text-align: center;
    line-height: 43px;
    font-size: 12px;
}
.callout .callout-separator:before, .callout .callout-separator:after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 28px;
    height: 1px;
    background: #fff;
}
.callout .callout-separator:before, .callout .callout-separator:after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 28px;
    height: 1px;
    background: #fff;
}

.footer .footer-body {
    padding: 60px 0;
}

.footer .footer-section .footer-section-title {
    color: #fff;
    font-weight: 900;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}
.footer .footer-section .footer-section-title:after {
    content: '';
    display: block;
    width: 46px;
    height: 1px;
    margin: 20px 0 20px;
    background: #ec1d25;
}
.footer .footer-section ul {
	margin:0;
	padding:0;
	list-style:none;
}
.footer .footer-section ul li{
	display:inline-block;
	width:49%;
	margin-bottom:10px;
}
.footer .footer-section b{
	color:#fff;
}
.footer .footer-section ul li a:hover{
	color:#fff;
}
.subscribe .subscribe-field {
    margin: 0;
    height: 40px;
    font-size: 14px;
    padding: 0 18px;
    border: 0;
	width: 100%;
}
.subscribe .subscribe-btn {
    float: right;
    width: 50px;
    height: 40px;
    background: #ec1d25;
    color: #fff;
    border: 0;
    cursor: pointer;
}
.subscribe .subscribe-inner {
    overflow: hidden;
}
.bwt-footer-copyright { font-size:14px; background:#222126; color: #878C92; padding:10px 0; line-height:20px;}
.bwt-footer-copyright .left-text{ text-align:left; margin:10px 0;}
.bwt-footer-copyright .right-text{ text-align:right; margin:10px 0;}
.bwt-footer-copyright a{ color: #6f6f6f; }
.bwt-footer-copyright a:hover{ color: #6f6f6f; }

#inner-banner{
	display:block;
}
#inner-banner .overlay{
	background:rgba(0,0,0,0.7);
	padding: 150px 0 60px 0;
}
#inner-banner h1{
	color:#fff;
}

#team{
	margin:60px 0;
	display:block;
}
#team h1 {
    color: #ec1d25;
}
#team hr {
    width: 150px;
    border: 2px solid #2f3191;
}
#team .member {
    margin-top: 30px;
}
#team .avatar-inner img{
	width:100%;
}
#team .name a {
    color: #333;
	font-weight:600;
	margin-top:10px;
	display:block;
	font-size:16px;
}
#team .regency {
    color: #999;
    font-style: italic;
    font-size: 14px;
	font-weight:600;
}

#help{
	display:block;
	width:100%;
	background-size:cover;
	background-attachment:fixed;
	background-position:center;
	margin:60px 0;
	padding:60px 0;
}
#help h1, #help h4, #help h5{
	color: #fff;
}
#help h4{
	text-transform:uppercase;
	font-size:18px;
	line-height:18px;
}
#help hr{
	width:150px; border:2px solid #fff;
}
#help p{
	margin:10px 0 0 0;
	color:#fff;
}
#help .icon_circle {
    width: 100px;
    height: 100px;
    background: #fff;
    border-radius: 100%;
    line-height: 115px;
    text-align: center;
    color: #ec1d25;
    position: relative;
	float:left;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
	margin-right: 30px;
}
#help .help-text {
	float:left;
	width:75%;
}
#help .top-off{
	margin-top:40px;
}
#help .line.line-50 {
    background: #fff;
	margin-right: auto;
	width: 50px;
	height: 1px;
    margin: 10px 0 10px;
}
#help .icon_circle:before {
    content: '';
    position: absolute;
    width: 90px;
    height: 90px;
    border: 1px solid #ec1d25;
    background: transparent;
    border-radius: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
}
#help .icon_circle i {
    font-size: 40px;
    letter-spacing: -5px;
}

.act-box {
    border: 1px solid #ccc;
}
.act-box .image{
	margin:0 -15px;
}
.act-box .image img {
	width:100%;
}
.act-box .act-pad{
	padding:40px 50px 50px 50px;
}
.act-box h4 {
    border-bottom: 2px dashed #d5d4d4;
    padding-bottom: 15px;
    margin-bottom: 20px;
    color: #ec1d25;
	text-transform:uppercase;
}
.act-box .price {
    margin: 20px 0px 0px;
    color: #2f3191;
    float: left;
	font-weight:600;
	font-size: 18px;
}
.act-box .goal {
    color: #ec1d25;
    margin-left: 10px;
}
.act-box .btn1 {
    border: 2px solid #2f3191;
    border-radius: 3px;
    color: #2f3191;
    display: inline-block;
    padding: 9px 20px;
    font-weight: 600;
    text-transform: uppercase;
	float:right;
	margin: 10px 0 0 0 !important;
}
.act-box .btn1:hover {
    border: 2px solid #ec1d25;
    background: #ec1d25;
    color: #fff;
}

#pro-sec {
    display: block;
    width: 100%;
    margin: 60px 0;
}
#pro-sec .top-off {
    margin-top: 30px;
}
#pro-sec h3 {
    font-size: 22px;
    text-transform: uppercase;
    color: #ec1d25;
    margin: 10px 0 0 0;
    line-height: 26px;
}
#pro-sec .post-content{
	border: 1px solid #d7d7d7;
	background-color: #f7f7f7;
	padding:0 10px;
}
#pro-sec .post-content hr {
    width: 100px;
    border: 2px solid #2f3191;
    margin: 10px auto;
}
#pro-sec p {
    margin: 10px 0 0 0;
}
#pro-sec a {
	background:#ec1d25;
    border-radius: 3px;
    color: #fff;
    display: inline-block;
    margin: 15px 0 20px 0;
    padding: 7px 15px;
	font-weight:600;
	text-transform:uppercase;
}
#pro-sec a:hover {
    background-color: #2f3191;
    color: #fff;
}

.google-maps {
    position: relative;
    padding-bottom: 30%; // This is the aspect ratio
    height: 0;
    overflow: hidden;
}
.google-maps iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
}
.con-box {
    color: #fff;
    padding:50px 0;
    background-color: #ec1d25;
    -webkit-transition: all 0.4s ease 0s;
    -khtml-transition: all 0.4s ease 0s;
    -moz-transition: all 0.4s ease 0s;
    -ms-transition: all 0.4s ease 0s;
    -o-transition: all 0.4s ease 0s;
    transition: all 0.4s ease 0s;
}
.con-box i {
    font-size: 50px;
}
.con-box h3 {
	color:#fff;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    margin-top:0px;
    margin-bottom:0px;
	-webkit-transition: all 0.4s ease 0s;
    -khtml-transition: all 0.4s ease 0s;
    -moz-transition: all 0.4s ease 0s;
    -ms-transition: all 0.4s ease 0s;
    -o-transition: all 0.4s ease 0s;
    transition: all 0.4s ease 0s;
}
.fancy-box-content p{
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.35px;
	margin:0 !important;
}

.con-form input[type=text], .con-form input[type=email], .con-form input[type=password], .con-form input[type=phone], .con-form textarea {
    border-radius: 0;
	width:100%;
	margin-top:30px;
	padding:8px 10px;
	font-weight:600;
	border:1px solid #ccc;
}
#owl-demo .sponser-box img{ width:100%}
#owl-demo .item{ background:#f5f5f5; padding-bottom:1px; margin:10px;}
#owl-demo .item h4 {
    font-size: 22px;
    text-transform: uppercase;
    color: #ec1d25;
    margin: 10px 0 0 0;
    line-height: 26px;
}
#owl-demo .spon-bdr {
	border-top:1px solid #ccc;
	margin-top:5px; padding-top:5px; text-align:left;
}
#owl-demo .btn1 {
    background: #2f3191;
    border-radius: 3px;
    color: #fff;
    display: block;
    margin: 10px 10px;
    padding: 7px 15px;
    font-weight: 600;
    text-transform: uppercase;
}

@media (max-width: 1024px) {
	
h1 {
    font-size: 40px;
    line-height: 46px;
}

.navbar > .container .navbar-brand {
    width: 230px;
    padding: 10px 15px !important;
}
.sponsor-button, .donation{
	font-size: 12px;
}
#first-slider .slide1 h2, #first-slider .slide2 h2, #first-slider .slide3 h2, #first-slider .slide4 h2{
	font-size: 50px;
    width: 90%;
}
#first-slider .slide1 h3, #first-slider .slide2 h3, #first-slider .slide3 h3, #first-slider .slide4 h3{
	width: 80%;
}
#first-slider .carousel .item {
    min-height: 450px;
}
#activities-sec .grid-content-left {
    float: none;
    margin:0 auto;
	text-align:center;
	margin-bottom:10px;
}
#activities-sec .grid-content-wrapper {
    float: none;
    width: 100%;
	text-align:center;
}
#video-sec .media-image {
    width: 60px;
    height: 60px;
}
#video-sec .media-text {
    float: right;
    width: 82%;
}
#video-sec .media-text h5 {
    margin-top:0px;
}
.callout h2 {
    font-size: 24px;
}
.callout .callout-actions .button{
	min-width: 176px;
}

#inner-banner .overlay {
    padding: 140px 0 60px 0;
}
#help .help-text {
    width: 71%;
}
#help .icon_circle {
    margin-right: 20px;
}
.breadcrumb {
    margin-top: 10px;
}

.act-box .act-pad {
    padding: 20px 20px 25px 20px;
}

#pro-sec h3 {
    font-size: 20px;
    line-height: 24px;
}
	
}

@media (max-width: 768px) {
	
h1 {
    font-size: 36px;
    line-height: 36px;
}	
	
.topbar .bar-phone span, .topbar .bar-mail span {
	display:none;
}
.topbar .bar-phone, .topbar .bar-mail {
	margin: 9px 0 9px 15px;
}
.topbar .header-social {
    float: right;
    margin: -5px 15px -5px 0;
}

#first-slider .slide1 h2, #first-slider .slide2 h2, #first-slider .slide3 h2, #first-slider .slide4 h2 {
    font-size: 36px;
    width: 90%;
	padding: 17% 0 0 0;
}
#first-slider .slide1 h3, #first-slider .slide2 h3, #first-slider .slide3 h3, #first-slider .slide4 h3 {
    font-size: 16px;
    width: 80%;
    margin: 10px auto 0 auto;
    line-height: 24px;
}
#first-slider .carousel .item {
    min-height: 400px;
}
#about-sec, #activities-sec, #video-sec, #project-sec, #gallery-sec, #help {
    margin: 40px 0;
}
#activities-sec, #project-sec, #help {
    padding: 40px 0;
}
#video-sec .media-image {
    width: 80px;
    height: 80px;
}
#video-sec .media-text {
    float: right;
    width: 86%;
}
#video-sec .media-text h5 {
    margin-top: 15px;
}
.grid-image {
    width:75%;
	margin:0 auto;
}
.callout h2 {
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
}
.footer .footer-body{
	padding:40px 0;
}
#gallery-sec ul li {
    width: 48%;
}
#gallery-sec ul li:nth-child(4n+0) {
    margin: 20px 0 0 0;
}
#gallery-sec ul li:nth-child(2n+0) {
    margin: 20px 0 0 0;
}

#inner-banner .overlay {
    padding: 110px 0 60px 0;
}
.breadcrumb {
    margin-top: 5px;
}

#pro-sec .grid-image {
    width: 100%;
    margin: 0 auto;
}
	
}

@media (max-width: 768px) {
	
h1 {
    font-size: 30px;
    line-height: 30px;
}	
.topbar .header-social a{
	width: 45px;
}
#first-slider .slide1 h2, #first-slider .slide2 h2, #first-slider .slide3 h2, #first-slider .slide4 h2 {
    font-size: 26px;
    width: 90%;
    padding: 18% 0 0 0;
}
#first-slider .slide1 h3, #first-slider .slide2 h3, #first-slider .slide3 h3, #first-slider .slide4 h3 {
    font-size: 14px;
    width: 80%;
    margin: 5px auto 0 auto;
    line-height: 20px;
}
#first-slider .slide1 h4 a, #first-slider .slide2 h4 a, #first-slider .slide3 h4 a, #first-slider .slide4 h4 a {
    color: #fff;
    background: #ec1d25;
    display: inline-block;
    border-radius: 3px;
    padding: 0px 15px;
    font-size: 12px;
}
#first-slider .slide1 h4, #first-slider .slide2 h4, #first-slider .slide3 h4, #first-slider .slide4 h4 {
    margin: 15px auto 0 auto;
}
#first-slider .carousel .item {
    min-height: 350px;
}
nav.navbar.bootsnav .navbar-brand {
    margin: 0 0 0 -5px !important;
}
.donation, .sponsor-button{
	margin: 20px 0 0 0;
}
nav.navbar.bootsnav .navbar-toggle {
    margin-right: 0px;
    margin-top: 23px;
}
#help .help-text {
    width: 100%;
	float:none;
	margin-top:10px;
	text-align: center;
}
#help .icon_circle {
    float: none;
	margin:0 auto;
}
#help .line.line-50 {
    margin: 10px auto;
}

.act-box .act-pad {
    padding: 50px 50px 50px 50px;
}
.google-maps {
    position: relative;
    padding-bottom: 40%;
    overflow: hidden;
}
.bwt-footer-copyright .left-text {
    text-align: center;
}
.bwt-footer-copyright .right-text {
    text-align: center;
}
	
}
@media (max-width: 640px) {
	
#video-sec .media-text {
    float: right;
    width: 83%;
}

#inner-banner .overlay {
    padding: 120px 0 60px 0;
}
.breadcrumb {
    margin-top: 15px;
    text-align: left;
}

.act-box .act-pad {
    padding: 40px 30px;
}
#about-sec h2 {
    margin-top: 30px;
    font-size: 24px;
    line-height: 30px;
}
	
}
@media (max-width: 480px) {

h1 {
    font-size: 26px;
    line-height: 26px;
}
.topbar .header-social {
    display: none;
}
.attr-nav {
    right:0;
    top: 50px;
	width: 100%;
	text-align: center;
}
#first-slider .slide1 h2, #first-slider .slide2 h2, #first-slider .slide3 h2, #first-slider .slide4 h2 {
    font-size: 20px;
	line-height:20px;
    padding: 15% 0 0 0;
}
#first-slider .slide1 h4, #first-slider .slide2 h4, #first-slider .slide3 h4, #first-slider .slide4 h4 {
    margin: 5px auto 0 auto;
}
#video-sec .media-text {
    float: right;
    width: 75%;
}
.callout .callout-separator:before, .callout .callout-separator:after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 10px;
    height: 1px;
    background: #fff;
}
#inner-banner .overlay {
    padding: 170px 0 60px 0;
}

.act-box .act-pad {
    padding: 30px 20px;
}
.act-box .price {
    margin: 15px 0px 0px 0;
    float: none;
}
#about-sec .btn1{
	float:none;
	margin: 15px 0 0 0 !important;
}
.google-maps {
    position: relative;
    padding-bottom: 50%;
    overflow: hidden;
}
#first-slider{ margin-top: 100px; }
#first-slider .carousel .item {
    min-height: 270px;
}
	
}
@media (max-width: 360px) {

h1 {
    font-size: 20px;
    line-height: 20px;
}
h5 {
    font-size: 15px;
    line-height: 22px;
}
.topbar .bar-phone, .topbar .bar-mail {
    margin: 9px 0 9px 10px;
	font-size:12px;
}
.topbar .bar-phone {
    padding-right: 10px;
}
element.style {
}
#first-slider .slide1 h2, #first-slider .slide2 h2, #first-slider .slide3 h2, #first-slider .slide4 h2 {
    font-size: 16px;
    line-height: 16px;
    padding: 8% 0 0 0;
}
#first-slider .slide1 h3, #first-slider .slide2 h3, #first-slider .slide3 h3, #first-slider .slide4 h3 {
    font-size: 12px;
    width: 80%;
    margin: 5px auto 0 auto;
    line-height: 16px;
}
#video-sec .media-text {
    float: none;
    width: 100%;
    text-align: center;
}
#video-sec .media-image {
    width: 80px;
    height: 80px;
    float: none;
    margin: 0 auto;
}
.callout .callout-separator span {
    display: block;
    margin: 10px auto;
}
.callout .callout-separator:before, .callout .callout-separator:after {
	display:none;
}
#gallery-sec ul li {
    width: 95%;
	float:none; 
	margin: 20px auto 0 auto;
}
#gallery-sec ul li:nth-child(2n+0) {
    margin: 20px auto 0 auto;
}
#projects-sec h3 {
    font-size: 18px;
    text-transform: uppercase;
    color: #fff;
    margin: 10px 0 0 0;
    line-height: 24px;
}

.act-box .act-pad {
    padding: 20px 0px;
}
#about-sec h2 {
    margin-top: 30px;
    font-size: 20px;
    line-height: 24px;
}
#first-slider .carousel .item {
    min-height: 220px;
}

}

@media (max-width: 320px) {
	
#first-slider .slide1 h2, #first-slider .slide2 h2, #first-slider .slide3 h2, #first-slider .slide4 h2 {
    font-size: 16px;
    line-height: 16px;
    padding: 6% 0 0 0;
}
#first-slider .carousel .item {
    min-height: 190px;
}

}
nav.bootsnav .dropdown.megamenu-fw {
    position: static;
}

nav.bootsnav .container {
    position: relative;
}

nav.bootsnav .megamenu-fw .dropdown-menu {
    left: auto;
}

nav.bootsnav .megamenu-content {
    padding: 15px;
    width: 100% !important;
}

nav.bootsnav .megamenu-content .title{
    margin-top: 0;
}

nav.bootsnav .dropdown.megamenu-fw .dropdown-menu {
    left: 0;
    right: 0;
}

nav.navbar.bootsnav{
    margin-bottom: 0;
    -moz-border-radius: 0px;
    -webkit-border-radius: 0px;
    -o-border-radius: 0px;
    border-radius: 0px;
    background-color: #fff;
    border: none;
    border-bottom: solid 1px #e0e0e0;
    z-index: 9;
}

nav.navbar.bootsnav ul.nav > li > a{
    color: #6f6f6f;
    background-color: transparent !important;
	text-transform:uppercase;
	font-size:14px;
	letter-spacing:0px;
}

nav.navbar.bootsnav ul.nav li.megamenu-fw > a:hover,
nav.navbar.bootsnav ul.nav li.megamenu-fw > a:focus,
nav.navbar.bootsnav ul.nav li.active > a:hover,
nav.navbar.bootsnav ul.nav li.active > a:focus,
nav.navbar.bootsnav ul.nav li.active > a{
    background-color: transparent;
}

nav.navbar.bootsnav .navbar-toggle{
    background-color: #fff !important;
    border: none;
    padding: 0;
    font-size: 18px;
    position: relative;
    top: 5px;
}

nav.navbar.bootsnav ul.nav .dropdown-menu .dropdown-menu{
    top: 0;
    left: 100%;
}

nav.navbar.bootsnav ul.nav ul.dropdown-menu > li > a{
    white-space:normal;
}


ul.menu-col{
    padding: 0;
    margin: 0;
    list-style: none;
}

ul.menu-col li a{
    color: #6f6f6f;
}

ul.menu-col li a:hover,
ul.menu-col li a:focus{
    text-decoration: none;
}

nav.bootsnav.navbar-full{
    padding-bottom: 10px;
    padding-top: 10px;
}

nav.bootsnav.navbar-full .navbar-header{
    display: block;
    width: 100%;
}

nav.bootsnav.navbar-full .navbar-toggle{
    display: inline-block;
    margin-right: 0;
    position: relative;
    top: 0;
    font-size: 30px;
    -webkit-transition: all 1s ease-in-out;
	-moz-transition: all 1s ease-in-out;
	-o-transition: all 1s ease-in-out;
	-ms-transition: all 1s ease-in-out;
	transition: all 1s ease-in-out;
}

nav.bootsnav.navbar-full .navbar-collapse{
    position: fixed;
    width: 100%;
    height: 100% !important;
    top: 0;
    left: 0;
    padding: 0;
    display: none !important;
    z-index: 9;
}

nav.bootsnav.navbar-full .navbar-collapse.in{
    display: block !important;
}

nav.bootsnav.navbar-full .navbar-collapse .nav-full{
    overflow: auto;
}

nav.bootsnav.navbar-full .navbar-collapse .wrap-full-menu{
    display: table-cell;
    vertical-align: middle;
    background-color: #fff;
    overflow: auto;
}

nav.bootsnav.navbar-full .navbar-collapse .nav-full::-webkit-scrollbar {
    width: 0;
}

nav.bootsnav.navbar-full .navbar-collapse .nav-full::-moz-scrollbar {
    width: 0;
}

nav.bootsnav.navbar-full .navbar-collapse .nav-full::-ms-scrollbar {
    width: 0;
}

nav.bootsnav.navbar-full .navbar-collapse .nav-full::-o-scrollbar {
    width: 0;
}


nav.bootsnav.navbar-full .navbar-collapse ul.nav{
    display: block;
    width: 100%;
    overflow: auto;
}

nav.bootsnav.navbar-full .navbar-collapse ul.nav a:hover,
nav.bootsnav.navbar-full .navbar-collapse ul.nav a:focus,
nav.bootsnav.navbar-full .navbar-collapse ul.nav a{
    background-color: transparent;
}

nav.bootsnav.navbar-full .navbar-collapse ul.nav > li{
    float: none;
    display: block;
    text-align: center;
}

nav.bootsnav.navbar-full .navbar-collapse ul.nav > li > a{
    display: table;
    margin: auto;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 24px;
    padding: 10px 15px;
}

li.close-full-menu > a{
    padding-top: 0px !important;
    padding-bottom: 0px !important;
}

li.close-full-menu{
    padding-top: 30px !important;
    padding-bottom: 30px !important;
}

.attr-nav{
    float: right;
    display: inline-block;
    margin-left: 40px;
    margin-right: 0px;
}

.attr-nav > ul{
    padding: 0;
    margin: 0 0 -7px 0;
    list-style: none;
    display: inline-block;
}

.attr-nav > ul > li{
    float: left;
    display: block;
}

.attr-nav > ul > li > a{
    color: #6f6f6f;
    display: block;
    padding: 28px 15px;
    position: relative;
}

.attr-nav > ul > li > a span.badge{
    position: absolute;
    top: 50%;
    margin-top: -15px;
    right: 5px;
    font-size: 10px;
    padding: 0;
    width: 15px;
    height: 15px;
    padding-top: 2px;
}

.attr-nav > ul > li.dropdown ul.dropdown-menu{
    -moz-border-radius: 0px;
    -webkit-border-radius: 0px;
    -o-border-radius: 0px;
    border-radius: 0px;
    -moz-box-shadow: 0px 0px 0px;
    -webkit-box-shadow: 0px 0px 0px;
    -o-box-shadow: 0px 0px 0px;
    box-shadow: 0px 0px 0px;
    border: solid 1px #e0e0e0;
}

ul.cart-list{
    padding: 0 !important;
    width: 250px !important;
}

ul.cart-list > li{
    position: relative;
    border-bottom: solid 1px #efefef;
    padding: 15px 15px 23px 15px !important;
}

ul.cart-list > li > a.photo{
    padding: 0 !important;
    margin-right: 15px;
    float: left;
    display: block;
    width: 50px;
    height: 50px;
    left: 15px;
    top: 15px;
}

ul.cart-list > li img{
    width: 50px;
    height: 50px;
    border: solid 1px #efefef;
}

ul.cart-list > li > h6{
    margin: 0;
}

ul.cart-list > li > h6 > a.photo{
    padding: 0 !important;
    display: block;
}

ul.cart-list > li > p{
    margin-bottom: 0;
}

ul.cart-list > li.total{
    background-color: #f5f5f5;
    padding-bottom: 15px !important;
}

ul.cart-list > li.total > .btn{
    display: inline-block;
    border-bottom: solid 1px #efefef !important;
}

ul.cart-list > li .price{
    font-weight: bold;
}

ul.cart-list > li.total > span{
    padding-top: 8px;
}

.top-search{
    background-color: #333;
    padding: 10px 0;
    display: none;
}

.top-search input.form-control{
    background-color: transparent;
    border: none;
    -moz-box-shadow: 0px 0px 0px;
    -webkit-box-shadow: 0px 0px 0px;
    -o-box-shadow: 0px 0px 0px;
    box-shadow: 0px 0px 0px;
    color: #fff;
    height: 40px;
    padding: 0 15px;
}

.top-search .input-group-addon{
    background-color: transparent;
    border: none;
    color: #fff;
    padding-left: 0;
    padding-right: 0;
}

.top-search .input-group-addon.close-search{
    cursor: pointer;
}

body{
    -webkit-transition: all 0.3s ease-in-out;
	-moz-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
}

body.on-side{
    margin-left: -280px;
}

.side{
    position: fixed;
    top: 0;
    right: -280px;
    width: 280px;
    padding: 25px 30px;
    height: 100%;
    display: block;
    background-color: #333;
    -webkit-transition: all 0.3s ease-in-out;
	-moz-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
    z-index: 9;
}

.side.on{
    right: 0;
}

.side .close-side{
    float: right;
    color: #fff;
    position: relative;
    z-index: 2;
    font-size: 16px;
}

.side .widget{
    position: relative;
    z-index: 1;
    margin-bottom: 25px;
}

.side .widget .title{
    color: #fff;
    margin-bottom: 15px;
}

.side .widget ul.link{
    padding: 0;
    margin: 0;
    list-style: none;
}

.side .widget ul.link li a{
    color: #9f9f9f;
    letter-spacing: 1px;
}

.side .widget ul.link li a:focus,
.side .widget ul.link li a:hover{
    color: #fff;
    text-decoration: none;
}

nav.navbar.bootsnav .share{
    padding: 0 30px;
    margin-bottom: 30px;
}

nav.navbar.bootsnav .share ul{
    display: inline-block;
    padding: 0;
    margin: 0 0 -7px 0;
    list-style: none;
}

nav.navbar.bootsnav .share ul > li{
    float: left;
    display: block;
    margin-right: 5px;
}

nav.navbar.bootsnav .share ul > li > a{
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    width: 35px;
    height: 35px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    background-color: #cfcfcf;
    color: #fff;
}

nav.navbar.bootsnav.navbar-fixed{
    position: fixed;
    display: block;
    width: 100%;
}

nav.navbar.bootsnav.no-background{
    -webkit-transition: all 1s ease-in-out;
	-moz-transition: all 1s ease-in-out;
	-o-transition: all 1s ease-in-out;
	-ms-transition: all 1s ease-in-out;
	transition: all 1s ease-in-out;
}

.wrap-sticky{
    position: relative;
    -webkit-transition: all 0.3s ease-in-out;
	-moz-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	-ms-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
}

.wrap-sticky nav.navbar.bootsnav{
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
	z-index:999999;
}

.wrap-sticky nav.navbar.bootsnav.sticked{
    position: fixed;
    -webkit-transition: all 0.2s ease-in-out;
	-moz-transition: all 0.2s ease-in-out;
	-o-transition: all 0.2s ease-in-out;
	-ms-transition: all 0.2s ease-in-out;
	transition: all 0.2s ease-in-out;
}

body.on-side .wrap-sticky nav.navbar.bootsnav.sticked{
    left: -280px;
}

@media (min-width: 1024px) and (max-width:1400px) {
    body.wrap-nav-sidebar .wrapper .container{
        width: 100%;
        padding-left: 30px;
        padding-right: 30px;
    }
}

@media (min-width: 1024px) {
    nav.navbar.bootsnav ul.nav .dropdown-menu .dropdown-menu{
        margin-top: -2px;
    }

    nav.navbar.bootsnav ul.nav.navbar-right .dropdown-menu .dropdown-menu{
        left: -200px;
    }
    
    nav.navbar.bootsnav ul.nav > li > a{
        padding: 30px 0 30px 30px;
        font-weight: 600;
    }
    nav.navbar.bootsnav ul.dropdown-menu.megamenu-content .content ul.menu-col li a:hover, .side .widget ul.link li a:hover, .side .widget ul.link li a:focus, .check-list li::before, ul.cart-list > li > h6 > a, .attr-nav > ul > li > a:hover, .attr-nav > ul > li > a:focus, nav.navbar-sidebar ul.nav li.dropdown.on > a, nav.navbar-sidebar .dropdown .megamenu-content .col-menu.on .title, nav.navbar-sidebar ul.nav li.dropdown ul.dropdown-menu li a:hover, nav.navbar ul.nav li.dropdown.on > a, nav.navbar.navbar-inverse ul.nav li.dropdown.on > a, nav.navbar-sidebar ul.nav li.dropdown.on ul.dropdown-menu li.dropdown.on > a, nav.navbar .dropdown .megamenu-content .col-menu.on .title, nav.navbar ul.nav > li > a:hover, nav.navbar ul.nav > li.active > a:hover, nav.navbar ul.nav li.active > a, nav.navbar li.dropdown ul.dropdown-menu > li a:hover{
	color: #ec1d25;	
	}
    nav.navbar.bootsnav ul.nav > li.dropdown > a.dropdown-toggle:after{
        font-family: 'FontAwesome';
        content: "\f0d7";
        margin-left: 5px;
        margin-top: 2px;
    }
    
    nav.navbar.bootsnav li.dropdown ul.dropdown-menu{
        -moz-box-shadow: 0px 0px 0px;
        -webkit-box-shadow: 0px 0px 0px;
        -o-box-shadow: 0px 0px 0px;
        box-shadow: 0px 0px 0px;
        -moz-border-radius: 0px;
        -webkit-border-radius: 0px;
        -o-border-radius: 0px;
        border-radius: 0px;
        padding: 0;
        width: 200px;
        background: #fff;
        border: solid 1px #e0e0e0;
        border-top: solid 5px;
    }
    
    nav.navbar.bootsnav li.dropdown ul.dropdown-menu > li a:hover,
    nav.navbar.bootsnav li.dropdown ul.dropdown-menu > li a:hover{
        background-color: transparent;
    }
    
    nav.navbar.bootsnav li.dropdown ul.dropdown-menu > li > a{
        padding: 10px 15px;
        border-bottom: solid 1px #eee;
        color: #6f6f6f;
    }
    
    nav.navbar.bootsnav li.dropdown ul.dropdown-menu > li:last-child > a{
        border-bottom: none;
    }
    
    nav.navbar.bootsnav ul.navbar-right li.dropdown ul.dropdown-menu li a{
        text-align: right;
    }
    
    nav.navbar.bootsnav li.dropdown ul.dropdown-menu li.dropdown > a.dropdown-toggle:before{
        font-family: 'FontAwesome';
        float: right;
        content: "\f105";
        margin-top: 0;
    }
    
    nav.navbar.bootsnav ul.navbar-right li.dropdown ul.dropdown-menu li.dropdown > a.dropdown-toggle:before{
        font-family: 'FontAwesome';
        float: left;
        content: "\f104";
        margin-top: 0;
    }
    
    nav.navbar.bootsnav li.dropdown ul.dropdown-menu ul.dropdown-menu{
        top: -3px;
    }
    
    nav.navbar.bootsnav ul.dropdown-menu.megamenu-content{
        padding: 0 15px !important;
    }
    
    nav.navbar.bootsnav ul.dropdown-menu.megamenu-content > li{
       padding: 25px 0 20px;
    }
    
    nav.navbar.bootsnav ul.dropdown-menu.megamenu-content.tabbed{
        padding: 0;
    }
    
    nav.navbar.bootsnav ul.dropdown-menu.megamenu-content.tabbed > li{
        padding: 0;
    }
    
    nav.navbar.bootsnav ul.dropdown-menu.megamenu-content .col-menu{
        padding: 0 30px;
        margin: 0 -0.5px;
        border-left: solid 1px #f0f0f0;
        border-right: solid 1px #f0f0f0;
    }
    
    nav.navbar.bootsnav ul.dropdown-menu.megamenu-content .col-menu:first-child{
        border-left: none;
    }
    
    nav.navbar.bootsnav ul.dropdown-menu.megamenu-content .col-menu:last-child{
        border-right: none;
    }
    
    nav.navbar.bootsnav ul.dropdown-menu.megamenu-content .content{
        display: none;
    }
    
    nav.navbar.bootsnav ul.dropdown-menu.megamenu-content .content ul.menu-col li a{
        text-align: left;
        padding: 5px 0;
        display: block;
        width: 100%;
        margin-bottom: 0;
        border-bottom: none;
        color: #6f6f6f;
    }
    
    nav.navbar.bootsnav.on ul.dropdown-menu.megamenu-content .content{
        display: block !important;
        height: auto !important;
    }
    
    /* Navbar Transparent
    =================================*/  
    nav.navbar.bootsnav.no-background{
        background-color: transparent;
        border: none;
    }
    
    nav.navbar.bootsnav.navbar-transparent .attr-nav{
        padding-left: 15px;
        margin-left: 30px;
    }
    
    nav.navbar.bootsnav.navbar-transparent.white{
        background-color: rgba(255,255,255,0.3);
        border-bottom: solid 1px #bbb;
    }
    
    nav.navbar.navbar-inverse.bootsnav.navbar-transparent.dark,
    nav.navbar.bootsnav.navbar-transparent.dark{
        background-color: rgba(0,0,0,0.3);
        border-bottom: solid 1px #555;
    }
    
    nav.navbar.bootsnav.navbar-transparent.white .attr-nav{
        border-left: solid 1px #bbb;
    }
    
    nav.navbar.navbar-inverse.bootsnav.navbar-transparent.dark .attr-nav,
    nav.navbar.bootsnav.navbar-transparent.dark .attr-nav{
        border-left: solid 1px #555;
    }
    
    nav.navbar.bootsnav.no-background.white .attr-nav > ul > li > a,
    nav.navbar.bootsnav.navbar-transparent.white .attr-nav > ul > li > a,
    nav.navbar.bootsnav.navbar-transparent.white ul.nav > li > a,
    nav.navbar.bootsnav.no-background.white ul.nav > li > a{
        color: #fff;
    }
    
    nav.navbar.bootsnav.navbar-transparent.dark .attr-nav > ul > li > a,
    nav.navbar.bootsnav.navbar-transparent.dark ul.nav > li > a{
        color: #eee;
    }
    
    nav.navbar.bootsnav.navbar-fixed.navbar-transparent .logo-scrolled,
    nav.navbar.bootsnav.navbar-fixed.no-background .logo-scrolled{
        display: none;
    }

    nav.navbar.bootsnav.navbar-fixed.navbar-transparent .logo-display,
    nav.navbar.bootsnav.navbar-fixed.no-background .logo-display{
        display: block;
    }

    nav.navbar.bootsnav.navbar-fixed .logo-display{
        display: none;
    }

    nav.navbar.bootsnav.navbar-fixed .logo-scrolled{
        display: block;
    }
    
    .attr-nav > ul > li.dropdown ul.dropdown-menu{
        margin-top: 0;
        margin-left: 55px;
        width: 250px;
        left: -250px;
    }
    
    nav.navbar.bootsnav.menu-center .container{
        position: relative;
    }
    
    nav.navbar.bootsnav.menu-center ul.nav.navbar-center{
        float:none;
        margin: 0 auto;
        display: table;
        table-layout: fixed;
    }
    
    nav.navbar.bootsnav.menu-center .navbar-header,
    nav.navbar.bootsnav.menu-center .attr-nav{
        position: absolute;
    }
    
    nav.navbar.bootsnav.menu-center .attr-nav{
        right: 15px;
    }
    
    nav.bootsnav.navbar-brand-top .navbar-header{
        display: block;
        width: 100%;
        text-align: center;
    }
    
    nav.bootsnav.navbar-brand-top ul.nav > li.dropdown > ul.dropdown-menu{
        margin-top: 2px;
    }
    
    nav.bootsnav.navbar-brand-top ul.nav > li.dropdown.megamenu-fw > ul.dropdown-menu{
        margin-top: 0;
    }
    
    nav.bootsnav.navbar-brand-top .navbar-header .navbar-brand{
        display: inline-block;
        float: none;
        margin: 0;
    }
    
    nav.bootsnav.navbar-brand-top .navbar-collapse{
        text-align: center;
    }
    
    nav.bootsnav.navbar-brand-top ul.nav{
        display: inline-block;
        float: none;
        margin: 0 0 -5px 0;
    }
    
    nav.bootsnav.brand-center .navbar-header{
        display: block;
        width: 100%;
        position: absolute;
        text-align: center;
        top: 0;
        left: 0;
    }
    
    nav.bootsnav.brand-center .navbar-brand{
        display: inline-block;
        float: none;
    }
    
    nav.bootsnav.brand-center .navbar-collapse{
        text-align: center;
        display: inline-block;
        padding-left: 0;
        padding-right: 0;
    }
    
    nav.bootsnav.brand-center ul.nav > li.dropdown > ul.dropdown-menu{
        margin-top: 2px;
    }
    
    nav.bootsnav.brand-center ul.nav > li.dropdown.megamenu-fw > ul.dropdown-menu{
        margin-top: 0;
    }
    
    nav.bootsnav.brand-center .navbar-collapse .col-half{
        width: 50%;
        float: left;
        display: block;
    }
    
    nav.bootsnav.brand-center .navbar-collapse .col-half.left{
        text-align: right;
        padding-right: 100px;
    }
    
    nav.bootsnav.brand-center .navbar-collapse .col-half.right{
        text-align: left;
        padding-left: 100px;
    }
    
    nav.bootsnav.brand-center ul.nav{
        float: none !important;
        margin-bottom: -5px !important;
        display: inline-block !important;
    }
    
    nav.bootsnav.brand-center ul.nav.navbar-right{
        margin: 0;
    }
    
    nav.bootsnav.brand-center.center-side .navbar-collapse .col-half.left{
        text-align: left;
        padding-right: 100px;
    }
    
    nav.bootsnav.brand-center.center-side .navbar-collapse .col-half.right{
        text-align: right;
        padding-left: 100px;
    }
    
    body.wrap-nav-sidebar .wrapper{
        padding-left: 260px; 
        overflow-x: hidden;
    }

    nav.bootsnav.navbar-sidebar{
        position: fixed;
        width: 260px;
        overflow: hidden;
        left: 0;
        padding: 0  0 0 0 !important;
        background: #fff;
        -moz-box-shadow: 1px 0px 1px 0px #eee;
        -webkit-box-shadow: 1px 0px 1px 0px #eee;
        -o-box-shadow: 1px 0px 1px 0px #eee;
        box-shadow: 1px 0px 1px 0px #eee;
    }  
    
    nav.bootsnav.navbar-sidebar .scroller{
        width: 280px;
        overflow-y:auto;
        overflow-x: hidden;
    }

    nav.bootsnav.navbar-sidebar .container-fluid,
    nav.bootsnav.navbar-sidebar .container{
        padding: 0 !important;
    }

    nav.bootsnav.navbar-sidebar .navbar-header{
        float: none;
        display: block;
        width: 260px;
        padding: 10px 15px;
        margin: 10px 0 0 0 !important;
    }
    
    nav.bootsnav.navbar-sidebar .navbar-collapse{
        padding: 0 !important;
        width: 260px;
    }

    nav.bootsnav.navbar-sidebar ul.nav{
        float: none;
        display: block;
        width: 100%;
        padding: 0 15px !important;
        margin: 0 0 30px 0;
    }

    nav.bootsnav.navbar-sidebar ul.nav li{
        float: none !important;
    }
    
    nav.bootsnav.navbar-sidebar ul.nav > li > a{
        padding: 10px 15px;
        font-weight: bold;
    }
    
    nav.bootsnav.navbar-sidebar ul.nav > li.dropdown > a:after{
        float: right;
    }
    
    nav.bootsnav.navbar-sidebar ul.nav li.dropdown ul.dropdown-menu{
        left: 100%;
        top: 0;
        position: relative !important;
        left: 0 !important;
        width: 100% !important;
        height: auto !important;
        background-color: transparent;
        border: none !important;
        padding: 0;
        -moz-box-shadow: 0px 0px 0px;
        -webkit-box-shadow: 0px 0px 0px;
        -o-box-shadow: 0px 0px 0px;
        box-shadow: 0px 0px 0px;
    }
    
    nav.bootsnav.navbar-sidebar ul.nav .megamenu-content .col-menu{
        border: none !important;
    }
    
    nav.bootsnav.navbar-sidebar ul.nav > li.dropdown > ul.dropdown-menu{
        margin-bottom: 15px;
    }
    
    nav.bootsnav.navbar-sidebar ul.nav li.dropdown ul.dropdown-menu{
        padding-left: 0;
        float: none;
        margin-bottom: 0;
    }
    
    nav.bootsnav.navbar-sidebar ul.nav li.dropdown ul.dropdown-menu li a{
        padding:  5px 15px;
        color: #6f6f6f;
        border: none;
    }
    
    nav.bootsnav.navbar-sidebar ul.nav li.dropdown ul.dropdown-menu ul.dropdown-menu{
        padding-left: 15px;
        margin-top: 0;
    }
    
    nav.bootsnav.navbar-sidebar ul.nav li.dropdown ul.dropdown-menu li.dropdown > a:before{
        font-family: 'FontAwesome';
        content: "\f105";
        float: right;
    }
    
    nav.bootsnav.navbar-sidebar ul.nav li.dropdown.on ul.dropdown-menu li.dropdown.on > a:before{
        content: "\f107";
    }
    
    nav.bootsnav.navbar-sidebar ul.dropdown-menu.megamenu-content > li{
        padding: 0 !important;
    }
        
    nav.bootsnav.navbar-sidebar .dropdown .megamenu-content .col-menu{
        display: block;
        float: none !important;
        padding: 0;
        margin: 0;
        width: 100%;
    }
    
    nav.bootsnav.navbar-sidebar .dropdown .megamenu-content .col-menu .title{
        padding: 7px 0;
        text-transform: none;
        font-weight: 400;
        letter-spacing: 0px;
        margin-bottom: 0;
        cursor: pointer;
        color: #6f6f6f;
    }
    
    nav.bootsnav.navbar-sidebar .dropdown .megamenu-content .col-menu .title:before{
        font-family: 'FontAwesome';
        content: "\f105";
        float: right;
    }
    
    nav.bootsnav.navbar-sidebar .dropdown .megamenu-content .col-menu.on .title:before{
        content: "\f107";
    }
    
    nav.bootsnav.navbar-sidebar .dropdown .megamenu-content .col-menu{
        border: none;
    }
    
    nav.bootsnav.navbar-sidebar .dropdown .megamenu-content .col-menu .content{
        padding: 0 0 0 15px;
    }
    
    nav.bootsnav.navbar-sidebar .dropdown .megamenu-content .col-menu ul.menu-col li a{
        padding: 3px 0 !important;
    }
}

@media (max-width: 992px) {
    nav.navbar.bootsnav .navbar-brand    {
        display: inline-block;
        float: left !important;
        margin: 0 0 0 -15px !important;
    }
    
    nav.navbar.bootsnav .navbar-header {
        float: none;
        display: block;
        text-align: center;
        padding-left: 30px;
        padding-right: 30px;
    }
    
    nav.navbar.bootsnav .navbar-toggle {
        display: inline-block;
        float: right;
        margin-right: -10px;
        margin-top: 20px;
    }
    
    nav.navbar.bootsnav .navbar-collapse {
        border: none;   
        margin-bottom: 0;
    }
    
    nav.navbar.bootsnav.no-full .navbar-collapse{
    }
    
    nav.navbar.bootsnav .navbar-collapse.collapse {
        display: none !important;
    }
    
    nav.navbar.bootsnav .navbar-collapse.collapse.in {
        display: block !important;
    }
    
    nav.navbar.bootsnav .navbar-nav {
        float: none !important;
        padding-left: 30px;
        padding-right: 30px;
        margin: 0px -15px;
    }
    
    nav.navbar.bootsnav .navbar-nav > li {
        float: none;
    }
    
    nav.navbar.bootsnav li.dropdown a.dropdown-toggle:before{
        font-family: 'FontAwesome';
        content: "\f105";
        float: right;
        font-size: 16px;
        margin-left: 10px;
    }
    
    nav.navbar.bootsnav li.dropdown.on > a.dropdown-toggle:before{
        content: "\f107";
    }
    
    nav.navbar.bootsnav .navbar-nav > li > a{
        display: block;
        width: 100%;
        border-bottom: solid 1px #e0e0e0;
        padding: 10px 0;
        border-top: solid 1px #e0e0e0;
        margin-bottom: -1px;
    }
    
    nav.navbar.bootsnav .navbar-nav > li:first-child > a{
        border-top: none;
    }
    
    nav.navbar.bootsnav ul.navbar-nav.navbar-left > li:last-child > ul.dropdown-menu{
        border-bottom: solid 1px #e0e0e0;
    }
    
    nav.navbar.bootsnav ul.nav li.dropdown li a.dropdown-toggle{
        float: none !important;
        position: relative;
        display: block;
        width: 100%;
    }
    
    nav.navbar.bootsnav ul.nav li.dropdown ul.dropdown-menu{
        width: 100%;
        position: relative !important;
        background-color: transparent;
        float: none;
        border: none;
        padding: 0 0 0 15px !important;
        margin: 0 0 -1px 0 !important;
        -moz-box-shadow: 0px 0px 0px;
        -webkit-box-shadow: 0px 0px 0px;
        -o-box-shadow: 0px 0px 0px;
        box-shadow: 0px 0px 0px;
        -moz-border-radius: 0px 0px 0px;
        -webkit-border-radius: 0px 0px 0px;
        -o-border-radius: 0px 0px 0px;
        border-radius: 0px 0px 0px;
    }
    
    nav.navbar.bootsnav ul.nav li.dropdown ul.dropdown-menu  > li > a{
        display: block;
        width: 100%;
        border-bottom: solid 1px #e0e0e0;
        padding: 10px 0;
        color: #6f6f6f;
    }
    
    nav.navbar.bootsnav ul.nav ul.dropdown-menu li a:hover,
    nav.navbar.bootsnav ul.nav ul.dropdown-menu li a:focus{
        background-color: transparent;
    }
    
    nav.navbar.bootsnav ul.nav ul.dropdown-menu ul.dropdown-menu{
        float: none !important;
        left: 0;
        padding: 0 0 0 15px;
        position: relative;
        background: transparent;
        width: 100%;
    }
    
    nav.navbar.bootsnav ul.nav ul.dropdown-menu li.dropdown.on > ul.dropdown-menu{
        display: inline-block;
        margin-top: -10px;
    }
    
    nav.navbar.bootsnav li.dropdown ul.dropdown-menu li.dropdown > a.dropdown-toggle:after{
        display: none;
    }
    
    nav.navbar.bootsnav .dropdown .megamenu-content .col-menu .title{
        padding: 10px 15px 10px 0;
        line-height: 24px;
        text-transform: none;
        font-weight: 400;
        letter-spacing: 0px;
        margin-bottom: 0;
        cursor: pointer;
        border-bottom: solid 1px #e0e0e0;
        color: #6f6f6f;
    }
    
    nav.navbar.bootsnav .dropdown .megamenu-content .col-menu ul > li > a{
        display: block;
        width: 100%;
        border-bottom: solid 1px #e0e0e0;
        padding: 8px 0;
    }
    
   nav.navbar.bootsnav .dropdown .megamenu-content .col-menu .title:before{
        font-family: 'FontAwesome';
        content: "\f105";
        float: right;
        font-size: 16px;
        margin-left: 10px;
       position: relative;
       right: -15px;
    }
    
    nav.navbar.bootsnav .dropdown .megamenu-content .col-menu:last-child .title{
        border-bottom: none;
    }
    
    nav.navbar.bootsnav .dropdown .megamenu-content .col-menu.on:last-child .title{
        border-bottom: solid 1px #e0e0e0;
    }
    
    nav.navbar.bootsnav .dropdown .megamenu-content .col-menu:last-child ul.menu-col li:last-child a{
        border-bottom: none;
    }
    
    nav.navbar.bootsnav .dropdown .megamenu-content .col-menu.on .title:before{
        content: "\f107";
    }
    
    nav.navbar.bootsnav .dropdown .megamenu-content .col-menu .content{
        padding: 0 0 0 15px;
    }
    
    nav.bootsnav.brand-center .navbar-collapse{
        display: block;
    }
    
    nav.bootsnav.brand-center ul.nav{
        margin-bottom: 0px !important;
    }
    
    nav.bootsnav.brand-center .navbar-collapse .col-half{
        width: 100%;
        float: none;
        display: block;
    }
    
    nav.bootsnav.brand-center .navbar-collapse .col-half.left{
        margin-bottom: 0;
    }
    
    nav.bootsnav .megamenu-content{
        padding: 0;
    }
    
    nav.bootsnav .megamenu-content .col-menu{
        padding-bottom: 0;
    }
    
    nav.bootsnav .megamenu-content .title{
        cursor: pointer;
        display: block;
        padding: 10px 15px;
        margin-bottom: 0;
        font-weight: normal;
    }
    
    nav.bootsnav .megamenu-content .content{
        display: none;
    }
    
    .attr-nav{
        position: absolute;
        right: 60px;
    }
    
    .attr-nav > ul{
        padding: 0;
        margin: 0 -15px -7px 0;
    }
    
    .attr-nav > ul > li > a{
        padding: 16px 15px 15px;
    }
    
    .attr-nav > ul > li.dropdown > a.dropdown-toggle:before{
        display: none;
    }
    
    .attr-nav > ul > li.dropdown ul.dropdown-menu{
        margin-top: 2px;
        margin-left: 55px;
        width: 250px;
        left: -250px;
        border-top: solid 5px;
    }
    
    .top-search .container{
        padding: 0 45px;
    }
    
    nav.bootsnav.navbar-full ul.nav{
        margin-left: 0;
    }
    
    nav.bootsnav.navbar-full ul.nav > li > a{
        border: none;
    }
    
    nav.bootsnav.navbar-full .navbar-brand    {
        float: left !important;
        padding-left: 0;
    }
    
    nav.bootsnav.navbar-full .navbar-toggle {
        display: inline-block;
        float: right;
        margin-right: 0;
        margin-top: 10px;
    }
    
    nav.bootsnav.navbar-full .navbar-header {
        padding-left: 15px;
        padding-right: 15px;
    }
    
    nav.navbar.bootsnav.navbar-sidebar .share{
        padding: 30px 15px;
        margin-bottom: 0;
    }
    
    nav.navbar.bootsnav .megamenu-content.tabbed{
        padding-left: 0 !mportant;
    }
    
    nav.navbar.bootsnav .tabbed > li{
        padding: 25px 0;
        margin-left: -15px !important;
    }
    
    body > .wrapper{
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        -ms-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
    
    body.side-right > .wrapper{
        margin-left: 280px;
        margin-right: -280px !important;
    }
    
    nav.navbar.bootsnav.navbar-mobile .navbar-collapse{
        position: fixed;
        display: block;
        background: #fff;
        z-index: 99;
        width: 280px;
        height: 100% !important;
        left: -280px;
        top: 0;
        padding: 0;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        -ms-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }
    
    nav.navbar.bootsnav.navbar-mobile .navbar-collapse.in{
        left: 0;
    }
    
    nav.navbar.bootsnav.navbar-mobile ul.nav{
        width: 293px;
        padding-right: 0;
        padding-left: 15px;
    }
    
    nav.navbar.bootsnav.navbar-mobile ul.nav > li > a{
        padding: 15px 15px;
    }
    
    nav.navbar.bootsnav.navbar-mobile ul.nav ul.dropdown-menu > li > a{
        padding-right: 15px !important;
        padding-top: 15px !important;
        padding-bottom: 15px !important;
    }
    
    nav.navbar.bootsnav.navbar-mobile ul.nav ul.dropdown-menu .col-menu .title{
        padding-right: 30px !important;
        padding-top: 13px !important;
        padding-bottom: 13px !important;
    }
    
    nav.navbar.bootsnav.navbar-mobile ul.nav ul.dropdown-menu .col-menu ul.menu-col li a{
        padding-top: 13px !important;
        padding-bottom: 13px !important;
    }
    
    nav.navbar.bootsnav.navbar-mobile .navbar-collapse [class*=' col-'] {
        width: 100%;
    }
    
    nav.navbar.bootsnav.navbar-fixed .logo-scrolled{
        display: block !important;
    }

    nav.navbar.bootsnav.navbar-fixed .logo-display{
        display: none !important;
    }
    
    nav.navbar.bootsnav.navbar-mobile .tab-menu,
    nav.navbar.bootsnav.navbar-mobile .tab-content{
        width: 100%;
        display: block;
    }
}

@media (max-width: 767px) {
    nav.navbar.bootsnav .navbar-header {
        padding-left: 15px;
        padding-right: 15px;
    }
    
    nav.navbar.bootsnav .navbar-nav {
        padding-left: 15px;
        padding-right: 15px;
    }
    
    .attr-nav{
        right: 30px;
    }
    
    .attr-nav > ul{
        margin-right: -10px;
    }
    
    .attr-nav > ul > li > a{
        padding: 16px 10px 15px;
        padding-left: 0 !important;
    }
    
    .attr-nav > ul > li.dropdown ul.dropdown-menu{
        left: -275px;
    }
    
    .top-search .container{
        padding: 0 15px;
    }
    
    nav.bootsnav.navbar-full .navbar-collapse{
        left: 15px;
    }
    
    nav.bootsnav.navbar-full .navbar-header{
        padding-right: 0;
    }
    
    nav.bootsnav.navbar-full .navbar-toggle {
        margin-right: -15px;
    }
    
    nav.bootsnav.navbar-full ul.nav > li > a{
        font-size: 18px !important;
        line-height: 24px !important;
        padding: 5px 10px !important;
    }
    
    nav.navbar.bootsnav.navbar-sidebar .share{
        padding: 30px 15px !important;
    }
    
    nav.navbar.bootsnav.navbar-sidebar .share{
        padding: 30px 0 !important;
        margin-bottom: 0;
    }
    
    nav.navbar.bootsnav.navbar-mobile.navbar-sidebar .share{
        padding: 30px 15px !important;
        margin-bottom: 0;
    }
    
    body.side-right > .wrapper{
        margin-left: 280px;
        margin-right: -280px !important;
    }
    
    nav.navbar.bootsnav.navbar-mobile .navbar-collapse{
        margin-left: 0;
    }
    
    nav.navbar.bootsnav.navbar-mobile ul.nav{
        margin-left: -15px;
    }
    
    nav.navbar.bootsnav.navbar-mobile ul.nav{
        border-top: solid 1px #fff;
    }
    
    li.close-full-menu{
        padding-top: 15px !important;
        padding-bottom: 15px !important;
    }
}

@media (min-width: 480px) and (max-width: 640px) {
    nav.bootsnav.navbar-full ul.nav{
        padding-top: 30px;
        padding-bottom: 30px;
    }
}

@media (max-width: 1024px) {

nav.navbar.bootsnav ul.nav > li > a{
	padding: 30px 0 30px 20px;
	font-size:12px;
}
.logo{
	padding: 15px 15px 15px 0 !important;
}
	
}
@media (max-width: 640px) {

.attr-nav {
    right: 40px;
	margin-left: 0px;
}
nav.navbar.bootsnav ul.nav > li > a {
    padding: 10px 0 10px 20px;
    font-size: 12px;
}
	
}
@media (max-width: 480px) {
	
nav.navbar.bootsnav .navbar-header {
    padding-left: 15px;
    padding-right: 15px;
    height: 110px;
}

}
</style>
