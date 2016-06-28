<form class="login-form" action="{{ url('/login') }}" method="post">
    {{ csrf_field() }}
    <h3 class="form-title">Login to your account</h3>
    <div class="alert alert-danger display-hide">
        <button class="close" data-close="alert"></button>
        <span> Enter any email and password. </span>
    </div>
    <div class="form-group">
        <label class="control-label visible-ie8 visible-ie9">Email</label>
        <div class="input-icon">
            <i class="fa fa-at"></i>
            <input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="Email" name="email" /> </div>
    </div>
    <div class="form-group">
        <label class="control-label visible-ie8 visible-ie9">Password</label>
        <div class="input-icon">
            <i class="fa fa-lock"></i>
            <input class="form-control placeholder-no-fix" type="password" autocomplete="off" placeholder="Password" name="password" /> </div>
    </div>
    <div class="form-actions">
        <label class="checkbox">
            <input type="checkbox" name="remember" value="1" /> Remember me </label>
        <button type="submit" class="btn green pull-right"> Login </button>
    </div>
    <div class="forget-password">
        <h4>Forgot your password ?</h4>
        <p> no worries, click
            <a href="{{ url('/password/reset') }}" id="forget-password"> here </a> to reset your password. </p>
    </div>
    <div class="create-account">
        <p> Don't have an account yet ?&nbsp;
            <a href="javascript:;" id="register-btn"> Create an account </a>
        </p>
    </div>
</form>
