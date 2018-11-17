<!doctype html>
<html lang="en" class="no-js" ng-app="hpse">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=10" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Pragma" content="no-cache">
<%-- <img href="<c:url value="/img/favicon.ico"/>" rel="icon"
	type="image/x-icon" /> --%>
<link
	href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,700'
	rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="css/ng-tags-input.bootstrap.min.css" />
<link rel="stylesheet" href="css/ng-tags-input.min.css" />
<link rel="stylesheet" href="css/reset.css" />
<!-- CSS reset -->

<link rel="stylesheet" href="css/style.css" />
<!-- Resource style -->

<link rel="stylesheet" href="css/bootstrap.min.css" />
<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
<!-- Bootstrap -->



<script type="text/javascript" src="js/jquery-2.1.4.js"></script>
<script	src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.1/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script type="text/javascript" src="js/jquery.menu-aim.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<!-- Resource jQuery -->
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/bootstrap-datepicker.js"></script>
<script type="text/javascript" src="js/angular.min.js"></script>
<script type="text/javascript" src="js/ng-tags-input.min.js"></script>
<!-- <script src="http://mbenford.github.io/ngTagsInput/js/ng-tags-input.min.js"></script> -->
<!-- <script src="http://cdnjs.cloudflare.com/ajax/libs/ng-tags-input/2.0.1/ng-tags-input.min.js"></script> -->
<!-- <script type="text/javascript" src="js/ng-tags-input.min.js"></script> -->
<!-- Angular -->
<script type="text/javascript" src="js/angular-route.min.js"></script>
<script type="text/javascript" src="js/angular-local-storage.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-animate.js"></script>
<script type="text/javascript" src="js/download.js"></script>
<!-- for file download-->
<script type="text/javascript" src="js/ngBootbox.js"></script>
<script type="text/javascript" src="js/bootbox.js"></script>
<script type="text/javascript" src="js/angular-filter.js"></script>
<script type="text/javascript" src="js/modernizr.js"></script>
<!-- Modernizr -->
<script type="text/javascript" src="./app.js"></script>
<script type="text/javascript" src="modules/util/util.module.js"></script> <!-- Util -->
<script src="http://d3js.org/d3.v3.min.js"></script>
<script type="text/javascript"  src="js/Chart.js"></script>
<script type="text/javascript" src="js/angular-chart.js"></script>
<script type="text/javascript">
	if (!String.prototype.startsWith) {
		String.prototype.startsWith = function(searchString, position) {
			position = position || 0;
			return this.substr(position, searchString.length) === searchString;
		};
	}
</script>
<script type="text/javascript" src="modules/util/moment.js"></script> 
<title>HPSE Assessment - Travelling Sales Man (Bellman-Held-Karp algorithm) </title>
</head>
<body style="background:#E6E6E6;">
	 <div class="right"></div>
	<div ng-controller="MainController">
		<header class="cd-main-header">
			<a><img class="cd-logo" src="img/infosys.png" alt="Logo"></a>
			<p class="cd-wel" align="center" ng-show="true">Travelling SalesMan (Bellman-Held-Karp algorithm)</p>
		</header>
		<main class="cd-main-content">
		<nav class="cd-side-nav">
			<ul>
				<li class="cd-label"><a href="#/HPSE">Find Shortest Path</a></li>
			</ul>
			<ul>
				<li class="cd-label"><a href="#/UserGuide">User Guide</a></li>
			</ul>
		</nav>
		<div class="content-wrapper">
			<div ng-view autoscroll="true">
			 <div>
     		  <br><br>     		  
    		 </div>
			</div>
		</div> <!-- .content-wrapper -->
		</main>
		</div>
</body>
</html>