@extends('layouts.master')

@section('content')
<main id="app" class="[ u-h:100p u-w:100p u-d:fx u-fxd:r u-h:100p u-w:100p u-p:f ]">
    <aside class="sidebar [ u-fxb:17r u-h:100p ]">
        <tree-view class="" :files="files"></tree-view>
    </aside>

    <editor class="[ u-h:100p u-w:100p ]"></editor>
</main>

<script src="https://js.pusher.com/3.1/pusher.min.js"></script>
@endsection
