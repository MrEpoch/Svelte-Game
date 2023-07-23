<script lang="ts">
    import { send } from "./transitions"
    import { get_twemoji_url } from "./utils";
	export let emoji: string;
	export let selected: boolean;
    export let found: boolean;
    export let group: 'a' | 'b';
</script>

<div class="square" class:flipped={selected || found}>
	<button on:click />
        
        <div class="background">

        </div>

    {#if !found}
        <img 
            alt={emoji}
            src={get_twemoji_url(emoji)}
            out:send={{ key: `${emoji}:${group}` }}
        />
    {/if}
</div>

<style>
	.square {
		display: flex;
		justify-content: center;
        align-items: center;
        transition: transform 0.5s;
        transform-style: preserve-3d;
    }

    .flipped {
        transform: rotateY(180deg);
    }

    .background {
        background: white;
        transform: rotateY(180deg);
        backface-visibility: hidden;
        width: 100%;
        height: 100%;
        position: absolute;
        border: 0.5em solid #eee;
        border-radius: 1em;
    }

	button {
		position: absolute;
        border: 0;
        border-radius: 1em;
		width: 100%;
        height: 100%;
        background: #eee;
        font-size: inherit;
        backface-visibility: hidden;
    }

    img {
        height: 6em;
        width: 6em;
        pointer-events: none;
        transform: rotateY(180deg);
        backface-visibility: hidden;
    }

</style>
