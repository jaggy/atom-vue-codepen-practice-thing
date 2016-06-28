<nav class="navbar navbar-default navbar-static-top">
	<div class="container-fluid">
		@if (!Auth::guest())
		<div class="dropup">
			<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				Chat
				<span class="caret"></span>
			</button>

			<div class="dropdown-menu">
				@include('app.components.chatbox')
			</div>
		</div>
		@endif
	</div>
</nav>