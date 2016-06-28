<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en" class="no-js">
<!--<![endif]-->

    <head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, initial-scale=1, maximum-scale=1" name="viewport"/>
        <meta content="" name="description"/>
        <meta content="" name="author"/>
        <title>🔮Code　Clash　🔮</title>
        <link rel="shortcut icon" href="/favicon.ico"/>

        <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
        <link href="{{{ URL::to('/assets', array(), Request::secure()) }}}/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <link href="{{{ URL::to('/assets', array(), Request::secure()) }}}/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css" />
        <link href="{{{ URL::to('/assets', array(), Request::secure()) }}}/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="{{{ URL::to('/assets', array(), Request::secure()) }}}/global/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css" />
        <link href="{{{ URL::to('/assets', array(), Request::secure()) }}}/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css" rel="stylesheet" type="text/css" />

        <link href="{{{ URL::to('/assets', array(), Request::secure()) }}}/global/css/components-md.min.css" rel="stylesheet" id="style_components" type="text/css" />
        <link href="{{{ URL::to('/assets', array(), Request::secure()) }}}/global/css/plugins-md.min.css" rel="stylesheet" type="text/css" />

        <link href="{{{ URL::to('/assets', array(), Request::secure()) }}}/layouts/layout4/css/layout.min.css" rel="stylesheet" type="text/css" />
        <link href="{{{ URL::to('/assets', array(), Request::secure()) }}}/layouts/layout4/css/themes/light.min.css" rel="stylesheet" type="text/css" id="style_color" />
        <link href="{{{ URL::to('/assets', array(), Request::secure()) }}}/layouts/layout4/css/custom.min.css" rel="stylesheet" type="text/css" />

        <link href="{{{ URL::to('/assets', array(), Request::secure()) }}}/pages/css/login-4.min.css" rel="stylesheet" type="text/css" />

        <link rel="stylesheet" href="{{{ URL::to('/assets', array(), Request::secure()) }}}/styles/libs.min.css">
        <link rel="stylesheet" href="{{{ URL::to('/assets', array(), Request::secure()) }}}/styles/@yield('asset').min.css">
    </head>

    <body class="login">

      @yield('content')

      <script src="{{{ URL::to('/assets', array(), Request::secure()) }}}/global/plugins/jquery.min.js" type="text/javascript"></script>
      <script src="{{{ URL::to('/assets', array(), Request::secure()) }}}/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
      <script src="{{{ URL::to('/assets', array(), Request::secure()) }}}/global/plugins/js.cookie.min.js" type="text/javascript"></script>
      <script src="{{{ URL::to('/assets', array(), Request::secure()) }}}/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js" type="text/javascript"></script>
      <script src="{{{ URL::to('/assets', array(), Request::secure()) }}}/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js" type="text/javascript"></script>
      <script src="{{{ URL::to('/assets', array(), Request::secure()) }}}/global/plugins/jquery.blockui.min.js" type="text/javascript"></script>
      <script src="{{{ URL::to('/assets', array(), Request::secure()) }}}/global/plugins/uniform/jquery.uniform.min.js" type="text/javascript"></script>
      <script src="{{{ URL::to('/assets', array(), Request::secure()) }}}/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js" type="text/javascript"></script>

      <script src="{{{ URL::to('/assets', array(), Request::secure()) }}}/global/plugins/jquery-validation/js/jquery.validate.min.js" type="text/javascript"></script>
      <script src="{{{ URL::to('/assets', array(), Request::secure()) }}}/global/plugins/jquery-validation/js/additional-methods.min.js" type="text/javascript"></script>
      <script src="{{{ URL::to('/assets', array(), Request::secure()) }}}/global/plugins/select2/js/select2.full.min.js" type="text/javascript"></script>
      <script src="{{{ URL::to('/assets', array(), Request::secure()) }}}/global/plugins/backstretch/jquery.backstretch.min.js" type="text/javascript"></script>

      <script src="{{{ URL::to('/assets', array(), Request::secure()) }}}/global/scripts/app.min.js" type="text/javascript"></script>
      <script src="{{{ URL::to('/assets', array(), Request::secure()) }}}/pages/scripts/login-4.min.js" type="text/javascript"></script>

      <script data-main="{{{ URL::to('/assets', array(), Request::secure()) }}}/scripts/@yield('asset').min.js" type="text/javascript" src="{{{ URL::to('/assets', array(), Request::secure()) }}}/scripts/libs.min.js"></script>
      <script data-main="{{{ URL::to('/assets', array(), Request::secure()) }}}/scripts/@yield('asset').min.js" type="text/javascript" src="{{{ URL::to('/assets', array(), Request::secure()) }}}/scripts/@yield('asset').min.js"></script>

      @include('app.components.bootstrap')
    </body>

</html>
