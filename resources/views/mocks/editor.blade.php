@extends('layouts.master')

@section('content')
<main id="app" class="[ u-h:100p u-w:100p u-d:fx u-fxd:r u-h:100p u-w:100p u-p:f ]" @keydown="check_commands($event)">
    <aside class="sidebar [
                    u-fxb:17r u-h:100p u-fz:$sidebar-font-size u-bgc:$tree-view-background
                ]">
        <header class="sidebar__header [ u-h:2.5r u-d:fx u-bgc:$sidebar-header-background u-pl:0.75r u-pr:0.75r ]">
            <h1 class="sidebar__title [ u-fz:0.875r u-tt:u u-lh:0.875r u-c:$sidebar-header-font-color ]">Projects</h1>
        </header>

        <tree-view :project="active_project" :active="current_file"></tree-view>
    </aside>

    <section class="workspace [ u-h:100p u-w:100p ]">
        <tabs :files="tabs" :active="current_file"></tabs>
        <editor></editor>
    </section>
</main>

<script src="https://js.pusher.com/3.1/pusher.min.js"></script>
@endsection
