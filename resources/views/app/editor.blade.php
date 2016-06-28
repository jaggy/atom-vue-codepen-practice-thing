@extends('app.base')

@section('asset', 'editor')

@section('content')
<div class="page-container">
	<div class="row">
		<div class="col-sm-6">
			<div>
				<ul class="nav nav-tabs">
					<li class="active"><a data-toggle="tab" href="#editor-php">PHP</a></li>
					<li><a data-toggle="tab" href="#editor-css">CSS</a></li>
					<li><a data-toggle="tab" href="#editor-js">JS</a></li>
				</ul>
				<div class="tab-content">
					<div id="editor-php" class="tab-pane fade in active cc-editor" data-mode="php" data-theme="monokai"></div>
					<div id="editor-css" class="tab-pane fade cc-editor" data-mode="css" data-theme="monokai"></div>
					<div id="editor-js" class="tab-pane fade cc-editor" data-mode="javascript" data-theme="monokai"></div>
				</div>
			</div>
		</div>
		<div class="col-sm-6">
			<div class="row">Preview</div>
			<div class="cc-preview"><iframe sandbox="allow-forms allow-popups allow-scripts allow-same-origin allow-modals" frameborder="0">
				<html></html>
			</iframe></div>
		</div>
	</div>
</div>
@endsection
