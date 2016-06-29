@extends('layouts.master')

@section('content')
<main id="app [ u-h:100p u-w:100p u-d:fx ]">
    <tree-view :files="files"></tree-view>

    <editor></editor>
</main>

<script src="https://js.pusher.com/3.1/pusher.min.js"></script>
@endsection
