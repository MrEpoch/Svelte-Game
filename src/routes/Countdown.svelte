<script lang="ts">
    export let remaining: number;
    export let duration: number;
</script>

<div class="countdown" >
    <button on:click>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pause-circle</title><path fill="currentColor" d="M15,16H13V8H15M11,16H9V8H11M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
    </button>

    <div class="duration">
        <div class="remaining" style="--p: {remaining / duration}" />
    </div>
</div>

<style>
    .countdown {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    button {
        color: gray;
        height: 1em;
        width: 1em;
        font-size: 8em;
        background: transparent;
        border: none;
    }

    svg {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }

    .duration {
        flex: 1;
        height: 1em;
        background: #ccc;
    }

    .remaining {
        width: calc(100% *  var(--p));
        position: absolute;
        height: 100%;
        background: #999;
    }
</style>
